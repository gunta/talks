---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
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

# DevExは究極のROI：<br>開発者満足度が紐解く驚異の収益化



<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: default
---

# 目次

<Toc maxDepth="1"></Toc>

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

- <small>参考：State of developer experience report 2024 - Atlassian & DX</small>


</v-clicks>

---
layout: image-right
image: https://plus.unsplash.com/premium_photo-1661320941506-9fbe0aab091c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# 1. 開発生産性の現状（2024）

<v-clicks>

- **開発者の課題**
  - <span class="text-red-500">**69%**</span>が週**8時間以上**を<span class="text-red-500">**非効率的作業**</span>に費やす <twemoji-hourglass-not-done class="text-red-500" />
  - <span class="text-orange-500">**44%**</span>が<span class="text-orange-500">**技術的負債**</span>に悩まされている <mdi-code-brackets class="text-orange-500" />
  - <span class="text-blue-500">**41%**</span>が<span class="text-blue-500">**不十分なドキュメンテーション**</span>に苦労 <mdi-file-document-outline class="text-blue-500" />

- **AIツールの導入状況**
  - <span class="text-red-500">**62%**</span>がAIツールによる<span class="text-red-500">**生産性向上を実感できていない**</span> <mdi-robot-confused class="text-red-500" />
  - <span class="text-green-500">**61%**</span>が今後2年以内にAIツールが<span class="text-green-500">**生産性を向上させると期待**</span> <mdi-robot class="text-green-500" />

</v-clicks>

---
layout: two-cols
---

# 2. 従来のフレームワーク

<!-- <v-clicks> -->

## DORA 

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
  - <span class="text-purple-500">**業界ベンチマ���ク**</span>との比較が可能 <mdi-chart-bar class="text-purple-500" />

- 限界 <mdi-thumb-down class="text-red-500" />
  - <span class="text-orange-500">**ソフトウェア配信パフォーマンス**</span>に特化 <mdi-package-variant class="text-orange-500" />
  - 開発者の<span class="text-yellow-500">**日常的な課題**</span>を捉えきれない <mdi-account-question class="text-yellow-500" />

</v-clicks>

<!-- </v-clicks> -->

---
layout: two-cols
---

# 2. 従来のフレームワーク

## DORA Core v2

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

---
layout: two-cols
---

# 2. 従来のフレームワーク

## SPACE

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

---
layout: cover
class: text-center
background: https://images.unsplash.com/photo-1483388147740-e5c70536042e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# 3. DevExとは何か？

### Developer Experience（開発者体験）の略称

---
layout: center
class: text-center
---

# その前に、<br>なぜ**開発者体験**が見過ごされがちか？

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



---
layout: default
---

# 5. DevExがROIに与える影響

<v-clicks>

## McKinseyの調査結果
- 優れた開発者体験を提供する企業は、競合他社と比較して**4〜5倍の収益成長**を達成 <twemoji-money-with-wings class="text-green-500" />

## eBayの事例
- DevEx改善の結果：
  - リリース頻度が**2倍**に増加 <twemoji-rocket class="text-blue-500" />
  - デプロイのリードタイムが**6分の1**に短縮 <twemoji-stopwatch class="text-purple-500" />

## 経済的インパクト
- 500人規模の開発チームの例：
  - 週8時間の非効率性 = 年間約**9億8,000万円**のコスト <twemoji-money-bag class="text-red-500" />
  - DevExの改善により、このコストの60-70%を削減可能 <twemoji-chart-decreasing class="text-green-500" />

</v-clicks>

---
layout: two-cols
---

# DevExがもたらす具体的な利益

<v-clicks>

1. 開発者の生産性向上
   - より多の機能をより早くリリース
   - 技術的負債の削減

2. イノベーションの促進
   - フロー状態の増加により創造性向上
   - 新製品や機能の開発が加速

3. 従業員の定着率向上
   - 採用・トレーニングコストの削減

</v-clicks>

::right::

<v-clicks>

4. 品質向上
   - バグの減少とセキュリティの向上
   - カスタマーサポートコスト削減

5. ビジネスの競争力強化
   - 市場投入までの時間短縮
   - 顧客ニーズへの迅速な対応

</v-clicks>

---
layout: center
class: text-center
---

# 6. DX Core 4：統合フレームワークの紹介

---
layout: default
---

# DX Core 4の概要

<v-clicks>

- DORA、SPACE、DevExを統合した新しいフレームワーク
- 4つの主要次元：
  1. スピード <twemoji-racing-car class="text-red-500" />
  2. 効果 <twemoji-direct-hit class="text-green-500" />
  3. 品質 <twemoji-check-mark-button class="text-blue-500" />
  4. ビジネスインパクト <twemoji-chart-increasing class="text-purple-500" />

## 特徴
- 多次元的アプローチ
- 組織の全レベルをサポート
- 数週間で導入可能
- 恐怖やゲーミフィケーションを回避

</v-clicks>

---
layout: default
---

# DX Core 4の指標例

<style>
.slidev-layout table {
  font-size: 0.8em;
}
</style>

| スピード | 効果 | 品質 | インパクト |
|----------|------|------|------------|
| リードタイム | 開発者体験指数（DXI） | 変更失敗率 | 新機能に費やす時間の割合 |
| デプロイ頻度 | エンジニアあたりのDiff数 | インシデント復旧時間 | イニシアチブの進捗とROI |
| 配信の知覚速度 | 配信の容易さ | エンジニアあたりのインシデント数 | エンジニアあたりの収益* |

<small>*組織レベルのみ</small>

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# 7. DevEx導入のベストプラクティス

<v-clicks>

1. **ベースラインの確立**
   - 自己報告データを活用した迅速な測定開始
   - システムデータの段階的な統合

2. **小規模から始める**
   - 共通の問題点や改善領域の特定
   - 影響の大きい変更に焦点当てる

3. **透明性のあるコミュニケーション**
   - メトリクスの収集方法と使用目的の明確化
   - 全組織メンバーへの情報共有

4. **継続的な改善**
   - 定期的なデータ収集と目標設定（3〜6ヶ月ごと）
   - 大規模な目標に対する進捗確認

5. **開発者の参加促進**
   - 匿名の調査結果公開
   - 改善案への投票機会の提供

</v-clicks>

---
layout: two-cols
---

# 8. まとめ：DevExが切り開く未来

<v-clicks>

- DevExは開発者の生産性と満足度を向上させる鍵
- 3つの次元（フィードバックループ、認知負荷、フロー状態）に注目
- 適切な測定方法の採用が重要
- DevEx改善は大きなROIをもたらす
- DX Core 4は包括的で実用的なフレームワーク
- AI時代における開発者体験の重要性が増大

</v-clicks>

::right::

<v-clicks>

## 次のステップ

1. 現状のDevEx評価を実施
2. 改善が必要な領域の特定
3. DX Core 4フレームワークの導入計画策定
4. パイロットプロジェクトでの試験的導入
5. 結果の測定と継続的な改善

<twemoji-rocket class="text-5xl text-blue-500 mt-4" />

</v-clicks>

---
layout: center
class: text-center
---

# ご清聴ありがとうございました

質問やディスカッションをお待ちしています

<twemoji-clapping-hands class="text-5xl mt-4" />