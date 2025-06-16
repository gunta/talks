# AGENT.md - Talks Repository

## Build/Test/Development Commands
- `bun i` - Install dependencies
- `bun dev` - Interactive picker to select and run a talk in dev mode
- `bun today` - Run the current talk (talks/2025-06-06-cursor-meetup/slides.md)
- `slidev --open talks/{date}/slides.md` - Run specific talk by date
- `bun run format` - Format code with Biome
- `bun run lint` - Lint code with Biome
- `bun run build` - Build current talk
- `bun run export` - Export slides to PDF
- `bun run clean` - Clean dist directory

## Architecture
This is a Slidev-based presentation repository with talks organized by date in `talks/` directory. Uses Bun as runtime and Biome for formatting/linting. Custom Vue layouts and components are in individual talk directories.

## Code Style
- Uses Biome for formatting and linting (configured in biome.json)
- TypeScript for scripts
- Vue 3 for custom components
- ESM modules (type: "module")
- Organize imports enabled
- kebab-case for file names
- PascalCase for Vue components
