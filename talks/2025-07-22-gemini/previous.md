---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
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

### Cursor Meetup Tokyo 2025

<br>

**Gunther Brunner**  
株式会社サイバーエージェント

<!--
Speaker notes:
皆さん、こんばんは！今日は5000人以上の方々にお集まりいただき、本当にありがとうございます。
これから15分間、サイバーエージェントでどのようにCursorを導入し、活用しているかについてお話しします。
エンジニアだけでなく、デザイナーやCEOの方々にも理解していただけるよう、わかりやすくお伝えしていきます。
-->

<!-- Midjourney Prompt: Futuristic Japanese corporate office with glowing AI neural networks floating above desks, cyberpunk aesthetic meets traditional Japanese design, purple and blue neon lights, 16:9, cinematic lighting --ar 16:9 --v 7 -->

---
layout: intro
---

# 自己紹介

<div class="grid grid-cols-2 gap-8">
<div>

## Gunther Brunner
### CTO統括室 Developer Productivity室

- 🚀 元Microsoft/Amazon
- 🛠️ 開発者生産性向上のスペシャリスト
- 🤖 Cursor歴2年（国内最古参ユーザー）
- 📢 社内AI技術啓蒙活動のリーダー

</div>
<div>

### 推進してきたツール移行
- SVN → GitHub ✅
- HipChat → Slack ✅ (1年かかった)
- Confluence → Notion ✅
- JIRA → Linear 🔄
- **IDE → Cursor 🚀 (今ここ！)**

</div>
</div>

<!--
Speaker notes:
簡単に自己紹介させていただきます。私はサイバーエージェントのCTO統括室で開発者生産性向上を担当しているGunther Brunnerです。
元々MicrosoftやAmazonで働いていた経験を活かし、日本の開発文化に最新のツールを導入する活動をしています。
Cursorは2年前から使い始めており、おそらく国内では最も早期から使っているユーザーの一人です。
これまでも様々なツール移行を推進してきましたが、今回のCursor導入は特に力を入れています。
-->

<!-- Midjourney Prompt: Portrait style tech evangelist in modern Japanese office, holographic displays showing code and productivity metrics, warm professional lighting, blend of Western and Japanese aesthetic, 16:9 --ar 16:9 --v 7 -->

---
layout: center
---

# Part 1: サイバーエージェントという特殊な企業

<div class="text-center">

## 連結従業員数 1万人以上
### エンジニア約3,000人

<br>

> **"自由と自己責任"** - それが私たちの文化

</div>

<!--
Speaker notes:
まず、サイバーエージェントがどういう企業かを理解していただく必要があります。
私たちは1万人以上の従業員を抱える大企業ですが、普通の大企業とは全く違います。
「自由と自己責任」という理念のもと、極めてユニークな組織文化を持っています。
-->

<!-- Midjourney Prompt: Massive interconnected network of office buildings in Tokyo, each glowing with different colors representing different subsidiaries, bird's eye view at twilight, corporate but creative atmosphere, 16:9 --ar 16:9 --v 7 -->

---

# サイバーエージェントの組織文化

<div class="grid grid-cols-2 gap-8">
<div>

## 🏢 数百の子会社
- 独立した経営権限
- 異なるSlackワークスペース
- 独自の技術選定

</div>
<div>

## 🚀 ボトムアップ文化
- トップダウンの指示なし
- 各チームが自主的に選択
- **"勝手に学び、勝手に挑戦、勝手に失敗"**

</div>
</div>

<br>

<div class="text-center text-2xl font-bold">

> **"大企業の中にスタートアップが数百個ある"**

</div>

<!--
Speaker notes:
サイバーエージェントは、一つの会社というより、数百のスタートアップの集合体です。
各子会社は独立した権限を持ち、技術選定も自由です。
これは素晴らしい文化ですが、新しいツールを全社に導入する際には大きな課題となります。
トップダウンで「明日から全員Cursor使え」とは言えないんです。
-->

<!-- Midjourney Prompt: Multiple startup offices inside one giant building, each with unique design and color scheme, creative chaos, energetic atmosphere, Japanese corporate meets Silicon Valley vibe, 16:9 --ar 16:9 --v 7 -->

---

# バイラル戦略：ツール導入の唯一の方法

<div class="text-center">

## 🦠 情報は"感染"させるしかない

</div>

<br>

<div class="grid grid-cols-3 gap-4">
<div class="text-center">

### Step 1
**小さなチームで成功**
- 実績を作る
- 効果を可視化

</div>
<div class="text-center">

### Step 2
**エバンジェリズム活動**
- 社内勉強会
- Slackでの布教
- 成功事例の共有

</div>
<div class="text-center">

### Step 3
**公開イベントで拡散**
- YouTubeで配信
- 外部からの注目
- 内部の関心喚起

</div>
</div>

<!--
Speaker notes:
このような環境でツールを普及させるには、バイラル戦略しかありません。
まず小さなチームで成功事例を作り、それを徐々に広げていく。
しかし、社内だけでは限界があります。なぜなら「社内」という概念すら曖昧だからです。
そこで私が選んだのは、公開イベントという方法でした。
-->

<!-- Midjourney Prompt: Viral spread visualization, glowing particles spreading through interconnected nodes, Japanese office environment, dynamic motion blur, pink and blue color scheme representing innovation spread, 16:9 --ar 16:9 --v 7 -->

---

# 私の技術選定基準

<div class="text-center text-3xl mb-8">

## TTM (Time to Market) × Trend = 勝利の方程式

</div>

<div class="grid grid-cols-2 gap-8">
<div>

### ⏱️ TTM重視
- 開発速度の向上
- 市場投入までの時間短縮
- **"速さは正義"**

</div>
<div>

### 📈 トレンド分析
- AnthropicがWindsurfを切断
- アンケートでCursorが圧勝
- 新機能・新モデルの対応速度

</div>
</div>

<br>

<div class="text-center text-2xl font-bold">

> **"IDEカテゴリーでは、Cursorに賭ける"**

</div>

<!--
Speaker notes:
私が技術を選ぶ基準は明確です。TTM、つまり市場投入までの時間と、トレンドです。
最近、AnthropicがOpenAIに買収されたWindsurfへの直接API提供を停止しました。
私が行ったアンケートでも、Cursorが圧倒的に支持されています。
新しいモデルや機能への対応速度を見ても、Cursorには明確なエッジがあります。
-->

<!-- Midjourney Prompt: Futuristic dashboard showing trend graphs and time metrics, holographic displays with cursor logo prominent, tech investor war room aesthetic, dark mode with neon accents, 16:9 --ar 16:9 --v 7 -->

---

# 2年間の孤独な戦い

<div class="timeline">

### 2023年
- 🚀 Cursor使用開始（ほぼ一人）
- 💬 社内Slackチャンネル作成
- 😔 **反応なし...**

### 2024年前半
- 🎤 社内イベントで登壇
- 📢 布教活動継続
- 😢 **まだほとんど使われず...**

### 2024年後半
- 💡 **"外から攻める"戦略に転換**

</div>

<!--
Speaker notes:
実は私、2年前からCursorを使っていました。でも、ほぼ一人でした。
社内でSlackチャンネルを作っても、イベントで話しても、なかなか広まらない。
そこで気づいたんです。内側からではなく、外側から攻める必要があると。
-->

<!-- Midjourney Prompt: Lone developer in dark office surrounded by multiple monitors showing Cursor IDE, feeling of isolation but determination, blue glow from screens, cinematic mood, 16:9 --ar 16:9 --v 7 -->

---
layout: center
---

# 転機：AI Code Agents祭り！

<div class="text-center">

## 2025年2月開催

### 🎯 結果
- **2万人以上が視聴**
- **CA開発者YouTube史上最高視聴数**
- **きのぴーさんも登壇！**

<br>

> **"バイラル戦略、大成功！"**

</div>

<!--
Speaker notes:
転機となったのが、今年2月に開催した「AI Code Agents祭り」です。
MG-DXの堂前社長も巻き込み、大規模なイベントにしました。
そして今日登壇されているきのぴーさんにも出演いただきました！
結果は大成功。2万人以上が視聴し、CA史上最高の視聴数を記録しました。
-->

<!-- Midjourney Prompt: Massive tech conference stage with huge screens showing AI and code, excited crowd, Japanese tech event atmosphere, dramatic lighting, celebration mood, 16:9 --ar 16:9 --v 7 -->

---

# 現在の状況

<div class="grid grid-cols-2 gap-8">
<div>

## 📈 急速な普及
- 多数のチームが導入開始
- 問い合わせが殺到
- **"いつ全社導入？"**の声

</div>
<div>

## 🤝 全社導入決定！
- 経営層との協議完了
- 詳細を詰めている段階
- **Businessプラン $15/月**

</div>
</div>

<br>

<div class="text-center">

### Cursorの最大の利点
> **"全てのモデルを追加登録・支払いなしで使える"**

</div>

<!--
Speaker notes:
イベント後、状況は一変しました。多くのチームから問い合わせが来て、
「いつ全社導入されるの？」という声が上がるようになりました。
そして現在、全社導入はもう決定事項で、詳細を詰めている段階です。
Cursorの素晴らしい点は、様々なAIモデルを追加の登録や支払いなしで使えることです。
-->

<!-- Midjourney Prompt: Modern Japanese corporate meeting room with executives discussing, holographic Cursor logo floating above table, success and agreement atmosphere, warm lighting, 16:9 --ar 16:9 --v 7 -->

---

# 私の野望：CAの未来

<div class="grid grid-cols-2 gap-8">
<div>

## 🎯 目標1
### 全員がCursorを使う会社に
- エンジニアだけでなく
- デザイナーも
- ビジネス職も
- **"コードを書かない人もCursor"**

</div>
<div>

## 🌍 目標2  
### MCP最多企業を目指す
- 社内システム全てをMCP化
- 生産性ツールの統合
- **"MCPサーバー数 > 従業員数"**

</div>
</div>

<!--
Speaker notes:
私には大きな野望があります。
一つは、サイバーエージェントを「全員がCursorを使う会社」にすること。
もう一つは、世界で最もMCPサーバーを持つ企業にすることです。
これは夢物語ではありません。すでに動き始めています。
-->

<!-- Midjourney Prompt: Futuristic CyberAgent headquarters with everyone using AI tools, holographic MCP servers floating everywhere, utopian tech workplace, bright and optimistic atmosphere, 16:9 --ar 16:9 --v 7 -->

---

# 現在のMCPサーバー事例

<div class="grid grid-cols-2 gap-4 text-sm">
<div>

### 🎨 Spindle Design System MCP
- Figma Dev Mode連携
- **生産性10倍向上**

### 🔒 RISKEN MCP  
- リスク可視化の効率化
- インシデント防止

### 📚 CA用語辞書 MCP
- 社内用語の統一理解

</div>
<div>

### 🚀 PipeCD Documentation MCP
- OSS活用の促進
- デプロイ自動化

### 🎯 Bucketeer Feature Flags MCP
- 機能フラグ管理の簡素化

### 🛠️ 生産性ポータル & MCPポータル
- cyberagent.tools
- 社内MCP一覧（開発中）

</div>
</div>

<!--
Speaker notes:
すでに多くのMCPサーバーが稼働しています。
特にSpindleデザインシステムのMCPは、UI実装の生産性を10倍に向上させました。
これらは氷山の一角で、今後さらに増やしていく予定です。
-->

<!-- Midjourney Prompt: Network diagram showing multiple MCP servers as glowing nodes, Japanese corporate tech infrastructure, clean and organized visualization, blue and white color scheme, 16:9 --ar 16:9 --v 7 -->

---
layout: center
---

# Part 2: 個人的なTips & 実践

<div class="text-center text-2xl">

## 🚀 Vibe Codingで生産性爆上げ

</div>

<!--
Speaker notes:
ここからは、私が個人的に実践している、生産性を爆上げするテクニックをご紹介します。
特に「Vibe Coding」と呼んでいる開発スタイルについてお話しします。
-->

<!-- Midjourney Prompt: Developer in flow state with multiple holographic screens, musical visualization waves, coding in the zone atmosphere, neon aesthetic, dynamic energy, 16:9 --ar 16:9 --v 7 -->

---

# 私のお気に入りモデル

<div class="grid grid-cols-2 gap-8">
<div>

### 🧠 アイデア・計画
- **Claude Opus 4** (メイン)
- **o3** (数値計算が必要な時)

</div>
<div>

### 💻 コーディング
- **Claude 3.5 Sonnet**
- **Gemini 2.0 Flash**
- (コンテキスト長で使い分け)

</div>
</div>

<br>

<div class="text-center">

### 🎯 モデル選択のコツ
> **"タスクに最適なモデルを、コンテキスト長で判断"**

</div>

<!--
Speaker notes:
モデル選択は非常に重要です。
アイデア出しにはClaude Opus 4、実際のコーディングにはSonnetかGeminiを使います。
重要なのは、タスクとコンテキスト長に応じて使い分けることです。
-->

<!-- Midjourney Prompt: AI model selection interface with glowing options, futuristic UI design, Japanese text labels, clean tech aesthetic, gradient backgrounds, 16:9 --ar 16:9 --v 7 -->

---

# 秘密のタレ：究極のVibe Coding Stack

<div class="text-center mb-8">

> **"これは公開したくない...でも日本のために公開します！"**

</div>

<div class="grid grid-cols-2 gap-8">
<div>

### 🎯 Opinionated Stack
- **AIエージェント**: Mastra
- **バックエンド＆フロント**: Convex
- **ネイティブアプリ**: Expo  
- **ホスティング**: Cloudflare

</div>
<div>

### 🔥 なぜConvex？
- 完全なe2e型付け
- リアルタイムDB
- **SQLなし！**
- スキーマ強制でAI生成が完璧

</div>
</div>

<!--
Speaker notes:
これから話すことは、正直言って公開したくありませんでした。
なぜなら、これは私の競争優位性の源泉だからです。
でも、日本のエンジニアコミュニティのために公開します。
特にConvexは、AIとの相性が抜群です。完全な型付けがあるので、AIが間違えにくいんです。
-->

<!-- Midjourney Prompt: Secret recipe book opening with glowing tech stack icons floating out, magical revelation moment, Japanese aesthetic with modern tech, golden light effects, 16:9 --ar 16:9 --v 7 -->

---

# 超重要な視点：バージョン問題

<div class="text-center text-2xl mb-8">

> **"Tailwind v4のコードを書いてv3で動かない経験、ありますよね？"**

</div>

### 🚫 従来のアプローチの問題
- LLMは古いStackOverflowのコードで学習
- バージョン違いでエラー多発
- ベストプラクティスではないコード

### ✅ 解決策
1. **Cursor Rules**を持つツール（Convexなど）
2. **MCPドキュメントサーバー**（Mastraなど）
3. 最新バージョン＆ベストプラクティスを保証

<!--
Speaker notes:
ここで重要な話をします。手を挙げてください。
Tailwind v4のコードをAIが生成して、v3環境で動かなかった経験がある人？
はい、たくさんいますね。これが問題なんです。
LLMは古いコードで学習しているので、最新のAPIを知りません。
だからこそ、RulesやMCPが重要なんです。
-->

<!-- Midjourney Prompt: Split screen showing old vs new code versions, error messages transforming into success, version conflict visualization, red to green gradient, 16:9 --ar 16:9 --v 7 -->

---

# Context is King 👑

<div class="text-center text-3xl mb-8">

> **"Cursorを離れる = 時間とCONTEXTを失う"**

</div>

### 💀 生産性キラー
- **コンテキストスイッチング**
- 外部ツールへの移動
- 情報の分散

### 🎯 解決策：全てをCursor内で
1. 既存のMCPサーバーを活用
2. 独自MCPサーバーを開発
3. ワークフロー全体を統合

<!--
Speaker notes:
AIにとって最も重要なのはコンテキストです。
Cursorを離れるたびに、あなたは時間だけでなく、貴重なコンテキストを失っています。
だからこそ、全てをCursor内で完結させることが重要なんです。
MCPはそれを可能にする魔法のような技術です。
-->

<!-- Midjourney Prompt: Developer surrounded by floating context bubbles, some fading away when leaving the IDE, visual metaphor for context loss, dramatic lighting, 16:9 --ar 16:9 --v 7 -->

---

# MCPワークフローの進化

<div class="steps">

### Step 1: 手動作業
Cursor内で全て手動実行

### Step 2: MCP化  
各作業をMCPサーバーでラップ
- Cloudflare Agent推奨
- Mastra MCP Server推奨

### Step 3: エージェント化
Mastraで全ワークフローを自動化

### Step 4: 収益化
- a) ConvexでUI/App化
- b) MCP SaaSとして販売（Stripe Agent Toolkit）

</div>

<!--
Speaker notes:
MCPを使ったワークフローは段階的に進化します。
最初は手動、次にMCP化、そしてエージェント化。
最終的には、それ自体をサービスとして販売することも可能です。
これが新しいビジネスモデルの形です。
-->

<!-- Midjourney Prompt: Evolution diagram showing manual work transforming into automated MCP workflow, ascending steps with glowing transformation effects, futuristic business visualization, 16:9 --ar 16:9 --v 7 -->

---

# MCP投資指標

<div class="text-center text-2xl mb-8">

> **"MCPサーバー数は新しい企業価値指標になる"**

</div>

### 📊 現在のトレンド
- Zapier: **"MCPサーバー数 > 従業員数"**
- Composio: 同様の発表

### 🚀 なぜ重要か
- 自動化レベルの可視化
- 生産性の定量的指標
- 投資家が注目する新指標

<!--
Speaker notes:
私は信じています。近い将来、投資家は企業のMCPサーバー数を重要な指標として見るようになると。
すでにZapierやComposioは、MCPサーバー数が従業員数を超えたと発表しています。
これは企業の自動化レベルを示す重要な指標なんです。
-->

<!-- Midjourney Prompt: Corporate dashboard showing MCP server count as key metric, investor presentation style, graphs and charts with upward trends, professional financial aesthetic, 16:9 --ar 16:9 --v 7 -->

---

# Breaking: MCP Elicitations

<div class="text-center mb-8">

### 🎉 最新機能：LLMがユーザーに質問できる！

</div>

### 従来の問題
```
User: "メール送って"
LLM: *メールアドレスを推測するか失敗*
```

### Elicitationsで解決
```
User: "メール送って" 
LLM: "メールアドレスを教えてください"
User: "test@example.com"
LLM: *正確に実行*
```

> **"LLMのハルシネーションが激減する革命的機能"**

<!--
Speaker notes:
最後に、MCPの最新機能をご紹介します。
Elicitationsという機能で、LLMがユーザーに質問できるようになりました。
これまでLLMは推測するか失敗するかでしたが、今は必要な情報を聞けるんです。
これはハルシネーションを防ぐ革命的な進化です。
-->

<!-- Midjourney Prompt: AI assistant asking clarifying questions to user, chat interface with glowing question marks, collaborative interaction visualization, friendly tech aesthetic, 16:9 --ar 16:9 --v 7 -->

---

# お知らせ

<div class="grid grid-cols-2 gap-4 text-sm">
<div>

### 🌐 MCPVerified.com
- MCP情報キュレーションサイト
- ベストプラクティス集約
- **Contributors募集中！**

### 🇯🇵 Cursor-Japan.org  
- 日本語ドキュメント
- イベント情報
- **Contributors募集中！**

</div>
<div>

### 🎯 CA.ai #2
- **2025年7月17日（木）19:30〜**
- 会場：Abema Towers
- MCPの基礎から応用まで
- [connpass.com/event/327061](https://cyberagent.connpass.com/event/327061)

### 🌟 夏の大型イベント
- 海外から大物ゲスト予定！
- 詳細は後日発表

</div>
</div>

<div class="text-center mt-8">

### 💼 We're Hiring!
興味がある方はDMください → [dub.sh/dp-enabling](https://dub.sh/dp-enabling)

</div>

<!--
Speaker notes:
最後にいくつかお知らせです。
MCPの情報をまとめたMCPVerified.comと、日本語情報のCursor-Japan.orgを立ち上げました。
どちらもContributors募集中です！
また、7月17日にCA.ai #2を開催します。MCPについて深く学べるイベントです。
そして夏には、海外から大物ゲストを呼んだ大型イベントも計画中です。
興味がある方は、ぜひご連絡ください！
-->

<!-- Midjourney Prompt: Event announcement board with multiple Japanese tech events, exciting atmosphere with confetti and spotlights, community gathering visualization, celebratory mood, 16:9 --ar 16:9 --v 7 -->

---
layout: center
class: text-center
---

# ありがとうございました！

<div class="text-2xl mt-8">

## 🚀 一緒にCursorとMCPで未来を創りましょう！

</div>

<div class="mt-12">

### Connect with me
🐦 @gunta85  
💼 LinkedIn: /in/gunther-brunner

</div>

<!--
Speaker notes:
ご清聴ありがとうございました！
Cursorはただのエディタではありません。私たちの働き方を変える革命的なツールです。
そしてMCPは、その可能性を無限に広げる技術です。
一緒に、この新しい世界を創っていきましょう！
質問がある方は、ぜひ懇親会でお声がけください。
本日はありがとうございました！
-->

<!-- Midjourney Prompt: Grand finale with audience applause, stage lights creating dramatic rays, speaker taking a bow, Japanese conference venue, triumphant atmosphere, warm golden lighting, 16:9 --ar 16:9 --v 7 --> 