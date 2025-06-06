---
theme: default
background: /images/cover.png
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## 大手企業のAIツール導入の壁を越えて
  サイバーエージェントのCursor活用戦略

  Cursor Meetup Tokyo 2025
drawings:
  persist: false
transition: slide-left
title: 大手企業のAIツール導入の壁を越えて
mdc: true
---

# 大手企業のAIツール導入の壁を越えて
## サイバーエージェントのCursor活用戦略

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
    株式会社サイバーエージェント
  </div>
</div>

<!--
【スライド1】
みなさん、こんばんは！今夜は5000人を超える方々にお集まりいただいて、本当にありがとうございます。
今から15分間、みなさんと一緒に、AIコーディングの未来について考えていきたいと思います。
私たちサイバーエージェントがどうやってCursorを導入し、どんな挑戦をしてきたか、そして何を学んだか。
エンジニアの方も、デザイナーの方も、CEOの方も、みんなで一緒に未来を作っていきましょう！
-->

---

# なぜ今、私たちは AIコーディングに移行するのか？

<div class="grid grid-cols-2 gap-8">
<div>

<div class="flex items-center gap-2 mb-4">
  <mdi-earth class="text-blue-400 text-2xl" />
  <h2 class="text-2xl font-bold m-0">世界のトレンド</h2>
</div>

<div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
  <h4 class="flex items-center gap-2 text-lg">
    <mdi-trending-up class="text-green-500" />
    AIコーディング関連のキーワード検索推移
  </h4>
  <div class="space-y-2 mt-4">
    <div class="flex items-center justify-between">
      <span>2024年11月</span>
      <div class="flex items-center gap-2">
        <div class="w-32 bg-gray-200 rounded-full h-2">
          <div class="bg-blue-400 h-2 rounded-full" style="width: 45%"></div>
        </div>
        <span class="text-sm">45</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <span>2025年1月</span>
      <div class="flex items-center gap-2">
        <div class="w-32 bg-gray-200 rounded-full h-2">
          <div class="bg-blue-500 h-2 rounded-full" style="width: 68%"></div>
        </div>
        <span class="text-sm">68</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <span>2025年3月</span>
      <div class="flex items-center gap-2">
        <div class="w-32 bg-gray-200 rounded-full h-2">
          <div class="bg-purple-500 h-2 rounded-full" style="width: 92%"></div>
        </div>
        <span class="text-sm">92</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <span>2025年4月</span>
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
  <h2 class="text-2xl font-bold m-0">日本の現状</h2>
</div>

<div class="space-y-4">
  <div class="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg flex items-center gap-3">
    <mdi-fire class="text-red-500 text-3xl" />
    <div>
      <div class="font-bold">Zennトレンドの50%がAI関連</div>
      <div class="text-sm text-gray-600">(2025年4月)</div>
    </div>
  </div>
  
  <div class="bg-yellow-50 p-4 rounded-lg flex items-center gap-3">
    <mdi-account-group class="text-yellow-600 text-3xl" />
    <div class="font-semibold">エンジニアコミュニティの急速な変化</div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg flex items-center gap-3">
    <mdi-rocket-launch class="text-green-600 text-3xl" />
    <div class="font-semibold">従来の開発手法からの大転換期</div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
  <mdi-format-quote-open class="text-3xl text-purple-400" />
  <span class="text-xl font-bold">もはやAIを使わない開発は、電卓を使わない会計と同じ</span>
  <mdi-format-quote-close class="text-3xl text-purple-400" />
</div>

<!--
【スライド2】
まず、なぜ今AIコーディングなのか。
Google Trendsを見てください。この半年で検索数が2倍以上に増えています。
特に3月から急上昇。これ、偶然じゃないんです。
日本でも、Zennのトレンドの半分がAI関連。
もう無視できない流れなんです。
-->

---

# AIコードエディタ導入企業の最新事例

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <th class="p-3 text-left rounded-tl-lg">
          <div class="flex items-center gap-2">
            <mdi-office-building class="text-xl" />
            企業名
          </div>
        </th>
        <th class="p-3 text-left">
          <div class="flex items-center gap-2">
            <mdi-tools class="text-xl" />
            導入ツール
          </div>
        </th>
        <th class="p-3 text-left">
          <div class="flex items-center gap-2">
            <mdi-chart-line class="text-xl" />
            導入効果
          </div>
        </th>
        <th class="p-3 text-left rounded-tr-lg">
          <div class="flex items-center gap-2">
            <mdi-cash-multiple class="text-xl" />
            投資対効果
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">株式会社ココナラ</td>
        <td class="p-3">
          <span class="bg-purple-100 text-purple-700 px-2 py-1 rounded">Cursor Business</span>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-speedometer class="text-green-500" />
            UI実装速度<span class="font-bold text-green-600">10倍</span>
          </div>
        </td>
        <td class="p-3">月額$40で年間数千万円相当の工数削減</td>
      </tr>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">Ubie株式会社</td>
        <td class="p-3">
          <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">複数AI開発ツール</span>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-emoticon-happy class="text-yellow-500" />
            エンジニア満足度<span class="font-bold text-yellow-600">85%向上</span>
          </div>
        </td>
        <td class="p-3">離職率低下による採用コスト削減</td>
      </tr>
      <tr class="hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">某メガベンチャー</td>
        <td class="p-3">
          <span class="bg-green-100 text-green-700 px-2 py-1 rounded">Cursor + MCP</span>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-clock-fast class="text-blue-500" />
            開発サイクル<span class="font-bold text-blue-600">60%短縮</span>
          </div>
        </td>
        <td class="p-3">新機能リリース頻度3倍</td>
      </tr>
    </tbody>
  </table>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-currency-usd class="text-green-600 text-3xl" />
    <span class="font-bold">月額$40の投資で、年収1000万円のエンジニアの生産性が10倍になる</span>
    <mdi-rocket class="text-blue-600 text-3xl" />
  </div>
</div>

<!--
【スライド3】
実際の導入事例を見てみましょう。
ココナラさんは、FigmaからCursorで直接UIを生成して、実装速度が10倍に。
10倍ですよ！今まで1週間かかってたものが、半日で終わる。
Ubieさんは、エンジニアの満足度が85%も向上。
これ、すごく大事で、優秀なエンジニアが辞めなくなるんです。
採用コスト考えたら、とんでもない投資対効果です。
-->

---

# コーディング時間の劇的な変化

<div class="text-center">


<div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">

```mermaid
graph TD
    A["500件のGitHub Issue"] --> B["人間が解決可能と判定"]
    B --> C["AI エージェント実行"]
    C --> D["327件を自動解決"]
    D --> E["成功率: 65.40%"]
    
    style A fill:#e0e7ff,font-size:10px
    style B fill:#ddd6fe,font-size:10px
    style C fill:#c7d2fe,font-size:10px
    style D fill:#a5f3fc,font-size:10px
    style E fill:#6ee7b7,font-size:10px
```

</div>

</div>

<br>

<div class="flex items-center justify-center gap-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
  <mdi-timer-sand class="text-4xl text-purple-600" />
  <span class="text-xl font-bold">3分の2のタスクをAIに任せられる = コーディング時間が1/3に</span>
  <mdi-flash class="text-4xl text-pink-600" />
</div>

<!--
【スライド4】
これ、本当にすごい数字なんです。
GitHubのIssueを500件集めて、AIに解かせたら65%以上解決できた。
つまり、日常的なバグ修正や機能追加の3分の2は、もうAIができるんです。
あなたは残りの1/3の、本当に創造的な仕事に集中できる。
-->

---
layout: intro
---

# 自己紹介

<div class="text-center mb-8">
  <h2 class="text-3xl font-bold">
    <ruby>Günther<rt>グンタ</rt></ruby> <ruby>Brunner<rt>ブルンナー</rt></ruby>
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
  現在の役職
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
    <mdi-cog class="text-orange-600" />
    <span>CTO統括室</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
    <mdi-rocket-launch class="text-teal-600" />
    <span class="font-bold">Developer Productivity室</span>
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
【スライド5】
簡単に自己紹介させてください。
グンタ・ブルンナーと申します。サイバーエージェントに2012年から所属していまして、
現在はCTO統括室のDeveloper Productivity室で働いています。
AIやUX、デザイン、パフォーマンスなどに興味があって、
最近は個人的にAIアートも始めました。
-->

---

# 12年間のCAキャリア

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-xl mb-4">
  <mdi-newspaper class="text-purple-600" />
  メディア部門
</h2>
<ul class="space-y-2 list-disc list-inside">
  <li>サービス精神の醸成</li>
  <li>UXデザインスキルの向上</li>
  <li>ユーザー中心の思考</li>
</ul>

<h2 class="flex items-center gap-2 text-xl mb-4 mt-6">
  <mdi-gamepad-variant class="text-orange-600" />
  ゲーム部門
</h2>
<ul class="space-y-2 list-disc list-inside">
  <li>フロントエンド技術の極限追求</li>
  <li>パフォーマンス最適化</li>
  <li>インタラクティブ表現の探求</li>
</ul>

</div>
<div>

<h2 class="flex items-center gap-2 text-xl mb-4">
  <mdi-chart-line class="text-green-600" />
  横軸部門
</h2>
<ul class="space-y-2 list-disc list-inside">
  <li>SLO（Service Level Objectives）</li>
  <li class="font-bold text-green-700">開発生産性の追求 ⬅️ 🚀（今ここ）</li>
  <li>チーム横断的な改善活動</li>
</ul>

<h2 class="flex items-center gap-2 text-xl mb-4 mt-6">
  <mdi-robot class="text-indigo-600" />
  AI部門
</h2>
<ul class="space-y-2 list-disc list-inside">
  <li>バックエンド技術の習得</li>
  <li>Figmaの習得</li>
  <li>生成AIの実践的活用</li>
  <li>最新技術のキャッチアップ</li>
</ul>

</div>
</div>


<!--
【スライド6】
12年間のサイバーエージェントでのキャリアを紹介します。
メディア部門ではUXデザインを、ゲーム部門ではフロントエンド技術を極限まで追求。
横軸部門では開発生産性を、AI部門では最新技術をキャッチアップしてきました。
現在はこれらの経験を活かして、フルスタックAIエンジニア・デザイナーとして活動しています。
-->

---

# 私のミッション

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-target class="text-indigo-500" />
  個人的な目標
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
    <mdi-rocket class="text-indigo-600" />
    <span>日本の開発文化を最先端に</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-account-group class="text-purple-600" />
    <span>開発者体験の向上</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-lightbulb class="text-blue-600" />
    <span>新技術の普及推進</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-earth class="text-green-600" />
    <span>グローバル基準の導入</span>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-wrench class="text-orange-500" />
  具体的な活動
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
    <mdi-robot class="text-orange-600" />
    <span>AIツールの社内導入推進</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
    <mdi-school class="text-red-600" />
    <span>開発者教育・啓蒙活動</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
    <mdi-account-group class="text-yellow-600" />
    <span>コミュニティ活動</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
    <mdi-trending-up class="text-pink-600" />
    <span>生産性向上の実証</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-heart class="text-purple-600 text-3xl" />
    <span class="font-bold">技術で世界をもっと良くするためここにいる</span>
  </div>
</div>

<!--
【スライド7】
私のミッションをお話しします。
個人的な目標として、日本の開発文化を世界最先端にしたい。
具体的には、AIツールの導入推進、開発者教育、コミュニティ活動を通じて、
開発者の生産性と幸福度を向上させることです。
技術で世界をもっと良くしたい、これが私の信念です。
-->

---

# これまで推進してきたツール移行

<div class="text-center mb-6">
  <h2 class="flex items-center justify-center gap-2 text-2xl">
    <mdi-swap-horizontal class="text-indigo-500" />
    変革の歴史
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
    <span class="text-sm font-bold text-purple-600">(今ここ！)</span>
  </div>
</div>



<!--
【スライド6】
これまでの実績を見てください。SlackもGitHubも私が広めました。
Notionへの移行も成功。今Linearも推進中。
でも今回のCursor導入は、過去最大のチャレンジです。
なぜなら、これはただのツール変更じゃない。働き方の革命だから。
-->

---

# なぜ私がCursorに2年前から注目していたか

<div class="timeline">

<div class="flex items-start gap-4 mb-6">
  <div class="flex-shrink-0">
    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
      <mdi-calendar class="text-white text-xl" />
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">2022年末</h3>
    <ul class="space-y-2 mt-2">
      <li class="flex items-center gap-2">
        <mdi-chevron-right class="text-blue-400" />
        OpenAI が IDEに投資した
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
    <h3 class="font-bold text-lg">2023年初頭</h3>
    <ul class="space-y-2 mt-2">
      <li class="flex items-center gap-2 font-bold text-purple-600">
        <mdi-star class="text-purple-500" />
        Cursorの初期バージョンに出会う
      </li>
      <li class="flex items-center gap-2">
        <mdi-format-quote-open class="text-purple-400" />
        <span class="italic">"これは革命だ"</span> と直感
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
    <h3 class="font-bold text-lg">2023年中頃</h3>
    <ul class="space-y-2 mt-2">
      <li class="flex items-center gap-2">
        <mdi-chevron-right class="text-green-400" />
        毎日使い始める
      </li>
      <li class="flex items-center gap-2">
        <mdi-chevron-right class="text-green-400" />
        生産性が明らかに向上
      </li>
    </ul>
  </div>
</div>

</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-eye-outline class="text-3xl text-purple-600" />
    <span class="text-xl font-bold">優れたツールは、使った瞬間に未来が見える</span>
    <mdi-sparkles class="text-3xl text-blue-600" />
  </div>
</div>

<!--
【スライド6】
なぜ私が2年も前からCursorを使っているか。
2022年末、OpenAIがCodex APIを公開した時、私は確信しました。
コーディングの未来が変わると。
そしてCursorに出会った瞬間、「これだ！」と。
使った瞬間に、これが未来のスタンダードになると確信したんです。
-->

---
layout: center
---

# Part 1: サイバーエージェントという特殊な企業

<div class="text-center">

<div class="flex items-center justify-center gap-3 text-5xl mb-6">
  <mdi-office-building class="text-blue-500" />
  <mdi-account-group class="text-purple-500" />
</div>

<h2 class="text-3xl mb-2">連結従業員数 1万人以上</h2>
<h3 class="text-2xl text-gray-600 mb-8">エンジニア約3,000人</h3>

<div class="p-6 bg-gradient-to-r from-green-100 to-green-100 rounded-xl inline-block">
  <div class="flex items-center gap-3 text-2xl">
    <mdi-hand-peace class="text-green-600" />
    <span class="font-bold">"自由と自己責任"</span>
    <span>- それが我々の文化</span>
    <mdi-fire class="text-green-600" />
  </div>
</div>

</div>

<!--
【スライド7】
では本題に入りましょう。
まず、サイバーエージェントがどんな会社か知ってもらう必要があります。
1万人以上の社員、3000人のエンジニア。
でも、普通の大企業とは全然違います。
「自由と自己責任」これが全ての基本です。
-->

---

# 数字で見るサイバーエージェント

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-chart-pie class="text-blue-500" />
  組織規模
</h2>

<div class="space-y-4">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-account-multiple class="text-blue-600" />
        <span class="font-semibold">従業員数</span>
      </div>
      <span class="text-xl font-bold text-blue-700">10,000人以上</span>
    </div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-code-braces class="text-purple-600" />
        <span class="font-semibold">エンジニア</span>
      </div>
      <span class="text-xl font-bold text-purple-700">約3,000人</span>
    </div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-domain class="text-green-600" />
        <span class="font-semibold">子会社数</span>
      </div>
      <span class="text-xl font-bold text-green-700">100社以上</span>
    </div>
  </div>
  
  <div class="bg-pink-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-slack class="text-pink-600" />
        <span class="font-semibold">Slackワークスペース</span>
      </div>
      <span class="text-xl font-bold text-pink-700">100個以上</span>
    </div>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-palette-swatch class="text-orange-500" />
  技術の多様性
</h2>

<div class="space-y-4">
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-language-python class="text-orange-600" />
        <span class="font-semibold">使用言語</span>
      </div>
      <span class="text-xl font-bold text-orange-700">20種類以上</span>
    </div>
  </div>
  
  <div class="bg-red-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-view-dashboard class="text-red-600" />
        <span class="font-semibold">フレームワーク</span>
      </div>
      <span class="text-xl font-bold text-red-700">50種類以上</span>
    </div>
  </div>
  
  <div class="bg-indigo-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-cloud class="text-indigo-600" />
        <span class="font-semibold">クラウドプロバイダ</span>
      </div>
      <span class="text-xl font-bold text-indigo-700">AWS, GCP, 全て</span>
    </div>
  </div>
  
  <div class="bg-yellow-50 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <mdi-cog class="text-yellow-600" />
        <span class="font-semibold">開発手法</span>
      </div>
      <span class="text-xl font-bold text-yellow-700">チームごとに異なる</span>
    </div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-infinity class="text-3xl text-purple-600" />
    <span class="text-xl font-bold">統一なんて不可能。だからこそ面白い。</span>
    <mdi-creation class="text-3xl text-pink-600" />
  </div>
</div>

<!--
【スライド8】
数字で見ると、この会社のカオスさがわかります。
100以上の子会社、100以上のSlackワークスペース。
使ってる技術も言語もバラバラ。
普通の会社なら「統一しましょう」って言うけど、うちは違う。
このカオスこそが、イノベーションの源泉なんです。
-->

---

# サイバーエージェントの組織文化

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-office-building class="text-blue-500" />
  数百の子会社
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-crown class="text-blue-600 text-xl" />
    <span>独立した経営権限</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-slack class="text-blue-600 text-xl" />
    <span>異なるSlackワークスペース</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-puzzle class="text-blue-600 text-xl" />
    <span>独自の技術選定</span>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-rocket-launch class="text-purple-500" />
  ボトムアップ文化
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-close-circle class="text-purple-600 text-xl" />
    <span>トップダウンの指示なし</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-account-heart class="text-purple-600 text-xl" />
    <span>各チームが自主的に選択</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-300">
    <mdi-fire class="text-orange-600 text-xl" />
    <span class="font-bold text-orange-700">"勝手に学び、勝手に挑戦、勝手に失敗"</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-2xl">
    <mdi-city class="text-indigo-600 text-3xl" />
    <span class="font-bold">大企業の中にスタートアップが数百個ある</span>
    <mdi-rocket class="text-purple-600 text-3xl" />
  </div>
</div>

<!--
【スライド9】
これがうちの文化です。
各子会社は完全に独立していて、CEOが技術選定まで決められる。
「勝手に学び、勝手に挑戦、勝手に失敗」これが合言葉。
大企業なのに、スタートアップが数百個入ってるような会社なんです。
-->

---

# この文化の素晴らしさと課題

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-star class="text-yellow-500" />
  素晴らしさ
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
    <mdi-lightbulb-on class="text-yellow-600 text-xl" />
    <span>イノベーションが生まれやすい</span>
  </div>
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
    <mdi-target class="text-green-600 text-xl" />
    <span>各チームが最適な技術を選択</span>
  </div>
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
    <mdi-shield-off class="text-blue-600 text-xl" />
    <span>失敗を恐れない文化</span>
  </div>
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
    <mdi-flash class="text-purple-600 text-xl" />
    <span>スピード感のある意思決定</span>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-puzzle-outline class="text-red-500" />
  課題
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg">
    <mdi-link-variant-off class="text-red-600 text-xl" />
    <span>全社的なツール導入が困難</span>
  </div>
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
    <mdi-share-variant class="text-orange-600 text-xl" />
    <span>情報共有の分断</span>
  </div>
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg">
    <mdi-arrow-expand-all class="text-gray-600 text-xl" />
    <span>ベストプラクティスの横展開が難しい</span>
  </div>
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border-2 border-indigo-300">
    <mdi-scatter-plot class="text-indigo-600 text-xl" />
    <span class="font-bold text-indigo-700">"みんなバラバラ"</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-scale-balance class="text-3xl text-purple-600" />
    <span class="text-xl font-bold">自由は素晴らしい。でも統一も時には必要。</span>
  </div>
</div>

<!--
【スライド10】
この文化、素晴らしいんですけど、課題もあります。
イノベーションは生まれやすいけど、全社で何か導入するのが本当に大変。
「明日から全員これ使って」なんて言えない。
でも、だからこそ面白い挑戦なんです。
-->

---

# 従来のツール導入アプローチ（失敗例）

<div class="flex justify-center items-center h-full">
<div class="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl w-2/3">

```mermaid
graph TD
    A[<div class='flex items-center gap-2'><i class='mdi mdi-account-tie text-xl'></i> 経営層の決定</div>] --> B[<div class='flex items-center gap-2'><i class='mdi mdi-bullhorn text-xl'></i> 全社通達</div>]
    B --> C[<div class='flex items-center gap-2'><i class='mdi mdi-sitemap text-xl'></i> 各部署への展開</div>]
    C --> D[<div class='flex items-center gap-2'><i class='mdi mdi-account-cancel text-xl text-red-600'></i> 現場の反発</div>]
    D --> E[<div class='flex items-center gap-2'><i class='mdi mdi-file-question-outline text-xl text-orange-600'></i> 形骸化</div>]
    E --> F[<div class='flex items-center gap-2'><i class='mdi mdi-close-circle text-xl text-red-800'></i> 失敗</div>]

    style A fill:#fff1f2
    style B fill:#ffedd5
    style C fill:#fef3c7
    style D fill:#fee2e2
    style E fill:#ffedd5
    style F fill:#fecaca
```
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-alert-circle class="text-red-600 text-3xl" />
    <span class="font-bold">"トップダウンは、うちでは機能しない"</span>
  </div>
</div>

<!--
【スライド11】
普通の会社なら、経営層が決めて、全社通達して、終わり。
でも、うちではこれが全く機能しない。
現場が「なんで？」って反発して、結局誰も使わない。
これまで何度も失敗してきました。
だから、違うアプローチが必要だったんです。
-->

---

# バイラル戦略：ツール導入の唯一の方法

<div class="text-center mb-8">
  <h2 class="flex items-center justify-center gap-2 text-3xl">
    <mdi-virus class="text-purple-500" />
    情報は"感染"させるしかない
  </h2>
</div>

<div class="grid grid-cols-3 gap-8">
  <div class="p-6 bg-blue-50 rounded-lg text-center shadow-lg">
    <h3 class="font-bold text-lg mb-2 flex items-center justify-center gap-2"><mdi-account-group class="text-blue-600 text-2xl" />Step 1</h3>
    <p class="font-semibold text-blue-800">小さなチームで成功</p>
    <ul class="text-sm text-gray-600 list-disc list-inside mt-2 text-left">
      <li>実績を作る</li>
      <li>効果を可視化</li>
    </ul>
  </div>
  <div class="p-6 bg-green-50 rounded-lg text-center shadow-lg">
    <h3 class="font-bold text-lg mb-2 flex items-center justify-center gap-2"><mdi-bullhorn class="text-green-600 text-2xl" />Step 2</h3>
    <p class="font-semibold text-green-800">エバンジェリズム活動</p>
    <ul class="text-sm text-gray-600 list-disc list-inside mt-2 text-left">
      <li>社内勉強会</li>
      <li>Slackでの布教</li>
      <li>成功事例の共有</li>
    </ul>
  </div>
  <div class="p-6 bg-orange-50 rounded-lg text-center shadow-lg">
    <h3 class="font-bold text-lg mb-2 flex items-center justify-center gap-2"><mdi-youtube class="text-orange-600 text-2xl" />Step 3</h3>
    <p class="font-semibold text-orange-800">公開イベントで拡散</p>
    <ul class="text-sm text-gray-600 list-disc list-inside mt-2 text-left">
      <li>YouTubeで配信</li>
      <li>外部からの注目</li>
      <li>内部の関心喚起</li>
    </ul>
  </div>
</div>
<!--
【スライド12】
そこで私が選んだのが、バイラル戦略です。
ウイルスのように、情報を「感染」させる。
まず小さく始めて、成功事例を作る。
それをSlackで共有し、勉強会を開く。
でも、それだけじゃ足りなかった。最後の一手が必要だったんです。
-->

---

# なぜ社内だけでは限界があるのか

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-office-building-cog class="text-red-500" />
  社内の壁
</h2>
<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
    <mdi-wall class="text-red-600 text-xl" />
    <span>子会社間の情報分断</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
    <mdi-file-eye-outline class="text-red-600 text-xl" />
    <span>「他社の事例」扱い</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
    <mdi-lightbulb-off-outline class="text-red-600 text-xl" />
    <span>NIH症候群（Not Invented Here）</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
    <mdi-account-group-outline class="text-red-600 text-xl" />
    <span>内輪の話と思われがち</span>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-earth class="text-blue-500" />
  外部の力
</h2>
<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-scale-balance class="text-blue-600 text-xl" />
    <span>客観的な評価</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-trending-up class="text-blue-600 text-xl" />
    <span>業界トレンドとしての認識</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-weight-lifter class="text-blue-600 text-xl" />
    <span>プレッシャーとモチベーション</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-2 border-blue-300">
    <mdi-shield-star class="text-blue-600 text-xl" />
    <span class="font-bold text-blue-700">"外圧こそ最強の推進力"</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <emojione-flag-for-japan class="text-3xl" />
    <span class="font-bold">"日本人は外圧に弱い。それを利用する。"</span>
  </div>
</div>
<!--
【スライド13】
なぜ社内だけじゃダメなのか。
うちの会社、子会社が多すぎて、他の子会社の事例も「他社事例」扱いなんです。
でも、外部のイベントで話題になると、急に興味を持つ。
日本人の特性ですね。外圧には弱い。
だから、それを利用することにしました。
-->

---

# 私の技術選定基準

<div class="text-center text-3xl mb-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
  <h2 class="flex items-center justify-center gap-3">
    <mdi-calculator-variant-outline class="text-teal-600" />
    TTM (Time to Market) × Trend = 勝利の方程式
  </h2>
</div>

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-blue-50 rounded-lg">
  <h3 class="flex items-center gap-2 text-xl mb-4">
    <mdi-clock-fast class="text-blue-500" />
    TTM重視
  </h3>
  <ul class="space-y-2 list-disc list-inside">
    <li>開発速度の向上</li>
    <li>市場投入までの時間短縮</li>
    <li class="font-bold text-blue-700">"速さは正義"</li>
  </ul>
</div>
<div class="p-6 bg-purple-50 rounded-lg">
  <h3 class="flex items-center gap-2 text-xl mb-4">
    <mdi-chart-line class="text-purple-500" />
    トレンド分析
  </h3>
  <ul class="space-y-2 list-disc list-inside">
    <li>AnthropicがWindsurfを切断</li>
    <li>アンケートでCursorが圧勝</li>
    <li>新機能・新モデルの対応速度</li>
  </ul>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-green-100 to-lime-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-2xl">
    <mdi-trophy-award class="text-green-600 text-3xl" />
    <span class="font-bold">"IDEカテゴリーでは、Cursorに賭ける"</span>
  </div>
</div>
<!--
【スライド14】
私の技術選定基準はシンプルです。
TTM、つまりどれだけ早く市場に出せるか。
そしてトレンド。この掛け算です。
最近、AnthropicがWindsurfへのAPI提供を止めました。
これ、すごく重要なシグナルです。
業界のトップが何を選ぶか、それが答えです。
-->

---

# 最新の業界動向（2025年5月時点）

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
        <th class="p-3 text-left rounded-tl-lg">イベント</th>
        <th class="p-3 text-left">意味</th>
        <th class="p-3 text-left rounded-tr-lg">影響</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b bg-red-50 hover:bg-red-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-vector-link class="text-red-600" /> AnthropicのWindsurf API切断</td>
        <td class="p-3">競合への直接支援停止</td>
        <td class="p-3 font-bold text-red-700">Cursor優位性の確立</td>
      </tr>
      <tr class="border-b bg-green-50 hover:bg-green-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-cash-plus class="text-green-600" /> OpenAIのCursor追加投資</td>
        <td class="p-3">戦略的パートナーシップ強化</td>
        <td class="p-3 font-bold text-green-700">長期的な安定性</td>
      </tr>
      <tr class="border-b bg-yellow-50 hover:bg-yellow-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-google class="text-yellow-600" /> GoogleのIDEプロジェクト中止</td>
        <td class="p-3">独自開発からの撤退</td>
        <td class="p-3 font-bold text-yellow-700">既存プレイヤーへの集約</td>
      </tr>
      <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-microsoft-visual-studio-code class="text-blue-600" /> MicrosoftのVSCode AI統合遅延</td>
        <td class="p-3">内部調整の難航</td>
        <td class="p-3 font-bold text-blue-700">Cursorの先行優位</td>
      </tr>
    </tbody>
  </table>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-chess-king class="text-purple-600 text-3xl" />
    <span class="font-bold">"勝者はすでに決まっている。あとは乗るか乗らないか。"</span>
  </div>
</div>
<!--
【スライド15】
最新の動向を見てください。
AnthropicがWindsurfを切った。OpenAIはCursorに追加投資。
GoogleもMicrosoftも独自のAI IDE開発に苦戦している。
もう勝負は決まってるんです。
あとは、この流れに乗るか、取り残されるか。
-->

---

# 2年間の孤独な戦い

<div class="mt-8 mb-8">
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-cursor-default-outline class="text-purple-600 text-xl" />
    <span>Cursor使用開始（ほぼ一人）</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-gray-100 rounded-lg mt-2">
    <mdi-slack class="text-gray-600 text-xl" />
    <span>社内Slackチャンネル作成</span>
    <mdi-arrow-right />
    <mdi-emoticon-sad class="text-gray-600 text-xl" />
    <span class="font-bold text-gray-700">反応なし...</span>
  </div>
</div>

<div class="mb-8">
  <h3 class="flex items-center gap-3 text-2xl mb-6">
    <mdi-calendar-range class="text-gray-500" />
    2024年前半
  </h3>
  <div class="space-y-3 ml-8">
    <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
      <mdi-microphone class="text-green-600 text-xl" />
      <span>社内イベントで登壇</span>
    </div>
    <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
      <mdi-bullhorn class="text-orange-600 text-xl" />
      <span>布教活動継続</span>
    </div>
    <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
      <mdi-emoticon-cry class="text-red-600 text-xl" />
      <span class="font-bold text-red-700">まだほとんど使われず...</span>
    </div>
  </div>
</div>

<div>
  <h3 class="flex items-center gap-3 text-2xl mb-6">
    <mdi-calendar-range class="text-gray-500" />
    2024年後半
  </h3>
  <div class="space-y-3 ml-8">
    <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-400">
      <mdi-lightbulb-on class="text-yellow-600 text-xl" />
      <span class="font-bold text-yellow-700">"外から攻める"戦略に転換</span>
    </div>
  </div>
</div>

<!--
【スライド16】
正直に言います。最初の2年間、本当に孤独でした。
Slackチャンネル作っても、誰も来ない。
社内イベントで話しても、「へー、すごいね」で終わり。
でも諦めなかった。なぜなら、これが未来だと確信していたから。
そして、戦略を変えることにしたんです。
-->

---

# 孤独な戦いの中で学んだこと

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-book-open-page-variant class="text-blue-500" />
  失敗から学んだ教訓
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
    <mdi-close-circle-outline class="text-red-600 text-xl" />
    <span>技術の優位性だけでは人は動かない</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
    <mdi-account-tie-voice-off class="text-orange-600 text-xl" />
    <span>社内政治力には限界がある</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
    <mdi-clock-alert class="text-yellow-600 text-xl" />
    <span>タイミングが重要</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-account-multiple-plus class="text-green-600 text-xl" />
    <span>仲間作りの大切さ</span>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-chess-pawn class="text-green-500" />
  成功への布石
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-star-box-multiple class="text-green-600 text-xl" />
    <span>小さな成功事例の蓄積</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-web class="text-blue-600 text-xl" />
    <span>外部ネットワークの構築</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-chart-line class="text-purple-600 text-xl" />
    <span>業界トレンドの把握</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-red-50 rounded-lg border-2 border-red-300">
    <mdi-heart class="text-red-600 text-xl" />
    <span class="font-bold text-red-700">"諦めない心"</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-account-alert class="text-3xl text-purple-600" />
    <span class="font-bold">イノベーターは最初は必ず孤独。でもそれでいい。</span>
  </div>
</div>
<!--
【スライド17】
この2年間、たくさん失敗しました。
でも、全部が学びでした。
技術がすごくても、それだけじゃ人は動かない。
タイミングと仲間が必要。
そして何より、諦めない心が大切だと学びました。
-->

---

# 転機の準備：戦略的な種まき

<div class="grid grid-cols-3 gap-6">
<div class="text-center">
  <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <mdi-seedling class="text-green-600 text-4xl" />
  </div>
  <h3 class="text-xl font-bold mb-3">2024年秋</h3>
  <div class="space-y-3 p-3 bg-green-50 rounded-lg">
    <div class="font-semibold text-green-800">外部コミュニティ構築</div>
    <ul class="text-sm text-left list-disc list-inside">
      <li>Cursor Japan設立準備</li>
      <li>キーパーソンとの連携</li>
      <li>イベント企画開始</li>
    </ul>
  </div>
</div>
<div class="text-center">
  <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <mdi-lightbulb-on-outline class="text-blue-600 text-4xl" />
  </div>
  <h3 class="text-xl font-bold mb-3">2024年冬</h3>
  <div class="space-y-3 p-3 bg-blue-50 rounded-lg">
    <div class="font-semibold text-blue-800">社内の機運醸成</div>
    <ul class="text-sm text-left list-disc list-inside">
      <li>経営層への働きかけ</li>
      <li>予算確保の準備</li>
      <li>協力者の発掘</li>
    </ul>
  </div>
</div>
<div class="text-center">
  <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <mdi-check-all class="text-purple-600 text-4xl" />
  </div>
  <h3 class="text-xl font-bold mb-3">2025年初頭</h3>
  <div class="space-y-3 p-3 bg-purple-50 rounded-lg">
    <div class="font-semibold text-purple-800">実行準備完了</div>
    <ul class="text-sm text-left list-disc list-inside">
      <li>イベント会場確保</li>
      <li>スピーカー調整</li>
      <li>PR戦略策定</li>
    </ul>
  </div>
</div>
</div>
<br>
<div class="text-center p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-chess-queen class="text-yellow-600 text-3xl" />
    <span class="font-bold">"偶然に見える成功も、実は全て計算づく"</span>
  </div>
</div>
<!--
【スライド18】
転機は突然来たように見えるけど、実は全部準備していました。
2024年秋から、外部コミュニティを作り始めた。
同時に社内でも、経営層に少しずつ話をして。
全ては、あるイベントのためでした。
-->

---
layout: center
---

# 転機：AI Code Agents祭り！

<div class="text-center">

<h2 class="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
  <mdi-party-popper class="text-yellow-400" />
  2025年2月開催
  <mdi-party-popper class="text-yellow-400" />
</h2>

<div class="p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl inline-block shadow-lg">
  <h3 class="text-2xl font-bold text-blue-800">🎯 結果</h3>
  <ul class="text-xl mt-4 space-y-2">
    <li class="flex items-center gap-2"><mdi-youtube class="text-red-500" /> **2万人以上が視聴**</li>
    <li class="flex items-center gap-2"><mdi-trophy class="text-yellow-500" /> **CA開発者YouTube史上最高視聴数**</li>
    <li class="flex items-center gap-2"><mdi-account-star class="text-green-500" /> **きのぴーさんも登壇！**</li>
  </ul>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl mt-8">
  <div class="flex items-center justify-center gap-3 text-2xl">
    <mdi-rocket-launch class="text-green-600 text-3xl" />
    <span class="font-bold text-green-800">"バイラル戦略、大成功！"</span>
  </div>
</div>

</div>

<!--
【スライド19】
そして2025年2月、ついに転機が来ました。
「AI Code Agents祭り」を開催。
MG-DXの堂前社長も巻き込んで、大規模イベントに。
そして今日も登壇されているきのぴーさんにも出演いただきました！
結果は...大成功！2万人以上が見てくれました。
-->

---

# イベント成功の裏側

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-green-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-target-arrow class="text-green-500" />
    仕掛けたポイント
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li>YouTubeライブ配信</li>
    <li>有名ゲストの招聘</li>
    <li>実践的なデモ中心</li>
    <li>参加型のコンテンツ</li>
  </ul>
</div>
<div class="p-6 bg-purple-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-rocket class="text-purple-500" />
    想定外の効果
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li>社内からの視聴殺到</li>
    <li>経営層も視聴</li>
    <li>他社からの問い合わせ</li>
    <li class="font-bold text-purple-700">"社内が一気に動いた"</li>
  </ul>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-briefcase-search class="text-blue-600 text-3xl" />
    <span class="font-bold">"外部イベントが最強の社内営業ツールになった"</span>
  </div>
</div>

<!--
【スライド20】
このイベント、実は全部計算してました。
YouTubeで配信することで、社内の人も見やすくした。
有名ゲストを呼ぶことで、注目度を上げた。
そしたら、想定以上の効果が。
経営層まで見てくれて、翌日から問い合わせが殺到しました。
-->

---

# イベント後の劇的な変化

<div class="timeline">
<div class="flex items-start gap-4 mb-6">
  <div class="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
    <mdi-calendar-today class="text-white text-2xl" />
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">イベント翌日</h3>
    <ul class="space-y-2 mt-2 list-disc list-inside">
      <li>Slack通知が鳴り止まない</li>
      <li>「いつ導入？」の問い合わせ殺到</li>
    </ul>
  </div>
</div>
<div class="flex items-start gap-4 mb-6">
  <div class="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
    <mdi-calendar-week class="text-white text-2xl" />
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">1週間後</h3>
    <ul class="space-y-2 mt-2 list-disc list-inside">
      <li>複数の事業部から正式な導入要請</li>
      <li>予算確保の動き</li>
    </ul>
  </div>
</div>
<div class="flex items-start gap-4">
  <div class="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
    <mdi-calendar-month class="text-white text-2xl" />
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">1ヶ月後</h3>
    <ul class="space-y-2 mt-2 list-disc list-inside">
      <li>経営会議で全社導入が議題に</li>
      <li class="font-bold text-purple-700">"もう止められない流れ"</li>
    </ul>
  </div>
</div>
</div>
<!--
【スライド21】
イベントの翌日から、全てが変わりました。
Slackの通知が鳴り止まない。
「いつ導入されるの？」「うちの部署でも使いたい」
1週間で、複数の事業部から正式な要請が。
1ヶ月後には、経営会議の議題になってました。
もう、この流れは止められない。
-->

---

# 現在の状況

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-green-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-chart-line class="text-green-500" />
    急速な普及
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li>多数のチームが導入開始</li>
    <li>問い合わせが殺到</li>
    <li class="font-bold text-green-700">"いつ全社導入？" の声</li>
  </ul>
</div>
<div class="p-6 bg-blue-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-check-decagram class="text-blue-500" />
    全社導入決定！
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li>経営層との協議完了</li>
    <li>詳細を詰めている段階</li>
    <li class="font-bold text-blue-700">Businessプラン $15/月</li>
  </ul>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl mt-4">
  <h3 class="text-xl font-bold mb-2">Cursorの最大の利点</h3>
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-infinity class="text-purple-600 text-3xl" />
    <span class="font-bold">"全てのモデルを追加登録・支払いなしで使える"</span>
  </div>
</div>

<!--
【スライド22】
現在の状況をお伝えします。
もう全社導入は決定事項です。今は詳細を詰めている段階。
Businessプランで月額15ドル。これ、破格です。
なぜなら、全てのAIモデルが使い放題だから。
Claude 4もGPT-4.5もGemini 2.5も、追加料金なし！
-->

---

# 利用可能なモデル（2025年5月現在）

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
        <th class="p-3 text-left rounded-tl-lg">ベンダー</th>
        <th class="p-3 text-left">モデル</th>
        <th class="p-3 text-left rounded-tr-lg">特徴</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b bg-green-50 hover:bg-green-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><simple-icons-openai class="text-green-600" /> OpenAI</td>
        <td class="p-3">gpt-4.5-preview, o3</td>
        <td class="p-3">最新の推論能力</td>
      </tr>
      <tr class="border-b bg-blue-50 hover:bg-blue-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><simple-icons-googlegemini class="text-blue-600" /> Google</td>
        <td class="p-3">gemini-2.5-pro-max</td>
        <td class="p-3">100万トークンコンテキスト</td>
      </tr>
      <tr class="border-b bg-purple-50 hover:bg-purple-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><simple-icons-anthropic class="text-purple-600" /> Anthropic</td>
        <td class="p-3">claude-4-sonnet-max</td>
        <td class="p-3">最高精度のコード生成</td>
      </tr>
      <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-cursor-default-outline class="text-orange-600" /> Cursor独自</td>
        <td class="p-3">cursor-fast</td>
        <td class="p-3">高速レスポンス</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<div class="text-center p-4 bg-gradient-to-r from-indigo-100 to-violet-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-star-four-points class="text-indigo-600 text-3xl" />
    <span class="font-bold">"これだけのモデルを自由に使えるのはCursorだけ"</span>
  </div>
</div>

<!--
【スライド23】
見てください、この豪華なラインナップ。
最新のGPT-4.5、Claude 4、Gemini 2.5。
全部使い放題で月額15ドル。
他のサービスだと、それぞれ契約して、それぞれ課金。
Cursorなら全部込み。これ、革命的です。
-->

---

# モデル性能の実際（相対評価）

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <th class="p-3 text-left rounded-tl-lg">モデル</th>
        <th class="p-3 text-center">コード生成精度</th>
        <th class="p-3 text-center">最大入力トークン</th>
        <th class="p-3 text-center">速度</th>
        <th class="p-3 text-left rounded-tr-lg">おすすめ用途</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b hover:bg-gray-50">
        <td class="p-3 font-semibold">o3</td>
        <td class="p-3 text-center text-yellow-500">★★★☆☆</td>
        <td class="p-3 text-center">20万</td>
        <td class="p-3 text-center text-green-500">高速</td>
        <td class="p-3">日常的なコーディング</td>
      </tr>
      <tr class="border-b hover:bg-gray-50">
        <td class="p-3 font-semibold">Claude 4 Sonnet</td>
        <td class="p-3 text-center text-yellow-500">★★★★★</td>
        <td class="p-3 text-center">100万</td>
        <td class="p-3 text-center text-red-500">遅い</td>
        <td class="p-3">複雑なデバッグ、設計</td>
      </tr>
      <tr class="border-b hover:bg-gray-50">
        <td class="p-3 font-semibold">Gemini 2.5 Pro</td>
        <td class="p-3 text-center text-yellow-500">★★★★☆</td>
        <td class="p-3 text-center">100万</td>
        <td class="p-3 text-center text-orange-500">中速</td>
        <td class="p-3">プロジェクト横断解析</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="p-3 font-semibold">Cursor-fast</td>
        <td class="p-3 text-center text-yellow-500">★★★☆☆</td>
        <td class="p-3 text-center">20万</td>
        <td class="p-3 text-center text-green-500">速い</td>
        <td class="p-3">即座の回答が必要な時</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<div class="text-center p-4 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-chef-hat class="text-teal-600 text-3xl" />
    <span class="font-bold">"タスクに応じてモデルを使い分ける、それがプロの技"</span>
  </div>
</div>
<!--
【スライド24】
実際に使ってみた評価です。
日常的なコーディングならo3で十分速い。
複雑な設計やデバッグならClaude 4。
プロジェクト全体を見渡すならGemini。
この使い分けができるのがCursorの強みです。
-->

---

# 類似エディタとの詳細比較

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
        <th class="p-3 text-left rounded-tl-lg">項目</th>
        <th class="p-3 text-center text-purple-300">Cursor</th>
        <th class="p-3 text-center">GitHub Copilot</th>
        <th class="p-3 text-center">Windsurf</th>
        <th class="p-3 text-center">Cody</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b">
        <td class="p-3 font-semibold">プロジェクト理解</td>
        <td class="p-3 text-center font-bold text-green-500">◎ 完璧</td>
        <td class="p-3 text-center">○ 良好</td>
        <td class="p-3 text-center">△ 限定的</td>
        <td class="p-3 text-center">△ 限定的</td>
      </tr>
      <tr class="border-b">
        <td class="p-3 font-semibold">Agent機能</td>
        <td class="p-3 text-center font-bold text-green-500">◎ 最先端</td>
        <td class="p-3 text-center">△ 基本のみ</td>
        <td class="p-3 text-center text-red-500">× なし</td>
        <td class="p-3 text-center text-red-500">× なし</td>
      </tr>
      <tr class="border-b">
        <td class="p-3 font-semibold">モデル選択肢</td>
        <td class="p-3 text-center font-bold text-green-500">15種類以上</td>
        <td class="p-3 text-center">2種類</td>
        <td class="p-3 text-center">3種類</td>
        <td class="p-3 text-center">1種類</td>
      </tr>
      <tr class="border-b">
        <td class="p-3 font-semibold">月額費用</td>
        <td class="p-3 text-center font-bold text-green-500">$15〜$40</td>
        <td class="p-3 text-center">$10〜$19</td>
        <td class="p-3 text-center">$20</td>
        <td class="p-3 text-center">無料</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">エンタープライズ対応</td>
        <td class="p-3 text-center font-bold text-green-500">◎ 完備</td>
        <td class="p-3 text-center">◎ 完備</td>
        <td class="p-3 text-center">△ 限定的</td>
        <td class="p-3 text-center text-red-500">× なし</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<div class="text-center p-4 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-magnify class="text-yellow-700 text-3xl" />
    <span class="font-bold">"比較すればするほど、Cursorの優位性は明らか"</span>
  </div>
</div>
<!--
【スライド25】
他のツールと比較してみましょう。
GitHub Copilotも悪くない。でもAgent機能が弱い。
Windsurfは...Anthropicに切られちゃいましたね。
Clineは無料だけど、エンタープライズでは使えない。
総合的に見て、Cursorが圧倒的です。
-->

---

# 私の野望：CAの未来

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-blue-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-target class="text-blue-500" />
    目標1
  </h2>
  <div class="text-xl font-bold text-blue-800 mb-2">全員がCursorを使う会社に</div>
  <ul class="space-y-2 list-disc list-inside">
    <li>エンジニアだけでなく</li>
    <li>デザイナーも</li>
    <li>ビジネス職も</li>
    <li class="font-bold text-blue-700">"コードを書かない人もCursor"</li>
  </ul>
</div>
<div class="p-6 bg-purple-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-earth class="text-purple-500" />
    目標2
  </h2>
  <div class="text-xl font-bold text-purple-800 mb-2">MCP最多企業を目指す</div>
  <ul class="space-y-2 list-disc list-inside">
    <li>社内システム全てをMCP化</li>
    <li>生産性ツールの統合</li>
    <li class="font-bold text-purple-700">"MCPサーバー数 > 従業員数"</li>
  </ul>
</div>
</div>
<!--
【スライド26】
私には大きな野望があります。
サイバーエージェントを「全員がCursorを使う会社」にしたい。
エンジニアだけじゃない。デザイナーも、営業も、みんな。
そして、世界で最もMCPサーバーを持つ企業にする。
従業員より多くのMCPサーバー。これが目標です。
-->

---

# なぜ全員がCursorを使うべきか

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-pink-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-palette class="text-pink-500" />
    デザイナーの場合
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li>Figmaからコード生成</li>
    <li>デザインシステムの自動化</li>
    <li>エンジニアとの共通言語</li>
    <li class="font-bold text-pink-700">実装可能性の即座の確認</li>
  </ul>
</div>
<div class="p-6 bg-indigo-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-briefcase class="text-indigo-500" />
    ビジネス職の場合
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li>SQLを書かずにデータ分析</li>
    <li>簡単な自動化スクリプト作成</li>
    <li>技術的な議論への参加</li>
    <li class="font-bold text-indigo-700">"コードが読める"価値</li>
  </ul>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-lime-100 to-emerald-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-school class="text-lime-700 text-3xl" />
    <span class="font-bold">"プログラミングは新しいリテラシー。Cursorはその入口。"</span>
  </div>
</div>
<!--
【スライド27】
なぜ全員がCursorを使うべきか。
デザイナーさん、Figmaで作ったデザインが本当に実装できるか、すぐ確認できます。
ビジネス職の方、SQLわからなくても、日本語でデータ分析できます。
プログラミングは、もう特殊スキルじゃない。
新しいリテラシーなんです。
-->

---

# MCPとは何か？なぜ重要か？

<div class="text-center mb-4">
  <h2 class="text-3xl font-bold">Model Context Protocol</h2>
  <h3 class="text-xl text-gray-600">AIとツールをつなぐ標準プロトコル</h3>
</div>

<div class="flex justify-center items-center">
<div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
```mermaid
graph LR
    A[<div class='flex items-center gap-2'><i class='mdi mdi-cursor-default-outline text-xl text-purple-600'></i> Cursor</div>] --> B{<div class='flex items-center gap-2'><i class='mdi mdi-server-network text-xl'></i> MCP Server</div>}
    B --> C[<div class='flex items-center gap-2'><i class='mdi mdi-slack text-xl'></i> Slack</div>]
    B --> D[<div class='flex items-center gap-2'><i class='simple-icons-notion text-xl'></i> Notion</div>]
    B --> E[<div class='flex items-center gap-2'><i class='mdi mdi-github text-xl'></i> GitHub</div>]
    B --> F[<div class='flex items-center gap-2'><i class='mdi mdi-office-building text-xl'></i> 社内システム</div>]
    
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
    <span class="font-bold">"MCPは、AIに手足を与える技術"</span>
  </div>
</div>
<!--
【スライド28】
MCPって何？って思ってる方も多いでしょう。
Model Context Protocol。簡単に言うと、AIとツールをつなぐ技術です。
今までAIは頭脳だけだった。MCPは手足を与えます。
Slackに投稿したり、Notionを更新したり、全部AIができるようになる。
-->

---

# 現在のMCPサーバー事例

<div class="grid grid-cols-2 gap-6">
<div class="p-4 bg-blue-50 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-blue-800 mb-2"><mdi-palette-swatch class="text-blue-600" />Spindle Design System MCP</h3>
  <ul class="text-sm list-disc list-inside">
    <li>Figma Dev Mode連携</li>
    <li class="font-bold text-green-600">生産性10倍向上</li>
  </ul>
</div>
<div class="p-4 bg-red-50 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-red-800 mb-2"><mdi-shield-alert class="text-red-600" />RISKEN MCP</h3>
  <ul class="text-sm list-disc list-inside">
    <li>リスク可視化の効率化</li>
    <li>インシデント防止</li>
  </ul>
</div>
<div class="p-4 bg-purple-50 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-purple-800 mb-2"><mdi-book-open-variant class="text-purple-600" />CA用語辞書 MCP</h3>
  <ul class="text-sm list-disc list-inside">
    <li>社内用語の統一理解</li>
  </ul>
</div>
<div class="p-4 bg-cyan-50 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-cyan-800 mb-2"><mdi-pipe class="text-cyan-600" />PipeCD Documentation MCP</h3>
  <ul class="text-sm list-disc list-inside">
    <li>OSS活用の促進</li>
    <li>デプロイ自動化</li>
  </ul>
</div>
<div class="p-4 bg-orange-50 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-orange-800 mb-2"><mdi-bucket-outline class="text-orange-600" />Bucketeer Feature Flags MCP</h3>
  <ul class="text-sm list-disc list-inside">
    <li>機能フラグ管理の簡素化</li>
  </ul>
</div>
<div class="p-4 bg-gray-100 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-gray-800 mb-2"><mdi-web class="text-gray-600" />生産性ポータル & MCPポータル</h3>
  <ul class="text-sm list-disc list-inside">
    <li>cyberagent.tools</li>
    <li>社内MCP一覧（開発中）</li>
  </ul>
</div>
</div>
<!--
【スライド29】
すでに動いているMCPサーバーを紹介します。
Spindleは、うちのデザインシステム。これのMCPで生産性が10倍に。
10倍ですよ！1日かかってた作業が1時間で終わる。
他にも、セキュリティ、用語辞書、デプロイツール、全部MCP化してます。
-->

---

# Spindle MCP：10倍の生産性向上の秘密

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-red-50 rounded-lg border-2 border-red-200">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-tortoise class="text-red-500" />
    Before（MCP導入前）
  </h2>
  <ol class="space-y-2 list-decimal list-inside">
    <li>Figmaでデザイン確認</li>
    <li>コンポーネント名を探す</li>
    <li>ドキュメントで使い方確認</li>
    <li>コードを手動で記述</li>
    <li>プロパティを調整</li>
  </ol>
  <div class="mt-4 font-bold text-red-700">所要時間：30分〜1時間</div>
</div>
<div class="p-6 bg-green-50 rounded-lg border-2 border-green-200">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-rabbit class="text-green-500" />
    After（MCP導入後）
  </h2>
  <ol class="space-y-2 list-decimal list-inside">
    <li>Figmaのリンクを貼る</li>
    <li>AIが自動でコード生成</li>
    <li>完成！</li>
  </ol>
  <div class="mt-4 font-bold text-green-700">所要時間：3分</div>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-rocket-launch class="text-purple-600 text-3xl" />
    <span class="font-bold">"これが10倍の意味。もう戻れない。"</span>
  </div>
</div>
<!--
【スライド30】
10倍って大げさじゃないの？って思うでしょう。
具体例を見せます。
以前は、Figma見て、コンポーネント探して、ドキュメント読んで...30分以上。
今は？Figmaのリンク貼って3分。
これが10倍の意味です。もう昔には戻れません。
-->

---
layout: center
---

# Part 2: 個人的なTips & 実践

<div class="text-center text-2xl">
  <div class="p-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl inline-block shadow-lg">
    <h2 class="flex items-center justify-center gap-3 text-4xl">
      <mdi-rocket-launch class="text-purple-500" />
      Vibe Codingで生産性爆上げ
      <mdi-music-clef-treble class="text-blue-500" />
    </h2>
  </div>
</div>

<!--
【スライド31】
ここからは、私が個人的に実践している技を共有します。
「Vibe Coding」って呼んでるんですけど、これがまた革命的で。
生産性が爆上げする秘密、全部お教えします。
-->

---

# Vibe Codingとは？

<div class="text-center mb-8">
  <h2 class="flex items-center justify-center gap-3 text-3xl p-4 bg-yellow-50 rounded-xl">
    <mdi-music-note class="text-yellow-600" />
    Flow State × AI = 最高の生産性
    <mdi-brain class="text-yellow-600" />
  </h2>
</div>

<div class="grid grid-cols-3 gap-6">
  <div class="p-4 bg-blue-50 rounded-lg text-center">
    <h3 class="text-xl font-bold text-blue-800 mb-2">1. リズム</h3>
    <p>タスクを細かく分割し、テンポよく進める</p>
  </div>
  <div class="p-4 bg-green-50 rounded-lg text-center">
    <h3 class="text-xl font-bold text-green-800 mb-2">2. フロー</h3>
    <p>AIとの対話でゾーンに入る</p>
  </div>
  <div class="p-4 bg-purple-50 rounded-lg text-center">
    <h3 class="text-xl font-bold text-purple-800 mb-2">3. 楽しさ</h3>
    <p>コーディングを音楽のように楽しむ</p>
  </div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-guitar-electric class="text-pink-600 text-3xl" />
    <span class="font-bold">"コーディングは作曲。AIは最高のバンドメンバー。"</span>
  </div>
</div>
<!--
【スライド32】
Vibe Codingって何か。
簡単に言うと、AIと一緒にフロー状態に入る開発スタイルです。
音楽を作るように、リズムに乗ってコードを書く。
AIは最高のバンドメンバーで、あなたの演奏に合わせてくれる。
これ、本当に楽しいんです。
-->

---

# 私のお気に入りモデル

<div class="grid grid-cols-2 gap-8">
<div class="p-6 bg-indigo-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-brain class="text-indigo-500" />
    アイデア・計画
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li><span class="font-bold">Claude 4 Opus</span> (メイン)</li>
    <li><span class="font-bold">o3</span> (数値計算が必要な時)</li>
  </ul>
</div>
<div class="p-6 bg-teal-50 rounded-lg">
  <h2 class="flex items-center gap-2 text-2xl mb-4">
    <mdi-code-braces class="text-teal-500" />
    コーディング
  </h2>
  <ul class="space-y-3 list-disc list-inside">
    <li><span class="font-bold">Claude 3.5 Sonnet</span></li>
    <li><span class="font-bold">Gemini 2.5 Pro</span></li>
    <li>(コンテキスト長で使い分け)</li>
  </ul>
</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-gray-100 to-slate-100 rounded-xl mt-4">
  <h3 class="text-xl font-bold text-gray-700">🎯 モデル選択のコツ</h3>
  <p class="text-lg">"タスクに最適なモデルを、コンテキスト長で判断"</p>
</div>
<!--
【スライド33】
モデル選びは超重要です。
アイデア出しはClaude Opus 4。これが一番創造的。
実際のコーディングは、速度重視でSonnet 4かGemini 2.5。
コンテキストが長い時はGemini 2.5、短い時はSonnet 4。
この使い分けで、効率が全然違います。
-->

---

# タスク別モデル使い分けガイド

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
        <th class="p-3 text-left rounded-tl-lg">タスク</th>
        <th class="p-3 text-left">推奨モデル</th>
        <th class="p-3 text-left rounded-tr-lg">理由</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b bg-purple-50 hover:bg-purple-100">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-sitemap class="text-purple-600" />アーキテクチャ設計</td>
        <td class="p-3 font-bold">Claude 4 Opus</td>
        <td class="p-3">深い思考と創造性</td>
      </tr>
      <tr class="border-b bg-red-50 hover:bg-red-100">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-bug class="text-red-600" />バグ修正</td>
        <td class="p-3 font-bold">Claude 3.5 Sonnet</td>
        <td class="p-3">正確性とスピードのバランス</td>
      </tr>
      <tr class="border-b bg-blue-50 hover:bg-blue-100">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-wrench class="text-blue-600" />リファクタリング</td>
        <td class="p-3 font-bold">Gemini 2.5 Pro</td>
        <td class="p-3">大量のコード処理能力</td>
      </tr>
      <tr class="border-b bg-green-50 hover:bg-green-100">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-file-document class="text-green-600" />ドキュメント作成</td>
        <td class="p-3 font-bold">o3</td>
        <td class="p-3">構造化された出力</td>
      </tr>
      <tr class="bg-yellow-50 hover:bg-yellow-100">
        <td class="p-3 font-semibold flex items-center gap-2"><mdi-test-tube class="text-yellow-600" />テスト作成</td>
        <td class="p-3 font-bold">Cursor-fast</td>
        <td class="p-3">定型的なタスクに最適</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<div class="text-center p-4 bg-gradient-to-r from-gray-100 to-slate-100 rounded-xl mt-4">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-target-account class="text-gray-600 text-3xl" />
    <span class="font-bold">"適材適所。AIモデルも同じ。"</span>
  </div>
</div>
<!--
【スライド34】
具体的な使い分けを表にしました。
アーキテクチャ設計みたいな創造的な仕事はOpus 4。
バグ修正は正確性が大事だからSonnet。
リファクタリングは大量のコードを見るからGemini。
この使い分けができると、本当に効率が上がります。
-->

---

# 秘密のタレ：究極のVibe Coding Stack

<div class="text-center p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl mb-6">
  <h2 class="flex items-center justify-center gap-3 text-xl">
    <mdi-lock class="text-yellow-600 text-2xl" />
    <span class="font-bold">これは公開したくない...でも日本のために公開します！</span>
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
      <span class="font-bold">AIエージェント:</span>
      <span class="ml-2">Mastra</span>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-database class="text-blue-600 text-xl" />
    <div>
      <span class="font-bold">バックエンド＆フロント:</span>
      <span class="ml-2">Convex</span>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-cellphone class="text-green-600 text-xl" />
    <div>
      <span class="font-bold">ネイティブアプリ:</span>
      <span class="ml-2">Expo</span>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
    <mdi-cloud class="text-orange-600 text-xl" />
    <div>
      <span class="font-bold">ホスティング:</span>
      <span class="ml-2">Cloudflare</span>
    </div>
  </div>
</div>
</div>
<div class="p-6 bg-green-50 rounded-lg">
<h3 class="flex items-center gap-2 text-xl mb-4 font-bold">
  <mdi-fire class="text-green-600" />
  なぜConvex？
</h3>
<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
    <mdi-language-typescript class="text-indigo-600 text-xl" />
    <span>完全なe2e型付け</span>
  </div>
  
  <div class="flex items-center gap-3 p-3 bg-cyan-50 rounded-lg">
    <mdi-sync class="text-cyan-600 text-xl" />
    <span>リアルタイムDB</span>
  </div>
  
  <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border-2 border-red-300">
    <mdi-database-remove class="text-red-600 text-xl" />
    <span class="font-bold text-red-700">SQLなし！</span>
  </div>
  
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-shield-check class="text-purple-600 text-xl" />
    <span>スキーマ強制でAI生成が完璧</span>
  </div>
</div>
</div>
</div>

<!--
【スライド35】
これから話すのは、本当は秘密にしたかった。
私の競争優位性の源泉だから。
でも、日本のエンジニアのために公開します。
このスタック、本当に最強なんです。
特にConvex。これがAIとの相性が抜群で。
-->

---

# なぜこのスタックが最強なのか

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-rocket-launch class="text-blue-500" />
  開発速度
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
    <mdi-clock-fast class="text-blue-600 text-xl" />
    <span class="font-bold text-blue-700">アイデアから実装まで30分</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <mdi-shield-check class="text-green-600 text-xl" />
    <span>型安全でバグ激減</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-sync class="text-purple-600 text-xl" />
    <span>リアルタイム機能が標準</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
    <mdi-auto-fix class="text-orange-600 text-xl" />
    <span>デプロイまで自動化</span>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-robot class="text-purple-500" />
  AI親和性
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-check-decagram class="text-purple-600 text-xl" />
    <span>完全な型情報でAIが間違えない</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg">
    <mdi-file-cog class="text-indigo-600 text-xl" />
    <span>Cursor Rulesが完備</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
    <mdi-server-network class="text-blue-600 text-xl" />
    <span>MCPサーバーも提供</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border-2 border-pink-300">
    <mdi-brain class="text-pink-600 text-xl" />
    <span class="font-bold text-pink-700">"AIが理解しやすい設計"</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-speedometer class="text-yellow-600 text-3xl" />
    <span class="font-bold">このスタックで、私は10倍速で開発している</span>
    <mdi-multiplication class="text-orange-600 text-3xl" />
  </div>
</div>

<!--
【スライド36】
なぜこのスタックが最強か。
まず速い。アイデアから実装まで30分。
そしてAIが間違えない。完全な型情報があるから。
Convexは特に、AIのために設計されたような感じ。
実際、私はこれで10倍速で開発してます。
-->

---

# 超重要な視点：バージョン問題

<div class="text-center text-2xl mb-8">

<div class="p-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-alert-circle class="text-red-600 text-3xl" />
    <span class="font-bold">Tailwind v4のコードを書いてv3で動かない経験、ありますよね？</span>
  </div>
</div>

</div>

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-close-circle class="text-red-500" />
  従来のアプローチの問題
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
    <mdi-history class="text-red-600 text-xl" />
    <span>LLMは古いStackOverflowのコードで学習</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
    <mdi-alert-octagon class="text-orange-600 text-xl" />
    <span>バージョン違いでエラー多発</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg">
    <mdi-thumb-down class="text-yellow-600 text-xl" />
    <span>ベストプラクティスではないコード</span>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-check-circle class="text-green-500" />
  解決策
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <mdi-file-cog class="text-green-600 text-xl" />
    <div>
      <div class="font-bold">Cursor Rules</div>
      <div class="text-sm text-gray-600">を持つツール（Convexなど）</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
    <mdi-server-network class="text-blue-600 text-xl" />
    <div>
      <div class="font-bold">MCPドキュメントサーバー</div>
      <div class="text-sm text-gray-600">（Mastraなど）</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-shield-check class="text-purple-600 text-xl" />
    <span>最新バージョン＆ベストプラクティスを保証</span>
  </div>
</div>

</div>
</div>

<!--
【スライド37】
ここで重要な話。手を挙げてください。
Tailwind v4のコードをAIが生成して、v3で動かなかった人？
はい、たくさんいますね。これが大問題なんです。
LLMは古いコードで学習してるから、最新のAPIを知らない。
だから、RulesとMCPが超重要なんです。
-->

---

# バージョン問題の具体例

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-emoticon-sad class="text-red-500" />
  よくある失敗
</h2>

<div class="space-y-3">
  <div class="bg-red-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-react class="text-red-600 text-xl" />
      <span class="font-semibold">React 17の古いコード</span>
    </div>
    <div class="text-sm text-gray-600">AIが古いReact 17のクラスコンポーネントを生成</div>
  </div>
  
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-alert-circle class="text-orange-600 text-xl" />
      <span class="font-semibold">非推奨API</span>
    </div>
    <div class="text-sm text-gray-600">非推奨のAPIを使用</div>
  </div>
  
  <div class="bg-yellow-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-package-variant-closed class="text-yellow-600 text-xl" />
      <span class="font-semibold">古いライブラリ</span>
    </div>
    <div class="text-sm text-gray-600">古いライブラリの書き方</div>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-check-circle class="text-green-500" />
  Cursor Rulesで解決
</h2>

<div class="space-y-3">
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-react class="text-green-600 text-xl" />
      <span class="font-semibold">React 18+の最新コード</span>
    </div>
    <div class="text-sm text-gray-600">最新のReact 18+の関数コンポーネント</div>
  </div>
  
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-star class="text-blue-600 text-xl" />
      <span class="font-semibold">最新ベストプラクティス</span>
    </div>
    <div class="text-sm text-gray-600">最新のベストプラクティス</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-hook class="text-purple-600 text-xl" />
      <span class="font-semibold">適切なhooks</span>
    </div>
    <div class="text-sm text-gray-600">適切なhooksの使用</div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-book-open-variant class="text-3xl text-blue-600" />
    <span class="text-xl font-bold">Cursor Rulesは、AIの教科書</span>
    <mdi-school class="text-3xl text-purple-600" />
  </div>
</div>

<!--
【スライド38】
具体例を見せます。
AIに何も指定しないと、古いReactのクラスコンポーネントを書いちゃう。
でもCursor Rulesがあれば、最新の関数コンポーネントを書く。
Cursor Rulesは、AIに最新の書き方を教える教科書なんです。
-->

---

# Context is King 👑

<div class="text-center text-3xl mb-8">

<div class="p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-crown class="text-red-600 text-4xl" />
    <span class="font-bold">Cursorを離れる = 時間とCONTEXTを失う</span>
    <mdi-timer-sand class="text-orange-600 text-4xl" />
  </div>
</div>

</div>

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-skull class="text-red-500" />
  生産性キラー
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
    <mdi-swap-horizontal class="text-red-600 text-xl" />
    <span class="font-bold">コンテキストスイッチング</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
    <mdi-exit-to-app class="text-orange-600 text-xl" />
    <span>外部ツールへの移動</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg">
    <mdi-scatter-plot class="text-yellow-600 text-xl" />
    <span>情報の分散</span>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-target class="text-green-500" />
  解決策：全てをCursor内で
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <mdi-server-network class="text-green-600 text-xl" />
    <span>既存のMCPサーバーを活用</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
    <mdi-wrench class="text-blue-600 text-xl" />
    <span>独自MCPサーバーを開発</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-link-variant class="text-purple-600 text-xl" />
    <span>ワークフロー全体を統合</span>
  </div>
</div>

</div>
</div>

<!--
【スライド39】
これ、本当に重要な話です。
Cursorを離れるたびに、あなたは時間だけじゃなく、貴重なコンテキストを失ってる。
AIにとってコンテキストは命。
だから、全てをCursor内で完結させることが超重要。
MCPはそれを可能にする魔法の技術です。
-->

---

# コンテキストスイッチングの実際のコスト

<div class="text-center">

<h2 class="text-2xl mb-6">平均的な開発者の1日</h2>

<div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">

```mermaid
pie title "開発時間の内訳"
    "実際のコーディング" : 3
    "ツール間の移動" : 2
    "コンテキスト再構築" : 1.5
    "ドキュメント検索" : 1.5
```

</div>

</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-alert-circle class="text-red-600 text-3xl" />
    <span class="font-bold">実際のコーディングは全体の37.5%だけ</span>
    <mdi-chart-pie class="text-orange-600 text-3xl" />
  </div>
</div>

<!--
【スライド40】
衝撃的なデータをお見せします。
平均的な開発者の1日、実際にコードを書いてる時間は37.5%だけ。
残りは全部、ツール間の移動とか、コンテキストの再構築。
これ、もったいなさすぎる。
MCPで全部Cursor内に統合すれば、この無駄がなくなります。
-->

---

# MCPワークフローの進化

<div class="space-y-6">

<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
    <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
      <span class="text-white font-bold">1</span>
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">Step 1: 手動作業</h3>
    <p class="text-gray-600">Cursor内で全て手動実行</p>
  </div>
</div>

<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
      <span class="text-white font-bold">2</span>
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">Step 2: MCP化</h3>
    <p class="text-gray-600 mb-2">各作業をMCPサーバーでラップ</p>
    <div class="space-y-1">
      <div class="flex items-center gap-2">
        <mdi-check class="text-orange-600" />
        <span class="text-sm">Cloudflare Agent推奨</span>
      </div>
      <div class="flex items-center gap-2">
        <mdi-check class="text-orange-600" />
        <span class="text-sm">Mastra MCP Server推奨</span>
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
    <h3 class="font-bold text-lg">Step 3: エージェント化</h3>
    <p class="text-gray-600">Mastraで全ワークフローを自動化</p>
  </div>
</div>

<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
      <span class="text-white font-bold">4</span>
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg">Step 4: 収益化</h3>
    <div class="space-y-1">
      <div class="flex items-center gap-2">
        <span class="font-semibold">a)</span>
        <span>ConvexでUI/App化</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="font-semibold">b)</span>
        <span>MCP SaaSとして販売（Stripe Agent Toolkit）</span>
      </div>
    </div>
  </div>
</div>

</div>

<!--
【スライド41】
MCPワークフローは段階的に進化します。
最初は手動、次にMCP化、そしてエージェント化。
最終的には、それ自体をサービスとして販売できる。
これが新しいビジネスモデルです。
実際、私もいくつか作って販売してます。
-->

---

# MCP SaaSの実例

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-target class="text-blue-500" />
  社内向けMCP
</h2>

<div class="space-y-3">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <mdi-account-plus class="text-blue-600" />
        <span class="font-bold">採用管理MCP</span>
      </div>
      <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">販売中</span>
    </div>
    <div class="text-sm text-gray-600">$50/月で販売中</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <mdi-receipt class="text-purple-600" />
        <span class="font-bold">経費精算MCP</span>
      </div>
      <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">販売中</span>
    </div>
    <div class="text-sm text-gray-600">$30/月で販売中</div>
  </div>
  
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <mdi-clock-time-four class="text-orange-600" />
        <span class="font-bold">勤怠管理MCP</span>
      </div>
      <span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">開発中</span>
    </div>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-cash-multiple class="text-green-500" />
  ビジネスモデル
</h2>

<div class="space-y-3">
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-clock class="text-green-600" />
      <span class="font-semibold">開発時間:</span>
      <span>約10時間</span>
    </div>
  </div>
  
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-currency-usd class="text-blue-600" />
      <span class="font-semibold">月額収益:</span>
      <span>$500〜$2000</span>
    </div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-chart-line class="text-purple-600" />
      <span class="font-semibold">ROI:</span>
      <span>3ヶ月で回収</span>
    </div>
  </div>
  
  <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-2 border-yellow-400">
    <div class="flex items-center gap-2">
      <mdi-repeat class="text-yellow-600" />
      <span class="font-bold text-yellow-700">"作れば作るほど収益源に"</span>
    </div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-server-network class="text-green-600 text-3xl" />
    <span class="font-bold">MCPは新しいSaaSの形。誰でも作れる。</span>
    <mdi-account-multiple class="text-blue-600 text-3xl" />
  </div>
</div>

<!--
【スライド42】
実際に私が作って販売してるMCPを紹介します。
採用管理MCPは月50ドルで、もう20社が使ってます。
開発時間は10時間くらい。3ヶ月で元が取れました。
これ、新しいビジネスモデルです。
みなさんも作れます。本当に。
-->

---

# MCP投資指標

<div class="text-center text-2xl mb-8">

<div class="p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3">
    <mdi-chart-timeline-variant class="text-purple-600 text-3xl" />
    <span class="font-bold">MCPサーバー数は新しい企業価値指標になる</span>
    <mdi-trending-up class="text-blue-600 text-3xl" />
  </div>
</div>

</div>

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-chart-box class="text-blue-500" />
  現在のトレンド
</h3>

<div class="space-y-3">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <simple-icons-zapier class="text-blue-600" />
      <span class="font-bold">Zapier:</span>
    </div>
    <div class="text-sm text-gray-600">"MCPサーバー数 > 従業員数"</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-domain class="text-purple-600" />
      <span class="font-bold">Composio:</span>
    </div>
    <div class="text-sm text-gray-600">同様の発表</div>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-rocket-launch class="text-green-500" />
  なぜ重要か
</h3>

<div class="space-y-3">
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="flex items-center gap-2">
      <mdi-eye class="text-green-600" />
      <span>自動化レベルの可視化</span>
    </div>
  </div>
  
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="flex items-center gap-2">
      <mdi-chart-line class="text-orange-600" />
      <span>生産性の定量的指標</span>
    </div>
  </div>
  
  <div class="bg-red-50 p-4 rounded-lg">
    <div class="flex items-center gap-2">
      <mdi-account-tie class="text-red-600" />
      <span>投資家が注目する新指標</span>
    </div>
  </div>
</div>

</div>
</div>

<!--
【スライド43】
これ、予言します。
近い将来、投資家は企業のMCPサーバー数を重要指標として見るようになる。
すでにZapierは、MCPサーバー数が従業員数を超えたと発表。
これは企業の自動化レベルを示す、新しいKPIです。
-->

---

# なぜMCPサーバー数が重要なのか

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-account-tie class="text-blue-500" />
  投資家の視点
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
    <mdi-chart-bar class="text-blue-600 text-xl" />
    <span>自動化レベルの定量化</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-crystal-ball class="text-purple-600 text-xl" />
    <span>将来の成長性予測</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <mdi-shield-star class="text-green-600 text-xl" />
    <span>競争優位性の指標</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-300">
    <mdi-account-off class="text-orange-600 text-xl" />
    <span class="font-bold text-orange-700">"人的リソース依存度の低さ"</span>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-office-building class="text-purple-500" />
  企業の視点
</h2>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-speedometer class="text-purple-600 text-xl" />
    <span>生産性の可視化</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg">
    <mdi-lightbulb-on class="text-indigo-600 text-xl" />
    <span>イノベーション力の証明</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
    <mdi-account-star class="text-cyan-600 text-xl" />
    <span>採用競争力の向上</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border-2 border-pink-300">
    <mdi-star-circle class="text-pink-600 text-xl" />
    <span class="font-bold text-pink-700">"最先端企業のブランディング"</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-server-network class="text-yellow-600 text-3xl" />
    <span class="font-bold">MCPサーバー1000個 = ユニコーン企業の新基準</span>
    <mdi-unicorn class="text-orange-600 text-3xl" />
  </div>
</div>

<!--
【スライド44】
なぜMCPサーバー数が重要か。
投資家から見ると、これは自動化レベルの指標。
人に依存しない、スケーラブルな企業かどうかがわかる。
企業から見ると、最先端のブランディングになる。
優秀な人材も集まりやすくなります。
-->

---

# Breaking: MCP Elicitations

<div class="text-center mb-8">

<h3 class="flex items-center justify-center gap-2 text-2xl">
  <mdi-party-popper class="text-yellow-500" />
  最新機能：LLMがユーザーに質問できる！
  <mdi-help-circle class="text-blue-500" />
</h3>

</div>

<div class="grid grid-cols-3 gap-6">
<div>

<h3 class="flex items-center gap-2 text-lg mb-3">
  <mdi-alert-circle class="text-red-500" />
  従来の問題
</h3>

<div class="space-y-2">
  <div class="bg-red-50 p-3 rounded-lg text-sm">
    <div class="flex items-center gap-2">
      <mdi-brain class="text-red-600" />
      <span>AIが情報不足で推測</span>
    </div>
  </div>
  <div class="bg-orange-50 p-3 rounded-lg text-sm">
    <div class="flex items-center gap-2">
      <mdi-alert-octagon class="text-orange-600" />
      <span>ハルシネーションの発生</span>
    </div>
  </div>
  <div class="bg-yellow-50 p-3 rounded-lg text-sm">
    <div class="flex items-center gap-2">
      <mdi-close-circle class="text-yellow-600" />
      <span>間違った実装</span>
    </div>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-lg mb-3">
  <mdi-check-circle class="text-green-500" />
  Elicitationsで解決
</h3>

<div class="space-y-2">
  <div class="bg-green-50 p-3 rounded-lg text-sm">
    <div class="flex items-center gap-2">
      <mdi-help-circle class="text-green-600" />
      <span>AIが必要な情報を質問</span>
    </div>
  </div>
  <div class="bg-blue-50 p-3 rounded-lg text-sm">
    <div class="flex items-center gap-2">
      <mdi-forum class="text-blue-600" />
      <span>対話的な問題解決</span>
    </div>
  </div>
  <div class="bg-purple-50 p-3 rounded-lg text-sm">
    <div class="flex items-center gap-2">
      <mdi-check-decagram class="text-purple-600" />
      <span>正確な実装</span>
    </div>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-lg mb-3">
  <mdi-star class="text-purple-500" />
  革命的効果
</h3>

<div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
  <div class="text-center">
    <mdi-shield-check class="text-purple-600 text-3xl mb-2" />
    <div class="font-bold text-purple-700">
      ハルシネーション激減
    </div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-robot class="text-blue-600 text-3xl" />
    <span class="font-bold">LLMのハルシネーションが激減する革命的機能</span>
    <mdi-shield-check class="text-purple-600 text-3xl" />
  </div>
</div>

<!--
【スライド45】
最新機能を紹介します。Elicitations。
これまでLLMは、わからないことがあると推測するか失敗するかでした。
でも今は、ユーザーに質問できる！
これ、革命的です。ハルシネーションが激減します。
もう間違った推測で失敗することがなくなる。
-->

---

# Elicitationsの実用例

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-target class="text-blue-500" />
  開発タスク
</h2>

<div class="space-y-3">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-robot class="text-blue-600" />
      <span class="font-semibold">AI:</span>
    </div>
    <div class="text-sm">"どの関数のテストですか？"</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-robot class="text-purple-600" />
      <span class="font-semibold">AI:</span>
    </div>
    <div class="text-sm">"エッジケースも含めますか？"</div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-robot class="text-green-600" />
      <span class="font-semibold">AI:</span>
    </div>
    <div class="text-sm">"使用するテストフレームワークは？"</div>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-chart-bar class="text-orange-500" />
  データ分析
</h2>

<div class="space-y-3">
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-robot class="text-orange-600" />
      <span class="font-semibold">AI:</span>
    </div>
    <div class="text-sm">"期間を教えてください"</div>
  </div>
  
  <div class="bg-red-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-robot class="text-red-600" />
      <span class="font-semibold">AI:</span>
    </div>
    <div class="text-sm">"比較対象は？"</div>
  </div>
  
  <div class="bg-indigo-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-robot class="text-indigo-600" />
      <span class="font-semibold">AI:</span>
    </div>
    <div class="text-sm">"出力形式の希望は？"</div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-account-multiple class="text-green-600 text-3xl" />
    <span class="font-bold">対話型AIこそが、真のペアプログラミング</span>
    <mdi-handshake class="text-blue-600 text-3xl" />
  </div>
</div>

<!--
【スライド46】
実際の使用例を見てみましょう。
「テスト書いて」って言うと、AIが必要な情報を聞いてくる。
「売上分析して」って言うと、詳細を確認してくる。
これが本当のペアプログラミングです。
人間のパートナーみたいに、確認しながら進めてくれる。
-->

---

# 私の1日のワークフロー

<div class="space-y-6">

<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
    <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
      <mdi-weather-sunny class="text-white text-2xl" />
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg flex items-center gap-2">
      <mdi-clock class="text-blue-500" />
      9:00 - 朝のセットアップ
    </h3>
    <ul class="space-y-1 mt-2">
      <li class="flex items-center gap-2">
        <mdi-cursor-default-outline class="text-blue-400" />
        Cursor起動、全プロジェクトをコンテキストに
      </li>
      <li class="flex items-center gap-2">
        <mdi-chat class="text-blue-400" />
        その日のタスクをAIと相談
      </li>
    </ul>
  </div>
</div>

<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
    <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
      <mdi-music class="text-white text-2xl" />
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg flex items-center gap-2">
      <mdi-clock class="text-purple-500" />
      10:00 - Vibe Coding開始
    </h3>
    <ul class="space-y-1 mt-2">
      <li class="flex items-center gap-2">
        <mdi-music-note class="text-purple-400" />
        音楽を流しながらフロー状態へ
      </li>
      <li class="flex items-center gap-2">
        <mdi-account-group class="text-purple-400" />
        AIとペアプロで高速開発
      </li>
    </ul>
  </div>
</div>

<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
    <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
      <mdi-magnify class="text-white text-2xl" />
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg flex items-center gap-2">
      <mdi-clock class="text-green-500" />
      14:00 - レビュー＆リファクタリング
    </h3>
    <ul class="space-y-1 mt-2">
      <li class="flex items-center gap-2">
        <mdi-eye-check class="text-green-400" />
        AIにコードレビューを依頼
      </li>
      <li class="flex items-center gap-2">
        <mdi-wrench class="text-green-400" />
        改善提案を一緒に実装
      </li>
    </ul>
  </div>
</div>

<div class="flex items-start gap-4">
  <div class="flex-shrink-0">
    <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
      <mdi-file-document class="text-white text-2xl" />
    </div>
  </div>
  <div class="flex-grow">
    <h3 class="font-bold text-lg flex items-center gap-2">
      <mdi-clock class="text-orange-500" />
      16:00 - ドキュメント＆テスト
    </h3>
    <ul class="space-y-1 mt-2">
      <li class="flex items-center gap-2">
        <mdi-auto-fix class="text-orange-400" />
        AIが自動でドキュメント生成
      </li>
      <li class="flex items-center gap-2">
        <mdi-test-tube class="text-orange-400" />
        テストも同時に作成
      </li>
    </ul>
  </div>
</div>

</div>

<!--
【スライド47】
私の実際の1日を紹介します。
朝、Cursor起動して、その日のタスクをAIと相談。
10時からVibe Coding。音楽流しながら、AIとペアプロ。
午後はレビューとリファクタリング。
最後にドキュメントとテスト。全部AIと一緒。
この流れで、以前の3倍は生産的になりました。
-->

---

# 生産性の実測値

<div class="text-center mb-8">

<h2 class="flex items-center justify-center gap-2 text-2xl">
  <mdi-chart-timeline-variant class="text-purple-500" />
  Before vs After (私の場合)
</h2>

</div>

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <th class="p-3 text-left rounded-tl-lg">
          <div class="flex items-center gap-2">
            <mdi-chart-box class="text-xl" />
            指標
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
            改善率
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">
          <div class="flex items-center gap-2">
            <mdi-cog class="text-blue-600" />
            機能実装/日
          </div>
        </td>
        <td class="p-3 text-center">1-2個</td>
        <td class="p-3 text-center font-bold text-green-600">5-8個</td>
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
            バグ発生率
          </div>
        </td>
        <td class="p-3 text-center">15%</td>
        <td class="p-3 text-center font-bold text-green-600">3%</td>
        <td class="p-3 text-center">
          <span class="bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold">
            80%減
          </span>
        </td>
      </tr>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">
          <div class="flex items-center gap-2">
            <mdi-eye-check class="text-purple-600" />
            コードレビュー時間
          </div>
        </td>
        <td class="p-3 text-center">2時間</td>
        <td class="p-3 text-center font-bold text-green-600">30分</td>
        <td class="p-3 text-center">
          <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">
            75%減
          </span>
        </td>
      </tr>
      <tr class="hover:bg-gray-50 transition-colors">
        <td class="p-3 font-semibold">
          <div class="flex items-center gap-2">
            <mdi-file-document class="text-orange-600" />
            ドキュメント作成
          </div>
        </td>
        <td class="p-3 text-center">翌日</td>
        <td class="p-3 text-center font-bold text-green-600">即時</td>
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
    <span class="font-bold">これは誇張ではない。実際の数字。</span>
    <mdi-chart-line class="text-orange-600 text-3xl" />
  </div>
</div>

<!--
【スライド48】
これ、私の実際の数字です。誇張じゃありません。
1日に実装できる機能が4倍に増えました。
バグは80%減。なぜならAIが事前にチェックしてくれるから。
コードレビューも早い。ドキュメントは自動生成。
これが現実です。みなさんも同じ結果が出せます。
-->

---

# よくある質問と回答

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-xl mb-4">
  <mdi-help-circle class="text-red-500" />
  Q: セキュリティは大丈夫？
</h2>

<div class="bg-green-50 p-4 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-green-700 mb-2">
    <mdi-check-circle class="text-green-600" />
    A: Businessプランなら完璧
  </h3>
  <ul class="space-y-2">
    <li class="flex items-center gap-2">
      <mdi-shield-check class="text-green-600" />
      <span>SOC2準拠</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-database-lock class="text-green-600" />
      <span>データは学習に使われない</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-server class="text-green-600" />
      <span>オンプレミス版も検討中</span>
    </li>
  </ul>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-xl mb-4">
  <mdi-help-circle class="text-blue-500" />
  Q: 既存のワークフローは？
</h2>

<div class="bg-blue-50 p-4 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-blue-700 mb-2">
    <mdi-check-circle class="text-blue-600" />
    A: 段階的に移行可能
  </h3>
  <ul class="space-y-2">
    <li class="flex items-center gap-2">
      <mdi-import class="text-blue-600" />
      <span>VSCodeからの移行は簡単</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-puzzle class="text-blue-600" />
      <span>拡張機能も大体使える</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-account-group class="text-blue-600" />
      <span>チーム単位で導入OK</span>
    </li>
  </ul>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-lightbulb class="text-purple-600 text-3xl" />
    <span class="font-bold">心配より、まず試してみて。無料トライアルあるから。</span>
    <mdi-gift class="text-pink-600 text-3xl" />
  </div>
</div>

<!--
【スライド49】
よくある質問に答えます。
セキュリティ？Businessプランなら大企業でも安心です。
既存のワークフロー？段階的に移行できます。
VSCodeから移行なら、ほぼそのまま使えます。
心配するより、まず試してみてください。
-->

---

# もっとよくある質問

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-xl mb-4">
  <mdi-help-circle class="text-purple-500" />
  Q: 学習コストは？
</h2>

<div class="bg-purple-50 p-4 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-purple-700 mb-2">
    <mdi-flash class="text-purple-600" />
    A: VSCode使えるなら即日
  </h3>
  <ul class="space-y-2">
    <li class="flex items-center gap-2">
      <mdi-gesture-tap class="text-purple-600" />
      <span>基本操作は同じ</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-robot class="text-purple-600" />
      <span>AI機能は直感的</span>
    </li>
    <li class="flex items-center gap-2">
      <emojione-flag-for-japan class="text-purple-600" />
      <span>日本語ドキュメント充実</span>
    </li>
  </ul>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-xl mb-4">
  <mdi-help-circle class="text-orange-500" />
  Q: チーム導入の進め方は？
</h2>

<div class="bg-orange-50 p-4 rounded-lg">
  <h3 class="flex items-center gap-2 font-bold text-orange-700 mb-2">
    <mdi-rocket-launch class="text-orange-600" />
    A: スモールスタートを推奨
  </h3>
  <ul class="space-y-2">
    <li class="flex items-center gap-2">
      <mdi-account class="text-orange-600" />
      <span>まず個人で試す</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-folder-outline class="text-orange-600" />
      <span>小さなプロジェクトから</span>
    </li>
    <li class="flex items-center gap-2">
      <mdi-share-variant class="text-orange-600" />
      <span>成功体験を共有</span>
    </li>
  </ul>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-wall class="text-green-600 text-3xl" />
    <span class="font-bold">導入の壁は思ったより低い。勇気だけあればいい。</span>
    <mdi-heart class="text-blue-600 text-3xl" />
  </div>
</div>

<!--
【スライド50】
もっと質問に答えます。
学習コスト？VSCode使えるなら、その日から使えます。
チーム導入？まず一人で始めて、成功体験を作ってください。
導入の壁は本当に低いんです。必要なのは勇気だけ。
-->

---

# 導入を躊躇している方へ

<div class="text-center mb-8">

<h2 class="flex items-center justify-center gap-2 text-2xl">
  <mdi-thought-bubble class="text-blue-500" />
  よくある心配事と現実
</h2>

</div>

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <th class="p-3 text-left rounded-tl-lg">
          <div class="flex items-center gap-2">
            <mdi-alert-circle class="text-xl" />
            心配事
          </div>
        </th>
        <th class="p-3 text-left rounded-tr-lg">
          <div class="flex items-center gap-2">
            <mdi-lightbulb class="text-xl" />
            現実
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-robot-angry class="text-red-600" />
            AIに仕事を奪われる
          </div>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-handshake class="text-green-600" />
            AIと協働してより価値の高い仕事ができる
          </div>
        </td>
      </tr>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-emoticon-confused class="text-orange-600" />
            使いこなせるか不安
          </div>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-calendar-week class="text-green-600" />
            1週間で慣れる、1ヶ月で手放せなくなる
          </div>
        </td>
      </tr>
      <tr class="border-b hover:bg-gray-50 transition-colors">
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-currency-usd-off class="text-yellow-600" />
            コストが高い
          </div>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-trending-up class="text-green-600" />
            生産性向上で即回収可能
          </div>
        </td>
      </tr>
      <tr class="hover:bg-gray-50 transition-colors">
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-account-remove class="text-purple-600" />
            チームの反発
          </div>
        </td>
        <td class="p-3">
          <div class="flex items-center gap-2">
            <mdi-account-heart class="text-green-600" />
            使った人から推進者になる
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
    <span class="font-bold">恐れるより、まず体験。体験すれば理解できる。</span>
    <mdi-sparkles class="text-purple-600 text-3xl" />
  </div>
</div>

<!--
【スライド51】
導入を躊躇している方の気持ち、よくわかります。
でも、心配事のほとんどは杞憂です。
AIは仕事を奪いません。より価値の高い仕事をサポートしてくれます。
使いこなせるか？1週間で慣れます。
まず体験してみてください。
-->

---

# 成功するCursor導入の秘訣

<div class="grid grid-cols-3 gap-6">
<div>

<div class="text-center">
  <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <mdi-seedling class="text-green-600 text-4xl" />
  </div>
  <h3 class="text-xl font-bold mb-3">Phase 1: 個人</h3>
</div>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-account class="text-green-600" />
    <span>個人プロジェクトで試す</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-star class="text-green-600" />
    <span>小さな成功体験を積む</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-school class="text-green-600" />
    <span>使い方を習得</span>
  </div>
</div>

</div>
<div>

<div class="text-center">
  <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <mdi-sprout class="text-blue-600 text-4xl" />
  </div>
  <h3 class="text-xl font-bold mb-3">Phase 2: チーム</h3>
</div>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-share-variant class="text-blue-600" />
    <span>成功事例を共有</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-presentation class="text-blue-600" />
    <span>勉強会を開催</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-lifebuoy class="text-blue-600" />
    <span>サポート体制構築</span>
  </div>
</div>

</div>
<div>

<div class="text-center">
  <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <mdi-tree class="text-purple-600 text-4xl" />
  </div>
  <h3 class="text-xl font-bold mb-3">Phase 3: 組織</h3>
</div>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-presentation-play class="text-purple-600" />
    <span>経営層への提案</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-cash class="text-purple-600" />
    <span>予算確保</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-office-building class="text-purple-600" />
    <span>全社展開</span>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-tortoise class="text-yellow-600 text-3xl" />
    <span class="font-bold">急がば回れ。段階的導入が最速の道。</span>
    <mdi-flag-checkered class="text-orange-600 text-3xl" />
  </div>
</div>

<!--
【スライド52】
成功する導入の秘訣をお教えします。
まず個人で始める。小さな成功体験を作る。
次にチームに広げる。勉強会を開いて、サポート体制を作る。
最後に組織全体へ。この順番が大事です。
急がば回れ。これが最速の道です。
-->

---

# 日本のエンジニアコミュニティへ

<div class="text-center mb-8">

<h2 class="flex items-center justify-center gap-2 text-2xl">
  <emojione-flag-for-japan class="text-2xl" />
  一緒に日本の開発文化を変えていきましょう
</h2>

</div>

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-hand-heart class="text-red-500" />
  私たちができること
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
    <mdi-share-variant class="text-blue-600 text-xl" />
    <div>
      <div class="font-bold">知識の共有</div>
      <div class="text-sm text-gray-600">ブログ、勉強会、OSS貢献</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <mdi-account-group class="text-green-600 text-xl" />
    <div>
      <div class="font-bold">コミュニティ構築</div>
      <div class="text-sm text-gray-600">Cursor Japan、地域meetup</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-trending-up class="text-purple-600 text-xl" />
    <div>
      <div class="font-bold">企業文化の変革</div>
      <div class="text-sm text-gray-600">ボトムアップでの推進</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
    <mdi-school class="text-orange-600 text-xl" />
    <div>
      <div class="font-bold">次世代の育成</div>
      <div class="text-sm text-gray-600">学生・新人への教育</div>
    </div>
  </div>
</div>

</div>
<div>

<div class="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
  <div class="text-center">
    <mdi-flag class="text-red-600 text-6xl mb-4" />
    <h3 class="text-2xl font-bold text-red-700 mb-4">目標</h3>
    <div class="text-lg font-semibold text-gray-700">
      日本のエンジニアリングを<br>
      世界最先端に
    </div>
  </div>
</div>

</div>
</div>

<!--
【スライド53】
日本のエンジニアコミュニティの皆さん。
一緒に日本の開発文化を変えていきましょう。
知識を共有し、コミュニティを作り、企業文化を変える。
そして次世代を育てる。
日本のエンジニアリングを、世界最先端にしましょう。
-->

---

# Cursor Japanコミュニティ

<div class="grid grid-cols-2 gap-8">
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-web class="text-blue-500" />
  オンライン活動
</h2>

<div class="space-y-3">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-web class="text-blue-600" />
      <span class="font-bold">Cursor-Japan.org</span>
    </div>
    <div class="text-sm text-gray-600">日本語リソース集約</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <simple-icons-discord class="text-purple-600" />
      <span class="font-bold">Discord</span>
    </div>
    <div class="text-sm text-gray-600">24時間サポート</div>
  </div>
  
  <div class="bg-red-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-youtube class="text-red-600" />
      <span class="font-bold">YouTube</span>
    </div>
    <div class="text-sm text-gray-600">チュートリアル動画</div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-file-document class="text-green-600" />
      <span class="font-bold">Zenn/Qiita</span>
    </div>
    <div class="text-sm text-gray-600">技術記事</div>
  </div>
</div>

</div>
<div>

<h2 class="flex items-center gap-2 text-2xl mb-4">
  <mdi-handshake class="text-green-500" />
  オフライン活動
</h2>

<div class="space-y-3">
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-calendar-month class="text-orange-600" />
      <span class="font-bold">月次Meetup</span>
    </div>
    <div class="text-sm text-gray-600">東京・大阪・福岡</div>
  </div>
  
  <div class="bg-indigo-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-hand-back-right class="text-indigo-600" />
      <span class="font-bold">ハンズオン</span>
    </div>
    <div class="text-sm text-gray-600">初心者向けワークショップ</div>
  </div>
  
  <div class="bg-cyan-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-office-building class="text-cyan-600" />
      <span class="font-bold">企業訪問</span>
    </div>
    <div class="text-sm text-gray-600">導入支援</div>
  </div>
  
  <div class="bg-pink-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-microphone class="text-pink-600" />
      <span class="font-bold">カンファレンス</span>
    </div>
    <div class="text-sm text-gray-600">年2回の大型イベント</div>
  </div>
</div>

</div>
</div>

<br>

<div class="text-center p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl">
    <mdi-account-group class="text-purple-600 text-3xl" />
    <span class="font-bold">コミュニティの力で、導入の壁を越える。</span>
    <mdi-wall class="text-pink-600 text-3xl" />
  </div>
</div>

<!--
【スライド54】
Cursor Japanコミュニティを紹介します。
オンラインでは、日本語リソースを集約。24時間サポートも。
オフラインでは、毎月Meetupを開催。
初心者向けワークショップも充実。
一人じゃない。みんなで学んで、みんなで成長しましょう。
-->

---

# 未来のビジョン：2030年の開発現場

<div class="text-center mb-8">

<h2 class="flex items-center justify-center gap-2 text-2xl">
  <mdi-crystal-ball class="text-purple-500" />
  5年後の世界
</h2>

</div>

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-trending-up class="text-blue-500" />
  予測される変化
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
    <mdi-account-multiple class="text-blue-600 text-xl" />
    <div>
      <div class="font-bold">全員がAIペアプロ</div>
      <div class="text-sm text-gray-600">エンジニア以外も含む</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
    <mdi-server-network class="text-green-600 text-xl" />
    <div>
      <div class="font-bold">MCPエコシステム</div>
      <div class="text-sm text-gray-600">数万のMCPサーバー</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
    <mdi-briefcase-plus class="text-purple-600 text-xl" />
    <div>
      <div class="font-bold">新しい職種</div>
      <div class="text-sm text-gray-600">AI Prompt Engineer、MCP Developer</div>
    </div>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
    <mdi-rocket-launch class="text-orange-600 text-xl" />
    <div>
      <div class="font-bold">生産性</div>
      <div class="text-sm text-gray-600">現在の10-20倍</div>
    </div>
  </div>
</div>

</div>
<div>

<div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
  <div class="text-center">
    <mdi-rocket class="text-purple-600 text-6xl mb-4" />
    <h3 class="text-2xl font-bold text-purple-700 mb-4">未来は既に始まっている</h3>
    <div class="text-lg font-semibold text-gray-700 mb-4">
      参加するなら今
    </div>
    <div class="bg-white/50 p-4 rounded-lg">
      <mdi-clock-alert class="text-red-600 text-3xl mb-2" />
      <div class="text-red-700 font-bold">
        今動かないと、永遠に追いつけない
      </div>
    </div>
  </div>
</div>

</div>
</div>

<!--
【スライド55】
5年後の未来を想像してください。
全員がAIとペアプログラミング。エンジニアじゃない人も。
MCPサーバーが数万個あって、あらゆる作業が自動化。
新しい職種も生まれる。生産性は今の10倍以上。
この未来、もう始まってます。参加するなら今です。
-->

---

# 行動を起こすための3つのステップ

<div class="text-center mb-8">

<h2 class="flex items-center justify-center gap-2 text-2xl">
  <mdi-rocket-launch class="text-purple-500" />
  今日から始められること
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
    今日
  </h3>
</div>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-download class="text-blue-600" />
    <span>Cursorをダウンロード</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-gift class="text-blue-600" />
    <span>無料トライアルを開始</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-folder-outline class="text-blue-600" />
    <span>簡単なプロジェクトで試す</span>
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
    今週
  </h3>
</div>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-account-group class="text-green-600" />
    <span>Cursor Japanに参加</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-server-network class="text-green-600" />
    <span>MCPサーバーを1つ試す</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-share-variant class="text-green-600" />
    <span>成功体験をシェア</span>
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
    今月
  </h3>
</div>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-account-multiple class="text-purple-600" />
    <span>チームメンバーに紹介</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-presentation class="text-purple-600" />
    <span>社内勉強会を企画</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-file-document class="text-purple-600" />
    <span>導入提案書を作成</span>
  </div>
</div>

</div>
</div>

<!--
【スライド56】
具体的なアクションプランです。
今日：Cursorをダウンロードして、無料トライアル開始。
今週：Cursor Japanに参加して、MCPを試す。
今月：チームに紹介して、勉強会を開く。
小さな一歩から始めましょう。
-->

---

# 私からのメッセージ

<div class="text-center mb-8">

<h2 class="flex items-center justify-center gap-2 text-2xl">
  <mdi-heart class="text-red-500" />
  2年前の孤独が教えてくれたこと
</h2>

</div>

<div class="space-y-6">

<div class="text-center p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl mb-4">
    <mdi-account-outline class="text-blue-600 text-3xl" />
    <span class="font-bold">イノベーションは常に少数派から始まる</span>
  </div>
</div>

<div class="text-center p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl mb-4">
    <mdi-rocket class="text-purple-600 text-3xl" />
    <span class="font-bold">でも、その少数派が未来を作る</span>
  </div>
</div>

<div class="text-center p-6 bg-gradient-to-r from-pink-100 to-red-100 rounded-xl">
  <div class="flex items-center justify-center gap-3 text-xl mb-4">
    <mdi-star class="text-pink-600 text-3xl" />
    <span class="font-bold">あなたも、その一人になれる</span>
  </div>
</div>

</div>

<br>

<div class="grid grid-cols-2 gap-6">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-lightbulb class="text-yellow-500" />
  覚えておいてください
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
    <mdi-check-circle class="text-yellow-600" />
    <span>最初は理解されなくても大丈夫</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
    <mdi-stairs-up class="text-green-600" />
    <span>小さな成功を積み重ねる</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
    <mdi-account-group class="text-blue-600" />
    <span>仲間を見つける</span>
  </div>
  <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
    <mdi-heart-outline class="text-purple-600" />
    <span>諦めない</span>
  </div>
</div>

</div>
<div>

<div class="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-200">
  <div class="text-center">
    <mdi-account-heart class="text-orange-600 text-6xl mb-4" />
    <h3 class="text-xl font-bold text-orange-700 mb-4">私の信念</h3>
    <div class="text-lg font-semibold text-gray-700">
      技術で世界を<br>
      もっと良くできる
    </div>
  </div>
</div>

</div>
</div>

<!--
【スライド57】
2年前、私は本当に孤独でした。
でも、それでよかった。
イノベーションは常に少数派から始まります。
でも、その少数派が未来を作るんです。
あなたも、その一人になれます。
最初は理解されなくても、諦めないでください。
-->

---

# お知らせ

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-web class="text-blue-500" />
  新しいプロジェクト
</h3>

<div class="space-y-4">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-check-decagram class="text-blue-600" />
      <span class="font-bold">MCPVerified.com</span>
    </div>
    <ul class="text-sm text-gray-600 space-y-1">
      <li>• MCP情報キュレーションサイト</li>
      <li>• ベストプラクティス集約</li>
      <li class="font-bold text-blue-600">• Contributors募集中！</li>
    </ul>
  </div>
  
  <div class="bg-red-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <emojione-flag-for-japan />
      <span class="font-bold">Cursor-Japan.org</span>
    </div>
    <ul class="text-sm text-gray-600 space-y-1">
      <li>• 日本語ドキュメント</li>
      <li>• イベント情報</li>
      <li class="font-bold text-red-600">• Contributors募集中！</li>
    </ul>
  </div>
</div>

</div>
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-calendar-star class="text-purple-500" />
  イベント情報
</h3>

<div class="space-y-4">
  <div class="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
    <div class="flex items-center gap-2 mb-2">
      <mdi-target class="text-purple-600" />
      <span class="font-bold">CA.ai #2</span>
    </div>
    <ul class="text-sm space-y-1">
      <li class="flex items-center gap-2">
        <mdi-calendar class="text-purple-600" />
        <span class="font-bold">2025年7月17日（木）19:30〜</span>
      </li>
      <li class="flex items-center gap-2">
        <mdi-map-marker class="text-purple-600" />
        <span>会場：Abema Towers</span>
      </li>
      <li class="flex items-center gap-2">
        <mdi-book-open class="text-purple-600" />
        <span>MCPの基礎から応用まで</span>
      </li>
      <li class="flex items-center gap-2">
        <mdi-link class="text-purple-600" />
        <span class="text-xs">connpass.com/event/327061</span>
      </li>
    </ul>
  </div>
  
  <div class="bg-yellow-50 p-4 rounded-lg">
    <div class="flex items-center gap-2 mb-2">
      <mdi-star class="text-yellow-600" />
      <span class="font-bold">夏の大型イベント</span>
    </div>
    <ul class="text-sm text-gray-600 space-y-1">
      <li>• 海外から大物ゲスト予定！</li>
      <li>• 詳細は後日発表</li>
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
    <span>興味がある方はDMください →</span>
    <mdi-arrow-right class="text-blue-600" />
    <a href="https://dub.sh/dp-enabling" class="text-blue-600 font-bold underline">dub.sh/dp-enabling</a>
  </div>
</div>

</div>

<!--
【スライド58】
最後にお知らせです。
MCPVerified.comとCursor-Japan.org、立ち上げました。
日本のCursorコミュニティを盛り上げたい！
7月17日にはCA.ai #2も開催します。MCPについて深く学べます。
そして夏には...海外から大物ゲストを呼ぶ予定！
興味ある方、ぜひ連絡ください！
-->

---

# 最後に伝えたいこと

<div class="text-center text-2xl mb-8">

<h2 class="flex items-center justify-center gap-2">
  <mdi-star class="text-yellow-500" />
  今がチャンス
</h2>

</div>

<div class="grid grid-cols-2 gap-8">
<div>

<h3 class="flex items-center gap-2 text-xl mb-4">
  <mdi-clock-alert class="text-red-500" />
  なぜ今なのか
</h3>

<div class="space-y-3">
  <div class="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
    <mdi-sprout class="text-red-600 text-xl" />
    <span>AIコーディングはまだ黎明期</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
    <mdi-trophy class="text-orange-600 text-xl" />
    <span>早期採用者の優位性は巨大</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg">
    <mdi-calendar-clock class="text-yellow-600 text-xl" />
    <span>1年後には当たり前になる</span>
  </div>
  
  <div class="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-red-50 rounded-lg border-2 border-red-300">
    <mdi-alert-octagon class="text-red-600 text-xl" />
    <span class="font-bold text-red-700">"今動かないと、永遠に追いつけない"</span>
  </div>
</div>

</div>
<div>

<div class="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
  <div class="text-center">
    <mdi-account-heart class="text-blue-600 text-6xl mb-4" />
    <h3 class="text-2xl font-bold text-blue-700 mb-4">私の体験</h3>
    <div class="text-lg font-semibold text-gray-700 mb-4">
      2年前の私の孤独が<br>
      今の成功につながった
    </div>
    <div class="bg-white/50 p-4 rounded-lg">
      <mdi-rocket-launch class="text-purple-600 text-3xl mb-2" />
      <div class="text-purple-700 font-bold">
        みなさんも今すぐ始めてください
      </div>
    </div>
  </div>
</div>

</div>
</div>

<!--
【スライド59】
最後に、一番伝えたいこと。
今がチャンスです。本当に。
AIコーディングはまだ始まったばかり。
今始めれば、1年後には圧倒的な差がつきます。
2年前、私は孤独でした。でも続けた。
今、その価値を実感しています。みなさんも今すぐ始めてください。
-->

---
layout: center
class: text-center
---

# ありがとうございました！

<div class="text-2xl mt-8">

<h2 class="flex items-center justify-center gap-2">
  <mdi-rocket-launch class="text-purple-500" />
  一緒にCursorとMCPで未来を創りましょう！
  <mdi-heart class="text-red-500" />
</h2>

</div>

<div class="mt-12">

<h3 class="flex items-center justify-center gap-2 text-xl mb-4">
  <mdi-account-network class="text-blue-500" />
  Connect with me
</h3>

<div class="flex items-center justify-center gap-6">
  <div class="flex items-center gap-2">
    <mdi-twitter class="text-blue-400 text-2xl" />
    <span class="text-lg">@gunta85</span>
  </div>
  <div class="flex items-center gap-2">
    <mdi-linkedin class="text-blue-600 text-2xl" />
    <span class="text-lg">/in/gunther-brunner</span>
  </div>
</div>

</div>

<div class="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl inline-block">
  <div class="flex items-center gap-3">
    <mdi-sparkles class="text-purple-600 text-3xl" />
    <span class="text-lg font-semibold">未来は今、ここから始まります</span>
    <mdi-flag class="text-pink-600 text-3xl" />
  </div>
</div>

<!--
【スライド60】
ご清聴ありがとうございました！
Cursorは単なるエディタじゃありません。
私たちの働き方、生き方を変える革命的なツールです。
一緒に、この新しい世界を創っていきましょう！
質問がある方は、ぜひ懇親会で声かけてください。
今日は本当にありがとうございました！
-->