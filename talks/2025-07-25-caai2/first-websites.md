# AI Is Making Websites Obsolete With MCP | PulseMCP

## In this post

In late November 2024, Anthropic released the Model Context Protocol (MCP). MCP is an open source protocol meant to be the glue between AI-powered apps (like Anthropic's Claude, OpenAI's ChatGPT, or Cursor's code editor) and external services or data.

To illustrate, watch how someone uses Claude combined with MCP servers to download, search, and edit videos all in a single conversation:

If you're part of a business that has a meaningful presence on the internet, this is the beginning of a new wave of opportunity.

---

## MCP represents a rethinking of how we interact with the internet

The web browser has been around for decades, and still today Google Chrome looks much the same as Mosaic did back in 1993. It makes sense: the web consists of "documents" - web pages - and the browser is built for us to navigate around and find the documents most relevant to their current task at hand.

Enter AI and large language models.

CrazyStupidTech recently published a piece entitled, "Will A.I. Eat The Browser?":

> "For most of us, it's hard to imagine life without an internet browser. But as AI disaggregates information from text, video, and music into unique remixable AI chatbot answer streams, it's clear to me that over the next decade the browser will need to adapt or die."

The browser was built for human users and documents, and the internet came to life with that paradigm. Now, the rise of ChatGPT and its alternatives has successfully broken down the atomic unit of information from "document" down to "token".

Stories abound of people replacing Google Search with ChatGPT. Software engineers have gone crazy for Cursor, an AI-powered code editor. AI is crafting and pushing out automated emails that consumers are reacting well to.

And we're only just getting started.

---

## Why Claude and ChatGPT need connections to external services

The basic AI "chat" apps, like Claude and ChatGPT, are not in a position to become "everything" apps on their own.

One essential piece of the puzzle is access to external services. AI apps need this capability for at least three reasons:

1. **The ability to perform _actions_.** If you're just chatting with ChatGPT, you can't ask it to "place an order for my grocery list this week."
2. **Leveraging _private_ data sources.** If you want Claude to understand what brand of toilet paper you prefer by analyzing your Amazon order history, you're going to need a way to securely give Claude access to your private Amazon.com data.
3. **Leveraging _specific_ data sources.** LLM's are inherently made to be an average of the mass of data used to train them. As a human, you don't always trust "average". It might be good enough when looking up a random fact on Wikipedia. But it's probably not good enough when you want to know _specifically_ what NYT's Cooking blog said is the best way to cook creamed spinach -- to hell with average creamed spinach.

To bridge AI apps and external services, MCP introduces the concept of an "MCP server".

You might think, "wait, didn't OpenAI try this with ChatGPT plugins?"

---

## Supporting other AI apps + open source sets MCP apart

MCP is different from ChatGPT plugins in at least two big ways:

1. **It can work with any AI apps.** ChatGPT plugins were built to work with just ChatGPT. So their usefulness ends when you can't shoehorn a chatbot to complete your workflow. MCP can work with AI-enabled code editors, CRM's, analytics dashboards, email clients, and so on: it's not specific to Anthropic nor Claude.
2. **It's open source, and built to be a standard.** So if someone builds one building block, it benefits everyone. No need to build one plugin for ChatGPT, then another for Cursor, then another for Claude, and so on. Build one, and you can turn that one server into an entire business serving all these different AI apps.

It's a great gesture by Anthropic: putting out the protocol built for the broader web ecosystem. It benefits their competitors as much as it benefits them. When OpenAI decides to implement MCP for ChatGPT, ChatGPT will immediately get access to thousands of tools that the engineers are already hard at work building today.

If not Anthropic, then who wins if MCP succeeds?

---

## Everyone wins, but especially publishers and content owners

The architecture of MCP has the power to align the incentives of everyone on the internet.

Perplexity.ai, the app trying to replace Google Search and similar workflows for consumers, is trying to get access to data and capabilities with aggressive web scraping. As a result, they've been called out for ignoring requests to stop, and their user experience has suffered, as reported by an example of an 8-hour waiting time to complete a Perplexity Shopping purchase. Perplexity is off on the wrong foot with the websites and companies with whom they desperately need to be collaborating.

OpenAI is solving this problem with cash. Large publications like Vox Media and The Atlantic have all cut deals with OpenAI to provide them data. Google has done something similar with Reddit. These big players can wheel and deal their way through one-off contracts, but that leaves smaller players, independent publishers, and consumers in the lurch.

MCP paves a better path forward.

In a future where every business builds one (or more) MCP servers, _they_ control the terms of the interaction. If an AI app comes knocking on Yahoo Finance's doorstep, the MCP server can respond, "I have the data you want. But you can't use it unless your user is a paid subscriber to Yahoo Finance."

Or if you're a personal finance blogger, the interaction might look like:

1. **AI App**: "My user just asked for an analysis of the best credit card deals. I see you have data entitled 'Today's Credit Card Deals' updated a few hours ago. Can I have it?"
2. **Your MCP Server**: "If I give it to you, you _must_ inject my affiliate links into the response."
3. **AI App**: "Let me see if I can find the answer elsewhere ... I can't, OK, I'll insert your affiliate links into my response to the user. Let's proceed."

MCP servers could gatekeep their owners' data under their own terms.

---

## So what does MCP mean for the notion of a "website"?

AI-related traffic to the web is booming, and will only continue to grow. As Kevin Indig writes:

> ... companies [might] increasingly build separate versions of their site for bots geared towards speed and structured data. "Just focus on the user" becomes "just focus on the agents".

MCP is here to serve as the guiderails to that agentic AI app revolution. It opens the door to new, innovative AI apps. Today, it's generic chatbots like Claude and ChatGPT. Tomorrow, it's Cursor and "agent" applications capable of multiple steps, built for specific professions. In a few years, those agents might be powered by voice commands and Augmented Reality glasses: all built on this foundational protocol.

