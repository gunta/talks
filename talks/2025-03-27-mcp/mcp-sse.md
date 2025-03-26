- [**Stateless Operations**](https://github.com/modelcontextprotocol/specification/discussions/102):  MCP now support and  encompass serverless environments too, where they will need to be mostly stateless.

【朗報】MCPの新仕様で大きな進化。完全ステートレス化が実現 🔄

【レイクスルー】
✅ プレーンHTTPのみで実装可能に
✅ 接続再開のサポート
✅ 高可用性サーバー要件から解放

実装コストを大幅に下げる重要な一歩。

RFC: "Replace HTTP+SSE with Streamable HTTP transport"

---

MCP's can now be fully stateless, resumable, and implemented with just plain HTTP with this RFC. 

---

# Context
MCP is currently a stateful protocol, with a long-lived connection between client and server. This allows us to support behaviors like:

Notifications about changes—e.g., changes to resources, or tools being added/removed. (These can occur in either direction too.)
Server-initiated sampling at any point, enabling agentic workflows.
Passing arbitrary server logging through to the client.
… more stuff in future? …
The connection is restartable with fairly little recovery cost (it's not catastrophic, like losing data), but the protocol is definitely not designed around repeatedly opening a connection, issuing one semantic request, then closing.

# What was the Problem
This is fairly limiting for serverless deployments, which frequently autoscale up and down, and generally aren't designed around long-lived requests (for example, typically there's a max request lifetime measured in minutes).

Deploying to a Platform-as-a-Service is really nice and convenient as a developer, so not being very compatible with this model creates an impediment to broader MCP adoption.

THis PR is a draft and has been just merged. It cannot be used from SDK yet as of today.


> This PR introduces the Streamable HTTP transport for MCP, addressing key limitations of the current HTTP+SSE transport while maintaining its advantages.
> 
> Our deep appreciation to @atesgoral and @topherbullock (Shopify), @samuelcolvin and @Kludex (Pydantic), @calclavia, Cloudflare, LangChain, Vercel, the Anthropic team, and many others in the MCP community for their thoughts and input! This proposal was only possible thanks to the valuable feedback received in [the GitHub Discussion](https://github.com/modelcontextprotocol/specification/discussions/102).
> 
> ## TL;DR
> As compared with the [current HTTP+SSE transport](https://spec.modelcontextprotocol.io/specification/2024-11-05/basic/transports/#http-with-sse):
> 
> 1. We remove the `/sse` endpoint
> 2. All client → server messages go through the `/message` (or similar) endpoint
> 3. All client → server requests could be upgraded by the server to be SSE, and used to send notifications/requests
> 4. Servers can choose to establish a session ID to maintain state
> 5. Client can initiate an SSE stream with an empty GET to `/message`
> 
> This approach can be implemented backwards compatibly, and allows servers to be fully stateless if desired.
> 
> ## Motivation
> Remote MCP currently works over HTTP+SSE transport which:
> 
> * Does not support resumability
> * Requires the server to maintain a long-lived connection with high availability
> * Can only deliver server messages over SSE
> 
> ## Benefits
> * **Stateless servers are now possible**—eliminating the requirement for high availability long-lived connections
> * **Plain HTTP implementation**—MCP can be implemented in a plain HTTP server without requiring SSE
> * **Infrastructure compatibility**—it's "just HTTP," ensuring compatibility with middleware and infrastructure
> * **Backwards compatibility**—this is an incremental evolution of our current transport
> * **Flexible upgrade path**—servers can choose to use SSE for streaming responses when needed
> 
> ## Example use cases
> ### Stateless server
> A completely stateless server, without support for long-lived connections, can be implemented in this proposal.
> 
> For example, a server that just offers LLM tools and utilizes no other features could be implemented like so:
> 
> 1. Always acknowledge initialization (but no need to persist any state from it)
> 2. Respond to any incoming `ToolListRequest` with a single JSON-RPC response
> 3. Handle any `CallToolRequest` by executing the tool, waiting for it to complete, then sending a single `CallToolResponse` as the HTTP response body
> 
> ### Stateless server with streaming
> A server that is fully stateless and does not support long-lived connections can still take advantage of streaming in this design.
> 
> For example, to issue progress notifications during a tool call:
> 
> 1. When the incoming POST request is a `CallToolRequest`, server indicates the response will be SSE
> 2. Server starts executing the tool
> 3. Server sends any number of `ProgressNotification`s over SSE while the tool is executing
> 4. When the tool execution completes, the server sends a `CallToolResponse` over SSE
> 5. Server closes the SSE stream
> 
> ### Stateful server
> A stateful server would be implemented very similarly to today. The main difference is that the server will need to generate a session ID, and the client will need to pass that back with every request.
> 
> The server can then use the session ID for sticky routing _or_ routing messages on a message bus—that is, a POST message can arrive at any server node in a horizontally-scaled deployment, so must be routed to the existing session using a broker like Redis.
> 
> ## Why not WebSocket?
> The core team thoroughly discussed making WebSocket the primary remote transport (instead of SSE), and applying similar work to it to make it disconnectable and resumable. We ultimately decided not to pursue WS right now because:
> 
> 1. Wanting to use MCP in an "RPC-like" way (e.g., a stateless MCP server that just exposes basic tools) would incur a lot of unnecessary operational and network overhead if a WebSocket is required for each call.
> 2. From a browser, there is no way to attach headers (like `Authorization`), and unlike SSE, third-party libraries cannot reimplement WebSocket from scratch in the browser.
> 3. Only GET requests can be transparently upgraded to WebSocket (other HTTP methods are not supported for upgrading), meaning that some kind of two-step upgrade process would be required on a POST endpoint, introducing complexity and latency.
> 
> We're also avoiding making WebSocket an additional _option_ in the spec, because we want to limit the number of transports officially specified for MCP, to avoid a combinatorial compatibility problem between clients and servers. (Although this does not prevent community adoption of a non-standard WebSocket transport.)
> 
> The proposal in this doc does not preclude further exploration of WebSocket in future, if we conclude that SSE has not worked well.
> 
