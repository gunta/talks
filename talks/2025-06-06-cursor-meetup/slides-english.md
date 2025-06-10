---
theme: default
background: /images/cover.png
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Breaking Down Enterprise AI Tool Adoption Barriers in Japan
  CyberAgent's Cursor Implementation Strategy

  Cursor Meetup Tokyo 2025
drawings:
  persist: false
transition: slide-left
title: Breaking Down Enterprise AI Tool Adoption Barriers in Japan
mdc: true
---

# Breaking Down Enterprise AI Tool Adoption Barriers in Japan
## CyberAgent's Cursor Implementation Strategy

<br>

<div class="flex items-center justify-center gap-2 text-2xl">
  <mdi-cursor-default-outline class="text-purple-400" />
  <span>Cursor Meetup Tokyo 2025</span>
</div>

<br>

<div class="flex items-center justify-center gap-3">
  <div class="text-xl">
    <strong>Günther Brunner</strong>
  </div>
  <mdi-briefcase-variant class="text-gray-400" />
  <div class="text-gray-400">
    CyberAgent, Inc.
  </div>
</div>

<!--
【Slide 1】
Good evening everyone! Thank you so much for joining us tonight - over 5,000 attendees!
For the next 15 minutes, let's explore the future of AI coding together.
I'll share how CyberAgent adopted Cursor, the challenges we faced, and what we learned.
Whether you're an engineer, designer, or CEO - let's build the future together!
-->

---

# Why Are We Transitioning to AI Coding Now?

<div class="grid grid-cols-2 gap-8">
<div>

<div class="flex items-center gap-2 mb-4">
  <mdi-earth class="text-blue-400 text-2xl" />
  <h2 class="text-2xl font-bold m-0">Global Trends</h2>
</div>

<div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
  <h4 class="flex items-center gap-2 text-lg">
    <mdi-trending-up class="text-green-500" />
    AI Coding Keyword Search Trends
  </h4>
  <div class="space-y-2 mt-4">
    <div class="flex items-center justify-between">
      <span>November 2024</span>
      <div class="flex items-center gap-2">
        <div class="w-32 bg-gray-200 rounded-full h-2">
          <div class="bg-blue-400 h-2 rounded-full" style="width: 45%"></div>
        </div>
        <span class="text-sm">45</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <span>January 2025</span>
      <div class="flex items-center gap-2">
        <div class="w-32 bg-gray-200 rounded-full h-2">
          <div class="bg-blue-500 h-2 rounded-full" style="width: 68%"></div>
        </div>
        <span class="text-sm">68</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <span>March 2025</span>
      <div class="flex items-center gap-2">
        <div class="w-32 bg-gray-200 rounded-full h-2">
          <div class="bg-purple-500 h-2 rounded-full" style="width: 92%"></div>
        </div>
        <span class="text-sm">92</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <span>April 2025</span>
      <div class="flex items-center gap-2">
        <div class="w-32 bg-gray-200 rounded-full h-2">
          <div class="bg-purple-600 h-2 rounded-full" style="width: 100%"></div>
        </div>
        <span class="text-sm font-bold">100</span>
      </div>
    </div>
  </div>
</div>

</div>
<div>

<div class="flex items-center gap-2 mb-4">
  <emojione-flag-for-japan class="text-2xl" />
  <h2 class="text-2xl font-bold m-0">Japan's Current State</h2>
</div>

<div class="space-y-4">
  <div class="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg flex items-center gap-3">
    <mdi-fire class="text-red-500 text-3xl" />
    <div>
      <div class="font-bold">50% of Japan blog entry trends are AI-related</div>
      <div class="text-sm text-gray-600">(April 2025)</div>
    </div>
  </div>
  
  <div class="bg-yellow-50 p-4 rounded-lg flex items-center gap-3">
    <mdi-account-group class="text-yellow-600 text-3xl" />
    <div class="font-semibold">Rapid shift in engineering communities</div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg flex items-center gap-3">
    <mdi-rocket-launch class="text-green-600 text-3xl" />
    <div class="font-semibold">Major transition from traditional development</div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
  <mdi-format-quote-open class="text-3xl text-purple-400" />
  <span class="text-xl font-bold">Not using AI for development is like doing accounting without a calculator</span>
  <mdi-format-quote-close class="text-3xl text-purple-400" />
</div>

<!--
【Slide 2】
First, why AI coding now?
Look at Google Trends. Search volume has more than doubled in just six months.
The surge since March isn't coincidental.
In Japan, half of Zenn's trending topics are AI-related.
This is a tide we can't ignore anymore.
-->

---

# Latest AI Code Editor Adoption Cases

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <th class="p-3 text-left rounded-tl-lg">
          <div class="flex items-center gap-2">
            <mdi-office-building class="text-xl" />
            Company
          </div>
        </th>
        <th class="p-3 text-left">
          <div class="flex items-center gap-2">
            <mdi-tools class="text-xl" />
            Tool Adopted
          </div>
        </th>
        <th class="p-3 text-left">
          <div class="flex items-center gap-2">
            <mdi-chart-line class="text-xl" />
            Results
          </div>
        </th>
        <th class="p-3 text-left rounded-tr-lg">
          <div class="flex items-center gap-2">
            <mdi-cash-multiple class="text-xl" />
            ROI
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">Coconala Inc.</td>
        <td class="p-3">
          <span class="bg-purple-100 text-purple-700 px-2 py-1 rounded">Cursor Business</span>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-speedometer class="text-green-500" />
            UI implementation <span class="font-bold text-green-600">10x faster</span>
          </div>
        </td>
        <td class="p-3">$40/month delivering millions in labor savings annually</td>
      </tr>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">Ubie, Inc.</td>
        <td class="p-3">
          <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">Multiple AI Dev Tools</span>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-emoticon-happy class="text-yellow-500" />
            Engineer satisfaction <span class="font-bold text-yellow-600">85% increase</span>
          </div>
        </td>
        <td class="p-3">Reduced hiring costs through lower turnover</td>
      </tr>
      <tr class="hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">Major Tech Company</td>
        <td class="p-3">
          <span class="bg-green-100 text-green-700 px-2 py-1 rounded">Cursor + MCP</span>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-clock-fast class="text-blue-500" />
            Development cycle <span class="font-bold text-blue-600">60% shorter</span>
          </div>
        </td>
        <td class="p-3">3x feature release frequency</td>
      </tr>
    </tbody>
  </table>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-currency-usd class="text-green-600 text-3xl" />
    <span class="font-bold">$40/month investment yields 10x productivity for $100K+ engineers</span>
    <mdi-rocket class="text-blue-600 text-3xl" />
  </div>
</div>

<!--
【Slide 3】
Let's look at real adoption cases.
Coconala generates UI directly from Figma using Cursor - 10x faster implementation.
10x! What used to take a week now takes half a day.
Ubie saw 85% improvement in engineer satisfaction.
This is crucial - it means your best engineers don't leave.
Considering hiring costs, the ROI is astronomical.
-->

---
layout: intro
---

# About Me

<div class="text-center mb-8">
  <h2 class="text-3xl font-bold">
    Günther Brunner
  </h2>
  <div class="flex items-center justify-center gap-2 mt-2">
    <img src="/images/CALogo.svg" alt="CA" width="20px" height="20px" style="display: inline-block; vertical-align: middle;" />
    <span>CyberAgent <span class="text-gray-500">since 2012</span></span>
  </div>
</div>

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 mb-4">
  <mdi-office-building class="text-orange-500" />
  Current Position
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
    <mdi-cog class="text-orange-600" />
    <span>CTO Office</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
    <mdi-rocket-launch class="text-teal-600" />
    <span class="font-bold">Developer Productivity Division</span>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 mb-4">
  <mdi-account-network class="text-blue-500" />
  Connect with me
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-twitter class="text-blue-600" />
    <span>@gunta85</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
    <mdi-github class="text-gray-600" />
    <span>@gunta</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-book-open class="text-blue-600" />
    <span>zenn.dev/gunta</span>
  </div>
</div>

</div>
</div>

<!--
【Slide 5】
Let me introduce myself briefly.
I'm Günther Brunner, been with CyberAgent since 2012.
Currently working in the CTO Office's Developer Productivity Division.
Passionate about AI, UX, design, and performance.
Recently started exploring AI art personally too.
-->

---

# My 12-Year Journey at CyberAgent

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-xl mb-4">
  <mdi-newspaper class="text-purple-600" />
  Media Division
</h2>
<ul class="space-y-2 list-disc list-inside">
  <li>Cultivating service mindset</li>
  <li>Enhancing UX design skills</li>
  <li>User-centered thinking</li>
</ul>

<h2 class="flex items-center gap-2 text-xl mb-4 mt-6">
  <mdi-gamepad-variant class="text-orange-600" />
  Gaming Division
</h2>
<ul class="space-y-2 list-disc list-inside">
  <li>Pushing frontend tech to limits</li>
  <li>Performance optimization</li>
  <li>Exploring interactive experiences</li>
</ul>

</div>
<div>

<h2 class="flex items-center gap-2 text-xl mb-4">
  <mdi-chart-line class="text-green-600" />
  Cross-functional Division
</h2>
<ul class="space-y-2 list-disc list-inside">
  <li>SLO (Service Level Objectives)</li>
  <li class="font-bold text-green-700">Developer Productivity ⬅️ 🚀 (Current focus)</li>
  <li>Cross-team improvement initiatives</li>
</ul>

<h2 class="flex items-center gap-2 text-xl mb-4 mt-6">
  <mdi-robot class="text-indigo-600" />
  AI Division
</h2>
<ul class="space-y-2 list-disc list-inside">
  <li>Backend technology acquisition</li>
  <li>Mastering Figma</li>
  <li>Practical GenAI applications</li>
  <li>Staying on cutting edge</li>
</ul>

</div>
</div>

<!--
【Slide 6】
Let me share my 12-year journey at CyberAgent.
Media division taught me UX design, Gaming pushed my frontend skills to the extreme.
Cross-functional work focused on developer productivity, AI division keeps me on the cutting edge.
Now I leverage all this experience as a full-stack AI engineer and designer.
-->

---

# My Mission

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-target class="text-indigo-500" />
  Personal Goals
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
    <mdi-rocket class="text-indigo-600" />
    <span>Bring Japan's dev culture to the forefront</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-account-group class="text-purple-600" />
    <span>Enhance developer experience</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-lightbulb class="text-blue-600" />
    <span>Promote new technology adoption</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-earth class="text-green-600" />
    <span>Implement global standards</span>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-wrench class="text-orange-500" />
  Concrete Actions
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
    <mdi-robot class="text-orange-600" />
    <span>AI tool implementation</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
    <mdi-school class="text-red-600" />
    <span>Developer education & advocacy</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
    <mdi-account-group class="text-yellow-600" />
    <span>Community building</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
    <mdi-trending-up class="text-pink-600" />
    <span>Demonstrating productivity gains</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-heart class="text-purple-600 text-3xl" />
    <span class="font-bold">I'm here to make the world better through technology</span>
  </div>
</div>

<!--
【Slide 7】
Let me share my mission.
My personal goal: bring Japan's development culture to the global forefront.
Specifically: promoting AI tools, developer education, community activities.
All to improve developer productivity and happiness.
Making the world better through technology - that's my belief.
-->

---

# Tool Migrations I've Championed

<div class="text-center mb-6">
  <h2 class="flex items-center justify-center gap-2 text-2xl">
    <mdi-swap-horizontal class="text-indigo-500" />
    History of Transformation
  </h2>
</div>

<div class="space-y-4">
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <span class="text-lg">SVN</span>
    <mdi-arrow-right class="text-green-600 text-xl" />
    <span class="text-lg font-semibold">GitHub</span>
    <mdi-check-circle class="text-green-600 ml-auto text-xl" />
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <span class="text-lg">HipChat</span>
    <mdi-arrow-right class="text-green-600 text-xl" />
    <span class="text-lg font-semibold">Slack</span>
    <mdi-check-circle class="text-green-600 ml-auto text-xl" />
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <span class="text-lg">Confluence</span>
    <mdi-arrow-right class="text-green-600 text-xl" />
    <span class="text-lg font-semibold">Notion</span>
    <mdi-check-circle class="text-green-600 ml-auto text-xl" />
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg">
    <span class="text-lg">JIRA</span>
    <mdi-arrow-right class="text-yellow-600 text-xl" />
    <span class="text-lg font-semibold">Linear</span>
    <mdi-sync class="text-yellow-600 ml-auto text-xl animate-spin" />
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border-2 border-purple-300">
    <span class="text-lg font-bold">IDE</span>
    <mdi-arrow-right class="text-purple-600 text-xl" />
    <span class="text-lg font-bold text-purple-600">Cursor</span>
    <mdi-fire class="text-purple-600 ml-auto text-xl" />
    <span class="text-sm font-bold text-purple-600">(Now!)</span>
  </div>
</div>

<!--
【Slide 6】
Look at my track record. I championed Slack and GitHub adoption.
Successfully migrated to Notion. Now pushing Linear.
But Cursor is my biggest challenge yet.
Because this isn't just a tool change. It's a work revolution.
-->

---

# Why I've Been Following Cursor for 2 Years

<div class="timeline">

<div class="flex items-start gap-4 mb-6">
  <div class="flex-shrink-0">
    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
      <mdi-calendar class="text-white text-xl" />
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">Late 2022</h3>
    <ul class="space-y-2 mt-2">
      <li class="flex items-center gap-2">
        <mdi-chevron-right class="text-blue-400" />
        OpenAI invested in an IDE
      </li>
    </ul>
  </div>
</div>

<div class="flex items-start gap-4 mb-6">
  <div class="flex-shrink-0">
    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
      <mdi-lightbulb class="text-white text-xl" />
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">Early 2023</h3>
    <ul class="space-y-2 mt-2">
      <li class="flex items-center gap-2 font-bold text-purple-600">
        <mdi-star class="text-purple-500" />
        Discovered Cursor's early version
      </li>
      <li class="flex items-center gap-2">
        <mdi-format-quote-open class="text-purple-400" />
        <span class="italic">"This is revolutionary"</span> - my gut feeling
        <mdi-format-quote-close class="text-purple-400" />
      </li>
    </ul>
  </div>
</div>

<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
      <mdi-rocket class="text-white text-xl" />
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">Mid 2023</h3>
    <ul class="space-y-2 mt-2">
      <li class="flex items-center gap-2">
        <mdi-chevron-right class="text-green-400" />
        Started using it daily
      </li>
      <li class="flex items-center gap-2">
        <mdi-chevron-right class="text-green-400" />
        Productivity clearly improved
      </li>
    </ul>
  </div>
</div>

</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-eye-outline class="text-3xl text-purple-600" />
    <span class="text-xl font-bold">Great tools reveal the future the moment you use them</span>
    <mdi-sparkles class="text-3xl text-blue-600" />
  </div>
</div>

<!--
【Slide 6】
Why have I been using Cursor for 2 years?
Late 2022, when OpenAI released Codex API, I knew.
The future of coding was changing.
And the moment I met Cursor, I thought "This is it!"
The instant I used it, I knew this would become the future standard.
-->

---
layout: center
---

# Part 1: CyberAgent - A Unique Enterprise

<div class="text-center">

<div class="flex items-center justify-center gap-3 text-5xl mb-6">
  <mdi-office-building class="text-blue-500" />
  <mdi-account-group class="text-purple-500" />
</div>

<h2 class="text-3xl mb-2">10,000+ Employees</h2>
<h3 class="text-2xl text-gray-600 mb-8">~3,000 Engineers</h3>

<div class="p-6 bg-gradient-to-r from-green-100 to-green-100 rounded-xl inline-block">
  <div class="flex items-center gap-3 text-2xl">
    <mdi-hand-peace class="text-green-600" />
    <span class="font-bold">"Freedom and Self-Responsibility"</span>
    <span>- That's our culture</span>
    <mdi-fire class="text-green-600" />
  </div>
</div>

</div>

<!--
【Slide 7】
Let's get to the main topic.
First, you need to understand what kind of company CyberAgent is.
10,000+ employees, 3,000 engineers.
But we're completely different from typical large corporations.
"Freedom and Self-Responsibility" - that's the foundation of everything.
-->

---

# CyberAgent by the Numbers

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-chart-pie class="text-blue-500" />
  Organization Scale
</h2>

<div class="space-y-4">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-account-multiple class="text-blue-600" />
        <span class="font-semibold">Employees</span>
      </div>
      <span class="text-xl font-bold text-blue-700">10,000+</span>
    </div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-code-braces class="text-purple-600" />
        <span class="font-semibold">Engineers</span>
      </div>
      <span class="text-xl font-bold text-purple-700">~3,000</span>
    </div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-domain class="text-green-600" />
        <span class="font-semibold">Subsidiaries</span>
      </div>
      <span class="text-xl font-bold text-green-700">100+</span>
    </div>
  </div>
  
  <div class="bg-pink-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-slack class="text-pink-600" />
        <span class="font-semibold">Slack Workspaces</span>
      </div>
      <span class="text-xl font-bold text-pink-700">100+</span>
    </div>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-palette-swatch class="text-orange-500" />
  Technical Diversity
</h2>

<div class="space-y-4">
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-language-python class="text-orange-600" />
        <span class="font-semibold">Languages Used</span>
      </div>
      <span class="text-xl font-bold text-orange-700">20+</span>
    </div>
  </div>
  
  <div class="bg-red-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-view-dashboard class="text-red-600" />
        <span class="font-semibold">Frameworks</span>
      </div>
      <span class="text-xl font-bold text-red-700">50+</span>
    </div>
  </div>
  
  <div class="bg-indigo-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-cloud class="text-indigo-600" />
        <span class="font-semibold">Cloud Providers</span>
      </div>
      <span class="text-xl font-bold text-indigo-700">AWS, GCP, All</span>
    </div>
  </div>
  
  <div class="bg-yellow-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-cog class="text-yellow-600" />
        <span class="font-semibold">Dev Practices</span>
      </div>
      <span class="text-xl font-bold text-yellow-700">Team-specific</span>
    </div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-infinity class="text-3xl text-purple-600" />
    <span class="text-xl font-bold">Unification is impossible. That's what makes it interesting.</span>
    <mdi-creation class="text-3xl text-pink-600" />
  </div>
</div>

<!--
【Slide 8】
The numbers reveal the chaos of this company.
100+ subsidiaries, 100+ Slack workspaces.
Different technologies and languages everywhere.
Normal companies would say "let's standardize."
Not us. This chaos is our source of innovation.
-->

---

# CyberAgent's Organizational Culture

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-office-building class="text-blue-500" />
  Hundreds of Subsidiaries
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-crown class="text-blue-600 text-xl" />
    <span>Independent management authority</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-slack class="text-blue-600 text-xl" />
    <span>Separate Slack workspaces</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-puzzle class="text-blue-600 text-xl" />
    <span>Autonomous tech stack decisions</span>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-rocket-launch class="text-purple-500" />
  Bottom-up Culture
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-close-circle class="text-purple-600 text-xl" />
    <span>No top-down directives</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-account-heart class="text-purple-600 text-xl" />
    <span>Teams choose independently</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-300">
    <mdi-fire class="text-orange-600 text-xl" />
    <span class="font-bold text-orange-700">"Learn freely, try freely, fail freely"</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-2xl">
    <mdi-city class="text-indigo-600 text-3xl" />
    <span class="font-bold">A large corporation with hundreds of startups inside</span>
    <mdi-rocket class="text-purple-600 text-3xl" />
  </div>
</div>

<!--
【Slide 9】
This is our culture.
Each subsidiary is completely independent, CEOs can even decide tech stacks.
"Learn freely, try freely, fail freely" - that's our motto.
We're a large corporation with hundreds of startups inside.
-->

---

# The Beauty and Challenges of This Culture

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-star class="text-yellow-500" />
  The Beauty
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
    <mdi-lightbulb-on class="text-yellow-600 text-xl" />
    <span>Innovation thrives</span>
  </div>
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
    <mdi-target class="text-green-600 text-xl" />
    <span>Teams choose optimal tech</span>
  </div>
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
    <mdi-shield-off class="text-blue-600 text-xl" />
    <span>Fearless failure culture</span>
  </div>
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
    <mdi-flash class="text-purple-600 text-xl" />
    <span>Rapid decision making</span>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-puzzle-outline class="text-red-500" />
  The Challenges
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg">
    <mdi-link-variant-off class="text-red-600 text-xl" />
    <span>Company-wide tool adoption is hard</span>
  </div>
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
    <mdi-share-variant class="text-orange-600 text-xl" />
    <span>Information sharing silos</span>
  </div>
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg">
    <mdi-arrow-expand-all class="text-gray-600 text-xl" />
    <span>Hard to spread best practices</span>
  </div>
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border-2 border-indigo-300">
    <mdi-scatter-plot class="text-indigo-600 text-xl" />
    <span class="font-bold text-indigo-700">"Everyone's different"</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-scale-balance class="text-3xl text-purple-600" />
    <span class="text-xl font-bold">Freedom is wonderful. But sometimes unity is needed.</span>
  </div>
</div>

<!--
【Slide 10】
This culture is amazing, but it has challenges.
Innovation thrives, but company-wide adoption is incredibly hard.
We can't just say "everyone use this starting tomorrow."
But that's what makes it an interesting challenge.
-->

---

# Traditional Tool Adoption Approach (Failed)

<div class="flex justify-center items-center h-full">
<div class="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl w-full max-w-4xl">

```mermaid
graph LR
    A["Executive Decision"] --> B["Company-wide Announcement"]
    B --> C["Department Rollout"]
    C --> D["Ground-level Resistance"]
    D --> E["Becomes Hollow"]

    style A fill:#fff1f2,font-size:12px
    style B fill:#ffedd5,font-size:12px
    style C fill:#fef3c7,font-size:12px
    style D fill:#fee2e2,font-size:12px
    style E fill:#ffedd5,font-size:12px
```
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-alert-circle class="text-red-600 text-3xl" />
    <span class="font-bold">"Top-down doesn't work here"</span>
  </div>
</div>

<!--
【Slide 11】
In normal companies: executives decide, company-wide announcement, done.
But that completely fails here.
Ground teams ask "why?" and resist, nobody uses it.
We've failed many times this way.
So we needed a different approach.
-->

---

# Viral Strategy: The Only Way to Adopt Tools

<div class="text-center mb-8">
  <h2 class="flex items-center justify-center gap-2 text-3xl">
    <mdi-virus class="text-purple-500" />
    Information must "infect" to spread
  </h2>
</div>

<div class="grid grid-cols-3 gap-8">
  <div class="p-6 bg-blue-50 rounded-lg text-center shadow-lg">
    <h3 class="font-bold text-lg mb-2 flex items-center justify-center gap-2"><mdi-account-group class="text-blue-600 text-2xl" />Step 1</h3>
    <p class="font-semibold text-blue-800">Small Team Success</p>
    <ul class="text-sm text-gray-600 list-disc list-inside mt-2 text-left">
      <li>Build track record</li>
      <li>Visualize impact</li>
    </ul>
  </div>
  <div class="p-6 bg-green-50 rounded-lg text-center shadow-lg">
    <h3 class="font-bold text-lg mb-2 flex items-center justify-center gap-2"><mdi-bullhorn class="text-green-600 text-2xl" />Step 2</h3>
    <p class="font-semibold text-green-800">Evangelism Activities</p>
    <ul class="text-sm text-gray-600 list-disc list-inside mt-2 text-left">
      <li>Internal workshops</li>
      <li>Slack advocacy</li>
      <li>Success story sharing</li>
    </ul>
  </div>
  <div class="p-6 bg-orange-50 rounded-lg text-center shadow-lg">
    <h3 class="font-bold text-lg mb-2 flex items-center justify-center gap-2"><mdi-youtube class="text-orange-600 text-2xl" />Step 3</h3>
    <p class="font-semibold text-orange-800">Public Events to Amplify</p>
    <ul class="text-sm text-gray-600 list-disc list-inside mt-2 text-left">
      <li>YouTube streaming</li>
      <li>External attention</li>
      <li>Internal interest spark</li>
    </ul>
  </div>
</div>

<!--
【Slide 12】
So I chose the viral strategy.
Like a virus, "infect" with information.
Start small, create success stories.
Share on Slack, hold workshops.
But that wasn't enough. We needed a final move.
-->

---

# Why Internal Efforts Have Limits

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-office-building-cog class="text-red-500" />
  Internal Walls
</h2>
<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
    <mdi-wall class="text-red-600 text-xl" />
    <span>Information silos between subsidiaries</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
    <mdi-file-eye-outline class="text-red-600 text-xl" />
    <span>Treated as "another company's case"</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
    <mdi-lightbulb-off-outline class="text-red-600 text-xl" />
    <span>NIH syndrome (Not Invented Here)</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
    <mdi-account-group-outline class="text-red-600 text-xl" />
    <span>Seen as internal politics</span>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-earth class="text-blue-500" />
  External Power
</h2>
<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-scale-balance class="text-blue-600 text-xl" />
    <span>Objective evaluation</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-trending-up class="text-blue-600 text-xl" />
    <span>Recognition as industry trend</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-weight-lifter class="text-blue-600 text-xl" />
    <span>Pressure and motivation</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-2 border-blue-300">
    <mdi-shield-star class="text-blue-600 text-xl" />
    <span class="font-bold text-blue-700">"External pressure is the strongest driver"</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <emojione-flag-for-japan class="text-3xl" />
    <span class="font-bold">"Japanese are susceptible to external pressure. Let's use that."</span>
  </div>
</div>

<!--
【Slide 13】
Why internal efforts aren't enough?
Our company has so many subsidiaries, even sister company cases are treated as "external."
But when it becomes news at external events, suddenly everyone's interested.
It's a Japanese trait - susceptible to external pressure.
So I decided to leverage that.
-->

---

# My Technology Selection Criteria

<div class="text-center text-3xl mb-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
  <h2 class="flex items-center justify-center gap-3">
    <mdi-calculator-variant-outline class="text-teal-600" />
    TTM (Time to Market) × Trend = Winning Formula
  </h2>
</div>

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-blue-50 rounded-lg">
  <h3 class="flex items-center gap-2 text-xl mb-4">
    <mdi-clock-fast class="text-blue-500" />
    TTM Focus
  </h3>
  <ul class="space-y-2 list-disc list-inside">
    <li>Development speed improvement</li>
    <li>Shorter time to market</li>
    <li class="font-bold text-blue-700">"Speed is justice"</li>
  </ul>
</div>
<div class="p-6 bg-purple-50 rounded-lg">
  <h3 class="flex items-center gap-2 text-xl mb-4">
    <mdi-chart-line class="text-purple-500" />
    Trend Analysis
  </h3>
  <ul class="space-y-2 list-disc list-inside">
    <li>Anthropic cut Windsurf access</li>
    <li>Cursor dominates surveys</li>
    <li>Speed of new feature/model support</li>
  </ul>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-green-100 to-lime-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-2xl">
    <mdi-trophy-award class="text-green-600 text-3xl" />
    <span class="font-bold">"In the IDE category, I'm betting on Cursor"</span>
  </div>
</div>

<!--
【Slide 14】
My tech selection criteria is simple.
TTM - how fast can we get to market?
And trends. It's the multiplication of these.
Recently, Anthropic stopped API access to Windsurf.
This is a crucial signal.
What the industry leaders choose - that's the answer.
-->

---

# Latest Industry Trends (June 2025)

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
        <th class="p-3 text-left rounded-tl-lg">Event</th>
        <th class="p-3 text-left">Meaning</th>
        <th class="p-3 text-left rounded-tr-lg">Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b bg-red-50 hover:bg-red-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-vector-link class="text-red-600" /> Anthropic cuts Windsurf API</td>
        <td class="p-3">Stopped supporting competitor</td>
        <td class="p-3 font-bold text-red-700">Cursor advantage solidified</td>
      </tr>
      <tr class="border-b bg-green-50 hover:bg-green-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-cash-plus class="text-green-600" /> OpenAI's additional Cursor investment</td>
        <td class="p-3">Strategic partnership strengthening</td>
        <td class="p-3 font-bold text-green-700">Long-term stability</td>
      </tr>
      <tr class="border-b bg-yellow-50 hover:bg-yellow-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-google class="text-yellow-600" /> Google cancels IDE project</td>
        <td class="p-3">Withdrawal from proprietary development</td>
        <td class="p-3 font-bold text-yellow-700">Consolidation to existing players</td>
      </tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-microsoft-visual-studio-code class="text-blue-600" /> Microsoft's VSCode AI integration delays</td>
        <td class="p-3">Internal coordination struggles</td>
        <td class="p-3 font-bold text-blue-700">Cursor's first-mover advantage</td>
      </tr>
    </tbody>
  </table>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-chess-king class="text-purple-600 text-3xl" />
    <span class="font-bold">"The winner is already decided. Now it's about joining or being left behind."</span>
  </div>
</div>

<!--
【Slide 15】
Look at the latest developments.
Anthropic cut Windsurf. OpenAI invested more in Cursor.
Both Google and Microsoft are struggling with their own AI IDE development.
The game is already decided.
Now it's about riding the wave or being left behind.
-->

---

# Two Years of Battle

<div class="mt-8 mb-8">
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-cursor-default-outline class="text-purple-600 text-xl" />
    <span>Started using Cursor (almost alone)</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-gray-100 rounded-lg mt-2">
    <mdi-slack class="text-gray-600 text-xl" />
    <span>Created internal Slack channel</span>
    <mdi-arrow-right />
    <mdi-emoticon-sad class="text-gray-600 text-xl" />
    <span class="font-bold text-gray-700">Few responses...</span>
  </div>
</div>

<div class="mb-8">
  <h3 class="flex items-center gap-3 text-2xl mb-6">
    <mdi-calendar-range class="text-gray-500" />
    First Half of 2024
  </h3>
  <div class="space-y-3 ml-8">
    <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
      <mdi-microphone class="text-green-600 text-xl" />
      <span>Spoke at internal events</span>
    </div>
    <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
      <mdi-bullhorn class="text-orange-600 text-xl" />
      <span>Continued evangelism</span>
    </div>
    <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
      <mdi-emoticon-cry class="text-red-600 text-xl" />
      <span class="font-bold text-red-700">Still barely used...</span>
      <span class="font-bold text-yellow-700">"Attack from outside" strategy pivot</span>
    </div>
  </div>
</div>

<!--
【Slide 16】
Honestly, the first two years were lonely.
Created a Slack channel - nobody came.
Spoke at internal events - "oh, cool" and that's it.
But I didn't give up. Because I knew this was the future.
So I decided to change strategy.
-->

---

# What I Learned from the Battle

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-book-open-page-variant class="text-blue-500" />
  Lessons from Failure
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
    <mdi-close-circle-outline class="text-red-600 text-xl" />
    <span>Technical superiority alone doesn't move people</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
    <mdi-account-tie-voice-off class="text-orange-600 text-xl" />
    <span>Internal political capital has limits</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
    <mdi-clock-alert class="text-yellow-600 text-xl" />
    <span>Timing is crucial</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-account-multiple-plus class="text-green-600 text-xl" />
    <span>Building allies is essential</span>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-chess-pawn class="text-green-500" />
  Laying Groundwork for Success
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-star-box-multiple class="text-green-600 text-xl" />
    <span>Accumulating small wins</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-web class="text-blue-600 text-xl" />
    <span>Building external networks</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-chart-line class="text-purple-600 text-xl" />
    <span>Understanding industry trends</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg border-2 border-red-300">
    <mdi-heart class="text-red-600 text-xl" />
    <span class="font-bold text-red-700">"Never give up"</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-account-alert class="text-3xl text-purple-600" />
    <span class="font-bold">Innovators are always lonely at first. But that's okay.</span>
  </div>
</div>

<!--
【Slide 17】
I failed a lot in these two years.
But everything was a learning experience.
Great technology alone doesn't move people.
You need timing and allies.
Most importantly, I learned to never give up.
-->

---
layout: center
---

# Turning Point: AI Code Agents Festival!

<div class="text-center">

<h2 class="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
  <mdi-party-popper class="text-yellow-400" />
  February 2025
  <mdi-party-popper class="text-yellow-400" />
</h2>

<div class="p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl inline-block shadow-lg">
  <h3 class="text-2xl font-bold text-blue-800">🎯 Results</h3>
  <ul class="text-xl mt-4 space-y-2">
    <li class="flex items-center gap-2"><mdi-youtube class="text-red-500" /> 20,000+ viewers</li>
    <li class="flex items-center gap-2"><mdi-trophy class="text-yellow-500" /> Highest views in CA Developers YouTube history</li>
    <li class="flex items-center gap-2"><mdi-account-star class="text-green-500" /> Kinopi-san joined us!</li>
  </ul>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl mt-8">
  <div class="flex items-center justify-center gap-3 text-2xl">
    <mdi-rocket-launch class="text-green-600 text-3xl" />
    <span class="font-bold text-green-800">"Viral strategy: massive success!"</span>
  </div>
</div>

</div>

<!--
【Slide 19】
Then in February 2025, the turning point came.
"AI Code Agents Festival" was held.
We involved MG-DX's CEO Domae-san, made it a large-scale event.
And Kinopi-san, who's also speaking today, joined us!
The result... massive success! Over 20,000 viewers.
-->

---

# Behind the Event's Success

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-green-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-target-arrow class="text-green-500" />
    Strategic Points
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li>YouTube live streaming</li>
    <li>Famous guest speakers</li>
    <li>Practical demo-focused</li>
    <li>Festival atmosphere with great design & landing page</li>
  </ul>
</div>
<div class="p-6 bg-purple-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-rocket class="text-purple-500" />
    Unexpected Effects
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li>Internal viewership surge</li>
    <li>Executive management watched</li>
    <li>Inquiries from other companies</li>
    <li class="font-bold text-purple-700">"The whole company moved at once"</li>
  </ul>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-briefcase-search class="text-blue-600 text-3xl" />
    <span class="font-bold">"External events became the strongest internal sales tool"</span>
  </div>
</div>

<!--
【Slide 20】
This event was all calculated.
YouTube streaming made it easy for internal people to watch.
Famous guests increased attention.
The effects exceeded expectations.
Even executives watched, and inquiries flooded in the next day.
-->

---

# Dramatic Changes After the Event

<div class="timeline">
<div class="flex items-start gap-4 mb-6">
  <div class="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
    <mdi-calendar-today class="text-white text-2xl" />
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">Day After Event</h3>
    <ul class="space-y-2 mt-2 list-disc list-inside">
      <li>Slack notifications wouldn't stop</li>
      <li>"When are we adopting?" inquiries flooded</li>
    </ul>
  </div>
</div>
<div class="flex items-start gap-4 mb-6">
  <div class="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
    <mdi-calendar-week class="text-white text-2xl" />
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">One Week Later</h3>
    <ul class="space-y-2 mt-2 list-disc list-inside">
      <li>Formal adoption requests from multiple divisions</li>
      <li>Budget allocation movements</li>
    </ul>
  </div>
</div>
<div class="flex items-start gap-4">
  <div class="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
    <mdi-calendar-month class="text-white text-2xl" />
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">Now</h3>
    <ul class="space-y-2 mt-2 list-disc list-inside">
      <li class="font-bold text-purple-700">"An unstoppable momentum"</li>
    </ul>
  </div>
</div>
</div>

<!--
【Slide 21】
Everything changed from the day after the event.
Slack notifications wouldn't stop.
"When will it be available?" "Our division wants to use it too!"
Within a week, formal requests from multiple divisions.
After a month, it became an executive meeting agenda.
This momentum can't be stopped anymore.
-->

---

# Current Situation

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-green-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-chart-line class="text-green-500" />
    Rapid Adoption
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li>Many teams starting adoption</li>
    <li>Inquiries flooding in</li>
    <li class="font-bold text-green-700">"When's the company-wide rollout?" voices</li>
  </ul>
</div>
<div class="p-6 bg-blue-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-check-decagram class="text-blue-500" />
    Company-wide Adoption Coming!
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li>Need for bulk contract emerged</li>
    <li>Working out the details now</li>
  </ul>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl mt-4">
  <h3 class="text-xl font-bold mb-2">Cursor's Biggest Advantage</h3>
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-infinity class="text-purple-600 text-3xl" />
    <span class="font-bold">"Access to all models without additional registration"</span>
  </div>
</div>

<!--
【Slide 22】
Let me update you on the current situation.
Company-wide adoption is now a done deal. We're working out details.
Business plan at $15/month. That's incredible value.
Because all AI models are unlimited.
Claude 4, GPT-4.5, Gemini 2.5 - no additional charges!
-->

---

# Available Models (June 2025)

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
        <th class="p-3 text-left rounded-tl-lg">Vendor</th>
        <th class="p-3 text-left">Model</th>
        <th class="p-3 text-left rounded-tr-lg">Features</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b bg-green-50 hover:bg-green-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><simple-icons-openai class="text-green-600" /> OpenAI</td>
        <td class="p-3">o3</td>
        <td class="p-3">Latest reasoning capabilities</td>
      </tr>
      <tr class="border-b bg-blue-50 hover:bg-blue-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><simple-icons-googlegemini class="text-blue-600" /> Google</td>
        <td class="p-3">gemini-2.5-pro-max</td>
        <td class="p-3">1M token context</td>
      </tr>
      <tr class="border-b bg-purple-50 hover:bg-purple-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><simple-icons-anthropic class="text-purple-600" /> Anthropic</td>
        <td class="p-3">claude-4-sonnet-max & opus</td>
        <td class="p-3">Highest accuracy code generation</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<div class="text-center p-4 bg-gradient-to-r from-indigo-100 to-violet-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-star-four-points class="text-indigo-600 text-3xl" />
    <span class="font-bold">"Free access to all these models"</span>
  </div>
</div>

<!--
【Slide 23】
Look at this incredible lineup.
Latest GPT-4.5, Claude 4, Gemini 2.5.
All unlimited for $15/month.
Other services require separate contracts and payments.
With Cursor, everything's included. Revolutionary.
-->

---

# My Ambition: CyberAgent's Future

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-blue-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-target class="text-blue-500" />
    Goal 1
  </h2>
  <div class="text-xl font-bold text-blue-800 mb-2">Everyone Uses Cursor</div>
  <ul class="space-y-2 list-disc list-inside">
    <li>Not just engineers</li>
    <li>Designers too</li>
    <li>Business roles too</li>
    <li class="font-bold text-blue-700">"Even non-coders use Cursor"</li>
  </ul>
</div>
<div class="p-6 bg-purple-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-earth class="text-purple-500" />
    Goal 2
  </h2>
  <div class="text-xl font-bold text-purple-800 mb-2">Most MCP Servers in the World</div>
  <ul class="space-y-2 list-disc list-inside">
    <li>MCP-ify all internal systems</li>
    <li>Productivity tool integration</li>
    <li class="font-bold text-purple-700">"MCP servers > employees"</li>
  </ul>
</div>
</div>

<!--
【Slide 26】
I have a big ambition.
Make CyberAgent a company where "everyone uses Cursor."
Not just engineers. Designers, sales, everyone.
And become the company with the most MCP servers in the world.
More MCP servers than employees. That's the goal.
-->

---

# Why Everyone Should Use Cursor

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-pink-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-palette class="text-pink-500" />
    For Designers
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li>Code generation from Figma</li>
    <li>Design system automation</li>
    <li>Common language with engineers</li>
    <li class="font-bold text-pink-700">Instant implementation feasibility checks</li>
  </ul>
</div>
<div class="p-6 bg-indigo-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-briefcase class="text-indigo-500" />
    For Business Roles
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li>Data analysis without SQL</li>
    <li>Simple automation scripts</li>
    <li>Participation in technical discussions</li>
    <li class="font-bold text-indigo-700">Value of "being able to read code"</li>
  </ul>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-lime-100 to-emerald-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-school class="text-lime-700 text-3xl" />
    <span class="font-bold">"Programming is the new literacy. Cursor is the gateway."</span>
  </div>
</div>

<!--
【Slide 27】
Why should everyone use Cursor?
Designers can instantly check if their Figma designs are implementable.
Business folks can analyze data without knowing SQL, just use natural language.
Programming isn't a special skill anymore.
It's the new literacy.
-->

---

# What is MCP? Why is it Important?

<div class="text-center mb-4">
  <h3 class="text-xl text-gray-600">Standard protocol connecting AI and tools</h3>
</div>

<div class="flex justify-center items-center">
<div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
```mermaid
graph LR
    A[<div class='flex items-center gap-2'><i class='mdi mdi-cursor-default-outline text-xl text-purple-600'></i> Cursor</div>] --> B{<div class='flex items-center gap-2'><i class='mdi mdi-server-network text-xl'></i> MCP Server</div>}
    B --> C[<div class='flex items-center gap-2'><i class='mdi mdi-slack text-xl'></i> Slack</div>]
    B --> D[<div class='flex items-center gap-2'><i class='simple-icons-notion text-xl'></i> Notion</div>]
    B --> E[<div class='flex items-center gap-2'><i class='mdi mdi-github text-xl'></i> GitHub</div>]
    B --> F[<div class='flex items-center gap-2'><i class='mdi mdi-office-building text-xl'></i> Internal Systems</div>]
    
    style A fill:#e0e7ff,stroke:#a5b4fc,stroke-width:2px
    style B fill:#ede9fe,stroke:#c4b5fd,stroke-width:2px
    style C fill:#e0f2fe
    style D fill:#f5f3ff
    style E fill:#f3f4f6
    style F fill:#f0f9ff
```
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-robot-love class="text-red-600 text-3xl" />
    <span class="font-bold">"MCP gives AI hands and feet"</span>
  </div>
</div>

<!--
【Slide 28】
What's MCP? Many might wonder.
Model Context Protocol. Simply put, it's technology connecting AI and tools.
AI was just a brain until now. MCP gives it hands and feet.
Post to Slack, update Notion, AI can do everything.
-->

---

# Current Internal MCP Server Examples

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-blue-50 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-blue-800 mb-2"><mdi-palette-swatch class="text-blue-600" />Spindle Design System MCP</h3>
  <ul class="text-sm list-disc list-inside">
    <li>Figma Dev Mode integration</li>
    <li class="font-bold text-green-600">10x productivity boost</li>
  </ul>
</div>
<div class="p-4 bg-red-50 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-red-800 mb-2"><mdi-shield-alert class="text-red-600" />RISKEN MCP</h3>
  <ul class="text-sm list-disc list-inside">
    <li>Risk visualization efficiency</li>
    <li>Incident prevention</li>
  </ul>
</div>
<div class="p-4 bg-purple-50 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-purple-800 mb-2"><mdi-book-open-variant class="text-purple-600" />CA Dictionary MCP</h3>
  <ul class="text-sm list-disc list-inside">
    <li>Unified internal terminology</li>
  </ul>
</div>
<div class="p-4 bg-cyan-50 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-cyan-800 mb-2"><mdi-pipe class="text-cyan-600" />PipeCD Documentation MCP</h3>
  <ul class="text-sm list-disc list-inside">
    <li>OSS adoption promotion</li>
    <li>Deployment automation</li>
  </ul>
</div>
<div class="p-4 bg-orange-50 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-orange-800 mb-2"><mdi-bucket-outline class="text-orange-600" />Bucketeer Feature Flags MCP</h3>
  <ul class="text-sm list-disc list-inside">
    <li>Simplified feature flag management</li>
  </ul>
</div>
<div class="p-4 bg-gray-100 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-gray-800 mb-2"><mdi-web class="text-gray-600" />Tool Portal & MCP Portal</h3>
  <ul class="text-sm list-disc list-inside">
    <li>cyberagent.tools (in development)</li>
    <li>Internal MCP portal directory (in development)</li>
  </ul>
</div>
</div>

<!--
【Slide 29】
Let me introduce our already running MCP servers.
Spindle is our design system. Its MCP boosted productivity 10x.
10x! Tasks that took a day now take an hour.
We've also MCP-ified security, dictionary, deployment tools, everything.
-->

---

# TaskMaster: Revolutionizing In-Repository Task Management

<div class="text-center mb-6">
  <h2 class="flex items-center justify-center gap-2 text-2xl">
    <mdi-check-all class="text-blue-500" />
    Say goodbye to GitHub Issues, JIRA, and manual tracking for PRDs
  </h2>
</div>

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-red-50 rounded-lg border-2 border-red-200">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-alert-circle class="text-red-500" />
    Traditional Problems
  </h2>
  <ul class="space-y-2 list-disc list-inside">
    <li>Switching between GitHub Issues ⟷ Code</li>
    <li>Manually managing tasks in Markdown</li>
    <li>Implementation and tasks diverge</li>
    <li>Frequent context switching</li>
    <li>Can't see overall project progress</li>
  </ul>
</div>
<div class="p-6 bg-green-50 rounded-lg border-2 border-green-200">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-robot-excited class="text-green-500" />
    TaskMaster MCP
  </h2>
  <ul class="space-y-2 list-disc list-inside">
    <li>Complete task management in repository</li>
    <li>Implementation and tasks always in sync</li>
    <li>PRD generation to implementation seamlessly</li>
    <li>Everything happens inside Cursor</li>
  </ul>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-fire class="text-purple-600 text-3xl" />
    <span class="font-bold">"The definitive in-repository task management. No more external tools."</span>
    <mdi-check-decagram class="text-blue-600 text-3xl" />
  </div>
</div>

<br>

<div class="text-center p-3 bg-gray-50 rounded-lg">
  <div class="flex items-center justify-center gap-2 text-lg">
    <mdi-web class="text-gray-600" />
    <span class="font-semibold">Learn more:</span>
    <a href="https://www.task-master.dev/" class="text-blue-600 font-bold underline">task-master.dev</a>
  </div>
</div>

<!--
【TaskMaster Slide】
TaskMaster is truly a game-changer.
No need to use GitHub Issues or JIRA, no switching out.
In the repository, chat with AI to create tasks and implement.
Auto-generate PRDs, structured tasks, real-time progress.
No more external task management tools needed.
-->

---

# Spindle MCP: The Secret to 10x Productivity

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-red-50 rounded-lg border-2 border-red-200">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-tortoise class="text-red-500" />
    Before (Pre-MCP)
  </h2>
  <ol class="space-y-2 list-decimal list-inside">
    <li>Check design in Figma</li>
    <li>Search for component names</li>
    <li>Check documentation for usage</li>
    <li>Manually write code</li>
    <li>Adjust properties</li>
  </ol>
  <div class="mt-4 font-bold text-red-700">Time: 30min - 1 hour</div>
</div>
<div class="p-6 bg-green-50 rounded-lg border-2 border-green-200">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-rabbit class="text-green-500" />
    After (With MCP)
  </h2>
  <ol class="space-y-2 list-decimal list-inside">
    <li>Paste Figma link</li>
    <li>AI generates code automatically</li>
    <li>Done!</li>
  </ol>
  <div class="mt-4 font-bold text-green-700">Time: 3 minutes</div>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-rocket-launch class="text-purple-600 text-3xl" />
    <span class="font-bold">"This is what 10x means. No going back."</span>
  </div>
</div>

<!--
【Slide 30】
Think 10x is exaggeration? Let me show you.
Before: Check Figma, find components, read docs... 30+ minutes.
Now? Paste Figma link, done in 3 minutes.
This is what 10x means. Can't go back to the old way.
-->

---
layout: center
---

# Part 2: Personal Tips & Practice

<div class="text-center text-2xl">
  <div class="p-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl inline-block shadow-lg">
    <h2 class="flex items-center justify-center gap-3 text-4xl">
      <mdi-rocket-launch class="text-purple-500" />
      Vibe Coding for Explosive Productivity
      <mdi-music-clef-treble class="text-blue-500" />
    </h2>
  </div>
</div>

<!--
【Slide 31】
Now let me share my personal techniques.
I call it "Vibe Coding" - it's revolutionary.
I'll share all the secrets to explosive productivity.
-->

---

# What is Vibe Coding?

<div class="text-center mb-8">
  <h2 class="flex items-center justify-center gap-3 text-3xl p-4 bg-yellow-50 rounded-xl">
    <mdi-music-note class="text-yellow-600" />
    Flow State × AI = Maximum Productivity
    <mdi-brain class="text-yellow-600" />
  </h2>
</div>

<div class="grid grid-cols-3 gap-6">
  <div class="p-4 bg-blue-50 rounded-lg text-center">
    <h3 class="text-xl font-bold text-blue-800 mb-2">1. Rhythm</h3>
    <p>Break tasks into small pieces, maintain tempo</p>
  </div>
  <div class="p-4 bg-green-50 rounded-lg text-center">
    <h3 class="text-xl font-bold text-green-800 mb-2">2. Flow</h3>
    <p>Enter the zone through AI dialogue</p>
  </div>
  <div class="p-4 bg-purple-50 rounded-lg text-center">
    <h3 class="text-xl font-bold text-purple-800 mb-2">3. Fun</h3>
    <p>Enjoy coding like making music</p>
  </div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-guitar-electric class="text-pink-600 text-3xl" />
    <span class="font-bold">"Coding is composing. AI is your best band member."</span>
  </div>
</div>

<!--
【Slide 32】
What's Vibe Coding?
Simply put, it's a development style where you enter flow state with AI.
Write code rhythmically, like making music.
AI is your best band member, matching your performance.
It's really fun.
-->

---

# My Favorite Models

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-indigo-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-brain class="text-indigo-500" />
    Ideas & Planning
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li><span class="font-bold">Claude Opus 4</span> (Main)</li>
    <li><span class="font-bold">o3</span> (When numerical calculations needed)</li>
  </ul>
</div>
<div class="p-6 bg-teal-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-code-braces class="text-teal-500" />
    Coding
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li><span class="font-bold">Claude Sonnet 4</span></li>
    <li><span class="font-bold">Gemini 2.5 Pro</span></li>
    <li>(Choose based on context length)</li>
  </ul>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-gray-100 to-slate-100 rounded-xl mt-4">
  <h3 class="text-xl font-bold text-gray-700">🎯 Model Selection Tips</h3>
  <p class="text-lg">"Choose optimal model based on task and context length"</p>
</div>

<!--
【Slide 33】
Model selection is crucial.
For ideation: Claude Opus 4. It's the most creative.
For actual coding: speed-focused Sonnet 4 or Gemini 2.5.
Long context? Gemini 2.5. Short? Sonnet 4.
This makes a huge efficiency difference.
-->

---

# Task-Based Model Selection Guide

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
        <th class="p-3 text-left rounded-tl-lg">Task</th>
        <th class="p-3 text-left">Recommended Model</th>
        <th class="p-3 text-left rounded-tr-lg">Reason</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b bg-purple-50 hover:bg-purple-100">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-sitemap class="text-purple-600" />Architecture Design</td>
        <td class="p-3 font-bold">Claude Opus 4</td>
        <td class="p-3">Deep thinking and creativity</td>
      </tr>
      <tr class="border-b bg-red-50 hover:bg-red-100">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-bug class="text-red-600" />Bug Fixing</td>
        <td class="p-3 font-bold">Claude Sonnet 4</td>
        <td class="p-3">Balance of accuracy and speed</td>
      </tr>
      <tr class="border-b bg-blue-50 hover:bg-blue-100">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-wrench class="text-blue-600" />Refactoring</td>
        <td class="p-3 font-bold">Gemini 2.5 Pro</td>
        <td class="p-3">Large code processing capability</td>
      </tr>
      <tr class="border-b bg-green-50 hover:bg-green-100">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-file-document class="text-green-600" />Documentation</td>
        <td class="p-3 font-bold">OpenAI o3</td>
        <td class="p-3">Structured output</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<div class="text-center p-4 bg-gradient-to-r from-gray-100 to-slate-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-target-account class="text-gray-600 text-3xl" />
    <span class="font-bold">"Right tool for the right job. Same with AI models."</span>
  </div>
</div>

<!--
【Slide 34】
Here's a specific usage guide.
Creative work like architecture design? Opus 4.
Bug fixes need accuracy? Sonnet.
Refactoring lots of code? Gemini.
Master this selection and your efficiency soars.
-->

---

# The Secret Sauce: Ultimate Vibe Coding Stack

<div class="text-center p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl mb-6">
  <h2 class="flex items-center justify-center gap-3 text-xl">
    <mdi-lock class="text-yellow-600 text-2xl" />
    <span class="font-bold">I didn't want to share this... but for the global tech community!</span>
    <mdi-earth class="text-orange-600 text-2xl" />
  </h2>
</div>

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-gray-50 rounded-lg">
  <h3 class="flex items-center gap-2 text-xl mb-4 font-bold">
    <mdi-layers-triple class="text-gray-600" />
    Opinionated Stack
  </h3>
<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-robot class="text-purple-600 text-xl" />
    <div>
      <span class="font-bold">AI Agents:</span>
      <span class="ml-2">Mastra</span>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-database class="text-blue-600 text-xl" />
    <div>
      <span class="font-bold">Backend & Frontend:</span>
      <span class="ml-2">Convex</span>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-cellphone class="text-green-600 text-xl" />
    <div>
      <span class="font-bold">Native Apps:</span>
      <span class="ml-2">Expo</span>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
    <mdi-cloud class="text-orange-600 text-xl" />
    <div>
      <span class="font-bold">Hosting:</span>
      <span class="ml-2">Cloudflare</span>
    </div>
  </div>
</div>
</div>
<div class="p-6 bg-green-50 rounded-lg">
<h3 class="flex items-center gap-2 text-xl mb-4 font-bold">
  <mdi-fire class="text-green-600" />
  Why Convex?
</h3>
<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
    <mdi-language-typescript class="text-indigo-600 text-xl" />
    <span>Complete e2e type safety</span>
  </div>
  
  <div class="flex items-center gap-3 p-3 bg-cyan-50 rounded-lg">
    <mdi-sync class="text-cyan-600 text-xl" />
    <span>Real-time DB</span>
  </div>
  
  <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border-2 border-red-300">
    <mdi-database-remove class="text-red-600 text-xl" />
    <span class="font-bold text-red-700">No SQL!</span>
  </div>
  
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-shield-check class="text-purple-600 text-xl" />
    <span>Schema enforcement = perfect AI gen</span>
  </div>
</div>
</div>
</div>

<!--
【Slide 35】
What I'm about to share, I wanted to keep secret.
It's the source of my competitive advantage.
But I'll share it for the global tech community.
This stack is truly the best.
Especially Convex. It has incredible synergy with AI.
-->

---

# Why This Stack is the Best

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-rocket-launch class="text-blue-500" />
  Development Speed
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
    <mdi-clock-fast class="text-blue-600 text-xl" />
    <span class="font-bold text-blue-700">Idea to implementation in 30 minutes</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <mdi-shield-check class="text-green-600 text-xl" />
    <span>Type safety dramatically reduces bugs</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-sync class="text-purple-600 text-xl" />
    <span>Real-time features by default</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
    <mdi-auto-fix class="text-orange-600 text-xl" />
    <span>Automated deployment</span>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-robot class="text-purple-500" />
  AI Compatibility
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-check-decagram class="text-purple-600 text-xl" />
    <span>Complete type info prevents AI mistakes</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg">
    <mdi-file-cog class="text-indigo-600 text-xl" />
    <span>Cursor Rules ready</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
    <mdi-server-network class="text-blue-600 text-xl" />
    <span>MCP servers provided</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border-2 border-pink-300">
    <mdi-brain class="text-pink-600 text-xl" />
    <span class="font-bold text-pink-700">"Designed for AI understanding"</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-speedometer class="text-yellow-600 text-3xl" />
    <span class="font-bold">With this stack, I develop 10x faster</span>
    <mdi-multiplication class="text-orange-600 text-3xl" />
  </div>
</div>

<!--
【Slide 36】
Why is this stack the best?
First, it's fast. Idea to implementation in 30 minutes.
And AI doesn't make mistakes. Complete type information.
Convex especially feels designed for AI.
Actually, I'm developing 10x faster with this.
-->

---

# Critical Perspective: The Version Problem

<div class="text-center text-2xl mb-8">

<div class="p-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-alert-circle class="text-red-600 text-3xl" />
    <span class="font-bold">Ever asked for Tailwind v4 code but got v3?<br>Raise your hand!</span>
  </div>
</div>

</div>

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-close-circle class="text-red-500" />
  Traditional Approach Problems
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
    <mdi-history class="text-red-600 text-xl" />
    <span>LLMs trained on old StackOverflow code</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
    <mdi-alert-octagon class="text-orange-600 text-xl" />
    <span>Version mismatch errors galore</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg">
    <mdi-thumb-down class="text-yellow-600 text-xl" />
    <span>Not best practice code</span>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-check-circle class="text-green-500" />
  Solutions
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <mdi-file-cog class="text-green-600 text-xl" />
    <div>
      <div class="font-bold">Cursor Rules</div>
      <div class="text-sm text-gray-600">Tools like Convex provide them</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
    <mdi-server-network class="text-blue-600 text-xl" />
    <div>
      <div class="font-bold">MCP Documentation Servers</div>
      <div class="text-sm text-gray-600">(like Mastra)</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-shield-check class="text-purple-600 text-xl" />
    <span>Context7 and GitMCP guarantees latest version & best practices</span>
  </div>
</div>

</div>
</div>

<!--
【Slide 37】
Important point here. Raise your hand please.
Who's had AI generate Tailwind v4 code that didn't work with v3?
Yes, lots of hands. This is a huge problem.
LLMs are trained on old code, don't know latest APIs.
That's why Rules and MCP are critical.
-->

---

# Version Problem Examples

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-emoticon-sad class="text-red-500" />
  Common Failures
</h2>

<div class="space-y-3">
  <div class="bg-red-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-react class="text-red-600 text-xl" />
      <span class="font-semibold">Old React 17 code</span>
    </div>
    <div class="text-sm text-gray-600">AI generates old React 17 class components</div>
  </div>
  
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-alert-circle class="text-orange-600 text-xl" />
      <span class="font-semibold">Deprecated APIs</span>
    </div>
    <div class="text-sm text-gray-600">Using deprecated APIs</div>
  </div>
  
  <div class="bg-yellow-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-package-variant-closed class="text-yellow-600 text-xl" />
      <span class="font-semibold">Old library patterns</span>
    </div>
    <div class="text-sm text-gray-600">Outdated library usage patterns</div>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-check-circle class="text-green-500" />
  Solved with Cursor Rules
</h2>

<div class="space-y-3">
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-react class="text-green-600 text-xl" />
      <span class="font-semibold">Latest React 19 code</span>
    </div>
    <div class="text-sm text-gray-600">Modern React 19 function components</div>
  </div>
  
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-star class="text-blue-600 text-xl" />
      <span class="font-semibold">Latest best practices</span>
    </div>
    <div class="text-sm text-gray-600">Current best practices applied</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-hook class="text-purple-600 text-xl" />
      <span class="font-semibold">Proper hooks usage</span>
    </div>
    <div class="text-sm text-gray-600">Correct hooks implementation</div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-book-open-variant class="text-3xl text-blue-600" />
    <span class="text-xl font-bold">Cursor Rules are the AI's textbook</span>
    <mdi-school class="text-3xl text-purple-600" />
  </div>
</div>

<!--
【Slide 38】
Here are specific examples.
Without guidance, AI writes old React class components.
But with Cursor Rules, it writes modern function components.
Cursor Rules are textbooks teaching AI the latest patterns.
-->

---

# Context is King 👑

<div class="text-center text-3xl mb-8">

<div class="p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-crown class="text-red-600 text-4xl" />
    <span class="font-bold">Leaving Cursor = Losing time AND CONTEXT</span>
    <mdi-timer-sand class="text-orange-600 text-4xl" />
  </div>
</div>

</div>

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-skull class="text-red-500" />
  Productivity Killers
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
    <mdi-swap-horizontal class="text-red-600 text-xl" />
    <span class="font-bold">Context switching</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
    <mdi-exit-to-app class="text-orange-600 text-xl" />
    <span>Moving to external tools</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg">
    <mdi-scatter-plot class="text-yellow-600 text-xl" />
    <span>Information fragmentation</span>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-target class="text-green-500" />
  Solution: Everything in Cursor
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <mdi-server-network class="text-green-600 text-xl" />
    <span>Use existing MCP servers</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
    <mdi-wrench class="text-blue-600 text-xl" />
    <span>Build custom MCP servers</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-link-variant class="text-purple-600 text-xl" />
    <span>Integrate entire workflow</span>
  </div>
</div>

</div>
</div>

<!--
【Slide 39】
This is really important.
Every time you leave Cursor, you lose not just time but precious context.
Context is life for AI.
That's why keeping everything inside Cursor is critical.
MCP is the magic technology that makes this possible.
-->

---

# The Real Cost of Context Switching

<div class="grid grid-cols-2 gap-6">
  <div class="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
    <div class="text-6xl font-bold text-green-600 mb-2">37.5%</div>
    <div class="text-xl font-semibold text-green-800">Actual Coding</div>
    <div class="text-sm text-gray-600 mt-2">Core development work</div>
  </div>
  
  <div class="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
    <div class="text-6xl font-bold text-red-600 mb-2">25%</div>
    <div class="text-xl font-semibold text-red-800">Tool Switching</div>
    <div class="text-sm text-gray-600 mt-2">IDE ⟷ Browser ⟷ Terminal</div>
  </div>
  
  <div class="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl">
    <div class="text-6xl font-bold text-orange-600 mb-2">18.75%</div>
    <div class="text-xl font-semibold text-orange-800">Context Rebuilding</div>
    <div class="text-sm text-gray-600 mt-2">Remembering what you were doing</div>
  </div>
  
  <div class="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
    <div class="text-6xl font-bold text-purple-600 mb-2">18.75%</div>
    <div class="text-xl font-semibold text-purple-800">Documentation Search</div>
    <div class="text-sm text-gray-600 mt-2">Looking up APIs and usage</div>
  </div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-alert-circle class="text-red-600 text-3xl" />
    <span class="font-bold">Actual coding is only 37.5% of the day</span>
    <mdi-chart-pie class="text-orange-600 text-3xl" />
  </div>
</div>

<!--
【Slide 40】
Let me show you shocking data.
Average developer's day: only 37.5% is actual coding.
The rest is all tool switching and context rebuilding.
This is incredibly wasteful.
Integrate everything in Cursor with MCP, eliminate this waste.
-->

---

# MCP Workflow for Business Future

<div class="space-y-6">

<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
    <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
      <span class="text-white font-bold">1</span>
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">Step 1: Manual Work</h3>
    <p class="text-gray-600">Execute everything manually in Cursor</p>
  </div>
</div>

<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
      <span class="text-white font-bold">2</span>
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">Step 2: MCP-ify</h3>
    <p class="text-gray-600 mb-2">Wrap each task with MCP server</p>
    <div class="space-y-1">
      <div class="flex items-center gap-2">
        <mdi-check class="text-orange-600" />
        <span class="text-sm">Cloudflare Agent recommended & Mastra MCP Server recommended</span>
      </div>
    </div>
  </div>
</div>

<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
      <span class="text-white font-bold">3</span>
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">Step 3: Agent-ify</h3>
    <p class="text-gray-600">Automate entire workflow with Mastra</p>
  </div>
</div>

<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
      <span class="text-white font-bold">4</span>
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">Step 4: Monetize</h3>
    <div class="space-y-1">
      <div class="flex items-center gap-2">
        <span class="font-semibold">a)</span>
        <span>Create UI/App with Convex</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="font-semibold">b)</span>
        <span>Sell as MCP SaaS (Stripe Agent Toolkit)</span>
      </div>
    </div>
  </div>
</div>

</div>

<!--
【Slide 41】
MCP workflow evolves in stages.
Start manual, then MCP-ify, then agent-ify.
Finally, sell it as a service.
This is the new business model.
I'm actually building and selling several.
-->

---

# MCP SaaS Examples

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-target class="text-blue-500" />
  Enterprise MCP
</h2>

<div class="space-y-3">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <mdi-account-plus class="text-blue-600" />
        <span class="font-bold">Recruitment Management MCP</span>
      </div>
      <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Live</span>
    </div>
    <div class="text-sm text-gray-600">$50/month subscription</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <mdi-receipt class="text-purple-600" />
        <span class="font-bold">Expense Management MCP</span>
      </div>
      <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Live</span>
    </div>
    <div class="text-sm text-gray-600">$30/month subscription</div>
  </div>
  
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <mdi-clock-time-four class="text-orange-600" />
        <span class="font-bold">Time Tracking MCP</span>
      </div>
      <span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">In Development</span>
    </div>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-cash-multiple class="text-green-500" />
  Business Model
</h2>

<div class="space-y-3">
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-clock class="text-green-600" />
      <span class="font-semibold">Development Time:</span>
      <span>~10 hours</span>
    </div>
  </div>
  
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-currency-usd class="text-blue-600" />
      <span class="font-semibold">Monthly Revenue:</span>
      <span>$500-$2000</span>
    </div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-chart-line class="text-purple-600" />
      <span class="font-semibold">ROI:</span>
      <span>3-month payback</span>
    </div>
  </div>
  
  <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-2 border-yellow-400">
    <div class="flex items-center gap-2">
      <mdi-repeat class="text-yellow-600" />
      <span class="font-bold text-yellow-700">"The more you build, the more revenue streams"</span>
    </div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-server-network class="text-green-600 text-3xl" />
    <span class="font-bold">MCP is the new SaaS model. Anyone can build it.</span>
    <mdi-account-multiple class="text-blue-600 text-3xl" />
  </div>
</div>

<!--
【Slide 42】
Let me show you MCP servers I've built and monetized.
Recruitment Management MCP at $50/month, already 20 companies using it.
Development time was about 10 hours. ROI in 3 months.
This is a new business model.
You can build these too. Really.
-->

---

# MCP Investment Metrics

<div class="text-center text-2xl mb-8">

<div class="p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-chart-timeline-variant class="text-purple-600 text-3xl" />
    <span class="font-bold">MCP server count will become the new company valuation metric</span>
    <mdi-trending-up class="text-blue-600 text-3xl" />
  </div>
</div>

</div>

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-chart-box class="text-blue-500" />
  Current Trends
</h3>

<div class="space-y-3">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <simple-icons-zapier class="text-blue-600" />
      <span class="font-bold">Zapier:</span>
    </div>
    <div class="text-sm text-gray-600">"MCP servers > employees"</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-domain class="text-purple-600" />
      <span class="font-bold">Composio:</span>
    </div>
    <div class="text-sm text-gray-600">Similar announcement</div>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-rocket-launch class="text-green-500" />
  Why It Matters
</h3>

<div class="space-y-3">
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="flex items-center gap-2">
      <mdi-eye class="text-green-600" />
      <span>Automation level visibility</span>
    </div>
  </div>
  
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="flex items-center gap-2">
      <mdi-chart-line class="text-orange-600" />
      <span>Quantitative productivity metric</span>
    </div>
  </div>
  
  <div class="bg-red-50 p-4 rounded-lg">
    <div class="flex items-center gap-2">
      <mdi-account-tie class="text-red-600" />
      <span>New metric investors watch</span>
    </div>
  </div>
</div>

</div>
</div>

<!--
【Slide 43】
Here's my prediction.
Soon, investors will look at MCP server count as a key metric.
Zapier already announced their MCP servers exceed employee count.
This is a new KPI showing a company's automation level.
-->

---

# Why MCP Server Count Matters

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-account-tie class="text-blue-500" />
  Investor Perspective
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
    <mdi-chart-bar class="text-blue-600 text-xl" />
    <span>Quantifies automation level</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-crystal-ball class="text-purple-600 text-xl" />
    <span>Predicts future growth</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <mdi-shield-star class="text-green-600 text-xl" />
    <span>Competitive advantage indicator</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-300">
    <mdi-account-off class="text-orange-600 text-xl" />
    <span class="font-bold text-orange-700">"Low human resource dependency"</span>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-office-building class="text-purple-500" />
  Company Perspective
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-speedometer class="text-purple-600 text-xl" />
    <span>Productivity visualization</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg">
    <mdi-lightbulb-on class="text-indigo-600 text-xl" />
    <span>Innovation capability proof</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
    <mdi-account-star class="text-cyan-600 text-xl" />
    <span>Recruiting competitive edge</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border-2 border-pink-300">
    <mdi-star-circle class="text-pink-600 text-xl" />
    <span class="font-bold text-pink-700">"Cutting-edge company branding"</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-server-network class="text-yellow-600 text-3xl" />
    <span class="font-bold">1000 MCP servers = New unicorn standard</span>
    <mdi-unicorn class="text-orange-600 text-3xl" />
  </div>
</div>

<!--
【Slide 44】
Why does MCP server count matter?
For investors, it's an automation metric.
Shows if a company is scalable without human dependency.
For companies, it's cutting-edge branding.
Attracts top talent too.
-->

---

# Breaking: MCP Elicitations (Not Released Yet)

<div class="text-center mb-8">

<h3 class="flex items-center justify-center gap-2 text-2xl">
  <mdi-party-popper class="text-yellow-500" />
  Latest Feature: LLMs can ask users questions!
  <mdi-help-circle class="text-blue-500" />
</h3>

</div>

<div class="grid grid-cols-3 gap-6">
<div>

<h3 class="flex items-center gap-2 text-lg mb-3">
  <mdi-alert-circle class="text-red-500" />
  Traditional Problems
</h3>

<div class="space-y-2">
  <div class="bg-red-50 p-3 rounded-lg text-sm">
    <div class="flex items-center gap-2">
      <mdi-brain class="text-red-600" />
      <span>AI guesses with insufficient info</span>
    </div>
  </div>
  <div class="bg-orange-50 p-3 rounded-lg text-sm">
    <div class="flex items-center gap-2">
      <mdi-alert-octagon class="text-orange-600" />
      <span>Hallucinations occur</span>
    </div>
  </div>
  <div class="bg-yellow-50 p-3 rounded-lg text-sm">
    <div class="flex items-center gap-2">
      <mdi-close-circle class="text-yellow-600" />
      <span>Wrong implementations</span>
    </div>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-lg mb-3">
  <mdi-check-circle class="text-green-500" />
  Solved with Elicitations
</h3>

<div class="space-y-2">
  <div class="bg-green-50 p-3 rounded-lg text-sm">
    <div class="flex items-center gap-2">
      <mdi-help-circle class="text-green-600" />
      <span>AI asks for needed info</span>
    </div>
  </div>
  <div class="bg-blue-50 p-3 rounded-lg text-sm">
    <div class="flex items-center gap-2">
      <mdi-forum class="text-blue-600" />
      <span>Interactive problem solving</span>
    </div>
  </div>
  <div class="bg-purple-50 p-3 rounded-lg text-sm">
    <div class="flex items-center gap-2">
      <mdi-check-decagram class="text-purple-600" />
      <span>Accurate implementations</span>
    </div>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-lg mb-3">
  <mdi-star class="text-purple-500" />
  Revolutionary Impact
</h3>

<div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
  <div class="text-center">
    <mdi-shield-check class="text-purple-600 text-3xl mb-2" />
    <div class="font-bold text-purple-700">
      Hallucinations dramatically reduced
    </div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-robot class="text-blue-600 text-3xl" />
    <span class="font-bold">Revolutionary feature that dramatically reduces LLM hallucinations</span>
    <mdi-shield-check class="text-purple-600 text-3xl" />
  </div>
</div>

<!--
【Slide 45】
Let me introduce the latest feature: Elicitations.
Previously, LLMs would guess or fail when uncertain.
Now they can ask users questions!
This is revolutionary. Hallucinations drop dramatically.
No more failures from wrong assumptions.
-->

---

# Elicitations in Practice

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-target class="text-blue-500" />
  Development Tasks
</h2>

<div class="space-y-3">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-robot class="text-blue-600" />
      <span class="font-semibold">AI:</span>
    </div>
    <div class="text-sm">"Which function should I test?"</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-robot class="text-purple-600" />
      <span class="font-semibold">AI:</span>
    </div>
    <div class="text-sm">"Should I include edge cases?"</div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-robot class="text-green-600" />
      <span class="font-semibold">AI:</span>
    </div>
    <div class="text-sm">"Which testing framework?"</div>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-chart-bar class="text-orange-500" />
  Data Analysis
</h2>

<div class="space-y-3">
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-robot class="text-orange-600" />
      <span class="font-semibold">AI:</span>
    </div>
    <div class="text-sm">"What time period?"</div>
  </div>
  
  <div class="bg-red-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-robot class="text-red-600" />
      <span class="font-semibold">AI:</span>
    </div>
    <div class="text-sm">"What should I compare against?"</div>
  </div>
  
  <div class="bg-indigo-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-robot class="text-indigo-600" />
      <span class="font-semibold">AI:</span>
    </div>
    <div class="text-sm">"Preferred output format?"</div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-account-multiple class="text-green-600 text-3xl" />
    <span class="font-bold">Interactive AI is true pair programming</span>
    <mdi-handshake class="text-blue-600 text-3xl" />
  </div>
</div>

<!--
【Slide 46】
Here are practical examples.
Ask "write tests" and AI asks for necessary details.
Request "analyze sales" and it confirms specifics.
This is true pair programming.
Like a human partner, confirming as it goes.
-->

---

# Measured Productivity Gains

<div class="text-center mb-8">

<h2 class="flex items-center justify-center gap-2 text-2xl">
  <mdi-chart-timeline-variant class="text-purple-500" />
  Before vs After (My Case)
</h2>

</div>

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <th class="p-3 text-left rounded-tl-lg">
          <div class="flex items-center gap-2">
            <mdi-chart-box class="text-xl" />
            Metric
          </div>
        </th>
        <th class="p-3 text-center">
          <div class="flex items-center justify-center gap-2">
            <mdi-clock-minus class="text-xl" />
            Before
          </div>
        </th>
        <th class="p-3 text-center">
          <div class="flex items-center justify-center gap-2">
            <mdi-clock-plus class="text-xl" />
            After
          </div>
        </th>
        <th class="p-3 text-center rounded-tr-lg">
          <div class="flex items-center justify-center gap-2">
            <mdi-trending-up class="text-xl" />
            Improvement
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">
          <div class="flex items-center gap-2">
            <mdi-cog class="text-blue-600" />
            Features/Day
          </div>
        </td>
        <td class="p-3 text-center">1-2</td>
        <td class="p-3 text-center font-bold text-green-600">5-8</td>
        <td class="p-3 text-center">
          <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
            400%
          </span>
        </td>
      </tr>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">
          <div class="flex items-center gap-2">
            <mdi-bug class="text-red-600" />
            Bug Rate
          </div>
        </td>
        <td class="p-3 text-center">15%</td>
        <td class="p-3 text-center font-bold text-green-600">3%</td>
        <td class="p-3 text-center">
          <span class="bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold">
            80% reduction
          </span>
        </td>
      </tr>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">
          <div class="flex items-center gap-2">
            <mdi-eye-check class="text-purple-600" />
            Code Review Time
          </div>
        </td>
        <td class="p-3 text-center">2 hours</td>
        <td class="p-3 text-center font-bold text-green-600">30 min</td>
        <td class="p-3 text-center">
          <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">
            75% reduction
          </span>
        </td>
      </tr>
      <tr class="hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">
          <div class="flex items-center gap-2">
            <mdi-file-document class="text-orange-600" />
            Documentation
          </div>
        </td>
        <td class="p-3 text-center">Next day</td>
        <td class="p-3 text-center font-bold text-green-600">Instant</td>
        <td class="p-3 text-center">
          <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">
            ∞
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-check-decagram class="text-yellow-600 text-3xl" />
    <span class="font-bold">This is not an exaggeration.</span>
    <mdi-chart-line class="text-orange-600 text-3xl" />
  </div>
</div>

<!--
【Slide 48】
These are my actual numbers. No exaggeration.
Features implemented per day increased 4x.
Bugs reduced by 80%. AI pre-checks everything.
Code reviews are faster. Documentation is auto-generated.
This is reality. You can achieve the same results.
-->

---

# Common Questions & Answers

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-xl mb-4">
  <mdi-help-circle class="text-red-500" />
  Q: Is it secure?
</h2>

<div class="bg-green-50 p-4 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-green-700 mb-2">
    <mdi-check-circle class="text-green-600" />
    A: Business plan is perfect
  </h3>
  <ul class="space-y-2">
    <li class="flex items-center gap-2">
      <mdi-shield-check class="text-green-600" />
      <span>SOC2 compliant</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-database-lock class="text-green-600" />
      <span>Data not used for training</span>
    </li>
  </ul>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-xl mb-4">
  <mdi-help-circle class="text-blue-500" />
  Q: What about existing workflows?
</h2>

<div class="bg-blue-50 p-4 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-blue-700 mb-2">
    <mdi-check-circle class="text-blue-600" />
    A: Gradual migration possible
  </h3>
  <ul class="space-y-2">
    <li class="flex items-center gap-2">
      <mdi-import class="text-blue-600" />
      <span>Easy migration from VSCode</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-puzzle class="text-blue-600" />
      <span>Most extensions work</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-account-group class="text-blue-600" />
      <span>Team-by-team adoption OK</span>
    </li>
  </ul>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-lightbulb class="text-purple-600 text-3xl" />
    <span class="font-bold">Try first, worry later. Free tier available.</span>
    <mdi-gift class="text-pink-600 text-3xl" />
  </div>
</div>

<!--
【Slide 49】
Let me answer common questions.
Security? Business plan is enterprise-ready.
Existing workflows? Gradual migration works.
From VSCode, it's almost seamless.
Just try it instead of worrying.
-->

---

# More Common Questions

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-xl mb-4">
  <mdi-help-circle class="text-purple-500" />
  Q: Learning curve?
</h2>

<div class="bg-purple-50 p-4 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-purple-700 mb-2">
    <mdi-flash class="text-purple-600" />
    A: Same day if you know VSCode
  </h3>
  <ul class="space-y-2">
    <li class="flex items-center gap-2">
      <mdi-gesture-tap class="text-purple-600" />
      <span>Same basic operations</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-robot class="text-purple-600" />
      <span>AI features are intuitive</span>
    </li>
    <li class="flex items-center gap-2">
      <emojione-flag-for-japan class="text-purple-600" />
      <span>Rich documentation available</span>
    </li>
  </ul>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-xl mb-4">
  <mdi-help-circle class="text-orange-500" />
  Q: Team adoption strategy?
</h2>

<div class="bg-orange-50 p-4 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-orange-700 mb-2">
    <mdi-rocket-launch class="text-orange-600" />
    A: Start small recommended
  </h3>
  <ul class="space-y-2">
    <li class="flex items-center gap-2">
      <mdi-account class="text-orange-600" />
      <span>Individual trial first</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-folder-outline class="text-orange-600" />
      <span>Small project pilots</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-share-variant class="text-orange-600" />
      <span>Share success stories</span>
    </li>
  </ul>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-wall class="text-green-600 text-3xl" />
    <span class="font-bold">The adoption barrier is low.</span>
    <mdi-heart class="text-blue-600 text-3xl" />
  </div>
</div>

<!--
【Slide 50】
More answers to questions.
Learning curve? If you know VSCode, you're ready today.
Team adoption? Start individually, create success stories.
The adoption barrier is really low. All you need is courage.
-->

---

# For Those Hesitating

<div class="text-center mb-8">

<h2 class="flex items-center justify-center gap-2 text-2xl">
  <mdi-thought-bubble class="text-blue-500" />
  Common Fears vs Reality
</h2>

</div>

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <th class="p-3 text-left rounded-tl-lg">
          <div class="flex items-center gap-2">
            <mdi-alert-circle class="text-xl" />
            Fear
          </div>
        </th>
        <th class="p-3 text-left rounded-tr-lg">
          <div class="flex items-center gap-2">
            <mdi-lightbulb class="text-xl" />
            Reality
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-robot-angry class="text-red-600" />
            AI will take my job
          </div>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-handshake class="text-green-600" />
            AI helps you do higher-value work
          </div>
        </td>
      </tr>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-emoticon-confused class="text-orange-600" />
            Too complex to learn
          </div>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-calendar-week class="text-green-600" />
            Comfortable in 1 week, essential in 1 month
          </div>
        </td>
      </tr>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-currency-usd-off class="text-yellow-600" />
            Too expensive
          </div>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-trending-up class="text-green-600" />
            Productivity gains = instant ROI
          </div>
        </td>
      </tr>
      <tr class="hover:bg-gray-50 transition-colors">
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-account-remove class="text-purple-600" />
            Team resistance
          </div>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-account-heart class="text-green-600" />
            Users become advocates
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-eye class="text-blue-600 text-3xl" />
    <span class="font-bold">Experience first, fear later. Experience brings understanding.</span>
    <mdi-sparkles class="text-purple-600 text-3xl" />
  </div>
</div>

<!--
【Slide 51】
I understand the hesitation.
But most fears are unfounded.
AI won't take your job. It helps you do higher-value work.
Too complex? You'll be comfortable in a week.
Just experience it first.
-->

---

# Keys to Successful Cursor Adoption

<div class="grid grid-cols-3 gap-6">
<div>

<div class="text-center">
  <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <mdi-seedling class="text-green-600 text-4xl" />
  </div>
  <h3 class="text-xl font-bold mb-3">Phase 1: Individual</h3>
</div>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-account class="text-green-600" />
    <span>Try with personal projects</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-star class="text-green-600" />
    <span>Build small wins</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-school class="text-green-600" />
    <span>Master the basics</span>
  </div>
</div>

</div>
<div>

<div class="text-center">
  <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <mdi-sprout class="text-blue-600 text-4xl" />
  </div>
  <h3 class="text-xl font-bold mb-3">Phase 2: Team</h3>
</div>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-share-variant class="text-blue-600" />
    <span>Share success stories</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-presentation class="text-blue-600" />
    <span>Host workshops</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-lifebuoy class="text-blue-600" />
    <span>Build support system</span>
  </div>
</div>

</div>
<div>

<div class="text-center">
  <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <mdi-tree class="text-purple-600 text-4xl" />
  </div>
  <h3 class="text-xl font-bold mb-3">Phase 3: Organization</h3>
</div>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-presentation-play class="text-purple-600" />
    <span>Executive presentation</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-cash class="text-purple-600" />
    <span>Secure budget</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-office-building class="text-purple-600" />
    <span>Company-wide rollout</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-tortoise class="text-yellow-600 text-3xl" />
    <span class="font-bold">Slow is smooth, smooth is fast. Gradual adoption is the fastest path.</span>
    <mdi-flag-checkered class="text-orange-600 text-3xl" />
  </div>
</div>

<!--
【Slide 52】
Here's the secret to successful adoption.
Start individually. Create small wins.
Then expand to your team. Host workshops, build support.
Finally, scale to the organization. This sequence matters.
Slow is smooth, smooth is fast. This is the fastest path.
-->

---

# To the Global Engineering Community

<div class="text-center mb-8">

<h2 class="flex items-center justify-center gap-2 text-2xl">
  <mdi-earth class="text-2xl" />
  Let's Transform Development Culture Together
</h2>

</div>

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-hand-heart class="text-red-500" />
  What We Can Do
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
    <mdi-share-variant class="text-blue-600 text-xl" />
    <div>
      <div class="font-bold">Knowledge Sharing</div>
      <div class="text-sm text-gray-600">Blogs, meetups, OSS contributions</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <mdi-account-group class="text-green-600 text-xl" />
    <div>
      <div class="font-bold">Community Building</div>
      <div class="text-sm text-gray-600">Local Cursor groups, regional meetups</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-trending-up class="text-purple-600 text-xl" />
    <div>
      <div class="font-bold">Corporate Culture Change</div>
      <div class="text-sm text-gray-600">Bottom-up transformation</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
    <mdi-school class="text-orange-600 text-xl" />
    <div>
      <div class="font-bold">Next Generation Training</div>
      <div class="text-sm text-gray-600">Students & junior developers</div>
    </div>
  </div>
</div>

</div>
<div>

<div class="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
  <div class="text-center">
    <mdi-flag class="text-red-600 text-6xl mb-4" />
    <h3 class="text-2xl font-bold text-red-700 mb-4">Goal</h3>
    <div class="text-lg font-semibold text-gray-700">
      Make engineering<br>
      world-class everywhere
    </div>
  </div>
</div>

</div>
</div>

<!--
【Slide 53】
To the global engineering community:
Let's transform development culture together.
Share knowledge, build communities, change corporate culture.
Train the next generation.
Make engineering world-class everywhere.
-->

---

# Global Cursor Community

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-web class="text-blue-500" />
  Online Activities
</h2>

<div class="space-y-3">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-web class="text-blue-600" />
      <span class="font-bold">Cursor-Japan.org Community</span>
    </div>
    <div class="text-sm text-gray-600">Japanese Resource Hub</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <simple-icons-discord class="text-purple-600" />
      <span class="font-bold">MCPVerified.com</span>
    </div>
    <div class="text-sm text-gray-600">MCP Curated Info</div>
  </div>
  
  <div class="bg-red-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-youtube class="text-red-600" />
      <span class="font-bold">YouTube</span>
    </div>
    <div class="text-sm text-gray-600">Tutorial videos</div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-file-document class="text-green-600" />
      <span class="font-bold">Dev.to/Medium</span>
    </div>
    <div class="text-sm text-gray-600">Technical articles</div>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-handshake class="text-green-500" />
  Offline Activities
</h2>

<div class="space-y-3">
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-calendar-month class="text-orange-600" />
      <span class="font-bold">Monthly Meetups</span>
    </div>
    <div class="text-sm text-gray-600">Tokyo, Osaka, etc</div>
  </div>
  
  <div class="bg-indigo-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-hand-back-right class="text-indigo-600" />
      <span class="font-bold">Hands-on Workshops</span>
    </div>
    <div class="text-sm text-gray-600">Beginner-friendly sessions</div>
  </div>
  
  <div class="bg-cyan-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-office-building class="text-cyan-600" />
      <span class="font-bold">Corporate Visits</span>
    </div>
    <div class="text-sm text-gray-600">Implementation support</div>
  </div>
  
  <div class="bg-pink-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-microphone class="text-pink-600" />
      <span class="font-bold">Conferences</span>
    </div>
    <div class="text-sm text-gray-600">Bi-annual major events</div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-account-group class="text-purple-600 text-3xl" />
    <span class="font-bold">Community power breaks adoption barriers.</span>
    <mdi-wall class="text-pink-600 text-3xl" />
  </div>
</div>

<!--
【Slide 54】
Let me introduce the global Cursor community.
Online: resource hubs, 24/7 support.
Offline: monthly meetups in major cities.
Beginner workshops are abundant.
You're not alone. Let's learn and grow together.
-->

---

# Future Vision: Development in 2030

<div class="text-center mb-8">

<h2 class="flex items-center justify-center gap-2 text-2xl">
  <mdi-crystal-ball class="text-purple-500" />
  The World in 5 Years
</h2>

</div>

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-trending-up class="text-blue-500" />
  Predicted Changes
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
    <mdi-account-multiple class="text-blue-600 text-xl" />
    <div>
      <div class="font-bold">Everyone AI pair programs</div>
      <div class="text-sm text-gray-600">Including non-engineers</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <mdi-server-network class="text-green-600 text-xl" />
    <div>
      <div class="font-bold">MCP ecosystem</div>
      <div class="text-sm text-gray-600">Tens of thousands of MCP servers</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-briefcase-plus class="text-purple-600 text-xl" />
    <div>
      <div class="font-bold">New job titles</div>
      <div class="text-sm text-gray-600">AI Prompt Engineer, MCP Developer</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
    <mdi-rocket-launch class="text-orange-600 text-xl" />
    <div>
      <div class="font-bold">Productivity</div>
      <div class="text-sm text-gray-600">10-20x current levels</div>
    </div>
  </div>
</div>

</div>
<div>

<div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
  <div class="text-center">
    <mdi-rocket class="text-purple-600 text-6xl mb-4" />
    <h3 class="text-2xl font-bold text-purple-700 mb-4">The future has already begun</h3>
    <div class="text-lg font-semibold text-gray-700 mb-4">
      Join now or never
    </div>
    <div class="bg-white/50 p-4 rounded-lg">
      <mdi-clock-alert class="text-red-600 text-3xl mb-2" />
      <div class="text-red-700 font-bold">
        Act now or be left behind forever
      </div>
    </div>
  </div>
</div>

</div>
</div>

<!--
【Slide 55】
Imagine the future 5 years from now.
Everyone pair programs with AI. Even non-engineers.
Tens of thousands of MCP servers automating everything.
New job titles emerge. Productivity 10x+ current levels.
This future has already begun. Join now.
-->

---

# Three Steps to Take Action

<div class="text-center mb-8">

<h2 class="flex items-center justify-center gap-2 text-2xl">
  <mdi-rocket-launch class="text-purple-500" />
  What You Can Start Today
</h2>

</div>

<div class="grid grid-cols-3 gap-6">
<div>

<div class="text-center">
  <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <span class="text-blue-600 text-2xl font-bold">1</span>
  </div>
  <h3 class="text-xl font-bold mb-3 flex items-center justify-center gap-2">
    <mdi-calendar-today class="text-blue-500" />
    Today
  </h3>
</div>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-download class="text-blue-600" />
    <span>Download Cursor</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-gift class="text-blue-600" />
    <span>Start free trial</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-folder-outline class="text-blue-600" />
    <span>Try simple project</span>
  </div>
</div>

</div>
<div>

<div class="text-center">
  <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <span class="text-green-600 text-2xl font-bold">2</span>
  </div>
  <h3 class="text-xl font-bold mb-3 flex items-center justify-center gap-2">
    <mdi-calendar-week class="text-green-500" />
    This Week
  </h3>
</div>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-account-group class="text-green-600" />
    <span>Join Cursor community</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-server-network class="text-green-600" />
    <span>Try one MCP server</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-share-variant class="text-green-600" />
    <span>Share your success</span>
  </div>
</div>

</div>
<div>

<div class="text-center">
  <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <span class="text-purple-600 text-2xl font-bold">3</span>
  </div>
  <h3 class="text-xl font-bold mb-3 flex items-center justify-center gap-2">
    <mdi-calendar-month class="text-purple-500" />
    This Month
  </h3>
</div>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-account-multiple class="text-purple-600" />
    <span>Introduce to team</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-presentation class="text-purple-600" />
    <span>Plan internal workshop</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-file-document class="text-purple-600" />
    <span>Create adoption proposal</span>
  </div>
</div>

</div>
</div>

<!--
【Slide 56】
Here's your concrete action plan.
Today: Download Cursor, start free trial.
This week: Join community, try MCP.
This month: Introduce to team, host workshop.
Start with small steps.
-->

---

# My Key Messages

<div class="space-y-4">

<div class="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
  <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
    <span class="text-white font-bold text-lg">1</span>
  </div>
  <div class="flex-grow">
    <span class="text-lg font-bold">Bottom-up tool adoption needs "viral" strategy</span>
    <span class="text-gray-600 ml-2 text-sm">(attack from outside!)</span>
  </div>
</div>

<div class="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
  <div class="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
    <span class="text-white font-bold text-lg">2</span>
  </div>
  <div class="flex-grow">
    <span class="text-lg font-bold">Future company value = "MCP server count"</span>
  </div>
</div>

<div class="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
  <div class="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
    <span class="text-white font-bold text-lg">3</span>
  </div>
  <div class="flex-grow">
    <span class="text-lg font-bold">The ultimate AI dev stack exists</span>
    <span class="text-gray-600 ml-2 text-sm">(Convex rocks!)</span>
  </div>
</div>

<div class="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
  <div class="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
    <span class="text-white font-bold text-lg">4</span>
  </div>
  <div class="flex-grow">
    <span class="text-lg font-bold">Don't trust LLM knowledge. Give it "latest textbooks (MCP)"</span>
  </div>
</div>

<div class="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border-2 border-red-300">
  <div class="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
    <span class="text-white font-bold text-lg">5</span>
  </div>
  <div class="flex-grow">
    <span class="text-lg font-bold">CONTEXT IS KING.</span>
    <span class="text-gray-600 ml-2 text-sm">(Never leave Cursor!)</span>
  </div>
</div>

</div>

<!--
【Slide 57】
Here are today's key messages:
1. Viral strategy for successful tool adoption
2. MCP server count as the new company valuation metric
3. Convex-centered ultimate stack for maximum efficiency
4. Give LLMs the latest textbooks (MCP)
5. Never lose context by staying in Cursor
Practice these and your productivity will 10x. Guaranteed.
-->

---

# Announcements

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-web class="text-blue-500" />
  New Projects
</h3>

<div class="space-y-4">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-check-decagram class="text-blue-600" />
      <span class="font-bold">MCPVerified.com</span>
    </div>
    <ul class="text-sm text-gray-600 space-y-1">
      <li>• MCP information curation site</li>
      <li>• Best practices aggregation</li>
      <li class="font-bold text-blue-600">• Contributors wanted!</li>
    </ul>
  </div>
  
  <div class="bg-red-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-earth class="text-red-600" />
      <span class="font-bold">Cursor-Japan.org Community</span>
    </div>
    <ul class="text-sm text-gray-600 space-y-1">
      <li>• Documentation</li>
      <li>• Event information</li>
      <li class="font-bold text-red-600">• Contributors wanted!</li>
    </ul>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-calendar-star class="text-purple-500" />
  Event Information
</h3>

<div class="space-y-4">
  
  
  <div class="bg-yellow-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-star class="text-yellow-600" />
      <span class="font-bold">Global MCP Conference</span>
    </div>
    <ul class="text-sm text-gray-600 space-y-1">
      <li>• Big names from tech giants!</li>
      <li>• Details coming soon</li>
    </ul>
  </div>
</div>

</div>
</div>

<div class="text-center mt-8">

<div class="p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
  <h3 class="flex items-center justify-center gap-2 text-xl mb-2">
    <mdi-briefcase class="text-green-600" />
    We're Hiring!
  </h3>
  <div class="flex items-center justify-center gap-2">
    <span>Join us building the future of development</span>
    <mdi-arrow-right class="text-blue-600" />
    <span class="text-blue-600 font-bold">careers@cyberagent.ai</span>
  </div>
</div>

</div>

<!--
【Slide 58】
Some announcements.
MCPVerified.com launched - join the global MCP community.
Summer Tech Summit in SF - MCP deep dive.
And this summer... major tech leaders joining us!
Interested? Let's connect!
-->

---
layout: cover
background: /images/lastcover.png
class: text-center text-white
---

# Thank You!

<div class="text-2xl mt-8">

<h2 class="flex items-center justify-center gap-2 text-white">
  <mdi-rocket-launch class="text-white" />
  Let's build the future with Cursor and MCP together!
  <mdi-heart class="text-white" />
</h2>

</div>

<div class="mt-12">

<h3 class="flex items-center justify-center gap-2 text-xl mb-4 text-white">
  <mdi-account-network class="text-white" />
  Connect with me
</h3>

<div class="flex items-center justify-center gap-6">
  <div class="flex items-center gap-2">
    <mdi-twitter class="text-white text-2xl" />
    <span class="text-lg text-white">@gunta85</span>
  </div>
</div>

</div>

<div class="mt-8 p-6 bg-black/30 backdrop-blur-sm rounded-xl inline-block">
  <div class="flex items-center gap-3">
    <mdi-sparkles class="text-white text-3xl" />
    <span class="text-lg font-semibold text-white">The future starts now, here with us</span>
    <mdi-flag class="text-white text-3xl" />
  </div>
</div>

<!--
【Slide 60】
Thank you for your attention!
Cursor isn't just an editor.
It's a revolutionary tool that changes how we work and live.
Let's build this new world together!
For questions, find me at the networking session.
Thank you so much for today!
-->