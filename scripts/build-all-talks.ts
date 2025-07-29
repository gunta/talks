#!/usr/bin/env bun
import { $ } from "bun";
import { existsSync, mkdirSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

const talksDir = join(import.meta.dir, "../talks");
const distDir = join(import.meta.dir, "../dist");

// Ensure dist directory exists
if (!existsSync(distDir)) {
	mkdirSync(distDir, { recursive: true });
}

// Get all talk directories
const talks = await readdir(talksDir, { withFileTypes: true });
const talkDirs = talks
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name)
	.sort();

console.log(`Found ${talkDirs.length} talks to build`);

// Build each talk
for (const talkDir of talkDirs) {
	const slidesPath = join(talksDir, talkDir, "slides.md");

	// Check if slides.md exists
	if (!existsSync(slidesPath)) {
		console.log(`⚠️  No slides.md found in ${talkDir}, skipping...`);
		continue;
	}

	console.log(`📦 Building ${talkDir}...`);

	try {
		// Build the talk to a specific output directory
		const outputDir = join(distDir, talkDir);
		await $`slidev build ${slidesPath} --out ${outputDir} --base /talks/${talkDir}/`;

		console.log(`✅ Built ${talkDir} successfully`);
	} catch (error) {
		console.error(`❌ Failed to build ${talkDir}:`, error);
	}
}

console.log("\n🎉 All talks built successfully!");
