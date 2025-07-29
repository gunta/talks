#!/usr/bin/env bun
import { $ } from "bun";

const talksDir = `${import.meta.dir}/../talks`;
const distDir = `${import.meta.dir}/../dist`;

// Get concurrency from env var or default to 2 (safe for GitHub Actions)
const CONCURRENCY = parseInt(process.env.BUILD_CONCURRENCY || "4", 10);

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
		await $`slidev build ${slidesPath} --out ${outputDir} --base /talks/${talkDir}/`.quiet();

		console.log(`✅ Built ${talkDir} successfully`);
	} catch (error) {
		console.error(`❌ Failed to build ${talkDir}:`, error);
		throw error; // Re-throw to track failed builds
	}
}

// Function to process talks in chunks
async function processInChunks<T>(items: T[], chunkSize: number, processor: (item: T) => Promise<void>) {
	const results = [];
	for (let i = 0; i < items.length; i += chunkSize) {
		const chunk = items.slice(i, i + chunkSize);
		const chunkResults = await Promise.allSettled(chunk.map(processor));
		results.push(...chunkResults);

		// Log progress
		const completed = Math.min(i + chunkSize, items.length);
		console.log(`Progress: ${completed}/${items.length} talks processed`);
	}
	return results;
}

// Build all talks with concurrency control
const startTime = performance.now();
const results = await processInChunks(talkDirs, CONCURRENCY, buildTalk);

// Count successes and failures
const succeeded = results.filter(r => r.status === 'fulfilled').length;
const failed = results.filter(r => r.status === 'rejected').length;

const endTime = performance.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

console.log("\n" + "=".repeat(50));
console.log(`✅ Successfully built: ${succeeded} talks`);
if (failed > 0) {
	console.log(`❌ Failed to build: ${failed} talks`);
}
console.log(`⏱️  Total time: ${duration}s`);
console.log("=".repeat(50));

// Exit with error code if any builds failed
if (failed > 0) {
	process.exit(1);
}
