---
theme: seriph
background: https://images.unsplash.com/photo-1639762681485-074b7f938ba0
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## 企業の時価総額はMCPサーバー数で決まる時代へ
  MCP保有数が示す、企業競争力の新指標

  CA.ai #2 明日から使える実践MCPテクニック
drawings:
  persist: false
transition: slide-left
title: 企業の時価総額はMCPサーバー数で決まる時代へ
mdc: true
fonts:
  sans: 'Noto Sans JP'
  mono: 'Fira Code'
---

<div class="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-black/90"></div>

<div class="relative z-10 flex flex-col items-center justify-center h-full">
  <div class="mb-8">
    <h1 class="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
      企業の時価総額は<br/>MCPサーバー数で決まる時代へ
    </h1>
  </div>
  
  <div class="mb-12">
    <p class="text-2xl text-gray-200">MCP保有数が示す、企業競争力の新指標</p>
  </div>

  <div class="flex items-center gap-4 mb-8">
    <div class="w-20 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
    <p class="text-xl text-gray-300">CA.ai #2 〜明日から使える実践MCPテクニック〜</p>
    <div class="w-20 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
  </div>

  <div class="mt-8 text-center">
    <p class="text-2xl font-bold text-white mb-2">Gunther Brunner</p>
    <p class="text-lg text-gray-300">株式会社サイバーエージェント</p>
    <p class="text-lg text-gray-300">Developer Productivity - Enabling Team</p>
  </div>
</div>

<!--
Speaker notes:
皆さん、こんばんは！本日はCA.ai #2にお越しいただき、ありがとうございます。
これから15分間で、MCPが企業価値にどのような影響を与えるか、そして明日から実践できるMCPテクニックについてお話しします。
エンジニアの方はもちろん、経営層の方々にも理解していただけるよう、わかりやすくお伝えしていきます。
-->

---
layout: intro
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa
---

<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/95 to-purple-900/95"></div>

<div class="relative z-10 flex flex-col items-center justify-center h-full text-white">
  <div class="mb-16">
    <h1 class="text-5xl font-bold text-white mb-8">2026年の未来予測</h1>
  </div>

  <div class="relative">
    <div class="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-2xl opacity-50"></div>
    <div class="relative bg-black/50 backdrop-blur-xl rounded-2xl p-12 border border-purple-500/20">
      <blockquote class="text-3xl font-bold text-center leading-relaxed">
        <span class="text-purple-400">"</span>
        <span class="text-3xl text-green">投資家はMCPエコシステムの充実度を<br/>
        企業評価の重要指標にする</span>
        <span class="text-blue-400">"</span>
      </blockquote>
    </div>
  </div>

  <div class="mt-16 text-center">
    <p class="text-2xl text-gray-200">これは私たちの予測であり、</p>
    <p class="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mt-2">
      すでに始まっている変化です
    </p>
  </div>
</div>

<!--
Speaker notes:
まず最初に、私たちの大胆な予測から始めさせていただきます。
2026年、投資家はMCPエコシステムの充実度を企業評価の重要指標にするでしょう。
これは単なる予測ではなく、すでに始まっている変化なのです。
-->

---
layout: section
---

<div class="flex flex-col items-center justify-center h-full">
  <div class="relative">
    <div class="absolute -inset-8 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
    <div class="relative">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-20 h-1 bg-gradient-to-r from-transparent to-purple-400"></div>
        <h1 class="text-2xl font-medium text-gray-300">Part 1</h1>
        <div class="w-20 h-1 bg-gradient-to-l from-transparent to-blue-400"></div>
      </div>
      <h2 class="text-5xl font-bold text-black text-center mb-4">
        なぜMCPがそこまで重要なのか？
      </h2>
      <p class="text-2xl text-red text-center">経営視点で理解するMCP革命</p>
    </div>
  </div>
</div>

<!--
Speaker notes:
最初の5分間は、経営者の視点からMCPの重要性について説明します。
技術的な詳細ではなく、ビジネスにどのような影響を与えるかに焦点を当てます。
-->

---
zoom: 0.8
---
<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-12">MCPの最大のイノベーション</h1>

  <div class="grid grid-cols-2 gap-8 flex-1 px-8">
    <div class="relative group">
      <div class="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
      <div class="relative bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20 h-full">
        <h2 class="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
          <i class="i-carbon-close-filled text-3xl"></i>
          従来の問題
        </h2>
        <ul class="space-y-4 text-lg">
          <li class="flex items-start gap-3">
            <i class="i-carbon-warning text-red-500 mt-1"></i>
            <span>APIバージョン管理の地獄</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-warning text-red-500 mt-1"></i>
            <span>カスタムAPI開発の工数</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-warning text-red-500 mt-1"></i>
            <span>ドキュメント更新の遅れ</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-warning text-red-500 mt-1"></i>
            <span>互換性の問題</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="relative group">
      <div class="absolute -inset-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
      <div class="relative bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-green-500/20 h-full">
        <h2 class="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
          <i class="i-carbon-checkmark-filled text-3xl"></i>
          MCPが解決
        </h2>
        <ul class="space-y-4 text-lg">
          <li class="flex items-start gap-3">
            <i class="i-carbon-star-filled text-green-500 mt-1"></i>
            <span class="font-bold">バージョニング不要</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-star-filled text-green-500 mt-1"></i>
            <span class="font-bold">自動スキーマ認識</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-star-filled text-green-500 mt-1"></i>
            <span class="font-bold">最新版への自動対応</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-star-filled text-green-500 mt-1"></i>
            <span class="font-bold">即座に機能発見</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mt-12 mx-8">
    <div class="relative">
      <div class="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
      <div class="relative bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
        <p class="text-2xl text-white font-bold text-center leading-relaxed">
          LLMに提供するだけで、自動的に最新のスキーマとバージョンを使用し、
          機能を自動発見する時代へ
        </p>
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
MCPの最大のイノベーションは、従来のAPI管理の煩雑さを完全に解消することです。
もうバージョニングも、カスタムAPIの開発も必要ありません。
LLMに提供するだけで、自動的に最新のスキーマを理解し、機能を発見してくれるのです。
-->

---
zoom: 0.7
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-4">Amazon社内でのMCP活用事例</h1>

  <div class="text-center mb-12">
    <div class="inline-block relative">
      <div class="absolute -inset-4 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 rounded-xl blur-xl"></div>
      <p class="relative text-2xl bg-black/50 backdrop-blur-xl rounded-xl px-8 py-4 border border-yellow-500/20">
        「多くのチームが<span class="font-bold text-yellow-400">UIを作る必要性</span>さえ疑問視し始めている」
      </p>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-8 flex-1 px-8">
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl"></div>
      <div class="relative p-8">
                  <h2 class="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-300">
            <i class="i-carbon-construction text-3xl text-gray-400"></i>
            従来のアプローチ
          </h2>
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-xl font-bold">1</div>
            <span class="text-lg text-gray-200">バックエンド開発</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-xl font-bold">2</div>
            <span class="text-lg text-gray-200">API設計</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-xl font-bold">3</div>
            <span class="text-lg font-bold text-red-400">UI開発（時間がかかる）</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-xl font-bold">4</div>
            <span class="text-lg text-gray-200">ユーザートレーニング</span>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-800/50 to-blue-900/50 rounded-2xl"></div>
      <div class="relative p-8">
        <h2 class="text-2xl font-bold mb-8 flex items-center gap-3 text-purple-400">
          <i class="i-carbon-rocket text-3xl"></i>
          MCP時代のアプローチ
        </h2>
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-xl font-bold">1</div>
            <span class="text-lg">バックエンド開発</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold animate-pulse">2</div>
            <span class="text-lg font-bold text-purple-300">MCPサーバー作成</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-xl font-bold">3</div>
            <span class="text-lg">AIエージェントが直接利用</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gray-600/50 flex items-center justify-center text-xl font-bold">4</div>
            <span class="text-lg text-gray-300">必要に応じてUIを検討</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 text-center">
    <p class="text-2xl font-bold">
      最初のインターフェースは<span class="text-purple-400">MCPを持つエージェント</span>、<br/>
      その後に必要であればUIを検討する時代
    </p>
  </div>
</div>

<!--
Speaker notes:
実際にAmazon社内では、MCPの導入が急速に進んでおり、
多くのチームがそもそもUIを作る必要があるのかを疑問視し始めています。
まずMCPサーバーを作り、AIエージェントに使わせてみる。
それで十分なら、UIは作らない。これが新しい開発の流れです。
-->

---
zoom: 0.8
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-12">Vibe CodingからContext Engineeringへ</h1>

  <div class="grid grid-cols-2 gap-12 flex-1 px-12">
    <div class="relative">
      <div class="absolute -inset-2 bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl blur-xl animate-pulse"></div>
      <div class="relative bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-pink-500/20 h-full">
        <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
          <i class="i-carbon-music text-pink-400"></i>
          <span class="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">Vibe Coding時代</span>
        </h2>
        <ul class="space-y-6 text-lg">
          <li class="flex items-start gap-3">
            <i class="i-carbon-warning-alt text-pink-500 mt-1 text-xl"></i>
            <span>「なんとなく」で書くコード</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-warning-alt text-pink-500 mt-1 text-xl"></i>
            <span>AIに曖昧な指示</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-warning-alt text-pink-500 mt-1 text-xl"></i>
            <span>結果にばらつき</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-warning-alt text-pink-500 mt-1 text-xl"></i>
            <span>再現性が低い</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="relative">
      <div class="absolute -inset-2 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-green-600/20 rounded-2xl blur-xl"></div>
      <div class="relative bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-green-900/20 rounded-2xl p-8 border border-blue-500/20 h-full">
        <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
          <i class="i-carbon-build-tool text-blue-400"></i>
          <span class="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Context Engineering時代</span>
        </h2>
        <ul class="space-y-6 text-lg">
          <li class="flex items-start gap-3">
            <i class="i-carbon-checkmark-outline text-blue-500 mt-1 text-xl"></i>
            <span>構造化されたコンテキスト提供</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-checkmark-outline text-blue-500 mt-1 text-xl"></i>
            <span>MCPによる明確な能力定義</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-checkmark-outline text-blue-500 mt-1 text-xl"></i>
            <span>安定した結果</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-checkmark-outline text-blue-500 mt-1 text-xl"></i>
            <span>高い再現性</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mt-12 text-center">
    <div class="inline-block relative">
      <div class="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
      <div class="relative bg-black/50 backdrop-blur-xl rounded-2xl px-12 py-6 border border-purple-500/20">
        <p class="text-3xl font-bold">
          MCPは「AIとの対話」を<br/>
          <span class="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">エンジニアリング</span>に変える
        </p>
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
私たちはVibe Codingの時代から、Context Engineeringの時代へと移行しています。
もう「なんとなく」でAIにコードを書かせる時代は終わりました。
MCPによって、AIとの対話が真のエンジニアリングになるのです。
-->

---
zoom: 0.7
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-8">Figma MCPサーバーが示す未来</h1>

  <div class="text-center mb-12">
    <p class="text-2xl mb-2">
      <span class="font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">専任チーム</span>がMCPサーバーを開発・運用する時代
    </p>
  </div>
  <div class="grid grid-cols-4 gap-6 px-8 mb-12">
    <div class="relative group">
      <div class="absolute -inset-2 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
      <div class="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20 text-center h-full flex flex-col items-center justify-center">
        <i class="i-carbon-user-avatar text-6xl text-blue-400 mb-4"></i>
        <h3 class="text-xl font-bold text-blue-300 mb-2">PM</h3>
        <p class="text-sm text-white">プロダクト<br/>マネージャー</p>
      </div>
    </div>
    <div class="relative group">
      <div class="absolute -inset-2 bg-gradient-to-br from-green-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
      <div class="relative bg-gradient-to-br from-green-900/30 to-cyan-900/30 rounded-2xl p-8 border border-green-500/20 text-center h-full flex flex-col items-center justify-center">
        <i class="i-carbon-code text-6xl text-green-400 mb-4"></i>
        <h3 class="text-xl font-bold text-green-300 mb-2">Engineer</h3>
        <p class="text-sm text-white">専任<br/>エンジニア</p>
      </div>
    </div>
    <div class="relative group">
      <div class="absolute -inset-2 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
      <div class="relative bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-2xl p-8 border border-pink-500/20 text-center h-full flex flex-col items-center justify-center">
        <i class="i-carbon-paint-brush text-6xl text-pink-400 mb-4"></i>
        <h3 class="text-xl font-bold text-pink-300 mb-2">Designer</h3>
        <p class="text-sm text-white">UI/UX<br/>デザイナー</p>
      </div>
    </div>
    <div class="relative group">
      <div class="absolute -inset-2 bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
      <div class="relative bg-gradient-to-br from-orange-900/30 to-yellow-900/30 rounded-2xl p-8 border border-orange-500/20 text-center h-full flex flex-col items-center justify-center">
        <i class="i-carbon-bullhorn text-6xl text-orange-400 mb-4"></i>
        <h3 class="text-xl font-bold text-orange-300 mb-2">Marketing</h3>
        <p class="text-sm text-gray-300">マーケティング<br/>担当</p>
      </div>
    </div>
  </div>

  <div class="flex-1 flex items-center justify-center">
    <div class="relative">
      <div class="absolute -inset-8 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-3xl"></div>
      <div class="relative bg-black/60 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20 max-w-3xl">
        <p class="text-3xl font-bold text-center leading-relaxed">
          MCPサーバーは単なる技術ではなく、<br/>
          <span class="text-4xl text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text">
            戦略的プロダクト
          </span>
          として扱われる
        </p>
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
Figmaの事例を見てください。彼らはMCPサーバーに専任のPM、エンジニア、デザイナー、
そしてマーケティング担当まで配置しています。
これはMCPサーバーが単なる技術的な実装ではなく、
企業の競争力を左右する戦略的プロダクトだからです。
-->

---
layout: section
---

<div class="flex flex-col items-center justify-center h-full">
  <div class="relative">
    <div class="absolute -inset-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
    <div class="relative">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-20 h-1 bg-gradient-to-r from-transparent to-cyan-400"></div>
        <h1 class="text-2xl font-medium text-gray-300">Part 2</h1>
        <div class="w-20 h-1 bg-gradient-to-l from-transparent to-blue-400"></div>
      </div>
      <h2 class="text-5xl font-bold text-black text-center mb-4">
        最新のMCP進化と実践テクニック
      </h2>
      <p class="text-2xl text-black text-center">明日から使える具体的な方法</p>
    </div>
  </div>
</div>

<!--
Speaker notes:
次の5分間では、MCPの最新の進化と、明日から実際に使えるテクニックをご紹介します。
特に日本企業にとって重要な新機能についてお話しします。
-->

---
zoom: 0.9
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-2">DXT (Desktop Extensions)</h1>
  <p class="text-2xl text-center text-red mb-8">日本のためのイノベーション</p>
  <div class="grid grid-cols-2 gap-8 flex-1 px-8">
    <div class="relative">
      <div class="absolute -inset-2 bg-gradient-to-br from-red-600/20 via-pink-600/20 to-orange-600/20 rounded-2xl blur-xl"></div>
      <div class="relative bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20 h-full">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-earth-filled text-3xl text-red-400"></i>
          <span class="text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">なぜ日本で重要？</span>
        </h2>
        <ul class="space-y-4 text-lg">
          <li class="flex items-start gap-3">
            <i class="i-carbon-flag-filled text-red-500 mt-1"></i>
            <span>日本独自のアプリケーション対応</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-folder-shared text-orange-500 mt-1"></i>
            <span>ローカルファイルシステム連携</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-network-3 text-pink-500 mt-1"></i>
            <span>社内システムとの統合</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-security text-red-500 mt-1"></i>
            <span>セキュリティ要件への対応</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="relative">
      <div class="absolute -inset-2 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-green-600/20 rounded-2xl blur-xl"></div>
      <div class="relative bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-2xl p-8 border border-blue-500/20 h-full">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-rocket text-3xl text-blue-400"></i>
          <span class="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">DXTでできること</span>
        </h2>
        <ul class="space-y-4 text-lg">
          <li class="flex items-start gap-3">
            <i class="i-carbon-application text-blue-500 mt-1"></i>
            <span>デスクトップアプリの自動操作</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-data-base text-cyan-500 mt-1"></i>
            <span>ローカルDBへの直接アクセス</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-integration text-green-500 mt-1"></i>
            <span>社内ツールとのシームレス連携</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-wifi-off text-blue-500 mt-1"></i>
            <span>オフライン環境での動作</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="mt-8 text-center">
    <div class="inline-block relative">
      <div class="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-white/20 to-red-600/20 rounded-2xl blur-2xl"></div>
      <div class="relative bg-black/60 backdrop-blur-xl rounded-2xl px-12 py-6 border border-red-500/20">
        <p class="text-2xl font-bold">
          日本企業の「内製システム」と「AI」を<br/>
          つなぐ架け橋としての<span class="text-transparent bg-gradient-to-r from-red-400 to-white bg-clip-text">DXT</span>
        </p>
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
DXT、Desktop Extensionsは特に日本企業にとって重要なイノベーションです。
多くの日本企業は独自の内製システムを持っており、
これらとAIを連携させることが課題でした。
DXTはその架け橋となる技術です。
-->

---
zoom: 0.8
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-8">Claude Desktopが最強のMCPクライアントである理由</h1>

  <div class="text-center mb-12">
    <div class="inline-block relative">
      <div class="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-xl blur-xl animate-pulse"></div>
      <p class="relative text-2xl font-bold bg-black/50 backdrop-blur-xl rounded-xl px-8 py-4 border border-purple-500/20">
        <span class="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">非エンジニア</span>こそClaude Desktopを使うべき
      </p>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-8 px-12 flex-1">
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-2xl"></div>
      <div class="relative p-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-checkmark-filled text-3xl text-green-400"></i>
          <span>サポート機能</span>
        </h2>
        <div class="space-y-4">
          <div class="flex items-center gap-3 bg-black/30 rounded-lg px-4 py-3">
            <i class="i-carbon-server-proxy text-purple-400 text-xl"></i>
            <span class="text-lg">MCP Servers</span>
          </div>
          <div class="flex items-center gap-3 bg-black/30 rounded-lg px-4 py-3">
            <i class="i-carbon-application-web text-blue-400 text-xl"></i>
            <span class="text-lg">DXT Extensions</span>
          </div>
          <div class="flex items-center gap-3 bg-black/30 rounded-lg px-4 py-3">
            <i class="i-carbon-share text-cyan-400 text-xl"></i>
            <span class="text-lg">Artifacts共有</span>
          </div>
          <div class="flex items-center gap-3 bg-black/30 rounded-lg px-4 py-3">
            <i class="i-carbon-folder-details text-green-400 text-xl"></i>
            <span class="text-lg">プロジェクト管理</span>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-br from-orange-800/30 to-pink-800/30 rounded-2xl"></div>
      <div class="relative p-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-target text-3xl text-orange-400"></i>
          <span>非エンジニア向け機能</span>
        </h2>
        <div class="space-y-4">
          <div class="flex items-center gap-3 bg-black/30 rounded-lg px-4 py-3">
            <i class="i-carbon-gui text-orange-400 text-xl"></i>
            <span class="text-lg">GUIでの簡単設定</span>
          </div>
          <div class="flex items-center gap-3 bg-black/30 rounded-lg px-4 py-3">
            <i class="i-carbon-touch-1 text-pink-400 text-xl"></i>
            <span class="text-lg">ワンクリックインストール</span>
          </div>
          <div class="flex items-center gap-3 bg-black/30 rounded-lg px-4 py-3">
            <i class="i-carbon-view text-purple-400 text-xl"></i>
            <span class="text-lg">視覚的な結果表示</span>
          </div>
          <div class="flex items-center gap-3 bg-black/30 rounded-lg px-4 py-3">
            <i class="i-carbon-chat-bot text-blue-400 text-xl"></i>
            <span class="text-lg">自然言語での操作</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center mt-8">
    <p class="text-2xl font-bold">
      開発環境のセットアップ不要で最高の生産性を実現
    </p>
  </div>
</div>

<!--
Speaker notes:
エンジニアの皆さん、非エンジニアの同僚にMCPクライアントを勧めるなら、
迷わずClaude Desktopを選んでください。
全ての機能が統合されており、セットアップも簡単。
これ一つで最高の生産性を実現できます。
-->

---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-8">MCP Elicitations</h1>
  <p class="text-2xl text-center text-green mb-8">セキュリティと使いやすさの両立</p>
  <div class="grid grid-cols-2 gap-8 px-8 mb-8">
    <div class="relative">
      <div class="absolute -inset-2 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-2xl blur-xl"></div>
      <div class="relative bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-6 border border-red-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-3">
          <i class="i-carbon-locked text-3xl text-red-400"></i>
          <span>セキュリティ面</span>
        </h2>
        <ul class="space-y-3 text-lg">
          <li class="flex items-start gap-3">
            <i class="i-carbon-user-certification text-red-500 mt-1"></i>
            <span>ユーザー確認の強制</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-security-services text-orange-500 mt-1"></i>
            <span>権限の明示的な付与</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-activity text-red-500 mt-1"></i>
            <span>アクセスログの記録</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-warning-hex text-orange-500 mt-1"></i>
            <span>プロンプトインジェクション対策</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="relative">
      <div class="absolute -inset-2 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
      <div class="relative bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-6 border border-green-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-3">
          <i class="i-carbon-target text-3xl text-green-400"></i>
          <span>使いやすさ</span>
        </h2>
        <ul class="space-y-3 text-lg">
          <li class="flex items-start gap-3">
            <i class="i-carbon-ai-status text-green-500 mt-1"></i>
            <span>コンテキストの自動推測</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-data-collection text-blue-500 mt-1"></i>
            <span>必要な情報の事前収集</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-chat-launch text-green-500 mt-1"></i>
            <span>インタラクティブな確認</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-error-outline text-blue-500 mt-1"></i>
            <span>エラーの事前防止</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
</div>

<!--
Speaker notes:
MCP Elicitationsは、セキュリティと使いやすさを両立させる重要な機能です。
LLMがコンテキストを推測するのではなく、
明示的にユーザーから必要な情報を取得します。
これにより、プロンプトインジェクションのリスクも軽減できます。
-->

---
zoom: 0.7
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-8">セキュリティ：本番環境での必須対策</h1>

  <div class="text-center mb-12">
    <div class="relative inline-block">
      <div class="absolute -inset-4 bg-gradient-to-r from-red-600/40 to-orange-600/40 rounded-xl blur-xl animate-pulse"></div>
      <div class="relative bg-red-900/30 backdrop-blur-xl rounded-xl px-12 py-6 border-2 border-red-500">
        <p class="text-3xl font-bold flex items-center gap-4">
          <i class="i-carbon-warning-filled text-4xl text-red-400"></i>
          <span>本番データには読み取り専用権限のみ</span>
        </p>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-8 px-8 flex-1">
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-2xl"></div>
      <div class="relative p-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-security text-3xl text-blue-400"></i>
          <span>必須のセキュリティ対策</span>
        </h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i class="i-carbon-view-filled text-blue-500 text-xl mt-1"></i>
            <span class="text-lg">読み取り専用アクセス</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="i-carbon-user-access text-purple-500 text-xl mt-1"></i>
            <span class="text-lg">ユーザー権限の制限</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="i-carbon-audit text-blue-500 text-xl mt-1"></i>
            <span class="text-lg">監査ログの有効化</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="i-carbon-meter text-purple-500 text-xl mt-1"></i>
            <span class="text-lg">レート制限の実装</span>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-br from-red-800/30 to-orange-800/30 rounded-2xl"></div>
      <div class="relative p-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-warning-alt-filled text-3xl text-red-400"></i>
          <span>リスクシナリオ</span>
        </h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i class="i-carbon-sql-injection text-red-500 text-xl mt-1"></i>
            <span class="text-lg">プロンプトインジェクション</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="i-carbon-misuse text-orange-500 text-xl mt-1"></i>
            <span class="text-lg">意図しないデータ操作</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="i-carbon-password text-red-500 text-xl mt-1"></i>
            <span class="text-lg">権限昇格攻撃</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="i-carbon-data-error text-orange-500 text-xl mt-1"></i>
            <span class="text-lg">データ漏洩</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="text-center mt-8">
    <div class="inline-block relative">
      <div class="absolute -inset-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
      <div class="relative bg-black/60 backdrop-blur-xl rounded-2xl px-12 py-6 border border-green-500/20">
        <p class="text-2xl font-bold">
          「便利さ」と「セキュリティ」は<br/>
          <span class="text-3xl text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">トレードオフではない</span>
        </p>
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
セキュリティについて重要な注意点があります。
本番環境のデータに対しては、必ず読み取り専用の権限のみを付与してください。
便利さを追求するあまり、セキュリティを犠牲にしてはいけません。
両立は可能です。
-->

---
zoom: 0.9
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-8">推奨MCPサーバー：Task Master</h1>

  <div class="grid grid-cols-2 gap-8 px-8 flex-1">
    <div class="relative">
      <div class="absolute -inset-2 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-2xl blur-xl"></div>
      <div class="relative bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-2xl p-8 border border-yellow-500/20 h-full">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-chart-line text-3xl text-yellow-400"></i>
          <span>人気の理由</span>
        </h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i class="i-carbon-trophy text-yellow-500 text-xl mt-1"></i>
            <span class="text-lg">今週7位、今月10位</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="i-carbon-star-filled text-orange-500 text-xl mt-1"></i>
            <span class="text-lg font-bold">16,000+ GitHubスター</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="i-carbon-ai-governance text-yellow-500 text-xl mt-1"></i>
            <span class="text-lg">コーディングエージェントの司令塔</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="i-carbon-flow text-orange-500 text-xl mt-1"></i>
            <span class="text-lg">非コーディングワークフローにも対応</span>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="absolute -inset-2 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
      <div class="relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20 h-full">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-rocket text-3xl text-purple-400"></i>
          <span>最新アップデート</span>
        </h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i class="i-carbon-code text-purple-500 text-xl mt-1"></i>
            <span class="text-lg">Claude Code アカウント対応</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="i-carbon-maximize text-pink-500 text-xl mt-1"></i>
            <span class="text-lg">Claude Maxアカウントで動作</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="i-carbon-strategy-play text-purple-500 text-xl mt-1"></i>
            <span class="text-lg">高度な計画フレームワーク</span>
          </div>
          <div class="flex items-start gap-3">
            <i class="i-carbon-flow-data text-pink-500 text-xl mt-1"></i>
            <span class="text-lg">並列タスク実行</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center mt-8">
    <div class="inline-block relative">
      <div class="absolute -inset-4 bg-gradient-to-r from-yellow-600/30 via-orange-600/30 to-purple-600/30 rounded-2xl blur-2xl animate-pulse"></div>
      <div class="relative bg-black/60 backdrop-blur-xl rounded-2xl px-12 py-8 border border-orange-500/20">
        <p class="text-3xl font-bold">
          MCPサーバーの<span class="text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-400 bg-clip-text">オーケストレーター</span><br/>
          それがTask Master
        </p>
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
特に推奨したいのがTask Master MCPサーバーです。
わずか数ヶ月で16,000以上のGitHubスターを獲得し、
コーディングエージェントの司令塔として機能します。
最近Claude Codeアカウントにも対応し、さらに使いやすくなりました。
-->

---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-8">MCPロードマップ：注目すべき機能</h1>

  <div class="grid grid-cols-3 gap-6 px-8 flex-1">
    <div class="relative group">
      <div class="absolute -inset-2 bg-gradient-to-br from-green-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-all"></div>
      <div class="relative bg-gradient-to-br from-green-900/30 to-cyan-900/30 rounded-2xl p-6 border border-green-500/20 h-full">
        <h2 class="text-xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-calendar text-2xl text-green-400"></i>
          <span>近日公開</span>
        </h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-2">
            <i class="i-carbon-gui-management text-green-500 mt-1"></i>
            <span>MCP-UI SDK</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="i-carbon-cloud-satellite-link text-cyan-500 mt-1"></i>
            <span>リモートMCP対応</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="i-carbon-authentication text-green-500 mt-1"></i>
            <span>認証フレームワーク</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="relative group">
      <div class="absolute -inset-2 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-all"></div>
      <div class="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-blue-500/20 h-full">
        <h2 class="text-xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-construction text-2xl text-blue-400"></i>
          <span>開発中</span>
        </h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-2">
            <i class="i-carbon-collaborate text-blue-500 mt-1"></i>
            <span>マルチエージェント連携</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="i-carbon-data-stream text-purple-500 mt-1"></i>
            <span>ストリーミング対応</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="i-carbon-network-4 text-blue-500 mt-1"></i>
            <span>分散トランザクション</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="relative group">
      <div class="absolute -inset-2 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-all"></div>
      <div class="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/20 h-full">
        <h2 class="text-xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-magic-wand text-2xl text-purple-400"></i>
          <span>将来構想</span>
        </h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-2">
            <i class="i-carbon-peer-to-peer text-purple-500 mt-1"></i>
            <span>P2P MCP通信</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="i-carbon-blockchain text-pink-500 mt-1"></i>
            <span>ブロックチェーン統合</span>
          </li>
          <li class="flex items-start gap-2">
            <i class="i-carbon-q-u-2 text-purple-500 mt-1"></i>
            <span>量子コンピュータ対応</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="text-center mt-8">
    <div class="inline-block relative">
      <div class="absolute -inset-4 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl"></div>
      <div class="relative bg-black/60 backdrop-blur-xl rounded-2xl px-12 py-6 border border-blue-500/20">
        <p class="text-2xl font-bold">
          MCPは<span class="text-3xl text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text">急速に進化</span>している<br/>
          今が参入の最適なタイミング
        </p>
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
MCPのロードマップを見ると、急速な進化が予定されています。
特にMCP-UI SDKやリモートMCP対応は、
企業での活用を大きく加速させるでしょう。
今こそ参入の最適なタイミングです。
-->

---
layout: section
---

<div class="flex flex-col items-center justify-center h-full">
  <div class="relative">
    <div class="absolute -inset-8 bg-gradient-to-r from-orange-600/20 via-pink-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
    <div class="relative">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-20 h-1 bg-gradient-to-r from-transparent to-orange-400"></div>
        <h1 class="text-2xl font-medium text-gray-300">Part 3</h1>
        <div class="w-20 h-1 bg-gradient-to-l from-transparent to-purple-400"></div>
      </div>
      <h2 class="text-5xl font-bold text-black text-center mb-4">
        行動への呼びかけ
      </h2>
      <p class="text-2xl text-black text-center">明日から始めるMCP革命</p>
    </div>
  </div>
</div>

<!--
Speaker notes:
最後の5分間は、皆さんに具体的なアクションをお願いしたいと思います。
MCPは待っていても始まりません。今すぐ行動を起こしましょう。
-->

---
zoom: 0.7
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-12">UIを作る前に、MCPサーバーを作れ</h1>

  <div class="text-center mb-12">
    <p class="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
      新しい開発の優先順位
    </p>
  </div>
  <div class="flex flex-col items-center justify-center flex-1 space-y-8">
    <div class="relative">
      <div class="absolute -inset-4 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl animate-pulse"></div>
      <div class="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl px-12 py-6 border-2 border-purple-500">
        <h2 class="text-3xl font-bold flex items-center gap-4">
          <span class="text-4xl">1️⃣</span>
          MCPサーバーの作成
        </h2>
      </div>
    </div>
    <i class="i-carbon-arrow-down text-4xl text-gray-400 animate-bounce"></i>
    <div class="relative">
      <div class="absolute -inset-4 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-2xl blur-xl"></div>
      <div class="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-2xl px-12 py-6 border-2 border-blue-500">
        <h2 class="text-3xl font-bold flex items-center gap-4">
          <span class="text-4xl">2️⃣</span>
          AIエージェントでの検証
        </h2>
      </div>
    </div>
    <i class="i-carbon-arrow-down text-4xl text-gray-400 animate-bounce"></i>
    <div class="relative">
      <div class="absolute -inset-4 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-2xl blur-xl"></div>
      <div class="relative bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl px-12 py-6 border border-gray-600 opacity-70">
        <h2 class="text-3xl font-bold flex items-center gap-4 text-gray-400">
          <span class="text-4xl">3️⃣</span>
          必要ならUIを検討
        </h2>
      </div>
    </div>
  </div>

  <div class="text-center mt-12">
    <p class="text-2xl font-bold">
      この順序が、開発効率を<span class="text-3xl text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text">劇的に向上</span>させる
    </p>
  </div>
</div>

<!--
Speaker notes:
まず最初のアクションは、開発の優先順位を変えることです。
新しい機能を作る時、まずUIではなくMCPサーバーを作ってください。
AIエージェントに使わせてみて、それで十分ならUIは不要。
この考え方が、開発効率を劇的に向上させます。
-->

---
zoom: 0.8
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-12">今すぐ始める3つのアクション</h1>

  <div class="grid grid-cols-3 gap-6 px-8 flex-1">
    <div class="relative group">
      <div class="absolute -inset-2 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-all"></div>
      <div class="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl p-8 border border-purple-500/20 h-full flex flex-col">
        <div class="text-center mb-6">
          <span class="text-5xl mb-4 block">1️⃣</span>
          <h2 class="text-2xl font-bold text-purple-300">MCPサーバー作成</h2>
          <h3 class="text-lg text-gray-300 mt-2">既存APIをMCP化</h3>
        </div>
        <ul class="space-y-3 text-lg flex-1">
          <li class="flex items-start gap-3">
            <i class="i-carbon-tools text-purple-500 mt-1"></i>
            <span>社内ツールから開始</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-idea text-blue-500 mt-1"></i>
            <span>シンプルな機能から</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-timer text-purple-500 mt-1"></i>
            <span>1週間で1つ作る</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="relative group">
      <div class="absolute -inset-2 bg-gradient-to-br from-cyan-600/30 to-green-600/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-all"></div>
      <div class="relative bg-gradient-to-br from-cyan-900/40 to-green-900/40 rounded-2xl p-8 border border-cyan-500/20 h-full flex flex-col">
        <div class="text-center mb-6">
          <span class="text-5xl mb-4 block">2️⃣</span>
          <h2 class="text-2xl font-bold text-cyan-300">DXT拡張開発</h2>
          <h3 class="text-lg text-gray-300 mt-2">デスクトップ連携</h3>
        </div>
        <ul class="space-y-3 text-lg flex-1">
          <li class="flex items-start gap-3">
            <i class="i-carbon-application-web text-cyan-500 mt-1"></i>
            <span>社内アプリとの統合</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-bot text-green-500 mt-1"></i>
            <span>自動化スクリプト</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-chart-line-smooth text-cyan-500 mt-1"></i>
            <span>生産性向上ツール</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="relative group">
      <div class="absolute -inset-2 bg-gradient-to-br from-orange-600/30 to-pink-600/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-all"></div>
      <div class="relative bg-gradient-to-br from-orange-900/40 to-pink-900/40 rounded-2xl p-8 border border-orange-500/20 h-full flex flex-col">
        <div class="text-center mb-6">
          <span class="text-5xl mb-4 block">3️⃣</span>
          <h2 class="text-2xl font-bold text-orange-300">非エンジニアへ展開</h2>
          <h3 class="text-lg text-gray-300 mt-2">Claude Desktop導入</h3>
        </div>
        <ul class="space-y-3 text-lg flex-1">
          <li class="flex items-start gap-3">
            <i class="i-carbon-group text-orange-500 mt-1"></i>
            <span>営業チームから開始</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-presentation-file text-pink-500 mt-1"></i>
            <span>使い方セミナー開催</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-share-knowledge text-orange-500 mt-1"></i>
            <span>成功事例の共有</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="text-center mt-8">
    <p class="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 bg-clip-text">
      小さく始めて、大きく育てる
    </p>
  </div>
</div>

<!--
Speaker notes:
具体的に3つのアクションをお勧めします。
1. 既存のAPIをMCP化する - まず1つ、1週間で作ってみてください
2. DXT拡張を開発する - 社内ツールとの連携から始めましょう
3. 非エンジニアに展開する - Claude Desktopを導入し、成功事例を作りましょう
-->

---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-12">組織全体でMCPを推進する方法</h1>

  <div class="grid grid-cols-2 gap-8 px-12 flex-1">
    <div class="relative">
      <div class="absolute -inset-2 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
      <div class="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20 h-full">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-building text-3xl text-blue-400"></i>
          <span>経営層への提案</span>
        </h2>
        <ul class="space-y-4 text-lg">
          <li class="flex items-start gap-3">
            <i class="i-carbon-chart-relationship text-blue-500 mt-1"></i>
            <span>ROIの可視化</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-compare text-purple-500 mt-1"></i>
            <span>競合他社の事例紹介</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-test-tool text-blue-500 mt-1"></i>
            <span>パイロットプロジェクト提案</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-analytics text-purple-500 mt-1"></i>
            <span>リスクとリターンの明示</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="relative">
      <div class="absolute -inset-2 bg-gradient-to-br from-green-600/20 to-cyan-600/20 rounded-2xl blur-xl"></div>
      <div class="relative bg-gradient-to-br from-green-900/30 to-cyan-900/30 rounded-2xl p-8 border border-green-500/20 h-full">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-group-objects text-3xl text-green-400"></i>
          <span>チームへの展開</span>
        </h2>
        <ul class="space-y-4 text-lg">
          <li class="flex items-start gap-3">
            <i class="i-carbon-workshop text-green-500 mt-1"></i>
            <span>ハンズオンワークショップ</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-collaborate text-cyan-500 mt-1"></i>
            <span>ペアプログラミング</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-catalog text-green-500 mt-1"></i>
            <span>社内MCPライブラリ構築</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-certificate text-cyan-500 mt-1"></i>
            <span>ベストプラクティス共有</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="text-center mt-8">
    <div class="inline-block relative">
      <div class="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 rounded-2xl blur-2xl"></div>
      <div class="relative bg-black/60 backdrop-blur-xl rounded-2xl px-12 py-6 border border-purple-500/20">
        <p class="text-3xl font-bold">
          <span class="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text">
            全員がMCPクリエイター
          </span>
          になる組織へ
        </p>
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
MCPの推進は、一人では成功しません。
経営層には具体的なROIを、チームメンバーには実践的なサポートを。
全員がMCPクリエイターになれる環境を作ることが重要です。
-->

---
zoom: 0.8
---

<div class="h-full flex flex-col">
  <h1 class="text-4xl font-bold text-center mb-8">MCPが変える未来の働き方</h1>

  <div class="text-center mb-12">
    <p class="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
      並列する組織 の実現
    </p>
  </div>
  <div class="grid grid-cols-2 gap-12 px-12 flex-1">
    <div class="relative">
      <div class="absolute -inset-2 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-2xl blur-xl"></div>
      <div class="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-gray-600/20 h-full">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-300">
          <i class="i-carbon-hierarchy text-3xl text-gray-400"></i>
          <span>従来の組織</span>
        </h2>
        <ul class="space-y-4 text-lg text-gray-200">
          <li class="flex items-start gap-3">
            <i class="i-carbon-tree-view text-gray-400 mt-1"></i>
            <span>階層的な意思決定</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-firewall text-gray-400 mt-1"></i>
            <span>部門間の壁</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-locked text-gray-400 mt-1"></i>
            <span>情報のサイロ化</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-hourglass text-gray-400 mt-1"></i>
            <span>遅い変化対応</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="relative">
      <div class="absolute -inset-2 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl animate-pulse"></div>
      <div class="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl p-8 border border-purple-500/20 h-full">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <i class="i-carbon-network-3 text-3xl text-purple-400"></i>
          <span class="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">MCP時代の組織</span>
        </h2>
        <ul class="space-y-4 text-lg">
          <li class="flex items-start gap-3">
            <i class="i-carbon-flow-connection text-purple-500 mt-1"></i>
            <span>フラットな協業</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-integration text-blue-500 mt-1"></i>
            <span>シームレスな連携</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-share text-purple-500 mt-1"></i>
            <span>情報の民主化</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="i-carbon-lightning text-blue-500 mt-1"></i>
            <span>リアルタイム適応</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="text-center mt-8">
    <div class="inline-block relative">
      <div class="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-2xl"></div>
      <div class="relative bg-black/60 backdrop-blur-xl rounded-2xl px-12 py-6 border border-purple-500/20">
        <p class="text-2xl font-bold">
          MCPは技術ではなく、<span class="text-3xl text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">組織変革のツール</span>
        </p>
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
MCPは単なる技術ではありません。
組織のあり方そのものを変える力を持っています。
階層的な組織から、並列する組織へ。
これが私たちが目指す未来です。
-->

---
layout: center
---

<div class="flex flex-col items-center justify-center h-full">
  <h1 class="text-5xl font-bold mb-12">最後に：Don't Sleep on MCP!</h1>

  <div class="relative mb-16">
    <div class="absolute -inset-8 bg-gradient-to-r from-orange-600/30 via-pink-600/30 to-purple-600/30 rounded-3xl blur-3xl animate-pulse"></div>
    <div class="relative bg-black/60 backdrop-blur-xl rounded-3xl p-12 border border-orange-500/20">
      <p class="text-4xl font-bold text-center mb-8">
        MCPは<span class="text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text">非常に速く</span>進化している
      </p>
    </div>
  </div>
  <div class="max-w-3xl text-center space-y-6">
    <p class="text-2xl">
      今日学んだことは、<br/>
      3ヶ月後には<span class="font-bold text-orange-400">古い情報</span>になっているかもしれない
    </p>
    <p class="text-3xl font-bold">
      だからこそ、<span class="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">今すぐ始める</span>ことが重要
    </p>
  </div>
</div>

<!--
Speaker notes:
最後に強調したいのは、MCPの進化スピードです。
今日お話しした内容も、3ヶ月後には古くなっているかもしれません。
だからこそ、今すぐ始めることが重要なのです。
Don't sleep on MCP!
-->

---
layout: center
---

<div class="flex flex-col items-center justify-center h-full">
  <h1 class="text-5xl font-bold mb-16">2026年、あなたの会社は？</h1>

  <div class="grid grid-cols-2 gap-16 max-w-6xl mx-auto">
    <div class="relative">
      <div class="absolute -inset-4 bg-gradient-to-br from-green-600/30 to-blue-600/30 rounded-3xl blur-2xl animate-pulse"></div>
      <div class="relative bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-3xl p-12 border-2 border-green-500 text-center">
        <p class="text-4xl font-bold mb-4">
          MCPサーバーを<br/>
          <span class="text-5xl text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">100個</span><br/>
          持つ企業
        </p>
      </div>
    </div>
    <div class="relative">
      <div class="absolute -inset-4 bg-gradient-to-br from-red-600/30 to-gray-600/30 rounded-3xl blur-2xl"></div>
      <div class="relative bg-gradient-to-br from-red-900/40 to-gray-900/40 rounded-3xl p-12 border-2 border-red-500 text-center opacity-70">
        <p class="text-4xl font-bold mb-4 text-gray-300">
          MCPサーバーを<br/>
          <span class="text-5xl text-gray-200">0個</span><br/>
          しか持たない企業
        </p>
      </div>
    </div>
  </div>

  <div class="mt-16">
    <p class="text-3xl font-bold text-center">
      <span class="text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text">
        どちらが高い企業価値を持つでしょうか？
      </span>
    </p>
  </div>
</div>

<!--
Speaker notes:
2026年を想像してください。
MCPサーバーを100個持つ企業と、0個しか持たない企業。
投資家はどちらを選ぶでしょうか？
答えは明白です。
-->

---
layout: end
class: text-center
---

<div class="flex flex-col items-center justify-center h-full">
  <h1 class="text-6xl font-bold mb-12 text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text">
    ありがとうございました！
  </h1>
<br>
  <div class="flex justify-center">
    <div class="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/20 text-center">
      <h3 class="text-2xl font-bold mb-4 text-purple-300">Follow me</h3>
      <p class="text-lg mb-2"><strong>Günther Brunner</strong></p>
      <p class="text-lg text-blue-400">@gunta85 (X)</p>
    </div>
  </div>
</div>

<!--
Speaker notes:
ご清聴ありがとうございました。
MCPについてさらに学びたい方は、ぜひ社内リソースをご活用ください。
一緒にMCPで企業価値を高めていきましょう！
質問があれば、このあとの懇親会でお待ちしています。
-->