# idosal/mcp-ui: SDK for UI over MCP. Create next-gen UI experiences!

## 📦 Model Context Protocol UI SDK

Server Version | Client Version | MCP Documentation

---

**`mcp-ui`** brings interactive web components to the Model Context Protocol (MCP). Deliver rich, dynamic UI resources directly from your MCP server to be rendered by the client. Take AI interaction to the next level!

> _This project is an experimental community playground for MCP UI ideas. Expect rapid iteration and enhancements!_

---

## 💡 What's `mcp-ui`?

`mcp-ui` is a TypeScript SDK comprising two packages:

- **`@mcp-ui/server`**: Utilities to generate UI resources (`UIResource`) on your MCP server.
- **`@mcp-ui/client`**: UI components (e.g., `<UIResourceRenderer />`) to render the UI resources and handle their events.

Together, they let you define reusable UI snippets on the server side, seamlessly and securely render them in the client, and react to their actions in the MCP host environment.

---

## ✨ Core Concepts

By using `mcp-ui` SDKs, servers and hosts can agree on contracts that enable them to create and render interactive UI snippets (as a path to a standardized UI approach in MCP).

### UI Resource

The primary payload returned from the server to the client is the `UIResource`:

```typescript
interface UIResource {
  type: 'resource';
  resource: {
    uri: string;       // e.g., ui://component/id
    mimeType: 'text/html' | 'text/uri-list' | 'application/vnd.mcp-ui.remote-dom'; // text/html for HTML content, text/uri-list for URL content, application/vnd.mcp-ui.remote-dom for remote-dom content (Javascript)
    text?: string;      // Inline HTML, external URL, or remote-dom script
    blob?: string;      // Base64-encoded HTML, URL, or remote-dom script
  };
}
```

- **`uri`**: Unique identifier for caching and routing  
  - `ui://…` — UI resources (rendering method determined by mimeType)
- **`mimeType`**:  
  - `text/html` for HTML content (iframe srcDoc)  
  - `text/uri-list` for URL content (iframe src)  
  - `application/vnd.mcp-ui.remote-dom` for remote-dom content (Javascript)
  - **MCP-UI requires a single URL**: While `text/uri-list` format supports multiple URLs, MCP-UI uses only the first valid `http/s` URL and warns if additional URLs are found
- **`text` vs. `blob`**: Choose `text` for simple strings; use `blob` for larger or encoded content.

### Resource Renderer

The UI Resource is rendered in the `<UIResourceRenderer />` component. It automatically detects the resource type and renders the appropriate component.

Props:

- **`resource`**: The resource object from an MCP Tool response. Must include `uri`, `mimeType`, and content (`text`, `blob`)
- **`onUIAction`**: Optional callback for handling UI actions from the resource:

```typescript
{ type: 'tool', payload: { toolName: string, params: Record<string, unknown> } } |
{ type: 'intent', payload: { intent: string, params: Record<string, unknown> } } |
{ type: 'prompt', payload: { prompt: string } } |
{ type: 'notify', payload: { message: string } } |
{ type: 'link', payload: { url: string } }
```

- **`supportedContentTypes`**: Optional array to restrict allowed content types (`['rawHtml', 'externalUrl', 'remoteDom']`)
- **`htmlProps`**: Optional props for the internal `<HTMLResourceRenderer>`
  - **`style`**: Optional custom styles for the iframe
  - **`iframeProps`**: Optional props passed to the iframe element
- **`remoteDomProps`**: Optional props for the internal `<RemoteDOMResourceRenderer>`
  - **`library`**: Optional component library for Remote DOM resources (defaults to `basicComponentLibrary`)
  - **`remoteElements`**: Remote element definitions for Remote DOM resources.

---

### Supported Resource Types

#### HTML (`text/html` and `text/uri-list`)

Rendered using the `<HTMLResourceRenderer />` component, which displays content inside an `<iframe>`. Suitable for self-contained HTML or embedding external apps.

- **`mimeType`**:
  - `text/html`: Renders inline HTML content.
  - `text/uri-list`: Renders an external URL. MCP-UI uses the first valid `http/s` URL.

#### Remote DOM (`application/vnd.mcp-ui.remote-dom`)

Rendered using the internal `<RemoteDOMResourceRenderer />` component, which utilizes Shopify's `remote-dom`. The server responds with a script that describes the UI and events. On the host, the script is securely rendered in a sandboxed iframe, and the UI changes are communicated to the host in JSON, where they're rendered using the host's component library. This is more flexible than iframes and allows for UIs that match the host's look-and-feel.

- **`mimeType`**: `application/vnd.mcp-ui.remote-dom; flavor={react | webcomponents}`

---

### UI Action

UI snippets must be able to interact with the agent. In `mcp-ui`, this is done by hooking into events sent from the UI snippet and reacting to them in the host (see `onUIAction` prop). For example, HTML may trigger a tool call when a button is clicked by sending an event which will be caught and handled by the client.

---

## 🏗️ Installation

```bash
# using npm
npm install @mcp-ui/server @mcp-ui/client

# or pnpm
pnpm add @mcp-ui/server @mcp-ui/client

# or yarn
yarn add @mcp-ui/server @mcp-ui/client
```

---

## 🎬 Quickstart

You can use GitMCP to give your IDE access to `mcp-ui`'s latest documentation!

### 1. Server-side: Build your resource blocks

```typescript
import { createUIResource } from '@mcp-ui/server';
import {
 createRemoteComponent,
 createRemoteDocument,
 createRemoteText,
} from '@remote-dom/core';

// Inline HTML
const htmlResource = createUIResource({
  uri: 'ui://greeting/1',
  content: { type: 'rawHtml', htmlString: '<p>Hello, MCP UI!</p>' },
  delivery: 'text',
});

// External URL
const externalUrlResource = createUIResource({
  uri: 'ui://greeting/1',
  content: { type: 'externalUrl', iframeUrl: 'https://example.com' },
  delivery: 'text',
});

// remote-dom
const remoteDomResource = createUIResource({
  uri: 'ui://remote-component/action-button',
  content: {
    type: 'remoteDom',
    script: `
     const button = document.createElement('ui-button');
     button.setAttribute('label', 'Click me for a tool call!');
     button.addEventListener('press', () => {
       window.parent.postMessage({ type: 'tool', payload: { toolName: 'uiInteraction', params: { action: 'button-click', from: 'remote-dom' } } }, '*');
     });
     root.appendChild(button);
     `,
    flavor: 'react', // or 'webcomponents'
  },
  delivery: 'text',
});
```

### 2. Client-side: Render in your MCP host

```javascript
import React from 'react';
import { UIResourceRenderer } from '@mcp-ui/client';

function App({ mcpResource }) {
  if (
    mcpResource.type === 'resource' &&
    mcpResource.resource.uri?.startsWith('ui://')
  ) {
    return (
      <UIResourceRenderer
        resource={mcpResource.resource}
        onUIAction={(result) => {
          console.log('Action:', result);
        }}
      />
    );
  }
  return <p>Unsupported resource</p>;
}
```

### 3. Enjoy interactive MCP UI — no extra configuration required.

---

## 🌍 Examples

**Client example**
- ui-inspector - inspect local `mcp-ui`-enabled servers.
- MCP-UI Chat - interactive chat built with the `mcp-ui` client. Check out the hosted version!
- MCP-UI RemoteDOM Playground (`examples/remote-dom-demo`) - local demo app to test RemoteDOM resources (intended for hosts)

**Server example**  
Try out the hosted app:

- **HTTP Streaming**: `https://remote-mcp-server-authless.idosalomon.workers.dev/mcp`
- **SSE**: `https://remote-mcp-server-authless.idosalomon.workers.dev/sse`

The app is deployed from `examples/server`.

Drop those URLs into any MCP-compatible host to see `mcp-ui` in action.

---

## 🔒 Security

Host and user security is one of `mcp-ui`'s primary concerns. In all content types, the remote code is executed in a sandboxed iframe.

---


# Protocol Details

This section dives deeper into the `UIResource` and its intended usage.

## `UIResource` Recap

```typescript
export interface UIResource {
  type: 'resource';
  resource: {
    uri: string;
    mimeType: 'text/html' | 'text/uri-list' | 'application/vnd.mcp-ui.remote-dom';
    text?: string;
    blob?: string;
  };
}
```

## URI Schemes

- **`ui://<component-name>/<instance-id>`**

  - **Purpose**: For all UI resources. The rendering method is determined by `mimeType`.
  - **Content**: `text` or `blob` contains either HTML string or URL string.
  - **Client Action**: 
    - If `mimeType: 'text/html'` → Render in a sandboxed iframe using `srcdoc`
    - If `mimeType: 'text/uri-list'` → Render in a sandboxed iframe using `src`
    - If `mimeType: 'application/vnd.mcp-ui.remote-dom'` → Execute in sandboxed iframe and render in the tree
  - **Examples**: 
    - HTML content: A custom button, a small form, a data visualization snippet
    - URL content: Embedding a Grafana dashboard, a third-party widget, a mini-application
    - RemoteDOM content: A component to be rendered with the host's look-and-feel (component library)

## Content Delivery: `text` vs. `blob`

- **`text`**: Simple, direct string. Good for smaller, less complex content.
- **`blob`**: Base64 encoded string.
  - **Pros**: Handles special characters robustly, can be better for larger payloads, ensures integrity during JSON transport.
  - **Cons**: Requires Base64 decoding on the client, slightly increases payload size.

## URI List Format Support

When using `mimeType: 'text/uri-list'`, the content follows the standard URI list format (RFC 2483). However, **MCP-UI requires a single URL** for rendering. For security reasons, the protocol must be `http/s`.

- **Single URL Requirement**: MCP-UI will use only the first valid URL found
- **Multiple URLs**: If multiple URLs are provided, the client will use the first valid URL and log a warning about the ignored alternatives
- **Comments**: Lines starting with `#` are treated as comments and ignored
- **Empty lines**: Blank lines are ignored

**Example URI List Content:**
```
# Primary dashboard URL
https://dashboard.example.com/main

# Backup dashboard URL (will be ignored but logged)
https://backup.dashboard.example.com/main
```

**Client Behavior:**
- Uses `https://dashboard.example.com/main` for rendering
- Logs: `"Multiple URLs found in uri-list content. Using the first URL: "https://dashboard.example.com/main". Other URLs ignored: ["https://backup.dashboard.example.com/main"]"`

This design allows for fallback URLs to be specified in the standard format while maintaining simple client implementation that focuses on a single primary URL.

## Recommended Client-Side Pattern

Client-side hosts should check for the `ui://` URI scheme first to identify MCP-UI resources, rather than checking mimeType:

```tsx
// ✅ Recommended: Check URI scheme first
if (
  mcpResource.type === 'resource' &&
  mcpResource.resource.uri?.startsWith('ui://')
) {
  return <UIResourceRenderer resource={mcpResource.resource} onUIAction={handleAction} />;
}

// ❌ Not recommended: Check mimeType first
if (
  mcpResource.type === 'resource' &&
  (mcpResource.resource.mimeType === 'text/html' || mcpResource.resource.mimeType === 'text/uri-list')
) {
  return <UIResourceRenderer resource={mcpResource.resource} onUIAction={handleAction} />;
}
```

**Benefits of URI-first checking:**
- Future-proof: Works with new content types like `application/javascript`
- Semantic clarity: `ui://` clearly indicates this is a UI resource
- Simpler logic: Let the `UIResourceRenderer` component handle mimeType-based rendering internally

## Communication (Client <-> Iframe)

For `ui://` resources, you can use `window.parent.postMessage` to send data or actions from the iframe back to the host client application. The client application should set up an event listener for `message` events.

**Iframe Script Example:**

```html
<button onclick="handleAction()">Submit Data</button>
<script>
  function handleAction() {
    const data = { action: 'formData', value: 'someValue' };
    // IMPORTANT: Always specify the targetOrigin for security!
    // Use '*' only if the parent origin is unknown or variable and security implications are understood.
    window.parent.postMessage(
      { type: 'tool', payload: { toolName: 'myCustomTool', params: data } },
      '*',
    );
  }
</script>
```

**Client-Side Handler:**

```typescript
window.addEventListener('message', (event) => {
  // Add origin check for security: if (event.origin !== "expectedOrigin") return;
  if (event.data && event.data.tool) {
    // Call the onUIAction prop of UIResourceRenderer
  }
});
```