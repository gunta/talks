---
theme: default
background: https://cdn.midjourney.com/e5ea3b20-cb3e-4439-a0f7-7145a664be56/0_1.png
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
みなさん、こんにちは！今日は「DevExは究極のROI：開発者満足度が紐解く驚異の収益化」というテーマでお話しします。DevExって聞いたことありますか？これから10分間で、なぜDevExが大切なのか、そしてそれがどれだけビジネスに貢献するのかを一緒に見ていきましょう。
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
まず、簡単に自己紹介させてください。私はグンタ・ブルンナーと申します。CyberAgentに2012年から在籍しています。現在はCTO統括室のDeveloper Productivity室で働いています。

私の興味分野はAI、UX、デザイン、パフォーマンスなどです。仕事以外では音楽、映画、寿司、旅行が大好きです。

SNSでも活動していますので、興味があればフォローしてください。それでは、本題に入りましょう。
-->

---
layout: default
---

# 目次

<Toc maxDepth="1"></Toc>

<!--
今日の話の流れはこんな感じです。開発生産性の現状から始めて、DevExとは何か、そしてその重要性について話します。最後に、DevExを導入するためのベストプラクティスと、次のステップについて触れます。

それでは、さっそく開発生産性の現状から見ていきましょう。
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
まず、2024年の開発生産性の現状を見てみましょう。

DXの波が押し寄せていて、日本企業のDX投資額が前年比20.3%も増加しているんです。すごいですよね。

そんな中で、開発者の役割がますます重要になっています。ソフトウェアがビジネス成功の鍵を握っているんです。

そして、ここで重要になってくるのが「開発者体験」、つまりDevExです。これが開発者の生産性と満足度に直結するんです。

これらのデータは、Atlassianとかが出している「State of developer experience report 2024」から引用しています。興味ある人は後でチェックしてみてください。
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
でも、開発者の現状はそんなに甘くないんです。

なんと69%の開発者が週8時間以上を非効率的な作業に費やしているんです。1日丸々無駄にしているようなものですよね。

それに、44%が技術的負債に悩まされていて、41%が不十分なドキュメンテーションに苦労しているんです。

AIツールの導入状況も面白いです。62%がAIツールによる生産性向上を実感できていないんですが、61%が今後2年以内にAIツールが生産性を向上させると期待しているんです。

つまり、今はまだうまく活用できていないけど、将来的には役立つと思っているわけですね。
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
さて、ここからは従来の開発生産性を測るフレームワークについて見ていきましょう。まずはDORAです。

DORAは4つの主要指標があります。デプロイ頻度、リードタイム、変更失敗率、平均復旧時間です。

これらの指標を使うと、DevOpsのパフォーマンスを包括的に評価できるし、業界ベンチマークとの比較もできるんです。

でも、DORAにも限界があります。ソフトウェア配信パフォーマンスに特化しすぎていて、開発者の日常的な課題を捉えきれないんです。

例えば、コードレビューの効率性とか、ドキュメンテーションの質とか、そういった日々の開発作業に関する指標がないんですよね。
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
次に、DORA Core v2を見てみましょう。これはDORAの進化版で、5つの主要要素があります。

継続的デリバリー、アーキテクチャ、製品とプロセス、リーンマネジメント、そして文化です。

DORA Core v2の良いところは、より包括的なアプローチを取っていることです。セキュリティやコンプライアンスの強化にも注目していますし、組織文化と技術的実践を統合しようとしています。

でも、課題もあります。実装がより複雑になってしまったんです。それに、全ての要素のバランスを取るのが難しくなりました。

つまり、理想的ではあるけど、実際に導入するのは結構大変だということですね。
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
最後に、SPACEフレームワークを見てみましょう。これは5つの次元から開発者の生産性を捉えようとしています。

満足度、パフォーマンス、アクティビティ、コミュニケーション、効率性です。

SPACEの良いところは、開発者生産性を多面的に捉えようとしていることです。主観的な要素と客観的な要素を統合しようとしているんです。

でも、課題もあります。具体的にどうやって測定するのかが不明確なんです。それに、組織に適用しようとすると複雑になってしまいます。

つまり、理論的には素晴らしいけど、実践するのは難しいということですね。

これらの従来のフレームワークを見てきて、どれも一長一短があることがわかりました。じゃあ、どうすればいいんでしょうか？そこで登場するのがDevExなんです。
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

開発者体験って聞くと、なんだか漠然としていますよね。でも、これがこれからの開発生産性を考える上で、とても重要なキーワードになるんです。

なぜDevExが重要なのか、もう少し詳しく見ていきましょう。
-->

---
layout: image
image: https://cdn.midjourney.com/ba887992-43ec-4f20-ac53-94a834f82718/0_0.png
class: text-center flex items-center justify-center
---

# <br><span class="text-black bg-gradient-to-r from-purple-700 via-pink-600 to-black-500 bg-clip-text text-transparent opacity-90">なぜ**開発者体験**が見過ごされがちか？</span>

<!--
でも、ちょっと待ってください。DevExがそんなに大切なら、なぜこれまで見過ごされてきたんでしょうか？

実は、開発者体験が見過ごされがちな理由があるんです。特に日本の企業文化では、この傾向が強いかもしれません。

次のスライドで、その理由を詳しく見ていきましょう。
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
開発者体験が見過ごされる理由は、グローバルな課題と日本特有の文化が絡み合っているんです。

世界共通の課題としては、開発者体験の重要性が軽視されがちで、短期的な成果に偏重しがちなことがあります。

日本特有の文化としては、「我慢は美徳」という考え方や、個人よりも集団の調和を重視する傾向、上意下達の階層構造などがあります。

これらが相まって、開発者の要求が「わがまま」と誤解されがちなんです。でも、実際は違います。開発者の要求は生産性向上のための合理的な要求なんです。

それに、生産性向上イコール長時間労働ではありません。ソフトウェア開発では創造性と問題解決が重要で、長時間労働はむしろ生産性を下げてしまうんです。

こういった状況を変えるには、パラダイムシフトが必要です。日本CTO協会もDX Criteriaの策定など、新しい取り組みを始めています。

DevExは持続可能な開発環境の構築、イノベーションの促進、グローバル競争力の向上につながります。

「無理をする」から「効率的に働く」へ。個人の成長がチームの成長につながる。こういった新しい価値観を持つことが大切なんです。
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
さて、ここでDevExの定義と重要性について詳しく見ていきましょう。

DevExとは、「開発者が自分の仕事について考え、感じ、価値を見出す方法」です。これには25以上もの社会技術的要因が影響しているんです。

なぜDevExが重要かというと、86%のリーダーが優秀な人材の獲得・維持にDevExが不可欠だと認識しているんです。さらに、63%の開発者が現職を続けるかどうかの判断にDevExを重視しているんです。

DevExの影響範囲は広くて、生産性向上はもちろん、従業員満足度の増加、エンゲージメントの向上、従業員の定着率改善にもつながります。

つまり、DevExは単なる開発者の快適さだけでなく、ビジネスの成功に直結する重要な要素なんです。
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
さて、このDevEx論文の著者たちについて少し紹介させてください。これがまた、すごい面々なんですよ。

まず、Margaret-Anne Storeyさん。ビクトリア大学のCS教授で、ソフトウェア工学とHCIの専門家です。SPACEフレームワークの共同著者でもあります。

次に、Abi Nodaさん。DX社の創設者兼CEOで、元GitHubのプロダクトマネージャーです。開発者の生産性について深い知見を持っています。

それから、Nicole Forsgrenさん。今はGitHubのリサーチ＆戦略VPですが、以前はGoogleやMicrosoftでDevOpsのリードをしていました。DORAの共同創設者で、『Accelerate』という有名な本の共著者でもあります。

最後に、Michaela Greilerさん。ソフトウェアエンジニアリングのコンサルタントで、元Microsoftの研究者です。コードレビューと生産性の専門家です。

この4人が力を合わせて書いた論文なんです。だから、理論と実践の両面から、DevExについて深い洞察が得られるんですよ。
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
じゃあ、このDevEx論文がなぜそんなに重要なのか、ちょっと掘り下げて説明しますね。

まず、この論文は4人の超有名な研究者と実務者が一緒に書いたんです。それぞれ違う専門分野と経験を持ってるから、多角的な視点が得られるんですよ。

次に、この論文は学術研究と実際の産業現場での実践を融合させてるんです。つまり、理論だけじゃなくて、実際に使える知識が詰まってるってことです。

それから、この論文はDORAやSPACEといった、既存の重要な研究をベースにしてるんです。でも、そこに新しい視点を加えて、さらに発展させてるんですよ。

最後に、この論文はDevExについて包括的に理解する方法と、それを測定する方法を提案してるんです。DevExの多面的な側面を捉えて、実際にどうやって改善していけばいいのかも示してくれてるんです。

だから、この警告マークがついてる部分を見てほしいんですけど、この論文は本当に重要なんです。ソフトウェア開発のプロセスをどう改善するか、開発者の生産性をどう上げるか、その指針になるんです。だから、みんなでしっかり学んで、実践していく価値があるんですよ。
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
さて、ここでDevExを測定するための「DX25メトリクス」というものを紹介します。これ、ちょっと複雑に見えるかもしれませんが、実はすごく役立つツールなんです。

左側の大きな枠を見てください。これが「DXドライバー」です。開発者の体験に影響を与える25の要因が並んでいます。例えば、「バッチサイズ」「ビルド」「コードレビュー」などですね。これらは全て、開発者の日々の仕事に直接関わってくる要素です。

真ん中の枠は「DX KPI」です。これは、DXドライバーの結果として現れる主要な指標です。「スピード」「デリバリーの容易さ」「品質」の3つがあります。

右側の枠は「成果」です。これは最終的に組織が得られる利益を示しています。「組織パフォーマンス」「従業員エンゲージメント」「時間の無駄削減」「離職率低下」といった具体的な成果が挙げられています。

このDX25メトリクスを使うと、DevExの現状を包括的に把握できるんです。例えば、「コードレビュー」や「ビルド」のプロセスを改善すれば、「スピード」や「品質」が向上し、最終的には「組織パフォーマンス」の向上につながる、といった具合に、因果関係を追跡できるんです。

これを使って自分たちの開発プロセスを分析すれば、どこを改善すべきか、どんな効果が期待できるかが明確になります。だから、DevEx改善の道筋を立てるのに、すごく役立つツールなんですよ。
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
さて、ここからDevExの3つの重要な次元について説明します。これらを理解すると、DevExの本質がよく分かるんです。

まず1つ目は「フィードバックループ」です。これは、開発者が何かアクションを起こしたときに、どれだけ早く、どれだけ質の高い反応が返ってくるかということです。例えば、コードレビューがどれくらい早く行われるか、CIの結果がどれくらい早く出るか、デプロイにどれくらい時間がかかるか、といったことです。

2つ目は「認知負荷」です。これは、開発者がタスクを実行するときに、どれくらい頭を使わなければいけないかということです。例えば、コードベースがどれくらい複雑か、デバッグがどれくらい難しいか、ドキュメントがどれくらい分かりやすいか、といったことが関係します。

3つ目は「フロー状態」です。これは、開発者が完全に集中して、没頭できる状態のことです。例えば、中断されずに深く作業できる時間がどれくらいあるか、タスクや目標がどれくらい明確か、オンコール待機でどれくらい中断されるか、といったことが影響します。

そして、これらのDevExを測定する方法として、3つのアプローチがあります。開発者の意見を聞く「知覚指標」、システムの動作を見る「ワークフロー指標」、そして全体的な成果を見る「KPI」です。

これらの次元と測定方法を組み合わせることで、DevExの現状を総合的に把握し、改善点を見つけることができるんです。自分たちのチームや組織でどの部分が弱いのか、どこを改善すれば効果が大きいのか、そういったことが明確になるんですよ。
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
さて、ここからDevExが実際にビジネスにどんな影響を与えるのか、具体的な数字を見ていきましょう。

まず、McKinseyの調査結果を見てください。優れた開発者体験を提供している企業は、競合他社と比べて4〜5倍も収益成長が高いんです。これ、すごいですよね。

具体的な数字を見ると、開発者の生産性が最大20%も向上しています。新機能の開発時間は半分になり、顧客満足度は30%も上がっています。これらの数字を見ると、DevExの改善がいかに大きな影響を与えるか分かりますよね。

次に、eBayの事例を見てみましょう。eBayはDevExを改善した結果、リリースの頻度が2倍になり、デプロイにかかる時間が6分の1になったんです。

どうやってそんなことができたのか？具体的には、CI/CDパイプラインを最適化し、自動化テストを拡充し、開発環境を標準化したんです。

これらの事例から分かるのは、DevExの改善は単なる開発者の快適さだけじゃなく、ビジネスの成果に直結するということです。生産性が上がり、開発スピードが上がり、品質も向上する。結果として、顧客満足度が上がり、収益も伸びる。そんな好循環を生み出すんです。

だから、DevExへの投資は、単なるコストじゃなくて、将来の成長のための重要な投資なんです。みなさんの組織でも、こういった改善の余地がないか、ぜひ考えてみてください。
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
さて、ここからはDevExの改善がもたらす経済的なインパクトについて、もう少し具体的に見ていきましょう。

まず、人材コストの削減について考えてみます。例えば、500人規模の開発チームがあるとします。各開発者が週に8時間、非効率な作業に時間を取られているとすると、年間で約10億円ものコストがかかっているんです。これ、すごい金額ですよね。でも、DevExを改善することで、このコストの7割を削減できる可能性があるんです。つまり、年間6億円以上のコスト削減ができるかもしれないんです。
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
さて、DevExが長期的な競争力にどう影響するか、具体例を見ていきましょう。

まず、イノベーション能力の向上です。Googleの20%ルールって聞いたことありますよね？これ、DevExの良い例なんです。開発者に自由な時間を与えることで、GmailやGoogle Newsといった革新的な製品が生まれました。実際、DevExが良好な環境では、新しいアイデアの提案が3倍も増えるんです。すごいでしょ？

次に、顧客満足度。Amazonの例が面白いんですが、ページの読み込みが1秒遅れるだけで売上が1%も下がるんだそうです。DevExを向上させることで、こういったパフォーマンスの最適化にも注力できるわけです。

セキュリティの面では、Microsoftの例が参考になります。DevSecOpsを導入して、セキュリティの脆弱性を40%も削減できたんです。DevExが良好だと、こういったセキュリティのベストプラクティスも採用しやすくなります。

最後に、スケーラビリティ。Netflixの事例が印象的です。クラウドネイティブアーキテクチャを採用して、1時間に数百回ものデプロイを実現しています。DevExを向上させることで、こういった急成長にも柔軟に対応できる開発体制が構築できるんです。

これらの例を見ると、DevExが単に開発者の快適さだけでなく、ビジネスの競争力に直結することがわかりますよね。
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
さて、ここからが本題です。DevExへの投資がどれくらいのリターンを生み出すか、具体的な数字で見てみましょう。

この表を見てください。左側が投資、右側がリターンです。DevExツールの導入、トレーニング、プロセス改善などに合計で4,260万円投資します。

で、右側を見てください。生産性向上、離職率低下、バグ削減、新規収益など、様々な形でリターンが出ています。合計すると、なんと1億9,880万円のリターンが得られるんです。

これをROIの計算式に当てはめると...じゃん！366%です。つまり、DevExへの投資は1年で3.66倍のリターンを生み出すんです。

これ、すごいですよね。普通の投資ではなかなかこんな高いリターンは得られません。DevExへの投資が、いかに効果的かがわかると思います。

もちろん、これは一例で、実際の数字は組織によって変わってきます。でも、DevExへの投資が大きなリターンを生み出す可能性があることは、はっきりと示されていますよね。
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
では、DevExがもたらす具体的な利益について、もう少し詳しく見ていきましょう。

まず、開発者の生産性向上です。これは直接的な効果ですね。DevExが良くなれば、より多くの機能をより早くリリースできるようになります。また、技術的負債の削減にも繋がります。

次に、イノベーションの促進。これ、結構重要なポイントです。開発者がフロー状態に入りやすくなると、創造性が向上します。結果として、新しい製品や機能の開発が加速するんです。

3つ目は従業員の定着率向上。これ、実はすごく大きいんです。優秀な開発者の採用って、本当に大変ですよね。DevExが良ければ、離職率が下がり、採用やトレーニングにかかるコストを削減できます。

4番目は品質向上。DevExが良くなると、バグが減少し、セキュリティも向上します。これは直接的にカスタマーサポートのコスト削減にも繋がります。

最後に、ビジネスの競争力強化。市場投入までの時間が短縮され、顧客ニーズにも迅速に対応できるようになります。

これらの利益を総合的に見ると、DevExへの投資がいかに重要か、よくわかりますよね。単に開発者を快適にするだけでなく、ビジネス全体にポジティブな影響を与えるんです。
-->

---
layout: center
class: text-center
---

# 6. DX Core 4：統合フレームワークの紹介

<!--
さて、ここからは少し話題を変えて、DX Core 4という新しいフレームワークについて紹介します。

これは、開発者の生産性を測定するための最新のフレームワークなんです。今までの話で、DevExの重要性はわかってきたと思いますが、じゃあそれをどう測るの？ってところがこのDX Core 4で解決できるんです。

このフレームワークは、今までお話ししてきたDORAやSPACE、DevExといった既存のフレームワークを統合して、さらに進化させたものです。

正直、まだ学術論文にはなっていないんですが、業界では注目されている最先端のアプローチなんです。これから、このDX Core 4について詳しく見ていきましょう。
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
DX Core 4について、もう少し詳しく説明しましょう。

まず、これは本当に最新のフレームワークです。開発者の生産性を測定するための、今のところ最も進んだ方法と言えるでしょう。

ただし、注意点があります。現時点では、まだ学術論文としては発表されていません。未公開の記事として、getdx.comというサイトで紹介されているだけなんです。

でも、これは単なるアイデアではありません。論文化の計画があるんです。実は、私が著者の一人であるAbi Nodaさんに直接DMで確認したんですよ。

右側の図を見てください。これがDX Core 4の概要図です。DORAやSPACE、DevExといった既存のフレームワークを統合して、さらに進化させたものだということがわかりますね。

このフレームワークは、まだ学術的な検証は済んでいませんが、業界では非常に注目されています。これから、このDX Core 4がどういうものなのか、もう少し詳しく見ていきましょう。
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
では、DX Core 4の概要を説明しましょう。

このフレームワークは、DORA、SPACE、DevExという既存のフレームワークを統合した新しいものです。つまり、それぞれの良いところを取り入れているんですね。

DX Core 4には4つの主要な次元があります。スピード、効果、品質、そしてビジネスインパクトです。これらを総合的に見ることで、開発者の生産性を多角的に評価できるんです。

特徴としては、まず多次元的なアプローチを取っていることが挙げられます。開発者の生産性って、単一の指標では測れないですよね。この複雑さに対応しているんです。

また、組織の全レベルをサポートしています。つまり、個々の開発者からチーム、そして組織全体まで、様々なレベルで活用できるんです。

導入のしやすさも特徴の一つです。数週間で導入可能なんですよ。これは結構重要で、長期間かけて導入するフレームワークだと、その間にも状況が変わってしまいますからね。

最後に、恐怖やゲーミフィケーションを回避しているという点。これ、実は結構重要なんです。生産性の測定って、ともすると開発者を追い詰めたり、数字だけを追いかけさせたりしがちなんですが、DX Core 4はそういった落とし穴を避けるように設計されています。

これらの特徴を見ると、DX Core 4が非常にバランスの取れた、実用的なフレームワークだということがわかりますね。
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
さて、ここで疑問が湧いてくると思います。「なぜDX Core 4が必要なの？」って。既存のフレームワークでは足りないの？という疑問ですね。これについて説明しましょう。

まず、DORAの限界から見ていきます。DORAは主にデプロイメントに焦点を当てていて、開発プロセス全体を捉えきれないんです。つまり、コーディングからテスト、レビューなど、デプロイ以外の部分が見えにくいんですね。

次にSPACEの課題。SPACEは包括的なアプローチを取っていて、それ自体はいいんですが、具体的にどう測定するのかが不明確なんです。理論はいいけど、実践が難しいというわけです。

DevExの弱点は、開発者の体験に重点を置きすぎていて、ビジネス成果との関連性が弱いことです。開発者が快適に働けるのは大事ですが、それがどう会社の利益に繋がるのか、が見えにくいんですね。

そこで登場するのがDX Core 4です。これは上記の限界を全て克服し、包括的かつ実用的なフレームワークを提供しているんです。

具体的には、既存のフレームワークを統合して開発プロセス全体を把握できるようにしています。また、具体的な指標を提供することで、実際に何をすればいいのかがわかりやすくなっています。

さらに、生産性とビジネス成果を直結させているので、開発者の活動が会社にどう貢献しているのかが明確になります。

最後に、組織に応じてカスタマイズできる柔軟性も持っています。つまり、どんな会社でも使えるようになっているんです。

これらの特徴を見ると、DX Core 4がなぜ必要なのか、よくわかりますよね。既存のフレームワークの良いところを取り入れつつ、それぞれの弱点を補完しているんです。
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
では、DX Core 4の具体的な指標例を見ていきましょう。この表を見てください。

まず、スピードの指標です。リードタイム、デプロイ頻度、配信の知覚速度などがあります。これらは開発サイクルの速さを測定するものです。例えば、アイデアが生まれてから実際にリリースされるまでにどれくらい時間がかかるか、といったことですね。

次に効果の指標。開発者体験指数（DXI）やエンジニアあたりのDiff数などがあります。これらは開発者の生産性と体験を評価するものです。開発者がどれだけ快適に、効率的に仕事ができているかを測ります。

品質の指標には、変更失敗率やインシデント復旧時間などがあります。これらはソフトウェアの信頼性と安定性を確認するためのものです。バグが少なく、問題が起きてもすぐに復旧できるか、といったことを測ります。

最後にインパクトの指標。新機能に費やす時間の割合やイニシアチブの進捗とROI、エンジニアあたりの収益などがあります。これらはビジネス成果への貢献度を測定するものです。開発者の活動が実際にどれだけ会社の利益に貢献しているかを見るんです。

これらの指標を総合的に見ることで、開発プロセス全体の健全性を評価できるんです。スピードだけでなく、品質も。効率だけでなく、ビジネスへの貢献も。バランスよく見ることができるのが、DX Core 4の強みですね。
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
さて、ここまでの話をまとめましょう。DevExは開発者の生産性と満足度を上げる重要な要素です。3つの次元を意識して、適切に測定することが大切。そして、DevExを改善すると、大きなリターンが期待できます。DX Core 4は実用的なフレームワークとして使えるし、AI時代には開発者体験がますます重要になってきますよ。
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
じゃあ、これからDP室は何をするのか？簡単に説明します。まず、生産性の測定と改善を支援します。次に、DevExの向上に取り組みます。生産性コミュニティも作っていきますよ。ツールの導入も簡単にしたいし、生成AIの全社活用も進めていきます。具体的には、こんなポータルサイトを作ってます。
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
最後に、皆さんが今すぐできることをお話しします。まず、自分の開発環境を最適化してください。次に、チーム内でDevExの文化を広めてください。メトリクスの導入も大切です。新しい技術やツールにも目を向けてください。そして、組織全体にDevExの重要性を広めていってください。特にマネージャーの方は、DevExの重要性を組織に浸透させ、継続的な改善を推進することが大切です。これで、チームの生産性とエンジニアの満足度が上がりますよ。
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
以上で発表を終わります。ご清聴ありがとうございました。質問やディスカッションがあれば、ぜひお聞かせください。また、Slackの#times_dpチャンネルでも議論を続けられますので、ぜひ参加してくださいね。
-->
