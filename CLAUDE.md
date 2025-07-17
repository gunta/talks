# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Slidev-based presentation repository containing technical talks organized chronologically. Each talk is self-contained with its own slides, assets, and sometimes custom Vue components or layouts.

## Build/Test/Development Commands

### Primary Commands
- `bun i` - Install dependencies
- `bun dev` - Interactive picker to select and run a talk in dev mode
- `bun today` - Run the current talk (configured in package.json)
- `bun run lint` - Lint code with Biome
- `bun run format` - Format code with Biome

### Talk-Specific Commands
- `slidev --open talks/{YYYY-MM-DD-name}/slides.md` - Run a specific talk by date
- `bun run build` - Build current talk (as configured in package.json)
- `bun run export` - Export slides to PDF
- `bun run clean` - Clean dist directory

## High-Level Architecture

### Directory Structure
- `/talks/` - All presentations organized by date (YYYY-MM-DD-name format)
  - Each talk directory contains:
    - `slides.md` - Main presentation file
    - `public/` - Static assets (images, videos)
    - `layouts/` - Custom Vue layouts (optional)
    - `styles/` - Custom CSS (optional)
    - Additional markdown files for slide segments

### Technology Stack
- **Runtime**: Bun (not Node.js)
- **Framework**: Slidev (Vue-based presentation framework)
- **Linting/Formatting**: Biome (not ESLint/Prettier)
- **TypeScript**: For scripts and components
- **Vue 3**: For custom components and layouts

### Key Patterns
1. **Talk Selection**: The `scripts/picker-bun.ts` provides an interactive CLI to select talks
2. **Slide Organization**: Large presentations are split across multiple markdown files
3. **Custom Components**: Vue components can be defined in talk-specific `layouts/` directories
4. **Assets**: Media files go in talk-specific `public/` directories

## Code Style Guidelines
- ESM modules (type: "module" in package.json)
- Biome for formatting and linting (see biome.json)
- File naming: kebab-case for files, PascalCase for Vue components
- Organize imports enabled in Biome
- TypeScript for all scripts

## Development Workflow
1. Create a new talk directory: `talks/YYYY-MM-DD-topic-name/`
2. Add `slides.md` as the entry point
3. Use `bun dev` to select and run your talk
4. Add assets to `public/` within your talk directory
5. Run `bun run lint` and `bun run format` before committing