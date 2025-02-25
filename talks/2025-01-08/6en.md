
It’s been nearly 6 months since our research into which AI tools software engineers use, in the mini-series, [AI tooling for software engineers: reality check.](https://newsletter.pragmaticengineer.com/p/ai-tooling-2024?ref=blog.pragmaticengineer.com) At the time, the most popular tools were ChatGPT for LLMs, and GitHub copilot for integrated development environment (IDE)-integrated tooling. Then this summer, I saw the Cursor IDE becoming popular around when Anthropic’s Sonnet 3.5 model was released, which has superior code generation compared to ChatGPT. Cursor started using that improved model.

To get a sense of how preferences of developers might have shifted, I asked:

> “If you're a dev: what is your favorite coding editor with GenAI features (that help your work)? What's a standout thing about it?”

I posted on [Bluesky](https://bsky.app/profile/gergely.pragmaticengineer.com/post/3lbhgh3oxi524?ref=blog.pragmaticengineer.com), on [X](https://x.com/GergelyOrosz/status/1859569166639870405?ref=blog.pragmaticengineer.com) and on [Threads](https://www.threads.net/@gergelyorosz_/post/DCogBQcoLlR?xmt=AQGzzotJFFWmer9_Deekb2UGQytp9FWLQBaT9dAPKnxffw&ref=blog.pragmaticengineer.com), and received 145 often detailed responses. We look into it below.

_As with all research, we have no affiliation with any of the vendors mentioned, and were not paid to mention them. More_ [_in our ethics policy_](https://blog.pragmaticengineer.com/ethics-statement/) _._

#### Data source

Most responses come from Bluesky and X, _and it’s noticeable that Bluesky seems to have consistently more developers active on it recently, compared to X. We cover more on Bluesky’s popularity spike in the Industry Pulse section below._

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXddow3qdPbCmcFlj5yicRMwaV-0rxzEiWlS2FmGbvEOgR0sxwg6nmWn0Bcluq0TgYKaWPi3iu8dYeMb_l9WaQYlTmwbHKJ49GbrMSKB8_yQ0yoI9Ayf6EVhrlwojM5aAFynnP_rDg?key=bO5Q7koOC6C5VM7UtrDo6dZi)_Of 155 responses, 77 were posted on Bluesky, 62 on X and 16 on Threads_

**This data is likely to be biased towards early tech adopters and non-enterprise users,** asI posted on social media, and self-selecting software engineers active on those sites who are likely to be up-to-date on new tools, and willing to adopt them. There were more replies from developers at smaller companies like startups or smaller scaleups, and very few respondents from larger companies.

Data from early adopters tends to indicate where innovation is within tooling. However, many tools which early adopters use never go mainstream, often because status-quo vendors adapt their tooling for customers before new competitors can take too many customers. In this case, “mainstream” IDEs are Visual Studio, Visual Studio Code, and JetBrains IDEs. Their competitors intent on disrupting the status quo are the new IDE startups which have launched within the past couple of years.

#### Favorite IDEs

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeAdHinhatZTXfZxicixAiS3z-NWdSF7GyI05cp_QKX5kaAlOlPFDD3AjQQBdZyDeHaz0xq2EMTSx_viaelnd1WPM4VEEm8vMgDNLRcgwabTAfcyIEBsQOq4_jbeCiRYqcih9QBNg?key=bO5Q7koOC6C5VM7UtrDo6dZi)IDE that devs name as their favorites

Most popular by number of mentions:

1. [**Cursor**](https://www.cursor.com/?ref=blog.pragmaticengineer.com). An AI-first code editor, rapidly gaining popularity.
2. [**Visual Studio Code**](https://code.visualstudio.com/?ref=blog.pragmaticengineer.com) with GitHub Copilot. Most respondents using Microsoft’s free IDE reported using GitHub Copilot within this IDE. Visual Studio Code supports many extensions, including the likes of Supermaven and Cline (see below).
3. [**A JetBrains IDE**](https://www.jetbrains.com/ides/?ref=blog.pragmaticengineer.com) with GitHub Copilot. JetBrains makes language-specific IDEs. Those mentioned were IntelliJ, PyCharm, PHPStorm, and RubyMind.
4. [**Windsurf Editor**](https://codeium.com/windsurf?ref=blog.pragmaticengineer.com) **.** An “agentic IDE” released by Codeium just two weeks ago, which is attracting users fast.
5. [**Zed**](https://zed.dev/?ref=blog.pragmaticengineer.com) **.** A next-generation code editor designed for collaboration with AI.
6. [**Neovim**](https://neovim.io/?ref=blog.pragmaticengineer.com) with Copilot. Neovim is a Vim-based text editor supporting plenty of extensions, including GitHub Copilot.
7. [**Supermaven**](https://supermaven.com/?ref=blog.pragmaticengineer.com): not an IDE, but an AI completion utility that works in IDEs like VS Code, or JetBrains IDEs. It was acquired last week by Cursor, which looks a smart acquisition.
8. [**Aider**](https://aider.chat/?ref=blog.pragmaticengineer.com): a terminal-based pair programming assistant, not an IDE. Those using Aider have an IDE on the side, parallel with AIder.
9. [**Cline**](https://github.com/cline/cline?ref=blog.pragmaticengineer.com): an extension, not an IDE. It’s an autonomous coding agent integrating into IDEs

IDEs in the ‘other’ slice with a couple of mentions:

- [**Cody**](https://sourcegraph.com/cody?ref=blog.pragmaticengineer.com) by Sourcegraph: a coding assistant integrating into IDEs like Visual Studio and JetBrains IDEs.
- [**v0**](https://v0.dev/?ref=blog.pragmaticengineer.com) by Vercel: a text-to-design interface specialized for frontend projects generation (React and NextJS projects)
- [**Replit AI Agent**](https://replit.com/ai?ref=blog.pragmaticengineer.com): an IDE to work with an AI agent to generate code
- [**Bolt.new**](https://bolt.new/?ref=blog.pragmaticengineer.com) by Stackblitz: create full-stack web apps from a single prompt
- [**Neovim Avante**](https://github.com/yetone/avante.nvim?ref=blog.pragmaticengineer.com): a Neovim plugin designed to emulate the behaviour of the Cursor AI IDE
- [**Eclipse Theia**](https://theia-ide.org/?ref=blog.pragmaticengineer.com): an open source IDE, which [recently shipped](https://eclipsesource.com/blogs/2024/10/08/introducting-ai-theia-ide/?ref=blog.pragmaticengineer.com) AI support
- [**Augment Code**](https://www.augmentcode.com/?ref=blog.pragmaticengineer.com): an AI platform designed for teams
- [**Continue.dev**](https://www.continue.dev/?ref=blog.pragmaticengineer.com): an open source AI assistant
- [**Pear**](https://trypear.ai/?ref=blog.pragmaticengineer.com): an open source AI editor

#### Pricing: are all tools heavily subsidized?

All the tools utilize AI models for generating code, and these operations cost money to execute! Even so, several tools are free – with a limit on usage; but even paid-for prices feel very reasonable for professional developer tools.

**Free tools (for basic usage):**

- [Zed](https://zed.dev/blog/zed-ai?ref=blog.pragmaticengineer.com) (free for signed-in users during the initial launch period, thanks to a partnership with Anthropic)
- [Cursor](https://www.cursor.com/pricing?ref=blog.pragmaticengineer.com) (2-week trial)
- [Windsurf](https://codeium.com/pricing?ref=blog.pragmaticengineer.com) (individual free plan)
- [v0 by Vercel](https://v0.dev/pricing?ref=blog.pragmaticengineer.com) (individual free plan)
- [Replit AI Agent](https://replit.com/pricing?ref=blog.pragmaticengineer.com) (starter plan)
- [Cody](https://sourcegraph.com/pricing?ref=blog.pragmaticengineer.com) (Free plan)
- [Bolt.new](https://bolt.new/?ref=blog.pragmaticengineer.com) (2M free tokens during the Thanksgiving period)
- [Jetbrains AI](https://www.jetbrains.com/ai/?ref=blog.pragmaticengineer.com) (7-day trial)

**Tools costing $10-20/month for professional-grade capabilities:**

- [Cody](https://sourcegraph.com/pricing?ref=blog.pragmaticengineer.com) ($9/month, Pro plan)
- [GitHub Copilot](https://docs.github.com/en/copilot/about-github-copilot/subscription-plans-for-github-copilot?ref=blog.pragmaticengineer.com) ($10/month, Individual plan)
- [JetBrains AI](https://www.jetbrains.com/ai/?ref=blog.pragmaticengineer.com) ($10/month, Pro plan)
- [Replit AI Agent](https://replit.com/pricing?ref=blog.pragmaticengineer.com) ($15/month, Core plan)
- [Stackblitz](https://stackblitz.com/pricing?ref=blog.pragmaticengineer.com) ($18/month, Pro plan)
- [Cursor](https://www.cursor.com/pricing?ref=blog.pragmaticengineer.com) ($20/month, Pro plan)
- [v0 by Vercel](https://v0.dev/pricing?ref=blog.pragmaticengineer.com) ($20/month)
- [Claude](https://www.anthropic.com/pricing?ref=blog.pragmaticengineer.com) ($18/month, Pro plan) or [ChatGPT](https://openai.com/chatgpt/pricing/?ref=blog.pragmaticengineer.com) ($20/month, Plus plan): necessary to subscribe for tools like [Aider](https://aider.chat/?ref=blog.pragmaticengineer.com), [Cline](https://github.com/cline/cline?ref=blog.pragmaticengineer.com) or [Eclipse Theia](https://eclipsesource.com/blogs/2024/10/08/introducting-ai-theia-ide/?ref=blog.pragmaticengineer.com), or when using your preferred model with some tools

Team and enterprise prices are more expensive across all tools; usually around double the individual cost. Several add enterprise features like enforcing privacy, admin dashboards, centralized billing, etc.

The only tool costing above $20/month is [Augment Code](https://www.augmentcode.com/?ref=blog.pragmaticengineer.com), which charges $60/month, per developer. Assuming there’s a productivity boost from using this tool, even this lofty price tag would be a bargain.

**As such, these prices feel heavily subsidized by vendors, who may be offering capabilities at a loss.** Giving away GenAI functionality for free or at a low price, means vendors must fund the infrastructure powering these models from sources other than revenue.

There is a reasonable expectation that over time, the cost of generating tokens will decrease. However, right now, any engineer making heavy usage of code generation is likely getting good value for money, in terms of the compute required for code generation on larger codebases.

With that, let’s look at the most popular IDE startups, and why engineers prefer them over established tools like VS Code.

#### Cursor

The AI IDE startup was founded in 2022, and released the first version of their IDE in March 2023. My sense is that the popularity of Cursor started increasing in around July 2024, when they added support for the Sonnet 3.5 model and made it the default.

Here’s some reasons why Cursor is the favorite IDE of developer Roman Tsegelskyi, as [shared by him](https://x.com/romantseg/status/1859570472536457655?ref=blog.pragmaticengineer.com):

> “Cursor \[is my favorite\] even after trying the competitors. Small things standout:
>
> 1\. Cursor rules, and ability to save context
>
> 2\. Fast apply compared to competitors
>
> 3\. Composer
>
> Overall, I feel that Cursor also produces better results for me. However, I can't fully understand why!”

**Composer** is a feature that several engineers mentioned as the main reason they use Cursor. It’s an AI agent-like feature that can work across several files, following instructions to implement functionality described in the prompt. Here’s [an example](https://x.com/Dimillian/status/1861108443781775611?ref=blog.pragmaticengineer.com) from iOS developer, Thomas Ricouard, instructing Composer to extract key views on a screen of an iOS app into their independent views, and the tool doing the task:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdtlE1cm5JdB0x_h4zDSKlJpnP7yzjUU4c0ZF3fJzmbs_qNDMzOjyWxwDBf9ZVPeRFSIkOhf3iKzRrM4eE6J6e9ejRER6qLbzWeyCufomexRgKYeBurLSarsL39mqwlcTIJFqLw?key=bO5Q7koOC6C5VM7UtrDo6dZi)_Composer is on the right of the IDE, and works across several files. Source:_ [_Thomas Ricouard on X_](https://x.com/Dimillian/status/1861108443781775611?ref=blog.pragmaticengineer.com)

Other useful features for developers:

- **Better code generation.** Cursor choosing to use Sonnet 3.5 as their default model seems to have been a smart move. GitHub Copliot seemed to respond three weeks ago [by ditching OpenAI exclusivity](https://newsletter.pragmaticengineer.com/i/150994583/github-copilot-ditches-chatgpt-exclusivity?ref=blog.pragmaticengineer.com), and allowing developers to also use Anthrophic’s newest LLM model for code generation.
- **Speedy.** A common take was that Cursor felt faster compared to other tools.
- **Chat**. Several developers like the dedicated chat window, where you can interact with an LLM without leaving the development environment.
- **Easy in-line editing.** Easy to select several lines, then add instructions to the AI on how to edit them
- **Familiarity.** As a Visual Studio Code fork, the user interface is familiar to all VS Code
- **Switching models**. This reveals how different LLMs work, and developers can choose the one that fits best.

There are developers who used Cursor for a while, then moved on. The most common complaint I saw was that Cursor [gives too many](https://bsky.app/profile/abcamara.com/post/3lbhgssocg22s?ref=blog.pragmaticengineer.com) suggestions, and too often; to the point of feeling over-intrusive.

#### Windsurf

This is a recently-released AI code editor, built by Codeium. I sense a similar buzz about it as when Cursor came out, but now Cursor is the one being compared . Windsurf focuses on further improving the collaboration flow with GenAI, and has an interface which makes it a lot easier to follow what the AI is doing.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXda-OrWHrTIP6XLghQcbzx0zKTmLB3QJcfuSTOd5t4HE85ZogfHHv4qt7bFRD-NAm0yiWrRZ9NSMZQC_fpRG1aJl-g6OxRPgPHZ16pz37E9xAjUiXHO0WlIkXGKXbw5Wwg0vjwowA?key=bO5Q7koOC6C5VM7UtrDo6dZi)_Windsurf makes it easier to follow what the AI does. Look right to inspect each small diff. Source: Wes Bos_ [_on X_](https://x.com/wesbos/status/1856806422899822999?ref=blog.pragmaticengineer.com)

Techies said Windsurf is even more helpful [when debugging](https://x.com/manosaie/status/1858714613480616319?ref=blog.pragmaticengineer.com), that it helps [keep people in the coding loop](https://x.com/SaquibOptimusAI/status/1857818353064358107?ref=blog.pragmaticengineer.com), and proactively [offers refactoring of messy codebases](https://x.com/morganic_io/status/1859309280576635141?ref=blog.pragmaticengineer.com).

**Cascade** is one of Windsurf’s “killer” features. Similarly to Compose by Cursor, Cascade is an agentic chatbot to collaborate with across multiple files. It has a “write code” and a “chat” mode. It can also run terminal commands.

Here’s [a comparison](https://x.com/amuldotexe/status/1861014416906756167?ref=blog.pragmaticengineer.com) between Cursor and Windsurf by former product manager Amul Badjatya, who uses both for coding:

> “I've used the Windsurf editor for 30+ hours and Cursor for 150+ hours in last 8 weeks (premium subscription of both)
>
> 1\. The Cascade workflow of Windsurf is superior to the Compose workflow of Cursor, with better indexing (+ code context). Cursor is really bad at it, while Windsurf is just so good, especially when a codebase is evolving fast.
>
> 2\. Windsurf Cascade can run terminal commands, but Cursor Compose cannot. This is important because copy-pasting stuff from the terminal no longer breaks your flow.
>
> 3\. Cursor’s Claude gets “tired” really quickly, just 30-60 minutes into coding. Meanwhile, Windsurf’s Claude is far more consistent in quality during the first few hours. It’s necessary to restart Cursor multiple times to keep the AI features responsive.
>
> 4\. Cursor has a @web tag which helps you assimilate the latest information online, Windsurf does not.
>
> 5\. I can never update Markdown files (.md files) on Cursor Compose. They are somehow always half-updated in the file, half updated in the chat. I see similar problems when using other models: instead of modifying files, they reply in chat.
>
> I am using Cursor right now for non-code research work due to @ web feature. My code-related work is driven primarily on Windsurf. I’m waiting for code indexing to get better on cursor.
>
> **Both tools are far ahead of Copilot or other plugins I've used.** I really like both of them.”

It’s rare to see a new IDE be so popular, even with early adopters. I reached out to the Windsurf team for more details about the development of their innovative tool. Their response:

**_How big is the team at Windsurf?_**

‘The engineering team as a whole is upwards of 50 people. Product engineering, research, and infrastructure all had to come together to create the Windsurf experience – especially Cascade.’

**_How did the team come up with Cascade?_**

‘We started with the existing paradigms of AI usage:

- Copilots are great because of their collaborativeness with the developer; the human is always in the loop. That being said, to keep the human in the loop, copilots are generally confined to short-scoped tasks.
- Agents are great because the AI can independently iterate to complete much larger tasks. The tradeoff is that you lose the collaborative aspect, which is why we haven’t seen an agentic IDE (yet). An IDE would be overkill.

‘Both copilots and agents are powerful, but have generally been seen as complementary because their strengths and weaknesses are indeed complementary.

**‘The idea of Cascade really stemmed from the question: “what if the AI had the best of both worlds,** what if the AI was capable of being both collaborative and independent? This quality is one aspect of what makes humans special.

‘We knew that for this to work, we would need to have a series of purpose-built models, the latency would have to be very low for these agents to feel “collaborative.” and we’d have to find the right way to combine knowledge sources, tool calls, and realtime tracking of developer behavior. These were research problems that had to all be solved to make possible this new paradigm, which we have dubbed as Flows. Cascade is the flow evolution of chat, but it is just the beginning.’

**_Which LLM does Cascade use?_**

‘We use a set of many models. Some are third-party models like Anthropic's or OpenAI's for some of the long-context reasoning steps, while we have other models for our LLM-based retrieval, fast application of code changes, and more.’

**_Did you use Windsurf to build Windsurf?_**

‘Yes! Many core features we've built into Windsurf were built with Windsurf! While forking VS Code, Windsurf was a huge accelerant for helping developers navigate through the new codebase quickly and make changes.’

**_Can you give an example of a large codebase that uses Windsurf, and how large it is?_**

‘Henry Shi, the cofounder of Super.com (a $100MM/yr business) [used it on their large codebase](https://x.com/henrythe9ths/status/1856868998023188548?ref=blog.pragmaticengineer.com), which has millions of lines of code in the monorepo, supporting their frontend across 10+ domains.’

#### Zed

This IDE was publicly released [in March 2023](https://zed.dev/blog/beta?ref=blog.pragmaticengineer.com), the same month as Cursor launched. The tool is built by [a core team of 14 developers](https://zed.dev/team?ref=blog.pragmaticengineer.com), and is one of the only AI tools to offer [free, unlimited AI completion](https://zed.dev/blog/zed-ai?ref=blog.pragmaticengineer.com) for registered users – thanks to a collaboration with Anthropic. _This feature will surely become a paid product, in the future._

Here’s why Zed is the favorite editor of software engineer and founder, [Siddhart Jha](https://x.com/clearlysid/status/1859570176175505713?ref=blog.pragmaticengineer.com):

> “It’s easy to provide specific files to the ai context window, choose models, use completions from copilot/supermaven.
>
> I like that the ai features are unobtrusive and stay out of the way until needed.”

Other reasons devs prefer Zed:

- **Very good Vim mode**: for engineers preferring this kind of user interface. For devs who love Vim, Zed seems to be a popular choice of editor.
- **Fast.** A frequent compliment is how snappy both the editor and LLM responses are. The Zed team implemented [prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching?ref=blog.pragmaticengineer.com) for Anthropic models to get a speed boost.
- **Keymaps**. The editor can be configured to use the key mappings of the IDEs you’re used to; be it JetBrains, Sublime Text, VSCode, or [another](https://zed.dev/docs/key-bindings?ref=blog.pragmaticengineer.com). This makes it particularly easy to switch for those used to JetBrains IDEs.
- **Several models.** The editor nicely integrates with several LLMs.
- **Zed configs**: these files can be easily shared. Here’s [an example file](https://gist.github.com/pchalasani/9e71c58d2f846412b253ae0ecf0ae70e?ref=blog.pragmaticengineer.com)

#### Notes on Visual Studio Code and JetBrains IDEs

**Engineers sticking with Visual Studio Code or JetBrains seem to mostly use code autocomplete.** The big “wow” moments of Cursor and Windsurf are their multi-file editing and agentic capabilities. Devs hooked on this functionality don’t seem to want to go back to the more limited experience offered by GitHub Copilot, and most AI integrations with Visual Studio Code and JetBrains IDEs.

There are plugins like [Cline](https://github.com/cline/cline?ref=blog.pragmaticengineer.com) that work across several files, but the user experience is more limited and confined to being an extension, in contrast to how Cursor and Windsurf build a new type of IDE around these features.

**Where is JetBrains AI?** An interesting observation about JetBrains is that most devs using its IDEs also use GitHub Copilot as the LLM, even though JetBrains offers its own JetBrains AI. This service is at exactly the same price point as Copilot, so it would be expected that devs on JetBrains IDEs use the provided LLM tool. But it doesn’t seem to be happening. Feedback [shared](https://bsky.app/profile/stieffers.bsky.social/post/3lbhgueilyk2u?ref=blog.pragmaticengineer.com) by engineers is that JetBrains AI is not as good as the competition: specifically, it doesn’t ingest code as efficiently as others.

Given that AI assistants continuously improve, as and when JetBrains does so then it might be able to bring back customers already using their IDEs.

#### Is this an IDE revolution?

Many IDEs have launched and gained momentum in the span of 18 months, and the innovation isn’t over yet.

**Expect even more startups to launch new AI-powered IDEs.** There are several AI startups that have raised hundreds of millions of dollars and are yet to release a public-facing product, including:

- **Magic.dev:** the stealth generative AI startup [raised](https://techcrunch.com/2024/08/29/generative-ai-coding-startup-magic-lands-320m-investment-from-eric-schmidt-atlassian-and-others/?ref=blog.pragmaticengineer.com) $320M in funding in August, with ex-Google CEO Eric Schmidt also investing. The company has not yet released a product, but is working on something new.
- **Cognition A** I: the developers behind the [“AI developer” Devin](https://newsletter.pragmaticengineer.com/i/143712983/devin-reversing-ambitious-claims-and-an-open-source-threat?ref=blog.pragmaticengineer.com) raised $175M also in August, and have yet to release a product publicly.

**Don’t count out Microsoft any time.** I was surprised that Cursor is far more popular than Visual Studio Code and GitHub Copilot because Microsoft has a strong brand, superior distribution, and the tech giant seemed to out-execute GenAI startups in 2021-2024 with GitHub Copilot.

GitHub even previewed [GitHub Workflows](https://newsletter.pragmaticengineer.com/p/the-pulse-92?ref=blog.pragmaticengineer.com) in March, which was supposed to be the evolution of Copilot, and would have brought agentic behavior to Visual Studio. But something seems to have happened since then. GitHub got “stuck” with what felt like an outdated LLM model (GPT 4.0), and did not respond to functionality like Composer by Cursor and Cascade by Windsurf.

At the same time, Microsoft is still in an enviable strategic position in this AI-powered IDE competition:

- **Nearly all “winning” IDEs are built on top of Visual Studio Code.** Both Cursor and Windsurf are Visual Studio Forks. This means that Microsoft can integrate innovations created by those forks quickly enough into Visual Studio Code and Visual Studio. The development effort for this takes months, not years.
- **The GitHub team remains nimble, and will surely respond.** When Microsoft acquired GitHub, it did not integrate the organization into Microsoft, but has left it operating relatively independently. This means the GitHub team can move quickly when needed. Already, GitHub Copilot added support for more advanced LLM models like Sonnet 3.5.
- **Microsoft’s distribution advantage is not going anywhere.** No other large company can sell enterprise tools to larger companies like Microsoft. For it to remain the vendor offering the most-used AI-powered IDEs, it doesn’t need to be the best on the market because large companies with Microsoft enterprise deals will convert much easier to Visual Studio and GitHub Copilot, rather than to a startup’s tool.

**Zed is a promising direction, proving it’s still possible to start from scratch.** Across the popular IDEs, Zed is the only non-Visual Studio Code fork. The IDE is built from scratch, using Rust. Zed defies what seems to be the conventional wisdom these days: that to build an IDE that gets adoption, it’s unwise to _not_ fork Visual Studio Code.

**AI-powered IDEs are firmly at the “booming innovation” stage.** There are so many AI-powered IDEs because there’s an opportunity to capture a large part of the developer market; this is a market worth billions of dollars in annual revenue, with tech professionals willing to pay for advanced tools that improve their output.

It’s clear that Microsoft is being out-innovated by startups like Cursor, Windsurf, Zed, and others with plentiful investment in becoming the winner of an AI-powered IDE battle to be the next JetBrains of the AI era. Meanwhile, JetBrains is the #2 IDE tools maker, globally, behind Microsoft, with [16 million developers](https://finance.yahoo.com/news/jetbrains-presents-2023-annual-highlights-140000963.html?ref=blog.pragmaticengineer.com) using its products; so it’s already a pretty big target to shoot at.

_Good luck to all teams building innovative IDEs. As a software engineer, why not try some of the new challenger products; they may help increase productivity and make day-to-day work easier!_
