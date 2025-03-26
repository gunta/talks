[Blog](https://mastra.ai/blog)

# Why We're All-In on MCP

Mar 5, 2025

[\# announcements](https://mastra.ai/tags/announcements) [\# tools](https://mastra.ai/tags/tools)

Tool integration for AI agents is a mess.
Even for developers building agents every day, it's frustrating to navigate the fragmented ecosystem. Finding high-quality tools is difficult - search for "MCP Calendar integration" and you'll find ten different implementations with no way to know which one is best.

If you've ever tried to integrate tools with an LLM, you know this pain. Tool discovery, installation, and configuration aren't solved problems yet.

At Mastra we've been going deep on this topic to find the best solution for our users. So lets talk about agent tool standards and why we believe Anthropic's Model Context Protocol (MCP) is the **future of agent-tool interaction.**

## Emerging Tool Standards

As with any new technology space, several competing approaches are emerging:

### [Agents.json](https://docs.wild-card.ai/agentsjson/introduction) by Wildcard

Agents.json is an open specification that extends OpenAPI to optimize API interactions for LLMs. Built by [Wildcard AI](https://wild-card.ai/), it addresses a fundamental challenge in the agent ecosystem: the disconnect between how APIs are designed for developers versus what LLMs need to use them effectively.

Agents.json solves the problem of LLMs struggling with complex API sequences. Instead of requiring API providers to create new agent-specific endpoints or infrastructure, it enriches existing API endpoints with the context LLMs need to execute reliable chains of actions.

### [Composio](https://composio.dev/)

Composio has its own tool specification and a comprehensive library of pre-built integrations. Until recently, Composio was primarily an option for teams prioritizing immediate access to quality tools over architectural flexibility, with potential concerns about ecosystem lock-in due to its closed-source components. However, Composio [just announced](https://x.com/composiohq/status/1896968949654495291) they've added MCP support to their existing platform. This means teams can now choose to use either Composio's native specification or the MCP standard when working with their tool ecosystem.

### [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction)

MCP’s strength is in it being an open standard, stewarded by Anthropic, but made for and with the help of the OSS community.

MCP is like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect devices to various peripherals, MCP provides a standardized interface for connecting LLMs to external data sources and tools.

## The Current Challenges with MCP

MCP as a protocol is technically impressive, but the ecosystem around it faces three main challenges:

1. **Discovery**: There's no centralized or standardized way to find MCP tools. Each provider is building their own discovery mechanism, creating fragmentation.
2. **Quality**: With no centralized registry or verification process, tool quality varies dramatically. There's no equivalent of NPM’s package scoring or verification badges.
3. **Configuration**: Each provider has its own configuration schema and APIs, making it difficult for frameworks to provide a consistent setup experience without creating provider-specific abstractions.

As Shopify CEO Tobi Lütke [recently pointed out](https://x.com/tobi/status/1891137636720419191), while MCP has enormous potential as "the USB-C of LLM tools," it's still incomplete. To follow his analogy, MCP currently defines the cable and wire protocol but is missing the plug.

The community is actively addressing these challenges. Two important discussions are happening in the MCP GitHub repository:

- [Official Registry Specification](https://github.com/orgs/modelcontextprotocol/discussions/159): A standard for how registries should work
- [`.well-known/mcp.json` Directory Specification](https://github.com/orgs/modelcontextprotocol/discussions/84): A standard for decentralized MCP server discovery

## Insights from Ecosystem Leaders

To go deeper, we met with the companies pushing the MCP world forward: Andy Qin from [OpenTools](https://opentools.com/), Tadas Antanavicius from [PulseMCP](https://www.pulsemcp.com/), Steve Manuel from [MCP.run](https://www.mcp.run/), and Henry Mao from [Smithery](https://smithery.ai/).

Each company is solving different parts of the MCP puzzle rather than competing directly:

- OpenTools is focusing on search and curation to complement the new official registry
- PulseMCP provided insights on how registry consolidation will reduce redundant work for registries
- MCP.run is building secure, performant MCP hosting through WebAssembly and will support the new MCP registry APIs
- Smithery brings practical implementation experience from Henry's previous success with [Jenni.ai](http://jenni.ai/) and will also support the new MCP APIs

## Why We're Betting on MCP

After evaluating the landscape of AI tool integration standards, we believe MCP offers compelling advantages:

1. **Open Standard**: MCP is designed as an industry-wide protocol rather than a proprietary solution, allowing for implementation without vendor lock-in.
2. **Industry Adoption**: Notable companies have implemented MCP in production, including Zed, Replit, Codeium/Windsurf, Sourcegraph, Cursor, and Block/Square.
3. **Ecosystem Compatibility**: MCP's architecture allows other standards to implement bridge servers (as demonstrated by Composio's recent integration), providing flexibility as the ecosystem evolves.
4. **Active Development**: The community is addressing current limitations through the proposed [official registry](https://github.com/orgs/modelcontextprotocol/discussions/159) and [`.well-known/mcp.json`](https://github.com/orgs/modelcontextprotocol/discussions/84) specifications.

## Market Perspectives on MCP

The broader ecosystem shows promising signs of momentum:

Nik Pash, Head of Operations at Cline, [outlined what he calls "the MCP domino effect"](https://x.com/pashmerepat/status/1894074058490384643), describing how companies who ignored MCP "are about to have a rude awakening" as more businesses release official servers and users grasp the power of seamless AI integrations.

Pash also [highlighted the entrepreneurial opportunity](https://x.com/pashmerepat/status/1896646892211294372), noting that building and monetizing MCP servers represents an "insane opportunity right now" with "no competition, wide open space, and VCs begging to throw money at solo founders who get there first".

While there are problems today, they’re in the process of being solved, and MCP is looking like it’s about to have it’s moment.

## Our Proposal: Framework-Friendly MCP

As part of our research we built a proof-of-concept for how agent frameworks could interact with MCP registries.

### 1\. Registry Client

Frameworks need a standardized client implementation to interact with tool registries so they can introspect metadata about the registry, its available servers, and query for MCP server schemas.

```tsx
import { RegistryClient } from "@mcp/registry";

const registry = new RegistryClient({
  url: "https://example-tools.com/.well-known/mcp.json",
});

const directory = await registry.connect();
console.log("Connected to registry:", directory.name, directory.homepage);

const allServers = await registry.listServers();
console.log("\nAvailable servers:", allServers);
```

### 2\. Server Definition for Configuration and Validation

Each MCP server should expose its configuration schema with a standard format:

```tsx
// look up a server definition from a registry
const stripeServer = await registry.getServerDefinition({ id: "stripe" });
// use the servers schema to build a configuration UI
const userInput = await example.buildServerUI(stripeServer.schemas);
// validate that the user input is correct for the server definition
const validConfig = stripeServer.parseConfig(userInput);
```

This pattern enables frameworks to build dynamic UIs and validate configurations before attempting to connect to MCP servers.

These primitives could be used to build registry UIs, hosted configuration UIs, CLIs, framework abstractions, `npm link` or `verdaccio`-like local dev experiences, and more.

### Framework-Level Configuration

We plan to build on top of the `mcp.json` specification to expose an API to connect to any registry that implements the spec.

After connecting to a registry, users will have IDE autocompletions for the available servers and configurations via some [gql.tada-like magic](https://gql-tada.0no.co/).

```tsx
import { MCPConfiguration } from "@mastra/mcp";

const configuration = new MCPConfiguration({
  registry: "https://mcp.run/.well-known/mcp.json",
  servers: {
    googleCalendar: {
      // <- IDE autocomplete via TypeScript for the Google calendar MCP server
    },
    // <- autocomplete all available servers for the connected registry
  },
});
```

Using the MCP configuration would then involve passing it into a Mastra agent

```tsx
// get connected MCP clients for the configuration
const toolsets = await configuration.getConnectedTools();

const response = await agent.stream(prompt, {
  toolsets, // <- pass to your agents to make those tools available
});
```

Our code for this proof-of-concept is available [in the Mastra monorepo on Github](https://github.com/mastra-ai/mastra/blob/main/explorations/mcp-registry-client/README.md).

## Using MCP with Mastra Today

While our proof-of-concept registry client is still in development, you can already connect Mastra to any MCP server through our `MastraMCPClient` API. This provides access to the MCP ecosystem without waiting for the registry infrastructure to mature.

### Connecting to Stdio MCP Servers

Here's how you can connect to an MCP server that uses [stdio transport](https://modelcontextprotocol.io/docs/concepts/transports#standard-input%2Foutput-stdio):

```tsx
import { Agent } from "@mastra/core/agent";
import { MastraMCPClient } from "@mastra/mcp";
import { anthropic } from "@ai-sdk/anthropic";

// Sequential Thinking server as an example:
// https://smithery.ai/server/@smithery-ai/server-sequential-thinking
// Initialize the MCP client
const sequentialThinkingClient = new MastraMCPClient({
  name: "sequential-thinking",
  server: {
    command: "npx",
    args: ["-y", "@modelcontextprotocol/server-sequential-thinking"],
  },
});

// Create a Mastra Agent
const agent = new Agent({
  name: "Reasoning agent",
  instructions:
    "You solve problems by breaking them down into sequential steps. Use the sequential thinking tool to walk through your reasoning process step by step.",
  model: anthropic("claude-3-5-sonnet-latest"),
});

try {
  // Connect to the MCP server
  await sequentialThinkingClient.connect();

  // Get available tools
  const sequentialThinkingTools = await sequentialThinkingClient.tools();

  // Use the agent with the Sequential Thinking tool
  const response = await agent.stream(
    "Design a system for optimizing delivery routes for a small local delivery business with 5 drivers and approximately 100 deliveries per day.",
    {
      toolsets: {
        sequentialThinking: sequentialThinkingTools,
      },
    },
  );

  for await (const part of response.fullStream) {
    switch (part.type) {
      case "error":
        console.error(part.error);
        break;
      case "text-delta":
        process.stdout.write(part.textDelta);
        break;
      case "tool-call":
        console.info(`\n-> Tool call: ${part.toolName}\n`);
    }
  }
} finally {
  // Always disconnect when done
  await sequentialThinkingClient.disconnect();
}
```

### Connecting to SSE MCP Servers

For MCP servers that use [Server-Sent Events (SSE)](https://modelcontextprotocol.io/docs/concepts/transports#server-sent-events-sse), you can connect by passing the URL of the server:

```tsx
// Initialize the MCP client using an SSE server
const sseClient = new MastraMCPClient({
  name: "sse-client",
  server: {
    url: new URL("https://your-mcp-server.com/sse"),
    // Optional fetch request configuration
    requestInit: {
      headers: {
        Authorization: "Bearer your-token",
      },
    },
  },
});

// The rest of the usage is identical to the Stdio example

```

## The Future of MCP and Mastra

We're committed to making MCP integration seamless in Mastra. Our roadmap includes:

1. Building a standardized installation and configuration flow for MCP servers using `.well-known/mcp.json`
2. Adding support for new MCP features as the spec evolves
3. Creating primitives that make it easy to discover, install, and configure MCP servers

The current state of tool integration for AI agents is reminiscent of the early days of package management. Just as `npm install` transformed JavaScript package management, MCP can transform how AI agents interact with the world. By standardizing on MCP, we can create an ecosystem where tools are easy to discover, configure, and use securely.

### Author

[![](https://mastra.ai/authors/tyler.png)\\
Tyler Barnes](https://mastra.ai/authors/tyler-barnes)

