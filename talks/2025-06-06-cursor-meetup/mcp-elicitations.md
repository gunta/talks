# MCP Elicitations: Standardizing Interactive AI Workflows Through Structured User Input

[Open LLM-readable version of this post](https://blog.fka.dev/llm/2025-01-15-mcp-elicitations-standardizing-interactive-ai-workflows/) [Open translated version of this post](https://translate.google.com/translate?sl=auto&tl=tr&u=https://blog.fka.dev/blog/2025-01-15-mcp-elicitations-standardizing-interactive-ai-workflows/)

Explore how the new MCP Elicitations protocol standardizes interactive AI workflows by enabling servers to collect structured user input dynamically, building upon AI-generated UI concepts.

![Fatih Kadir Akın](https://blog.fka.dev/assets/images/team/fka.jpg)

Fatih Kadir Akın

![MCP Elicitations: Standardizing Interactive AI Workflows Through Structured User Input](https://blog.fka.dev/assets/images/gen/blog/blog-16.png)

A few weeks ago, I wrote about [AI-generated UI components](https://blog.fka.dev/blog/2025-05-16-beyond-text-only-ai-on-demand-ui-generation-for-better-conversational-experiences) as a solution to the limitations of text-only AI interactions. The core idea was simple: instead of forcing users to express complex needs through unstructured text, AI systems should generate appropriate interface components dynamically to collect structured input.

Today, I’m excited to discuss how the Model Context Protocol (MCP) is evolving to standardize exactly this kind of interaction through the new **Elicitations** protocol. This draft specification provides a formal framework for what I was prototyping - enabling AI systems to request structured user input during conversations in a standardized, secure way.

Your browser does not support the video tag.


The same shipping company support dialogue, now can be potentially powered by standardized MCP Elicitations

## From Custom UI Generation to Standardized Elicitations

In my previous post, I demonstrated a prototype where LLMs could generate arbitrary UI components based on conversation context. While powerful, this approach had several limitations:

1. **Lack of standardization**: Each application needed custom UI generation logic
2. **Security concerns**: No formal guidelines for what information should be requested
3. **Inconsistent experiences**: Different systems would generate different interfaces for similar tasks
4. **Implementation complexity**: Developers had to build complete UI generation and validation systems

The MCP Elicitations protocol addresses these challenges by providing a standardized way for MCP servers to request user input. Instead of each AI system inventing its own UI generation approach, we now have a formal specification that defines how interactive workflows should work. (The protocol is still in draft, but hope it’ll be final)

## Understanding MCP Elicitations

The [MCP Elicitations specification](https://modelcontextprotocol.io/specification/draft/client/elicitation) introduces a simple but powerful concept: **servers can request additional information from users through the client during interactions**. This enables what the specification calls “interactive workflows” where user input requests occur _nested_ inside other MCP server features.

Here’s how it works at a high level:

1. **User initiates action**: User makes a request to an MCP server (e.g., “update my shipping address”)
2. **Server identifies missing data**: The MCP server recognizes it needs additional structured information
3. **Elicitation request**: Server sends an `elicitation/create` request specifying what data it needs
4. **Client presents interface**: The MCP client (your application) presents an appropriate interface to collect the data
5. **User responds**: User provides the requested information, declines, or cancels
6. **Server continues**: With the structured data, the server can complete the original request

This creates a seamless flow where complex, multi-step operations can be broken down into manageable interactions without losing the conversational nature.

## Multi-Staged MCP Workflows

One of the most powerful aspects of MCP Elicitations is enabling **multi-staged workflows**. Instead of requiring all information upfront, MCP servers can guide users through complex processes step by step.

Consider this shipping company example using MCP Elicitations:

### Stage 1: Initial Request

**User**: “I need to change my delivery address”
**MCP Server**: Recognizes this requires package identification and sends an elicitation request:

```
{
  "method": "elicitation/create",
  "params": {
    "message": "Please provide your tracking number to locate your package",
    "requestedSchema": {
      "type": "object",
      "properties": {
        "trackingNumber": {
          "type": "string",
          "title": "Tracking Number",
          "description": "Enter your package tracking number",
          "pattern": "^[A-Z]{3}[0-9]{8}$"
        }
      },
      "required": ["trackingNumber"]
    }
  }
}

```

### Stage 2: Address Collection

After receiving the tracking number, the server validates the package and requests the new address:

```
{
  "method": "elicitation/create",
  "params": {
    "message": "Package found! Please provide your new delivery address",
    "requestedSchema": {
      "type": "object",
      "properties": {
        "street": {
          "type": "string",
          "title": "Street Address",
          "description": "Enter your street address"
        },
        "city": {
          "type": "string",
          "title": "City",
          "description": "Enter your city"
        },
        "zipCode": {
          "type": "string",
          "title": "ZIP Code",
          "pattern": "^[0-9]{5}(-[0-9]{4})?$"
        },
        "country": {
          "type": "string",
          "title": "Country",
          "enum": ["US", "CA", "UK"],
          "enumNames": ["United States", "Canada", "United Kingdom"]
        }
      },
      "required": ["street", "city", "zipCode", "country"]
    }
  }
}

```

### Stage 3: Confirmation

Finally, the server presents the changes for confirmation:

```
{
  "method": "elicitation/create",
  "params": {
    "message": "Please confirm the address change. Note: This may affect your delivery date.",
    "requestedSchema": {
      "type": "object",
      "properties": {
        "confirmed": {
          "type": "boolean",
          "title": "Confirm Address Change",
          "description": "I confirm this address change and understand delivery dates may be affected"
        }
      },
      "required": ["confirmed"]
    }
  }
}

```

Each stage builds on the previous one, creating a guided workflow that feels natural while collecting all necessary data in a structured way.

## Key Benefits of Standardized Elicitations

### 1\. **Consistent User Experience**

Unlike custom UI generation approaches, MCP Elicitations ensures consistent interaction patterns across different MCP servers and applications. Users learn one interaction model that works everywhere.

### 2\. **Built-in Security**

The specification explicitly states that “servers MUST NOT use elicitation to request sensitive information.” This provides clear security guidelines that were missing from ad-hoc UI generation approaches.

### 3\. **Structured Data Validation**

The JSON Schema-based approach ensures data quality. Clients can validate input before sending, and servers receive properly formatted data.

### 4\. **Three-Action Response Model**

The specification defines three clear response types:

- **Accept**: User provided the requested data
- **Decline**: User explicitly rejected the request
- **Cancel**: User dismissed without making a choice

This gives servers clear signals about user intent, enabling appropriate follow-up actions.

### 5\. **Implementation Flexibility**

While the protocol is standardized, clients have complete freedom in how they present elicitation requests to users - forms, voice interfaces, mobile-optimized layouts, or accessibility-focused designs.

## Supported Schema Types

The MCP Elicitations specification supports a focused set of data types designed to be simple for clients to implement:

### String Fields

```
{
  "type": "string",
  "title": "Email Address",
  "description": "Your contact email",
  "format": "email",
  "maxLength": 100
}

```

### Numeric Fields

```
{
  "type": "number",
  "title": "Package Weight",
  "description": "Weight in pounds",
  "minimum": 0,
  "maximum": 100
}

```

### Boolean Fields

```
{
  "type": "boolean",
  "title": "Express Delivery",
  "description": "Add express delivery for $15.99",
  "default": false
}

```

### Enum Fields

```
{
  "type": "string",
  "title": "Delivery Time",
  "enum": ["morning", "afternoon", "evening"],
  "enumNames": ["Morning (9-12)", "Afternoon (12-5)", "Evening (5-8)"]
}

```

This focused set intentionally avoids complex nested structures to keep client implementation simple while covering most real-world use cases.

## Comparison to Custom UI Generation

| Aspect | Custom UI Generation | MCP Elicitations |
| --- | --- | --- |
| **Standardization** | None - each app is different | Standardized protocol |
| **Security** | Ad-hoc guidelines | Built-in security requirements |
| **Implementation** | Complex custom system needed | Simple JSON Schema validation |
| **Interoperability** | Limited to specific applications | Works across any MCP-enabled client |
| **Data Types** | Unlimited but inconsistent | Focused set, consistently implemented |
| **Response Handling** | Custom per application | Standardized three-action model |

## Real-World Applications

MCP Elicitations opens up numerous possibilities for interactive AI workflows:

### Customer Service

- **Multi-step troubleshooting**: Guide users through diagnostic steps
- **Account verification**: Securely collect account details for verification
- **Service configuration**: Help users configure complex services step-by-step

### E-commerce

- **Order modifications**: Change shipping, billing, or product details
- **Return processing**: Collect return reasons and arrange pickups
- **Product configuration**: Guide users through complex product options

### Business Applications

- **Expense reporting**: Collect receipt details and categorization
- **Project setup**: Gather project requirements and team assignments
- **Approval workflows**: Route requests through appropriate approval chains

### Developer Tools

- **Configuration wizards**: Set up complex development environments
- **Deployment pipelines**: Guide through deployment options and settings
- **Code generation**: Collect requirements for generating boilerplate code

## Implementation Considerations

For developers looking to implement MCP Elicitations:

### Server Side

1. **Identify interaction points**: Determine where your MCP server needs user input
2. **Design schemas carefully**: Use simple, clear field descriptions and appropriate validation
3. **Handle all response types**: Plan for accept, decline, and cancel scenarios
4. **Follow security guidelines**: Never request sensitive information like passwords

### Client Side

1. **Declare elicitation capability**: Include `"elicitation": {}` in your capability declaration
2. **Design consistent UI**: Create reusable components for each schema type
3. **Implement validation**: Validate user input against the provided schema
4. **Provide clear feedback**: Show users which server is requesting information and why

### User Experience

1. **Clear messaging**: Make it obvious what information is needed and why
2. **Progress indicators**: Show users where they are in multi-step workflows
3. **Easy cancellation**: Always provide clear ways to cancel or go back
4. **Accessibility**: Ensure generated interfaces work with assistive technologies

## The Future of Interactive AI

MCP Elicitations represents a significant step toward more sophisticated AI interactions. By standardizing how AI systems can collect structured user input, we’re enabling a new generation of interactive applications that feel both conversational and precise.

The protocol’s focus on simplicity and security makes it practical for real-world deployment, while its flexibility allows for creative implementations across different platforms and use cases.

As more MCP servers adopt elicitations, we’ll see increasingly sophisticated workflows that guide users through complex tasks without sacrificing the natural feel of conversational AI. The shipping company example I demonstrated in my previous post could easily be reimplemented using MCP Elicitations, providing a more robust and standardized foundation.

## Getting Started

If you’re building MCP servers or clients, I encourage you to explore the [MCP Elicitations specification](https://modelcontextprotocol.io/specification/draft/client/elicitation). The protocol is currently in draft status, making this an excellent time to experiment and provide feedback to help shape its final form.

For MCP server developers, consider where your current text-based interactions could benefit from structured input collection. For client developers, implementing elicitation support opens up access to a new generation of interactive MCP servers.

The future of AI interaction isn’t just about better language models - it’s about creating better interaction patterns that combine the flexibility of conversation with the precision of structured interfaces. MCP Elicitations provides the standardized foundation to make this vision a reality.

## Conclusion

The MCP Elicitations protocol validates and standardizes the approach I explored in my UI generation prototype. By providing a formal specification for interactive workflows, MCP is enabling a new category of AI applications that are both conversational and structured.

This standardization benefits everyone: developers get consistent patterns to implement, users get familiar interaction models across applications, and the broader AI ecosystem gains interoperability. Most importantly, it moves us closer to AI systems that can handle complex, real-world workflows while remaining accessible and user-friendly.

As we continue building more sophisticated AI applications, protocols like MCP Elicitations will be essential for creating experiences that truly serve users’ needs rather than forcing them to adapt to AI limitations.

