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
layout: image
image: geminibg.png
---

<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

<div class="relative z-10 h-full flex flex-col justify-center items-center text-white">
  <div class="max-w-4xl mx-auto text-center px-8">
    <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
      複数のGemini CLIが同時開発する狂気
    </h1>
    <h2 class="text-2xl md:text-3xl font-medium mb-4 text-blue-200 drop-shadow-xl">
      Jujutsuが実現するAIエージェント協調の新世界
    </h2>
    <p class="text-lg opacity-90 drop-shadow-lg">
      Multiple Gemini CLIs Developing Simultaneously: The Madness<br/>
      A New World of AI Agent Collaboration Enabled by Jujutsu
    </p>
  </div>

  <div class="fixed inset-x-0 bottom-0 pb-6 flex justify-center pointer-events-none z-50">
    <div class="bg-black/60 backdrop-blur-sm inline-block px-8 py-6 rounded-2xl shadow-2xl pointer-events-auto">
      <div class="text-2xl font-bold mb-2">グンタ・ブルナー Günther Brunner</div>
      <div class="text-lg opacity-90">株式会社サイバーエージェント CyberAgent, Inc.</div>
      <div class="text-base opacity-80 mt-3">
        <mdi-calendar class="inline mr-1" /> 2025年7月22日 
        <span class="mx-2">•</span>
        <mdi-map-marker class="inline mr-1" /> Gemini CLI Meetup Japan #1
      </div>
    </div>
  </div>
</div>


---
layout: two-cols
---

# 自己紹介 About Me
<p class="text-sm opacity-60 !mt-0">Self Introduction</p>

<div class="space-y-4 text-lg">
  <div class="flex items-start gap-3">
    <mdi-code-braces class="text-3xl text-blue-500" />
    <div>
      <div class="font-bold">エンジニア & デザイナー</div>
      <div class="text-sm opacity-60">Engineer & Designer</div>
    </div>
  </div>
  
  <div class="flex items-start gap-3">
    <mdi-rocket-launch class="text-3xl text-red-500" />
    <div>
      <div class="font-bold">開発生産性 & パフォーマンス専門</div>
      <div class="text-sm opacity-60">Developer Productivity & Performance Specialist</div>
    </div>
  </div>
  
  <div class="flex items-start gap-3">
    <img src="/CALogo.svg" class="w-8 h-8" />
    <div>
      <div class="font-bold">2012年サイバーエージェント入社</div>
      <div class="text-sm opacity-60">Joined CyberAgent in 2012</div>
    </div>
  </div>
  
  <div class="flex items-start gap-3">
    <mdi-star class="text-3xl text-yellow-500" />
    <div>
      <div class="font-bold">OSS OpenSTF創設者</div>
      <div class="text-sm opacity-60">Original creator of OpenSTF (13k+ GitHub stars)</div>
      <div class="text-xs opacity-50">Realtime Android device remote debugging</div>
    </div>
  </div>
  
  <div class="flex items-start gap-3">
    <mdi-calendar-star class="text-3xl text-purple-500" />
    <div>
      <div class="font-bold">AI Code Agents祭り主催</div>
      <div class="text-sm opacity-60">Organizer of AI Code Agents Festival</div>
      <div class="text-xs opacity-50">2万人以上視聴 • events.code-agents.com/2025-winter</div>
    </div>
  </div>
  
  <div class="flex items-start gap-3">
    <mdi-twitter class="text-3xl text-blue-400" />
    <div>
      <div class="font-bold">Follow me on X</div>
      <div class="text-sm opacity-60">@gunta85</div>
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
    <h3 class="text-2xl font-bold mb-4"><mdi-alert-circle class="inline text-red-500" /> 現在の限界 Current Limitations</h3>
    <ul class="space-y-3 text-lg">
      <li>1つのGemini CLIで順番に作業</li>
      <span class="text-sm opacity-60">Working sequentially with one Gemini CLI</span>
      <li>ファイル競合の恐怖</li>
      <span class="text-sm opacity-60">Fear of file conflicts</span>
      <li>並列開発は夢のまた夢</li>
      <span class="text-sm opacity-60">Parallel development remains a dream</span>
    </ul>
  </div>
  
  <div class="bg-green-900/20 p-8 rounded-xl border border-green-500/30">
    <h3 class="text-2xl font-bold mb-4"><mdi-star-outline class="inline text-green-500" /> 理想の世界 Ideal World</h3>
    <ul class="space-y-3 text-lg">
      <li>複数のGeminiが同時開発</li>
      <span class="text-sm opacity-60">Multiple Geminis developing simultaneously</span>
      <li>コンフリクトフリー</li>
      <span class="text-sm opacity-60">Conflict-free</span>
      <li>10倍速の開発</li>
      <span class="text-sm opacity-60">10x development speed</span>
    </ul>
  </div>
</div>

---
layout: center
---

# <mdi-target class="inline text-purple-500" /> 解決策：Jujutsu
<p class="text-sm opacity-60 !mt-0">The Solution: Jujutsu</p>

<div class="relative">
  <div class="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-30 animate-pulse"></div>
  <div class="relative bg-white/0 p-10 rounded-lg backdrop-blur-sm">
    <h2 class="text-4xl font-bold text-center mb-8">
      <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Jujutsu (jj)
      </span>
    </h2>
    <div class="text-center text-2xl mb-6">
      Googleが支援する次世代VCS
      <p class="text-sm opacity-60">Next-gen VCS supported by Google</p>
    </div>
    <div class="grid grid-cols-3 gap-6 mt-8">
      <div class="text-center">
        <mdi-brain class="text-4xl mb-2 text-purple-400" />
        <div class="font-bold">賢い</div>
        <div class="text-sm opacity-60">Smart</div>
      </div>
      <div class="text-center">
        <mdi-lightning-bolt class="text-4xl mb-2 text-yellow-400" />
        <div class="font-bold">高速</div>
        <div class="text-sm opacity-60">Fast</div>
      </div>
      <div class="text-center">
        <mdi-sync class="text-4xl mb-2 text-green-400" />
        <div class="font-bold">並列対応</div>
        <div class="text-sm opacity-60">Parallel-ready</div>
      </div>
    </div>
  </div>
</div>

---
zoom: 1.0
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
            <mdi-circle-small class="text-blue-500 mt-1" />
            <span>Improved Git rebase command<br/>
            <span class="text-sm text-gray-600">Git rebaseコマンドの改善者</span></span>
          </p>
          <p class="flex items-start gap-2">
            <mdi-circle-small class="text-blue-500 mt-1" />
            <span>Developer of Google's "Fig" VCS<br/>
            <span class="text-sm text-gray-600">Google内部VCS「Fig」の開発者</span></span>
          </p>
          <p class="flex items-start gap-2">
            <mdi-circle-small class="text-blue-500 mt-1" />
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
            <mdi-cancel class="w-6 h-6 text-red-600" />
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
            <mdi-undo class="w-6 h-6 text-blue-600" />
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
            <mdi-heart class="w-6 h-6 text-green-600" />
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
            <mdi-folder-multiple class="w-6 h-6 text-yellow-600" />
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
layout: center
---

<div class="max-w-5xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-12 text-center" style="font-family: 'Google Sans', sans-serif">
    Jujutsu: Open Source Innovation
  </h2>
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
    <div class="flex items-center justify-center gap-8 mb-8">
      <mdi-open-source-initiative class="text-6xl text-blue-600" />
      <div class="text-center">
        <h3 class="text-2xl font-medium text-gray-900">100% Open Source</h3>
        <p class="text-gray-600">Apache 2.0 License</p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div class="bg-white rounded-xl p-6">
        <div class="flex items-start gap-4">
          <mdi-account-tie class="text-3xl text-green-600 flex-shrink-0" />
          <div>
            <h4 class="font-medium text-gray-900">Martin von Zweigbergk</h4>
            <p class="text-sm text-gray-600 mt-1">Googleが正式にフルタイムで開発を支援</p>
            <p class="text-xs text-gray-500">Full-time development sponsored by Google</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl p-6">
        <div class="flex items-start gap-4">
          <mdi-account-group class="text-3xl text-purple-600 flex-shrink-0" />
          <div>
            <h4 class="font-medium text-gray-900">Community Driven</h4>
            <p class="text-sm text-gray-600 mt-1">世界中の開発者が貢献</p>
            <p class="text-xs text-gray-500">Contributors from around the world</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: center
zoom: 0.9
---

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-12 text-center" style="font-family: 'Google Sans', sans-serif">
    Git vs Jujutsu: Core Differences
  </h2>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-4 text-left font-medium text-gray-900">Feature</th>
          <th class="border border-gray-300 p-4 text-center font-medium text-gray-900">Git <mdi-git class="inline text-orange-600" /></th>
          <th class="border border-gray-300 p-4 text-center font-medium text-gray-900">Jujutsu <img src="/jj-logo.svg" class="inline w-5 h-5" /></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-4 font-medium">Working Copy</td>
          <td class="border border-gray-300 p-4 text-center">
            <span class="text-red-600">Mutable</span>
            <p class="text-sm text-gray-600">変更可能な作業コピー</p>
          </td>
          <td class="border border-gray-300 p-4 text-center">
            <span class="text-green-600">Immutable Snapshots</span>
            <p class="text-sm text-gray-600">不変のスナップショット</p>
          </td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-4 font-medium">Staging Area</td>
          <td class="border border-gray-300 p-4 text-center">
            <span class="text-orange-600">Required</span>
            <p class="text-sm text-gray-600">git add必須</p>
          </td>
          <td class="border border-gray-300 p-4 text-center">
            <span class="text-green-600">Not Needed</span>
            <p class="text-sm text-gray-600">自動追跡</p>
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-4 font-medium">Conflicts</td>
          <td class="border border-gray-300 p-4 text-center">
            <span class="text-red-600">Block Progress</span>
            <p class="text-sm text-gray-600">作業停止</p>
          </td>
          <td class="border border-gray-300 p-4 text-center">
            <span class="text-green-600">First-class Citizens</span>
            <p class="text-sm text-gray-600">コミット可能</p>
          </td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-4 font-medium">History Editing</td>
          <td class="border border-gray-300 p-4 text-center">
            <span class="text-orange-600">Complex & Risky</span>
            <p class="text-sm text-gray-600">rebase地獄</p>
          </td>
          <td class="border border-gray-300 p-4 text-center">
            <span class="text-green-600">Safe & Simple</span>
            <p class="text-sm text-gray-600">自動リベース</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

---

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-12 text-center" style="font-family: 'Google Sans', sans-serif">
    Revolutionary Concepts
  </h2>
  <div class="grid grid-cols-2 gap-8">
    <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
      <h3 class="text-2xl font-medium text-gray-900 mb-6">
        <mdi-cube-outline class="inline text-purple-600" /> Working Copy = Commit
      </h3>
      <div class="space-y-4">
        <p class="text-gray-700">
          Jujutsuでは、作業中の変更も即座にコミット
          <span class="text-sm text-gray-600 block">Changes are instantly committed</span>
        </p>
        <div class="bg-white rounded-lg p-4 font-mono text-sm">
          <div class="text-gray-600"># Git</div>
          <div>git add .</div>
          <div>git commit -m "WIP"</div>
          <div class="text-gray-600 mt-2"># Jujutsu</div>
          <div class="text-green-600">jj new  # That's it!</div>
        </div>
      </div>
    </div>
    <div class="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border border-blue-200">
      <h3 class="text-2xl font-medium text-gray-900 mb-6">
        <mdi-source-branch class="inline text-blue-600" /> Anonymous Branches
      </h3>
      <div class="space-y-4">
        <p class="text-gray-700">
          ブランチ名は不要、変更セットで管理
          <span class="text-sm text-gray-600 block">No branch names needed</span>
        </p>
        <div class="bg-white rounded-lg p-4 font-mono text-sm">
          <div class="text-gray-600"># Git</div>
          <div>git checkout -b feature-xyz</div>
          <div>git push -u origin feature-xyz</div>
          <div class="text-gray-600 mt-2"># Jujutsu</div>
          <div class="text-green-600">jj new  # Work directly</div>
          <div class="text-green-600">jj branch create feature-xyz -r @  # Optional</div>
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
    Automatic Conflict Resolution
  </h2>
  <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
    <div class="grid grid-cols-2 gap-8 mb-8">
      <div class="text-center">
        <mdi-git class="text-6xl text-orange-600 mb-4" />
        <h3 class="text-xl font-medium text-gray-900 mb-2">Git Workflow</h3>
        <div class="bg-red-50 rounded-lg p-4 text-left">
          <p class="font-mono text-sm">
            <span class="text-red-600">error: Your local changes would be overwritten</span><br/>
            <span class="text-gray-600">Please commit or stash before merge.</span>
          </p>
        </div>
      </div>
      <div class="text-center">
        <img src="/jj-logo.svg" class="w-16 h-16 mx-auto mb-4" />
        <h3 class="text-xl font-medium text-gray-900 mb-2">Jujutsu Workflow</h3>
        <div class="bg-green-50 rounded-lg p-4 text-left">
          <p class="font-mono text-sm">
            <span class="text-green-600">✓ Merged with conflicts</span><br/>
            <span class="text-gray-600">Continue working, resolve later</span>
          </p>
        </div>
      </div>
    </div>
    <div class="bg-blue-50 rounded-lg p-6">
      <h4 class="font-medium text-gray-900 mb-3">
        <mdi-lightbulb class="inline text-yellow-500" /> Key Innovation
      </h4>
      <p class="text-gray-700">
        Jujutsuは3-way mergeアルゴリズムを使用し、コンフリクトをコミット内に保存
        <span class="text-sm text-gray-600 block mt-1">
          Stores conflicts as first-class objects using 3-way merge algorithms
        </span>
      </p>
    </div>
  </div>
</div>

---

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
    Workspace Magic for AI Agents
  </h2>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <h3 class="text-2xl font-medium text-gray-900 mb-6">
        <mdi-git class="inline text-orange-600" /> Git Worktree Limitations
      </h3>
      <div class="space-y-4">
        <div class="bg-white rounded-lg border border-gray-200 p-4">
          <mdi-close-circle class="text-red-500 inline" />
          <span class="font-medium">Separate directories required</span>
          <p class="text-sm text-gray-600 mt-1">別ディレクトリが必要</p>
        </div>
        <div class="bg-white rounded-lg border border-gray-200 p-4">
          <mdi-close-circle class="text-red-500 inline" />
          <span class="font-medium">Complex setup & management</span>
          <p class="text-sm text-gray-600 mt-1">複雑な設定と管理</p>
        </div>
        <div class="bg-white rounded-lg border border-gray-200 p-4">
          <mdi-close-circle class="text-red-500 inline" />
          <span class="font-medium">Limited tool support</span>
          <p class="text-sm text-gray-600 mt-1">ツールサポートが限定的</p>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-2xl font-medium text-gray-900 mb-6">
        <img src="/jj-logo.svg" class="inline w-8 h-8" /> Jujutsu Workspaces
      </h3>
      <div class="space-y-4">
        <div class="bg-white rounded-lg border border-green-200 p-4">
          <mdi-check-circle class="text-green-500 inline" />
          <span class="font-medium">Lightweight & instant</span>
          <p class="text-sm text-gray-600 mt-1">軽量で即座に作成</p>
        </div>
        <div class="bg-white rounded-lg border border-green-200 p-4">
          <mdi-check-circle class="text-green-500 inline" />
          <span class="font-medium">Share repository state</span>
          <p class="text-sm text-gray-600 mt-1">リポジトリ状態を共有</p>
        </div>
        <div class="bg-white rounded-lg border border-green-200 p-4">
          <mdi-check-circle class="text-green-500 inline" />
          <span class="font-medium">Perfect for AI agents</span>
          <p class="text-sm text-gray-600 mt-1">AIエージェントに最適</p>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-8 bg-purple-50 rounded-xl p-6 text-center">
    <p class="text-xl font-medium text-gray-900">
      Each AI Agent Gets Its Own Workspace
    </p>
    <p class="text-gray-600 mt-2">
      各AIエージェントが独自のワークスペースで並列作業
    </p>
  </div>
</div>

---

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
    Parallel Development Sample
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
        <li><mdi-circle-small class="inline" /> REST API development</li>
        <li class="text-gray-500">API開発担当</li>
        <li><mdi-circle-small class="inline" /> Database schema</li>
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
        <li><mdi-circle-small class="inline" /> React components</li>
        <li class="text-gray-500">UI実装担当</li>
        <li><mdi-circle-small class="inline" /> User interface</li>
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
        <li><mdi-circle-small class="inline" /> Unit tests</li>
        <li class="text-gray-500">テスト作成</li>
        <li><mdi-circle-small class="inline" /> Documentation</li>
        <li class="text-gray-500">ドキュメント生成</li>
      </ul>
    </div>
  </div>
  

</div>

---

# Create three workspaces

  <div class="mt-8 bg-gray-50 rounded-xl p-6">
    <pre class="text-sm font-mono text-gray-800">
    <code># Create three workspaces
      jj workspace add backend
      jj workspace add frontend  
      jj workspace add test
      # Launch Gemini CLI in each
      cd backend && gemini "Build REST API" &
      cd ../frontend && gemini "Create React UI" &
      cd ../test && gemini "Write tests" &
      </code></pre>
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
        <mdi-server class="w-10 h-10 text-blue-600" />
      </div>
      <p class="text-sm text-gray-600">Backend</p>
    </div>
    <span class="text-2xl text-gray-400">+</span>
    <div class="text-center">
      <div class="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-2">
        <mdi-monitor class="w-10 h-10 text-green-600" />
      </div>
      <p class="text-sm text-gray-600">Frontend</p>
    </div>
    <span class="text-2xl text-gray-400">+</span>
    <div class="text-center">
      <div class="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mb-2">
        <mdi-clipboard-check class="w-10 h-10 text-yellow-600" />
      </div>
      <p class="text-sm text-gray-600">Tests</p>
    </div>
    <span class="text-2xl text-gray-400">=</span>
    <div class="text-center">
      <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-2 shadow-lg">
        <mdi-check-bold class="w-12 h-12 text-white" />
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
          <mdi-close class="w-5 h-5 text-red-600" />
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
          <mdi-alert-circle class="w-5 h-5" />
          <p class="font-medium">Work halted</p>
          <p class="text-sm text-red-600">作業停止</p>
        </div>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <mdi-check class="w-5 h-5 text-green-600" />
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
          <mdi-lightning-bolt class="w-5 h-5" />
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

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
    Real-World Example: Feature Development
  </h2>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <h3 class="text-xl font-medium text-gray-900 mb-4">
        <mdi-git class="inline text-orange-600" /> Git Workflow
      </h3>
      <div class="bg-gray-50 rounded-lg p-4 font-mono text-sm space-y-2">
        <div class="text-gray-600"># Create feature branch</div>
        <div>git checkout -b feature-payment</div>
        <div class="text-gray-600"># Work on backend</div>
        <div>git add backend/*</div>
        <div>git commit -m "Add payment API"</div>
        <div class="text-gray-600"># Switch context</div>
        <div>git stash</div>
        <div>git checkout -b feature-payment-ui</div>
        <div class="text-gray-600"># Merge conflicts!</div>
        <div class="text-red-600">git merge feature-payment</div>
        <div class="text-red-600"># CONFLICT (content): Merge conflict</div>
      </div>
    </div>
    <div>
      <h3 class="text-xl font-medium text-gray-900 mb-4">
        <img src="/jj-logo.svg" class="inline w-6 h-6" /> Jujutsu Workflow
      </h3>
      <div class="bg-gray-50 rounded-lg p-4 font-mono text-sm space-y-2">
        <div class="text-gray-600"># Create workspace for backend</div>
        <div>jj workspace add backend</div>
        <div class="text-gray-600"># Create workspace for frontend</div>
        <div>jj workspace add frontend</div>
        <div class="text-gray-600"># Work simultaneously</div>
        <div>cd backend && jj new</div>
        <div>cd ../frontend && jj new</div>
        <div class="text-gray-600"># Merge anytime</div>
        <div class="text-green-600">jj new @backend @frontend</div>
        <div class="text-green-600"># Conflicts stored, work continues!</div>
      </div>
    </div>
  </div>
</div>

---
zoom: 0.9
---

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
    Undo Anything, Anytime
  </h2>
  <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
    <div class="grid grid-cols-3 gap-6 mb-8">
      <div class="text-center">
        <mdi-history class="text-5xl text-blue-600 mb-4" />
        <h3 class="text-lg font-medium text-gray-900">Operation Log</h3>
        <p class="text-sm text-gray-600">全操作を記録</p>
      </div>
      <div class="text-center">
        <mdi-backup-restore class="text-5xl text-green-600 mb-4" />
        <h3 class="text-lg font-medium text-gray-900">Instant Undo</h3>
        <p class="text-sm text-gray-600">即座に元に戻す</p>
      </div>
      <div class="text-center">
        <mdi-shield-check class="text-5xl text-purple-600 mb-4" />
        <h3 class="text-lg font-medium text-gray-900">Never Lose Work</h3>
        <p class="text-sm text-gray-600">作業を失わない</p>
      </div>
    </div>
    <div class="bg-gray-50 rounded-lg p-6">
      <h4 class="font-medium text-gray-900 mb-3">Example: Undo a Bad Merge</h4>
      <div class="font-mono text-sm space-y-2">
        <div class="text-gray-600"># View operation history</div>
        <div>jj op log</div>
        <div class="text-gray-500">@  rlvkpnrz 2025-07-22 10:30:45 merge</div>
        <div class="text-gray-500">◉  qpvuntsm 2025-07-22 10:30:00 new empty commit</div>
        <div class="text-gray-600 mt-4"># Undo the merge</div>
        <div class="text-green-600">jj undo</div>
        <div class="text-green-600">✓ Restored to previous state</div>
      </div>
    </div>
  </div>
</div>

---

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
    Gemini CLI + Jujutsu: Perfect Match
  </h2>
  <div class="grid grid-cols-2 gap-8">
    <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
      <h3 class="text-2xl font-medium text-gray-900 mb-6">
        <mdi-robot class="inline text-blue-600" /> AI-Friendly Features
      </h3>
      <ul class="space-y-4">
        <li class="flex items-start gap-3">
          <mdi-check class="text-green-500 mt-1" />
          <div>
            <p class="font-medium">No staging confusion</p>
            <p class="text-sm text-gray-600">AIが git add を忘れない</p>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <mdi-check class="text-green-500 mt-1" />
          <div>
            <p class="font-medium">Automatic snapshots</p>
            <p class="text-sm text-gray-600">全変更が自動保存</p>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <mdi-check class="text-green-500 mt-1" />
          <div>
            <p class="font-medium">Conflict-resilient</p>
            <p class="text-sm text-gray-600">コンフリクトでも継続</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-8 border border-green-200">
      <h3 class="text-2xl font-medium text-gray-900 mb-6">
        <mdi-speedometer class="inline text-green-600" /> Productivity Gains
      </h3>
      <div class="space-y-6">
        <div class="bg-white rounded-lg p-4">
          <div class="flex justify-between items-center mb-2">
            <span class="font-medium">Setup Time</span>
            <span class="text-green-600 font-bold">-90%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" style="width: 10%"></div>
          </div>
        </div>
        <div class="bg-white rounded-lg p-4">
          <div class="flex justify-between items-center mb-2">
            <span class="font-medium">Conflict Resolution</span>
            <span class="text-green-600 font-bold">-95%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" style="width: 5%"></div>
          </div>
        </div>
        <div class="bg-white rounded-lg p-4">
          <div class="flex justify-between items-center mb-2">
            <span class="font-medium">Overall Speed</span>
            <span class="text-green-600 font-bold">+1000%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" style="width: 100%"></div>
          </div>
        </div>
      </div>
    </div>
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
          <mdi-application-brackets class="w-8 h-8 text-blue-600" />
        </div>
        <p class="text-lg font-medium text-gray-900">Full-Stack Application</p>
        <p class="text-sm text-gray-600">フルスタックアプリ</p>
      </div>
      <div>
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <mdi-check-circle class="w-8 h-8 text-green-600" />
        </div>
        <p class="text-lg font-medium text-gray-900">100% Test Coverage</p>
        <p class="text-sm text-gray-600">完全なテストカバレッジ</p>
      </div>
      <div>
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
          <mdi-file-document class="w-8 h-8 text-yellow-600" />
        </div>
        <p class="text-lg font-medium text-gray-900">Auto-Generated Docs</p>
        <p class="text-sm text-gray-600">自動生成ドキュメント</p>
      </div>
    </div>
  </div>
</div>

---

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
    Advanced: Multi-Agent Orchestration
  </h2>
  <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
    <div class="grid grid-cols-2 gap-8 mb-8">
      <div>
        <h3 class="text-xl font-medium text-gray-900 mb-4">
          <mdi-network class="inline text-purple-600" /> Agent Network Architecture
        </h3>
        <div class="bg-white rounded-lg p-4 space-y-3">
          <div class="flex items-center gap-3">
            <mdi-circle class="text-blue-500" />
            <span class="font-medium">Coordinator Agent</span>
            <span class="text-sm text-gray-600">タスク分配</span>
          </div>
          <div class="flex items-center gap-3 ml-6">
            <mdi-circle class="text-green-500" />
            <span>Backend Agents (x3)</span>
            <span class="text-sm text-gray-600">API開発</span>
          </div>
          <div class="flex items-center gap-3 ml-6">
            <mdi-circle class="text-yellow-500" />
            <span>Frontend Agents (x3)</span>
            <span class="text-sm text-gray-600">UI開発</span>
          </div>
          <div class="flex items-center gap-3 ml-6">
            <mdi-circle class="text-purple-500" />
            <span>Test Agents (x2)</span>
            <span class="text-sm text-gray-600">品質保証</span>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-xl font-medium text-gray-900 mb-4">
          <mdi-code-tags class="inline text-green-600" /> Sample Orchestration
        </h3>
        <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
          <div class="text-green-400"># Coordinator creates tasks</div>
          <div>jj workspace add coordinator</div>
          <div>jj new -m "Project structure"</div>
          <div class="text-green-400 mt-3"># Spawn specialized agents</div>
          <div>for i in {1..3}; do</div>
          <div class="ml-4">jj workspace add backend-$i</div>
          <div class="ml-4">gemini-cli "Build service $i" &</div>
          <div>done</div>
          <div class="text-green-400 mt-3"># Auto-merge all work</div>
          <div>jj new @backend-* @frontend-*</div>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-lg p-6 text-center">
      <p class="text-xl font-medium text-gray-900">
        <mdi-lightning-bolt class="inline text-yellow-500" /> 
        Real-time collaboration without conflicts
      </p>
      <p class="text-gray-600 mt-2">
        リアルタイムでコンフリクトなしの協調作業
      </p>
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
          <mdi-database class="w-8 h-8 text-blue-600" />
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Microservices</h3>
        <p class="text-sm text-gray-600">マイクロサービス</p>
        <p class="text-gray-700 mt-2">One AI per service</p>
        <p class="text-sm text-gray-600">各サービスに専門AI</p>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <mdi-translate class="w-8 h-8 text-green-600" />
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Polyglot</h3>
        <p class="text-sm text-gray-600">多言語対応</p>
        <p class="text-gray-700 mt-2">Language experts</p>
        <p class="text-sm text-gray-600">言語別の専門家AI</p>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
          <mdi-account-group class="w-8 h-8 text-yellow-600" />
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
            <mdi-book-open-variant class="w-6 h-6 text-blue-600" />
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
            <mdi-school class="w-6 h-6 text-green-600" />
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
      <p class="text-gray-600">CyberAgent, Inc.</p>
      <p class="text-blue-600 font-medium mt-2">
        <mdi-twitter class="inline text-lg" /> @gunta85
      </p>
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