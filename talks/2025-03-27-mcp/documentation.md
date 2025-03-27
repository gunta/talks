# Introducing Mastra MCP Documentation server
@mastra_ai’s MCP documentation server: turn any AI assistant or IDE that has MCP support

It allows you to interact with your IDE and assume that it already knows everything about Mastra, for ex:
• "Add evals to my agent and then write tests"
• "How does Mastra work with the AI SDK?"
• "I'm running into a bug with memory, are there any recent related bug fixes?"

The docs server can be used in any AI powered IDE that supports MCP. When scaffolding a new Mastra project with `pnpm create mastra@latest` you can choose automatic setup for 
@cursor_ai
 and 
@windsurf_ai
 , or you can configure manually. 

 ---

 ---
title: "Using with Cursor/Windsurf | Getting Started | Mastra Docs"
description: "Learn how to use the Mastra MCP documentation server in your IDE to turn it into an agentic Mastra expert."
---

import YouTube from "../../../components/youtube";

# Mastra Tools for your agentic IDE

`@mastra/mcp-docs-server` provides direct access to Mastra's complete knowledge base in Cursor, Windsurf, Cline, or any other IDE that supports MCP.

It has access to documentation, code examples, technical blog posts / feature announcements, and package changelogs which your IDE can read to help you build with Mastra.

<YouTube id="vciV57lF0og" />

The MCP server tools have been designed to allow an agent to query the specific information it needs to complete a Mastra related task - for example: adding a Mastra feature to an agent, scaffolding a new project, or helping you understand how something works.

## How it works

Once it's installed in your IDE you can write prompts and assume the agent will understand everything about Mastra.

### Add features

- "Add evals to my agent and write tests"
- "Write me a workflow that does the following `[task]`"
- "Make a new tool that allows my agent to access `[3rd party API]`"

### Ask about integrations

- "Does Mastra work with the AI SDK?
  How can I use it in my `[React/Svelte/etc]` project?"
- "What's the latest Mastra news around MCP?"
- "Does Mastra support `[provider]` speech and voice APIs? Show me an example in my code of how I can use it."

### Debug or update existing code

- "I'm running into a bug with agent memory, have there been any related changes or bug fixes recently?"
- "How does working memory behave in Mastra and how can I use it to do `[task]`? It doesn't seem to work the way I expect."
- "I saw there are new workflow features, explain them to me and then update `[workflow]` to use them."

**And more** - if you have a question, try asking your IDE and let it look it up for you.

## Automatic Installation

Run `pnpm create mastra@latest` and select Cursor or Windsurf when prompted to install the MCP server. For other IDEs, or if you already have a Mastra project, install the MCP server by following the instructions below.

## Manual Installation

- **Cursor**: Edit `.cursor/mcp.json` in your project root, or `~/.cursor/mcp.json` for global configuration
- **Windsurf**: Edit `~/.codeium/windsurf/mcp_config.json` (only supports global configuration)

Add the following configuration:

### MacOS/Linux

```json
{
  "mcpServers": {
    "mastra": {
      "command": "npx",
      "args": ["-y", "@mastra/mcp-docs-server@latest"]
    }
  }
}
```

### Windows

```json
{
  "mcpServers": {
    "mastra": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "@mastra/mcp-docs-server@latest"]
    }
  }
}
```

## After Configuration

### Cursor

1. Open Cursor settings
2. Navigate to MCP settings
3. Click "enable" on the Mastra MCP server
4. If you have an agent chat open, you'll need to re-open it or start a new chat to use the MCP server

### Windsurf

1. Fully quit and re-open Windsurf
2. If tool calls start failing, go to Windsurfs MCP settings and re-start the MCP server. This is a common Windsurf MCP issue and isn't related to Mastra. Right now Cursor's MCP implementation is more stable than Windsurfs is.

In both IDEs it may take a minute for the MCP server to start the first time as it needs to download the package from npm.

## Available Agent Tools

### Documentation

Access Mastra's complete documentation:

- Getting started / installation
- Guides and tutorials
- API references

### Examples

Browse code examples:

- Complete project structures
- Implementation patterns
- Best practices

### Blog Posts

Search the blog for:

- Technical posts
- Changelog and feature announcements
- AI news and updates

### Package Changes

Track updates for Mastra and `@mastra/*` packages:

- Bug fixes
- New features
- Breaking changes

## Common Issues

1. **Server Not Starting**

   - Ensure npx is installed and working
   - Check for conflicting MCP servers
   - Verify your configuration file syntax
   - On Windows, make sure to use the Windows-specific configuration

2. **Tool Calls Failing**
   - Restart the MCP server and/or your IDE
   - Update to the latest version of your IDE