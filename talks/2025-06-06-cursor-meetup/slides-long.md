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
みなさん、こんばんは！今夜は5000人を超える方々にお集まりいただいて、本当にありがとうございます。
今から15分間、みなさんと一緒に、AIコーディングの未来について考えていきたいと思います。
私たちサイバーエージェントがどうやってCursorを導入し、どんな挑戦をしてきたか、そして何を学んだか。
エンジニアの方も、デザイナーの方も、CEOの方も、みんなで一緒に未来を作っていきましょう！
-->

<!-- Midjourney Prompt: Futuristic Japanese corporate office building at night with glowing AI neural networks flowing through glass windows, cyberpunk aesthetic meets traditional Japanese architecture, purple and blue neon lights reflecting on wet streets, 16:9, cinematic lighting --ar 16:9 --v 7 -->

---

# なぜ今、私たちは AIコーディングに移行するのか？

<div class="grid grid-cols-2 gap-8">
<div>

## 世界のトレンド 🌍

**AIコーディング関連のキーワード検索推移**
- 2024年11月: 指数 45
- 2025年1月: 指数 68
- 2025年3月: 指数 92
- 2025年4月: 指数 100

</div>
<div>

## 日本の現状 🇯🇵

- **Zennトレンドの50%がAI関連** (2025年4月)
- エンジニアコミュニティの急速な変化
- 従来の開発手法からの大転換期

</div>
</div>

<br>

> **"もはやAIを使わない開発は、電卓を使わない会計と同じ"**

<!--
まず、なぜ今AIコーディングなのか。
Google Trendsを見てください。この半年で検索数が2倍以上に増えています。
特に3月から急上昇。これ、偶然じゃないんです。
日本でも、Zennのトレンドの半分がAI関連。
もう無視できない流れなんです。
-->

<!-- Midjourney Prompt: Global trend visualization with glowing data streams flowing across a world map, focusing on Japan with bright neural network connections, modern data visualization aesthetic, blue and gold color scheme, 16:9 --ar 16:9 --v 7 -->

---

# AIコードエディタ導入企業の最新事例

| 企業名 | 導入ツール | 導入効果 | 投資対効果 |
|--------|-----------|----------|------------|
| 株式会社ココナラ | Cursor Business | UI実装速度10倍 | 月額$40で年間数千万円相当の工数削減 |
| Ubie株式会社 | 複数AI開発ツール | エンジニア満足度85%向上 | 離職率低下による採用コスト削減 |
| 某メガベンチャー | Cursor + MCP | 開発サイクル60%短縮 | 新機能リリース頻度3倍 |

<br>

<div class="text-center text-xl">

> **"月額$40の投資で、年収1000万円のエンジニアの生産性が2倍になる"**

</div>

<!--
実際の導入事例を見てみましょう。
ココナラさんは、FigmaからCursorで直接UIを生成して、実装速度が10倍に。
10倍ですよ！今まで1週間かかってたものが、半日で終わる。
Ubieさんは、エンジニアの満足度が85%も向上。
これ、すごく大事で、優秀なエンジニアが辞めなくなるんです。
採用コスト考えたら、とんでもない投資対効果です。
-->

<!-- Midjourney Prompt: Modern Japanese corporate office with happy engineers working with AI assistants visualized as holographic helpers, productivity metrics floating in the air, warm and positive atmosphere, 16:9 --ar 16:9 --v 7 -->

---

# コーディング時間の劇的な変化

<div class="text-center">

## SWE-bench ベンチマーク結果

```mermaid
graph TD
    A[500件のGitHub Issue] --> B[人間が解決可能と判定]
    B --> C[AI エージェント実行]
    C --> D[327件を自動解決]
    D --> E[成功率: 65.40%]
```

</div>

<br>

> **"3分の2のタスクをAIに任せられる = コーディング時間が1/3に"**

<!--
これ、本当にすごい数字なんです。
GitHubのIssueを500件集めて、AIに解かせたら65%以上解決できた。
つまり、日常的なバグ修正や機能追加の3分の2は、もうAIができるんです。
あなたは残りの1/3の、本当に創造的な仕事に集中できる。
-->

<!-- Midjourney Prompt: Futuristic benchmark visualization showing AI agents solving code issues, holographic progress bars and success metrics, tech laboratory aesthetic with glowing screens, 16:9 --ar 16:9 --v 7 -->

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
簡単に自己紹介させてください。
私、サイバーエージェントのCTO統括室で、開発者の生産性向上を担当しているGuntherです。
元々MicrosoftとAmazonで働いていて、日本に来て10年。
日本の開発文化に最新のツールを導入するのが私のミッションです。
見てください、これまでの実績。SlackもGitHubも私が広めました。
でも今回のCursor導入は、過去最大のチャレンジです。
-->

<!-- Midjourney Prompt: Portrait style tech evangelist in modern Japanese office, holographic displays showing successful tool migrations timeline, warm professional lighting with tech achievements floating around, 16:9 --ar 16:9 --v 7 -->

---

# なぜ私がCursorに2年前から注目していたか

<div class="timeline">

### 2022年末
- OpenAI が Codex API を公開
- VSCode の限界を感じ始める

### 2023年初頭
- **Cursorの初期バージョンに出会う**
- "これは革命だ" と直感

### 2023年中頃
- 毎日使い始める
- 生産性が明らかに向上

</div>

<br>

> **"優れたツールは、使った瞬間に未来が見える"**

<!--
なぜ私が2年も前からCursorを使っているか。
2022年末、OpenAIがCodex APIを公開した時、私は確信しました。
コーディングの未来が変わると。
そしてCursorに出会った瞬間、「これだ！」と。
使った瞬間に、これが未来のスタンダードになると確信したんです。
-->

<!-- Midjourney Prompt: Timeline visualization with glowing milestones, early adopter using futuristic coding interface alone in dark office, visionary atmosphere with light breaking through, 16:9 --ar 16:9 --v 7 -->

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
では本題に入りましょう。
まず、サイバーエージェントがどんな会社か知ってもらう必要があります。
1万人以上の社員、3000人のエンジニア。
でも、普通の大企業とは全然違います。
「自由と自己責任」これが全ての基本です。
-->

<!-- Midjourney Prompt: Massive interconnected network of office buildings in Tokyo skyline, each building glowing with different colors representing subsidiaries, aerial view at twilight, corporate but creative atmosphere, 16:9 --ar 16:9 --v 7 -->

---

# 数字で見るサイバーエージェント

<div class="grid grid-cols-2 gap-8">
<div>

## 組織規模 📊
- **従業員数**: 10,000人以上
- **エンジニア**: 約3,000人
- **子会社数**: 200社以上
- **Slackワークスペース**: 100個以上

</div>
<div>

## 技術の多様性 🔧
- **使用言語**: 20種類以上
- **フレームワーク**: 50種類以上
- **クラウドプロバイダ**: AWS, GCP, Azure全て
- **開発手法**: チームごとに異なる

</div>
</div>

<br>

> **"統一なんて不可能。だから面白い。"**

<!--
数字で見ると、この会社のカオスさがわかります。
200以上の子会社、100以上のSlackワークスペース。
使ってる技術も言語もバラバラ。
普通の会社なら「統一しましょう」って言うけど、うちは違う。
このカオスこそが、イノベーションの源泉なんです。
-->

<!-- Midjourney Prompt: Data visualization dashboard showing company metrics with chaotic but beautiful interconnected nodes, multiple technology logos floating in organized chaos, modern tech aesthetic, 16:9 --ar 16:9 --v 7 -->

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
これがうちの文化です。
各子会社は完全に独立していて、CEOが技術選定まで決められる。
「勝手に学び、勝手に挑戦、勝手に失敗」これが合言葉。
大企業なのに、スタートアップが数百個入ってるような会社なんです。
-->

<!-- Midjourney Prompt: Multiple startup offices inside one giant transparent building, each with unique design and color scheme showing independence, creative chaos with organized structure, energetic atmosphere, 16:9 --ar 16:9 --v 7 -->

---

# この文化の素晴らしさと課題

<div class="grid grid-cols-2 gap-8">
<div>

## 素晴らしさ ✨
- イノベーションが生まれやすい
- 各チームが最適な技術を選択
- 失敗を恐れない文化
- スピード感のある意思決定

</div>
<div>

## 課題 🤔
- 全社的なツール導入が困難
- 情報共有の分断
- ベストプラクティスの横展開が難しい
- **"みんなバラバラ"**

</div>
</div>

<br>

> **"自由は素晴らしい。でも統一も時には必要。"**

<!--
この文化、素晴らしいんですけど、課題もあります。
イノベーションは生まれやすいけど、全社で何か導入するのが本当に大変。
「明日から全員これ使って」なんて言えない。
でも、だからこそ面白い挑戦なんです。
-->

<!-- Midjourney Prompt: Split screen showing creative freedom on one side with colorful innovations, and fragmentation challenges on other side with disconnected pieces, balance visualization, 16:9 --ar 16:9 --v 7 -->

---

# 従来のツール導入アプローチ（失敗例）

```mermaid
graph TD
    A[経営層の決定] --> B[全社通達]
    B --> C[各部署への展開]
    C --> D[現場の反発]
    D --> E[形骸化]
    E --> F[失敗]
```

<br>

> **"トップダウンは、うちでは機能しない"**

<!--
普通の会社なら、経営層が決めて、全社通達して、終わり。
でも、うちではこれが全く機能しない。
現場が「なんで？」って反発して、結局誰も使わない。
これまで何度も失敗してきました。
だから、違うアプローチが必要だったんです。
-->

<!-- Midjourney Prompt: Corporate meeting room with executives presenting to empty chairs, failed top-down approach visualization, disconnected communication flow, somber lighting, 16:9 --ar 16:9 --v 7 -->

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
そこで私が選んだのが、バイラル戦略です。
ウイルスのように、情報を「感染」させる。
まず小さく始めて、成功事例を作る。
それをSlackで共有し、勉強会を開く。
でも、それだけじゃ足りなかった。最後の一手が必要だったんです。
-->

<!-- Midjourney Prompt: Viral spread visualization with glowing particles spreading through interconnected office nodes, information flowing like luminous streams, dynamic motion blur effect, 16:9 --ar 16:9 --v 7 -->

---

# なぜ社内だけでは限界があるのか

<div class="grid grid-cols-2 gap-8">
<div>

## 社内の壁 🏢
- 子会社間の情報分断
- 「他社の事例」扱い
- NIH症候群（Not Invented Here）
- 内輪の話と思われがち

</div>
<div>

## 外部の力 🌍
- 客観的な評価
- 業界トレンドとしての認識
- プレッシャーとモチベーション
- **"外圧こそ最強の推進力"**

</div>
</div>

<br>

> **"日本人は外圧に弱い。それを利用する。"**

<!--
なぜ社内だけじゃダメなのか。
うちの会社、子会社が多すぎて、他の子会社の事例も「他社事例」扱いなんです。
でも、外部のイベントで話題になると、急に興味を持つ。
日本人の特性ですね。外圧には弱い。
だから、それを利用することにしました。
-->

<!-- Midjourney Prompt: Office walls transforming into transparent barriers with external light breaking through, Japanese corporate culture visualization, inside vs outside pressure dynamics, 16:9 --ar 16:9 --v 7 -->

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
私の技術選定基準はシンプルです。
TTM、つまりどれだけ早く市場に出せるか。
そしてトレンド。この掛け算です。
最近、AnthropicがWindsurfへのAPI提供を止めました。
これ、すごく重要なシグナルです。
業界のトップが何を選ぶか、それが答えです。
-->

<!-- Midjourney Prompt: Futuristic dashboard with TTM metrics and trend analysis, holographic displays showing Cursor dominance, investor war room aesthetic with decision-making visualization, 16:9 --ar 16:9 --v 7 -->

---

# 最新の業界動向（2025年5月時点）

| イベント | 意味 | 影響 |
|----------|------|------|
| AnthropicのWindsurf API切断 | 競合への直接支援停止 | Cursor優位性の確立 |
| OpenAIのCursor追加投資 | 戦略的パートナーシップ強化 | 長期的な安定性 |
| GoogleのIDEプロジェクト中止 | 独自開発からの撤退 | 既存プレイヤーへの集約 |
| MicrosoftのVSCode AI統合遅延 | 内部調整の難航 | Cursorの先行優位 |

<br>

> **"勝者はすでに決まっている。あとは乗るか乗らないか。"**

<!--
最新の動向を見てください。
AnthropicがWindsurfを切った。OpenAIはCursorに追加投資。
GoogleもMicrosoftも独自のAI IDE開発に苦戦している。
もう勝負は決まってるんです。
あとは、この流れに乗るか、取り残されるか。
-->

<!-- Midjourney Prompt: News ticker style visualization with breaking tech news, holographic news displays showing industry movements, dramatic lighting with Cursor logo prominent, 16:9 --ar 16:9 --v 7 -->

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
正直に言います。最初の2年間、本当に孤独でした。
Slackチャンネル作っても、誰も来ない。
社内イベントで話しても、「へー、すごいね」で終わり。
でも諦めなかった。なぜなら、これが未来だと確信していたから。
そして、戦略を変えることにしたんです。
-->

<!-- Midjourney Prompt: Lone developer in dark office surrounded by empty desks, single monitor glowing with Cursor IDE, feeling of isolation but determination, blue hour lighting, 16:9 --ar 16:9 --v 7 -->

---

# 孤独な戦いの中で学んだこと

<div class="grid grid-cols-2 gap-8">
<div>

## 失敗から学んだ教訓 📚
- 技術の優位性だけでは人は動かない
- 社内政治力には限界がある
- タイミングが重要
- 仲間作りの大切さ

</div>
<div>

## 成功への布石 🎯
- 小さな成功事例の蓄積
- 外部ネットワークの構築
- 業界トレンドの把握
- **"諦めない心"**

</div>
</div>

<br>

> **"イノベーターは最初は必ず孤独。でもそれでいい。"**

<!--
この2年間、たくさん失敗しました。
でも、全部が学びでした。
技術がすごくても、それだけじゃ人は動かない。
タイミングと仲間が必要。
そして何より、諦めない心が大切だと学びました。
-->

<!-- Midjourney Prompt: Phoenix rising from ashes metaphor with tech elements, transformation from failure to success, warm sunrise colors breaking through darkness, inspirational atmosphere, 16:9 --ar 16:9 --v 7 -->

---

# 転機の準備：戦略的な種まき

<div class="grid grid-cols-3 gap-4">
<div>

### 🌱 2024年秋
**外部コミュニティ構築**
- Cursor Japan設立準備
- キーパーソンとの連携
- イベント企画開始

</div>
<div>

### 🌿 2024年冬
**社内の機運醸成**
- 経営層への働きかけ
- 予算確保の準備
- 協力者の発掘

</div>
<div>

### 🌳 2025年初頭
**実行準備完了**
- イベント会場確保
- スピーカー調整
- PR戦略策定

</div>
</div>

<br>

> **"偶然に見える成功も、実は全て計算づく"**

<!--
転機は突然来たように見えるけど、実は全部準備していました。
2024年秋から、外部コミュニティを作り始めた。
同時に社内でも、経営層に少しずつ話をして。
全ては、あるイベントのためでした。
-->

<!-- Midjourney Prompt: Strategic chess board with glowing pieces representing different preparation phases, time-lapse effect showing gradual setup, masterful planning visualization, 16:9 --ar 16:9 --v 7 -->

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
そして2025年2月、ついに転機が来ました。
「AI Code Agents祭り」を開催。
MG-DXの堂前社長も巻き込んで、大規模イベントに。
そして今日も登壇されているきのぴーさんにも出演いただきました！
結果は...大成功！2万人以上が見てくれました。
-->

<!-- Midjourney Prompt: Massive tech conference with packed audience, huge screens showing AI and code, celebration atmosphere with confetti, Japanese tech event success moment, dramatic lighting, 16:9 --ar 16:9 --v 7 -->

---

# イベント成功の裏側

<div class="grid grid-cols-2 gap-8">
<div>

## 仕掛けたポイント 🎯
- YouTubeライブ配信
- 有名ゲストの招聘
- 実践的なデモ中心
- 参加型のコンテンツ

</div>
<div>

## 想定外の効果 🚀
- 社内からの視聴殺到
- 経営層も視聴
- 他社からの問い合わせ
- **"社内が一気に動いた"**

</div>
</div>

<br>

> **"外部イベントが最強の社内営業ツールになった"**

<!--
このイベント、実は全部計算してました。
YouTubeで配信することで、社内の人も見やすくした。
有名ゲストを呼ぶことで、注目度を上げた。
そしたら、想定以上の効果が。
経営層まで見てくれて、翌日から問い合わせが殺到しました。
-->

<!-- Midjourney Prompt: Behind the scenes of successful tech event, control room with multiple screens showing viewer metrics skyrocketing, team celebration moment, warm success lighting, 16:9 --ar 16:9 --v 7 -->

---

# イベント後の劇的な変化

<div class="timeline">

### イベント翌日
- Slack通知が鳴り止まない
- 「いつ導入？」の問い合わせ殺到

### 1週間後
- 複数の事業部から正式な導入要請
- 予算確保の動き

### 1ヶ月後
- 経営会議で全社導入が議題に
- **"もう止められない流れ"**

</div>

<!--
イベントの翌日から、全てが変わりました。
Slackの通知が鳴り止まない。
「いつ導入されるの？」「うちの部署でも使いたい」
1週間で、複数の事業部から正式な要請が。
1ヶ月後には、経営会議の議題になってました。
もう、この流れは止められない。
-->

<!-- Midjourney Prompt: Office transformation showing sudden activity surge, notifications flying through air, momentum visualization with accelerating particles, dynamic energy atmosphere, 16:9 --ar 16:9 --v 7 -->

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
現在の状況をお伝えします。
もう全社導入は決定事項です。今は詳細を詰めている段階。
Businessプランで月額15ドル。これ、破格です。
なぜなら、全てのAIモデルが使い放題だから。
Claude 4もGPT-4.5もGemini 2.5も、追加料金なし！
-->

<!-- Midjourney Prompt: Modern Japanese corporate meeting room with executives shaking hands, holographic Cursor logo floating above table, success and agreement atmosphere, warm professional lighting, 16:9 --ar 16:9 --v 7 -->

---

# 利用可能なモデル（2025年5月現在）

| ベンダー | モデル | 特徴 |
|----------|---------|------|
| OpenAI | gpt-4.5-preview, o3 | 最新の推論能力 |
| Google | gemini-2.5-pro-max | 100万トークンコンテキスト |
| Anthropic | claude-4-sonnet-max | 最高精度のコード生成 |
| Cursor独自 | cursor-fast | 高速レスポンス |

<br>

> **"これだけのモデルを自由に使えるのはCursorだけ"**

<!--
見てください、この豪華なラインナップ。
最新のGPT-4.5、Claude 4、Gemini 2.5。
全部使い放題で月額15ドル。
他のサービスだと、それぞれ契約して、それぞれ課金。
Cursorなら全部込み。これ、革命的です。
-->

<!-- Midjourney Prompt: Futuristic model selection interface with glowing AI model cards floating in space, each with unique visual identity, premium tech showcase aesthetic, 16:9 --ar 16:9 --v 7 -->

---

# モデル性能の実際（相対評価）

| モデル | コード生成精度 | 最大入力トークン | 速度 | おすすめ用途 |
|--------|---------------|-----------------|------|------------|
| o3 | ★★★☆☆ | 20万 | 高速 | 日常的なコーディング |
| Claude 4 Sonnet | ★★★★★ | 100万 | 遅い | 複雑なデバッグ、設計 |
| Gemini 2.5 Pro | ★★★★☆ | 100万 | 中速 | プロジェクト横断解析 |
| Cursor-fast | ★★★☆☆ | 20万 | 速い | 即座の回答が必要な時 |

<br>

> **"タスクに応じてモデルを使い分ける、それがプロの技"**

<!--
実際に使ってみた評価です。
日常的なコーディングならo3で十分速い。
複雑な設計やデバッグならClaude 4。
プロジェクト全体を見渡すならGemini。
この使い分けができるのがCursorの強みです。
-->

<!-- Midjourney Prompt: Benchmark comparison visualization with glowing performance bars, holographic radar charts showing model capabilities, data-driven aesthetic with clear visual hierarchy, 16:9 --ar 16:9 --v 7 -->

---

# 類似エディタとの詳細比較

| 項目 | Cursor | GitHub Copilot | Windsurf | Cline |
|------|--------|----------------|----------|-------|
| プロジェクト理解 | ◎ 完璧 | ○ 良好 | △ 限定的 | △ 限定的 |
| Agent機能 | ◎ 最先端 | △ 基本のみ | × なし | × なし |
| モデル選択肢 | 15種類以上 | 2種類 | 3種類 | 1種類 |
| 月額費用 | $15〜$40 | $10〜$19 | $20 | 無料 |
| エンタープライズ対応 | ◎ 完備 | ◎ 完備 | △ 限定的 | × なし |

<br>

> **"比較すればするほど、Cursorの優位性は明らか"**

<!--
他のツールと比較してみましょう。
GitHub Copilotも悪くない。でもAgent機能が弱い。
Windsurfは...Anthropicに切られちゃいましたね。
Clineは無料だけど、エンタープライズでは使えない。
総合的に見て、Cursorが圧倒的です。
-->

<!-- Midjourney Prompt: Competitive analysis dashboard with Cursor clearly leading, comparison charts with glowing advantages, professional business presentation style, victory visualization, 16:9 --ar 16:9 --v 7 -->

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
私には大きな野望があります。
サイバーエージェントを「全員がCursorを使う会社」にしたい。
エンジニアだけじゃない。デザイナーも、営業も、みんな。
そして、世界で最もMCPサーバーを持つ企業にする。
従業員より多くのMCPサーバー。これが目標です。
-->

<!-- Midjourney Prompt: Futuristic CyberAgent headquarters with everyone using AI tools, holographic MCP servers floating everywhere like constellation, utopian tech workplace vision, bright optimistic atmosphere, 16:9 --ar 16:9 --v 7 -->

---

# なぜ全員がCursorを使うべきか

<div class="grid grid-cols-2 gap-8">
<div>

## デザイナーの場合 🎨
- Figmaからコード生成
- デザインシステムの自動化
- エンジニアとの共通言語
- **実装可能性の即座の確認**

</div>
<div>

## ビジネス職の場合 💼
- SQLを書かずにデータ分析
- 簡単な自動化スクリプト作成
- 技術的な議論への参加
- **"コードが読める"価値**

</div>
</div>

<br>

> **"プログラミングは新しいリテラシー。Cursorはその入口。"**

<!--
なぜ全員がCursorを使うべきか。
デザイナーさん、Figmaで作ったデザインが本当に実装できるか、すぐ確認できます。
ビジネス職の方、SQLわからなくても、日本語でデータ分析できます。
プログラミングは、もう特殊スキルじゃない。
新しいリテラシーなんです。
-->

<!-- Midjourney Prompt: Diverse team members (designer, business person, engineer) all using Cursor with different visualizations of their work floating above, inclusive tech environment, warm collaborative lighting, 16:9 --ar 16:9 --v 7 -->

---

# MCPとは何か？なぜ重要か？

<div class="text-center mb-8">

## Model Context Protocol
### AIとツールをつなぐ標準プロトコル

</div>

```mermaid
graph LR
    A[Cursor] --> B[MCP Server]
    B --> C[Slack]
    B --> D[Notion]
    B --> E[GitHub]
    B --> F[社内システム]
```

<br>

> **"MCPは、AIに手足を与える技術"**

<!--
MCPって何？って思ってる方も多いでしょう。
Model Context Protocol。簡単に言うと、AIとツールをつなぐ技術です。
今までAIは頭脳だけだった。MCPは手足を与えます。
Slackに投稿したり、Notionを更新したり、全部AIができるようになる。
-->

<!-- Midjourney Prompt: MCP visualization as glowing neural pathways connecting AI brain to various tools and services, futuristic interface design, blue and white tech aesthetic, 16:9 --ar 16:9 --v 7 -->

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
すでに動いているMCPサーバーを紹介します。
Spindleは、うちのデザインシステム。これのMCPで生産性が10倍に。
10倍ですよ！1日かかってた作業が1時間で終わる。
他にも、セキュリティ、用語辞書、デプロイツール、全部MCP化してます。
-->

<!-- Midjourney Prompt: Network diagram showing active MCP servers as glowing nodes with data streams, Japanese corporate tech infrastructure, organized visualization with company branding, 16:9 --ar 16:9 --v 7 -->

---

# Spindle MCP：10倍の生産性向上の秘密

<div class="grid grid-cols-2 gap-8">
<div>

## Before（MCP導入前）
1. Figmaでデザイン確認
2. コンポーネント名を探す
3. ドキュメントで使い方確認
4. コードを手動で記述
5. プロパティを調整

**所要時間：30分〜1時間**

</div>
<div>

## After（MCP導入後）
1. Figmaのリンクを貼る
2. AIが自動でコード生成
3. 完成！

**所要時間：3分**

</div>
</div>

<br>

> **"これが10倍の意味。もう戻れない。"**

<!--
10倍って大げさじゃないの？って思うでしょう。
具体例を見せます。
以前は、Figma見て、コンポーネント探して、ドキュメント読んで...30分以上。
今は？Figmaのリンク貼って3分。
これが10倍の意味です。もう昔には戻れません。
-->

<!-- Midjourney Prompt: Before/after comparison visualization, left side showing tedious manual process with clock, right side showing instant AI generation with lightning bolt, dramatic time savings visualization, 16:9 --ar 16:9 --v 7 -->

---
layout: center
---

# Part 2: 個人的なTips & 実践

<div class="text-center text-2xl">

## 🚀 Vibe Codingで生産性爆上げ

</div>

<!--
ここからは、私が個人的に実践している技を共有します。
「Vibe Coding」って呼んでるんですけど、これがまた革命的で。
生産性が爆上げする秘密、全部お教えします。
-->

<!-- Midjourney Prompt: Developer in flow state surrounded by holographic code streams, musical visualization waves representing "vibe", coding in the zone with neon aesthetic, dynamic energy, 16:9 --ar 16:9 --v 7 -->

---

# Vibe Codingとは？

<div class="text-center mb-8">

## 🎵 Flow State × AI = 最高の生産性

</div>

### 3つの要素
1. **リズム**: タスクを細かく分割し、テンポよく進める
2. **フロー**: AIとの対話でゾーンに入る
3. **楽しさ**: コーディングを音楽のように楽しむ

<br>

> **"コーディングは作曲。AIは最高のバンドメンバー。"**

<!--
Vibe Codingって何か。
簡単に言うと、AIと一緒にフロー状態に入る開発スタイルです。
音楽を作るように、リズムに乗ってコードを書く。
AIは最高のバンドメンバーで、あなたの演奏に合わせてくれる。
これ、本当に楽しいんです。
-->

<!-- Midjourney Prompt: Musical coding visualization with code notes flowing like sheet music, developer and AI in harmony creating symphony of code, creative flow state atmosphere, 16:9 --ar 16:9 --v 7 -->

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
モデル選びは超重要です。
アイデア出しはClaude Opus 4。これが一番創造的。
実際のコーディングは、速度重視でSonnetかGemini。
コンテキストが長い時はGemini、短い時はSonnet。
この使い分けで、効率が全然違います。
-->

<!-- Midjourney Prompt: AI model selection interface with personality traits for each model, glowing selection cards with unique characteristics, futuristic UI with Japanese labels, 16:9 --ar 16:9 --v 7 -->

---

# タスク別モデル使い分けガイド

| タスク | 推奨モデル | 理由 |
|--------|-----------|------|
| アーキテクチャ設計 | Claude Opus 4 | 深い思考と創造性 |
| バグ修正 | Claude 3.5 Sonnet | 正確性とスピードのバランス |
| リファクタリング | Gemini 2.0 Flash | 大量のコード処理能力 |
| ドキュメント作成 | o3 | 構造化された出力 |
| テスト作成 | Cursor-fast | 定型的なタスクに最適 |

<br>

> **"適材適所。AIモデルも同じ。"**

<!--
具体的な使い分けを表にしました。
アーキテクチャ設計みたいな創造的な仕事はOpus 4。
バグ修正は正確性が大事だからSonnet。
リファクタリングは大量のコードを見るからGemini。
この使い分けができると、本当に効率が上がります。
-->

<!-- Midjourney Prompt: Task-based model selection flowchart with glowing pathways, each path leading to optimal model choice, decision tree visualization with tech aesthetic, 16:9 --ar 16:9 --v 7 -->

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
これから話すのは、本当は秘密にしたかった。
私の競争優位性の源泉だから。
でも、日本のエンジニアのために公開します。
このスタック、本当に最強なんです。
特にConvex。これがAIとの相性が抜群で。
-->

<!-- Midjourney Prompt: Secret recipe book opening with glowing tech stack icons floating out magically, golden particles revealing hidden knowledge, Japanese aesthetic with modern tech elements, 16:9 --ar 16:9 --v 7 -->

---

# なぜこのスタックが最強なのか

<div class="grid grid-cols-2 gap-8">
<div>

## 🚀 開発速度
- **アイデアから実装まで30分**
- 型安全でバグ激減
- リアルタイム機能が標準
- デプロイまで自動化

</div>
<div>

## 🤖 AI親和性
- 完全な型情報でAIが間違えない
- Cursor Rulesが完備
- MCPサーバーも提供
- **"AIが理解しやすい設計"**

</div>
</div>

<br>

> **"このスタックで、私は10倍速で開発している"**

<!--
なぜこのスタックが最強か。
まず速い。アイデアから実装まで30分。
そしてAIが間違えない。完全な型情報があるから。
Convexは特に、AIのために設計されたような感じ。
実際、私はこれで10倍速で開発してます。
-->

<!-- Midjourney Prompt: Speed visualization showing idea transforming into deployed app in 30 minutes, time-lapse effect with glowing transformation stages, productivity explosion visual, 16:9 --ar 16:9 --v 7 -->

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
ここで重要な話。手を挙げてください。
Tailwind v4のコードをAIが生成して、v3で動かなかった人？
はい、たくさんいますね。これが大問題なんです。
LLMは古いコードで学習してるから、最新のAPIを知らない。
だから、RulesとMCPが超重要なんです。
-->

<!-- Midjourney Prompt: Split screen showing version conflict errors transforming into success, old deprecated code vs modern best practices, red error messages becoming green success, 16:9 --ar 16:9 --v 7 -->

---

# バージョン問題の具体例

<div class="grid grid-cols-2 gap-8">
<div>

##