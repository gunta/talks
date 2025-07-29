#!/usr/bin/env bun
import { $ } from "bun";

const talksDir = `${import.meta.dir}/../talks`;
const distDir = `${import.meta.dir}/../dist`;

// Ensure dist directory exists using shell
await $`mkdir -p ${distDir}`;

// Get all talk directories using shell
const talks = await $`ls -d ${talksDir}/*/`.text();
const talkDirs = talks
	.trim()
	.split('\n')
	.filter(Boolean)
	.map(path => path.split('/').slice(-2, -1)[0])
	.sort();

console.log(`Found ${talkDirs.length} talks to build`);

// Build each talk
for (const talkDir of talkDirs) {
	const slidesPath = `${talksDir}/${talkDir}/slides.md`;

	// Check if slides.md exists using Bun.file
	const slidesFile = Bun.file(slidesPath);
	if (!(await slidesFile.exists())) {
		console.log(`⚠️  No slides.md found in ${talkDir}, skipping...`);
		continue;
	}

	console.log(`📦 Building ${talkDir}...`);

	try {
		// Build the talk to a specific output directory
		const outputDir = `${distDir}/${talkDir}`;
		await $`slidev build ${slidesPath} --out ${outputDir} --base /talks/${talkDir}/`;

		console.log(`✅ Built ${talkDir} successfully`);
	} catch (error) {
		console.error(`❌ Failed to build ${talkDir}:`, error);
	}
}

console.log("\n🎉 All talks built successfully!");
