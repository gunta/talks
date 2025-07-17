---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## 企業の時価総額はMCPサーバー数で決まる時代へ
  MCP保有数が示す、企業競争力の新指標

  CA.ai #2 明日から使える実践MCPテクニック
drawings:
  persist: false
transition: slide-left
title: 企業の時価総額はMCPサーバー数で決まる時代へ
mdc: true
---

# 企業の時価総額はMCPサーバー数で決まる時代へ
## MCP保有数が示す、企業競争力の新指標

<br>

### CA.ai #2 〜明日から使える実践MCPテクニック〜

<br>

**Gunther Brunner**  
株式会社サイバーエージェント  
CTO統括室 Developer Productivity室

<!--
Speaker notes:
皆さん、こんばんは！本日はCA.ai #2にお越しいただき、ありがとうございます。
これから15分間で、MCPが企業価値にどのような影響を与えるか、そして明日から実践できるMCPテクニックについてお話しします。
エンジニアの方はもちろん、経営層の方々にも理解していただけるよう、わかりやすくお伝えしていきます。
-->

---
layout: intro
---

# 2026年の未来予測

<div class="text-center text-3xl font-bold my-16">

> 「投資家はMCPエコシステムの充実度を  
> 企業評価の重要指標にする」

</div>

<div class="text-center text-xl">

これは私たちの予測であり、  
**すでに始まっている変化**です

</div>

<!--
Speaker notes:
まず最初に、私たちの大胆な予測から始めさせていただきます。
2026年、投資家はMCPエコシステムの充実度を企業評価の重要指標にするでしょう。
これは単なる予測ではなく、すでに始まっている変化なのです。
-->

---
layout: center
---

# Part 1: なぜMCPがそこまで重要なのか？
## CEO視点で理解するMCP革命

<!--
Speaker notes:
最初の5分間は、経営者の視点からMCPの重要性について説明します。
技術的な詳細ではなく、ビジネスにどのような影響を与えるかに焦点を当てます。
-->

---

# MCPの最大のイノベーション

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

## ❌ 従来の問題
- APIバージョン管理の地獄
- カスタムAPI開発の工数
- ドキュメント更新の遅れ
- 互換性の問題

</div>
<div>

## ✅ MCPが解決
- **バージョニング不要**
- **自動スキーマ認識**
- **最新版への自動対応**
- **即座に機能発見**

</div>
</div>

<div class="text-center text-2xl font-bold mt-12">

> LLMに提供するだけで、自動的に最新のスキーマとバージョンを使用し、  
> 機能を自動発見する時代へ

</div>

<!--
Speaker notes:
MCPの最大のイノベーションは、従来のAPI管理の煩雑さを完全に解消することです。
もうバージョニングも、カスタムAPIの開発も必要ありません。
LLMに提供するだけで、自動的に最新のスキーマを理解し、機能を発見してくれるのです。
-->

---

# Amazon社内でのMCP活用事例

<div class="text-center text-xl my-8">

「多くのチームが**UIを作る必要性**さえ疑問視し始めている」

</div>

<div class="grid grid-cols-2 gap-8">
<div>

## 🏗️ 従来のアプローチ
1. バックエンド開発
2. API設計
3. **UI開発（時間がかかる）**
4. ユーザートレーニング

</div>
<div>

## 🚀 MCP時代のアプローチ
1. バックエンド開発
2. **MCPサーバー作成**
3. AIエージェントが直接利用
4. 必要に応じてUIを検討

</div>
</div>

<div class="text-center text-xl font-bold mt-8">

最初のインターフェースは**MCPを持つエージェント**、  
その後に必要であればUIを検討する時代

</div>

<!--
Speaker notes:
実際にAmazon社内では、MCPの導入が急速に進んでおり、
多くのチームがそもそもUIを作る必要があるのかを疑問視し始めています。
まずMCPサーバーを作り、AIエージェントに使わせてみる。
それで十分なら、UIは作らない。これが新しい開発の流れです。
-->

---

# Vibe CodingからContext Engineeringへ

<div class="grid grid-cols-2 gap-12 mt-8">
<div>

## 🎸 Vibe Coding時代
- 「なんとなく」で書くコード
- AIに曖昧な指示
- 結果にばらつき
- 再現性が低い

</div>
<div>

## 🏗️ Context Engineering時代
- 構造化されたコンテキスト提供
- MCPによる明確な能力定義
- 安定した結果
- 高い再現性

</div>
</div>

<div class="text-center text-2xl font-bold mt-12">

MCPは「AIとの対話」を  
**エンジニアリング**に変える

</div>

<!--
Speaker notes:
私たちはVibe Codingの時代から、Context Engineeringの時代へと移行しています。
もう「なんとなく」でAIにコードを書かせる時代は終わりました。
MCPによって、AIとの対話が真のエンジニアリングになるのです。
-->

---

# Figma MCPサーバーが示す未来

<div class="text-center text-xl my-8">

**専任チーム**がMCPサーバーを開発・運用する時代

</div>

<div class="grid grid-cols-4 gap-4 text-center">
<div>

### 👨‍💼 PM
プロダクト  
マネージャー

</div>
<div>

### 👩‍💻 Engineer
専任  
エンジニア

</div>
<div>

### 🎨 Designer
UI/UX  
デザイナー

</div>
<div>

### 📢 Marketing
マーケティング  
担当

</div>
</div>

<div class="text-center text-xl font-bold mt-12">

MCPサーバーは単なる技術ではなく、  
**戦略的プロダクト**として扱われる

</div>

<!--
Speaker notes:
Figmaの事例を見てください。彼らはMCPサーバーに専任のPM、エンジニア、デザイナー、
そしてマーケティング担当まで配置しています。
これはMCPサーバーが単なる技術的な実装ではなく、
企業の競争力を左右する戦略的プロダクトだからです。
-->

---
layout: center
---

# Part 2: 最新のMCP進化と実践テクニック
## 明日から使える具体的な方法

<!--
Speaker notes:
次の5分間では、MCPの最新の進化と、明日から実際に使えるテクニックをご紹介します。
特に日本企業にとって重要な新機能についてお話しします。
-->

---

# DXT (Desktop Extensions) - 日本のためのイノベーション

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

## 🌏 なぜ日本で重要？
- 日本独自のアプリケーション対応
- ローカルファイルシステム連携
- 社内システムとの統合
- セキュリティ要件への対応

</div>
<div>

## 🚀 DXTでできること
- デスクトップアプリの自動操作
- ローカルDBへの直接アクセス
- 社内ツールとのシームレス連携
- オフライン環境での動作

</div>
</div>

<div class="text-center text-xl font-bold mt-12">

日本企業の「内製システム」と「AI」を  
つなぐ架け橋としてのDXT

</div>

<!--
Speaker notes:
DXT、Desktop Extensionsは特に日本企業にとって重要なイノベーションです。
多くの日本企業は独自の内製システムを持っており、
これらとAIを連携させることが課題でした。
DXTはその架け橋となる技術です。
-->

---

# Claude Desktopが最強のMCPクライアントである理由

<div class="text-center text-xl my-6">

**非エンジニアこそClaude Desktopを使うべき**

</div>

<div class="grid grid-cols-2 gap-6">
<div>

## ✅ サポート機能
- MCP Servers
- DXT Extensions
- Artifacts共有
- プロジェクト管理

</div>
<div>

## 🎯 非エンジニア向け機能
- GUIでの簡単設定
- ワンクリックインストール
- 視覚的な結果表示
- 自然言語での操作

</div>
</div>

<div class="text-center text-xl font-bold mt-8">

開発環境のセットアップ不要で  
**最高の生産性**を実現

</div>

<!--
Speaker notes:
エンジニアの皆さん、非エンジニアの同僚にMCPクライアントを勧めるなら、
迷わずClaude Desktopを選んでください。
全ての機能が統合されており、セットアップも簡単。
これ一つで最高の生産性を実現できます。
-->

---

# MCP Elicitations - セキュリティと使いやすさの両立

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

## 🔒 セキュリティ面
- ユーザー確認の強制
- 権限の明示的な付与
- アクセスログの記録
- プロンプトインジェクション対策

</div>
<div>

## 🎯 使いやすさ
- コンテキストの自動推測
- 必要な情報の事前収集
- インタラクティブな確認
- エラーの事前防止

</div>
</div>

<div class="text-center text-lg mt-8">

```json
{
  "elicitation": {
    "description": "プロジェクト情報を取得",
    "params": ["project_name", "environment"],
    "required": true
  }
}
```

</div>

<!--
Speaker notes:
MCP Elicitationsは、セキュリティと使いやすさを両立させる重要な機能です。
LLMがコンテキストを推測するのではなく、
明示的にユーザーから必要な情報を取得します。
これにより、プロンプトインジェクションのリスクも軽減できます。
-->

---

# セキュリティ：本番環境での必須対策

<div class="text-2xl text-center font-bold my-8">

⚠️ **本番データには読み取り専用権限のみ**

</div>

<div class="grid grid-cols-2 gap-8">
<div>

## 🛡️ 必須のセキュリティ対策
- 読み取り専用アクセス
- ユーザー権限の制限
- 監査ログの有効化
- レート制限の実装

</div>
<div>

## ⚡ リスクシナリオ
- プロンプトインジェクション
- 意図しないデータ操作
- 権限昇格攻撃
- データ漏洩

</div>
</div>

<div class="text-center text-xl font-bold mt-8">

「便利さ」と「セキュリティ」は  
**トレードオフではない**

</div>

<!--
Speaker notes:
セキュリティについて重要な注意点があります。
本番環境のデータに対しては、必ず読み取り専用の権限のみを付与してください。
便利さを追求するあまり、セキュリティを犠牲にしてはいけません。
両立は可能です。
-->

---

# 推奨MCPサーバー：Task Master

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

## 📊 人気の理由
- 今週7位、今月10位
- 16,000+ GitHubスター
- コーディングエージェントの司令塔
- 非コーディングワークフローにも対応

</div>
<div>

## 🚀 最新アップデート
- Claude Code アカウント対応
- Claude Maxアカウントで動作
- 高度な計画フレームワーク
- 並列タスク実行

</div>
</div>

<div class="text-center text-xl font-bold mt-12">

MCPサーバーのオーケストレーター  
それがTask Master

</div>

<!--
Speaker notes:
特に推奨したいのがTask Master MCPサーバーです。
わずか数ヶ月で16,000以上のGitHubスターを獲得し、
コーディングエージェントの司令塔として機能します。
最近Claude Codeアカウントにも対応し、さらに使いやすくなりました。
-->

---

# MCPロードマップ：注目すべき機能

<div class="grid grid-cols-3 gap-6 mt-8">
<div>

## 🔜 近日公開
- MCP-UI SDK
- リモートMCP対応
- 認証フレームワーク

</div>
<div>

## 🚧 開発中
- マルチエージェント連携
- ストリーミング対応
- 分散トランザクション

</div>
<div>

## 🔮 将来構想
- P2P MCP通信
- ブロックチェーン統合
- 量子コンピュータ対応

</div>
</div>

<div class="text-center text-xl font-bold mt-12">

MCPは**急速に進化**している  
今が参入の最適なタイミング

</div>

<!--
Speaker notes:
MCPのロードマップを見ると、急速な進化が予定されています。
特にMCP-UI SDKやリモートMCP対応は、
企業での活用を大きく加速させるでしょう。
今こそ参入の最適なタイミングです。
-->

---
layout: center
---

# Part 3: 行動への呼びかけ
## 明日から始めるMCP革命

<!--
Speaker notes:
最後の5分間は、皆さんに具体的なアクションをお願いしたいと思います。
MCPは待っていても始まりません。今すぐ行動を起こしましょう。
-->

---

# UIを作る前に、MCPサーバーを作れ

<div class="text-center text-3xl font-bold my-12">

新しい開発の優先順位

</div>

<div class="text-center">

## 1️⃣ MCPサーバーの作成

↓

## 2️⃣ AIエージェントでの検証

↓

## 3️⃣ 必要ならUIを検討

</div>

<div class="text-center text-xl font-bold mt-12">

この順序が、開発効率を**劇的に向上**させる

</div>

<!--
Speaker notes:
まず最初のアクションは、開発の優先順位を変えることです。
新しい機能を作る時、まずUIではなくMCPサーバーを作ってください。
AIエージェントに使わせてみて、それで十分ならUIは不要。
この考え方が、開発効率を劇的に向上させます。
-->

---

# 今すぐ始める3つのアクション

<div class="grid grid-cols-3 gap-6 mt-8">
<div class="text-center">

## 1️⃣ MCPサーバー作成
### 既存APIをMCP化
- 社内ツールから開始
- シンプルな機能から
- 1週間で1つ作る

</div>
<div class="text-center">

## 2️⃣ DXT拡張開発
### デスクトップ連携
- 社内アプリとの統合
- 自動化スクリプト
- 生産性向上ツール

</div>
<div class="text-center">

## 3️⃣ 非エンジニアへ展開
### Claude Desktop導入
- 営業チームから開始
- 使い方セミナー開催
- 成功事例の共有

</div>
</div>

<div class="text-center text-xl font-bold mt-12">

**小さく始めて、大きく育てる**

</div>

<!--
Speaker notes:
具体的に3つのアクションをお勧めします。
1. 既存のAPIをMCP化する - まず1つ、1週間で作ってみてください
2. DXT拡張を開発する - 社内ツールとの連携から始めましょう
3. 非エンジニアに展開する - Claude Desktopを導入し、成功事例を作りましょう
-->

---

# 組織全体でMCPを推進する方法

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

## 🏢 経営層への提案
- ROIの可視化
- 競合他社の事例紹介
- パイロットプロジェクト提案
- リスクとリターンの明示

</div>
<div>

## 👥 チームへの展開
- ハンズオンワークショップ
- ペアプログラミング
- 社内MCPライブラリ構築
- ベストプラクティス共有

</div>
</div>

<div class="text-center text-xl font-bold mt-12">

**全員がMCPクリエイター**になる組織へ

</div>

<!--
Speaker notes:
MCPの推進は、一人では成功しません。
経営層には具体的なROIを、チームメンバーには実践的なサポートを。
全員がMCPクリエイターになれる環境を作ることが重要です。
-->

---

# MCPが変える未来の働き方

<div class="text-center text-2xl my-8">

**並列する組織** の実現

</div>

<div class="grid grid-cols-2 gap-8">
<div>

## 🏢 従来の組織
- 階層的な意思決定
- 部門間の壁
- 情報のサイロ化
- 遅い変化対応

</div>
<div>

## 🚀 MCP時代の組織
- フラットな協業
- シームレスな連携
- 情報の民主化
- リアルタイム適応

</div>
</div>

<div class="text-center text-xl font-bold mt-12">

MCPは技術ではなく、**組織変革のツール**

</div>

<!--
Speaker notes:
MCPは単なる技術ではありません。
組織のあり方そのものを変える力を持っています。
階層的な組織から、並列する組織へ。
これが私たちが目指す未来です。
-->

---
layout: center
---

# 最後に：Don't Sleep on MCP!

<div class="text-center text-3xl font-bold my-12">

MCPは**非常に速く**進化している

</div>

<div class="text-center text-xl">

今日学んだことは、  
3ヶ月後には**古い情報**になっているかもしれない

だからこそ、**今すぐ始める**ことが重要

</div>

<!--
Speaker notes:
最後に強調したいのは、MCPの進化スピードです。
今日お話しした内容も、3ヶ月後には古くなっているかもしれません。
だからこそ、今すぐ始めることが重要なのです。
Don't sleep on MCP!
-->

---
layout: center
---

# 2026年、あなたの会社は？

<div class="text-center text-4xl font-bold my-16">

MCPサーバーを**100個**持つ企業

VS

MCPサーバーを**0個**しか持たない企業

</div>

<div class="text-center text-2xl">

**どちらが高い企業価値を持つでしょうか？**

</div>

<!--
Speaker notes:
2026年を想像してください。
MCPサーバーを100個持つ企業と、0個しか持たない企業。
投資家はどちらを選ぶでしょうか？
答えは明白です。
-->

---
layout: end
---

# ありがとうございました！

<div class="text-center">

## 🚀 今すぐ行動を

<br>

### 連絡先
**Gunther Brunner**  
Developer Productivity室  
@gunta (社内Slack)

<br>

### リソース
- 社内MCPポータル: mcp.cyberagent.dev
- MCPハンズオン: 毎週水曜日開催
- Slackチャンネル: #mcp-developers

</div>

<!--
Speaker notes:
ご清聴ありがとうございました。
MCPについてさらに学びたい方は、ぜひ社内リソースをご活用ください。
一緒にMCPで企業価値を高めていきましょう！
質問があれば、このあとの懇親会でお待ちしています。
-->