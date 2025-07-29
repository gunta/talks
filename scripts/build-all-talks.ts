#!/usr/bin/env bun
import { $ } from "bun";

const talksDir = `${import.meta.dir}/../talks`;
const distDir = `${import.meta.dir}/../dist`;

// Get concurrency from env var or default to 2 (safe for GitHub Actions)
const CONCURRENCY = parseInt(process.env.BUILD_CONCURRENCY || "2", 10);

// Check if we should skip PDF generation (useful in CI to avoid timeouts)
const SKIP_PDF = process.env.SKIP_PDF === "true";

// Ensure dist directory exists using shell
await $`mkdir -p ${distDir}`;

// Get all talk directories using shell
const talks = await $`ls -d ${talksDir}/*/`.text();
const talkDirs = talks
	.trim()
	.split('\n')
	.filter(Boolean)
	.map(path => path.split('/').filter(p => p).pop()!)
	.sort();

console.log(`Found ${talkDirs.length} talks to build`);
console.log(`Building with concurrency: ${CONCURRENCY}`);
console.log(`PDF generation: ${SKIP_PDF ? 'DISABLED' : 'ENABLED'}`);

// Function to build a single talk with retry logic
async function buildTalkWithRetry(talkDir: string, maxRetries = 2): Promise<void> {
	for (let attempt = 1; attempt <= maxRetries; attempt++) {
		try {
			await buildTalk(talkDir);
			return; // Success, exit the retry loop
		} catch (error) {
			if (attempt === maxRetries) {
				throw error; // Final attempt failed, re-throw
			}
			console.log(`⚠️  Attempt ${attempt} failed for ${talkDir}, retrying...`);
			// Wait a bit before retrying (exponential backoff)
			await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
		}
	}
}

// Function to build a single talk
async function buildTalk(talkDir: string): Promise<void> {
	const slidesPath = `${talksDir}/${talkDir}/slides.md`;

	// Check if slides.md exists using Bun.file
	const slidesFile = Bun.file(slidesPath);
	if (!(await slidesFile.exists())) {
		console.log(`⚠️  No slides.md found in ${talkDir}, skipping...`);
		return;
	}

	console.log(`📦 Building ${talkDir}...`);

	try {
		// Build the talk to a specific output directory
		const outputDir = `${distDir}/${talkDir}`;

		// Build command with optional PDF skip
		const buildCmd = SKIP_PDF
			? `slidev build ${slidesPath} --out ${outputDir} --base /talks/${talkDir}/ --without-pdf`
			: `slidev build ${slidesPath} --out ${outputDir} --base /talks/${talkDir}/`;

		await $`${buildCmd}`.quiet();

		console.log(`✅ Built ${talkDir} successfully`);
	} catch (error: any) {
		// Check if it's a timeout error related to PDF generation
		if (error.stderr && error.stderr.includes('Timeout') && error.stderr.includes('page.goto')) {
			console.error(`⏱️  ${talkDir} timed out during PDF generation. Consider using SKIP_PDF=true for talks with large media files.`);
		}
		console.error(`❌ Failed to build ${talkDir}:`, error.message || error);
		throw error; // Re-throw to track failed builds
	}
}

// Function to process talks in chunks
async function processInChunks<T>(items: T[], chunkSize: number, processor: (item: T) => Promise<void>) {
	const results = [];
	const failedTalks: string[] = [];

	for (let i = 0; i < items.length; i += chunkSize) {
		const chunk = items.slice(i, i + chunkSize);
		const chunkResults = await Promise.allSettled(chunk.map(processor));
		results.push(...chunkResults);

		// Track failed talks
		chunkResults.forEach((result, index) => {
			if (result.status === 'rejected') {
				failedTalks.push(chunk[index] as string);
			}
		});

		// Log progress
		const completed = Math.min(i + chunkSize, items.length);
		console.log(`Progress: ${completed}/${items.length} talks processed`);
	}

	return { results, failedTalks };
}

// Build all talks with concurrency control
const startTime = performance.now();
const { results, failedTalks } = await processInChunks(talkDirs, CONCURRENCY, buildTalkWithRetry);

// Count successes and failures
const succeeded = results.filter(r => r.status === 'fulfilled').length;
const failed = results.filter(r => r.status === 'rejected').length;

const endTime = performance.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

console.log("\n" + "=".repeat(50));
console.log(`✅ Successfully built: ${succeeded} talks`);
if (failed > 0) {
	console.log(`❌ Failed to build: ${failed} talks`);
	console.log(`Failed talks: ${failedTalks.join(', ')}`);
	if (!SKIP_PDF) {
		console.log(`\n💡 Tip: If builds are timing out, try setting SKIP_PDF=true`);
	}
}
console.log(`⏱️  Total time: ${duration}s`);
console.log("=".repeat(50));

// Exit with error code if any builds failed
if (failed > 0) {
	process.exit(1);
}
