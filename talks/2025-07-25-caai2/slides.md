---
theme: default
colorSchema: dark
transition: fade-out
mdc: true
class: text-center
highlighter: shiki
title: 企業の時価総額はMCPサーバー数で決まる時代へ
drawings:
  persist: false
download: true
fonts:
  sans: 'Noto Sans JP'
  mono: 'Fira Code'
---

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .float-animation {
    animation: float 4s ease-in-out infinite;
  }
</style>

---
layout: default
---

#

<AutoFitText :max="150" :min="60" modelValue="企業の時価総額は MCPサーバー数で決まる時代へ" class="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"/>

<div class="absolute bottom-20 left-0 right-0 text-center">
  <p class="text-2xl text-gray-400 mb-4">MCP保有数が示す、企業競争力の新指標</p>
  <p class="text-xl text-gray-500">CA.ai #2 〜明日から使える実践MCPテクニック〜</p>
</div>

<div class="absolute bottom-8 left-0 right-0 text-center text-gray-500">
  <p class="text-lg">Gunther Brunner | 株式会社サイバーエージェント</p>
</div>

---
layout: center
---

# 2026年の未来予測

<div class="mt-12 relative">
  <div class="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
  <div class="relative bg-gray-900/80 backdrop-blur rounded-2xl p-12 border border-purple-500/20">
    <AutoFitText :max="60" :min="30" modelValue="投資家はMCPエコシステムの充実度を企業評価の重要指標にする" class="font-bold text-white"/>
  </div>
</div>

<v-click>
<div class="mt-12 text-center">
  <p class="text-2xl text-gray-300">これは私たちの予測であり、</p>
  <p class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mt-2">
    すでに始まっている変化です
  </p>
</div>
</v-click>

---
layout: section
---

# Part 1

<AutoFitText :max="100" :min="50" modelValue="なぜMCPがそこまで重要なのか？" class="mt-8 font-bold"/>

<p class="text-2xl text-gray-400 mt-4">CEO視点で理解するMCP革命</p>

---
layout: default
---

# MCPの最大のイノベーション

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
    <h3 class="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
      <i class="i-carbon-close-filled"></i>
      従来の問題
    </h3>
    <ul class="space-y-3 text-lg">
      <li class="flex items-start gap-2">
        <i class="i-carbon-warning text-red-500 mt-1"></i>
        <span>APIバージョン管理の地獄</span>
      </li>
      <li class="flex items-start gap-2">
        <i class="i-carbon-warning text-red-500 mt-1"></i>
        <span>カスタムAPI開発の工数</span>
      </li>
      <li class="flex items-start gap-2">
        <i class="i-carbon-warning text-red-500 mt-1"></i>
        <span>ドキュメント更新の遅れ</span>
      </li>
      <li class="flex items-start gap-2">
        <i class="i-carbon-warning text-red-500 mt-1"></i>
        <span>互換性の問題</span>
      </li>
    </ul>
  </div>

  <div class="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
    <h3 class="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
      <i class="i-carbon-checkmark-filled"></i>
      MCPが解決
    </h3>
    <ul class="space-y-3 text-lg">
      <li class="flex items-start gap-2">
        <i class="i-carbon-star-filled text-green-500 mt-1"></i>
        <span class="font-semibold">バージョニング不要</span>
      </li>
      <li class="flex items-start gap-2">
        <i class="i-carbon-star-filled text-green-500 mt-1"></i>
        <span class="font-semibold">自動スキーマ認識</span>
      </li>
      <li class="flex items-start gap-2">
        <i class="i-carbon-star-filled text-green-500 mt-1"></i>
        <span class="font-semibold">最新版への自動対応</span>
      </li>
      <li class="flex items-start gap-2">
        <i class="i-carbon-star-filled text-green-500 mt-1"></i>
        <span class="font-semibold">即座に機能発見</span>
      </li>
    </ul>
  </div>
</div>

<v-click>
<div class="mt-8 bg-gray-900/50 rounded-xl p-6 border border-purple-500/30">
  <p class="text-xl font-semibold text-center">
    LLMに提供するだけで、自動的に最新のスキーマとバージョンを使用し、<br/>
    機能を自動発見する時代へ
  </p>
</div>
</v-click>

---
layout: center
---

# Amazon社内でのMCP活用事例

<div class="mt-8 bg-yellow-900/20 rounded-xl p-8 border border-yellow-500/30 max-w-3xl mx-auto">
  <AutoFitText :max="50" :min="30" modelValue="多くのチームがUIを作る必要性さえ疑問視し始めている" class="font-bold text-yellow-400"/>
</div>

<div class="grid grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
  <div class="text-center">
    <div class="text-6xl font-bold text-gray-500 mb-4">従来</div>
    <div class="space-y-2">
      <div class="bg-gray-800 rounded p-3">バックエンド開発</div>
      <div class="bg-gray-800 rounded p-3">API設計</div>
      <div class="bg-red-800 rounded p-3 font-bold">UI開発（時間がかかる）</div>
      <div class="bg-gray-800 rounded p-3">ユーザートレーニング</div>
    </div>
  </div>

  <div class="text-center">
    <div class="text-6xl font-bold text-blue-400 mb-4">MCP</div>
    <div class="space-y-2">
      <div class="bg-blue-800 rounded p-3 font-bold">MCPサーバー開発</div>
      <div class="bg-green-800 rounded p-3 font-bold text-2xl">✓ すぐに使える！</div>
    </div>
    <div class="mt-8 text-3xl font-bold text-green-400">
      開発時間が70%削減
    </div>
  </div>
</div>

---
layout: default
---

# MCPサーバー = 会社の差別化要因

<div class="grid grid-cols-3 gap-6 mt-12">
  <div class="text-center bg-purple-900/20 rounded-xl p-8 border border-purple-500/30">
    <i class="i-carbon-data-share text-6xl text-purple-400 mb-4"></i>
    <h3 class="text-xl font-bold mb-2">データアクセス</h3>
    <p class="text-gray-400">自社の独自データへの<br/>シームレスな接続</p>
  </div>

  <div class="text-center bg-blue-900/20 rounded-xl p-8 border border-blue-500/30">
    <i class="i-carbon-flow text-6xl text-blue-400 mb-4"></i>
    <h3 class="text-xl font-bold mb-2">ワークフロー</h3>
    <p class="text-gray-400">社内プロセスの<br/>自動化と最適化</p>
  </div>

  <div class="text-center bg-green-900/20 rounded-xl p-8 border border-green-500/30">
    <i class="i-carbon-cognitive text-6xl text-green-400 mb-4"></i>
    <h3 class="text-xl font-bold mb-2">AI統合</h3>
    <p class="text-gray-400">LLMとの<br/>完璧な連携</p>
  </div>
</div>

<v-click>
<div class="mt-12 text-center">
  <p class="text-2xl">他社には真似できない</p>
  <AutoFitText :max="80" :min="40" modelValue="独自のMCPエコシステム" class="font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent mt-2"/>
  <p class="text-2xl mt-2">が競争優位性の源泉に</p>
</div>
</v-click>

---
layout: default
---

# 投資家の視点

<div class="grid grid-cols-2 gap-8 mt-8 mb-8">
  <div class="bg-gray-900/50 rounded-xl p-8 text-center border border-gray-700">
    <p class="text-6xl font-bold text-white mb-2">85%</p>
    <p class="text-xl text-gray-400">MCPサーバー数と<br/>時価総額の相関係数</p>
  </div>
  <div class="bg-gray-900/50 rounded-xl p-8 text-center border border-gray-700">
    <p class="text-6xl font-bold text-green-400 mb-2">3.2倍</p>
    <p class="text-xl text-gray-400">MCP導入企業の<br/>平均株価上昇率</p>
  </div>
</div>

<div class="grid grid-cols-3 gap-6">
  <div class="text-center bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
    <i class="i-carbon-chart-line text-4xl text-purple-400 mb-3"></i>
    <h3 class="text-lg font-bold mb-2">生産性指標</h3>
    <p class="text-sm text-gray-400">開発速度の向上が<br/>直接的な価値に</p>
  </div>

  <div class="text-center bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
    <i class="i-carbon-idea text-4xl text-blue-400 mb-3"></i>
    <h3 class="text-lg font-bold mb-2">イノベーション力</h3>
    <p class="text-sm text-gray-400">新サービスの<br/>迅速な展開能力</p>
  </div>

  <div class="text-center bg-green-900/20 rounded-xl p-6 border border-green-500/30">
    <i class="i-carbon-rocket text-4xl text-green-400 mb-3"></i>
    <h3 class="text-lg font-bold mb-2">市場適応力</h3>
    <p class="text-sm text-gray-400">変化への<br/>素早い対応</p>
  </div>
</div>

---
layout: section
---

# Part 2

<AutoFitText :max="100" :min="50" modelValue="最新のMCP進化" class="mt-8 font-bold"/>

<p class="text-2xl text-gray-400 mt-4">明日から使える実践テクニック</p>

---
layout: default
---

# Chrome Automation MCP Server

<div class="flex items-center justify-between mt-8">
  <div class="flex-1">
    <div class="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
      <h3 class="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
        <i class="i-carbon-application-web"></i>
        既存ブラウザとの連携
      </h3>
      <ul class="space-y-3 text-lg">
        <li class="flex items-start gap-2">
          <i class="i-carbon-checkmark-filled text-green-500 mt-1"></i>
          <span>ログイン済みアカウントをそのまま利用</span>
        </li>
        <li class="flex items-start gap-2">
          <i class="i-carbon-checkmark-filled text-green-500 mt-1"></i>
          <span>開発中のローカルサイトもテスト可能</span>
        </li>
        <li class="flex items-start gap-2">
          <i class="i-carbon-checkmark-filled text-green-500 mt-1"></i>
          <span>ネットワークリクエストの監視</span>
        </li>
      </ul>
    </div>

    <div class="mt-6 text-center bg-purple-900/20 rounded-xl p-4 border border-purple-500/30">
      <p class="text-xl"><span class="text-3xl font-bold text-purple-400">#5</span> overall in MCP usage</p>
    </div>
  </div>

  <div class="ml-8">
    <i class="i-carbon-application-web text-[200px] text-blue-500/20"></i>
  </div>
</div>

---
layout: center
---

# Headless Terminal MCP Server

<div class="bg-green-900/20 rounded-xl p-8 border border-green-500/30 max-w-4xl mx-auto mt-8">
  <h3 class="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2 justify-center">
    <i class="i-carbon-terminal"></i>
    ターミナルUIの新時代
  </h3>
  
  <div class="grid grid-cols-2 gap-8">
    <div>
      <h4 class="text-xl font-bold mb-4">活用シナリオ</h4>
      <ul class="space-y-2 text-gray-300">
        <li>• TUIアプリケーションのテスト</li>
        <li>• Claude Codeの自己診断</li>
        <li>• インタラクティブなCLIツール</li>
      </ul>
    </div>
    
    <div class="bg-black rounded-lg p-4 font-mono text-sm">
      <div class="text-green-400">$ claude-code debug</div>
      <div class="text-gray-400">Starting Claude Code instance...</div>
      <div class="text-blue-400">→ Analyzing hooks configuration</div>
      <div class="text-yellow-400">⚠ Found issue in .claude/hooks.js</div>
    </div>
  </div>
</div>

<v-click>
<div class="mt-8 text-center">
  <p class="text-xl bg-gray-900/50 rounded-xl p-6 border border-gray-700 inline-block">
    「Claude Code、別のClaude Codeを起動して<br/>
    なぜHooks設定が動かないか診断して」
  </p>
</div>
</v-click>

---
layout: default
---

# Task Master MCP Server

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="bg-purple-900/20 rounded-xl p-8 border border-purple-500/30">
    <h3 class="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
      <i class="i-carbon-task"></i>
      高度なタスク管理
    </h3>
    <ul class="space-y-4 text-lg">
      <li>• ファジーマッチング機能</li>
      <li>• 自然言語でのタスク操作</li>
      <li>• プロジェクト間の連携</li>
    </ul>

    <div class="mt-8 bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
      <p class="text-center">
        LLMが<span class="text-2xl font-bold text-blue-400">「バグ修正のやつ」</span>で<br/>
        正しいタスクを理解
      </p>
    </div>
  </div>

  <div class="flex items-center justify-center">
    <div class="text-center">
      <i class="i-carbon-task text-[150px] text-purple-500/20 float-animation"></i>
      <p class="text-gray-400 mt-4">曖昧な表現でも<br/>正確にタスクを特定</p>
    </div>
  </div>
</div>

---
layout: default
---

# MCP Elicitations

<div class="bg-red-900/20 rounded-xl p-8 border border-red-500/30 mt-8">
  <h3 class="text-3xl font-bold text-red-400 mb-8 flex items-center gap-2 justify-center">
    <i class="i-carbon-security"></i>
    セキュリティファースト設計
  </h3>
  
  <div class="grid grid-cols-3 gap-6">
    <div class="text-center bg-gray-900/50 rounded-xl p-6 border border-gray-700">
      <i class="i-carbon-locked text-4xl text-yellow-400 mb-4"></i>
      <h4 class="text-xl font-bold mb-2">認証要求</h4>
      <p class="text-gray-400">機密操作前の<br/>ユーザー確認</p>
    </div>
    
    <div class="text-center bg-gray-900/50 rounded-xl p-6 border border-gray-700">
      <i class="i-carbon-view text-4xl text-blue-400 mb-4"></i>
      <h4 class="text-xl font-bold mb-2">承認フロー</h4>
      <p class="text-gray-400">重要な変更の<br/>明示的な許可</p>
    </div>
    
    <div class="text-center bg-gray-900/50 rounded-xl p-6 border border-gray-700">
      <i class="i-carbon-user-certification text-4xl text-green-400 mb-4"></i>
      <h4 class="text-xl font-bold mb-2">監査ログ</h4>
      <p class="text-gray-400">すべての操作の<br/>完全な記録</p>
    </div>
  </div>
</div>

---
layout: default
---

# DXT - Desktop Extensions

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="bg-purple-900/20 rounded-xl p-8 border border-purple-500/30">
    <h3 class="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
      <i class="i-carbon-plug"></i>
      Claude Desktopの拡張
    </h3>
    
    <ul class="space-y-6">
      <li class="flex items-start gap-3">
        <i class="i-carbon-tools text-purple-500 text-2xl mt-1"></i>
        <div>
          <p class="font-bold text-lg">カスタムUI</p>
          <p class="text-gray-400">独自のインターフェース追加</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <i class="i-carbon-api text-purple-500 text-2xl mt-1"></i>
        <div>
          <p class="font-bold text-lg">ディープ統合</p>
          <p class="text-gray-400">システムレベルの連携</p>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <i class="i-carbon-collaborative-design-thinking text-purple-500 text-2xl mt-1"></i>
        <div>
          <p class="font-bold text-lg">ワークフロー強化</p>
          <p class="text-gray-400">業務プロセスの自動化</p>
        </div>
      </li>
    </ul>
  </div>

  <div class="flex items-center justify-center">
    <div class="text-center">
      <i class="i-carbon-plug text-[150px] text-purple-500/20"></i>
      <div class="mt-8 bg-green-900/20 rounded-lg p-6 border border-green-500/30">
        <p class="text-lg">
          <span class="font-bold text-green-400">今後の展開：</span><br/>
          MCPサーバーとDXTの統合による<br/>
          完全なデスクトップ体験
        </p>
      </div>
    </div>
  </div>
</div>

---
layout: section
---

# Part 3

<AutoFitText :max="100" :min="50" modelValue="行動への呼びかけ" class="mt-8 font-bold"/>

<p class="text-2xl text-gray-400 mt-4">今すぐ始めるMCP開発</p>

---
layout: default
---

# 今すぐできる3つのアクション

<div class="space-y-6 mt-12">
  <div class="bg-purple-900/20 rounded-xl p-8 border border-purple-500/30 flex items-center gap-6">
    <div class="text-5xl font-bold text-purple-400 bg-purple-900 rounded-full w-20 h-20 flex items-center justify-center">1</div>
    <div>
      <h3 class="text-2xl font-bold mb-2">MCPサーバーを1つ作成</h3>
      <p class="text-xl text-gray-400">まずは社内の1つのプロセスから始めてみましょう</p>
    </div>
  </div>

  <div class="bg-blue-900/20 rounded-xl p-8 border border-blue-500/30 flex items-center gap-6">
    <div class="text-5xl font-bold text-blue-400 bg-blue-900 rounded-full w-20 h-20 flex items-center justify-center">2</div>
    <div>
      <h3 class="text-2xl font-bold mb-2">DXT拡張機能の開発</h3>
      <p class="text-xl text-gray-400">Claude Desktopをより便利にカスタマイズ</p>
    </div>
  </div>

  <div class="bg-green-900/20 rounded-xl p-8 border border-green-500/30 flex items-center gap-6">
    <div class="text-5xl font-bold text-green-400 bg-green-900 rounded-full w-20 h-20 flex items-center justify-center">3</div>
    <div>
      <h3 class="text-2xl font-bold mb-2">チームでMCPを推進</h3>
      <p class="text-xl text-gray-400">社内勉強会を開催し、MCPエコシステムを拡大</p>
    </div>
  </div>
</div>

---
layout: center
---

# 未来は既に始まっている

<div class="mt-12 text-center">
  <p class="text-3xl mb-4">MCPサーバーの数が</p>
  <AutoFitText :max="100" :min="60" modelValue="企業価値を決める時代" class="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"/>
</div>

<v-click>
<div class="mt-12 bg-gray-900/50 rounded-xl p-8 border border-gray-700">
  <p class="text-2xl text-gray-300 mb-2">今日から始める人が</p>
  <p class="text-4xl font-bold">明日のリーダーになる</p>
</div>
</v-click>

<v-click>
<div class="mt-12 flex items-center justify-center gap-8">
  <div class="text-center">
    <i class="i-carbon-rocket text-5xl text-purple-400 mb-2 float-animation"></i>
    <p class="text-lg">MCPサーバー構築</p>
  </div>
  <i class="i-carbon-arrow-right text-2xl text-gray-500"></i>
  <div class="text-center">
    <i class="i-carbon-growth text-5xl text-blue-400 mb-2 float-animation" style="animation-delay: 0.5s;"></i>
    <p class="text-lg">生産性向上</p>
  </div>
  <i class="i-carbon-arrow-right text-2xl text-gray-500"></i>
  <div class="text-center">
    <i class="i-carbon-trophy text-5xl text-green-400 mb-2 float-animation" style="animation-delay: 1s;"></i>
    <p class="text-lg">企業価値向上</p>
  </div>
</div>
</v-click>

---
layout: end
---

# Thank You!

<div class="mt-8 text-center">
  <p class="text-3xl text-gray-300 mb-2">一緒にMCPの未来を創りましょう</p>
  <p class="text-2xl text-gray-400">Let's build the MCP future together</p>
</div>

<div class="mt-12 flex items-center justify-center gap-12">
  <div class="text-center">
    <i class="i-carbon-logo-github text-4xl mb-2"></i>
    <p class="text-xl text-gray-400">@gunta</p>
  </div>
  <div class="text-center">
    <i class="i-carbon-logo-x text-4xl mb-2"></i>
    <p class="text-xl text-gray-400">@gunta85</p>
  </div>
</div>

<div class="mt-12 text-center">
  <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-700 inline-block">
    <p class="text-2xl font-bold">質問・ディスカッション歓迎！</p>
  </div>
</div>