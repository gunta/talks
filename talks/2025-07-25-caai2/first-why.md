# Why MCP is useful: An introduction to MCP for skeptics | Speakeasy

You’re right to be skeptical about the Model Context Protocol (MCP). From the outside, it looks like word salad, and it arrived on the heels of the hyped-up AI darlings known as “vibe coding” and “agentic”. If you’ve dared to poke around, you’re probably left with the feeling that it’s a Rube Goldberg machine, and everyone’s either in on the joke or dazzled by the complexity.

Developers love shiny complexity, but anyone who lived through the early internet’s immature, brittle protocols and torturous RPC standards knows to hit the brakes when YouTube talking heads sing a new protocol’s praises in unison.

This skepticism and care shouldn’t end at MCP, though. The entire generative AI ecosystem is rife with complexity and potential pitfalls. To quote the sagely Samuel Colvin (of Pydantic):

> From a software engineer’s point of view, you can think of LLMs as the worst database you’ve ever heard of, but worse. If LLMs weren’t so bloody useful, we’d never touch them.

Well, if MCP servers weren’t so bloody useful, we’d never touch them either!

We believe MCP will eventually enable powerful AI agent ecosystems, but we’re not here to evangelize. The protocol adds genuine complexity and operational overhead that isn’t justified for many use cases. Function calls or REST APIs are often the simpler, better choice.

But there are specific scenarios where MCP’s architecture genuinely shines - where its standardized discovery, stateful sessions, and cross-platform compatibility solve problems that are painful with alternatives. MCP servers like Desktop Commander and Playwright MCP demonstrate this: they turn any LLM into a powerful automation tool for desktop and web interactions that would require significant custom development otherwise.

The question isn’t whether MCP is inherently good or bad - it’s whether its benefits justify the complexity for your specific needs. Let’s start by acknowledging the legitimate criticisms, then examine exactly when MCP’s complexity pays off.

## What people think about MCP

> This has made a lot of people very angry and been widely regarded as a bad move.
>
> - Douglas Adams

Polarized doesn’t begin to describe the reaction to MCP on the internet. The extremes appear to fall into four clear camps:

1. **The “everything about this sucks” naysayers.** Here are a few highlights from our favorite orange site:

    > MCP is a kitchen sink of anti-patterns. There’s no way it’s not forgotten in a year, just like Langchain will be.

    > It’s a half-baked, rushed out, speculative attempt to capture developer mindshare and establish an ecosystem/moat early in a (perceived) market.

2. **The deliberately obtuse.** I won’t quote these commenters for being ignorant, but you know the people who say, “I can’t get my head around this, so it must be useless.” I believe some of this group’s resistance is driven by the viscerally negative reaction of the naysayers. This one includes the “Isn’t this just an OpenAPI spec?”, “Why not just use REST?”, and “I have yet to see one compelling use case” crowds.

3. **The builders who use MCP to get things done _now_ or help fix what’s broken in the spec.** Think of David Cramer learning MCP while building the Sentry MCP server in public - or Samuel Colvin, Armin Ronacher, the developers from Cloudflare, LangChain, Vercel, and others enthusiastically (and in record time) helping to review updates to the MCP Specification. This includes the hackers (the best kind) and tinkerers who built more than 15,000 MCP servers over the past six to eight months.

4. **Vendors and tooling companies.** We’re in this group - we build a platform that generates MCP servers from existing APIs. This gives us a front-row seat to both MCP’s potential and its implementation challenges, which we’ll share honestly. We have a biased perspective, of course, but that perspective comes from solving real problems developers face with MCP implementation.

## MCP’s naysayers and the deliberately obtuse

We get it. MCP is complex, and the spec is still evolving. But let’s address some common criticisms head-on. I know this first one looks like a straw man, but we’ve seen it more than once:

### “But MCP is just another API wrapper”

Yes, it’s a wrapper.

But the underlying API can be just about anything: a database, a web service, a file system, or even a custom tool. MCP servers wrap these APIs in a way that makes them predictable from the LLM client’s perspective. The point is that client code is not tied to a specific API implementation.

The problem with calling it “just” another API wrapper is that you ignore the benefits of the protocol’s design:

- **Standardized communication:** MCP defines a consistent way for clients to interact with servers, regardless of the underlying API. This means you can swap out servers without changing client code.
- **Dynamic tool discovery:** When you connect Claude to a project management MCP server, it can discover available tools at runtime - “Oh, this workspace has custom fields for priority and sprint. I can filter by those.” The LLM adapts to what’s available rather than failing on hardcoded function calls.
- **Bidirectional communication:** MCP servers can send messages back to the LLM client, allowing it to react to events in real time. For example, a database MCP server can notify the MCP client when a new record is added (via the MCP `notifications/resources/list_changed` message), allowing the LLM client to update context without needing to poll or re-query.
- **Session management across tools:** An LLM helping with data analysis can maintain an authenticated session with your database, keep a Jupyter Notebook kernel running, and preserve Matplotlib figure states - all simultaneously. This benefit is most apparent when you consider an MCP server that wraps a web browser. The MCP server can maintain the state of the browser session, allowing the LLM to interact with web pages as if it were a human user.

If you broaden your definition of “API” beyond web services, a protocol like MCP becomes essential.

**In short:**

We need a protocol that provides a consistent way to interact with tools and services, regardless of their underlying implementation.

❌ The definition of API, as used by critics of MCP, is too narrow and limited to web services. APIs vary too widely to be pigeonholed into a single category.

✅ MCP, as a wrapper, provides clients with a standardized interface, dynamic tool discovery, bidirectional communication, and session management across tools.

### ”Why use MCP instead of REST, OpenAPI, or agents.json?”

REST excels at CRUD operations, and it saved us from the horrors of RPC, so why are we reinventing the wheel, or worse, driving in reverse?

The difference is that most of the time, agents are not doing CRUD operations. They often need to perform multistep actions on remote and local services combined, while maintaining state and context.

For example, the Playwright MCP server allows LLMs to interact with web pages as if they were human users. It enables complex interactions like filling out forms, clicking buttons, and navigating pages, all while maintaining context about the user’s session. Achieving this without a stateful protocol like MCP would drive anyone to madness. This is simply not something you can do with REST or OpenAPI.

We’ve seen the AGPL-licensed agents.json Specification mentioned as an alternative to MCP, but it doesn’t have nearly the same capabilities. For the same reasons that REST is not a good fit for complex interactions, agents.json falls short. agents.json only solves the problem of remote tool discovery and invocation, but it doesn’t provide the session management, dynamic tool discovery, or bidirectional communication that MCP does.

**In short:**

The problems LLMs solve often require stateful interactions with tools and services, not just simple CRUD operations.

#### REST, OpenAPI, and agents.json

REST, OpenAPI, and agents.json are stateless and unidirectional. The LLM client would need to manage state and rely on polling or re-querying to maintain context.

#### MCP

MCP is stateful, dynamic, and bidirectional. It allows LLMs to interact with tools and services in a way that maintains context and state across multiple interactions.

### ”Why not just use function calls instead of MCP?”

Native LLM function calling already enables tool use. Why add MCP?

This is a common and completely valid question. Function calling is often much simpler to implement than MCP, but here’s where the architectural differences matter:

With function calls, all integration logic lives in the LLM client and extends both ways - to the LLM (with proprietary function call interfaces) and the external services. Want to add Slack integration? The LLM client needs Slack-specific authentication, error handling, rate limiting, and response parsing. Want database access? Add database drivers, connection pooling, and SQL validation to the LLM client. Every new integration bloats the LLM client with tool-specific code.

Yes, you could abstract the detail away with a library, but we’d still end up with custom implementations for each service, LLM, and client combination. This leads to a tangled mess of code that is hard to maintain, test, and scale.

With MCP, the MCP client speaks one protocol to any number of specialized servers. Adding Slack means deploying a Slack MCP server - no client changes required. It’s a plugin architecture that separates concerns: The MCP client handles conversation, MCP servers handle tool execution, and the protocol manages communication between them.

#### Function calls

All integration logic lives in the LLM client. Each new service requires client-side implementation.

#### MCP

The MCP client speaks one protocol to multiple specialized servers. New integrations require no client changes.

The architectural difference becomes clear when visualized:

A function-calling architecture diagram shows user, LLM client, and LLM components with direct connections to external services (Internet, Database, Mail Server, RabbitMQ). The LLM client contains all integration logic for parsing responses, handling errors, and managing API-specific concerns.

**Function calls:** All integration logic lives in the LLM client. Each new service requires client-side implementation.

An MCP architecture diagram shows user, LLM client, and LLM components connected through MCP to dedicated MCP servers. Each MCP server handles specific service integrations (Browser, Database, Email, RabbitMQ) with SDK validation, maintaining clean separation between client and integration logic.

**MCP:** The MCP client speaks one protocol to multiple specialized servers. New integrations require no client changes.

#### Function calls

Each LLM provider has its own function call interface, leading to vendor lock-in and limited portability.

#### MCP

The MCP protocol is vendor-agnostic and portable. Any LLM client that supports MCP can connect to any MCP server.

This isn’t about capability - it’s about managing complexity at scale. Function calls hide the complexity until it’s too late. MCP acknowledges and contains it from the start.

Consider the classic “What’s the weather like in Paris?” example:

With function calling, the LLM client would need to handle each LLM provider’s function call interface, for example:

Using Anthropic’s Python SDK:

```python
import anthropic
client = anthropic.Anthropic()
response = client.messages.create(
  model="claude-opus-4-20250514",
  max_tokens=1024,
  tools=[
    {
      "name": "get_weather",
      "description": "Get the current weather in a given location",
      "input_schema": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "The city and state, e.g. San Francisco, CA",
          }
        },
        "required": ["location"],
      },
    }
  ],
  messages=[{"role": "user", "content": "What's the weather like in Paris?"}],
)
print(response)
```

Using OpenAI’s SDK:

```python
from openai import OpenAI
import json
client = OpenAI()
response = client.responses.create(
  model="gpt-4.1",
  input=input_messages,
  tools=[
    {
      "type": "function",
      "name": "get_weather",
      "description": "Get the current weather in a given location",
      "parameters": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string"
          }
        },
        "required": ["location"],
        "additionalProperties": False
      },
      "strict": True
    }
  ],
  input=[{"role": "user", "content": "What's the weather like in Paris?"}]
)
print(response)
```

Note the subtle differences in how each provider defines the function. The complexity of function calling grows with each new provider, and the LLM client becomes tightly coupled to specific implementations. This makes it hard to switch providers or reuse code across different LLMs.

If you’re only using one LLM provider in your application, and you don’t expect to add more, then function calls are a perfectly valid choice. But if you want to build a portable, reusable client that can work with any LLM provider, MCP is the way to go.

### ”MCP is just a bad, terrible, no-good excuse for a protocol”

Yes, we’ve seen the hot takes. MCP is “over-engineered,” “unnecessarily complex,” and “solving problems that don’t exist.” One particularly spicy commenter called it “a kitchen sink of anti-patterns” destined to be forgotten within a year.

Let’s address the elephant in the room: MCP _is_ complex. It uses JSON-RPC 2.0 over `stdio`, SSE, or “Streamable HTTP”. It has its own transport negotiation, capability advertisement, and session management. If you squint, it looks like someone reinvented the Language Server Protocol (LSP) but made it worse.

Could MCP have used REST with webhooks? Sure, if they were all hosted publicly. Could it have been “HTTP” instead of the much-derided `stdio`? Absolutely. But `stdio` is so well-supported and easy to implement that it makes complete sense for local servers.

Another common complaint is the omission of WebSocket support. Yes, MCP doesn’t use WebSocket, but it does use Streamable HTTP - a new protocol that allows for streaming responses over HTTP while maintaining the request-response model. This is a design choice, not an oversight.

Using WebSocket brings its own complexities, and getting stuck on the “WebSocket vs HTTP” debate misses the point. MCP is about enabling dynamic, stateful interactions between LLMs and tools, not about picking your favorite transport layer.

We’re not saying MCP is perfect. The specification is under active development, the tooling is immature, and yes, the initial learning curve is steep. But dismissing it as “over-engineered” often comes from people who haven’t grappled with the actual problems it solves. Once the SDKs mature and best practices emerge, much of this complexity will be abstracted away - just like nobody complains about TCP’s three-way handshake anymore.

### ”The S in MCP is for security”

Ah yes, security - MCP’s favorite talking point. By now, you’ve probably seen the breathless blog posts about “Tool Poisoning Attacks” and “Full-Schema Poisoning” complete with scary diagrams and proof-of-concept exploits.

**MCP servers are code you run on your machine.** Shocking revelation - if you run malicious code, bad things happen. This isn’t a protocol vulnerability, it’s basic hygiene.

The discovered “vulnerabilities” essentially boil down to:

- If you connect to a malicious MCP server, it can trick your LLM into doing bad things.
- If an MCP server changes its behavior after you’ve approved it (a “rug pull”), your LLM might leak sensitive data.
- If you paste untrusted data into tool descriptions, the LLM might follow those instructions.

In other news, if you install a malicious npm package, it can delete your files. If you `pip install` from a sketchy source, it might mine cryptocurrency. If you `curl | bash` from the internet… well, you get the idea.

Yes, MCP has unique attack vectors because LLMs process tool descriptions as instructions. That’s concerning and worth addressing. But the “MCP is fundamentally insecure” takes miss the forest for the trees. The real security model is the same as any code execution environment: **Don’t run code you don’t trust**.

The practical mitigations are straightforward:

- Review MCP servers before connecting to them (just like you’d review any dependency).
- Use signed and versioned MCP servers from trusted sources.
- Run MCP servers in containers or sandboxed environments.
- Implement proper access controls and least-privilege principles.

The MCP ecosystem is already moving in this direction. Docker’s MCP Toolkit runs servers in containers. The community is developing security scanners and best practices. The specification now includes security hints like `readOnlyHint` and `destructiveHint`. (I still have my reservations about the annotations, but that’s a topic for another day.)

Perfect security is the enemy of adoption, and MCP chose pragmatism over paranoia. The security concerns are real, but they’re solvable with the same approaches we use everywhere else in software: Trust but verify, defense in depth, and maybe don’t give your AI assistant access to your SSH keys without thinking it through first.

## When to use MCP despite its complexity

MCP’s complexity is negligible with the right tools and SDKs. It is only a matter of time before the ecosystem matures enough that complexity becomes a non-issue entirely. But you may need to build tools for agents today, without the luxury of waiting for the ecosystem to catch up. So let’s look at some scenarios where MCP’s benefits outweigh the complexity _today_.

### MCP is useful when you need dynamic tool discovery

If you expect tools to change frequently, or if you want to allow LLMs to discover tools at runtime, MCP’s dynamic tool discovery sets it apart from alternatives like function calls.

With MCP, the LLM client can query the MCP server for available tools at any time, and the MCP server can dynamically add or remove tools without requiring client changes.

With the TypeScript MCP SDK, notifying a client of tool changes is as simple as calling `mcpServer.registerTool()`, `tool.enable()`, or `tool.disable()`.

Here’s an example of how you might implement dynamic tool discovery in an MCP server:

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
const mcpServer = new McpServer({
  name: "Example WhatsApp MCP Server",
  description: "A Model Context Protocol server for WhatsApp",
  version: "1.0.0",
});
const authenticateTool = mcpServer.registerTool("authenticate", {
  description: "Call this tool to get a QR code to authenticate with WhatsApp",
  // Tool implementation goes here
});
const sendChatTool = mcpServer
  .registerTool("sendChat", {
    description: "Call this tool to send a chat message on WhatsApp",
    // Tool implementation goes here
  })
  .disable(); // Initially disable the sendChat tool
whatsAppService.on("authenticated", () => {
  // When the user authenticates
  sendChatTool.enable(); // Enable the sendChat tool
  authenticateTool.disable(); // Disable the authenticate tool
  // The SDK automatically notifies the MCP client of the tool changes by sending a
  // `notifications/tools/list_changed` message.
  // The LLM client can then call `tools/list` to get the updated list of tools
  // and update the context on the next LLM call.
});
mcpServer.connect(new StdioServerTransport());
```

Implementing dynamic tool discovery with MCP is straightforward. The MCP server can add or remove tools at runtime, and the MCP client can discover these changes without needing to reconnect or reinitialize.

Doing the same with function calls would require a custom implementation that tracks available functions and updates the LLM client whenever they change. This is possible, but it adds significant complexity to both the LLM client and custom function codebases.

### MCP is useful when you need stateful interactions

Many real-world AI interactions aren’t one-shot operations - they’re conversations that build on previous context. This is where MCP’s stateful architecture shines.

Consider a data analysis workflow. An analyst asks their AI assistant to:

1. Connect to the production database
2. Run exploratory queries to understand the schema
3. Identify anomalies in recent transactions
4. Generate visualizations of the findings
5. Create a report with recommendations

With function calling, each step is isolated. The LLM would need to keep all the results in its context window.

With MCP, the MCP server can maintain state across multiple tool calls, allowing for an asyncchronous, multi-step workflow that builds on previous interactions. The LLM can focus on reasoning and analysis, while the MCP server handles the underlying state management.

Here’s a concrete example with our WhatsApp MCP server. Imagine implementing a “conversation summary” feature:

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
const mcpServer = new McpServer({
  name: "WhatsApp MCP Server",
  description: "A Model Context Protocol server for WhatsApp",
  version: "1.0.0",
});
const getWhatsAppChatById = mcpServer.registerTool("getWhatsAppChatById", {
  description: "Get a specific WhatsApp chat by its ID",
  // Define input and output schemas
});
const getWhatsAppChatSummary = mcpServer.registerTool(
  "getWhatsAppChatSummary",
  {
    description: "Get a summary of a WhatsApp chat",
    // Define input and output schemas
  },
  async (args) => {
    const chat = await getWhatsAppChatById(args.chatId);
    // Perform analysis on the chat data
    const analysisId = whatsAppService.queueAnalyzeChat(chat);
    return {
      content: [
        {
          type: "text",
          text: `Chat summary for ${args.chatId}: ${chat.summary}`,
        },
      ],
    };
  },
);
whatsAppService.on("analysisComplete", (analysisId, result) => {
  // Register the analysis result as a resource
  mcpServer.resource({
    uri: `whatsapp://${analysisId}`,
    name: `WhatsApp Chat Analysis ${analysisId}`,
    // implement the resource details to return results
  });
  // The LLM client can then react to this notification, for example by
  // including a message in the next LLM call:
  // "New resource available: WhatsApp Chat Analysis 12345 with URL whatsapp://12345"
});
mcpServer.connect(new StdioServerTransport());
```

This statefulness becomes even more powerful with tools like the Playwright MCP server, which maintains a browser session across interactions. The AI can navigate to a page, fill out a form, handle authentication, and scrape results - all while maintaining cookies, session state, and page context. Try doing that with stateless function calls!

### MCP is useful when you need to support multiple LLM APIs

The fragmentation in LLM function calling is painfully subtle. As we showed earlier, each provider has its own format, quirks, and limitations. If you’re building tools that need to work across multiple LLMs - or if you just want to avoid vendor lock-in - MCP provides a standardized interface.

With MCP, you write your tool once as a server, and it works identically whether accessed from:

- Claude Desktop
- ChatGPT (with the upcoming MCP support)
- Open source LLMs via frameworks that support MCP
- Your custom