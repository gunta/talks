---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: 開発生産性
info: |
  ## Slidev スターターテンプレート
  開発者向けのプレゼンテーションスライド。

  [Sli.dev](https://sli.dev)で詳細を学ぶ
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
---


# 導入して開発生産性上がった技術を紹介

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Slidev <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: two-cols
---

# BEFORE

- Gunther Brunner（グンタ）
- CA 12年歴
- 2年前からAI事業本部
- 去年7月からAI Shift所属
- 職種：デザインエンジニア

::right::

# AFTER

- 昨日付けで
  - 全社 CTO統括室・Developer Productivity室に移動
- 今期のミッション: **AI事業の生産性を上げる**

---

# Slidevとは何ですか？

Slidevは開発者向けのスライドメーカーおよびプレゼンターで、以下の機能があります。

- 📝 **テキストベース** - Markdownでコンテンツに集中し、後でスタイルを整えます。
- 🎨 **テーマ可能** - テーマはnpmパッケージとして共有および使用できます。
- 🧑‍💻 **開発者フレンドリー** - コードハイライト、ライブコーディングと自動補完。
- 🤹 **インタラクティブ** - Vueコンポーネントを埋め込んで表現を強化。
- 🎥 **録画** - 組み込みの録画とカメラビュー。
- 📤 **ポータブル** - PDF、PNG、またはホスト可能なSPAにエクスポート。
- 🛠 **ハッカブル** - ウェブページで可能なことは何でも。

<br>
<br>

[Slidevについてもっと読む](https://sli.dev/guide/why)


<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
transition: slide-up
level: 2
---

# 初期AI Workerの紹介

<SlidevVideo v-click autoplay controls width="70%" >
  <source src="/AIWorkerPortal.mp4" />
</SlidevVideo>

---

# AI Workerの利用言語


![Languages](/langs.png)

---
layout: two-cols
---

# 開発環境 BEFORE

- IntelliJ Idea
  - IDE完成度高い
- VSCode
  - Extensionが充実

::right::

# AFTER

- Cursor
  - AI機能はGitHub Copilotを大幅に超えてる
  - UXは素晴らしい
  - 勢いはある（OpenAIが投資）
  - VSCodeのExtensionと設定が全部使える
    - Forkではあるが、頻繁に更新される
  - 20$/月の価値は20分でペイするのを体感
  - グッジョブは？
  - 基本人権。全社で導入できるように動きます！


---
layout: two-cols
---

# タスク管理 BEFORE

- JIRA
  - タスク管理に向いてる
  - 使いたい人はいない
- GitHub Issues
  - 開くのだるい
  - 機能貧弱

::right::

# AFTER

- Linear
  - エンジニアが使いたくなる
  - UXが素晴らしい 
  - Notionよりもサクサク
  - サクサクすぎ（強調）
  - Local First Architectureの代表プロダクト

---
layout: two-cols
---

# ブラウザ BEFORE

- Chrome
- Safari

::right::

# AFTER

- Arc
  - GitHubのPull Requestをリアルタイムで表示される機能がリリース

---
layout: two-cols
---

# バンドラーBEFORE

- Webpack

::right::

# AFTER

- Vite
- 今後はFarm

---
layout: two-cols
---

# 英語修正 BEFORE

- PR都度修正

::right::

# AFTER

- CSpellを導入
  - CI
  - Lefthook

---
layout: two-cols
---

# クラウド BEFORE

- AWS（33リージョン）
- GCP（40リージョン）
- Azure（60リージョン）

::right::

# AFTER

- Cloudflare（310リージョン）
  - Edgeではない、AWSの競合になった
  - コストメリットがデカすぎる
  - デプロイが早すぎる
  - エグレスがかからない
  - I/O時は課金されない
  - Telemetryは無料
  - 日本にDCが4個
  - 中国にDCが37個
  - アメリカにDCが3個
  - GPU Inference
  - 楽しい！（大事）

---
layout: two-cols
---

# バックエンド言語 BEFORE

- Golang

::right::

# AFTER

- TypeScript

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

