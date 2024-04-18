---
theme: default
background: https://unsplash.com/photos/KE0nC8-58MQ/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEzMzY1OTIwfA&w=2400
title: 開発生産性を向上させた導入技術の紹介 @ 2024/4
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
author: Günther Brunner
download: true
twoslash: true
monaco: true
---


# 導入して開発生産性上がった技術を紹介

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Slidev <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: intro
---

# 自己紹介

<fluent-emoji-person-light /> Günther Brunner **（グンタ）**
<br>

<noto-calendar /> CyberAgent入社 **2012年**
<br>

<twemoji-flag-japan /> **東京**在住（現在）
<br>
<br>

<flat-color-icons-like /> <logos-openai-icon /> AI <majesticons-ux-circle-line /> UX <logos-figma /> Design <emojione-v1-lightning-mood /> Performance
<br>
<logos-spotify-icon /> Music <logos-netflix-icon /> Movies <noto-sushi /> Sushi <material-symbols-travel class="text-blue-400" /> Travel

<br>
<br>

<fa6-brands-square-x-twitter /> [@gunta85](https://twitter.com/gunta85)
<br>

<carbon-logo-github /> [@gunta](https://github.com/gunta)
<br>

<skill-icons-devto-light /> [dev.to/gunta](https://dev.to/gunta)
<br>

<simple-icons-zenn class="text-blue-400"/> [zenn.dev/gunta](https://zenn.dev/gunta)

---
layout: before-after
---

# 部署移動

::before::
- 🤖 `部署` **AI事業本部**（2年前から）
- 🔄 `事業` **AI Shift所属**（2023年7月から）
- 🎨 `職種` [**デザインエンジニア**](https://vercel.com/blog/design-engineering-at-vercel)

::after::
- 🏢 `新部署` 全社
  - **CTO統括室・Developer Productivity室**
  - 4/16付けで移動
- 🎯 `今期のミッション`
  - **🚀 生産性向上**
  - 🏃‍♂️ AI事業本部を中心に生産性を上げる

---
layout: quote
---

# 開発生産性を向上させた導入技術の紹介

## 2024/4

---
layout: iframe
url: https://ja.sli.dev/
---

---

# Slidevとは何ですか？

Slidevは**開発者向けのスライドメーカー・プレゼンター**で、以下の機能がある

- 📝 **テキストベース** 
  - Markdownでコンテンツに集中し、後でスタイルを整えられる
- 🧑‍💻 **開発者フレンドリー** 
  - コードハイライト、ライブコーディングと自動補完
- 🤹 **インタラクティブ** 
  - コンポーネントを埋め込んで表現ができる
- 🎥 **録画** 
  - 組み込みの録画とカメラビュー
- 📤 **ポータブル** 
  - PDF、PNG、またはGitHub PagesにSPAをエクスポート可能
- 🛠 **カスタマイサブル** 
  - ウェブページで可能なことは何でもできる


[Slidevについてもっと読む](https://ja.sli.dev/guide/why)

---
transition: slide-up
level: 2
---

# AI Workerの紹介（4月）

<SlidevVideo autoplay controls width="70%" >
  <source src="/AIWorkerPortal.mp4" />
</SlidevVideo>

---

# AI Workerの利用言語

<logos-typescript-icon class="text-3xl "/> 
`Frontend` | `Backend` | `Scripts`


![Languages](/langs.png)

---
layout: before-after
---

# 🛠️ 開発環境 

::before::

- <logos-intellij-idea /> IntelliJ Idea
  - IDE完成度が高い
- <devicon-vscode /> VSCode
  - Extensionが充実

::after::



- <img alt="Cursor" src="https://cursor.sh/brand/icon.svg" width="28px" style="display: inline-block" /> [Cursor](https://cursor.sh/)
  - AI機能はGitHub Copilotを大幅に超えています
  - ユーザー体験が非常に優れています
  - OpenAIからの投資を受けて急速に成長中
  - VSCodeの全ての拡張機能と設定が利用可能
    - フォークであり、定期的に更新が行われる
  - $20/月のコストは使用開始20分で元が取れるほどの価値がある

---
layout: before-after
---

# ☑️ タスク管理

::before::

- <logos-jira /> JIRA
  - タスク管理に向いている
  - 使いたい人はいない
- <simple-icons-github /> GitHub Issues
  - 開くのだるい
  - 機能が貧弱

::after::

- <logos-linear-icon /> [Linear](https://linear.app/)
  - エンジニアが使いたくなる
  - UXが素晴らしい 
  - Notionよりもサクサク
  - サクサクすぎ（強調）
  - Local First Architectureの代表プロダクト

---
layout: before-after
---

# 🌐 ブラウザ

::before::

- <logos-chrome /> Chrome
- <logos-safari /> Safari

::after::

- <logos-arc /> Arc
  - <carbon-logo-github /> GitHubのプルリクをリアルタイムで表示される[Live Folders機能がリリースされた](https://zenn.dev/t_yng/articles/a6f6ff55bef1b4)

---
layout: before-after
---

# 📦 JS バンドラー

::before::

- <logos-webpack /> Webpack
  - 2014年に[日本語初の記事を書きました](https://ameblo.jp/ca-1pixel/entry-11884453208.html)

::after::

- <logos-vitejs /> [Vite](https://vitejs.dev/)
  - 一部Rust製
  - 開発時に速い

## 🔮 FUTURE
- <img src="https://www.farmfe.org/img/logo.png" alt="Farm" width="28px" style="display: inline-block;"/> [Farm](https://www.farmfe.org/)
  - Rust製
  - 100% Vite互換性
  - どんな時でも速い

---
layout: before-after
---

# 📦 CSS バンドラー

::before::

- <logos-esbuild /> ESBuild

::after::

- ⚡️ [Lightning CSS](https://lightningcss.dev/)
  - Transpilation
  - CSS Modules
  - Bundling
  - Minification 
  - Rust製、速い
  - Viteでも使える


---
layout: before-after
---

# <twemoji-flag-united-states /> 英語Linter

::before::

- 都度PR人間が修正
- 抜け漏れ発生

::after::

- <vscode-icons-file-type-cspell /> [CSpell](https://cspell.org/)
  - CI時
  - Lefthook時

---
layout: before-after
---

# ☁️ クラウド（最も大事）

::before::

- <logos-google-cloud /> GCP（40リージョン）
  - 🇯🇵 DC：東京、大阪
  - 🇨🇳 DC：無し
- <logos-aws /> AWS（33リージョン）
  - 🇯🇵 DC：東京、大阪
  - 🇨🇳 DC：無し
- <logos-microsoft-azure /> Azure（60リージョン）
  - 🇯🇵 DC：埼玉、大阪
  - 🇨🇳 DC：3つ

::after::

- <logos-cloudflare-icon /> Cloudflare（310リージョン）
  - 🇯🇵 DC: 4つ（東京、大阪、福岡、那覇）
  - 🇨🇳 DC: 37つ
  - 🇺🇸 DC: 53つ
  - 🚫 AWSの競合になり「Edge」もう呼ばない
  - 💸 コストメリットが顕著
  - ⚡️ デプロイ速度が速い（10倍〜）
  - 🆓 ストレージエグレス料金が不要
  - 🆓 I/O操作時の課金なし（LLM呼び出し等）
  - 🆓 Telemetryが無料
  - 🖥️ GPUとLLM推論
  - 😄 楽しい！（重要）

---
layout: before-after
---

# 🖥️ バックエンド言語

:: before ::

- Golang

::after::

- TypeScript

---
layout: two-cols
---


|  |  <br> Feature | <logos-typescript-icon /> <br>TypeScript  | <logos-go /> <br> Go |
|:---:|---|:---:|:---:|
| <flat-color-icons-parallel-tasks /> | Concurrency & Parallelism | ❌ | ✅ |
| <nonicons-type-16 class="text-blues-400" /> | Basic Type Safety | ✅ | ✅ |
| <mdi-null class="text-yellow-400" /> | Null Safety | ✅ | ❌ |
| <ooui-error class="text-red-400" /> | Error Safety | ❌ | ✅ |
| <ri-share-box-fill /> | Good Distribution | ✅ | ✅ |
| <logos-microsoft-windows-icon /> | Support on Windows | ✅ | ✅ |
| <file-icons-terminal /> | Standalone Binary | <logos-bun /> | ✅ |

::right::

|  |  <br> Feature | <logos-typescript-icon /> <br>TypeScript  | <logos-go /> <br> Go |
|:---:|---|:---:|:---:|
| <logos-arc  /> | Runs in Browser | ✅ | ❌ |
| <logos-cloudflare-workers-icon  /> | Runs in Edge | ✅ | ❌ |
| <logos-ios  /> | App in iOS | <logos-expo-icon /> | ❌ |
| <logos-android-icon  /> | App in Android | <logos-expo-icon /> | ✅ |
| <ph-pipe-fill class="text-blue-400" /> | Pipes | ❌ | ❌ |
| <oui-token-enum class="text-yellow-400" /> | Algebraic Data Types | ✅ | ❌ |
| <material-symbols-match-word-rounded class="text-red-400" /> | Pattern Matching | ❌ | ❌ |




---
layout: two-cols
---

# TSランタイムBEFORE

- Npm
- Pnpm

::right::

# AFTER

- Bun
- 10秒でインストール

---
layout: two-cols
---

# CI BEFORE

- GitHub Actions
- Turborepo

::right::

# AFTER

- GitHub Actions
- Nx

---
layout: two-cols
---

# スクリプトBEFORE

- Bash
- Zx

::right::

# AFTER

- Bun Shell

---
layout: two-cols
---

# サーバーBEFORE

- Express
- Go

::right::

# AFTER

- Hono

---
layout: two-cols
---

# ORM BEFORE

- Prisma

::right::

# AFTER

- Drizzle

---
layout: two-cols
---

# Linter BEFORE

- Eslint

::right::

# AFTER

- Biome
  - 早い

---
layout: two-cols
---

# Auth BEFORE

- Firebase
- Auth0

::right::

# AFTER

- Clerk
  - UXが良い
  - 料金はボッタクリではない
  - 生産性が上がる
  - React Componentが全部用意されている

-

---

# CLIでLLM翻訳

<SlidevVideo v-click autoplay controls width="70%" >
  <source src="/AutoCat1.mp4" />
</SlidevVideo>

---

# CloudflareでLLM

<SlidevVideo v-click autoplay controls width="70%" >
  <source src="/CFDemo.mov" />
</SlidevVideo>

---

# Test 

<div class="p-3">
  Text
</div>

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row1Col1 | Row1Col2 | Row1Col3 |
| Row2Col1 | Row2Col2 | Row2Col3 |
| Row3Col1 | Row3Col2 | Row3Col3 |

```ts {monaco-diff}
console.log('Original text')
~~~
console.log('Modified text')
```


---
layout: two-cols
---

# BEFORE
## LLMプロンプト錬金術
Hi


<!-- Copy-paste in your Readme.md file -->

<a href="https://next.ossinsight.io/widgets/official/analyze-repo-stars-history?repo_id=41986369" target="_blank" style="display: block" align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/analyze-repo-stars-history/thumbnail.png?repo_id=41986369&image_size=auto&color_scheme=dark" width="721" height="auto">
    <img alt="Star History of pingcap/tidb" src="https://next.ossinsight.io/widgets/official/analyze-repo-stars-history/thumbnail.png?repo_id=41986369&image_size=auto&color_scheme=light" width="721" height="auto">
  </picture>
</a>

<!-- Made with [OSS Insight](https://ossinsight.io/) -->


::right::

# AFTER
## LLMプロンプトプログラミング
- DSPy
- merit
- merit
- merit

<img alt="Star History" src="https://api.star-history.com/svg?repos=stanfordnlp/dspy" width="100%">

---

# ⭐️ DSPy

<!-- <logos-bun class="text-4xl" /> -->

<StarHistory repo="stanfordnlp/dspy" />


---
layout: before-after
---

# 比較

::before::
- Hers

```ts
fafaf
```

::after::

- Chau
- Bye

---

