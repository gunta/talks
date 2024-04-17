---
theme: default
background: https://unsplash.com/photos/KE0nC8-58MQ/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEzMzY1OTIwfA&w=2400
title: 開発生産性
info: |
  ## Slidev スターターテンプレート
  開発者向けのプレゼンテーションスライド。

class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
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
- CyberAgent入社：2012年
- 部署：2年前からAI事業本部
- 事業：2023年7月からAI Shift所属
- 職種：デザインエンジニア

::right::

# AFTER

- 全社 CTO統括室・Developer Productivity室に移動（4/16付け）
- 今期のミッション: **AI事業本部の生産性を上げる**

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