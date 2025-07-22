---
theme: default
background: https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## 複数のGemini CLIが同時開発する狂気
  Jujutsuが実現するAIエージェント協調の新世界
  
  Gemini CLI Meetup Japan #1 - Google 渋谷
drawings:
  persist: false
transition: slide-left
title: 複数のGemini CLIが同時開発する狂気
colorSchema: dark
fonts:
  sans: 'Noto Sans JP'
  serif: 'Noto Serif JP'
  mono: 'JetBrains Mono'
---

# 複数のGemini CLIが同時開発する狂気
## Jujutsuが実現するAIエージェント協調の新世界
<p class="text-sm opacity-60 !mt-1">Multiple Gemini CLIs Developing Simultaneously: The Madness<br/>A New World of AI Agent Collaboration Enabled by Jujutsu</p>

<div class="absolute bottom-20 left-0 right-0">
  <div class="text-2xl font-bold">グンタ・ブルナー Günther Brunner</div>
  <div class="text-lg opacity-80">株式会社サイバーエージェント CyberAgent, Inc.</div>
  <div class="text-sm opacity-60 mt-2">2025年7月22日 • Gemini CLI Meetup Japan #1</div>
</div>

<div class="absolute bottom-5 left-1/2 transform -translate-x-1/2">
  <svg class="w-10 h-10 text-white/60 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
</div>

---
layout: two-cols
---

# 自己紹介 About Me
<p class="text-sm opacity-60 !mt-0">Self Introduction</p>

<div class="space-y-4 text-lg">
  <div class="flex items-start gap-3">
    <span class="text-2xl">🚀</span>
    <div>
      <div class="font-bold">開発生産性のスペシャリスト</div>
      <div class="text-sm opacity-60">Developer Productivity Specialist</div>
    </div>
  </div>
  
  <div class="flex items-start gap-3">
    <span class="text-2xl">🌏</span>
    <div>
      <div class="font-bold">元Google・Amazon・Microsoft</div>
      <div class="text-sm opacity-60">Ex-Google, Amazon, Microsoft</div>
    </div>
  </div>
  
  <div class="flex items-start gap-3">
    <span class="text-2xl">🎯</span>
    <div>
      <div class="font-bold">Jujutsu早期採用者</div>
      <div class="text-sm opacity-60">Early Jujutsu Adopter</div>
    </div>
  </div>
</div>

::right::

<div class="flex items-center justify-center h-full">
  <div class="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl backdrop-blur-sm">
    <img src="/talks/2025-07-22-gemini/jj-logo.svg" class="w-40 h-40 mx-auto animate-pulse" />
    <div class="text-center mt-4">
      <div class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Jujutsu
      </div>
      <div class="text-sm opacity-60">Next-Gen VCS</div>
    </div>
  </div>
</div>

---
layout: center
---

# 問題提起 The Problem
<p class="text-sm opacity-60 !mt-0">Problem Statement</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  <div class="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
    <h3 class="text-2xl font-bold mb-4">🚧 現在の限界 Current Limitations</h3>
    <ul class="space-y-3 text-lg">
      <li>1つのGemini CLIで順番に作業</li>
      <li class="text-sm opacity-60">Working sequentially with one Gemini CLI</li>
      <li>ファイル競合の恐怖</li>
      <li class="text-sm opacity-60">Fear of file conflicts</li>
      <li>並列開発は夢のまた夢</li>
      <li class="text-sm opacity-60">Parallel development remains a dream</li>
    </ul>
  </div>
  
  <div class="bg-green-900/20 p-8 rounded-xl border border-green-500/30">
    <h3 class="text-2xl font-bold mb-4">✨ 理想の世界 Ideal World</h3>
    <ul class="space-y-3 text-lg">
      <li>複数のGeminiが同時開発</li>
      <li class="text-sm opacity-60">Multiple Geminis developing simultaneously</li>
      <li>コンフリクトフリー</li>
      <li class="text-sm opacity-60">Conflict-free</li>
      <li>10倍速の開発</li>
      <li class="text-sm opacity-60">10x development speed</li>
    </ul>
  </div>
</div>

---
layout: center
---

# 🎯 解決策：Jujutsu
<p class="text-sm opacity-60 !mt-0">The Solution: Jujutsu</p>

<div class="relative">
  <div class="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-30 animate-pulse"></div>
  <div class="relative bg-black/50 p-10 rounded-lg backdrop-blur-sm">
    <h2 class="text-4xl font-bold text-center mb-8">
      <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Jujutsu (jj)
      </span>
    </h2>
    
    <div class="text-center text-2xl mb-6">
      Googleが開発する次世代VCS
      <p class="text-sm opacity-60">Next-gen VCS developed by Google</p>
    </div>
    
    <div class="grid grid-cols-3 gap-6 mt-8">
      <div class="text-center">
        <div class="text-3xl mb-2">🧠</div>
        <div class="font-bold">賢い</div>
        <div class="text-sm opacity-60">Smart</div>
      </div>
      <div class="text-center">
        <div class="text-3xl mb-2">⚡</div>
        <div class="font-bold">高速</div>
        <div class="text-sm opacity-60">Fast</div>
      </div>
      <div class="text-center">
        <div class="text-3xl mb-2">🔄</div>
        <div class="font-bold">並列対応</div>
        <div class="text-sm opacity-60">Parallel-ready</div>
      </div>
    </div>
  </div>
</div>

---

# Jujutsuの系譜 Jujutsu's Lineage
<p class="text-sm opacity-60 !mt-0">The Pedigree of Jujutsu</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
  <div>
    <h3 class="text-2xl font-bold mb-4">👨‍💻 創造者 Creator</h3>
    <div class="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
      <div class="text-xl font-bold">Martin von Zweigbergk</div>
      <div class="text-sm opacity-60">Google Engineer</div>
      <ul class="mt-4 space-y-2">
        <li>• Git rebaseコマンドの改善者</li>
        <li class="text-sm opacity-60">• Improved Git rebase command</li>
        <li>• Google内部VCS「Fig」の開発者</li>
        <li class="text-sm opacity-60">• Developer of Google's internal VCS "Fig"</li>
        <li>• Piperモノレポ対応の専門家</li>
        <li class="text-sm opacity-60">• Expert in Piper monorepo support</li>
      </ul>
    </div>
  </div>
  
  <div>
    <h3 class="text-2xl font-bold mb-4">🌟 著名な支持者 Notable Supporters</h3>
    <div class="space-y-4">
      <div class="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
        <div class="font-bold">Scott Chacon</div>
        <div class="text-sm opacity-60">GitHub Co-founder</div>
        <div class="italic mt-2">"Jujutsuは素晴らしい"</div>
        <div class="text-sm opacity-60">"Jujutsu is amazing"</div>
      </div>
      <div class="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
        <div class="font-bold">Mitchell Hashimoto</div>
        <div class="text-sm opacity-60">HashiCorp Founder</div>
        <div class="italic mt-2">"毎日使っている"</div>
        <div class="text-sm opacity-60">"I use it every day"</div>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

# なぜJujutsuなのか？ Why Jujutsu?
<p class="text-sm opacity-60 !mt-0">Key Advantages</p>

<div class="grid grid-cols-2 gap-8 mt-12">
  <div class="space-y-6">
    <div class="flex items-start gap-4">
      <span class="text-3xl">🚫</span>
      <div>
        <div class="font-bold text-xl">ステージング不要</div>
        <div class="text-sm opacity-60">No staging area needed</div>
        <code class="text-sm bg-gray-800 px-2 py-1 rounded">git add</code> は過去のもの
      </div>
    </div>
    
    <div class="flex items-start gap-4">
      <span class="text-3xl">⏮️</span>
      <div>
        <div class="font-bold text-xl">完全なアンドゥ</div>
        <div class="text-sm opacity-60">Complete undo capability</div>
        <code class="text-sm bg-gray-800 px-2 py-1 rounded">jj undo</code> で何でも元通り
      </div>
    </div>
  </div>
  
  <div class="space-y-6">
    <div class="flex items-start gap-4">
      <span class="text-3xl">🎯</span>
      <div>
        <div class="font-bold text-xl">コンフリクトは友達</div>
        <div class="text-sm opacity-60">Conflicts are friends</div>
        <div class="text-sm">First-class conflict storage</div>
      </div>
    </div>
    
    <div class="flex items-start gap-4">
      <span class="text-3xl">🏗️</span>
      <div>
        <div class="font-bold text-xl">Workspace = 並列開発</div>
        <div class="text-sm opacity-60">Workspace = Parallel development</div>
        <div class="text-sm">Git worktreeの上位互換</div>
      </div>
    </div>
  </div>
</div>

---

# 🚀 実演：3人のGemini CLIが同時開発
<p class="text-sm opacity-60 !mt-0">Demo: 3 Gemini CLIs Developing Simultaneously</p>

<div class="grid grid-cols-3 gap-4 mt-8">
  <div class="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
    <h3 class="text-xl font-bold mb-3">🤖 Gemini A</h3>
    <div class="font-mono text-sm mb-2">backend-workspace</div>
    <div class="text-sm">
      <div>• API開発担当</div>
      <div class="opacity-60">• API Development</div>
      <div>• データベース設計</div>
      <div class="opacity-60">• Database Design</div>
    </div>
  </div>
  
  <div class="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
    <h3 class="text-xl font-bold mb-3">🤖 Gemini B</h3>
    <div class="font-mono text-sm mb-2">frontend-workspace</div>
    <div class="text-sm">
      <div>• UI実装担当</div>
      <div class="opacity-60">• UI Implementation</div>
      <div>• コンポーネント開発</div>
      <div class="opacity-60">• Component Development</div>
    </div>
  </div>
  
  <div class="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
    <h3 class="text-xl font-bold mb-3">🤖 Gemini C</h3>
    <div class="font-mono text-sm mb-2">test-workspace</div>
    <div class="text-sm">
      <div>• テスト作成</div>
      <div class="opacity-60">• Test Creation</div>
      <div>• ドキュメント生成</div>
      <div class="opacity-60">• Documentation</div>
    </div>
  </div>
</div>

<div class="mt-8 bg-gray-900 p-4 rounded-lg">
  <pre class="text-sm">
    <code class="language-bash">
      # 3つのワークスペースを同時作成
      jj workspace add backend
      jj workspace add frontend
      jj workspace add test
      # それぞれでGemini CLIを起動
      cd backend && gemini-cli "Build REST API" &
      cd ../frontend && gemini-cli "Create React UI" &
      cd ../test && gemini-cli "Write tests" &
    </code>
  </pre>
</div>

---
layout: center
---

# 魔法の瞬間 The Magic Moment
<p class="text-sm opacity-60 !mt-0">When Everything Comes Together</p>

<div class="relative mt-12">
  <div class="flex justify-center items-center space-x-8">
    <div class="animate-pulse">
      <div class="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
        <span class="text-3xl">🤖</span>
      </div>
      <div class="text-center mt-2 text-sm">Backend</div>
    </div>
    <div class="text-4xl animate-bounce">+</div>
    <div class="animate-pulse animation-delay-200">
      <div class="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
        <span class="text-3xl">🤖</span>
      </div>
      <div class="text-center mt-2 text-sm">Frontend</div>
    </div>
    <div class="text-4xl animate-bounce animation-delay-400">+</div>
    <div class="animate-pulse animation-delay-600">
      <div class="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center">
        <span class="text-3xl">🤖</span>
      </div>
      <div class="text-center mt-2 text-sm">Test</div>
    </div>
    <div class="text-4xl animate-bounce animation-delay-800">=</div>
    <div class="animate-pulse animation-delay-1000">
      <div class="w-32 h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
        <span class="text-5xl">🚀</span>
      </div>
      <div class="text-center mt-2 font-bold">完成！Done!</div>
    </div>
  </div>
</div>
<div class="mt-12 text-center">
  <div class="inline-block bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-lg">
    <div class="bg-black px-8 py-4 rounded-lg">
      <div class="text-2xl font-bold">5分で完全なアプリケーション</div>
      <div class="text-sm opacity-60">Complete application in 5 minutes</div>
    </div>
  </div>
</div>

---

# コンフリクト？大歓迎！ Conflicts? Welcome!
<p class="text-sm opacity-60 !mt-0">Embracing Conflicts with Jujutsu</p>

<div class="grid grid-cols-2 gap-8 mt-8">
  <div>
    <h3 class="text-xl font-bold mb-4">😱 Git の場合 With Git</h3>
    <div class="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
      <pre class="text-sm">
        <code><<<<<<< HEAD
        const api = "old";
        =======
        const api = "new";
        >>>>>>> feature
        # 😭 作業停止！
        # Work halted!
        </code>
      </pre>
    </div>
  </div>
  
  <div>
    <h3 class="text-xl font-bold mb-4">😎 Jujutsu の場合 With Jujutsu</h3>
    <div class="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
      <pre class="text-sm">
        <code># コンフリクトをコミットに保存
        # Conflicts stored in commit
        jj new
        # 後で解決可能
        # Resolve later
        jj resolve
        # 🎉 作業継続！
        # Work continues!
        </code>
      </pre>
    </div>
  </div>
</div>

<div class="mt-8 text-center">
  <div class="inline-block bg-yellow-900/20 px-6 py-3 rounded-lg border border-yellow-500/30">
    <div class="text-lg font-bold">革命的な違い Revolutionary Difference</div>
    <div class="text-sm opacity-60">コンフリクトは進行を止めない Conflicts don't stop progress</div>
  </div>
</div>

---
layout: center
---

# 実績 Results
<p class="text-sm opacity-60 !mt-0">What We've Achieved</p>

<div class="grid grid-cols-2 gap-12 mt-12">
  <div class="text-center">
    <div class="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">10x</div>
    <div class="text-xl mt-2">開発速度向上</div>
    <div class="text-sm opacity-60">Development Speed Increase</div>
  </div>
  
  <div class="text-center">
    <div class="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">0</div>
    <div class="text-xl mt-2">マージコンフリクト</div>
    <div class="text-sm opacity-60">Merge Conflicts</div>
  </div>
</div>

<div class="mt-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-xl border border-purple-500/30">
  <h3 class="text-2xl font-bold text-center mb-6">実際の成果 Real Achievements</h3>
  <div class="grid grid-cols-3 gap-6 text-center">
    <div>
      <div class="text-3xl mb-2">🏗️</div>
      <div class="font-bold">フルスタックアプリ</div>
      <div class="text-sm opacity-60">Full-stack App</div>
    </div>
    <div>
      <div class="text-3xl mb-2">✅</div>
      <div class="font-bold">完全なテストカバレッジ</div>
      <div class="text-sm opacity-60">Complete Test Coverage</div>
    </div>
    <div>
      <div class="text-3xl mb-2">📚</div>
      <div class="font-bold">自動生成ドキュメント</div>
      <div class="text-sm opacity-60">Auto-generated Docs</div>
    </div>
  </div>
</div>

---

# 未来のビジョン Future Vision
<p class="text-sm opacity-60 !mt-0">What's Next</p>

<div class="relative">
  <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl"></div>
  <div class="relative space-y-8">
    <div class="text-center">
      <div class="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        100人のGemini CLI
      </div>
      <div class="text-xl opacity-60 mt-2">100 Gemini CLIs</div>
    </div>
    <div class="grid grid-cols-3 gap-6 mt-8">
      <div class="bg-black/50 p-6 rounded-lg backdrop-blur-sm border border-purple-500/30">
        <div class="text-2xl mb-2">🏭</div>
        <div class="font-bold">マイクロサービス</div>
        <div class="text-sm opacity-60">Microservices</div>
        <div class="text-sm mt-2">各サービスに専門AI</div>
      </div>
      <div class="bg-black/50 p-6 rounded-lg backdrop-blur-sm border border-pink-500/30">
        <div class="text-2xl mb-2">🌐</div>
        <div class="font-bold">多言語対応</div>
        <div class="text-sm opacity-60">Multi-language</div>
        <div class="text-sm mt-2">言語別の専門家AI</div>
      </div>
      <div class="bg-black/50 p-6 rounded-lg backdrop-blur-sm border border-purple-500/30">
        <div class="text-2xl mb-2">🎭</div>
        <div class="font-bold">役割分担</div>
        <div class="text-sm opacity-60">Role Division</div>
        <div class="text-sm mt-2">セキュリティ・性能・UX</div>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

# 今すぐ始めよう！ Start Now!
<p class="text-sm opacity-60 !mt-0">Get Started with Jujutsu + Gemini</p>

<div class="bg-gray-900 p-8 rounded-xl mt-8">
  <pre class="text-lg">
    <code class="language-bash"># インストール Installation
    brew install jj    # macOS
    # または or
    cargo install jj   # Rust
    # 初期化 Initialize
    jj init --git
    # ワークスペース作成 Create Workspaces
    jj workspace add feature-a
    jj workspace add feature-b
    # Gemini CLI起動 Launch Gemini CLI
    gemini-cli "Build amazing features"
    </code>
  </pre>
</div>

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30 text-center">
    <div class="text-2xl mb-2">📚</div>
    <div class="font-bold">Jujutsu公式ドキュメント</div>
    <div class="text-sm opacity-60">Official Jujutsu Docs</div>
    <code class="text-sm">github.com/martinvonz/jj</code>
  </div>
  
  <div class="bg-green-900/20 p-6 rounded-lg border border-green-500/30 text-center">
    <div class="text-2xl mb-2">🎓</div>
    <div class="font-bold">チュートリアル</div>
    <div class="text-sm opacity-60">Tutorial</div>
    <code class="text-sm">jj-vcs.github.io</code>
  </div>
</div>

---
layout: center
class: text-center
---

# ありがとうございました！
<p class="text-2xl opacity-80 !mt-2">Thank You!</p>

<div class="mt-12">
  <div class="text-6xl animate-bounce">🚀</div>
</div>

<div class="mt-8 space-y-4">
  <div>
    <div class="text-xl font-bold">グンタ・ブルナー Günther Brunner</div>
    <div class="opacity-60">@gunta85</div>
  </div>
  
  <div class="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-lg inline-block">
    <div class="bg-black px-8 py-4 rounded-lg">
      <div class="text-lg font-bold">一緒にAIの未来を創りましょう！</div>
      <div class="text-sm opacity-60">Let's create the future of AI together!</div>
    </div>
  </div>
</div>

<div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
  <div class="flex items-center gap-4 text-sm opacity-60">
    <span>🏢 CyberAgent</span>
    <span>•</span>
    <span>🚀 Jujutsu Evangelist</span>
    <span>•</span>
    <span>🤖 AI-Driven Development</span>
  </div>
</div>

<style>
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-800 {
  animation-delay: 800ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}
</style>