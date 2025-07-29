#!/usr/bin/env bun
import { $ } from "bun";

const talksDir = `${import.meta.dir}/../talks`;
const distDir = `${import.meta.dir}/../dist`;

interface TalkInfo {
  name: string;
  title: string;
  date: string;
  path: string;
}

// Extract title from slides.md
async function extractTitle(slidesPath: string): Promise<string> {
  try {
    const file = Bun.file(slidesPath);
    const content = await file.text();

    // Try to find title in frontmatter
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const titleMatch = frontmatterMatch[1].match(/title:\s*(.+)/);
      if (titleMatch) {
        return titleMatch[1].replace(/['"]/g, "").trim();
      }
    }
    // Try to find first # heading
    const headingMatch = content.match(/^#\s+(.+)$/m);
    if (headingMatch) {
      return headingMatch[1].trim();
    }
  } catch (error) {
    console.error(`Failed to read ${slidesPath}:`, error);
  }
  return "Untitled";
}

// Get all talks with their metadata
async function getTalks(): Promise<TalkInfo[]> {
  // Get all talk directories using shell
  const talks = await $`ls -d ${talksDir}/*/`.text();

  const talkDirs = talks
    .trim()
    .split('\n')
    .filter(Boolean)
    .map(path => {
      // Remove trailing slash and get the last part of the path
      const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
      return cleanPath.split('/').pop() || '';
    });

  const talkInfos: TalkInfo[] = [];

  for (const talkDir of talkDirs) {
    const slidesPath = `${talksDir}/${talkDir}/slides.md`;
    const slidesFile = Bun.file(slidesPath);

    if (!(await slidesFile.exists())) {
      continue;
    }

    // Extract date from directory name (YYYY-MM-DD format)
    const dateMatch = talkDir.match(/^(\d{4}-\d{2}-\d{2})/);
    const date = dateMatch ? dateMatch[1] : "Unknown";

    const title = await extractTitle(slidesPath);

    talkInfos.push({
      name: talkDir,
      title,
      date,
      path: `/talks/${talkDir}/`,
    });
  }

  // Sort by date (newest first)
  return talkInfos.sort((a, b) => b.date.localeCompare(a.date));
}

// Generate HTML index page
async function generateIndex() {
  const talks = await getTalks();

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Technical Talks</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #0f0f0f;
      color: #e0e0e0;
      min-height: 100vh;
      padding: 2rem;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .talks-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    .talk-card {
      background: #1a1a1a;
      border: 1px solid #2a2a2a;
      border-radius: 12px;
      padding: 1.5rem;
      transition: all 0.3s ease;
      text-decoration: none;
      color: inherit;
      display: block;
    }
    .talk-card:hover {
      transform: translateY(-4px);
      border-color: #667eea;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
    }
    .talk-date {
      font-size: 0.875rem;
      color: #888;
      margin-bottom: 0.5rem;
    }
    .talk-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #fff;
      line-height: 1.4;
    }
    .talk-name {
      font-size: 0.875rem;
      color: #666;
      margin-top: 0.5rem;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Technical Talks</h1>
    <div class="talks-grid">
      ${talks
      .map(
        (talk) => `
      <a href="${talk.path}" class="talk-card">
        <div class="talk-date">${talk.date}</div>
        <div class="talk-title">${talk.title}</div>
        <div class="talk-name">${talk.name}</div>
      </a>
      `,
      )
      .join("")}
    </div>
  </div>
</body>
</html>`;

  await Bun.write(`${distDir}/index.html`, html);
  console.log("✅ Generated index.html");
}

// Run the generator
await generateIndex();
