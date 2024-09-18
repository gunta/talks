---
theme: default
background: bg-front.jpg
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## DevExは究極のROI：開発者満足度が紐解く驚異の収益化
  Presentation slides for developers.
drawings:
  persist: false
transition: slide-left
title: DevExは究極のROI：開発者満足度が紐解く驚異の収益化
mdc: true
---

# DevExは究極のROI<br><br>**開発者満足度が紐解く<br>驚異の収益化**

<!--
みなさん、こんにちは！今日は「DevExは究極のROI」というテーマでお話しします。DevExの重要性とビジネス貢献度について、これから10分間で見ていきます。DevExが企業にもたらす驚くべき価値を一緒に探っていきましょう。
-->

---
layout: image
image: white-art-bg.jpg
class: text-black
---
<div class="text-black">

# 自己紹介
 
<fluent-emoji-person-light /> **<ruby>Günther<rt>グンタ</rt></ruby> <ruby>Brunner<rt>ブルンナー</rt></ruby>**

<img src="/CALogo.svg" alt="CA" width="20px" height="20px" style="display: inline-block; vertical-align: middle; margin-bottom: 5px;" /> CyberAgent <span style="color: gray;">since 2012</span>
<br>

- <mdi-office-building class="text-orange-500" /> CTO統括室 <carbon-development class="text-teal-500" /> > [**Developer Productivity室**](https://site.developerproductivity.dev/) 
<br>


<flat-color-icons-like /> <logos-openai-icon /> AI <majesticons-ux-circle-line /> UX <logos-figma /> Design <emojione-v1-lightning-mood /> Performance
<br>
<logos-spotify-icon /> Music <logos-netflix-icon /> Movies <noto-sushi /> Sushi <material-symbols-travel class="text-blue-400" /> Travel

<br>
<br>

<fa6-brands-square-x-twitter /> [@gunta85](https://twitter.com/gunta85)
<br>

<carbon-logo-github /> [@gunta](https://github.com/gunta)
<br>

<skill-icons-devto-light /> [dev.to/gunta](https://dev.to/gunta)
<br>

<simple-icons-zenn class="text-blue-400"/> [zenn.dev/gunta](https://zenn.dev/gunta)

</div>

<!--
グンタ・ブルンナーです。CyberAgentのDeveloper Productivity室で働いています。AI、UX、デザインに興味があり、趣味は音楽や旅行です。SNSでも活動していますので、よろしければフォローしてください。それでは、本題に入りましょう。
-->

---
layout: default
---

# 目次

<Toc maxDepth="1"></Toc>

<!--
今日は開発生産性の現状、DevExの定義と重要性、そして導入のベストプラクティスについて話します。では、現状から見ていきましょう。
-->

---
layout: image-right
image: https://plus.unsplash.com/premium_photo-1661320941506-9fbe0aab091c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# 1. 開発生産性の現状（2024）

<v-clicks>

- **デジタルトランスフォーメーション（DX）の加速**
  - 日本企業の<span class="text-green-500">**DX投資額**</span>が<span class="text-red-500">**前年比20.3%増加**</span> 

- **開発者の役割の重要性増大**
  - <span class="text-blue-500">**ソフトウェア**</span>が<span class="text-purple-500">**ビジネス成功の鍵**</span> <twemoji-key class="text-yellow-500" />

- **開発者体験（DevEx）の重要性**
  - 開発者の<span class="text-orange-500">**生産性**</span>と<span class="text-teal-500">**満足度**</span>に<span class="text-indigo-500">**直結**</span> <twemoji-smiling-face-with-smiling-eyes class="text-blue-500" />

- <small>参考：<a href="https://getdx.com/report/state-of-developer-experience-report/" target="_blank">State of developer experience report 2024 - Atlassian & DX</a></small>


</v-clicks>

<!--
2024年の開発生産性の現状を見てみましょう。

DXの波で日本企業のDX投資額が20.3%増加。開発者の役割が重要に。

ソフトウェアがビジネス成功の鍵。

DevExが開発者の生産性と満足度に直結。

データはAtlassianの「State of developer experience report 2024」から。興味ある人はチェックしてみてください。
-->



---
layout: image-right
image: https://plus.unsplash.com/premium_photo-1661320941506-9fbe0aab091c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# 1. 開発生産性の現状（2024）続き

<v-clicks>

- **開発者の課題**
  - <span class="text-red-500">**69%**</span>が週**8時間以上**を<span class="text-red-500">**非効率的作業**</span>に費やす <twemoji-hourglass-not-done class="text-red-500" />
  - <span class="text-orange-500">**44%**</span>が<span class="text-orange-500">**技術的負債**</span>に悩まされている <mdi-code-brackets class="text-orange-500" />
  - <span class="text-blue-500">**41%**</span>が<span class="text-blue-500">**不十分なドキュメンテーション**</span>に苦労 <mdi-file-document-outline class="text-blue-500" />

- **AIツールの導入状況**
  - <span class="text-red-500">**62%**</span>がAIツールによる<span class="text-red-500">**生産性向上を実感できていない**</span> <mdi-robot-confused class="text-red-500" />
  - <span class="text-green-500">**61%**</span>が今後2年以内にAIツールが<span class="text-green-500">**生産性を向上させると期待**</span> <mdi-robot class="text-green-500" />

</v-clicks>

<!--
開発者の現状は厳しいです。69%が週8時間以上を非効率作業に費やし、44%が技術的負債、41%がドキュメント不足に悩んでいます。

AIツールについては、62%が生産性向上を実感できていませんが、61%が2年以内の改善を期待しています。

現在はAIの活用が不十分ですが、将来的な可能性に期待が高まっているようです。
-->

---
layout: two-cols
---

# 2. 従来のフレームワーク: DORA

<!-- <v-clicks> -->

| 主要指標 | 説明 |
|----------|------|
| **デプロイ頻度** <mdi-rocket-launch-outline class="text-green-500" /> | コードを<span class="text-green-500">**プロダクション環境にデプロイする頻度**</span> |
| **リードタイム** <mdi-timer-sand class="text-orange-500" /> | <span class="text-orange-500">**コミットからデプロイまでの所要時間**</span> |
| **変更失敗率** <mdi-alert-circle-outline class="text-red-500" /> | デプロイ後に<span class="text-red-500">**修正が必要となる割合**</span> |
| **平均復旧時間（MTTR）** <mdi-clock-fast class="text-purple-500" /> | 障害発生から<span class="text-purple-500">**復旧までの平均時間**</span> |

::right::
<v-clicks>

- 利点 <mdi-thumb-up class="text-green-500" />
  - DevOpsパフォーマンスの<span class="text-blue-500">**包括的評価**</span> <mdi-magnify-expand class="text-blue-500" />
  - <span class="text-purple-500">**業界ベンチマーク**</span>との比較が可能 <mdi-chart-bar class="text-purple-500" />

- 限界 <mdi-thumb-down class="text-red-500" />
  - <span class="text-orange-500">**ソフトウェア配信パフォーマンス**</span>に特化 <mdi-package-variant class="text-orange-500" />
  - 開発者の<span class="text-yellow-500">**日常的な課題**</span>を捉えきれない <mdi-account-question class="text-yellow-500" />

</v-clicks>

<!-- </v-clicks> -->

<!--
DORAは開発生産性を測る重要なフレームワークです。4つの主要指標（デプロイ頻度、リードタイム、変更失敗率、平均復旧時間）を使って、DevOpsのパフォーマンスを評価します。

しかし、DORAにも限界があります。ソフトウェア配信に特化しすぎていて、コードレビューの効率性やドキュメンテーションの質など、開発者の日常的な課題を捉えきれないんです。
-->

---
layout: two-cols
---

# 2. 従来のフレームワーク: DORA Core v2

| 主要要素 | 説明 |
|----------|------|
| **継続的デリバリー** <mdi-rocket-launch-outline class="text-green-500" /> | <span class="text-green-500">**高頻度で安定したソフトウェアリリース**</span> |
| **アーキテクチャ** <mdi-view-grid-outline class="text-orange-500" /> | <span class="text-orange-500">**スケーラブルで保守可能なシステム設計**</span> |
| **製品とプロセス** <mdi-cog-outline class="text-red-500" /> | <span class="text-red-500">**顧客中心の開発プロセス**</span> |
| **リーンマネジメント** <mdi-chart-gantt class="text-purple-500" /> | <span class="text-purple-500">**効率的な作業フローと継続的改善**</span> |
| **文化** <mdi-account-group-outline class="text-blue-500" /> | <span class="text-blue-500">**協力的で学習重視の組織文化**</span> |

::right::

<v-clicks>

- 利点 <mdi-thumb-up class="text-green-500" />
  - より<span class="text-blue-500">**包括的**</span>なアプローチ <mdi-check-circle-outline class="text-blue-500" />
  - <span class="text-purple-500">**セキュリティとコンプライアンス**</span>の強化 <mdi-shield-check-outline class="text-purple-500" />
  - <span class="text-orange-500">**組織文化**</span>と<span class="text-yellow-500">**技術的実践**</span>の統合 <mdi-handshake class="text-orange-500" />

- 課題 <mdi-thumb-down class="text-red-500" />
  - 実装の<span class="text-orange-500">**複雑さ**</span>が増加 <mdi-alert-circle-outline class="text-orange-500" />
  - 全要素の<span class="text-yellow-500">**バランス**</span>を取ることが難しい <mdi-scale-balance class="text-yellow-500" />

</v-clicks>

<!--
DORA Core v2は、DORAの進化版で5つの主要要素があります。

利点:
- より包括的なアプローチ
- セキュリティとコンプライアンスの強化
- 組織文化と技術的実践の統合

課題:
- 実装の複雑さが増加
- 全要素のバランスを取ることが難しい

つまり、理想的だが導入は大変です。
-->

---
layout: two-cols
---

# 2. 従来のフレームワーク: SPACE

| 次元 | 説明 |
|------|------|
| 満足度（S） <mdi-emoticon-happy-outline class="text-yellow-500" /> | <span class="text-yellow-500">**仕事への満足度と幸福度**</span> |
| パフォーマンス（P） <mdi-chart-line class="text-green-500" /> | <span class="text-green-500">**成果と貢献度**</span> |
| アクティビティ（A） <mdi-run-fast class="text-blue-500" /> | <span class="text-blue-500">**日々の活動と行動**</span> |
| コミュニケーション（C） <mdi-message-text-outline class="text-purple-500" /> | <span class="text-purple-500">**情報共有と協力**</span> |
| 効率性（E） <mdi-lightning-bolt-outline class="text-orange-500" /> | <span class="text-orange-500">**作業のフロー状態**</span> |

::right::
<v-clicks>

- 利点 <mdi-thumb-up class="text-green-500" />
  - 開発者生産性の<span class="text-blue-500">**多面的な捉え方**</span> <mdi-view-grid-plus class="text-blue-500" />
  - <span class="text-purple-500">**主観的要素と客観的要素**</span>の統合 <mdi-scale-balance class="text-purple-500" />

- 課題 <mdi-thumb-down class="text-red-500" />
  - 具体的な<span class="text-orange-500">**測定方法が不明確**</span> <mdi-ruler-square-compass class="text-orange-500" />
  - 組織への<span class="text-yellow-500">**適用が複雑**</span> <mdi-sitemap class="text-yellow-500" />

</v-clicks>

<!--
SPACEフレームワークは開発者生産性を5つの次元で捉えます：満足度、パフォーマンス、アクティビティ、コミュニケーション、効率性。

利点は生産性の多面的な捉え方と主観・客観要素の統合です。

課題は具体的な測定方法の不明確さと組織への適用の複雑さです。

つまり、理論的には優れていますが実践は難しいのです。

従来のフレームワークにはそれぞれ長所短所があります。そこで登場するのがDevExなのです。
-->

---
layout: cover
class: text-center
background: https://images.unsplash.com/photo-1483388147740-e5c70536042e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# 3. DevExとは何か？

### Developer Experience（開発者体験）の略称

<!--
さて、ここからが本題です。DevExとは何か？

DevExは「Developer Experience」、つまり「開発者体験」の略です。

これは開発生産性を考える上で重要なキーワードです。

なぜDevExが重要なのか、詳しく見ていきましょう。
-->

---
layout: image
image: https://cdn.midjourney.com/ba887992-43ec-4f20-ac53-94a834f82718/0_0.png
class: text-center flex items-center justify-center
---

# <br><span class="text-black bg-gradient-to-r from-purple-700 via-pink-600 to-black-500 bg-clip-text text-transparent opacity-90">なぜ**開発者体験**が見過ごされがちか？</span>

<!--
DevExの重要性は明らかですが、なぜ見過ごされがちなのでしょうか？

グローバルな課題に加え、日本特有の文化的要因も影響しています。

これらの理由を次のスライドで詳しく見ていきます。
-->

---
layout: two-cols
---

## 開発者体験が見過ごされる理由


<v-clicks>

### グローバルな課題と日本の特殊性

- <twemoji-globe-showing-americas class="text-blue-500" /> **世界共通の課題**
  - 開発者体験の重要性軽視 <twemoji-thinking-face />
  - 短期成果偏重 <twemoji-hourglass-not-done class="text-yellow-500" />

- <twemoji-flag-japan /> **日本特有の文化**
  - **我慢の美徳**: 困難を美化する傾向 <twemoji-face-with-steam-from-nose class="text-red-500" />
  - **集団主義**: 個人より調和重視 <twemoji-people-hugging class="text-blue-500" />
  - **階層構造**: 上意下達の文化 <twemoji-office-building class="text-gray-500" />

### <twemoji-flag-japan /> 日本の誤解
- 開発者の要求は<span class="text-red-500">**「わがまま」ではない**</span> <twemoji-person-pouting class="text-orange-500" /> <twemoji-cross-mark class="text-red-500" />
  - 実際は<span class="text-green-500">**生産性向上**</span>のための<span class="text-blue-500">**合理的な要求**</span> <twemoji-light-bulb class="text-yellow-500" />
  - 開発環境の改善は<span class="text-purple-500">**組織全体の利益**</span>につながる <twemoji-rocket class="text-blue-500" />
- <span class="text-green-500">**生産性向上**</span> ≠ <span class="text-red-500">**長時間労働**</span> <twemoji-alarm-clock class="text-purple-500" /> <twemoji-cross-mark class="text-red-500" />
  - ソフト開発では、<span class="text-yellow-500">**創造性**</span>と<span class="text-blue-500">**問題解決**</span>が重要 <twemoji-light-bulb class="text-yellow-500" />
  - <span class="text-red-500">**長時間労働**</span>はむしろ<span class="text-orange-500">**生産性を低下**</span>させる <twemoji-chart-decreasing class="text-red-500" />

</v-clicks>

::right::

<v-clicks>

### パラダイムシフトの必要性

- **日本CTO協会の取り組み** <twemoji-building-construction class="text-blue-500" />
  - <span class="text-green-500">**DX Criteriaの策定**</span>
  - 代表理事: <span class="text-blue-500">**松岡 剛志**</span><br>（CyberAgent Capital, Coincheck等）

- **DevExの重要性** <twemoji-sparkles class="text-yellow-500" />
  - <span class="text-teal-500">**持続可能な開発環境の構築**</span> <twemoji-seedling class="text-green-500" />
  - <span class="text-purple-500">**イノベーションの促進**</span> <twemoji-light-bulb class="text-yellow-500" />
  - <span class="text-blue-500">**グローバル競争力の向上**</span> <twemoji-globe-showing-americas class="text-blue-500" />

- **新しい価値観** <twemoji-new-button class="text-red-500" />
  - 「<span class="text-red-500">**無理をする**</span>」から「<span class="text-green-500">**効率的に働く**</span>」へ <twemoji-right-arrow class="text-blue-500" />
  - <span class="text-orange-500">**個人の成長**</span>が<span class="text-blue-500">**チームの成長**</span>につながる <twemoji-chart-increasing class="text-green-500" />

</v-clicks>

<!--
DevExの定義と重要性を見ていきましょう。DevExは開発者の仕事に対する考え方や価値観を表します。86%のリーダーが人材獲得・維持に不可欠と考え、63%の開発者が転職判断の基準にしています。DevExは生産性向上、従業員満足度増加、エンゲージメント向上、定着率改善に影響します。つまり、DevExはビジネス成功の鍵なんです。
-->

---



---
layout: default
---
# DevExの定義と重要性

<v-clicks>

- **定義**: <span class="text-blue-500">**開発者が自分の仕事について考え、感じ、価値を見出す方法**</span>
- <span class="text-purple-500">**25以上の社会技術的要因**</span>が影響

## なぜDevExが重要か

- <span class="text-green-500">**86%**</span>のリーダーが**優秀な人材の獲得・維持**にDevExが**不可欠**と認識 <twemoji-person-raising-hand class="text-blue-500" />
- <span class="text-orange-500">**63%**</span>の開発者が**現職継続の判断**にDevExを**重視** <twemoji-briefcase class="text-purple-500" />

## DevExの影響範囲

- <span class="text-red-500">**生産性向上**</span> <twemoji-chart-increasing class="text-green-500" />
- <span class="text-yellow-500">**従業員満足度の増加**</span> <twemoji-smiling-face-with-smiling-eyes class="text-yellow-500" />
- <span class="text-teal-500">**エンゲージメントの向上**</span> <twemoji-fire class="text-orange-500" />
- <span class="text-indigo-500">**従業員の定着率改善**</span> <twemoji-handshake class="text-blue-500" />

</v-clicks>

<!--
DevExは開発者の仕事に対する考え方や価値観を表します。25以上の要因が影響し、86%のリーダーが人材獲得・維持に不可欠と考えています。63%の開発者が転職判断の基準にしているほど重要です。DevExは生産性向上、従業員満足度増加、エンゲージメント向上、定着率改善に影響します。つまり、DevExはビジネス成功の鍵なのです。
-->

---
layout: default
---

# DevEx論文の背景

## 論文概要

<v-clicks>

- タイトル: "DevEx: What Actually Drives Productivity"
- 発表日: 2023年5月3日
- 掲載: Communications of the ACM, Vol. 21 Issue 2
- リンク: [https://queue.acm.org/detail.cfm?id=3595878](https://queue.acm.org/detail.cfm?id=3595878)

</v-clicks>

<!--
論文概要
-->

---
layout: default
---

# DevEx論文の背景（続き）

## 著者と経歴



<div class="grid grid-cols-2 gap-4 text-sm">
  <div>
    <p><strong>Dr. Margaret-Anne Storey</strong> <twemoji-woman-technologist /></p>
    <ul class="list-disc list-inside">
      <li><strong>ビクトリア大学 CS教授</strong></li>
      <li>ソフトウェア工学、HCI専門家</li>
      <li><strong>SPACEフレームワーク共同著者</strong></li>
    </ul>
  </div>
  <div>
    <p><strong>Dr. Abi Noda</strong> <twemoji-man-technologist /></p>
    <ul class="list-disc list-inside">
      <li><strong>DX社 創設者兼CEO</strong></li>
      <li>元GitHubのPM</li>
      <li>開発者生産性専門家</li>
    </ul>
  </div>
  <div>
    <p><strong>Dr. Nicole Forsgren</strong> <twemoji-woman-scientist /></p>
    <ul class="list-disc list-inside">
      <li><strong>GitHub リサーチ＆戦略VP</strong></li>
      <li>元Google、MSFT DevOpsリード</li>
      <li><strong>DORA共同創設者</strong></li>
      <li>『Accelerate』共著者</li>
    </ul>
  </div>
  <div>
    <p><strong>Dr. Michaela Greiler</strong> <twemoji-woman-teacher /></p>
    <ul class="list-disc list-inside">
      <li><strong>ソフトウェアエンジニアリングコンサルタント</strong></li>
      <li>元Microsoft研究者</li>
      <li>コードレビュー、生産性専門家</li>
    </ul>
  </div>
</div>


<!--
DevEx論文の著者を紹介します。豪華な顔ぶれです：

Margaret-Anne Storey：ビクトリア大学教授、SPACEフレームワーク共同著者。
Abi Noda：DX社CEO、元GitHub PM。
Nicole Forsgren：GitHub VP、DORA共同創設者。
Michaela Greiler：ソフトウェアエンジニアリングコンサルタント。

この4人の専門知識が結集した論文は、DevExの理論と実践を深く理解する貴重な資料です。
-->

---
layout: default
---

# DevEx論文の重要性 

<v-clicks>

- <twemoji-busts-in-silhouette class="text-blue-500" /> **4人の著名な研究者・実務者による共同研究**
  - 異なる専門性と経験を持つ専門家の知見を結集
- <twemoji-handshake class="text-green-500" /> **学術研究と産業実践の融合**
  - 理論と実践の橋渡しを実現し、より実用的な知見を提供
- <twemoji-building-construction class="text-orange-500" /> **DORA、SPACE、その他の先行研究を基に発展**
  - 既存の重要な研究成果を統合し、新たな視点を加えて発展
- <twemoji-magnifying-glass-tilted-left class="text-purple-500" /> **開発者体験（DevEx）の包括的な理解と測定方法を提案**
  - DevExの多面的な側面を捉え、実践的な改善策を提示

</v-clicks>

<v-clicks>
  <div class="mt-4 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
    <p class="text-white font-bold text-lg">
      <twemoji-warning /> この論文は、ソフトウェア開発プロセスと開発者の生産性向上に関する重要な指針です。
    </p>
  </div>
</v-clicks>

<!--
じゃあ、このDevEx論文の重要性を簡潔に説明しますね。

まず、4人の著名な専門家が共同で執筆しているため、多角的な視点が得られます。

次に、学術研究と産業実践を融合させ、理論と実用性のバランスが取れています。

さらに、DORAやSPACEなどの既存研究を基に発展させ、新たな知見を加えています。

最後に、DevExを包括的に理解し、測定する方法を提案しています。

この論文は、ソフトウェア開発プロセスと開発者の生産性向上に関する重要な指針となります。実践的な改善策を提示しているので、しっかり学び、活用する価値があります。
-->

---
layout: default
---

# DevEx DX25メトリクス

<div class="bg-gray-100 w-full overflow-x-auto relative rounded-lg p-2">
  <div class="grid grid-cols-5 gap-2">
    <div class="col-span-3 bg-white border-2 border-indigo-500 rounded-md p-2">
      <h3 class="text-base font-bold text-indigo-600 mb-1">DXドライバー</h3>
      <div class="grid grid-cols-3 gap-1 text-sm">
        <div class="bg-indigo-100 p-1 rounded"><twemoji-package class="inline mr-1" />バッチサイズ</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-hammer-and-wrench class="inline mr-1" />ビルド</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-compass class="inline mr-1" />方向性</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-memo class="inline mr-1" />コードレビュー</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-file-cabinet class="inline mr-1" />コードベース</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-link class="inline mr-1" />つながり</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-people-hugging class="inline mr-1" />チーム協力</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-brain class="inline mr-1" />深い作業</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-page-facing-up class="inline mr-1" />ドキュメント</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-rocket class="inline mr-1" />リリース</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-high-voltage class="inline mr-1" />効率性</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-test-tube class="inline mr-1" />実験</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-warning class="inline mr-1" />インシデント</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-graduation-cap class="inline mr-1" />学習文化</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-speech-balloon class="inline mr-1" />フィードバック</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-laptop class="inline mr-1" />ローカル開発</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-house class="inline mr-1" />ローカル環境</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-money-with-wings class="inline mr-1" />技術的負債</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-bell class="inline mr-1" />オンコール</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-bug class="inline mr-1" />本番デバッグ</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-hourglass-not-done class="inline mr-1" />タイムライン</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-clipboard class="inline mr-1" />要件品質</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-world-map class="inline mr-1" />ロードマップ</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-microscope class="inline mr-1" />テスト範囲</div>
        <div class="bg-indigo-100 p-1 rounded"><twemoji-stopwatch class="inline mr-1" />テスト効率</div>
      </div>
    </div>
    <div class="bg-white border-2 border-lime-600 rounded-md p-2">
      <h3 class="text-base font-bold text-lime-600 mb-1">DX KPI</h3>
      <div class="space-y-1 text-sm">
        <div class="bg-lime-100 p-1 rounded"><twemoji-racing-car class="inline mr-1" />スピード</div>
        <div class="bg-lime-100 p-1 rounded"><twemoji-package class="inline mr-1" />デリバリー容易さ</div>
        <div class="bg-lime-100 p-1 rounded"><twemoji-check-mark-button class="inline mr-1" />品質</div>
      </div>
    </div>
    <div class="bg-white border-2 border-blue-950 rounded-md p-2">
      <h3 class="text-base font-bold text-blue-950 mb-1">成果</h3>
      <div class="space-y-1 text-sm">
        <div class="bg-blue-100 p-1 rounded"><twemoji-chart-increasing class="inline mr-1" />組織<br>パフォーマンス</div>
        <div class="bg-blue-100 p-1 rounded"><twemoji-fire class="inline mr-1" />従業員<br>エンゲージメント</div>
        <div class="bg-blue-100 p-1 rounded"><twemoji-hourglass-not-done class="inline mr-1" />時間の無駄削減</div>
        <div class="bg-blue-100 p-1 rounded"><twemoji-handshake class="inline mr-1" />離職率低下</div>
      </div>
    </div>
  </div>
</div>

<!--
DevExの3つの重要な次元を紹介します。これらを理解することで、DevExの本質が見えてきます。

1つ目は「フィードバックループ」。開発者のアクションに対する反応の速さと質を指します。例えば、コードレビューの速度やCI結果の生成時間などです。

2つ目は「認知負荷」。タスク実行に必要な精神的な処理量のことです。コードベースの複雑さやデバッグの容易さなどが含まれます。

3つ目は「フロー状態」。完全に没頭し、集中できる状態を指します。中断のない深い作業時間や、タスクの明確さなどが関係します。

最後に、DevExの測定方法として、知覚指標、ワークフロー指標、KPIの3つがあります。これらを使って、DevExを包括的に評価できます。
-->

---
layout: two-cols
---

# 4. DevExの3つの次元 <twemoji-gear class="text-blue-500" />

<v-clicks>

## 1. フィードバックループ <twemoji-repeat-button class="text-green-500" />
- **定義**: <span class="text-green-500">**行動に対する応答の速度と品質**</span>
- 例:
  - <twemoji-memo class="text-yellow-500" /> コードレビューのターンアラウンドタイム
  - <twemoji-hammer-and-wrench class="text-orange-500" /> CI結果生成時間
  - <twemoji-rocket class="text-purple-500" /> デプロイメントリードタイム

## 2. 認知負荷 <twemoji-brain class="text-red-500" />
- **定義**: <span class="text-red-500">**タスク実行に必要な精神的処理量**</span>
- 例:
  - <twemoji-puzzle-piece class="text-blue-500" /> コードベースの複雑さの認識
  - <twemoji-magnifying-glass-tilted-left class="text-indigo-500" /> デバッグの容易さ
  - <twemoji-open-book class="text-teal-500" /> ドキュメンテーションの理解しやすさ

</v-clicks>

::right::

<v-clicks>

## 3. フロー状態 <twemoji-person-in-lotus-position class="text-purple-500" />
- **定義**: <span class="text-purple-500">**完全に没頭し、集中できる状態**</span>
- 例:
  - <twemoji-hourglass-not-done class="text-green-500" /> 中断のない深い作業時間の満足度
  - <twemoji-bullseye class="text-blue-500" /> タスクや目標の明確さ
  - <twemoji-mobile-phone class="text-red-500" /> オンコール待機の中断度

## DevExの測定方法 <twemoji-bar-chart class="text-orange-500" />

1. <span class="text-yellow-500">**知覚指標**</span>（開発者の態度や意見）
2. <span class="text-blue-500">**ワークフロー指標**</span>（システムと過程の動作）
3. <span class="text-green-500">**KPI**</span>（主要業績評価指標）

</v-clicks>

<!--
さて、ここからDevExの3つの重要な次元について説明します。

1つ目は「フィードバックループ」。これは開発者のアクションに対する反応の速さと質を指します。例えば、コードレビューやCIの結果の速さなどが該当します。

2つ目は「認知負荷」。これは開発者がタスクを実行する際の精神的負担のことです。コードの複雑さやデバッグの難しさなどが関係します。

3つ目は「フロー状態」。これは開発者が完全に集中できる状態を指します。中断のない作業時間やタスクの明確さなどが影響します。

最後に、DevExの測定方法として、知覚指標、ワークフロー指標、KPIの3つがあります。これらを組み合わせることで、DevExを総合的に評価し、改善点を特定できます。
-->

---
layout: two-cols
---

<style>
.devex-impact h1 {
  margin-bottom: 1rem;
}
.devex-impact h3 {
  margin-top: 1rem;
}
.devex-impact ul {
  margin-top: 0.5rem;
}
.devex-impact .logo {
  margin-bottom: 1rem;
}
</style>

<div class="devex-impact">

# DevExがROIに与える影響 (1/5)

<img src="https://cdn.brandfetch.io/iddTc-lesG/theme/dark/logo.svg?k=bfHSJFAPEG" alt="McKinsey Logo" class="w-32 h-auto logo">

### 調査結果

<v-clicks>

- 優れた開発者体験を提供する企業は、<br>競合他社と比較して**4〜5倍の収益成長**を達成 <twemoji-chart-increasing class="text-green-500" />

### 具体的な数字:
- 開発者生産性: <span class="text-blue-500">**最大20%向上**</span> <twemoji-rocket class="text-blue-500" />
- 新機能開発時間: <span class="text-orange-500">**50%短縮**</span> <twemoji-hourglass-not-done class="text-orange-500" />
- 顧客満足度: <span class="text-green-500">**30%向上**</span> <twemoji-smiling-face-with-smiling-eyes class="text-green-500" />

</v-clicks>

</div>

::right::

<div class="devex-impact">

<v-clicks>

<img src="https://cdn.brandfetch.io/idjTS-RPU1/theme/dark/logo.svg?k=bfHSJFAPEG" alt="eBay Logo" class="w-16 h-auto logo">

- DevEx改善の結果：
  - リリース頻度が**2倍**に増加 <twemoji-rocket class="text-blue-500" />
  - デプロイのリードタイムが**6分の1**に短縮 <twemoji-stopwatch class="text-purple-500" />

### 具体的な改善:
- <span class="text-red-500">**CI/CDパイプラインの最適化**</span> <twemoji-gear class="text-red-500" />
- <span class="text-yellow-500">**自動化テストの拡充**</span> <twemoji-test-tube class="text-yellow-500" />
- <span class="text-teal-500">**開発環境の標準化**</span> <twemoji-desktop-computer class="text-teal-500" />

</v-clicks>

</div>

<!--
さて、DevExの改善がもたらす経済的インパクトを具体的に見ていきましょう。

まず、人材コストの削減です。500人規模の開発チームで、週8時間の非効率性があると年間約10億円のコストがかかります。DevExの改善でこの60-70%を削減できる可能性があります。

次に、離職率の低下によるコスト削減です。開発者の採用・トレーニングには約426万円かかります。DevEx向上で離職率が20%低下すれば、100人チームで年間8,520万円以上節約できます。

これらの数字は、DevExへの投資が単なるコストではなく、大きな経済的リターンをもたらす可能性を示しています。
-->

---
layout: default
---

# DevExがROIに与える影響 (2/5)

## 経済的インパクトの分析

<v-clicks>

1. <span class="text-red-500">**人材コストの削減**</span>
   - 500人規模の開発チームの例：
     - 週8時間の非効率性 = 年間約<span class="text-red-500">**9億8,000万円**</span>のコスト <twemoji-money-bag class="text-red-500" />
     - DevExの改善により、このコストの<span class="text-green-500">**60-70%**</span>を削減可能 <twemoji-chart-decreasing class="text-green-500" />

2. <span class="text-blue-500">**離職率の低下によるコスト削減**</span>
   - 平均的な開発者の採用・トレーニングコスト: 約<span class="text-blue-500">**426万円**</span>
   - DevEx向上により離職率が20%低下した場合:
     - 100人チームで年間<span class="text-green-500">**8,520万円**</span>以上の節約 <twemoji-money-with-wings class="text-green-500" />


</v-clicks>

<!--
DevExの改善がもたらす経済的インパクトを具体的に見てみましょう。

人材コストの削減を例に取ると、500人規模の開発チームで週8時間の非効率性があると、年間約10億円のコストがかかります。しかし、DevExの改善でこのコストの70%、つまり年間6億円以上を削減できる可能性があるのです。これは非常に大きな経済的効果といえるでしょう。
-->

---
layout: default
---

# DevExがROIに与える影響 (3/5)

## 経済的インパクトの分析

<v-clicks>

3. <span class="text-purple-500">**市場投入時間の短縮による収益増**</span>
   - 新機能のリリースが1ヶ月早まった場合:
     - 中規模のSaaS企業で<span class="text-blue-500">**10-15%の追加収益**</span>の可能性 <twemoji-chart-increasing class="text-blue-500" />

4. <span class="text-orange-500">**バグ修正コストの削減**</span>
   - 開発段階でのバグ修正コスト: <span class="text-orange-500">**1.4万円**</span>
   - 本番環境でのバグ修正コスト: <span class="text-red-500">**142万円**</span>
   - DevExによる品質向上で、本番環境のバグを30%削減:
     - 1000件のバグで<span class="text-green-500">**3億8,340万円**</span>の節約 <twemoji-money-bag class="text-green-500" />
     
</v-clicks>

---
layout: two-cols
---

# DevExがROIに与える影響 (4/5)

## 長期的な競争力向上

<v-clicks>

1. <span class="text-blue-500">**イノベーション能力の向上**</span> <twemoji-light-bulb class="text-blue-500" />
   - <logos-google class="text-red-500" />の事例
     - <span class="text-blue-500">**20%ルール**</span>による新製品開発 <twemoji-rocket class="text-blue-500" />
     - <logos-google-gmail /> Gmail、<simple-icons-googlenews /> Google Newsなどの<span class="text-green-500">**が誕生**</span>
   - DevExが良好な環境では、<span class="text-green-500">**新アイデアの提案が3倍に増加**</span> <twemoji-chart-increasing class="text-green-500" />

2. <span class="text-orange-400">**顧客満足度の向上**</span> <twemoji-smiling-face-with-smiling-eyes class="text-orange-500" />
   - <bi-amazon class="text-orange-400" />の事例
     - <span class="text-red-500">**1秒のページロード遅延で売上1%減少**</span> <twemoji-snail class="text-red-500" />
   - DevEx向上により、<span class="text-purple-500">**パフォーマンス最適化**</span>に注力

</v-clicks>

::right::

<v-clicks>

3. <span class="text-blue-500">**セキュリティの強化**</span> <twemoji-locked-with-key class="text-blue-500" />
   - <logos-microsoft />の例
     - DevSecOpsの導入で<span class="text-green-500">**セキュリティ脆弱性を40%削減**</span> <twemoji-shield class="text-green-500" />
   - 良好なDevExにより、<span class="text-orange-500">**セキュリティベストプラクティス**</span>の採用が容易に <twemoji-check-mark-button class="text-orange-500" />

4. <span class="text-red-500">**スケーラビリティの向上**</span> <twemoji-chart-increasing class="text-red-500" />
   - <logos-netflix />の事例
     - <span class="text-cyan-500">**クラウドネイティブアーキテクチャ**</span>の採用 <twemoji-cloud class="text-cyan-500" />
     - <span class="text-blue-500">**1時間あたり数百回のデプロイを実現**</span> <twemoji-rocket class="text-blue-500" />
   - DevEx向上により、<span class="text-green-500">**急成長に対応可能な柔軟な開発体制**</span>を構築 <twemoji-flexed-biceps class="text-green-500" />

</v-clicks>

<!--
さて、DevExが長期的な競争力に与える影響を具体例で見てみましょう。

まず、Googleの20%ルールがイノベーションを促進し、GmailやGoogle Newsを生み出しました。DevExが良好な環境では、新アイデアの提案が3倍に増加するんです。

次に、Amazonの例では、ページロードが1秒遅れるだけで売上が1%減少。DevEx向上でパフォーマンス最適化に注力できます。

セキュリティ面では、MicrosoftがDevSecOpsで脆弱性を40%削減。良好なDevExでセキュリティ対策も容易になります。

最後に、Netflixは1時間に数百回のデプロイを実現。DevEx向上で急成長にも対応できる柔軟な開発体制を構築できるんです。

これらの例から、DevExがビジネスの競争力向上に直結することがわかりますね。
-->

---
layout: center
class: text-center
---

# DevExがROIに与える影響 (5/5)

## 費用対効果計算例
<style>
table {
  font-size: 0.9em;
  line-height: 1.2;
  border-collapse: collapse;
}
th, td {
  padding: 4px 8px;
  border: 1px solid #ddd;
}
th {
  background-color: #f2f2f2;
  font-weight: bold;
  text-align: center;
}
td {
  text-align: right;
}
td:first-child {
  text-align: left;
}
tr:last-child {
  font-weight: bold;
}
</style>

| 項目             | 投資（年間）    | リターン（年間）   |
|------------------|-------------:|------------------:|
| <twemoji-hammer-and-wrench /> DevExツール導入 | <span class="text-red-500 font-bold">1,420万円</span> | - |
| <twemoji-graduation-cap /> トレーニング | <span class="text-red-500 font-bold">710万円</span> | - |
| <twemoji-gear /> プロセス改善 | <span class="text-red-500 font-bold">2,130万円</span> | - |
| <twemoji-chart-increasing /> 生産性向上 | - | <span class="text-green-500 font-bold">7,100万円</span> |
| <twemoji-person-walking /> 離職率低下 | - | <span class="text-green-500 font-bold">2,840万円</span> |
| <twemoji-bug /> バグ削減 | - | <span class="text-green-500 font-bold">4,260万円</span> |
| <twemoji-money-bag /> 新規収益 | - | <span class="text-green-500 font-bold">5,680万円</span> |
| <twemoji-abacus /> **合計** | <span class="text-red-500 font-bold text-xl">**4,260万円**</span> | <span class="text-green-500 font-bold text-xl">**1億9,880万円**</span> |

<div class="mt-4">

**ROI = (リターン - 投資) / 投資 × 100**
= (198,800,000 - 42,600,000) / 42,600,000 × 100 = **366%**
</div>
<div class="mt-4 p-4 bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-indigo-300 rounded-lg shadow-md">
  <div class="text-lg font-bold text-indigo-700 flex items-center justify-center">
    DevExへの投資は、1年で
    <span class="text-4xl text-orange-500 mx-2 bg-orange-100 px-3 py-1 rounded-full shadow-inner">3.66</span>
    倍のリターンを生み出す。
  </div>
</div>

<!--
DevExへの投資のリターンを具体的な数字で見てみましょう。

この表は、左側が投資、右側がリターンを示しています。DevExに関連する項目に合計4,260万円投資すると、生産性向上や離職率低下などで1億9,880万円のリターンが得られます。

ROIを計算すると366%。つまり、DevExへの投資は1年で3.66倍のリターンを生み出すんです。

これは一例ですが、DevExへの投資が非常に効果的であることを示しています。組織によって数字は変わりますが、大きなリターンの可能性は明らかですね。
-->

---
layout: two-cols
---

# DevExがもたらす具体的な利益 <twemoji-rocket />

<v-clicks>

1. <span class="text-blue-600 font-bold">開発者の生産性向上</span> <twemoji-chart-increasing />
   - <twemoji-high-voltage /> より多くの機能をより早くリリース
   - <twemoji-hammer-and-wrench /> 技術的負債の削減

2. <span class="text-green-600 font-bold">イノベーションの促進</span> <twemoji-light-bulb />
   - <twemoji-brain /> フロー状態の増加により創造性向上
   - <twemoji-rocket /> 新製品や機能の開発が加速

3. <span class="text-purple-600 font-bold">従業員の定着率向上</span> <twemoji-handshake />
   - <twemoji-money-with-wings /> 採用・トレーニングコストの削減

</v-clicks>

::right::

<v-clicks>

4. <span class="text-red-600 font-bold">品質向上</span> <twemoji-check-mark-button />
   - <twemoji-lady-beetle /> バグの減少とセキュリティの向上
   - <twemoji-money-bag /> カスタマーサポートコスト削減

5. <span class="text-orange-600 font-bold">ビジネスの競争力強化</span> <twemoji-trophy />
   - <twemoji-stopwatch /> 市場投入までの時間短縮
   - <twemoji-bullseye /> 顧客ニーズへの迅速な対応

</v-clicks>

<style>
.slidev-vclick-target {
  transition: all 0.5s ease;
}
.slidev-vclick-hidden {
  opacity: 0;
  transform: translateY(20px);
}
</style>

<!--
DX Core 4は、開発者生産性測定の最新フレームワークです。DORAやSPACE、DevExを統合し、さらに進化させたものです。

現在は学術論文ではなく、getdx.comの未公開記事として紹介されています。しかし、著者の一人Abi Nodaさんに確認したところ、論文化の計画があるそうです。

右の図を見てください。これがDX Core 4の概要図です。既存のフレームワークを基に、より包括的なアプローチを提供しています。

このフレームワークは、DevExの重要性を理解した上で、それをどう測定するかという課題に対する最新の解答と言えるでしょう。
-->

---
layout: center
class: text-center
---

# 6. DX Core 4：統合フレームワークの紹介

<!--
さて、次はDX Core 4という新しいフレームワークを紹介します。これは開発者の生産性測定の最新アプローチです。

DORAやSPACE、DevExを統合し、さらに進化させたものです。

まだ学術論文ではありませんが、業界で注目を集めています。DevExの重要性を踏まえ、その測定方法を提供する最新のフレームワークと言えるでしょう。

これから、DX Core 4の詳細を見ていきましょう。
-->

---
layout: image-right
image: ./dx-core-x.png
class: 'image-contain'
backgroundSize: contain
---


# DX Core 4：最先端の統合フレームワーク

<v-clicks>

- <span class="text-blue-600 font-bold">最も最新の開発者生産性測定フレームワーク</span> <twemoji-sparkles class="text-yellow-500" />
- <span class="text-green-600 font-bold">現時点では学術論文はなく、未公開記事</span> <twemoji-closed-book class="text-red-500" />
  - [DX Core 4](https://getdx.com/research/measuring-developer-productivity-with-the-dx-core-4/)
- <span class="text-purple-600 font-bold">論文化は計画中</span> <twemoji-memo class="text-orange-500" />
  - 著者の一人である<span class="text-teal-600 font-bold">Abi Noda</span>にDMで<br>確認済み <twemoji-check-mark-button class="text-green-500" />

</v-clicks>

<!--
DX Core 4は、開発者生産性測定の最新フレームワークです。現時点では学術論文ではなく、getdx.comの未公開記事として紹介されています。しかし、著者の一人Abi Nodaさんに確認したところ、論文化の計画があるそうです。

右の図を見てください。これがDX Core 4の概要図です。DORAやSPACE、DevExを統合し、より包括的なアプローチを提供しています。

このフレームワークは、業界で注目を集めており、DevExの測定に対する最新の解答と言えるでしょう。
-->

---
layout: default
---

# DX Core 4の概要

<v-clicks>

- <span class="text-blue-600">DORA、SPACE、DevExを統合した<strong>新しいフレームワーク</strong></span> <twemoji-sparkles class="text-yellow-500" />
- 4つの主要次元
  1. <span class="text-red-600"><strong>スピード</strong></span> <twemoji-racing-car class="text-red-500" />
  2. <span class="text-green-600"><strong>効果</strong></span> <twemoji-direct-hit class="text-green-500" />
  3. <span class="text-blue-600"><strong>品質</strong></span> <twemoji-check-mark-button class="text-blue-500" />
  4. <span class="text-purple-600"><strong>ビジネスインパクト</strong></span> <twemoji-chart-increasing class="text-purple-500" />

## 特徴
- <span class="text-orange-600"><strong>多次元的アプローチ</strong></span> <twemoji-globe-showing-americas class="text-blue-500" />
- <span class="text-teal-600">組織の<strong>全レベルをサポート</strong></span> <twemoji-office-building class="text-purple-500" />
- <span class="text-indigo-600"><strong>数週間で導入可能</strong></span> <twemoji-hourglass-not-done class="text-green-500" />
- <span class="text-pink-600"><strong>恐怖やゲーミフィケーションを回避</strong></span> <twemoji-no-entry class="text-red-500" />

</v-clicks>

<!--
では、DX Core 4の概要を簡潔に説明します。

このフレームワークは、DORA、SPACE、DevExを統合した新しいものです。4つの主要次元があります：スピード、効果、品質、ビジネスインパクトです。

特徴としては、多次元的アプローチ、組織の全レベルのサポート、短期間での導入可能性、そして恐怖やゲーミフィケーションの回避が挙げられます。

DX Core 4は、開発者の生産性を多角的に評価し、実用的で導入しやすいフレームワークとなっています。既存のフレームワークの長所を取り入れつつ、短所を補完することで、バランスの取れた評価システムを提供しています。
-->

---
layout: default
---

# なぜDX Core 4が必要か

<v-clicks>

- <span class="text-blue-600"><strong>DORAの限界:</strong></span> 主にデプロイメントに焦点を当て、<strong>開発プロセス全体を捉えきれない</strong> <twemoji-magnifying-glass-tilted-left class="text-blue-500" />
- <span class="text-green-600"><strong>SPACEの課題:</strong></span> 包括的だが、<strong>具体的な測定方法が不明確</strong> <twemoji-question-mark class="text-green-500" />
- <span class="text-purple-600"><strong>DevExの弱点:</strong></span> 開発者の体験に重点を置くが、<strong>ビジネス成果との関連性が弱い</strong> <twemoji-chart-decreasing class="text-purple-500" />
- <span class="text-red-600"><strong>DX Core 4の利点:</strong></span> 上記の限界を克服し、<strong>包括的かつ実用的なフレームワークを提供</strong> <twemoji-check-mark-button class="text-red-500" />

</v-clicks>

<v-clicks>

## DX Core 4の必要性

- <span class="text-orange-600"><strong>統合:</strong></span> 既存フレームワークを組み合わせ、<strong>開発プロセスを包括的に把握</strong> <twemoji-puzzle-piece class="text-orange-500" />
- <span class="text-teal-600"><strong>実用性:</strong></span> <strong>具体的な指標</strong>で改善の方向性を明示 <twemoji-straight-ruler class="text-teal-500" />
- <span class="text-indigo-600"><strong>ビジネス連携:</strong></span> 生産性と<strong>ビジネス成果を直結</strong> <twemoji-handshake class="text-indigo-500" />
- <span class="text-pink-600"><strong>柔軟性:</strong></span> 組織に応じて<strong>カスタマイズ可能</strong> <twemoji-flexed-biceps class="text-pink-500" />

</v-clicks>

<!--
さて、ここで疑問が湧いてくると思います。「なぜDX Core 4が必要なの？」という点です。

既存のフレームワークには限界があります。DORAはデプロイメントに焦点を当てすぎ、SPACEは具体的な測定方法が不明確、DevExはビジネス成果との関連性が弱いのです。

DX Core 4は、これらの限界を克服し、包括的かつ実用的なフレームワークを提供します。

具体的には、既存フレームワークを統合して開発プロセス全体を把握し、具体的な指標で改善の方向性を示します。また、生産性とビジネス成果を直結させ、組織に応じてカスタマイズ可能な柔軟性も持っています。

つまり、DX Core 4は既存フレームワークの長所を活かしつつ、短所を補完する総合的なアプローチなのです。
-->

---
layout: default
---

# DX Core 4の指標例 <twemoji-bar-chart class="text-blue-500" />

<style>
.slidev-layout table {
  font-size: 0.8em;
}
</style>

| <span class="text-red-500 font-bold">スピード</span> <twemoji-racing-car /> | <span class="text-green-500 font-bold">効果</span> <twemoji-direct-hit /> | <span class="text-blue-500 font-bold">品質</span> <twemoji-check-mark-button /> | <span class="text-purple-500 font-bold">インパクト</span> <twemoji-chart-increasing /> |
|----------|------|------|------------|
| <twemoji-hourglass-not-done /> リードタイム | <twemoji-smiling-face-with-sunglasses /> 開発者体験指数（DXI） | <twemoji-warning /> 変更失敗率 | <twemoji-stopwatch /> **新機能に費やす時間の割合** |
| <twemoji-rocket /> デプロイ頻度 | <twemoji-bar-chart /> エンジニアあたりのDiff数 | <twemoji-ambulance /> インシデント復旧時間 | <twemoji-chart-increasing /> **イニシアチブの進捗とROI** |
| <twemoji-racing-car /> 配信の知覚速度 | <twemoji-package /> 配信の容易さ | <twemoji-bug /> エンジニアあたりのインシデント数 | <twemoji-money-bag /> **エンジニアあたりの収益** * |

<small class="text-gray-500">*組織レベルのみ</small>

<v-clicks>

- <span class="text-red-500 font-bold">スピード</span>: 開発サイクルの速さを測定 <twemoji-stopwatch class="text-red-500" />
- <span class="text-green-500 font-bold">効果</span>: 開発者の生産性と体験を評価 <twemoji-rocket class="text-green-500" />
- <span class="text-blue-500 font-bold">品質</span>: ソフトウェアの信頼性と安定性を確認 <twemoji-shield class="text-blue-500" />
- <span class="text-purple-500 font-bold">インパクト</span>: ビジネス成果への貢献度を測定 <twemoji-money-bag class="text-purple-500" />

</v-clicks>

<!--
では、DX Core 4の具体的な指標例を見ていきましょう。

スピードの指標は、開発サイクルの速さを測定します。リードタイムやデプロイ頻度などがこれに当たります。

効果の指標は、開発者の生産性と体験を評価します。開発者体験指数（DXI）やエンジニアあたりのDiff数などがあります。

品質の指標は、ソフトウェアの信頼性と安定性を確認します。変更失敗率やインシデント復旧時間などが含まれます。

最後にインパクトの指標は、ビジネス成果への貢献度を測定します。新機能開発時間の割合やROIなどがあります。

これらの指標を総合的に見ることで、開発プロセス全体の健全性をバランスよく評価できるのがDX Core 4の強みです。
-->

---
layout: image
image: napkin-devex-best.svg
backgroundSize: contain
---

<!-- 
# 7. DevEx導入のベストプラクティス <twemoji-rocket class="text-blue-500" />


<v-clicks>

1. <span class="font-bold text-blue-500">ベースラインの確立</span> <twemoji-chart-increasing />
   - <strong class="text-green-500">自己報告データ</strong>を活用した迅速な測定開始
   - <strong class="text-green-500">システムデータ</strong>の段階的な統合

2. <span class="font-bold text-blue-500">小規模から始める</span> <twemoji-seedling />
   - 共通の<strong class="text-red-500">問題点</strong>や<strong class="text-red-500">改善領域</strong>の特定
   - <strong class="text-purple-500">影響の大きい変更</strong>に焦点当てる

3. <span class="font-bold text-blue-500">透明性のあるコミュニケーション</span> <twemoji-speech-balloon />
   - <strong class="text-yellow-500">メトリクスの収集方法</strong>と<strong class="text-yellow-500">使用目的</strong>の明確化
   - <strong class="text-indigo-500">全組織メンバー</strong>への情報共有

4. <span class="font-bold text-blue-500">継続的な改善</span> <twemoji-clockwise-vertical-arrows />
   - <strong class="text-orange-500">定期的なデータ収集</strong>と<strong class="text-orange-500">目標設定</strong>（3〜6ヶ月ごと）
   - <strong class="text-teal-500">大規模な目標</strong>に対する進捗確認

5. <span class="font-bold text-blue-500">開発者の参加促進</span> <twemoji-raising-hands />
   - <strong class="text-pink-500">匿名の調査結果</strong>公開
   - <strong class="text-cyan-500">改善案</strong>への投票機会の提供

</v-clicks> -->

---
layout: default
---

# 8. まとめ：DevExが切り開く未来 <twemoji-rocket class="text-blue-500" />

<v-clicks>

- <span class="text-green-500 font-bold">DevEx</span>は開発者の<span class="text-purple-500 font-bold">生産性</span>と<span class="text-orange-500 font-bold">満足度</span>を向上させる鍵 <twemoji-key class="text-yellow-500" />
- <span class="text-blue-500 font-bold">3つの次元</span>（フィードバックループ、認知負荷、フロー状態）に注目 <twemoji-magnifying-glass-tilted-left class="text-blue-500" />
- <span class="text-red-500 font-bold">適切な測定方法</span>の採用が重要 <twemoji-straight-ruler class="text-red-500" />
- DevEx改善は<span class="text-green-500 font-bold">大きなROI</span>をもたらす <twemoji-chart-increasing class="text-green-500" />
- <span class="text-indigo-500 font-bold">DX Core 4</span>は包括的で**実用的**なフレームワーク <twemoji-building-construction class="text-indigo-500" />
- <span class="text-cyan-500 font-bold">AI時代</span>における**開発者体験の重要性**が増大 <twemoji-robot class="text-cyan-500" />

</v-clicks>

<!--
DevExは開発者の生産性と満足度向上の鍵です。3つの次元を意識し、適切な測定が重要。DevEx改善は大きなリターンをもたらし、DX Core 4は実用的なフレームワークです。AI時代では開発者体験の重要性が増しています。
-->

---
layout: default
---

# 次のステップ

### CTO統括室 DP室 Enabling Teamの動き

1. <twemoji-chart-increasing /> **<span class="text-blue-500">生産性測定・改善</span>**
   - チーム可視化支援
   - 全社効率測定

2. <twemoji-rocket /> **<span class="text-green-500">DevEx向上</span>**
   - 課題特定・優先順位付け
   - ケイパビリティ評価改善

3. <twemoji-busts-in-silhouette /> **<span class="text-purple-500">生産性コミュニティ形成</span>**
   - DevExツール発見ポータル構築

4. <twemoji-hammer-and-wrench /> **<span class="text-orange-500">ツール導入簡易化</span>**
   - DevExツール申請ポータル構築

5. <twemoji-robot /> **<span class="text-red-500">生成AI全社活用</span>**
   - ツール選定・試験導入

<!--
DP室の今後の取り組みを簡単に紹介します。生産性測定・改善、DevEx向上、コミュニティ形成、ツール導入簡易化、そして生成AI活用を進めていきます。具体的な取り組みの一つとして、DevExツールのポータルサイトを構築中です。
-->

---
layout: image
image: dp-portal-discovery.png
backgroundSize: contain
transition: fade
---

<!--
これは、DevExツールを探すためのポータルです。カテゴリーごとに便利なツールを紹介しています。
-->

---
layout: image
image: dp-portal-compare.png
backgroundSize: contain
transition: fade
---

<!--
ツールの比較もできます。機能や価格を一目で確認できるようになっています。
-->

---
layout: image
image: dp-portal-use.png
backgroundSize: contain
transition: fade
---

<!--
そして、ツールの使い方や導入方法も詳しく説明しています。これで、誰でも簡単にDevExツールを導入できるようになりますね。
-->

---
layout: two-cols
---

# 次のステップ

### あなたが今できること

<v-clicks>

1. <twemoji-gear class="text-blue-500" /> **<span class="text-blue-500">自身の開発環境の最適化</span>**
   - [ ] <twemoji-hammer-and-wrench class="text-cyan-500" /> **効率的なツールとプラクティス**の積極的な採用

2. <twemoji-people-hugging class="text-green-500" /> **<span class="text-green-500">チーム内でのDevEx文化の醸成</span>**
   - [ ] <twemoji-handshake class="text-lime-500" /> **ベストプラクティスの共有と実践**
   - [ ] <twemoji-speech-balloon class="text-lime-500" /> DevExに関する**定期的な議論の場**の設定と促進

3. <twemoji-chart-increasing class="text-purple-500" /> **<span class="text-purple-500">DevExメトリクスの導入と追跡</span>**
   - [ ] <twemoji-bar-chart class="text-fuchsia-500" /> チームと個人レベルでの**客観的な測定**
   - [ ] <twemoji-spiral-notepad class="text-fuchsia-500" /> データに基づく**継続的な改善サイクル**の確立

</v-clicks>

::right::

<v-clicks>

4. <twemoji-light-bulb class="text-orange-500" /> **<span class="text-orange-500">新しい技術やツールの積極的な探求</span>**
   - [ ] <twemoji-magnifying-glass-tilted-left class="text-amber-500" /> DevEx向上に寄与する**革新的なソリューション**の調査
   - [ ] <twemoji-test-tube class="text-amber-500" /> **小規模な実験的導入**と効果検証

5. <twemoji-megaphone class="text-red-500" /> **<span class="text-red-500">組織全体へのDevExの推進と定着</span>**
   - [ ] <twemoji-trophy class="text-rose-500" /> **成功事例**と具体的な**事業価値**の共有、DevEx改善による**ROIと生産性向上**の実証
   - [ ] <ph-presentation-bold class="text-violet-500" /> 経営層への**DevExの重要性**の説明と**戦略的投資**の要請

</v-clicks>

<v-clicks>
<div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md shadow-md">
  <p class="font-semibold">
    <twemoji-information class="inline-block mr-2" />
    マネージャーの重要な責務
  </p>
  <p class="mt-2">
    DevExの重要性を<strong>組織全体に浸透</strong>させ、<strong>継続的な改善</strong>を推進することで、<strong>チームの生産性</strong>と<strong>エンジニアの満足度</strong>を向上させる。
  </p>
</div>
</v-clicks>

<!--
最後に、皆さんが今すぐできることを5つ紹介します。
1. 自身の開発環境の最適化
2. チーム内でのDevEx文化の醸成
3. DevExメトリクスの導入と追跡
4. 新技術やツールの探求
5. 組織全体へのDevExの推進

特にマネージャーの方は、DevExの重要性を組織に浸透させ、継続的な改善を推進することで、チームの生産性とエンジニアの満足度向上につながります。
-->

---
layout: center
class: text-center
---

# ご清聴ありがとうございました

質問やディスカッションをお待ちしています

<twemoji-clapping-hands class="text-5xl mt-4" />

<div class="mt-8 flex items-center justify-center">
  <devicon-slack class="text-2xl mr-2" />
  <a href="https://cyberagent.enterprise.slack.com/archives/C024G643C5R" target="_blank" class="text-xl">#times_dp</a>
</div>

<!--
ご清聴ありがとうございました。質問やディスカッションをお待ちしています。Slackの#times_dpチャンネルもぜひご活用ください。
-->
