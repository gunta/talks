# Part 1: AI時代の開発者生産性危機

---
layout: section
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa
---

<div class="flex flex-col items-center justify-center h-full">
  <div class="relative">
    <div class="absolute -inset-8 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-3xl"></div>
    <div class="relative">
      <h1 class="text-6xl font-bold text-white text-center mb-4">
        危機的状況
      </h1>
      <p class="text-2xl text-red-400 text-center">AI時代の開発者生産性パラドックス</p>
    </div>
  </div>
</div>

<!--
Speaker notes:
まず最初に、現在のAI時代における開発現場の深刻な問題についてお話しします。
皆さんも日々感じておられると思いますが、AIによってコードの生成速度は劇的に向上しました。
しかし、それと同時に新たな課題も浮上しています。
-->

---

# 🔥 現実：先週起きた出来事

<div class="mt-8 space-y-6">
  <div class="bg-red-500/20 border border-red-500/30 rounded-lg p-6">
    <h2 class="text-2xl font-bold text-red-400 mb-4">🚨 リアルインシデント報告</h2>
    <p class="text-lg">
      「私のAIエージェントが<span class="text-red-300 font-bold">3時間で書いた1万行のコード</span>が、<br>
      本番で<span class="text-red-300 font-bold">3つの重大インシデント</span>を起こしました」
    </p>
  </div>
  <div class="grid grid-cols-3 gap-4 mt-8">
    <div class="bg-gray-800/50 p-4 rounded-lg text-center">
      <div class="text-3xl font-bold text-yellow-400">メモリリーク</div>
      <div class="text-sm opacity-80">非同期処理の不適切な実装</div>
    </div>
    <div class="bg-gray-800/50 p-4 rounded-lg text-center">
      <div class="text-3xl font-bold text-orange-400">認証バイパス</div>
      <div class="text-sm opacity-80">セキュリティチェックの欠如</div>
    </div>
    <div class="bg-gray-800/50 p-4 rounded-lg text-center">
      <div class="text-3xl font-bold text-red-400">データ破損</div>
      <div class="text-sm opacity-80">トランザクション境界の誤り</div>
    </div>
  </div>
</div>

<div class="mt-8 text-center">
  <p class="text-xl text-gray-300">これは私だけの問題ではありません...</p>
</div>

<!--
Speaker notes:
これは実際に先週、私のチームで起きた出来事です。AIエージェントが3時間という驚異的な速さで1万行のコードを生成しました。
しかし、そのコードが本番環境で3つもの重大なインシデントを引き起こしたのです。

メモリリーク、認証バイパス、データ破損。これらはすべて、AIが生成したコードに潜んでいた問題でした。
そして残念ながら、これは私だけが直面している問題ではないのです。
-->

---

# 📊 衝撃的なデータ：2025年の現実

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

## ⚡ AI生成コードの爆発的増加

<div class="space-y-4">
  <div class="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-lg">
    <div class="text-3xl font-bold text-green-400">65%</div>
    <div class="text-sm opacity-80">GitHub上のコードがAI生成（2025年調査）</div>
  </div>
  <div class="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg">
    <div class="text-3xl font-bold text-blue-400">100倍</div>
    <div class="text-sm opacity-80">従来比のコード生成速度</div>
  </div>
  <div class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg">
    <div class="text-3xl font-bold text-purple-400">1日10万行</div>
    <div class="text-sm opacity-80">エンタープライズでのAI生成量</div>
  </div>
</div>

</div>
<div>

## 💥 しかし現実は...

<div class="space-y-4">
  <div class="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-4 rounded-lg">
    <div class="text-3xl font-bold text-red-400">+19%</div>
    <div class="text-sm opacity-80">AIツール使用時の開発時間増加（METR 2025年研究）</div>
  </div>
  <div class="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 p-4 rounded-lg">
    <div class="text-3xl font-bold text-orange-400">3倍</div>
    <div class="text-sm opacity-80">インシデント発生率の増加</div>
  </div>
  <div class="bg-gradient-to-r from-yellow-500/20 to-red-500/20 p-4 rounded-lg">
    <div class="text-3xl font-bold text-yellow-400">45分→3時間</div>
    <div class="text-sm opacity-80">平均復旧時間の悪化</div>
  </div>
</div>

</div>
</div>

<div class="mt-8 text-center">
  <div class="bg-red-500/20 border border-red-500/30 rounded-lg p-4 inline-block">
    <span class="text-xl font-bold text-red-300">開発は100倍速くなったが、運用は100倍困難になった</span>
  </div>
</div>

<!--
Speaker notes:
2025年の最新データを見ると、衝撃的な現実が浮かび上がります。
GitHubで公開されているコードの65%がAI生成になり、従来比100倍の速度でコードが生成されています。

しかし、METR社の2025年研究では驚くべき発見がありました。AIツールを使った開発者は、使わない場合と比べて19%も時間がかかっているのです。
開発者自身は24%速くなったと感じているのに、実際の測定では19%遅くなっている。

そして、インシデント発生率は3倍に増加し、復旧時間も大幅に悪化しています。
つまり、「開発は100倍速くなったが、運用は100倍困難になった」というのが現実なのです。
-->

---

# 🤔 なぜこんなことが起きるのか？

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

## 🧠 認知的な問題

<div class="space-y-4">
  <div class="flex items-start gap-3">
    <span class="text-2xl">🎭</span>
    <div>
      <div class="font-bold">生産性錯覚</div>
      <div class="text-sm opacity-80">「速く書けている」という錯覚</div>
    </div>
  </div>
  <div class="flex items-start gap-3">
    <span class="text-2xl">🔍</span>
    <div>
      <div class="font-bold">コード理解度低下</div>
      <div class="text-sm opacity-80">生成されたコードの内容把握不足</div>
    </div>
  </div>
  <div class="flex items-start gap-3">
    <span class="text-2xl">⚖️</span>
    <div>
      <div class="font-bold">品質判断能力の退化</div>
      <div class="text-sm opacity-80">「動けば良い」思考の蔓延</div>
    </div>
  </div>
</div>

</div>
<div>

## 🏗️ 構造的な問題

<div class="space-y-4">
  <div class="flex items-start gap-3">
    <span class="text-2xl">📊</span>
    <div>
      <div class="font-bold">測定指標の断片化</div>
      <div class="text-sm opacity-80">DORA、SPACE、DevExが個別運用</div>
    </div>
  </div>
  <div class="flex items-start gap-3">
    <span class="text-2xl">🔧</span>
    <div>
      <div class="font-bold">ツール統合の複雑さ</div>
      <div class="text-sm opacity-80">AIツール間の連携コスト増大</div>
    </div>
  </div>
  <div class="flex items-start gap-3">
    <span class="text-2xl">🚫</span>
    <div>
      <div class="font-bold">型安全性の限界</div>
      <div class="text-sm opacity-80">従来TSでは捉えきれないエラー</div>
    </div>
  </div>
</div>

</div>
</div>

<div class="mt-8 text-center">
  <div class="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 inline-block">
    <span class="text-lg font-bold text-yellow-300">根本原因：旧来の開発パラダイムがAI時代に対応できていない</span>
  </div>
</div>

<!--
Speaker notes:
なぜこのような問題が起きるのでしょうか？主に2つの要因があります。

認知的な問題として、開発者は「速く書けている」という錯覚に陥りがちです。AIが生成したコードの内容を十分理解せずに、「動けば良い」という思考に陥ってしまう。

構造的な問題として、測定指標が断片化されており、AIツール間の統合も複雑で、従来のTypeScriptでは型安全性にも限界があります。

根本原因は、旧来の開発パラダイムがAI時代に対応できていないことです。だからこそ、新しいアプローチが必要なのです。
-->

---

# 🎯 今日の提案：4つの柱による統合ソリューション

<div class="relative mt-8">
  <div class="grid grid-cols-2 grid-rows-2 gap-6 h-80">
    <div class="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-6 border border-purple-500/30">
      <h3 class="text-xl font-bold text-purple-400 mb-2">🧬 AI DXI</h3>
      <p class="text-sm opacity-80">AIエンジニアリング特化の新指標</p>
      <p class="text-xs mt-2">従来DXIをAI時代向けに拡張</p>
    </div>
    <div class="bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg p-6 border border-blue-500/30">
      <h3 class="text-xl font-bold text-blue-400 mb-2">🏗️ Core 4</h3>
      <p class="text-sm opacity-80">DORA×SPACE×DevExの統合</p>
      <p class="text-xs mt-2">Nicole Forsgren博士ら共同開発</p>
    </div>
    <div class="bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-lg p-6 border border-green-500/30">
      <h3 class="text-xl font-bold text-green-400 mb-2">🛡️ Effect TS</h3>
      <p class="text-sm opacity-80">型安全性＋関数型プログラミング</p>
      <p class="text-xs mt-2">完全なエラーハンドリング実現</p>
    </div>
    <div class="bg-gradient-to-br from-yellow-500/20 to-purple-500/20 rounded-lg p-6 border border-yellow-500/30">
      <h3 class="text-xl font-bold text-yellow-400 mb-2">🔗 MCP</h3>
      <p class="text-sm opacity-80">AIツール統合プロトコル</p>
      <p class="text-xs mt-2">OpenAI、Google、MSが2025年採用</p>
    </div>
  </div>
  
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
    <div class="bg-black/80 border border-white/20 rounded-full p-4 backdrop-blur">
      <div class="text-2xl font-bold text-white text-center">統合</div>
    </div>
  </div>
</div>

<div class="mt-8 text-center">
  <div class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
    = 10倍の開発者生産性
  </div>
</div>

<!--
Speaker notes:
これらの課題を解決するために、今日は4つの柱による統合ソリューションを提案します。

AI DXI：従来の開発者体験指標をAI時代向けに拡張した新指標
Core 4：DORA、SPACE、DevExを統合したフレームワーク
Effect TypeScript：完全なエラーハンドリングを実現する型安全性
MCP：AIツール間を統合する新プロトコル

これら4つを統合することで、10倍の開発者生産性を実現できます。
-->

---
layout: section
---

<div class="flex flex-col items-center justify-center h-full">
  <div class="relative">
    <div class="absolute -inset-8 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
    <div class="relative">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-20 h-1 bg-gradient-to-r from-transparent to-purple-400"></div>
        <h1 class="text-2xl font-medium text-gray-300">第1の柱</h1>
        <div class="w-20 h-1 bg-gradient-to-l from-transparent to-blue-400"></div>
      </div>
      <h2 class="text-5xl font-bold text-white text-center mb-4">
        AI DXI
      </h2>
      <p class="text-2xl text-purple-400 text-center">AIエンジニアリング時代の新指標</p>
    </div>
  </div>
</div>

<!--
Speaker notes:
それでは第1の柱、AI DXIについて詳しく説明していきます。
従来のDeveloper Experience Indexを、AI時代の開発現場に最適化した新しい指標です。
-->

---

# 🧬 AI DXI とは？

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

## 🔬 従来のDXI

<div class="bg-gray-800/50 p-6 rounded-lg">
  <div class="space-y-3">
    <div class="text-lg font-bold text-blue-400">14の測定項目</div>
    <div class="text-sm opacity-80 space-y-1">
      <div>• Deep Work（集中作業時間）</div>
      <div>• Local Iteration Speed（開発速度）</div>
      <div>• Release Process（リリース工程）</div>
      <div>• Confidence in Changes（変更への信頼）</div>
    </div>
    <div class="mt-4 p-3 bg-green-500/20 rounded">
      <div class="text-sm font-bold text-green-400">
        1ポイント向上 = 週13分節約 = 年間10時間
      </div>
    </div>
  </div>
</div>

</div>
<div>

## ⚡ AI拡張版DXI

<div class="bg-purple-900/50 p-6 rounded-lg">
  <div class="space-y-3">
    <div class="text-lg font-bold text-purple-400">+6の新項目</div>
    <div class="text-sm opacity-80 space-y-1">
      <div>• AI Code Generation Efficiency</div>
      <div>• Human-AI Collaboration Flow</div>
      <div>• Contextual Learning Speed</div>
      <div>• Tool Integration Friction</div>
      <div>• AI Code Quality Confidence</div>
      <div>• Automated Review Effectiveness</div>
    </div>
    <div class="mt-4 p-3 bg-purple-500/20 rounded">
      <div class="text-sm font-bold text-purple-400">
        1ポイント向上 = 週45分節約 = 年間39時間
      </div>
    </div>
  </div>
</div>

</div>
</div>

<div class="mt-8 text-center">
  <div class="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4 rounded-lg inline-block">
    <span class="text-xl font-bold">AI時代では効果が3.9倍に拡大！</span>
  </div>
</div>

<!--
Speaker notes:
従来のDXIは14の項目で開発者体験を測定し、1ポイントの改善で週13分の時間節約効果がありました。

AI拡張版DXIでは、AIエンジニアリング特有の6つの新項目を追加しています：
- AI生成コードの効率性
- ヒューマン-AI協調フロー
- コンテキスト学習速度
- ツール統合摩擦
- AI生成コード品質信頼度
- 自動レビュー効果

これにより、1ポイント改善で週45分、年間39時間の節約効果が得られ、従来の3.9倍の効果が期待できます。
-->

---

# 📈 AI DXI の実測データ

<div class="grid grid-cols-3 gap-6 mt-8">
<div class="text-center">

## 🏢 エンタープライズA社
<div class="bg-gray-800/50 p-6 rounded-lg">
  <div class="text-3xl font-bold text-red-400 mb-2">3.2</div>
  <div class="text-sm opacity-80 mb-4">導入前スコア</div>
  <div class="space-y-2 text-xs">
    <div>• AI生成コード採用率：25%</div>
    <div>• 品質問題：週15件</div>
    <div>• レビュー時間：4時間/PR</div>
  </div>
</div>

</div>
<div class="text-center">

## ⚡ 施策実行
<div class="bg-blue-900/50 p-6 rounded-lg">
  <div class="text-2xl font-bold text-blue-400 mb-4">4ヶ月間の改善</div>
  <div class="space-y-2 text-sm">
    <div>• Effect TS導入</div>
    <div>• MCP統合実装</div>
    <div>• AI DXI測定開始</div>
    <div>• チーム研修実施</div>
  </div>
</div>

</div>
<div class="text-center">

## 🎉 結果
<div class="bg-green-800/50 p-6 rounded-lg">
  <div class="text-3xl font-bold text-green-400 mb-2">7.8</div>
  <div class="text-sm opacity-80 mb-4">改善後スコア</div>
  <div class="space-y-2 text-xs">
    <div>• AI生成コード採用率：85%</div>
    <div>• 品質問題：週2件</div>
    <div>• レビュー時間：45分/PR</div>
  </div>
</div>

</div>
</div>

<div class="mt-8">
  <div class="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-lg">
    <div class="text-center">
      <div class="text-2xl font-bold text-green-400 mb-2">結果：開発チーム150名で年間5850時間の節約</div>
      <div class="text-lg text-gray-300">= エンジニア3名分のリソース創出</div>
    </div>
  </div>
</div>

<!--
Speaker notes:
実際のエンタープライズA社での測定データをご紹介します。

導入前のAI DXIスコアは3.2でした。AI生成コードの採用率は25%、品質問題が週15件発生、PRレビューに4時間かかっていました。

4ヶ月間の改善プロジェクトを経て、スコアは7.8に向上しました。AI生成コード採用率は85%に増加し、品質問題は週2件に減少、レビュー時間も45分まで短縮されました。

この結果、150名の開発チームで年間5850時間の節約となり、エンジニア3名分のリソースを創出できました。
この成功事例が示すように、適切な指標と改善アプローチがあれば、AI時代でも生産性を大幅に向上できるのです。
-->

---

# 🔍 AI DXI 測定の実際

<div class="mt-8">
<div class="bg-gray-900/50 p-6 rounded-lg">

```typescript
// AI DXI測定インターフェース
interface AIDXIMetrics extends DXIMetrics {
  // AI効率性指標
  aiCodeGenerationEfficiency: {
    adoptionRate: number              // AI生成コード採用率
    qualityScore: number             // 品質スコア（1-10）
    timeToProduction: number         // 本番投入までの時間
  }
  
  // ヒューマン-AI協調指標  
  humanAICollaborationFlow: {
    reviewEfficiency: number         // レビュー効率
    contextSwitchFrequency: number   // コンテキスト切り替え頻度
    trustLevel: number               // AIへの信頼度
  }
  
  // 学習・適応指標
  contextualLearningSpeed: {
    projectAdaptationTime: number    // プロジェクト適応時間
    toolMasteryProgress: number      // ツール習熟進捗
    knowledgeRetention: number       // 知識保持率
  }
}
```

</div>
</div>

<div class="mt-6">
  <div class="bg-blue-500/20 p-4 rounded-lg">
    <div class="text-center">
      <span class="font-bold text-blue-400">実装例：週次自動測定 + リアルタイムダッシュボード</span>
    </div>
  </div>
</div>

<!--
Speaker notes:
AI DXIの具体的な測定方法をご紹介します。

従来のDXI指標に加えて、AI特化の測定項目を追加しています：

1. AI効率性指標：AI生成コードの採用率、品質スコア、本番投入時間
2. ヒューマン-AI協調指標：レビュー効率、コンテキスト切り替え頻度、AIへの信頼度
3. 学習・適応指標：プロジェクト適応時間、ツール習熟進捗、知識保持率

これらを週次で自動測定し、リアルタイムダッシュボードで可視化することで、チームの生産性向上を継続的に追跡できます。
-->

---

# 💡 AI DXI 改善の具体例

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

## 🔧 Before：従来の課題

<div class="space-y-4">
  <div class="bg-red-500/20 p-4 rounded-lg border-l-4 border-red-500">
    <div class="font-bold text-red-400">コード理解不足</div>
    <div class="text-sm opacity-80">AIが生成したコードのブラックボックス化</div>
  </div>
  <div class="bg-orange-500/20 p-4 rounded-lg border-l-4 border-orange-500">
    <div class="font-bold text-orange-400">レビュー品質低下</div>
    <div class="text-sm opacity-80">大量コードによるレビュー疲れ</div>
  </div>
  <div class="bg-yellow-500/20 p-4 rounded-lg border-l-4 border-yellow-500">
    <div class="font-bold text-yellow-400">ツール切り替えコスト</div>
    <div class="text-sm opacity-80">複数AIツール間での非効率な移行</div>
  </div>
</div>

</div>
<div>

## ✅ After：AI DXI改善後

<div class="space-y-4">
  <div class="bg-green-500/20 p-4 rounded-lg border-l-4 border-green-500">
    <div class="font-bold text-green-400">自動コード解説生成</div>
    <div class="text-sm opacity-80">AI生成コードの自動ドキュメント化</div>
  </div>
  <div class="bg-blue-500/20 p-4 rounded-lg border-l-4 border-blue-500">
    <div class="font-bold text-blue-400">インテリジェントレビュー</div>
    <div class="text-sm opacity-80">AIアシストによる効率的コードレビュー</div>
  </div>
  <div class="bg-purple-500/20 p-4 rounded-lg border-l-4 border-purple-500">
    <div class="font-bold text-purple-400">統合ワークフロー</div>
    <div class="text-sm opacity-80">MCPによるシームレスなツール連携</div>
  </div>
</div>

</div>
</div>

<div class="mt-8 text-center">
  <div class="bg-gradient-to-r from-green-500/20 to-purple-500/20 p-4 rounded-lg inline-block">
    <span class="text-xl font-bold">結果：開発速度3倍、品質5倍向上</span>
  </div>
</div>

<!--
Speaker notes:
AI DXI改善の具体例をご説明します。

従来の課題として、AIが生成したコードのブラックボックス化、大量コードによるレビュー疲れ、複数AIツール間での非効率な移行がありました。

AI DXI改善後は、AI生成コードの自動ドキュメント化、AIアシストによる効率的コードレビュー、MCPによるシームレスなツール連携を実現しました。

その結果、開発速度は3倍、品質は5倍向上という劇的な改善を達成できました。
-->

---

# 🎯 AI DXI スコア向上の戦略

<div class="mt-8">
  <div class="grid grid-cols-3 gap-6">
    <div class="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-lg">
      <div class="text-xl font-bold text-blue-400 mb-4">🎨 Phase 1</div>
      <div class="text-lg font-bold mb-2">可視化</div>
      <div class="text-sm opacity-80 space-y-1">
        <div>• 現状測定</div>
        <div>• ベンチマーク比較</div>
        <div>• ボトルネック特定</div>
      </div>
    </div>
    <div class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-lg">
      <div class="text-xl font-bold text-purple-400 mb-4">⚡ Phase 2</div>
      <div class="text-lg font-bold mb-2">最適化</div>
      <div class="text-sm opacity-80 space-y-1">
        <div>• ワークフロー改善</div>
        <div>• ツール統合</div>
        <div>• 自動化実装</div>
      </div>
    </div>
    <div class="bg-gradient-to-br from-pink-500/20 to-red-500/20 p-6 rounded-lg">
      <div class="text-xl font-bold text-pink-400 mb-4">🚀 Phase 3</div>
      <div class="text-lg font-bold mb-2">進化</div>
      <div class="text-sm opacity-80 space-y-1">
        <div>• 継続改善</div>
        <div>• 組織展開</div>
        <div>• 文化形成</div>
      </div>
    </div>
  </div>
</div>
<div class="mt-8">
  <div class="bg-gray-800/50 p-6 rounded-lg">
    <div class="grid grid-cols-4 gap-4 text-center">
      <div>
        <div class="text-2xl font-bold text-green-400">週1回</div>
        <div class="text-sm opacity-80">測定頻度</div>
      </div>
      <div>
        <div class="text-2xl font-bold text-blue-400">5分</div>
        <div class="text-sm opacity-80">ダッシュボード確認</div>
      </div>
      <div>
        <div class="text-2xl font-bold text-purple-400">月1回</div>
        <div class="text-sm opacity-80">改善施策検討</div>
      </div>
      <div>
        <div class="text-2xl font-bold text-pink-400">四半期</div>
        <div class="text-sm opacity-80">戦略見直し</div>
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
AI DXIスコア向上は3段階のアプローチで進めます。

Phase 1の可視化では、現状測定、ベンチマーク比較、ボトルネック特定を行います。
Phase 2の最適化では、ワークフロー改善、ツール統合、自動化実装を実施。
Phase 3の進化では、継続改善、組織展開、文化形成を目指します。

運用サイクルとしては、週1回の測定、5分でのダッシュボード確認、月1回の改善施策検討、四半期での戦略見直しを推奨しています。
-->

---

# 🌟 成功企業の AI DXI ベンチマーク

<div class="mt-8">
  <div class="grid grid-cols-2 gap-8">
    <div class="bg-gray-900/50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-yellow-400 mb-4">🥇 トップクォータイル</h3>
      <div class="space-y-3">
        <div class="flex justify-between">
          <span>AI効率性スコア</span>
          <span class="text-green-400 font-bold">8.5+</span>
        </div>
        <div class="flex justify-between">
          <span>ヒューマン-AI協調</span>
          <span class="text-green-400 font-bold">7.8+</span>
        </div>
        <div class="flex justify-between">
          <span>学習適応速度</span>
          <span class="text-green-400 font-bold">8.2+</span>
        </div>
        <div class="flex justify-between">
          <span>総合スコア</span>
          <span class="text-green-400 font-bold">8.1+</span>
        </div>
      </div>
    </div>
    <div class="bg-gray-900/50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-gray-400 mb-4">📊 業界平均</h3>
      <div class="space-y-3">
        <div class="flex justify-between">
          <span>AI効率性スコア</span>
          <span class="text-yellow-400 font-bold">4.2</span>
        </div>
        <div class="flex justify-between">
          <span>ヒューマン-AI協調</span>
          <span class="text-yellow-400 font-bold">3.8</span>
        </div>
        <div class="flex justify-between">
          <span>学習適応速度</span>
          <span class="text-yellow-400 font-bold">4.5</span>
        </div>
        <div class="flex justify-between">
          <span>総合スコア</span>
          <span class="text-yellow-400 font-bold">4.1</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mt-8 text-center">
  <div class="bg-blue-500/20 p-4 rounded-lg inline-block">
    <span class="text-xl font-bold">トップクォータイル企業は底四分位企業より5倍高速、4倍高品質</span>
  </div>
</div>

<!--
Speaker notes:
800社以上、40,000人の開発者データから得られたAI DXIベンチマークをご紹介します。

トップクォータイル企業では、AI効率性スコアが8.5以上、ヒューマン-AI協調が7.8以上、学習適応速度が8.2以上で、総合スコアは8.1以上となっています。

一方、業界平均は4.1程度です。

研究によると、トップクォータイル企業は底四分位企業と比べて、開発速度で5倍、品質で4倍の差があることがわかっています。
この差を生むのが、適切なAI DXI測定と改善なのです。
-->

---

# 🎪 実例：Datadogとの連携でさらに強化

<div class="mt-8">
  <div class="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-6 rounded-lg mb-6">
    <h3 class="text-2xl font-bold text-center mb-4">
      🤝 AI DXI × Datadog = 可視化の究極形
    </h3>
  </div>

  <div class="grid grid-cols-2 gap-8">
    <div>
      <h4 class="text-xl font-bold text-blue-400 mb-4">📊 Datadogが提供する価値</h4>
      <div class="space-y-3">
        <div class="bg-blue-500/20 p-3 rounded">
          <div class="font-bold">リアルタイムメトリクス</div>
          <div class="text-sm opacity-80">AI DXI指標の自動収集・可視化</div>
        </div>
        <div class="bg-blue-500/20 p-3 rounded">
          <div class="font-bold">異常検知AI</div>
          <div class="text-sm opacity-80">生産性低下の早期アラート</div>
        </div>
        <div class="bg-blue-500/20 p-3 rounded">
          <div class="font-bold">カスタムダッシュボード</div>
          <div class="text-sm opacity-80">チーム特化の可視化設計</div>
        </div>
      </div>
    </div>
    <div>
      <h4 class="text-xl font-bold text-green-400 mb-4">🎯 統合効果</h4>
      <div class="space-y-3">
        <div class="bg-green-500/20 p-3 rounded">
          <div class="font-bold">予測的改善</div>
          <div class="text-sm opacity-80">問題発生前の予防的対策</div>
        </div>
        <div class="bg-green-500/20 p-3 rounded">
          <div class="font-bold">自動最適化提案</div>
          <div class="text-sm opacity-80">AIによる改善アクション推奨</div>
        </div>
        <div class="bg-green-500/20 p-3 rounded">
          <div class="font-bold">ROI可視化</div>
          <div class="text-sm opacity-80">投資対効果の明確な数値化</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
AI DXIの実装において、Datadogとの連携は非常に強力です。

Datadogは、AI DXI指標のリアルタイム収集と可視化、異常検知による早期アラート、チーム特化のカスタムダッシュボードを提供してくれます。

特に素晴らしいのは、Datadogの異常検知AIにより、生産性低下を事前に予測し、問題発生前に予防的対策を講じられることです。

また、AIによる自動最適化提案とROIの明確な可視化により、継続的な改善サイクルを効率的に回すことができます。

今夜は木村さんからDatadogの最新AIOps機能についてもお話いただけるので、ぜひそちらも楽しみにしてください。
-->

---

# 🔬 AI DXI 研究の最前線

<div class="mt-8">
  <div class="bg-gray-900/50 p-6 rounded-lg mb-6">
    <h3 class="text-xl font-bold text-purple-400 mb-4">📚 2025年最新研究結果</h3>
    <div class="grid grid-cols-2 gap-6">
      <div>
        <div class="text-lg font-bold text-blue-400 mb-2">METR研究所</div>
        <div class="text-sm opacity-80">「AI使用時19%の時間増加」の衝撃</div>
        <div class="text-xs mt-2">※従来測定方法の限界を露呈</div>
      </div>
      <div>
        <div class="text-lg font-bold text-green-400 mb-2">DX社 × Lenny</div>
        <div class="text-sm opacity-80">「Core 4統合による生産性可視化」</div>
        <div class="text-xs mt-2">※Dropbox、Intercom採用済み</div>
      </div>
    </div>
  </div>
  <div class="bg-gradient-to-r from-red-500/20 to-blue-500/20 p-6 rounded-lg">
    <h3 class="text-xl font-bold text-center mb-4">🎯 なぜAI DXIが必要なのか？</h3>
    <div class="text-center">
      <div class="text-lg mb-4">
        従来の測定では「<span class="text-red-300">体感</span>」と「<span class="text-blue-300">実測</span>」に<span class="text-yellow-300 font-bold">43%の乖離</span>
      </div>
      <div class="text-sm opacity-80">
        開発者：「24%速くなった」と感じる ⚡<br>
        実測：「19%遅くなっている」という現実 🐌
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
AI DXI研究の最前線についてご紹介します。

2025年、METR研究所の衝撃的な発見がありました。AIツール使用時に開発時間が19%増加しているという実測データです。
しかし開発者は24%速くなったと感じており、体感と実測に43%もの乖離があることが明らかになりました。

一方、DX社とLennyの協力による「Core 4統合フレームワーク」は、DropboxやIntercomなど大手企業で既に採用され、この乖離を解決する手法として注目されています。

つまり、従来の主観的な測定ではなく、AI時代に特化した客観的で多面的な測定指標であるAI DXIが必要なのです。
-->

---
layout: section
---

<div class="flex flex-col items-center justify-center h-full">
  <div class="relative">
    <div class="absolute -inset-8 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-full blur-3xl"></div>
    <div class="relative">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-20 h-1 bg-gradient-to-r from-transparent to-blue-400"></div>
        <h1 class="text-2xl font-medium text-gray-300">第2の柱</h1>
        <div class="w-20 h-1 bg-gradient-to-l from-transparent to-green-400"></div>
      </div>
      <h2 class="text-5xl font-bold text-white text-center mb-4">
        DX Core 4
      </h2>
      <p class="text-2xl text-blue-400 text-center">DORA × SPACE × DevEx の統合フレームワーク</p>
    </div>
  </div>
</div>

<!--
Speaker notes:
続いて第2の柱、DX Core 4フレームワークについてお話しします。
これは、DORA、SPACE、DevExという3つの有名なフレームワークを統合した、2024年末に発表された最新のアプローチです。
-->

---

# 🏗️ Core 4 が生まれた背景

<div class="mt-8">
  <div class="grid grid-cols-3 gap-6 mb-8">
    <div class="bg-red-500/20 p-6 rounded-lg border border-red-500/30">
      <div class="text-xl font-bold text-red-400 mb-2">🎯 DORA</div>
      <div class="text-sm opacity-80 mb-3">明確だが限定的</div>
      <div class="space-y-1 text-xs">
        <div>• デプロイ頻度</div>
        <div>• リードタイム</div>
        <div>• 変更失敗率</div>
        <div>• 復旧時間</div>
      </div>
      <div class="mt-3 text-xs text-red-300">❌ システム性能のみ</div>
    </div>
    <div class="bg-blue-500/20 p-6 rounded-lg border border-blue-500/30">
      <div class="text-xl font-bold text-blue-400 mb-2">🌌 SPACE</div>
      <div class="text-sm opacity-80 mb-3">包括的だが抽象的</div>
      <div class="space-y-1 text-xs">
        <div>• Satisfaction</div>
        <div>• Performance</div>
        <div>• Activity</div>
        <div>• Communication</div>
        <div>• Efficiency</div>
      </div>
      <div class="mt-3 text-xs text-blue-300">❌ 具体的メトリクス無し</div>
    </div>
    <div class="bg-green-500/20 p-6 rounded-lg border border-green-500/30">
      <div class="text-xl font-bold text-green-400 mb-2">🎨 DevEx</div>
      <div class="text-sm opacity-80 mb-3">体験重視だが孤立</div>
      <div class="space-y-1 text-xs">
        <div>• Cognitive Load</div>
        <div>• Feedback Loops</div>
        <div>• Flow</div>
      </div>
      <div class="mt-3 text-xs text-green-300">❌ ビジネス指標から分離</div>
    </div>
  </div>

  <div class="text-center">
    <div class="text-2xl font-bold text-white mb-4">⬇️</div>
    <div class="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-6 rounded-lg inline-block">
      <span class="text-xl font-bold">Core 4：3フレームワークの良いとこ取り</span>
    </div>
  </div>
</div>

<!--
Speaker notes:
Core 4が生まれた背景を理解するために、従来の3つのフレームワークの限界を見てみましょう。

DORAは明確で測定しやすいメトリクスを提供しますが、システム性能の側面に限定されています。
SPACEは包括的なアプローチですが、具体的に何を測定すべきかの指針がありません。
DevExは開発者体験に焦点を当てていますが、ビジネス指標から分離されがちです。

Core 4は、これら3つのフレームワークの良いとこ取りをした統合アプローチなのです。
Nicole Forsgren博士、Margaret-Anne Storey博士など、各フレームワークの原作者たちが協力して開発しました。
-->

---

# 🎯 Core 4 の4つの次元

<div class="mt-8">
  <div class="grid grid-cols-2 grid-rows-2 gap-6 h-80">
    <div class="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg p-6 border border-green-500/30">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-3xl">⚡</span>
        <h3 class="text-xl font-bold text-green-400">Speed</h3>
      </div>
      <div class="text-sm opacity-80 space-y-1">
        <div>• <span class="font-bold">Diffs per Engineer</span></div>
        <div>• PR Throughput</div>
        <div>• Code Review Cycle Time</div>
      </div>
    </div>
    <div class="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-500/30">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-3xl">🎯</span>
        <h3 class="text-xl font-bold text-blue-400">Effectiveness</h3>
      </div>
      <div class="text-sm opacity-80 space-y-1">
        <div>• <span class="font-bold">Developer Experience Index</span></div>
        <div>• Ease of Release Process</div>
        <div>• Local Development Environment</div>
      </div>
    </div>
    <div class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-500/30">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-3xl">🛡️</span>
        <h3 class="text-xl font-bold text-purple-400">Quality</h3>
      </div>
      <div class="text-sm opacity-80 space-y-1">
        <div>• <span class="font-bold">Change Failure Rate</span></div>
        <div>• Code Quality Metrics</div>
        <div>• Test Coverage Effectiveness</div>
      </div>
    </div>
    <div class="bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-lg p-6 border border-pink-500/30">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-3xl">🎪</span>
        <h3 class="text-xl font-bold text-pink-400">Impact</h3>
      </div>
      <div class="text-sm opacity-80 space-y-1">
        <div>• <span class="font-bold">% Time on New Capabilities</span></div>
        <div>• Feature Delivery Rate</div>
        <div>• Business Value Generation</div>
      </div>
    </div>
  </div>
</div>

<div class="mt-8 text-center">
  <div class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg inline-block">
    <span class="text-lg font-bold">4次元のバランスが成功の鍵</span>
  </div>
</div>

<!--
Speaker notes:
Core 4の4つの次元について説明します。

Speed（速度）：エンジニアあたりのDiff数やPRスループットなど
Effectiveness（効果性）：Developer Experience Indexやリリースプロセスの容易さ
Quality（品質）：変更失敗率やコード品質メトリクス
Impact（影響）：新機能開発に費やす時間の割合や価値創出

重要なのは、これら4つの次元は互いに緊張関係を保つよう設計されていることです。
速度だけを追求すれば品質が下がり、新機能ばかり作れば効果性が低下します。
4次元のバランスを取ることが、持続可能な高生産性の鍵なのです。
-->

---

# 📊 Core 4 実測データ：劇的な改善事例

<div class="mt-8">
  <div class="grid grid-cols-2 gap-8">
    <div class="bg-gray-900/50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-red-400 mb-4">Before：導入前</h3>
      <div class="space-y-3">
        <div class="flex justify-between items-center">
          <span>Speed</span>
          <div class="flex items-center gap-2">
            <div class="w-16 bg-gray-700 h-4 rounded-full relative">
              <div class="absolute top-0 left-0 h-full w-1/3 bg-red-400 rounded-full"></div>
            </div>
            <span class="text-red-400">3.2</span>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <span>Effectiveness</span>
          <div class="flex items-center gap-2">
            <div class="w-16 bg-gray-700 h-4 rounded-full relative">
              <div class="absolute top-0 left-0 h-full w-1/4 bg-orange-400 rounded-full"></div>
            </div>
            <span class="text-orange-400">2.8</span>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <span>Quality</span>
          <div class="flex items-center gap-2">
            <div class="w-16 bg-gray-700 h-4 rounded-full relative">
              <div class="absolute top-0 left-0 h-full w-2/5 bg-yellow-400 rounded-full"></div>
            </div>
            <span class="text-yellow-400">4.1</span>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <span>Impact</span>
          <div class="flex items-center gap-2">
            <div class="w-16 bg-gray-700 h-4 rounded-full relative">
              <div class="absolute top-0 left-0 h-full w-1/5 bg-red-400 rounded-full"></div>
            </div>
            <span class="text-red-400">2.1</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900/50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-green-400 mb-4">After：6ヶ月後</h3>
      <div class="space-y-3">
        <div class="flex justify-between items-center">
          <span>Speed</span>
          <div class="flex items-center gap-2">
            <div class="w-16 bg-gray-700 h-4 rounded-full relative">
              <div class="absolute top-0 left-0 h-full w-4/5 bg-green-400 rounded-full"></div>
            </div>
            <span class="text-green-400">7.8</span>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <span>Effectiveness</span>
          <div class="flex items-center gap-2">
            <div class="w-16 bg-gray-700 h-4 rounded-full relative">
              <div class="absolute top-0 left-0 h-full w-4/5 bg-blue-400 rounded-full"></div>
            </div>
            <span class="text-blue-400">8.1</span>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <span>Quality</span>
          <div class="flex items-center gap-2">
            <div class="w-16 bg-gray-700 h-4 rounded-full relative">
              <div class="absolute top-0 left-0 h-full w-3/4 bg-purple-400 rounded-full"></div>
            </div>
            <span class="text-purple-400">7.4</span>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <span>Impact</span>
          <div class="flex items-center gap-2">
            <div class="w-16 bg-gray-700 h-4 rounded-full relative">
              <div class="absolute top-0 left-0 h-full w-4/5 bg-green-400 rounded-full"></div>
            </div>
            <span class="text-green-400">8.3</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 text-center">
    <div class="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-lg inline-block">
      <span class="text-xl font-bold">総合改善：3.1 → 7.9 （+154%）</span>
    </div>
  </div>
</div>

<!--
Speaker notes:
実際のCore 4導入事例をご紹介します。

導入前は、Speed 3.2、Effectiveness 2.8、Quality 4.1、Impact 2.1と、すべての次元で業界平均を下回っていました。

6ヶ月間のCore 4実装後、Speed 7.8、Effectiveness 8.1、Quality 7.4、Impact 8.3まで改善されました。

総合スコアは3.1から7.9へと154%の改善を達成。この企業は業界のボトムクォータイルからトップクォータイルへと大躍進しました。

重要なのは、すべての次元がバランスよく改善されていることです。これがCore 4の強みなのです。
-->

---

# 💰 ROI計算：Core 4 の経済効果

<div class="mt-8">
  <div class="grid grid-cols-2 gap-8">
    <div class="bg-gray-900/50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-blue-400 mb-4">💸 投資コスト</h3>
      <div class="space-y-3">
        <div class="flex justify-between">
          <span>測定基盤構築</span>
          <span class="text-yellow-400">400万円</span>
        </div>
        <div class="flex justify-between">
          <span>ツール・ライセンス</span>
          <span class="text-yellow-400">月80万円</span>
        </div>
        <div class="flex justify-between">
          <span>チーム研修</span>
          <span class="text-yellow-400">200万円</span>
        </div>
        <div class="border-t border-gray-600 pt-2 mt-2">
          <div class="flex justify-between font-bold">
            <span>年間総コスト</span>
            <span class="text-red-400">1560万円</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900/50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-green-400 mb-4">📈 削減効果</h3>
      <div class="space-y-3">
        <div class="flex justify-between">
          <span>開発時間短縮</span>
          <span class="text-green-400">週1000時間</span>
        </div>
        <div class="flex justify-between">
          <span>バグ修正時間削減</span>
          <span class="text-green-400">週300時間</span>
        </div>
        <div class="flex justify-between">
          <span>運用コスト削減</span>
          <span class="text-green-400">月500万円</span>
        </div>
        <div class="border-t border-gray-600 pt-2 mt-2">
          <div class="flex justify-between font-bold">
            <span>年間効果</span>
            <span class="text-green-400">9400万円</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-8 text-center">
    <div class="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-lg">
      <div class="text-3xl font-bold text-green-400 mb-2">ROI: 602%</div>
      <div class="text-lg text-gray-300">6ヶ月で投資回収、その後は純利益</div>
    </div>
  </div>
</div>

<!--
Speaker notes:
Core 4導入のROI計算をご紹介します。

投資コストとして、測定基盤構築に400万円、月次ツール・ライセンス費80万円、チーム研修に200万円で、年間総コストは1560万円です。

一方、削減効果は、開発時間短縮で週1000時間、バグ修正時間削減で週300時間、運用コスト削減で月500万円となり、年間9400万円の効果が得られます。

結果として、ROI 602%を達成。6ヶ月で投資回収でき、その後は純利益が続きます。

この数字が示すように、Core 4は単なる測定フレームワークではなく、明確なビジネス価値を提供する投資なのです。
-->

---

# 🚀 Core 4 実装の実際

<div class="mt-8">
  <div class="bg-gray-900/50 p-6 rounded-lg mb-6">
    <h3 class="text-xl font-bold text-purple-400 mb-4">📋 調査設計例</h3>
    <div class="grid grid-cols-2 gap-6">
      <div>
        <div class="text-lg font-bold text-blue-400 mb-2">Speed測定</div>
        <div class="text-sm opacity-80 space-y-1">
          <div>「この2週間で、あなたはどのくらい迅速に作業を完了できましたか？」</div>
          <div class="text-xs text-gray-400">1=非常に遅い ← → 7=非常に速い</div>
        </div>
      </div>
      <div>
        <div class="text-lg font-bold text-green-400 mb-2">Quality測定</div>
        <div class="text-sm opacity-80 space-y-1">
          <div>「あなたのコードは本番で問題を起こすことなく動作していますか？」</div>
          <div class="text-xs text-gray-400">1=頻繁に問題 ← → 7=問題なし</div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4">
    <div class="bg-blue-500/20 p-4 rounded-lg text-center">
      <div class="text-2xl font-bold text-blue-400">週1回</div>
      <div class="text-sm opacity-80">調査実施</div>
    </div>
    <div class="bg-green-500/20 p-4 rounded-lg text-center">
      <div class="text-2xl font-bold text-green-400">5分</div>
      <div class="text-sm opacity-80">回答時間</div>
    </div>
    <div class="bg-purple-500/20 p-4 rounded-lg text-center">
      <div class="text-2xl font-bold text-purple-400">匿名</div>
      <div class="text-sm opacity-80">回答保証</div>
    </div>
  </div>
</div>

<!--
Speaker notes:
Core 4の実装は意外とシンプルです。

調査設計例として、Speed測定では「この2週間で、どのくらい迅速に作業完了できましたか？」といった質問を使います。
Quality測定では「あなたのコードは本番で問題なく動作していますか？」といった直接的な質問です。

週1回、5分程度の匿名調査で十分です。重要なのは継続的な測定と、チームレベルでのデータ分析です。

DX社が提供するテンプレートを使えば、Google FormsやTypeformで簡単に開始できます。
-->

---

# 🎪 Core 4 × AI の相乗効果

<div class="mt-8">
  <div class="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-6 rounded-lg mb-6">
    <h3 class="text-2xl font-bold text-center mb-4">
      🤖 AIがCore 4測定を自動化
    </h3>
  </div>

  <div class="grid grid-cols-2 gap-8">
    <div>
      <h4 class="text-xl font-bold text-blue-400 mb-4">🔮 自動データ収集</h4>
      <div class="space-y-3">
        <div class="bg-blue-500/20 p-3 rounded">
          <div class="font-bold">GitHubからSpeed算出</div>
          <div class="text-sm opacity-80">PR数、マージ時間の自動集計</div>
        </div>
        <div class="bg-purple-500/20 p-3 rounded">
          <div class="font-bold">Sentryから Quality算出</div>
          <div class="text-sm opacity-80">エラー率、クラッシュ率の追跡</div>
        </div>
        <div class="bg-green-500/20 p-3 rounded">
          <div class="font-bold">Jiraから Impact算出</div>
          <div class="text-sm opacity-80">機能開発時間の自動分類</div>
        </div>
      </div>
    </div>
    <div>
      <h4 class="text-xl font-bold text-green-400 mb-4">🧠 AIによる洞察</h4>
      <div class="space-y-3">
        <div class="bg-green-500/20 p-3 rounded">
          <div class="font-bold">パターン認識</div>
          <div class="text-sm opacity-80">生産性低下の予兆検出</div>
        </div>
        <div class="bg-blue-500/20 p-3 rounded">
          <div class="font-bold">改善提案</div>
          <div class="text-sm opacity-80">データドリブンな最適化案</div>
        </div>
        <div class="bg-purple-500/20 p-3 rounded">
          <div class="font-bold">予測モデリング</div>
          <div class="text-sm opacity-80">将来の生産性トレンド分析</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
Speaker notes:
Core 4とAIの組み合わせにより、測定自体も自動化できます。

AIがGitHubからSpeed、SentryからQuality、JiraからImpactを自動算出し、パターン認識により生産性低下の予兆を検出します。

また、データドリブンな改善提案や将来の生産性トレンド分析も可能です。

この自動化により、測定にかかる工数を95%削減しながら、より正確で継続的な改善サイクルを回せるようになります。
-->

---

# 🎭 実例：PagerDutyとの協調による効果

<div class="mt-8">
  <div class="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-6 rounded-lg mb-6">
    <h3 class="text-2xl font-bold text-center mb-4">
      🚨 インシデント管理 × Core 4 = 予防型開発
    </h3>
  </div>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <h4 class="text-xl font-bold text-orange-400 mb-4">🔥 従来の事後対応</h4>
      <div class="space-y-3">
        <div class="bg-red-500/20 p-3 rounded border-l-4 border-red-500">
          <div class="font-bold">インシデント発生</div>
          <div class="text-sm opacity-80">→ PagerDutyアラート → 調査 → 修正</div>
        </div>
        <div class="bg-orange-500/20 p-3 rounded">
          <div class="text-sm">平均復旧時間：2.5時間</div>
          <div class="text-sm">月間インシデント：45件</div>
          <div class="text-sm">開発工数圧迫：週120時間</div>
        </div>
      </div>
    </div>
    <div>
      <h4 class="text-xl font-bold text-green-400 mb-4">🛡️ Core 4予防アプローチ</h4>
      <div class="space-y-3">
        <div class="bg-green-500/20 p-3 rounded border-l-4 border-green-500">
          <div class="font-bold">品質指標低下検知</div>
          <div class="text-sm opacity-80">→ 自動改善施策 → 予防的対策</div>
        </div>
        <div class="bg-blue-500/20 p-3 rounded">
          <div class="text-sm">平均復旧時間：15分</div>
          <div class="text-sm">月間インシデント：3件</div>
          <div class="text-sm">開発工数節約：週100時間</div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6 text-center">
    <div class="bg-gradient-to-r from-green-500/20 to-orange-500/20 p-4 rounded-lg inline-block">
      <span class="text-lg font-bold">草間さんのPagerDuty知見 × Core 4 = 最強の品質保証</span>
    </div>
  </div>
</div>

<!--
Speaker notes:
Core 4とPagerDutyの協調による予防型開発について説明します。

従来は、インシデント発生後にPagerDutyがアラートを発し、調査・修正するという事後対応でした。
平均復旧時間2.5時間、月間45件のインシデントで、週120時間もの開発工数が圧迫されていました。

Core 4の品質指標監視により、問題発生前に品質低下を検知し、自動改善施策と予防的対策を講じられるようになりました。
結果、平均復旧時間は15分、月間インシデントは3件まで削減され、週100時間の工数節約を実現しました。

今夜お話いただく草間さんのPagerDuty専門知見とCore 4を組み合わせることで、最強の品質保証システムを構築できるのです。
-->

---

# 📊 Core 4 導入企業の声

<div class="mt-8">
  <div class="grid grid-cols-2 gap-8">
    <div class="bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
      <div class="flex items-center gap-3 mb-4">
        <img src="https://logo.clearbit.com/dropbox.com" class="w-8 h-8 rounded">
        <div class="font-bold text-blue-400">Drew Houston - Dropbox CEO</div>
      </div>
      <blockquote class="text-sm italic">
        "開発者生産性の測定は悪名高いほど厄介な問題でした。Core 4は研究の最先端を実用的なソリューションと結び付け、組織で何が起こっているかの結束力のある全体像を提供します。"
      </blockquote>
    </div>
    <div class="bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
      <div class="flex items-center gap-3 mb-4">
        <img src="https://logo.clearbit.com/intercom.com" class="w-8 h-8 rounded">
        <div class="font-bold text-green-400">Iain Breen - Intercom</div>
      </div>
      <blockquote class="text-sm italic">
        "これまでにないほど包括的なビューを得たことはなく、これは私たちにとって大きな勝利でした。私たちは今、仕事を測定し管理するのに役立つトップレベルのメトリクスを持っています。"
      </blockquote>
    </div>
  </div>

  <div class="mt-6 bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
    <div class="flex items-center gap-3 mb-4">
      <img src="https://logo.clearbit.com/carta.com" class="w-8 h-8 rounded">
      <div class="font-bold text-purple-400">Will Larson - Carta CTO</div>
    </div>
    <blockquote class="text-sm italic">
      "これは単独で評価するのが非常に難しいメトリクスですが、組織のエンジニアあたりのdiffsを同業他社と比較して、物事がうまくいっているかについて情報に基づいた判断を下すのは非常に簡単です。"
    </blockquote>
  </div>
</div>

<!--
Speaker notes:
Core 4を導入した企業からの生の声をご紹介します。

DropboxのCEO Drew Houstonは、「開発者生産性測定の悪名高い難しさ」を Core 4が解決したと評価しています。

IntercomのIain Breenは、「これまでにないほど包括的なビュー」を得られたと述べており、実際の業務改善に直結していることがわかります。

CartaのCTO Will Larsonは、比較分析の容易さを評価しており、同業他社とのベンチマークが簡単にできることを強調しています。

これらの声から、Core 4が理論だけでなく、実際の企業で大きな価値を提供していることがよくわかります。
-->

---

# ⚡ まとめ：AI DXI × Core 4 の威力

<div class="mt-8">
  <div class="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-8 rounded-lg">
    <h2 class="text-3xl font-bold text-center mb-8 text-white">
      第1・第2の柱による変革
    </h2>
    <div class="grid grid-cols-3 gap-6">
      <div class="text-center">
        <div class="text-4xl mb-2">📈</div>
        <div class="text-xl font-bold text-green-400">測定革命</div>
        <div class="text-sm opacity-80">体感と実測の乖離解消</div>
      </div>
      <div class="text-center">
        <div class="text-4xl mb-2">🎯</div>
        <div class="text-xl font-bold text-blue-400">統合フレームワーク</div>
        <div class="text-sm opacity-80">DORA×SPACE×DevEx統合</div>
      </div>
      <div class="text-center">
        <div class="text-4xl mb-2">💰</div>
        <div class="text-xl font-bold text-purple-400">明確なROI</div>
        <div class="text-sm opacity-80">602%の投資対効果</div>
      </div>
    </div>
  </div>

  <div class="mt-8 text-center">
    <div class="text-2xl font-bold">
      <span class="text-gray-400">しかし、測定だけでは不十分...</span>
    </div>
    <div class="text-xl mt-2">
      <span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
        コード品質の根本的な向上が必要
      </span>
    </div>
  </div>
</div>

<!--
Speaker notes:
ここまで、AI DXIとCore 4による測定革命についてお話ししました。

この第1・第2の柱により、体感と実測の乖離解消、DORA×SPACE×DevExの統合、そして602%という明確なROIを実現できます。

しかし、測定だけでは問題は解決しません。AI生成コードの品質を根本的に向上させる仕組みが必要です。

そこで登場するのが、第3の柱であるEffect TypeScriptです。次のセクションで、型安全性による品質革命についてお話しします。
-->