AI SDK supports creating MCP clients

Model Context Protocol (MCP) client support allows your app to connect to hundreds of pre-built tools: GitHub, Slack, filesystem operations, and more.

Your users can also build and connect their own custom MCP servers to extend your application's functionality.

---

Model Context Protocol (MCP) Clients
The AI SDK now supports the Model Context Protocol (MCP), an open standard that connects your applications to a growing ecosystem of tools and integrations. With MCP support, you can access hundreds of pre-built tools (”servers”) that add powerful functionality to your application. Some popular MCP servers include:

GitHub - manage repositories, issues, and pull requests

Slack - send messages and interact with workspaces

Filesystem - Secure file operations with configurable access controls

As MCP is an open-protocol, your users can also build and connect their own custom MCP servers to extend your applications functionality as needed. MCP has many use cases, but is particularly powerful for local code automation.

The SDK supports connecting to MCP servers via either stdio (for local tools) or SSE (for remote servers). Once connected, you can use MCP tools directly with the AI SDK:

```typescript
import { experimental_createMCPClient as createMCPClient } from 'ai';
import { openai } from '@ai-sdk/openai';

const mcpClient = await createMCPClient({
  transport: {
    type: 'sse',
    url: 'https://my-server.com/sse',
  },
});

const response = await generateText({
  model: openai('gpt-4o'),
  tools: await mcpClient.tools(), // use MCP tools
  prompt: 'Find products under $100',
});
```