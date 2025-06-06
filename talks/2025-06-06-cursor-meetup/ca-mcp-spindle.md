みなさんこんにちは。Amebaデザインシステム「Spindle」テックリードの原 ( [@herablog](https://x.com/herablog) )と AI 活用に詳しい Spindler の柳 ( [@pagu0602](https://x.com/pagu0602) ) です。

本記事では2025年5月30日に開催された Spindle SUMMIT 2025 での発表をもとに、AIを活用してデザインシステム開発を劇的に加速させる「Spindle MCP Server」について、その詳細と成果をご紹介します。

さらに、この記事では2025年6月4日に発表された [Figma 公式の Dev Mode MCP Server との連携](https://developers.cyberagent.co.jp/blog/archives/56844/#figma) についても触れています。

NOTE: 本記事にはPodcast風のまとめもあります (NotebookLM で作成)

* * *

目次

- [Spindle MCP Server とは](https://developers.cyberagent.co.jp/blog/archives/56844/#about)
- [Spindle MCP Server の仕組みと実装](https://developers.cyberagent.co.jp/blog/archives/56844/#implementation)
- [Spindle MCP Server の3つの特長：安全・高速・協調的](https://developers.cyberagent.co.jp/blog/archives/56844/#features)
- [Spindle MCP Server によるデザインシステム開発の変化と効果](https://developers.cyberagent.co.jp/blog/archives/56844/#impact)
- [Figma Dev Mode MCP Server との連携による劇的な精度向上](https://developers.cyberagent.co.jp/blog/archives/56844/#figma)
- [Spindle MCP Server 開発で得た知見](https://developers.cyberagent.co.jp/blog/archives/56844/#learnings)

## Spindle MCP Server とは

MCP は「Model Context Protocol」の略で、AI ツールと外部のデータソースやツールを統一的に接続するためのオープンプロトコルです。Spindle MCP Server は Amebaデザインシステム「Spindle」に特化し、必要な時にあらかじめ整形されたデータをコンテキストに追加する形で活用されています。

## Spindle MCP Server の仕組みと実装

Spindle MCP Server は、AI ツールと [@openameba/spindle](https://github.com/openameba/spindle) ( Spindle のデザインシステムのリポジトリ) との間で Model Context Protocol を通じてデータをやり取りします。

2025年6月時点で提供される主な機能は以下の通りです:

- `get_components`: コンポーネントの一覧を取得
- `get_component_info`: コンポーネントの詳細情報を取得
- `get_design_tokens`: デザイントークンの一覧を取得
- `get_design_token`: 特定のデザイントークンを取得
- `get_icons`: アイコンの一覧を取得
- `get_icon_info`: 特定のアイコン情報を取得
- `get_accessibility_docs`: アクセシビリティ関連ドキュメントを取得
- `get_component_design_doc_template`: コンポーネントの Design Doc テンプレートを取得

コンポーネントやデザイントークンの情報だけでなく、 **アクセシビリティ関連のドキュメント (主にアクセシビリティチェックリスト) や Design Doc テンプレートが含まれていることが特に Spindle らしい** と思います。

実装では、 [@modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) を利用し、@openameba/spindle 内のファイルをローカル環境で読み込んで返却する形をとっています。ドキュメントは MCP 用に整形され、現在は JSON 形式の文字列として返されます。これらはより適した形式に変更される可能性があります。

Spindle MCP Server はローカル環境で Node.js を使って利用します。 例えば、 `get_component_info` は、コンポーネントの実装ファイル ( .tsx )、スタイル ( .css )、そしてドキュメント ( .stories.mdx ) を読み込み、そのまま返すシンプルな構造になっています 。

```hljs javascript javascript
`{
  “implementation”: {
    “name”: “Button.tsx”,
    “content”: readFileSync(‘./Button.tsx’),
  },
  “styles”: {
    “name”: “Button.css”,
    “content”: readFileSync(‘./Button.css’),
  },
  “documentation”: {
    “name”: “Button.stories.mdx”,
    “content”: readFileSync(‘./Button.stories.mdx’),
  }, ...
}`
```

※ 説明のために省略したサンプルのため実際の実装とは異なります

## Spindle MCP Server の3つの特長：安全・高速・協調的

Spindle MCP Server は以下の3つの点が特徴です。

- **安全 ( Safe )**: 自社開発でOSS (オープンソースソフトウェア) として公開されているためソースコードに透明性があり、セキュリティ面での懸念が比較的少ないです
- **高速 ( Fast )**: ローカルファイルを読み込む仕組みのため、ネットワーク接続を必要とせず、迅速な処理が可能です。
- **協調的 ( Collaborative )**: Storybook や README などの既存のファイルを読み込むだけで利用できるため、 **特別な作業をしなくても普段の活動がそのまま MCP として利用でき、誰もが MCP 開発に貢献できます**。

## Spindle MCP Server によるデザインシステム開発の変化と効果

Spindle MCP Server を導入することで、デザインシステム開発の様々なフェーズで速度向上が期待されています。既存の Spindle 開発フロー (提案、デザイン、ドキュメント作成、開発、公開) において、以下のような体感値での速度向上が見込まれています。

- デザインフェーズ: 約1.5倍速
- ドキュメント作成フェーズ: 約5倍速
- 開発フェーズ: 約3倍速

![Spindleの開発プロセスを「Suggest」「Design」「Document」「Develop」「Publish」の5段階に分けて紹介する図。各ステップにはそれぞれ対応するキャラクターイラストと役割説明があり、速度改善効果として「1.5x Faster」「5x Faster」「3x Faster」と記載されている。](https://developers.cyberagent.co.jp/blog/wp-content/uploads/2025/06/spindle-with-ai-1024x576.webp)

この成果は、Spindle MCP Server の各機能を用いた既存コンポーネント情報の取得、デザイントークン命名支援、Design Doc の自動生成といったプロセスによって実現しています。特に、ドキュメンテーションにおいては、苦手な人でも迅速に精度の高い草案が生成される点が大きなメリットです。

以下は Spindle MCP Server を作成した後に実際に使ってみた事例です。

### 既存コードの Spindle コンポーネントへの書き換え

すでに実装された Web ページを Spindle のコンポーネントに自動的に置き換えます。AI がボタンやテキストエリアなどの要素を認識し、Spindle MCP Server に問い合わせ、コンポーネントを適切に置き換えることができます。置き換えの範囲を小さく指定すればするほど精度が上がる傾向にありました。

### デザイントークンの命名提案

Rating コンポーネント用に新しいオレンジ色のデザイントークンを追加する際に、過去の例を参考に命名を提案してもらいました。その結果「Rating Orange 100」のような一貫性のある名前をつけられました。

### 新規コンポーネントの Design Doc 作成

新しく「Rating」コンポーネントの Design Doc を作成する際、スクリーンショットをもとに、LLM がデザイントークンの一覧やアクセシビリティチェックリスト、実装例のほとんどを自動生成しました。ここでは Spindle 固有の情報だけでなく、 LLM が持つ一般的な実装の情報が役に立ちました。結果的に記載漏れが少なくなり、ドキュメント作成の速度が大幅に向上しました。

## Figma Dev Mode MCP との連携による劇的な精度向上

さらに、 [Figma Dev Mode MCP Server](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server) ( [2025 年 6 月時点ではオープンベータ版として公開されています](https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/)) との連携により **開発速度が劇的に向上する可能性** があります。

![「Figma Dev Mode MCP Serverとの連携フロー」を説明する図。左から順に、FigmaのデザインファイルがFigma Dev Mode MCP Serverを経由して、ReactとTailwind CSSベースのソースコードに変換される様子を示す。次に、Spindle MCP Serverを通じて最終的にSpindle UIへ置き換えられる流れ。](https://developers.cyberagent.co.jp/blog/wp-content/uploads/2025/06/figma-mcp-1024x576.webp)

従来の Figma API を利用した MCP やスクリーンショットからの実装生成では安定して精度を出すことが難しいという課題がありました。例えば、順序、余白やリンク、ボタンサイズなどが不正確で、リリースできるレベルに仕上げるには注意して確認しなければなりませんでした。

**Figma で提供されている「Dev Mode MCP Server」を使うと、安定して精度の高いコード出力を得られました**。この MCP サーバーは、Figma のデザインデータをソースコードとして出力してくれるため、デザインファイルの内容をより正確に再現した実装になっています。私たちの検証では、MCP ツールの `get_code_for_node_or_selection` を使って、React と Tailwind CSS の形式でコードを生成するようにしました。

さらにそれを Spindle MCP Server を使い、Spindle 実装に置き換えることでリリースできるレベルの高い精度が得られるということがわかりました。 [上記のデモ](https://developers.cyberagent.co.jp/blog/archives/56844/#replacement) でも触れたように、ソースコードからSpindle UIへの置き換えは精度の一貫性があります。なお、このフローを最大限活用するためには Figma ファイルの作り方もより重要になってくると考えられます。

![Figma Dev Mode MCP ServerとSpindle MCP Serverを使って、FigmaデザインからSpindle UIのReactフォームコンポーネントを生成している様子を示すエディタ画面](https://developers.cyberagent.co.jp/blog/wp-content/uploads/2025/06/figma-mcp-contact-form-1024x613.webp)Figma Dev Mode MCP ServerとSpindle MCP Serverを使用して、「https://www.figma.com/design/…」というFigmaノードのリンクをもとに必要なデザイントークンとSpindle UIコンポーネントの情報を取得し、自動的にReact（TypeScript）コードとしてContactForm.tsxを生成しています。右ペインには、Figmaノードの指定後にMCPツールが順次get\_design\_tokensやget\_component\_infoを呼び出しているログが表示されており、左ペインにはSpindle UIのTextFieldやDropDownなどを活用したフォームUIの実装コードが反映されています。

実際の開発では、Figma デザインの URL を AI ツールに貼り付け、「 **この Figma デザインを Spindle を利用して実装してください**」と指示するだけで利用できます。その結果、手動で実装した場合に27分かかっていた作業が、 **わずか2分半で完了** しました。この結果から、 [Spindle 単体での開発速度向上が3倍](https://x.com/AmebaSpindle/status/1797820117130281365)、そして **AI を活用することで10倍といった大幅なスピードアップが実現する可能性がある** と試算しています。

※ Figma ファイルを初見で見て仕様を把握し、プルリクエストを作成できるレベルの実装ができるまでの時間を計測しています

## Spindle MCP Server 開発で得た知見

Spindle MCP Server の実装を通じて、いくつかの学びがありました。

### 法則性のない構造はつまずきポイント

[Form](https://github.com/openameba/spindle/tree/%40openameba/spindle-ui%402.3.0/packages/spindle-ui/src/Form) のように他のコンポーネントと異なる階層構造を持つものや、 [CSS のまとまり方が一貫しない箇所](https://github.com/openameba/spindle/tree/%40openameba/spindle-ui%402.3.0/packages/spindle-ui/src/Breadcrumb) は、LLM が予測しにくく、間違ってしまう傾向がありました。この課題に対応するために、MCP サーバーで特殊処理をしたり、ドキュメントにサンプルコードを追加したりしました。

### 浮かび上がる“共有されにくい知識”

開発者が暗黙知や経験則にもとづいて判断している実装箇所は、LLM にとって理解が難しく、誤った出力につながることがありました。特に、過去の経緯から複数の成果物が並行して運用されているようなケースでは、その背景を正確に伝えられず意図しない結果になることもありました。こうした課題には、暗黙知を明文化したドキュメントや指示を追加することで対応しました。 **もともと口頭や補足的に共有されていた情報が、MCP サーバーの開発を通じて可視化されたことは、思わぬ副次的メリット** でもありました。

### ドキュメントが精度を支える

既存のドキュメント、特に Storybook で提供されているサンプルコードが非常に有用でした。AI がコードを生成する際に、サンプルコードがそのまま役立つためです。また、実装だけでなく関連するドキュメントも一緒に返すことで、精度が向上することがありました。これらにより、LLM はより正確なコンテキストを理解し、Amebaデザインシステム「Spindle」に則した出力を生成できるようになりました。

## まとめ

以上、Spindle SUMMIT 2025 で発表した「Spindle MCP」の取り組みをご紹介しました。AI とデザインシステムの連携は、単なる自動化を超えて、私たちの開発体験そのものを変えつつあります。Spindle MCP Server のような仕組みを通じて、誰もがデザインシステムに貢献できる環境が整い、よりはやく、より高い品質でプロダクトを届けられるようになると思います。今後も Spindle は、AI を活用しながら拡張を続けていきます。

[CodeAgentとMCPで実現するデータ分析エージェント / CA DATA NIGHT #6 〜活用から実務へ──生成AI・LLMの“業務の入り口”を探る〜\\
\\
次の記事](https://developers.cyberagent.co.jp/blog/archives/56841/)

Twitter Widget Iframe