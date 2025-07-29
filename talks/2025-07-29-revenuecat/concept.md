
I am gonna talk for 25 min for the 世界中で注目のAI駆動開発・バイブコーディングの最前線を六本木ヒルズ。
The audience is developers, beginners, non-engineers. but mostly people who want to win the contest, all Japanese.

Basically I wanna talk about The Stack to Win this hackathon.
Think well the whole storytelling, for each category of tools also mention some alternatives, and why the choosen ones are worth. 

You can also include other categories I didn't mentioned that are sponsoring the contest.

本当は教えたくないけど、Very Opinionated 勝てる技術スタックを披露します。
Lets call this 「G Stack」（ジー・スタック）.

For the presentation I should present myself as CyberAgent employee first for Enabling Team for Developer Productivity. But at the end I want to catch the audience with strong message. and all the 有料級 info I am providing, make like a paywall pixelated that if audience wants to hear more, I am open to discuss and share my knowledge, contact me at Twitter (X) and a Pay button. @gunta85
For any inquiry, my own company is G Productions, Inc Wyoming  https://g-productions.studio

Also for the marketing part, lets add a teaser I made myself using all AI (https://dots.ly)

Make the whole slides compelling, full of latest info you research, some short nice comparisons, icons, etc. Think well of a viral title, etc. Lets go!
Also dont forget to write the speaker notes!

---

So lets separate in phases:


0 Mentality and values

Need for Speed!

Beauty, Speed, Performance, Quality, Experimentation and Security.

How?
- Beauty/Sense: RLHF yourself, design stuff in Canva/Figma/v0, repeat.
- Development Speed: Use the best tech stack. Best tools. Work smarter not harder. Build time is key. Realtime is key.
- Performance: Realtime. If possible Local-First. No delays over 0.3s.
- Experimentation: As many A/B tests and data as possible. Without needed to redeploy.
- Security: First, use tech stack that make it harder to leak.

Context Is King
- Project as Code
- Business as Code

Experiment Is King



1 Vibe Research
Start chatting about what you want to do.
Get also market validation, by searching for pain points.
Recommend: OpenAI o3, Grok 4, Claude Code Opus 4 Research
Decide name, features, persona, marketing strategy, platforms.

2 Vibe Coding
When you want to 
Recommend using: Bolt for Web.
a0.dev for Native Apps.
In particular a0 uses Convex and Expo since they are the best for AI generated code.

3 Context Engineering
Project as Code

a. Planning: Project 
Gather all the info you can in Markdown documents.
Recommend: Use Kiro or equivalent Claude Code.
Prev: whiteboard

b. Plan Tasks
Your Project manager.
Recommend: Use TaskMaster
Prev: Letting the code agent do whatever it wants freely

c. Tech Stack Starter (VERY OPINIONATED)
Here it changes wheter its Web or Native.

# Common

## Language: Try to use TS for everything.
Why: No time for context switching, share schemas between FE/BE, typed languages are better for AIs, less code, etc.
Also: use tsgo (TypeScript 7 preview) for 10x performance.

## Tools: Try to use as much as Rust/Native tools as possible
Ie. Rolldown, Biome, etc.

## Database: Convex
This is without a doubt the best, its realtime, the DX is the best.
This works the best with AI generated code, etc. Unless specific requirements, use this.
This is the most important piece.

## Runner/package: Bun
For max performance.

## Version manager: Proto
Written in rust, fastest

## Monorepo builder: Moon
For max perf.

## Storage: Convex, Cloudflare R2
Convex for faster dx, R2 for cheaper.

## Send Mail: Resend
Can use React Mail, nice DX.

## UI Framework: React
Its the one that has most components available and that works both for Web and Native.
We want 1 source code for everything if its possible.

## Formatter: Ultracite
is the best settings for the most complete formatter: Biome
https://www.ultracite.ai/

## Bundler: Vite
Fastest. Now can use Rolldown (rolldown-vite) for max performance.

## Pages Hosting: Cloudflare Workers
Is the most lightweight, global distributed, cheap.

## Images Hosting: Cloudflare Images
Is the most cheap, responsive and simple Image as a Service.

## Voice generation: Elevenlabs
Is the most articulate high quality service.

## AI models: Openrouter
Can use easily and meter all models, can fallback to others when rate limitted etc.

## AI Agents: Convex Agents, Mastra
Convex for simple agents, Mastra for full agents.

## Auth: BetterAuth, Clerk, WorkOS
BetterAuth for cheaper usage and your own handling.
Clerk for having someone else take care of the sensitive stuff, and ready to use React Components.
WorkOS for Enterprise.

## For Payment: RevenueCat
And Stripe for Web.

# Web

## Base framework for static pages, marketing, LPs: Astro (Mostly SSG)
Why: It has the best performance and loading time, best for SEO, period, can use React in islands for small interactive parts.

## For the App: TanStack Starter (Mostly SPA and SSR)
Why: Its based on Vite, the DX is better than others, very fast. 
Using along TanStack Router, file based routing, all type checked, can store state in URLs nicely, etc.

## Store: XState Store
It is simple, similar to Zustand but better, and can upgrade to XState when the need arises for FSM.

## Styles: Tailwind
Easier to do.

## Components: Shadcn/ui
Common nowadays, easy to use.

## Themes: Tweackcn
So that your stuff doesnt look all the same.
https://tweakcn.com/

## Ready to use Components: 21st
Because 
https://21st.dev/s/hook

## CSS minifier
Lightning CSS, Vite plugin.
Much faster.


# Native

## Crossplatform: Expo
Over the air updates, realtime, so much faster than native development.

## Styles: Nativewind
The native part

## UI Components: React Native Reusables, Gluestack
Both use Nativewind, shadcn style

## UI Component: Fast list
Legend List
https://legendapp.com/open-source/list/api/gettingstarted/

## Store: Legend State
https://legendapp.com/open-source/state/v3/
Using MMKV as persistence for max performance.

---

d. Build

Now finally to use AI coding agents.

Some of the good for this month: 
Claude Code, Gemini CLI, Cursor, AMP, Warp.

## Sub agents 
List of lots of sub agents for Claude Code.
https://github.com/contains-studio/agents

## Orchestrator
This is an active area and there is no winner yet.

For simplicity: https://conductor.build/ for Cursor for parallel agents.

Then take a coffee! 




e. Testing

## For unit test: Vitest or Bun test
Fast

## For Native E2E: Maestro
Easy to use

## For Web E2E: Playwright
Most common

## For load testing: k6
Easy to use


f. Deploy

## For infra as code: Alchemy
Native pure TS iac for any API
https://alchemy.run/

g. Telemetry

## For errors: Sentry
The most common

## For logs & observability: BetterStack

h. Experiments
Experiments is king!

## For analytics, replays, experiments: Statsig
No need for GA. Like posthog but cheaper and more in depth features.

## For more advanced paywalls: Superwall
Has integration with RevenueCat

i. Marketing

## For App Store Optimization
SplitMetrics

## For marketing and Push notifications: One Signal
Generous free tier.

## For attributions: Singular

## For screen capture video: Screen Studio
Mac only.

## For images: Midjourney
Best quality

## For video generation: Sora, Veo
Not bad

## For audio: Elevenlabs
Voice also generated, good quality.

## For editing: CapCut
Tiktok app.

