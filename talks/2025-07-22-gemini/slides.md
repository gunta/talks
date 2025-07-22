---
theme: default
background: #ffffff
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Scaling AI Development with Jujutsu
  Parallel Gemini CLI workflows for 10x productivity
  
  Gemini CLI Meetup Japan #1 - Google Tokyo
drawings:
  persist: false
transition: fade
title: Scaling AI Development with Jujutsu
colorSchema: light
fonts:
  sans: 'Google Sans, Noto Sans JP, Arial'
  mono: 'Google Sans Mono, Roboto Mono'
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
    <img src="/jj-logo.svg" class="w-40 h-40 mx-auto animate-pulse" />
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

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-12 text-center" style="font-family: 'Google Sans', sans-serif">
    The Story Behind Jujutsu
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>
      <h3 class="text-2xl font-normal text-gray-900 mb-6" style="font-family: 'Google Sans', sans-serif">
        Creator
      </h3>
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <span class="text-2xl font-medium text-blue-600">MZ</span>
          </div>
          <div>
            <p class="text-lg font-medium text-gray-900">Martin von Zweigbergk</p>
            <p class="text-sm text-gray-600">Software Engineer at Google</p>
          </div>
        </div>
        <div class="space-y-3 text-gray-700">
          <p class="flex items-start gap-2">
            <span class="text-blue-500 mt-1">•</span>
            <span>Improved Git rebase command<br/>
            <span class="text-sm text-gray-600">Git rebaseコマンドの改善者</span></span>
          </p>
          <p class="flex items-start gap-2">
            <span class="text-blue-500 mt-1">•</span>
            <span>Developer of Google's "Fig" VCS<br/>
            <span class="text-sm text-gray-600">Google内部VCS「Fig」の開発者</span></span>
          </p>
          <p class="flex items-start gap-2">
            <span class="text-blue-500 mt-1">•</span>
            <span>Piper monorepo expert<br/>
            <span class="text-sm text-gray-600">Piperモノレポ対応の専門家</span></span>
          </p>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-2xl font-normal text-gray-900 mb-6" style="font-family: 'Google Sans', sans-serif">
        Industry Recognition
      </h3>
      <div class="space-y-4">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <span class="text-lg font-medium text-green-600">SC</span>
            </div>
            <div>
              <p class="font-medium text-gray-900">Scott Chacon</p>
              <p class="text-sm text-gray-600">GitHub Co-founder</p>
              <p class="text-gray-700 mt-2 italic">"Jujutsu is amazing"</p>
              <p class="text-sm text-gray-600">「Jujutsuは素晴らしい」</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <span class="text-lg font-medium text-purple-600">MH</span>
            </div>
            <div>
              <p class="font-medium text-gray-900">Mitchell Hashimoto</p>
              <p class="text-sm text-gray-600">HashiCorp Founder</p>
              <p class="text-gray-700 mt-2 italic">"I use it every day"</p>
              <p class="text-sm text-gray-600">「毎日使っている」</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

<div class="max-w-5xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-12 text-center" style="font-family: 'Google Sans', sans-serif">
    Why Jujutsu?
  </h2>
  <div class="grid grid-cols-2 gap-8">
    <div class="space-y-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-900">No Staging Area</h3>
            <p class="text-sm text-gray-600 mt-1">ステージング不要</p>
            <p class="text-gray-700 mt-2">No more <code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">git add</code></p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-900">Complete Undo</h3>
            <p class="text-sm text-gray-600 mt-1">完全なUndo機能</p>
            <p class="text-gray-700 mt-2">Simply <code class="text-sm bg-gray-100 px-2 py-1 rounded font-mono">jj undo</code></p>
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-900">First-class Conflicts</h3>
            <p class="text-sm text-gray-600 mt-1">コンフリクトは友達</p>
            <p class="text-gray-700 mt-2">Store & resolve later</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-900">True Workspaces</h3>
            <p class="text-sm text-gray-600 mt-1">Workspace = 並列開発</p>
            <p class="text-gray-700 mt-2">Better than git worktree</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
    Parallel Development Demo
  </h2>
  <p class="text-center text-gray-600 mb-12">3 Gemini CLIs working simultaneously</p>
  
  <div class="grid grid-cols-3 gap-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
          <span class="text-white font-bold">A</span>
        </div>
        <h3 class="text-lg font-medium text-gray-900">Backend</h3>
      </div>
      <code class="text-sm text-gray-600 font-mono block mb-3">backend-workspace</code>
      <ul class="space-y-2 text-sm text-gray-700">
        <li>• REST API development</li>
        <li class="text-gray-500">API開発担当</li>
        <li>• Database schema</li>
        <li class="text-gray-500">データベース設計</li>
      </ul>
    </div>
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
          <span class="text-white font-bold">B</span>
        </div>
        <h3 class="text-lg font-medium text-gray-900">Frontend</h3>
      </div>
      <code class="text-sm text-gray-600 font-mono block mb-3">frontend-workspace</code>
      <ul class="space-y-2 text-sm text-gray-700">
        <li>• React components</li>
        <li class="text-gray-500">UI実装担当</li>
        <li>• User interface</li>
        <li class="text-gray-500">コンポーネント開発</li>
      </ul>
    </div>
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
          <span class="text-white font-bold">C</span>
        </div>
        <h3 class="text-lg font-medium text-gray-900">Testing</h3>
      </div>
      <code class="text-sm text-gray-600 font-mono block mb-3">test-workspace</code>
      <ul class="space-y-2 text-sm text-gray-700">
        <li>• Unit tests</li>
        <li class="text-gray-500">テスト作成</li>
        <li>• Documentation</li>
        <li class="text-gray-500">ドキュメント生成</li>
      </ul>
    </div>
  </div>
  
  <div class="mt-8 bg-gray-50 rounded-xl p-6">
    <pre class="text-sm font-mono text-gray-800">
    <code># Create three workspaces
      jj workspace add backend
      jj workspace add frontend  
      jj workspace add test
      # Launch Gemini CLI in each
      cd backend && gemini-cli "Build REST API" &
      cd ../frontend && gemini-cli "Create React UI" &
      cd ../test && gemini-cli "Write tests" &
      </code></pre>
  </div>
</div>

---
layout: center
---

<div class="h-screen flex flex-col justify-center items-center">
  <h2 class="text-4xl font-normal text-gray-900 mb-4" style="font-family: 'Google Sans', sans-serif">
    The Result
  </h2>
  <p class="text-xl text-gray-600 mb-12">When parallel development meets coordination</p>
  
  <div class="flex items-center justify-center gap-4 mb-12">
    <div class="text-center">
      <div class="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-2">
        <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
        </svg>
      </div>
      <p class="text-sm text-gray-600">Backend</p>
    </div>
    <span class="text-2xl text-gray-400">+</span>
    <div class="text-center">
      <div class="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-2">
        <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      </div>
      <p class="text-sm text-gray-600">Frontend</p>
    </div>
    <span class="text-2xl text-gray-400">+</span>
    <div class="text-center">
      <div class="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mb-2">
        <svg class="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
        </svg>
      </div>
      <p class="text-sm text-gray-600">Tests</p>
    </div>
    <span class="text-2xl text-gray-400">=</span>
    <div class="text-center">
      <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-2 shadow-lg">
        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <p class="text-lg font-medium text-gray-900">Complete!</p>
    </div>
  </div>
  <div class="bg-gray-50 rounded-2xl px-8 py-6 text-center">
    <p class="text-2xl font-medium text-gray-900" style="font-family: 'Google Sans', sans-serif">
      Full Application in 5 Minutes
    </p>
    <p class="text-lg text-gray-600 mt-2">
      5分で完全なアプリケーション
    </p>
  </div>
</div>

---

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-12 text-center" style="font-family: 'Google Sans', sans-serif">
    Conflict Resolution Reimagined
  </h2>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
          <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-gray-900">Traditional Git</h3>
      </div>
      <div class="bg-red-50 rounded-xl p-6 border border-red-200">
        <pre class="text-sm font-mono text-gray-800"><code><<<<<<< HEAD
const api = "old";
=======
const api = "new";
>>>>>>> feature</code></pre>
        <div class="mt-4 flex items-center gap-2 text-red-700">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="font-medium">Work halted</p>
          <p class="text-sm text-red-600">作業停止</p>
        </div>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-gray-900">Jujutsu</h3>
      </div>
      <div class="bg-green-50 rounded-xl p-6 border border-green-200">
        <pre class="text-sm font-mono text-gray-800">
        <code># Store conflict in commit
          jj new
          # Continue working
          # Resolve when ready
          jj resolve</code></pre>
        <div class="mt-4 flex items-center gap-2 text-green-700">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          <p class="font-medium">Work continues</p>
          <p class="text-sm text-green-600">作業継続</p>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-8 bg-blue-50 rounded-xl p-6 text-center">
    <p class="text-xl font-medium text-gray-900">
      Conflicts Don't Block Progress
    </p>
    <p class="text-gray-600 mt-2">
      コンフリクトは進行を止めない
    </p>
  </div>
</div>

---
layout: center
---

<div class="h-screen flex flex-col justify-center">
  <h2 class="text-4xl font-normal text-gray-900 mb-12 text-center" style="font-family: 'Google Sans', sans-serif">
    Performance Metrics
  </h2>
  <div class="grid grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
    <div class="text-center">
      <div class="text-6xl font-bold text-blue-600 mb-4" style="font-family: 'Google Sans', sans-serif">
        10x
      </div>
      <p class="text-xl text-gray-900">Faster Development</p>
      <p class="text-gray-600">開発速度向上</p>
    </div>
    <div class="text-center">
      <div class="text-6xl font-bold text-green-600 mb-4" style="font-family: 'Google Sans', sans-serif">
        0
      </div>
      <p class="text-xl text-gray-900">Merge Conflicts</p>
      <p class="text-gray-600">マージコンフリクト</p>
    </div>
  </div>
  <div class="bg-gray-50 rounded-2xl p-8 max-w-5xl mx-auto">
    <h3 class="text-2xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
      What We Built
    </h3>
    <div class="grid grid-cols-3 gap-8 text-center">
      <div>
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
        </div>
        <p class="text-lg font-medium text-gray-900">Full-Stack Application</p>
        <p class="text-sm text-gray-600">フルスタックアプリ</p>
      </div>
      <div>
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <p class="text-lg font-medium text-gray-900">100% Test Coverage</p>
        <p class="text-sm text-gray-600">完全なテストカバレッジ</p>
      </div>
      <div>
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <p class="text-lg font-medium text-gray-900">Auto-Generated Docs</p>
        <p class="text-sm text-gray-600">自動生成ドキュメント</p>
      </div>
    </div>
  </div>
</div>

---

<div class="h-screen flex flex-col justify-center">
  <h2 class="text-4xl font-normal text-gray-900 mb-4 text-center" style="font-family: 'Google Sans', sans-serif">
    The Future at Scale
  </h2>
  <p class="text-xl text-gray-600 text-center mb-12">Imagine 100 Gemini CLIs working in harmony</p>
  
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-12">
      <span class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600" style="font-family: 'Google Sans', sans-serif">
        100+ AI Agents
      </span>
      <p class="text-gray-600 mt-2">100人のGemini CLI</p>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Microservices</h3>
        <p class="text-sm text-gray-600">マイクロサービス</p>
        <p class="text-gray-700 mt-2">One AI per service</p>
        <p class="text-sm text-gray-600">各サービスに専門AI</p>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Polyglot</h3>
        <p class="text-sm text-gray-600">多言語対応</p>
        <p class="text-gray-700 mt-2">Language experts</p>
        <p class="text-sm text-gray-600">言語別の専門家AI</p>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Specialized Roles</h3>
        <p class="text-sm text-gray-600">役割分担</p>
        <p class="text-gray-700 mt-2">Security, Perf, UX</p>
        <p class="text-sm text-gray-600">セキュリティ・性能・UX</p>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

<div class="h-screen flex flex-col justify-center">
  <h2 class="text-4xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
    Get Started Today
  </h2>
  
  <div class="max-w-4xl mx-auto">
    <div class="bg-gray-50 rounded-xl p-8 mb-8">
      <pre class="text-sm font-mono text-gray-800"><code># Install Jujutsu
        brew install jj    # macOS
        cargo install jj   # Alternative
        # Initialize repository  
        jj init --git
        # Create workspaces
        jj workspace add feature-a
        jj workspace add feature-b
        # Launch Gemini CLI
        gemini-cli "Build amazing features"</code></pre>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <div>
            <p class="font-medium text-gray-900">Documentation</p>
            <p class="text-sm text-gray-600">Jujutsu公式ドキュメント</p>
            <a href="https://github.com/martinvonz/jj" class="text-sm text-blue-600 hover:underline">github.com/martinvonz/jj</a>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7"/>
            </svg>
          </div>
          <div>
            <p class="font-medium text-gray-900">Tutorial</p>
            <p class="text-sm text-gray-600">チュートリアル</p>
            <a href="https://jj-vcs.github.io" class="text-sm text-blue-600 hover:underline">jj-vcs.github.io</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="h-screen flex flex-col justify-center items-center bg-white">
  <div class="text-center">
    <h1 class="text-6xl font-normal text-gray-900 mb-4" style="font-family: 'Google Sans', sans-serif">
      Thank You
    </h1>
    <p class="text-2xl text-gray-600 mb-12">
      ありがとうございました
    </p>
    <div class="mb-12">
      <p class="text-xl text-gray-700 mb-2">Günther Brunner</p>
      <p class="text-gray-600">@gunta85 • CyberAgent, Inc.</p>
    </div>
    <div class="bg-gray-50 rounded-2xl px-8 py-6 inline-block">
      <p class="text-xl font-medium text-gray-900" style="font-family: 'Google Sans', sans-serif">
        Let's Build the Future Together
      </p>
      <p class="text-gray-600 mt-2">
        一緒にAIの未来を創りましょう
      </p>
    </div>
  </div>
  
  <div class="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-sm text-gray-500">
    <span>Jujutsu Evangelist</span>
    <span>•</span>
    <span>AI-Driven Development</span>
    <span>•</span>
    <span>Gemini CLI Meetup Japan</span>
  </div>
  
  <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500"></div>
</div>