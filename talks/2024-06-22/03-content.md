---
layout: quote
---

# Why Choose Hono?

# Tech Stack from the Future

## June 22, 2024


---
transition: slide-up
level: 2
---

# Introduction to one product: AI Worker (April)

<SlidevVideo autoplay controls width="70%">
  <source src="/AIWorkerPortal.mp4" />
</SlidevVideo>

---

# Languages that were used in the monorepo (April)

<logos-typescript-icon class="text-3xl "/> 
`Frontend` | `Backend` | `Scripts`


![Languages](/langs.png)


---
layout: before-after
---

# ☑️ Local First

::before::



::after::

- <logos-linear-icon /> [Linear](https://linear.app/)
  - Chosen by engineers for a reason
  - Superior UX
  - Better operability than Notion
  - Very fast response
  - Uses Local First Architecture


---
layout: before-after
---

# 📦 JS Bundler

::before::

- <logos-webpack /> Webpack

::after::

- <logos-vitejs /> [Vite](https://vitejs.dev/)
  - Partially made in Rust
  - Fast during development

## 🔮 FUTURE
- <img src="https://www.farmfe.org/img/logo.png" alt="Farm" width="28px" style="display: inline-block;"/> [Farm](https://www.farmfe.org/)
  - Made with Rust
  - 100% compatible with Vite
  - Fast at all times
  - v1.0 was just released
  
---
layout: star-history
repos: vitejs/vite,webpack/webpack
---

# ⭐️ Vite

---
layout: star-history
repos: farm-fe/farm
---

# ⭐️ Farm



---
layout: before-after
---

# ☁️ Cloud

🆕 Cloudflare is **no longer just an "Edge CDN"**.<br>
It has evolved into a competitive and reputable cloud vendor.

::before::

- <logos-google-cloud /> GCP (40 regions)
  - 🇯🇵 DC: Tokyo, Osaka
  - 🇨🇳 DC: None
- <logos-aws /> AWS (33 regions)
  - 🇯🇵 DC: Tokyo, Osaka
  - 🇨🇳 DC: None
- <logos-microsoft-azure /> Azure (60 regions)
  - 🇯🇵 DC: Saitama, Osaka
  - 🇨🇳 DC: 3

::after::

- <logos-cloudflare-icon /> Cloudflare (310 regions)
  - 🇯🇵 DC: 4 (Tokyo, Osaka, Fukuoka, Naha)
  - Region Earth: 🇨🇳 DC: 37, 🇺🇸 DC: 53
  - 💸 Significant cost benefits
  - ⚡️ Faster deployment (10x or more)
  - 🆓 No storage egress fees
  - 🆓 **No charges for I/O operations**
  - 🆓 Free telemetry
  - 🖥️ GPU and LLM inference
  - 😄 It's Simple and Fun! **(Important)**

---

# <logos-cloudflare-icon /> What can be used in Cloudflare now

- [**🗃️ D1 Database (GA)**](https://developers.cloudflare.com/d1/): SQLite-based, easy-to-use, multi-tenant distributed database.
- [**🚀 Hyperdrive**](https://developers.cloudflare.com/hyperdrive/): Enhances databases to feel distributed and faster.
- [**📊 Worker Analytics (GA)**](https://developers.cloudflare.com/analytics/analytics-engine/): [ClickHouse-based](https://clickhouse.com/), time-series db that is cheap, faster than Prometheus.
- [**📬 Queues**](https://developers.cloudflare.com/queues/): Send and receive messages with guaranteed delivery, with free egress.
- [**🔗 KV Bindings**](https://developers.cloudflare.com/kv/reference/kv-bindings/): Live within environment variables.
- [**🧠 AI (GA)**](https://developers.cloudflare.com/workers-ai/): Supports [Llama 3](https://blog.cloudflare.com/meta-llama-3-available-on-cloudflare-workers-ai), utilizes GPU for inference, and allows [Bring Your Own LORAs](https://blog.cloudflare.com/fine-tuned-inference-with-loras).
- [**🌐 AI Gateway**](https://developers.cloudflare.com/ai-gateway/#ai-gateway): Now supports Claude, Azure, Bedrock, and Vertex.
- [**🐍 Workers Python**](https://blog.cloudflare.com/python-workers): FastAPI, Langchain, Numpy, etc. can now be run on Cloudflare Workers.
- [**🚦 Rate Limit**](https://developers.cloudflare.com/ai-gateway/get-started/configuring-settings/): Simplified bindings to rate limit your API.
- [**🎥 Cloudflare Media**](https://blog.cloudflare.com/whats-next-for-cloudflare-media): Create your own video conferencing solutions, like Zoom.
- [**🔍 Tracing**](https://blog.cloudflare.com/cloudflare-acquires-baselime-expands-observability-capabilities): Acquired [Baselime](https://baselime.io/), now offering free OpenTelemetry.
- [**⏱️ Realtime**](https://blog.cloudflare.com/cloudflare-acquires-partykit): Acquired [PartyKit](https://www.partykit.io/), easily create real-time collaboration like Figma.
- [**📲 RPC**](https://blog.cloudflare.com/javascript-native-rpc): [Cap'n Proto-based](https://capnproto.org/rpc.html), JS-native easy 0-latency RPC system in Workers.


---
layout: before-after
---

# 🖥️ Backend Language

:: before ::

- <logos-go /> Golang

::after::

- <logos-typescript-icon /> TypeScript

---
layout: image
image: /typescript.png
---

---
layout: star-history
repos: microsoft/TypeScript
---

# ⭐️ TypeScript

---
layout: two-cols
---

<style>
.col-right {
border-left: 1px solid #ddd;
}
</style>

|  |  <br> Features | <logos-typescript-icon />  | <logos-go /> |
|:---:|---|:---:|:---:|
| <flat-color-icons-parallel-tasks /> | Concurrency and Parallelism | ❌ | ✅ |
| <nonicons-type-16 class="text-blues-400" /> | Basic Type Safety | ✅ | ✅ |
| <mdi-null class="text-yellow-400" /> | Null Safety | ✅ | ❌ |
| <ooui-error class="text-red-400" /> | Error Safety | ❌ | ✅ |
| <ri-share-box-fill /> | Ease of Distribution | ✅ | ✅ |
| <logos-microsoft-windows-icon /> | Windows Support | ✅ | ✅ |
| <file-icons-terminal /> | Standalone Binary | <logos-bun /> | ✅ |

::right::

|  |  <br> Features | <logos-typescript-icon />   | <logos-go />  |
|:---:|---|:---:|:---:|
| <logos-arc  /> | Runs in Browser | ✅ | ❌ |
| <logos-cloudflare-workers-icon  /> | <span style="background-color:#FFFFE0"> **Runs on Edge** </span> | ✅ | ❌ |
| <logos-ios  /> | Runs on iOS | <logos-expo-icon /> | ❌ |
| <logos-android-icon  /> | Runs on Android | <logos-expo-icon /> | ✅ |
| <ph-pipe-fill class="text-blue-400" /> | Pipes | ❌ | ❌ |
| <oui-token-enum class="text-yellow-400" /> | Algebraic Data Types | ✅ | ❌ |
| <material-symbols-match-word-rounded class="text-red-400" /> | Pattern Matching | ❌ | ❌ |

---
layout: before-after
---

# <logos-typescript-icon /> TypeScript Runtime

::before::

- <logos-nodejs-icon-alt /> Node

::after::

- <logos-bun /> [Bun](https://bun.sh/)
  - 5 times faster execution
  - No need to transpile TS
  - CJS and ESM mixable

---
layout: star-history
repos: oven-sh/bun
---

# ⭐️ Bun


---
layout: before-after
---

# <logos-typescript-icon /> TypeScript Package Manager

::before::

- <logos-npm /> npm
- <logos-pnpm /> pnpm

::after::

- <logos-bun /> [Bun](https://bun.sh/)
  - Installs in 10 seconds
  - 30 times faster than npm

---
layout: before-after
---

# <mingcute-version-fill /> Version Manager

::before::

- <logos-bun /> No management
- <logos-homebrew /> Brew

::after::

- <img src="https://moonrepo.dev/brand/proto/icon.svg" width="20px" style="display:inline-block;" /> [proto](https://moonrepo.dev/proto)
  - Built with Rust
  - Automatic Direnv installation
  - Tools supported (50+)
    - <logos-bun /> `proto install bun`
    - <logos-nodejs-icon /> `proto install node`
    - <logos-go /> `proto install go`
    - <logos-rust /> `proto install rust`
    - <logos-python /> `proto install python`
    - ...

---
layout: star-history
repos: moonrepo/proto
---

# ⭐️ Proto


---
layout: before-after
---

# <heroicons-command-line-20-solid /> Scripts

::before::

- <devicon-bash /> Bash
- <logos-google-icon /> Zx

::after::

- <logos-bun /> [Bun Shell](https://bun.sh/)
  - Cross-platform
  - Easier logic writing
  - Understandable by juniors
  - Full TS

```ts
import { $ } from "bun"

const output = await $`ls -l`.text()
console.log(output)
```


---
layout: before-after
---

# 🖥️ Server Framework

::before:: 

- <devicon-express /> Express
- <logos-go /> Go

::after::

- <logos-hono /> [Hono](https://hono.dev/)
  - 🪶 Lightweight, Fast
  - 🧩 Simple
  - 🛠️ Rich in Middleware
  - 🔄 Multi-runtime
    - 🔓 No lock-in
    - <logos-bun /> Bun
    - <logos-nodejs-icon /> Node.js
    - <logos-aws-lambda /> Lambda
    - <logos-vercel-icon /> Vercel
    - <logos-cloudflare-workers-icon /> Cloudflare Workers

---
layout: star-history
repos: honojs/hono
---

# ⭐️ Hono



---
layout: before-after
---

# 🗄️ Database ORM

::before:: 

- <logos-prisma /> Prisma

::after::

- <simple-icons-drizzle /> [Drizzle](https://orm.drizzle.team/)
  - Lightweight, fast
  - Close to SQL
  - Migratable
  - Multi Runtime
    - <logos-bun /> Bun <logos-vercel-icon /> Vercel  <logos-cloudflare-workers-icon /> Cloudflare Workers <simple-icons-expo /> Expo <logos-arc /> Browser <logos-supabase-icon /> Supabase  <logos-electron /> Electron  <simple-icons-react /> React Native
  - Multi Database
    - <logos-postgresql /> PostgreSQL <logos-supabase-icon /> Supabase <logos-vercel-icon /> Vercel  <logos-sqlite /> SQLite <logos-mysql /> MySQL  <logos-xata-icon /> Xata  <simple-icons-turso /> Turso  <logos-neon-icon /> Neon


---
layout: star-history
repos: drizzle-team/drizzle-orm
---

# ⭐️ Drizzle


---
layout: before-after
---

# 🔍 Linter

::before::

- <logos-eslint/> Eslint

::after::

- <vscode-icons-file-type-biome /> [Biome](https://biomejs.dev/)
  - Built with Rust
  - Over 200 rules like ESLint
  - Faster

---
layout: star-history
repos: biomejs/biome
---

# ⭐️ Biome

---
layout: before-after
---

# 🎨 Formatter

::before::

- <logos-prettier /> Prettier
- <mdi-console /> dprint

::after::

- <vscode-icons-file-type-biome /> [Biome](https://biomejs.dev/)
  - Built with Rust
  - 97% compatibility with Prettier
  - 35 times faster

---
layout: before-after
---

# 🚩 Feature Flags

::before::
- <ic-baseline-build /> Custom built
- <logos-launchdarkly-icon /> LaunchDarkly
- <icon-park-solid-config /> ConfigCat
- <logos-firebase /> Firebase Remote Config
- <logos-bugsnag-icon /> Bugsnag

::after::
- <img src="https://avatars.githubusercontent.com/u/90421314?s=200&v=4" width="20px" style="display:inline-block;" /> [DevCycle](https://devcycle.com/)
  - Latency under 50ms
  - SDK: Easy to integrate
  - Pricing model: MAU billing, cost-effective
  - Usability: Intuitive DX & UX
  - Real-time updates: Via SSE
  - OpenFeature compatible: Prevents lock-in
  - IDE Extension: VSCode extension
  - Edge Flags: Provides Edge DB functionality
  - Local Bucketing

---
layout: before-after
---

# 🔐 Authentication Platform

::before:: 
- <logos-firebase /> Firebase Auth
- <logos-supabase-icon /> Supabase Auth
- <simple-icons-auth0 /> Auth0
- <simple-icons-okta /> Okta

::after::

- <simple-icons-clerk /> [Clerk](https://clerk.com/)
  - <twemoji-sparkles /> Superior **UX / DX**
  - <logos-hono /> **Hono middleware** provided
  - <mdi-react /> **React components** provided
  - <mdi-cash-multiple /> **Reasonable pricing**
  - <mdi-speedometer /> **Enhanced productivity**
  - <mdi-timer-sand /> Reduced lead time
  - <logos-stripe /> Integration with Stripe planned
  - <twemoji-flag-japan /> I contributed a [Japanese language PR](https://github.com/clerk/javascript/pull/2868/files)


<!-- ---

# <bi-translate /> Custom CLI Automatic LLM Translation



<SlidevVideo autoplay controls width="70%" >
  <source src="/AutoCat1.mp4" />
</SlidevVideo> -->

<!-- ---

# <logos-cloudflare-workers-icon /> LLM Running on Cloudflare Workers

<SlidevVideo autoplay controls width="60%" >
  <source src="/CFDemo.mov" />
</SlidevVideo> -->

---
layout: quote
---

# Recent Trends

---
layout: iframe-right
url: https://effect.website/
---

# Next Gen TypeScript

- <logos-effect-icon /> **Effect**
  - <skill-icons-golang /> No envy of Golang/Rust
  - <fluent-library-24-filled /> The **missing standard library**
  - <skill-icons-react-dark /> Popular **functional** style like React
  - <mdi-puzzle /> Composable & Reusable
  - <mdi-sync-circle /> Sync and Async code unified
  - <fluent-error-circle-24-filled class="text-red-400" /> Type-safe Error Handling
  - <pajamas-retry /> Retry processes
  - <mdi-swap-horizontal-bold /> Concurrency
  - <material-symbols-pattern /> Pattern matching
  - <vscode-icons-file-type-light-json-schema /> Schema
  - <flat-color-icons-serial-tasks /> Serialization
  - <logos-opentelemetry-icon /> Built-in Tracing & Metrics

---
layout: two-cols
---

# Effect: Where is the catch?

- Learning curve
- Functional programming patterns
- Extensive API


---
layout: intro
---

# <logos-effect-icon /> Effect Schema

## A Powerful Alternative to Zod
<br />
<logos-effect-icon /> Schema surpasses <logos-zod />Zod in key areas:

- <mdi-swap-horizontal-bold class="text-blue-500" /> **Bidirectional transformations**: Decodes and encodes, unlike Zod's one-way decoding
- <logos-effect-icon class="text-purple-500" /> **Seamless Effect integration**: Leverages dependency tracking
- <mdi-puzzle class="text-green-500" /> **Enhanced customization**: Advanced meta-information annotations
- <carbon-function class="text-orange-500" /> **Functional paradigm**: More expressive and composable code

---
layout: before-after
---

# Validation Library

:: before::
<br />

### <logos-zod /> Zod

```typescript
import { z } from "zod"

const User = z.object({
  username: z.string()
})

User.parse({ username: "gunta" })

// extract the inferred type
type User = z.infer<typeof User>
```

:: after::
<br />

## <logos-effect-icon /> Effect Schema

```typescript
import { Schema as S } from "@effect/schema"

const User = S.Struct({
  username: S.String
})

S.parse(User)({ username: "gunta" })

// extract the inferred type
type User = S.Schema.Type<typeof User>
```


---
src: ./languages.md
---



