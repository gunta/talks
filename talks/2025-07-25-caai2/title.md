タイトル：「企業の時価総額はMCPサーバー数で決まる時代へ」

概要：
MCP保有数が示す、企業競争力の新指標。

「2026年、投資家はMCPエコシステムの充実度を企業評価の重要指標にする」
これは私たちの予測であり、すでに始まっている変化です。世界のテック企業が急速にMCP投資を拡大する理由、日本企業にとっての機会とリスク、そしてMCPが創る新しいビジネスエコシステムの姿。サイバーエージェントが実践から得た知見と、これから起きる産業構造の変化について、具体的な事例を交えながらお話しします。


Storytelling:

# First part (5min) based on WHY MCP is so important
More like for CEOs PoV.
All that it enables. Inside a company, outside a company.
The biggest innovation of MCP is NO more versioning, NO more custom crafting APIs.
Just provide them to the LLM and it will be automatically using latest schemas and versions, and auto discover their functionalities.

Amazon case: The mcp sprawl at amazon, is pretty extensive to a point a lot of the teams are considering if we should even build UIs to look at things. Our first iteration towards interfacing is leaning towards an agent with MCP, then we consider if we need an UI of any sort.

Talk about the end of Vibe Coding and the beginning of Context Engineering.
Also, note that for example Figma MCP server has their own PM, Marketing, Engineer, Designer. We need to set up people that are exclusive to make MCP servers.

# Second part (5min) based on the latest advancements
The DXT (Desktop Extensions) innovation for Japan.
All the MCP latest features.
For MCP client, I recommend non-engineers to use Claude Desktop since it supports: extensions, MCP servers, DTX extensions, sharing artifacts. Basically all you need to have max productivity.
MCP Elicitations, in deep.
The MCP roadmap.
MCP-UI.

Security: be sure to limit your prod. data with only read permissions to your sensible data, and limit permissions to users too.
Otherwise you may will be a victim of prompt injection by the user.

Recommend Task Master.
Task Master MCP Server (#7 this week, #10 this month) by @eyaltoledano
→ Task Master has officially gone super viral. Since its release a couple months ago, it's accrued over 16k GitHub stars. Think of it as an orchestrator MCP server for your coding agents - likely useful for non-coding workflows as well. In the same family as the Sequential Thinking MCP server. Notably, they recently added Claude Code account support: meaning you can leverage your Claude Max account to power these Task Master workflows. The bear case for this MCP server: agents like Claude Code are working to replicate its success natively in their agentic loops. So its popularity may be temporary until the agents it harnesses catch up to their (clearly well-received) planning framework.


# Final CTA
Create MCP Servers!
Create DXT extensions!
Share with non-engineers!
Tell all your non-engineers to use Claude as client.
Enable everyone in your org, and organizations in parallel to have amazing productivity.
Don't sleep on MCP!　Is evolving very fast.
Before creating an UI, create an MCP server.