---
theme: default
background: /c821792b6c834e43aa053238c3069295.jpeg
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## MCP世界への招待：AIエンジニアが創る次世代エージェント連携の世界
drawings:
  persist: false
transition: slide-left
title: MCP世界への招待：AIエンジニアが創る次世代エージェント連携の世界
mdc: true
---

# <span class="text-gradient-primary">MCP世界への招待</span> 
## <span class="text-gradient-secondary">AIエンジニアが創る次世代エージェント連携の世界</span> <mdi-heart class="text-pink-500" />


---
layout: image
image: white-art-bg.jpg
# class: text-black
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

<br>

<mdi-brush class="text-red-500" /> [guntherbrunner.art](https://guntherbrunner.art) <span class="bg-red-500 text-white rounded-full px-2 py-1 text-[10px]">NEW</span>
<br>

</div>


---
layout: center
---

# <span class="text-blue-600">12年間のCAキャリア</span> <mdi-timeline class="text-blue-600" />

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

## <span class="text-purple-600">メディア部門</span> <mdi-newspaper class="text-purple-600" />
- サービス精神の醸成
- UXデザインスキルの向上
- ユーザー中心の思考

## <span class="text-orange-600">ゲーム部門</span> <mdi-gamepad-variant class="text-orange-600" />
- フロントエンド技術の極限追求
- パフォーマンス最適化
- インタラクティブ表現の探求

</div>
<div>

## <span class="text-green-600">横軸部門</span> <mdi-graph class="text-green-600" />
- SLO（Service Level Objectives）
- <b>開発生産性の追求 ⬅️ 🚀（今ここ）</b>
- チーム横断的な改善活動<

## <span class="text-indigo-600">AI部門</span> <mdi-robot class="text-indigo-600" />
- バックエンド技術の習
- Figmaの習得
- 生成AIの実践的活用
- 最新技術のキャッチアップ

</div>
</div>

<div class="mt-8 text-center text-gray-600">
<mdi-lightbulb class="text-yellow-400" />現在は<span class="text-gradient-primary font-bold">フルスタックAIエンジニア・デザイナー</span>
</div>

---
layout: statement
---



# MCP世界への招待
## AIエンジニアが創る次世代エージェント連携の世界

<!-- 
スピーカーノート：
皆さん、こんにちは。本日はお集まりいただきありがとうございます。
このセッションでは、AIエージェント開発の未来を形作る可能性を秘めた「Model Context Protocol」、通称MCPについてお話しします。
特に、応用AIエンジニアのスキルを最大限に活かせるMCPの現在と未来に焦点を当て、約40分で解説します。
LLM活用経験を持つエンジニアの皆さんが、今すぐ取り組める基本機能から、これから実現するであろうエキサイティングな可能性まで、幅広くご紹介できればと思います。
-->

---
layout: 'center'
class: 'text-center'
---

# なぜ今、AIエージェントなのか？ 🤔

## AIによるコード生成・開発支援ツールの隆盛 🛠️

<!--
スピーカーノート：
近年、GitHub Copilot、Cursor、Claude Codeなど、AIを活用した開発支援ツールが急速に普及しています。
これらのツールは、コード生成、リファクタリング、デバッグなどを支援し、開発者の生産性を大きく向上させています。
しかし、これらのAIエージェントが真価を発揮するためには、単にコードを生成するだけでなく、開発プロジェクトの文脈（コンテキスト）を深く理解し、様々なツールと連携する必要があります。
ここで重要になるのが、本日ご紹介するMCPです。
-->

---

# 対象オーディエンス 🎯

*   **LLMやAIエージェントを活用した開発に興味があるエンジニア** 🤖
*   **AIツールの連携や拡張性に関心がある方** 🔗
*   **次世代の開発ワークフローを模索している方** <mdi-cogs />

<!--
スピーカーノート：
このプレゼンテーションは、主にエンジニアの方々を対象としていますが、AI技術の応用や将来の開発プロセスに関心のある方であれば、どなたでも興味深く聞いていただける内容かと思います。
-->

---

# 課題：AIエージェントのツール連携は複雑怪奇 🤯

*   **ツール発見の難しさ**: 高品質なツールを見つけるのが困難。検索しても玉石混交。 <mdi-magnify />
*   **品質のばらつき**: 標準化された評価基準がなく、ツールの品質が保証されない。 <mdi-star-off-outline />
*   **設定の煩雑さ**: 各ツールで設定方法が異なり、連携が手間。 <mdi-cog-off-outline />
*   **エコシステムの断片化**: 各社が独自仕様でツールを提供し、相互運用性が低い。 <mdi-puzzle-remove-outline />

<!--
スピーカーノート：
現状、AIエージェントに外部ツールを連携させるのは、多くの課題を伴います。
Mastra AIのブログ記事でも指摘されているように、「ツール統合はめちゃくちゃ」な状態です。
(出典: talks/2025-03-27-mcp/mastra-mcp.md)
どのツールが信頼できるのか、どうやって設定すればいいのか、開発者は混乱しがちです。
この問題を解決するために登場したのがMCPです。
-->

---

# MCPとは？ Model Context Protocol ℹ️

*   **Anthropic社が提唱・推進するオープンスタンダード** <mdi-lightbulb-on-outline />
*   AIアプリケーション（クライアント）と外部ツール/データソース（サーバー）間の **標準化された通信規約** 📜
*   **「AIのためのUSB-C」**: 様々なツールを統一的なインターフェースで接続 <mdi-usb-c-port />

<!--
スピーカーノート：
MCPは、Anthropic社によって提唱され、オープンソースコミュニティと共に開発が進められているプロトコルです。
AIアプリケーション（クライアント、例えばCursorやClaude Desktop）が、外部のツールやデータ（サーバー、例えばGitHub操作ツールやファイルシステムツール）と対話するための標準的な方法を定めています。
Shopify CEOのTobi Lütke氏が例えたように、様々なデバイスを接続するUSB-Cのように、MCPはAIとツールを繋ぐ標準インターフェースを目指しています。
(出典: talks/2025-03-27-mcp/mastra-mcp.md)
-->

---

# MCPの仕組み：主要コンセプト 🧱

*   **クライアント (Client)**: AIアプリケーション (Cursor, Claude Desktop, AI SDK アプリなど) <mdi-laptop />
*   **サーバー (Server)**: ツールやデータを提供するプロセス (GitHub連携, ファイル操作, DBアクセスなど) <mdi-server />
*   **トランスポート (Transport)**: クライアントとサーバー間の通信手段 (stdio, SSE, Streamable HTTP) <mdi-transit-connection-variant />
*   **メッセージ (Message)**: JSON-RPC形式でやり取りされる情報 (ツール一覧要求, ツール実行指示など) <mdi-message-text-outline />

<!--
スピーカーノート：
MCPの基本的な構成要素です。
クライアントがサーバーに対して、特定のトランスポートを通じてJSON-RPC形式のメッセージを送り、ツールの一覧を取得したり、特定のツールを実行させたりします。
-->

---

# MCPの仕組み：リソースとツール ⚖️

*   **リソース (Resource)**: アプリケーションが管理するコンテキスト情報 (開いているファイル、選択中のコードなど) 📄
*   **ツール (Tool)**: モデル（LLM）が利用可能な機能 (ファイル書き込み、API呼び出しなど) 🛠️
*   **プロンプト (Prompt)**: ユーザーからの指示 🗣️

<img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe07df610-fa0b-4e18-bca5-6ade934cb64a_2274x1264.png" alt="MCP Resources vs Tools" style="max-height: 400px; display: block; margin: auto;" />

<!--
スピーカーノート：
MCPの重要な概念として、「リソース」と「ツール」の区別があります。
(出典: talks/2025-03-27-mcp/mcp-won.md の画像)
リソースは、IDEが開いているファイルやユーザーが選択しているコード範囲など、アプリケーション側が管理し、モデルにコンテキストとして提供する情報です。
一方、ツールは、モデルが能動的に呼び出して利用できる機能、例えば「ファイルに書き込む」「APIを叩く」といった操作です。
この区別により、モデルは利用可能なコンテキストを認識しつつ、許可された操作を実行できます。
MCPは、この動的なコンテキストアクセスを中心に設計されています。
-->

---

# MCPの仕組み：LSPとの類似性 <mdi-vector-difference />

*   **Language Server Protocol (LSP)** を参考に設計 <mdi-code-braces />
*   **クライアント (IDE) ⇔ サーバー (Language Server)** の分離 💻 ↔️ <mdi-server />
*   JSON-RPCによる通信 <mdi-code-json />
*   機能の発見 (Capabilities) <mdi-format-list-checks />

<img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb3098b44-18ae-4f70-8420-055ee1bbf45f_976x696.png" alt="LSP Diagram" style="max-height: 400px; display: block; margin: auto;" />

<!--
スピーカーノート：
MCPの設計は、開発者にはお馴染みのLanguage Server Protocol (LSP) から多くの着想を得ています。
LSPがIDEと言語固有の機能（補完、定義ジャンプなど）を提供するサーバーを分離したように、MCPはAIクライアントとツールサーバーを分離します。
これにより、クライアントは特定のツール実装に依存せず、サーバー側は様々なクライアントから利用される可能性が生まれます。
通信にJSON-RPCを採用している点も共通しています。
(出典: talks/2025-03-27-mcp/mcp-won.md)
-->

---

# MCPエコシステム：クライアント 💻

*   **IDE / エディタ**: <mdi-code-tags />
    *   Cursor ✨
    *   Windsurf (Codeium)
    *   Zed
    *   Sourcegraph Cody
*   **デスクトップアプリ**: <mdi-window-maximize />
    *   Claude Desktop
    *   (近日対応: ChatGPT Desktop App! 🚀)
*   **CLI**: <mdi-console />
    *   Claude Code
    *   Cline
*   **SDK**: <mdi-package-variant-closed />
    *   AI SDK (Vercel)
    *   Mastra
    *   Python / TypeScript SDK (Anthropic公式)

<!--
スピーカーノート：
MCPをサポートするクライアントは急速に増えています。
CursorやWindsurfのようなAIネイティブなIDEはもちろん、Claudeの公式アプリやCLIツールも対応しています。
VercelのAI SDKやMastraのようなフレームワークを使えば、独自のアプリケーションにMCPクライアント機能を組み込むことも容易です。
そして、最近OpenAIがChatGPTデスクトップアプリでのMCP対応を発表したことは、エコシステムにとって非常に大きなニュースです。これにより、MCPは開発者だけでなく、一般ユーザーにも恩恵をもたらす技術へと進化する可能性が高まりました。
(出典: talks/2025-03-27-mcp/slides.md, talks/2025-03-27-mcp/aisdk.md, talks/2025-03-27-mcp/mastra-mcp.md)
-->

---

# MCPエコシステム：サーバー例 <mdi-server />

*   **公式リファレンス実装 (Anthropic)**: <mdi-check-decagram-outline />
    *   ファイルシステム操作 (ローカルファイルへの安全なアクセス)
    *   GitHub (Issue, PR操作)
    *   メモリ (会話履歴の管理)
    *   Sequential Thinking (思考プロセスの段階的実行)
    *   など19種類
*   **サードパーティ**: <mdi-account-group-outline />
    *   Mastra Docs Server (Mastraドキュメント検索)
    *   Playwright MCP (ブラウザ操作)
    *   Slack, Notion, Linear, etc. (Composio, Zapier経由)
    *   その他多数...

<!--
スピーカーノート：
サーバー側も多様なものが登場しています。
Anthropic自身が、ファイルシステム、GitHub連携、メモリ管理など、基本的ながら強力なリファレンス実装を提供しています。
(出典: talks/2025-03-27-mcp/mcp-won.md)
サードパーティからも、Mastraのドキュメント検索サーバーや、MicrosoftによるPlaywrightを使ったブラウザ操作サーバーなどがリリースされています。
(出典: talks/2025-03-27-mcp/documentation.md, talks/2025-03-27-mcp/slides.md)
さらに、後述するレジストリを通じて、何千もの既存サービスに接続できるサーバーも利用可能です。
-->

---

# MCPエコシステム：レジストリ <mdi-book-open-page-variant-outline />

*   **課題**: サーバーの発見、品質評価、設定方法の標準化 ❓
*   **解決策**: MCPサーバーを集約・管理する「レジストリ」 ✅
*   **主要なレジストリ**: <mdi-storefront-outline />
    *   **Composio**: 100+ のマネージドMCPサーバーを提供 (OAuth等認証も管理)
    *   **Smithery**: 2,900+ のMCPサーバー
    *   **Zapier MCP**: 7,000+ アプリ、30,000+ アクションに接続
    *   **OpenTools, MCP.run, PulseMCP** などもエコシステムを形成

<!--
スピーカーノート：
MCPサーバーが増えるにつれて、「どうやって目的のサーバーを見つけるか？」という発見可能性の問題が重要になります。
また、品質や設定方法の標準化も課題です。
これらの課題に対応するのが「レジストリ」です。レジストリは、MCPサーバーをカタログ化し、検索や設定を容易にするサービスです。
Composio、Smithery、Zapierなどが大規模なレジストリを提供しており、これらを利用することで、Slack、Notion、Jiraなど、普段使っている多くのSaaSツールとMCPを通じて連携できます。
(出典: talks/2025-03-27-mcp/registries.md, talks/2025-03-27-mcp/mastra-mcp.md)
現在、公式なレジストリ仕様の策定も進められています。
(出典: talks/2025-03-27-mcp/mastra-mcp.md - Official Registry Specification discussion link)
-->

---

# 最近のMCP仕様変更 (2025-03-26) <mdi-update />

*   **認証フレームワーク**: OAuth 2.1ベースの包括的な認証・認可を追加 (Remote MCPの基盤) <mdi-lock-outline />
*   **Streamable HTTP Transport**: 従来のHTTP+SSEを置き換え、より柔軟でステートレス運用も可能なトランスポートに (サーバーレス対応強化) <mdi-web />
*   **JSON-RPC Batching**: 複数リクエストをまとめて送信可能に <mdi-layers-triple-outline />
*   **Tool Annotations**: ツールの挙動（Read-only, Destructiveなど）を詳細に記述可能に <mdi-tag-text-outline />
*   **その他**: `ProgressNotification`への`message`追加、音声データ対応、補完候補(`completions`) Capability追加など <mdi-dots-horizontal />

<!--
スピーカーノート：
MCP仕様は活発に進化しています。2025年3月26日の改訂では、いくつかの重要な変更がありました。
特に、OAuthベースの認証フレームワークの追加と、新しいStreamable HTTPトランスポートの導入は、インターネット経由で安全かつ効率的にMCPサーバーに接続する「Remote MCP」の実現に向けた大きな一歩です。
(出典: talks/2025-03-27-mcp/2025-03-26.md)
Streamable HTTPにより、サーバーは完全にステートレスに実装することも可能になり、サーバーレス環境での運用が容易になります。これは実装コストを大幅に下げる可能性があります。
(出典: talks/2025-03-27-mcp/mcp-sse.md)
-->

---

# MCPロードマップ (H1 2025) <mdi-road-variant />

*   **Remote MCP Support**: 🌐🔒
    *   認証・認可 (OAuth 2.0) ← 完了 (2025-03-26)
    *   サービスディスカバリ (サーバー発見方法)
    *   ステートレス運用 ← 完了 (Streamable HTTP)
*   **リファレンス実装**: クライアント/サーバーの包括的な例 ��💻
*   **配布と発見**: パッケージ管理、インストールツール、サンドボックス、共通レジストリ 📦🔍
*   **エージェントサポート**: 階層型エージェント、インタラクティブワークフロー、ストリーミング結果 🤖🤝
*   **その他**: 他モダリティ (音声、動画)、標準化団体での検討 🎤🎬🏛️

<!--
スピーカーノート：
MCPの公式ロードマップでは、引き続きRemote MCPの実現が最優先事項とされています。認証とステートレス運用は最近の仕様改訂で大きく前進しました。今後はサービスディスカバリの標準化などが焦点となります。
(出典: talks/2025-03-27-mcp/mcp-roadmap.md)
また、より複雑なエージェントシステムを構築するための機能拡張や、サーバーの配布・発見を容易にする仕組みづくりも計画されています。
コミュニティ主導での標準開発も重視されています。
-->

---
layout: 'two-cols'
---

# 実用例①：AI SDK で MCPツールを利用 <logos-vercel-icon />

VercelのAI SDKはMCPクライアント機能をサポート。
既存のAI SDKアプリケーションに、MCPサーバーが提供するツールを簡単に追加できます。

```typescript
import { 
  experimental_createMCPClient as createMCPClient 
} from 'ai';
import { openai } from '@ai-sdk/openai';

// MCPクライアントを作成 (SSE経由で接続)
const mcpClient = await createMCPClient({
  transport: {
    type: 'sse',
    url: 'https://my-mcp-server.com/sse',
    // 必要に応じて認証情報などを追加
    // requestInit: { headers: { ... } }
  },
});

// MCPサーバーからツール一覧を取得
const mcpTools = await mcpClient.tools();

// generateText呼び出し時にMCPツールを渡す
const { text } = await generateText({
  model: openai('gpt-4o'),
  tools: { 
    ...yourExistingTools, 
    ...mcpTools // MCPツールを追加
  }, 
  prompt: 'GitHubで"AI"に関する新しいリポジトリを検索して',
});

console.log(text);
```

::right::

## メリット

*   数百の既存MCPツール (GitHub, Slack, Filesystemなど) にアクセス可能。 ✅
*   ユーザーが独自のカスタムMCPサーバーを接続してアプリを拡張可能。 ✅
*   ローカル(stdio) / リモート(SSE/Streamable HTTP) 両対応。 ✅

<!--
スピーカーノート：
具体的な使い方を見ていきましょう。
まず、Vercelが提供するAI SDKを使った例です。AI SDKは、`experimental_createMCPClient` という関数を通じてMCPクライアント機能を提供しています。
(出典: talks/2025-03-27-mcp/aisdk.md)
このように、リモートのMCPサーバー(SSEまたは新しいStreamable HTTP)やローカルのMCPサーバー(stdio)に接続し、`mcpClient.tools()`でツール定義を取得できます。
取得したツールを、普段AI SDKで使っている`generateText`や`streamText`などの関数に渡すだけで、モデルはそのMCPツールを利用できるようになります。
これにより、開発者はGitHub操作、Slack通知、ファイルアクセスといった機能を、個別に実装することなくアプリケーションに追加できます。
-->

---
layout: 'two-cols'
---

# 実用例②：Mastra で MCPツールを利用 <mdi-cogs />

エージェントフレームワーク Mastra もMCPをサポート。
`MastraMCPClient` を使ってMCPサーバーに接続し、エージェントにツールを提供できます。

```typescript
import { Agent } from "@mastra/core/agent";
import { MastraMCPClient } from "@mastra/mcp";
import { anthropic } from "@ai-sdk/anthropic";

// MCPクライアント初期化 (stdio経由でローカルサーバーに接続)
const seqThinkingClient = new MastraMCPClient({
  name: "sequential-thinking",
  server: { // npx経由でサーバーを起動
    command: "npx",
    args: ["-y", "@modelcontextprotocol/server-sequential-thinking"],
  },
});

const agent = new Agent({ /* ... Agent設定 ... */ });

try {
  await seqThinkingClient.connect(); // サーバーに接続
  const tools = await seqThinkingClient.tools(); // ツール取得

  // エージェント実行時にツールセットとして渡す
  const response = await agent.stream(prompt, {
    toolsets: {
      sequentialThinking: tools,
    },
  });

  // ... レスポンス処理 ...

} finally {
  await seqThinkingClient.disconnect(); // 切断
}
```

::right::

## Mastra + MCP の可能性 ✨

*   **レジストリ連携**: 将来的にはレジストリからサーバーを検索し、設定を自動生成・検証する仕組みを計画中。 <mdi-lightbulb-on-outline />
*   **IDEライクな体験**: 設定ファイルでサーバーIDを指定すると、利用可能な設定項目が型補完されるような開発体験を目指す。 <mdi-lightbulb-on-outline />
*   **Mastra Docs Server**: Mastra自身のドキュメントや用例を検索できるMCPサーバーを提供。IDE内でMastraに関する質問が可能に。 <mdi-lightbulb-on-outline />

<!--
スピーカーノート：
次に、エージェント開発フレームワークであるMastraでの利用例です。Mastraは`MastraMCPClient`を提供しており、AI SDKと同様にstdioやSSE(Streamable HTTP)でMCPサーバーに接続できます。
(出典: talks/2025-03-27-mcp/mastra-mcp.md)
この例では、ローカルでnpxコマンドを使ってSequential Thinkingサーバーを起動し、接続しています。取得したツールは`agent.stream`の`toolsets`オプションでエージェントに渡されます。
Mastraはさらに進んで、将来的にMCPレジストリと連携し、サーバーの検索から設定、接続までをよりシームレスに行えるようにする構想を持っています。設定ファイルを書くだけで、TypeScriptの型補完が効くような、優れた開発体験を目指しています。
また、面白い試みとして、Mastraは自身のドキュメントやブログ記事、変更履歴などを検索できるMCPサーバー (`@mastra/mcp-docs-server`) を提供しています。これをCursorなどの対応IDEに設定すると、IDE内で「Mastraで〇〇するにはどうすればいい？」といった質問をAIエージェントに投げかけるだけで、関連ドキュメントを基に回答を得られるようになります。
(出典: talks/2025-03-27-mcp/documentation.md)
-->

---

# 実用例③：開発ワークフローの自動化 <mdi-robot-industrial />

MCPは、単一のツール連携を超え、開発プロセス全体の自動化を可能にします。

1.  **要件把握**: <mdi-clipboard-text-outline />
    *   担当チケット(Jira/GitHub)をMCP経由で取得・理解 [@jira] <mdi-jira /> [@github] <mdi-github />
    *   関連デザイン(Figma)をMCP経由で取得・分析 [@figma] <logos-figma />
2.  **実装**: <mdi-code-tags />
    *   Cursorが要件に基づきコード生成 [@workspace]
    *   実装中にチケット更新や質問が必要なら、MCP経由で実行 [@jira] <mdi-jira /> [@slack] <logos-slack-icon />
3.  **レビュー・提出**: <mdi-source-pull />
    *   変更をステージングし、コミットメッセージを自動生成 [@git] <mdi-git />
    *   PR作成、Jira連携、ラベル付けなどを自動化 [@github] <mdi-github /> [@jira] <mdi-jira />
4.  **その他**: <mdi-dots-horizontal />
    *   ブラウザのコンソールログをMCP経由で取得・デバッグ [@browser] <mdi-console-line /> <mdi-bug-outline />
    *   ローカルのToDoアプリと連携 [@todo] <mdi-check-all />
    *   機能完了をSlackで関係者に自動通知 [@slack] <logos-slack-icon /> 📢

<!--
スピーカーノート：
MCPの真価は、複数のツールを組み合わせたワークフローの自動化にあります。
(出典: talks/2025-03-27-mcp/mcp-workflow.md を基に構成)
例えば、新機能開発のシナリオを考えてみましょう。
まず、AIエージェント（Cursorなど）が、MCPサーバーを通じてJiraやGitHubから担当チケットの情報を取得し、Figmaから関連デザインを取得して、開発要件を把握します。
次に、これらの情報をコンテキストとしてコードを生成します。もし実装中に仕様の疑問点が出れば、MCP経由でJiraチケットを更新したり、Slackで担当者に質問を自動送信したりできます。
実装が完了したら、Gitサーバーに接続して変更内容に基づいたコミットメッセージを生成し、GitHubサーバーに接続してPRを作成、関連チケットへのリンク付けやラベル設定まで自動で行えます。
さらに、デバッグ中にブラウザのコンソールログを取得したり、ローカルのタスク管理ツールと連携したり、開発完了をチームに通知したりと、開発者の日常的な雑務の多くをMCPサーバー連携によって自動化できる可能性があります。
これは、エンジニアがコーディングという本質的な作業により集中できる環境を実現する、パラダイムシフトと言えるでしょう。
-->

---

# 実用例④：「Project as Code」とMCP <mdi-folder-text-outline />

**Project as Code (PaC)**: システム開発プロジェクトの **全て** をコード管理・バージョン管理する考え方。

*   **なぜPaCがAI駆動開発で重要か？** 🤔
    *   AIのコード生成品質は **コンテキスト** に依存する。 <mdi-brain />
    *   要件、仕様、設計、ルールなど、プロジェクトの **全情報** がコンテキストとなる。 📄
    *   AIが理解しやすい形式 (Markdown, YAMLなど) で情報を管理する必要がある。
*   **MCPとの関係**: 🔗
    *   PaCで管理された情報をMCPサーバー経由でAIに提供。
    *   `docs/requirements.md`, `config/rules.yaml`, `architecture.md` などを [@workspace] や専用MCPサーバー [@docs] でコンテキストとして注入。 📦
    *   AIはプロジェクト固有の文脈を正確に理解し、より適切なコードを生成。 🎯

<!--
スピーカーノート：
AI駆動開発において、生成されるコードの品質を左右する最も重要な要素は、AIに与える「コンテキスト」です。
(出典: talks/2025-03-27-mcp/project-as-code.md)
ここで、「Project as Code (PaC)」という考え方が重要になります。これは、ソースコードだけでなく、要件定義、設計書、開発ルール、インフラ構成など、プロジェクトに関するあらゆる情報をコード（テキストファイル）としてバージョン管理するアプローチです。
なぜなら、AIとのコミュニケーションは主にテキストベースであり、AIが理解しやすい形でプロジェクトの全体像や制約条件を与える必要があるからです。
PaCによってMarkdownやYAMLなどで管理されたプロジェクト情報は、MCPを通じてAIエージェントに最適なコンテキストとして提供できます。
例えば、Cursorの `@workspace` 機能でプロジェクト内のドキュメントを参照させたり、特定のドキュメント群を提供する専用のMCPサーバーを用意したりすることで、AIはプロジェクト固有のルールや仕様を正確に踏まえたコード生成を行えるようになります。
PaCとMCPは、AI駆動開発の精度を高める上で非常に相性の良い組み合わせと言えます。
-->

---

# なぜMCPは成功しつつあるのか？ (Why MCP Won) 🏆

*   **AIネイティブ**: OpenAPI等既存規格に対し、AIエージェント特有の要求 (動的コンテキスト、ツール/リソース分離) を考慮。 🤖✨
*   **オープンスタンダード + ビッグバッカー**: Anthropicという信頼ある企業が推進するオープンな仕様。ロックイン懸念が少ない。 <mdi-lock-open-variant-outline /> <mdi-handshake />
*   **Anthropicのブランド力**: 開発者からの信頼が厚いClaudeを提供。ツール連携に強いモデル。 👍
*   **LSPベース**: 実績のあるLSPを参考にし、堅牢な設計。JSON-RPC採用も良い選択。 🧱
*   **ドッグフーディング**: Claude Desktop/Codeという公式クライアント、多数のサーバー、デバッグツールを自社開発・利用。 🐶 <mdi-food-drumstick-outline />
*   **段階的進化**: 最小限の仕様から始め、ロードマップを示しつつコミュニティと共に発展。 📈
*   **エコシステムの勢い**: 主要プレイヤー (OpenAI, Vercel, Microsoft等) の参加表明。 🚀

<!--
スピーカーノート：
MCPは、登場からまだ日は浅いものの、急速に支持を広げ、「デファクトスタンダード」の地位を確立しつつあります。その理由をいくつか考察してみましょう。
(出典: talks/2025-03-27-mcp/mcp-won.md の論点を整理)
まず、既存のAPI仕様(OpenAPIなど)とは異なり、AIエージェントが動的なコンテキストを扱ったり、ツールとリソースを区別したりといった、AIネイティブな要求に応える形で設計されている点が挙げられます。
次に、AnthropicというAI業界の主要プレイヤーがバックについているオープンスタンダードであること。これにより、特定のベンダーにロックインされる懸念が少なく、多くの企業が安心して採用できます。最近のOpenAIのMCP採用表明は、この流れを決定づけたと言えるでしょう。
また、開発者からの評価が高いClaudeを提供しているAnthropicのブランド力や、実績のあるLSPをベースにした堅実な設計も成功要因です。
さらに、Anthropic自身がクライアント、サーバー、ツールを開発・利用（ドッグフーディング）し、現実的なユースケースに基づいている点も信頼に繋がっています。
最小限の仕様からスタートし、明確なロードマップを示しながらコミュニティと共に進化していく戦略も、エコシステムの拡大に貢献しています。
-->

---
layout: 'center'
class: 'text-center'
---

# MCPの未来：広がる可能性 <mdi-telescope />

*   **Remote MCPの本格化**: インターネット経由での安全なツール利用が一般的に。 🌐🔒
*   **高度なエージェント連携**: 複数のAIエージェントが協調するシステムの実現。 🤖🤝🤖
*   **ツールエコシステムの成熟**: レジストリによる発見・利用の容易化、品質向上。 🌳��
*   **多様なモダリティ**: テキストだけでなく、音声や画像、動画を扱うツールの登場。 🎤🖼️🎬
*   **一般ユーザーへの普及**: ChatGPT Desktopなどの対応により、開発者以外も恩恵を享受。 🧑‍💻➡️👨‍👩‍👧‍👦

<!--
スピーカーノート：
MCPの未来は非常に明るいと言えます。
Remote MCPの標準化が進むことで、企業が提供するSaaSの機能を、ユーザーのローカルAIエージェントから安全に利用できるようになるでしょう。
複数のエージェントがMCPを通じて連携し、より複雑なタスクを分担・協調して実行する、高度なエージェントシステムの開発も進むと考えられます。
ツールレジストリが成熟し、高品質なサーバーを簡単に見つけて利用できるようになることで、開発者はより迅速にAIアプリケーションを構築できるようになります。
テキスト以外のモダリティ（音声認識、画像生成など）を扱うMCPサーバーも増えていくでしょう。
そして、ChatGPTのような一般ユーザー向けアプリケーションがMCPに対応することで、誰もが様々なツールと連携した強力なAIアシスタントを手に入れる未来が近づいています。
-->

---
layout: 'center'
class: 'text-center'
---

# まとめ：MCPで未来の開発を体験しよう <mdi-text-box-check-outline />

*   MCPはAIエージェントとツール連携の **デファクトスタンダード** へ。 ✨
*   **開かれたエコシステム** が急速に拡大中。 ✨
*   開発ワークフローの **自動化・効率化** に大きく貢献。 ✨
*   **Project as Code** と組み合わせることで、AI開発の精度向上。 ✨
*   今すぐ **試せる技術** であり、**未来への投資** でもある。 ✨

## あなたもMCPサーバーを作ってみませんか？ 💻

<!--
スピーカーノート：
本日は、Model Context Protocol (MCP) について、その概要からエコシステム、最新動向、そして未来の可能性まで駆け足でご紹介しました。
MCPは、AIエージェント開発におけるツール連携の課題を解決し、開発ワークフローを大きく変革する可能性を秘めた、今最も注目すべき技術の一つです。
オープンなエコシステムは日々拡大しており、すでに多くのクライアントやサーバーが登場しています。
皆さんもぜひ、CursorやAI SDKなどで既存のMCPサーバーを利用したり、あるいはご自身のサービスや社内ツールをMCPサーバーとして公開したりすることに挑戦してみてはいかがでしょうか。
MCPの世界に参加し、次世代のAIエージェント連携を共に創り上げていきましょう。
ご清聴ありがとうございました。
-->

---
layout: 'center'
class: 'text-center'
---

# ご清聴ありがとうございました 🙏

## Q&A <mdi-comment-question-outline />

<!--
スピーカーノート：
何かご質問はありますでしょうか？
-->
</rewritten_file>
