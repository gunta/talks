https://github.com/thirdstrandstudio/mcp-tool-chainer/

An MCP (Model Context Protocol) server that chains calls to other MCP tools, reducing token usage by allowing sequential tool execution with result passing. Designed to solve modelcontextprotocol/specification#215


Feature Request: Direct MPC-to-MPC Communication

Background
Currently, when chaining multiple MPCs (such as Fetch and XPath), the process follows this flow:

AI receives user request
AI invokes Fetch MPC
Fetch MPC returns data to AI
AI processes the data (consuming tokens)
AI invokes XPath MPC with the data
XPath MPC processes and returns results to AI
AI presents final results to user
This creates inefficiencies when handling large datasets:

Large web page content from Fetch MPC must pass through the AI model
This consumes significant tokens, increasing costs
Can exceed token limits, causing failures with large web pages