---
title: Roadmap
description: Our plans for evolving Model Context Protocol (H1 2025)
---

The Model Context Protocol is rapidly evolving. This page outlines our current thinking on key priorities and future direction for **the first half of 2025**, though these may change significantly as the project develops.

<Note>The ideas presented here are not commitments—we may solve these challenges differently than described, or some may not materialize at all. This is also not an _exhaustive_ list; we may incorporate work that isn't mentioned here.</Note>

We encourage community participation! Each section links to relevant discussions where you can learn more and contribute your thoughts.

## Remote MCP Support

Our top priority is improving [remote MCP connections](https://github.com/modelcontextprotocol/specification/discussions/112), allowing clients to securely connect to MCP servers over the internet. Key initiatives include:

- [**Authentication & Authorization**](https://github.com/modelcontextprotocol/specification/discussions/64): Adding standardized auth capabilities, particularly focused on OAuth 2.0 support.

- [**Service Discovery**](https://github.com/modelcontextprotocol/specification/discussions/69): Defining how clients can discover and connect to remote MCP servers.

- [**Stateless Operations**](https://github.com/modelcontextprotocol/specification/discussions/102):  MCP now support and  encompass serverless environments too, where they will need to be mostly stateless.




## Reference Implementations

To help developers build with MCP, we want to offer documentation for:

- **Client Examples**: Comprehensive reference client implementation(s), demonstrating all protocol features
- **Protocol Drafting**: Streamlined process for proposing and incorporating new protocol features

## Distribution & Discovery

Looking ahead, we're exploring ways to make MCP servers more accessible. Some areas we may investigate include:

- **Package Management**: Standardized packaging format for MCP servers
- **Installation Tools**: Simplified server installation across MCP clients
- **Sandboxing**: Improved security through server isolation
- **Server Registry**: A common directory for discovering available MCP servers

## Agent Support

We're expanding MCP's capabilities for [complex agentic workflows](https://github.com/modelcontextprotocol/specification/discussions/111), particularly focusing on:

- [**Hierarchical Agent Systems**](https://github.com/modelcontextprotocol/specification/discussions/94): Improved support for trees of agents through namespacing and topology awareness.

- [**Interactive Workflows**](https://github.com/modelcontextprotocol/specification/issues/97): Better handling of user permissions and information requests across agent hierarchies, and ways to send output to users instead of models.

- [**Streaming Results**](https://github.com/modelcontextprotocol/specification/issues/117): Real-time updates from long-running agent operations.

## Broader Ecosystem

We're also invested in:

- **Community-Led Standards Development**: Fostering a collaborative ecosystem where all AI providers can help shape MCP as an open standard through equal participation and shared governance, ensuring it meets the needs of diverse AI applications and use cases.
- [**Additional Modalities**](https://github.com/modelcontextprotocol/specification/discussions/88): Expanding beyond text to support audio, video, and other formats.
- [**Standardization**] Considering standardization through a standardization body.

