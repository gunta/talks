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
    <line-md-twitter-x class="text-3xl text-black" />
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

# Today's Mission: Unleash AI Potential
<p class="text-sm opacity-60 !mt-0">今日のミッション：AIの可能性を解き放つ</p>

<div class="mt-12 relative">
  <div class="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20"></div>
  <div class="relative bg-white rounded-2xl shadow-2xl p-12 border border-gray-100">
    <div class="flex items-center justify-center gap-8 mb-8">
      <img src="/jj-logo.svg" class="w-24 h-24 animate-pulse" />
      <div class="text-6xl">×</div>
      <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
        <mdi-robot class="text-5xl text-white" />
      </div>
    </div>
    <h2 class="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
      Jujutsu: The Missing Piece
    </h2>
    <p class="text-xl text-gray-700 text-center mb-8">
      A version control system designed for the future
      <span class="block text-lg text-gray-600 mt-2">未来のために設計されたバージョン管理システム</span>
    </p>
    <div class="grid grid-cols-3 gap-6">
      <div class="text-center">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
          <mdi-google class="text-3xl text-purple-600" />
        </div>
        <p class="font-medium text-gray-900">Google-Born</p>
        <p class="text-sm text-gray-600">Googleで生まれた技術</p>
      </div>
      <div class="text-center">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
          <mdi-infinity class="text-3xl text-blue-600" />
        </div>
        <p class="font-medium text-gray-900">Unlimited Scale</p>
        <p class="text-sm text-gray-600">無限のスケール</p>
      </div>
      <div class="text-center">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
          <mdi-lightning-bolt class="text-3xl text-green-600" />
        </div>
        <p class="font-medium text-gray-900">AI-Ready</p>
        <p class="text-sm text-gray-600">AI時代に最適</p>
      </div>
    </div>
  </div>
</div>
<div class="mt-8 text-center">
  <p class="text-lg text-gray-700">
    <mdi-arrow-right class="inline text-purple-500" /> Let's explore how Google solved version control at scale
  </p>
  <p class="text-sm text-gray-600">Googleがどのようにバージョン管理の規模の問題を解決したかを探ってみましょう</p>
</div>

---
layout: center
---

# Google's VCS Evolution
<p class="text-sm opacity-60 !mt-0">The Journey to Scale</p>

<div class="mt-4" style="transform: scale(2.5); transform-origin: top center;">

```mermaid
timeline    
    2006 : 🚀 Piper Created
         : Custom VCS System
         : Bigtable Backend
    
    2012 : ☁️ CitC Launch
         : Cloud Workspaces
         : Spanner Backend
    
    2014 : 🔧 Fig Development
         : Mercurial Fork
         : DVCS Features
    
    2020 : ⚡ Jujutsu Born
         : Martin's Project
         : Open Source
    
    2024 : 📊 Current State
         : 86TB Repository
         : Fig/Mercurial Active
    
    2025 : 🎯 Migration Plan
         : → Jujutsu
         : Future State
```
</div>



<div class="grid grid-cols-3 gap-6 p-6 mt-34">
  <div class="text-center">
    <div class="text-3xl font-bold text-blue-600">86TB</div>
    <p class="text-sm text-gray-600">Repository Size</p>
  </div>
  <div class="text-center">
    <div class="text-3xl font-bold text-green-600">2B</div>
    <p class="text-sm text-gray-600">Lines of Code</p>
  </div>
  <div class="text-center">
    <div class="text-3xl font-bold text-purple-600">35M</div>
    <p class="text-sm text-gray-600">Total Commits</p>
  </div>
</div>

---
layout: center
zoom: 0.9
---

# The Scale Challenge at Google
<p class="text-sm opacity-60 !mt-0">Why Traditional VCS Failed</p>

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10 blur-3xl"></div>
    <div class="relative bg-gradient-to-br from-red-50 via-orange-50/80 to-yellow-50/60 rounded-2xl p-8 border border-red-200/50 shadow-xl">
      <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
          <mdi-alert-octagon class="text-3xl text-white" />
        </div>
        <span>The Breaking Points</span>
      </h3>
      <ul class="space-y-5">
        <li class="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-200">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-xl transition-shadow">
            <mdi-server-off class="text-2xl text-white" />
          </div>
          <div>
            <p class="font-bold text-gray-900 text-lg">
              <mdi-desktop-classic class="inline text-red-600" /> Perforce: Single Machine Limit
            </p>
            <p class="text-sm text-gray-600">
              <mdi-alert class="inline text-red-400" /> 単一マシンの限界に到達
            </p>
          </div>
        </li>
        <li class="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-200">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-xl transition-shadow">
            <mdi-chart-line class="text-2xl text-white" />
          </div>
          <div>
            <p class="font-bold text-gray-900 text-lg">
              <mdi-source-commit class="inline text-orange-600" /> <span class="text-3xl font-extrabold text-orange-600">45,000</span> commits/day
            </p>
            <p class="text-sm text-gray-600">
              <mdi-calendar-clock class="inline text-orange-400" /> 毎日45,000件のコミット
            </p>
          </div>
        </li>
        <li class="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-200">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-xl transition-shadow">
            <mdi-speedometer class="text-2xl text-white" />
          </div>
          <div>
            <p class="font-bold text-gray-900 text-lg">
              <mdi-lightning-bolt class="inline text-amber-600" /> <span class="text-3xl font-extrabold text-amber-600">800,000</span> QPS peak
            </p>
            <p class="text-sm text-gray-600">
              <mdi-gauge class="inline text-amber-400" /> ピーク時80万クエリ/秒
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
  <div class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10 blur-3xl"></div>
    <div class="relative bg-gradient-to-br from-green-50 via-emerald-50/80 to-blue-50/60 rounded-2xl p-8 border border-green-200/50 shadow-xl">
      <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
          <mdi-lightbulb-on class="text-3xl text-white animate-pulse" />
        </div>
        <span>Google's Solutions</span>
      </h3>
      <ul class="space-y-5">
        <li class="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-200">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-xl transition-shadow">
            <mdi-server-network class="text-2xl text-white" />
          </div>
          <div>
            <p class="font-bold text-gray-900 text-lg">
              <mdi-pipe class="inline text-blue-600" /> Piper: Distributed VCS
            </p>
            <p class="text-sm text-gray-600">
              <mdi-database class="inline text-blue-400" /> 分散型VCSの開発
            </p>
            <div class="mt-1 flex gap-2">
              <span class="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                <mdi-database-outline class="inline" /> Bigtable
              </span>
              <span class="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                <mdi-arrow-expand-all class="inline" /> Scalable
              </span>
            </div>
          </div>
        </li>
        <li class="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-200">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-xl transition-shadow">
            <mdi-cloud-outline class="text-2xl text-white" />
          </div>
          <div>
            <p class="font-bold text-gray-900 text-lg">
              <mdi-cloud-check class="inline text-purple-600" /> CitC: Cloud Workspaces
            </p>
            <p class="text-sm text-gray-600">
              <mdi-laptop-account class="inline text-purple-400" /> クラウドベースの作業環境
            </p>
          </div>
        </li>
        <li class="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-200">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-xl transition-shadow">
            <mdi-source-branch class="text-2xl text-white" />
          </div>
          <div>
            <p class="font-bold text-gray-900 text-lg">
              <mdi-source-fork class="inline text-green-600" /> Fig: DVCS Features
            </p>
            <p class="text-sm text-gray-600">
              <mdi-code-braces class="inline text-green-400" /> 分散VCS機能の追加
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

---
layout: center
---

# Martin's Journey at Google
<p class="text-sm opacity-60 !mt-0">From Git to Jujutsu</p>

```mermaid
timeline
    2008-2013 : 🔧 Git contributor
              : 🔄 Co-authored git rebase
              : ✨ Cleaned up rebase code

    2011-2014 : 💻 Full-stack developer
              : 💰 Compensation app
    
    2014-now  : 🚀 SWE on internal VCS
              : 🌳 Fig development
              : 🔀 Mercurial as Piper client
    
    2020      : 🎯 Started Jujutsu
              : 💡 Personal project
              : 📚 Applied Fig learnings
    
    2025-2026 : 🎉 Migration plan
              : 🔄 Replace Google's Mercurial
              : ⚡ With Jujutsu
```

<div class="mt-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-2">
  <p class="text-center text-lg">
    <mdi-format-quote-open class="inline text-purple-500" />
    20+ years of version control expertise, from Git rebase to Google-scale VCS
    <mdi-format-quote-close class="inline text-purple-500" />
  </p>
  <p class="text-center text-sm text-gray-600 mt-2">
    20年以上のバージョン管理の専門知識、GitリベースからGoogleスケールのVCSまで
  </p>
</div>

---
layout: center
zoom: 0.9
---

# 問題提起 The Problem

<p class="text-sm opacity-60 !mt-0">Problem Statement</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  <div class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10 blur-3xl"></div>
    <div class="relative bg-gradient-to-br from-red-50/80 via-red-50/60 to-orange-50/40 p-8 rounded-2xl border border-red-300/50 shadow-xl">
      <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
          <mdi-alert-circle class="text-3xl text-white" />
        </div>
        <span>現在の限界 <span class="text-lg font-normal opacity-70">Current Limitations</span></span>
      </h3>
      <ul class="space-y-4">
        <li class="group">
          <div class="flex items-start gap-3">
            <div>
              <p class="text-lg font-medium text-gray-900">
                <mdi-robot class="inline text-red-600" /> 1つのGemini CLIで順番に作業
              </p>
              <p class="text-sm text-gray-600">
                <mdi-timer-sand class="inline text-red-400" /> Working sequentially with one Gemini CLI
              </p>
            </div>
          </div>
        </li>
        <li class="group">
          <div class="flex items-start gap-3">
            <div>
              <p class="text-lg font-medium text-gray-900">
                <mdi-file-alert class="inline text-orange-600" /> ファイル競合の恐怖
              </p>
              <p class="text-sm text-gray-600">
                <mdi-sword-cross class="inline text-orange-400" /> Fear of file conflicts
              </p>
            </div>
          </div>
        </li>
        <li class="group">
          <div class="flex items-start gap-3">
            <div>
              <p class="text-lg font-medium text-gray-900">
                <mdi-sleep class="inline text-red-700" /> 並列開発は夢のまた夢
              </p>
              <p class="text-sm text-gray-600">
                <mdi-thought-bubble class="inline text-red-400" /> Parallel development remains a dream
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10 blur-3xl"></div>
    <div class="relative bg-gradient-to-br from-green-50/80 via-emerald-50/60 to-blue-50/40 p-8 rounded-2xl border border-green-300/50 shadow-xl">
      <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
          <mdi-star class="text-3xl text-white animate-pulse" />
        </div>
        <span>理想の世界 <span class="text-lg font-normal opacity-70">Ideal World</span></span>
      </h3>
      <ul class="space-y-4">
        <li class="group">
          <div class="flex items-start gap-3">
            <div>
              <p class="text-lg font-medium text-gray-900">
                <mdi-account-multiple class="inline text-green-600" /> 複数のGeminiが同時開発
              </p>
              <p class="text-sm text-gray-600">
                <mdi-sync class="inline text-green-400" /> Multiple Geminis developing simultaneously
              </p>
            </div>
          </div>
        </li>
        <li class="group">
          <div class="flex items-start gap-3">
            <div>
              <p class="text-lg font-medium text-gray-900">
                <mdi-peace class="inline text-blue-600" /> コンフリクトフリー
              </p>
              <p class="text-sm text-gray-600">
                <mdi-check-all class="inline text-blue-400" /> Conflict-free
              </p>
            </div>
          </div>
        </li>
        <li class="group">
          <div class="flex items-start gap-3">
            <div>
              <p class="text-lg font-medium text-gray-900">
                <mdi-speedometer class="inline text-purple-600" /> 10倍速の開発
              </p>
              <p class="text-sm text-gray-600">
                <mdi-flash class="inline text-purple-400" /> 10x development speed
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
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
layout: center
---

<script setup>
import Avatar from '../../components/Avatar.vue'
</script>

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
    Jujutsu: From Google's Learnings
  </h2>
  <p class="text-xl text-gray-600 text-center mb-10">Googleの経験から生まれた次世代VCS</p>
  
  <div class="grid grid-cols-2 gap-8">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex items-center gap-4 mb-4">
        <Avatar
          platform="github"
          username="martinvonz"
          size="lg"
          quality="max"
          fallback-name="Martin von Zweigbergk"
        />
        <div>
          <p class="text-lg font-medium text-gray-900">Martin von Zweigbergk</p>
          <p class="text-sm text-gray-600">Creator of Jujutsu</p>
        </div>
      </div>
      <ul class="space-y-2 text-sm">
        <li class="flex items-start gap-2">
          <mdi-check-circle class="text-green-500 mt-0.5" />
          <span>Git rebase co-author (2008)</span>
        </li>
        <li class="flex items-start gap-2">
          <mdi-check-circle class="text-green-500 mt-0.5" />
          <span>Google Fig VCS architect</span>
        </li>
        <li class="flex items-start gap-2">
          <mdi-check-circle class="text-green-500 mt-0.5" />
          <span>20+ years VCS experience</span>
        </li>
      </ul>
    </div>
    <div class="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200">
      <h4 class="font-medium text-gray-900 mb-3">
        <mdi-lightbulb class="inline text-yellow-600" /> Key Innovations
      </h4>
      <ul class="space-y-2 text-sm">
        <li class="flex items-start gap-2">
          <mdi-language-rust class="text-orange-600 mt-0.5" />
          <span>Built with Rust for performance</span>
        </li>
        <li class="flex items-start gap-2">
          <mdi-git class="text-orange-600 mt-0.5" />
          <span>Git-compatible backend</span>
        </li>
        <li class="flex items-start gap-2">
          <mdi-heart class="text-red-600 mt-0.5" />
          <span>First-class conflict handling</span>
        </li>
        <li class="flex items-start gap-2">
          <mdi-rocket-launch class="text-purple-600 mt-0.5" />
          <span>Google migration planned 2025</span>
        </li>
      </ul>
    </div>
  </div>
</div>

---
layout: center
---

<script setup>
import Avatar from '../../components/Avatar.vue'
</script>

<div class="max-w-4xl mx-auto">
  <!-- <h2 class="text-4xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
    Industry Recognition
  </h2>
  <p class="text-xl text-gray-600 text-center mb-12">業界のリーダーたちからの評価</p> -->
  
  
  <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
    <div class="flex items-start gap-6">
      <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
        <!-- <span class="text-2xl font-medium text-green-600">SC</span> -->
         <Avatar
            platform="github"
            username="schacon"
            size="xl"
            quality="max"
            fallback-name="Scott Chacon"
          />
      </div>
      <div class="flex-1">
        <div class="flex items-center gap-4 mb-2">
          <h3 class="text-2xl font-medium text-gray-900">Scott Chacon</h3>
          <p class="text-gray-500">@chacon</p>
        </div>
        <p class="text-lg text-gray-600 mb-1">GitHub Co-founder | 共同創業者</p>
        <div class="p-6 bg-gray-50 rounded-lg border-l-4 border-green-500">
          <p class="text-lg text-gray-800 italic leading-relaxed">
            "If you like CLIs, Jujutsu is really interesting, and Git backended. If you want to try a new GUI I can highly recommend the @gitbutler beta. 😉"
          </p>
          <p class="text-gray-600 mt-4">
            「CLIが好きなら、Jujutsuはすごく面白い。Gitがバックエンドだしね。新しいGUIを試したいなら、@gitbutlerのベータ版が超おすすめだよ 😉」
          </p>
        </div>
        <p class="text-gray-500 mt-4">Feb 17, 2024</p>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

<script setup>
import Avatar from '../../components/Avatar.vue'
</script>

<div class="max-w-4xl mx-auto">
  <!-- <h2 class="text-4xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
    Industry Recognition
  </h2>
  <p class="text-xl text-gray-600 text-center mb-12">業界のリーダーたちからの評価</p> -->
  
  <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
    <div class="flex items-start gap-6">
      <div class="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
        <!-- <span class="text-2xl font-medium text-purple-600">MH</span> -->
        <Avatar
            platform="github"
            username="mitchellh"
            size="xl"
            quality="max"
            fallback-name="Mitchell Hashimoto"
          />
      </div>
      <div class="flex-1">
        <div class="flex items-center gap-4 mb-2">
          <h3 class="text-2xl font-medium text-gray-900">Mitchell Hashimoto</h3>
          <p class="text-gray-500">@mitchellh</p>
        </div>
        <p class="text-lg text-gray-600 mb-1">HashiCorp Founder | 創業者</p>
        <div class="p-6 bg-gray-50 rounded-lg border-l-4 border-purple-500">
          <p class="text-lg text-gray-800 italic leading-relaxed">
            "Almost two months since I tweeted this and I've used jujutsu exclusively the entire time. I want to write something longer form but the tweet form: jj is fantastic and I can't see myself going back, only one exception is I drop down to `git` for bisect still. That's it."
          </p>
          <p class="text-gray-600 mt-4">
            「このツイートから約2ヶ月、ずっとjjだけを使ってる。もっと長く書きたいけど、一言で言うと「jjは最高、もう元には戻れない」。唯一の例外は `git bisect` の時だけgitを使うこと。それだけ。」
          </p>
        </div>
        <p class="text-gray-500 mt-4">Oct 15, 2024</p>
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
          作業中の変更も即座にコミット
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

# Automatic Conflict Resolution

<div class="max-w-5xl mx-auto">
  <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
    <div class="grid grid-cols-2 gap-8 mb-8">
      <div class="text-center">
        <mdi-git class="text-5xl text-orange-600 mb-4" />
        <h3 class="text-xl font-medium text-gray-900 mb-2">Git Workflow</h3>
        <div class="bg-red-50 rounded-lg p-4 text-left">
          <p class="font-mono text-xs">
            <span class="text-red-600">error: Your local changes would be overwritten</span><br/>
            <span class="text-gray-600">Please commit or stash before merge.</span>
          </p>
        </div>
      </div>
      <div class="text-center">
        <img src="/jj-logo.svg" class="w-16 h-16 mx-auto mb-4" />
        <h3 class="text-xl font-medium text-gray-900 mb-2">Jujutsu Workflow</h3>
        <div class="bg-green-50 rounded-lg p-4 text-left">
          <p class="font-mono text-xs">
            <span class="text-green-600">✓ Merged with conflicts</span><br/>
            <span class="text-gray-600">Continue working, resolve later</span>
          </p>
        </div>
      </div>
    </div>
    <div class="bg-blue-50 rounded-lg p-4">
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
    Why Commit Conflicts? The Game Changer
  </h2>
  <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
    <div class="grid grid-cols-2 gap-8 mb-8">
      <div>
        <h3 class="text-xl font-medium text-gray-900 mb-4">
          <mdi-git class="inline text-orange-600" /> Git: Conflicts Block Everything
        </h3>
        <div class="space-y-4">
          <div class="bg-white rounded-lg p-4 border border-red-200">
            <mdi-close-circle class="text-red-500 inline" />
            <span class="font-medium"> Work stops immediately</span>
            <p class="text-sm text-gray-600 mt-1">コンフリクトで作業が完全停止</p>
          </div>
          <div class="bg-white rounded-lg p-4 border border-red-200">
            <mdi-close-circle class="text-red-500 inline" />
            <span class="font-medium"> Must resolve NOW</span>
            <p class="text-sm text-gray-600 mt-1">今すぐ解決しないと進めない</p>
          </div>
          <div class="bg-white rounded-lg p-4 border border-red-200">
            <mdi-close-circle class="text-red-500 inline" />
            <span class="font-medium"> Context switching nightmare</span>
            <p class="text-sm text-gray-600 mt-1">コンテキストスイッチの悪夢</p>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-xl font-medium text-gray-900 mb-4">
          <img src="/jj-logo.svg" class="inline w-6 h-6" /> Jujutsu: Conflicts Are Data
        </h3>
        <div class="space-y-4">
          <div class="bg-white rounded-lg p-4 border border-green-200">
            <mdi-check-circle class="text-green-500 inline" />
            <span class="font-medium"> Keep working uninterrupted</span>
            <p class="text-sm text-gray-600 mt-1">作業を中断せずに継続</p>
          </div>
          <div class="bg-white rounded-lg p-4 border border-green-200">
            <mdi-check-circle class="text-green-500 inline" />
            <span class="font-medium"> Resolve when convenient</span>
            <p class="text-sm text-gray-600 mt-1">都合の良い時に解決</p>
          </div>
          <div class="bg-white rounded-lg p-4 border border-green-200">
            <mdi-check-circle class="text-green-500 inline" />
            <span class="font-medium"> Perfect for AI agents</span>
            <p class="text-sm text-gray-600 mt-1">AIエージェントに最適</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-yellow-50 rounded-lg p-6 border border-yellow-300">
      <h4 class="font-medium text-gray-900 mb-2">
        <mdi-lightbulb class="inline text-yellow-600" /> Key Insight
      </h4>
      <p class="text-gray-700">
        Conflicts are just another type of content. Why shouldn't we be able to version them?
        <span class="text-sm text-gray-600 block mt-1">
          コンフリクトも単なるコンテンツの一種。なぜバージョン管理できないのか？
        </span>
      </p>
    </div>
  </div>
</div>

---

<div class="max-w-6xl mx-auto">
  <h2 class="text-4xl font-normal text-gray-900 mb-8 text-center" style="font-family: 'Google Sans', sans-serif">
    Multi-Agent Conflict Scenario: Real Example
  </h2>
  <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
    <h3 class="text-xl font-medium text-gray-900 mb-6">
      <mdi-file-code class="inline text-blue-600" /> File: api/server.js
    </h3>
    <div class="grid grid-cols-3 gap-6 mb-8">
      <div>
        <h4 class="font-medium text-gray-900 mb-3">
          <mdi-robot class="inline text-blue-500" /> Agent A: Auth
        </h4>
        <div class="bg-gray-50 rounded-lg p-4 font-mono text-xs">
          <div class="text-blue-600">const express = require('express');</div>
          <div class="text-blue-600">const auth = require('./auth');</div>
          <div>const app = express();</div>
          <div class="text-blue-600">app.use(auth.middleware());</div>
          <div>app.listen(3000);</div>
        </div>
      </div>
      <div>
        <h4 class="font-medium text-gray-900 mb-3">
          <mdi-robot class="inline text-green-500" /> Agent B: Database
        </h4>
        <div class="bg-gray-50 rounded-lg p-4 font-mono text-xs">
          <div class="text-green-600">const express = require('express');</div>
          <div class="text-green-600">const db = require('./database');</div>
          <div>const app = express();</div>
          <div class="text-green-600">db.connect();</div>
          <div>app.listen(3000);</div>
        </div>
      </div>
      <div>
        <h4 class="font-medium text-gray-900 mb-3">
          <mdi-robot class="inline text-purple-500" /> Agent C: Logging
        </h4>
        <div class="bg-gray-50 rounded-lg p-4 font-mono text-xs">
          <div class="text-purple-600">const express = require('express');</div>
          <div class="text-purple-600">const logger = require('./logger');</div>
          <div>const app = express();</div>
          <div class="text-purple-600">app.use(logger.morgan());</div>
          <div>app.listen(3000);</div>
        </div>
      </div>
    </div>
    <div class="border-t pt-6">
      <h4 class="font-medium text-gray-900 mb-3">
        <img src="/jj-logo.svg" class="inline w-5 h-5" /> Jujutsu Magic: Auto-merged with conflicts
      </h4>
      <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
        <div class="text-green-400"># All three agents continue working!</div>
        <div>jj new @agent-a @agent-b @agent-c</div>
        <div class="text-yellow-400 mt-2"># Later, coordinator resolves:</div>
        <div>const express = require('express');</div>
        <div class="text-blue-400">const auth = require('./auth');</div>
        <div class="text-green-400">const db = require('./database');</div>
        <div class="text-purple-400">const logger = require('./logger');</div>
        <div>const app = express();</div>
        <div class="text-blue-400">app.use(auth.middleware());</div>
        <div class="text-purple-400">app.use(logger.morgan());</div>
        <div class="text-green-400">db.connect();</div>
        <div>app.listen(3000);</div>
      </div>
    </div>
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