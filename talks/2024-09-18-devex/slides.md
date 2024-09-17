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

# 1. はじめに：開発生産性の現状（2024）

<v-clicks>

- **デジタルトランスフォーメーション（DX）の加速**
  - 2022年：日本企業のDX投資額が前年比16.5%増加 <twemoji-chart-increasing class="text-green-500" />

- **開発者の役割の重要性増大**
  - ソフトウェアがビジネス成功の鍵 <twemoji-key class="text-yellow-500" />

- **開発者体験（DevEx）の重要性**
  - 開発者の生産性と満足度に直結 <twemoji-smiling-face-with-smiling-eyes class="text-blue-500" />

<small>参考：State of developer experience report 2024 - Atlassian & DX</small>


</v-clicks>

---
layout: image-right
image: https://plus.unsplash.com/premium_photo-1661320941506-9fbe0aab091c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# 1. はじめに：開発生産性の現状（2024）

<v-clicks>

- **開発者の課題**
  - 69%が週8時間以上を非効率的作業に費やす <twemoji-hourglass-not-done class="text-red-500" />
  - 44%が技術的負債に悩まされている <mdi-code-brackets class="text-orange-500" />
  - 41%が不十分なドキュメンテーションに苦労 <mdi-file-document-outline class="text-blue-500" />

- **AIツールの導入状況**
  - 62%がAIツールによる生産性向上を実感できていない <mdi-robot-confused class="text-gray-500" />
  - 61%が今後2年以内にAIツールが生産性を向上させると期待 <mdi-robot class="text-green-500" />

</v-clicks>

---
layout: two-cols
---

# 2. 従来のフレームワーク

<!-- <v-clicks> -->

## DORA 

| 主要指標 | 説明 |
|----------|------|
| デプロイ頻度 <mdi-rocket-launch-outline class="text-green-500" /> | コードを**プロダクション環境にデプロイする頻度** |
| リードタイム <mdi-timer-sand class="text-orange-500" /> | **コミットからデプロイまでの所要時間** |
| 変更失敗率 <mdi-alert-circle-outline class="text-red-500" /> | デプロイ後に**修正が必要となる割合** |
| 平均復旧時間（MTTR） <mdi-clock-fast class="text-purple-500" /> | 障害発生から**復旧までの平均時間** |

::right::

- 利点 <mdi-thumb-up class="text-green-500" />
  - DevOpsパフォーマンスの**包括的評価** <mdi-magnify-expand class="text-blue-500" />
  - **業界ベンチマーク**との比較が可能 <mdi-chart-bar class="text-purple-500" />

- 限界 <mdi-thumb-down class="text-red-500" />
  - **ソフトウェア配信パフォーマンス**に特化 <mdi-package-variant class="text-orange-500" />
  - 開発者の**日常的な課題**を捉えきれない <mdi-account-question class="text-yellow-500" />

<!-- </v-clicks> -->

---
layout: two-cols
---

# 2. 従来のフレームワーク

## SPACE

| 次元 | 説明 |
|------|------|
| 満足度（S） <mdi-emoticon-happy-outline class="text-yellow-500" /> | **仕事への満足度と幸福度** |
| パフォーマンス（P） <mdi-chart-line class="text-green-500" /> | **成果と貢献度** |
| アクティビティ（A） <mdi-run-fast class="text-blue-500" /> | **日々の活動と行動** |
| コミュニケーション（C） <mdi-message-text-outline class="text-purple-500" /> | **情報共有と協力** |
| 効率性（E） <mdi-lightning-bolt-outline class="text-orange-500" /> | **作業のフロー状態** |

::right::

- 利点 <mdi-thumb-up class="text-green-500" />
  - 開発者生産性の**多面的な捉え方** <mdi-view-grid-plus class="text-blue-500" />
  - **主観的要素と客観的要素**の統合 <mdi-scale-balance class="text-purple-500" />

- 課題 <mdi-thumb-down class="text-red-500" />
  - 具体的な**測定方法が不明確** <mdi-ruler-square-compass class="text-orange-500" />
  - 組織への**適用が複雑** <mdi-sitemap class="text-yellow-500" />

---
layout: center
class: text-center
---

# 3. DevExとは何か？

Developer Experience（開発者体験）の略称

---
layout: default
---

# DevExの定義と重要性

<v-clicks>

- **定義**: 開発者が自分の仕事について考え、感じ、価値を見出す方法
- **25以上の社会技術的要因**が影響

## なぜDevExが重要か

- 86%のリーダーが優秀な人材の獲得・維持にDevExが不可欠と認識 <twemoji-person-raising-hand class="text-blue-500" />
- 63%の開発者が現職継続の判断にDevExを重視 <twemoji-briefcase class="text-purple-500" />

## DevExの影響範囲

- 生産性向上 <twemoji-chart-increasing class="text-green-500" />
- 従業員満足度の増加 <twemoji-smiling-face-with-smiling-eyes class="text-yellow-500" />
- エンゲージメントの向上 <twemoji-fire class="text-orange-500" />
- 従業員の定着率改善 <twemoji-handshake class="text-blue-500" />

</v-clicks>

---
layout: two-cols
---

# 4. DevExの3つの次元

<v-clicks>

## 1. フィードバックループ
- 定義：行動に対する応答の速度と品質
- 例：
  - コードレビューのターンアラウンドタイム
  - CI結果生成時間
  - デプロイメントリードタイム

## 2. 認知負荷
- 定義：タスク実行に必要な精神的処理量
- 例：
  - コードベースの複雑さの認識
  - デバッグの容易さ
  - ドキュメンテーションの理解しやすさ

</v-clicks>

::right::

<v-clicks>

## 3. フロー状態
- 定義：完全に没頭し、エネルギッシュに集中できる状態
- 例：
  - 中断のない深い作業時間の満足度
  - タスクや目標の明確さ
  - オンコール待機の中断度

## DevExの測定方法

1. 知覚指標（開発者の態度や意見）
2. ワークフロー指標（システムと過程の動作）
3. KPI（主要業績評価指標）

</v-clicks>

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
  - 週8時間の非効率性 = 年間約**690万ドル**のコスト <twemoji-money-bag class="text-red-500" />
  - DevExの改善により、このコストの大部分を削減可能 <twemoji-chart-decreasing class="text-green-500" />

</v-clicks>

---
layout: two-cols
---

# DevExがもたらす具体的な利益

<v-clicks>

1. 開発者の生産性向上
   - より多くの機能をより早くリリース
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
   - 影響の大きい変更に焦点を当てる

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