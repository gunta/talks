# AI駆動開発では「Project as Code」が超重要である！


# はじめに



この度、念願のQiitaを投稿してみようと思い筆を持った次第なのですが、以前から **AI駆動開発において『Project as Code』が重要** と口酸っぱく言っていますら。ただProject as Codeって検索しても出てこないという話がありました。なぜなら僕が造語したからです。

そのため本記事ではProject as Codeについて解説しようと思います！

### Project as Code（PaC）とは

PaCはインフラのコード管理の概念である「Infrastructure as Code」という用語に倣い僕が作成した言葉です。いわゆる **システム開発プロジェクトの全てをコード管理・バージョン管理していこう** という取り組み、スローガンです。

### なぜPaCが必要か？

なぜ必要なのでしょうか？シンプルに言うと **AI駆動開発においてコード生成の質を担保するのは「コンテキスト」だから** です。

「いやいや、claude-3.7-sonnetのコード生成品質が高いから安心」という声も聞こえてきそうですが、システム開発プロジェクトにおいて「正しい仕様」と「顧客もしくは指示者が正しいと言う仕様」のいずれが正義でしょうか。

答えは聞かなくてもわかりますね。

※コード品質は正しい記法だけではなく、要件・仕様通りに書けているかも指します。

つまりプロジェクトの大前提となる要件、仕様（=コンテキスト）を正しくAIに伝えることが非常に重要な世界になってきます。

### 以前から当たり前の概念ではあった

あれ？エンジニアでも同じでは？そうなんです。ただ一つ大きな違いと言えば、 **AIとのコミュニケーションは現時点でほぼテキスト** であるということです。そのためAIが理解しやすい形式でプロジェクトの全ての情報をコード管理していく必要があるのです。

# PaCの大前提の話

### コンテキストの重要性

PaCがなぜ必要か？で説明してきましたが、もう少し細かく見ていきましょう。今回はAIコードエディターであるCursorを前提で話を進めたいと思います。Cursorをお使いの皆さんであればAI生成を利用する際にコンテキストを追加しますよね（下図参考）

[![image.png](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2F25066d47-42c1-470c-82e1-ea47c1810cfa.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=3e7a63dbb13ac9b83d909d85215c028a)](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2F25066d47-42c1-470c-82e1-ea47c1810cfa.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=3e7a63dbb13ac9b83d909d85215c028a)

Cursorは非常にコンテキスト機能が優れているので、どの情報をインプットに生成するかを @シンボルでファイルやフォルダ、コード、ドキュメントなど複数から選択することが可能となります。

[![image.png](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2F8332dece-d33f-47ea-a48c-2a1e06582d2d.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=1e3956320b9794ce66d71c116611d150)](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2F8332dece-d33f-47ea-a48c-2a1e06582d2d.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=1e3956320b9794ce66d71c116611d150)

さて具体的な使い方や方法論はCursorに関する記事をぜひ参照してください。

何が重要かというと、 **このコンテキストに「何を与えるか？」によってアウトプットに違いが生じる** という点です。実はChatGPTのプロンプトでも何を元に判断させるか、という点で何ら違いはありません。

### 優れたコンテキストとは？

では生成精度を上げる優れたコンテキストとは何かを考えてみます。コードに近い箇所から考えてみましょう。開発ルール、コード規約、フォルダ構成、ファイル構成、フレームワーク・アーキテクチャの原則など開発にまつわる様々な情報もコンテキストです。Cursorで言うと、Cursor Rulesに書かれるような内容ですね。非常に重要です。

ではこちらを正しく整備すればプロジェクトで構築するシステムは完成するのでしょうか。残念ながらコードの品質は高まるでしょうが、要件を満たすという意味での品質は担保されないままです。

繰り返しになってしまいますが、 **要件・仕様と言ったコンテキストがないと正しいゴールに導くことが出来ません**。つまりプロジェクトの情報を網羅的かつ正しい粒度で管理していく必要があるのです。

# PaCの思考方法

では早速PaCをどう実践に移すかを見ていきましょう。

前提として下記の3層に分けて考えることを推奨しています。

- **layer3（第3層）：思考・アイデア（Concept）**
- **layer2（第2層）：ドキュメント・成果物（Facade）**
- **layer1（第1層）：実体ファイル（Definition）**

第2層であるドキュメントに関しては人間が見て理解するためのものですので、本質的にはlayer3とlayer1のコミュニケーションが上手くいけば問題ありません。

※コミュニケーションは口頭だけではなく情報連携という意味も指す

図として整理したものが下記です。

[![image.png](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2Fa6901560-3c6d-4195-b832-016e2a4acfaa.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=46d6cac7299ae8f4f05f4faaa72bb0d1)](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2Fa6901560-3c6d-4195-b832-016e2a4acfaa.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=46d6cac7299ae8f4f05f4faaa72bb0d1)

基本的には上記の層を意識してプロジェクトに必要な情報は漏れなくコード管理していくとこを推奨します。それこそがPaCなのです。

# PaCのコミュニケーションの流れ

上記の3層を意識してプロジェクトの情報を格納していきます。実際の各レイヤーの流れを整理してみましょう。

### layer3→layer1

最初の難関にはなるのですが、思考を文書にしていくのが一番大変だったりするので僕は思考フレームワークやヒアリングシートを多用して管理しています。（また別記事で紹介するのでまずは思考を落とし込むイメージで大丈夫です）

[![image.png](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2Fca4ec5ee-3c36-4e91-a44f-562ef083b7b1.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=656f312d0f61ed6b45403a96435ab630)](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2Fca4ec5ee-3c36-4e91-a44f-562ef083b7b1.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=656f312d0f61ed6b45403a96435ab630)

### layer1

markdownやYAMLなどCursorで扱いやすい形で管理していきます。ここからGitHubを使うと楽です。

[![image.png](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2F9e528a67-3b2a-428a-b338-884356b926bc.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=2968c24d8896bc6dd40b2a590adfdcc2)](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2F9e528a67-3b2a-428a-b338-884356b926bc.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=2968c24d8896bc6dd40b2a590adfdcc2)

### layer1→layer2

本質的には不要なのですが人間の目で見て理解することが必要なケースがまだ多いので成果物を逆引きします。究極のAI駆動開発では見たいときにリアルタイム生成が理想ですね。

[![image.png](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2F756002ff-c809-4351-a7b8-616bc891cd63.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=b4ceb0aea42f97dd0e398dfbaded7e1f)](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2F756002ff-c809-4351-a7b8-616bc891cd63.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=b4ceb0aea42f97dd0e398dfbaded7e1f)

### layer2→layer3

さて実際の思考と合っているか合意形成をしていきましょう。あとは繰り返しです。

[![image.png](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2F23148bed-88e2-408a-aac1-f9455c3fca4e.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=201a03f1283966d3a879f0d9375d7513)](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2F23148bed-88e2-408a-aac1-f9455c3fca4e.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=201a03f1283966d3a879f0d9375d7513)

### 実際のコンテキストになるまで

恐らく多くの場合は **layer1の情報量が多すぎる、もしくは雑多すぎるので一度整理が必要になる** と思います。下記の図のように人間が理解する形式でなくても大丈夫ですが、画面設計、DB設計、API定義といった形式で「layer1+α」のような中間コンテキストを生成する（これもAIで生成）のがポイントです。

[![image.png](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2Fe6ce884a-6c67-48a4-b957-f7ff55f25190.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=83e45de29a586d426c88eeab6df5ae14)](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2Fe6ce884a-6c67-48a4-b957-f7ff55f25190.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=83e45de29a586d426c88eeab6df5ae14)

### コンテキストの使い分け

そのあとの利用方法は簡単に例を示すと下記のようなイメージです。基本的には **生成したいコードによってコンテキストを使い分ける** ことです。実際にプロジェクトで必要なコンテキストは何かをぜひ考えてみてください。

[![image.png](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2F7100bfe2-e212-4e86-88e1-00948e0e0ea7.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=47a1642dab49216318c571777554d31b)](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F4038495%2F7100bfe2-e212-4e86-88e1-00948e0e0ea7.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=47a1642dab49216318c571777554d31b)

# 重要な「人」の介在と未来

再度下記のレイヤーを見てみますがポイントは「人」をあえて書いていないことです。

もちろん途中の矢印では人は暗黙的に登場するのですが、ポイントは各層を分離したうえですべての情報を人の記憶領域ではなく、GitHubなどでコード管理することです。

- **layer3（第3層）：思考・アイデア（Concept）**
- **layer2（第2層）：ドキュメント・成果物（Facade）**
- **layer1（第1層）：実体ファイル（Definition）**

またもうひとつ重要な点として残念ながら **layer3は記録が難しい** という点があります。

僕はエンジニアの今後の生き残りのためには「業務ドメイン知識」が重要であることを様々な場で伝えているのですが、PaCの流れを見て貰えば、それがどの層に該当するかわかると思います。だからこそ頭の中にある経験則や知識もまだまだ重要だと思っているのです。（少し脱線でした）

# 実際の現場での浸透はどうするか

さて最後に非常に重要な点を投げかけましょう。

現場浸透にあたり、PaCを本気でやるには **プロジェクト事ではなく会社事** になる可能性が高いです。なぜなら既に走っているプロジェクトの情報をコード化するのは骨が折れるからです。サイロ化とはよく言ったものです。まさにPaCの前には **Before AIのサイロ** と **After AIのコード** が横たわっています。

個人的にはまずは新しいプロジェクトからPaCを進めていき効果のほどを実感していくことが重要です。（というのもこの流れをある程度は自動化する必要もあるからです。そのため最初が肝心です）
