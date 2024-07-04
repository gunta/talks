---
theme: default
colorSchema: dark
transition: fade-out
mdc: true
class: text-center
highlighter: shiki
title: TSからEffectへ
drawings:
  persist: false
author: Günther Brunner
download: true
twoslash: true
monaco: true
---


---
layout: default
---
 #

<AutoFitText :max="200" :min="100" modelValue="From TS to Effect"/>


---
layout: default
---

# 素のTypeScriptでgzipファイルを展開する

gzipファイルの内容を展開するために使用される単一の関数を見てみましょう：

```ts {1,2|all}
import * as fs from "fs"
import gunzip from "gunzip-file"
 
export async function extractGzip(
  logger: Logging.Logger,
  gzipFilename: string,
  extractedFilename: string,
  useCachedFile: boolean
): Promise<void> {
  if (useCachedFile && fs.existsSync(extractedFilename)) {
    await logger.writeLn(`using cached file "${extractedFilename}"`)
    return
  }
 
  await logger.writeLn(`extracting ${gzipFilename}...`)
 
  await new Promise<void>((resolve, _) => {
    gunzip(gzipFilename, extractedFilename, () => resolve())
  })
}
```

<v-click>

> この関数は単純ですが、実装にはいくつかのエラーが隠れています。
</v-click>]

---
layout: default
---

# 同じものを素朴なGoで書いた場合

```go {maxHeight:'100px'} 
import (
	"fmt"
	"os"
	"compress/gzip"
	"io"
)

func ExtractGzip(logger Logger, gzipFilename, extractedFilename string, useCachedFile bool) {
	if useCachedFile {
		if _, err := os.Stat(extractedFilename); err == nil {
			logger.WriteLn(fmt.Sprintf("using cached file \"%s\"", extractedFilename))
			return
		}
	}

	logger.WriteLn(fmt.Sprintf("extracting %s...", gzipFilename))
	gzipFile, _ := os.Open(gzipFilename)
	defer gzipFile.Close()
	gzipReader, _ := gzip.NewReader(gzipFile)
	defer gzipReader.Close()
	extractedFile, _ := os.Create(extractedFilename)
	defer extractedFile.Close()

	io.Copy(extractedFile, gzipReader)
}
```

---
layout: default
---

# "ハッピーパス"TypeScriptの問題点

最初の問題はエラー処理。

`fs.existsSync`と`gunzip`の両方が失敗する可能性があります。


<v-click>
例えば：
</v-click>

<v-clicks>

- 破損したgzipファイル

- ファイルシステムにアクセスできない

- 権限不足

</v-clicks>

<br />

<v-click>

> この実装ではエラー処理を行っていません。また、戻り値の型`Promise<void>`は何が間違う可能性があるかを理解するのに役立ちません。


</v-click>


---
layout: default
---

# 2つ目の問題：依存関係とテスト

依存関係が暗黙的であるため、注入が不可能でテストが困難です。


- `fs`
- `gunzip`

> 暗黙的な依存関係は**テストのためにモック化できません**。

> また、特定のライブラリへのコードの強い結合を作り出し、**リファクタリングを困難にします**。

`Logging.Logger`はパラメータとして注入されますが、関数を呼び出すたびに提供する必要があります（不便です）。


---

# 依存関係

```ts {1|2|5|all}
import * as fs from "fs"
import gunzip from "gunzip-file"
 
export async function extractGzip(
  logger: Logging.Logger, 
  gzipFilename: string,
  extractedFilename: string,
  useCachedFile: boolean
): Promise<void> {
  if (useCachedFile && fs.existsSync(extractedFilename)) {
    await logger.writeLn(`using cached file "${extractedFilename}"`)
    return
  }
 
  await logger.writeLn(`extracting ${gzipFilename}...`)
 
  await new Promise<void>((resolve, _) => {
    gunzip(gzipFilename, extractedFilename, () => resolve())
  })
}
```


---
layout: default
---

# Effectを使用した同じ実装
`Effect`を使用した同じ実装を見てみましょう。**Effectが上記の問題をすべてどのように解決するか**を確認：


- すべての依存関係が明示的です（`Context` + `Layer`）
- Effectは戻り値の型に直接**可能なエラーを自動的に追跡します**
- Effectはすぐに使えるロギング機能を提供し、それをカスタマイズすることができます（`Logger`と`Layer`を使用）

---

```typescript
import * as Fs from "@effect/platform/FileSystem"
import * as Gzip from "./Gzip.js"
 
const extractGzip = ({
  extractedFilename,
  gzipFilename,
  useCachedFile,
}: {
  readonly gzipFilename: string
  readonly extractedFilename: string
  readonly useCachedFile: boolean
}): Effect.Effect<
      void, // 👈 Return type
      PlatformError | GzipError, // 👈 Errors
      Fs.FileSystem | Gzip.Gzip // 👈 Dependencies
    > =>
  Effect.gen(function* () {
    const fs = yield* Fs.FileSystem
    const gzip = yield* Gzip.Gzip
 
    const existsExtractedFilename = yield* fs.exists(extractedFilename)
    if (useCachedFile && existsExtractedFilename) {
      return yield* Effect.logDebug(`using cached file "${extractedFilename}"`)
    }
 
    yield* Effect.logDebug(`extracting ${gzipFilename}...`)
    yield* gzip({ gzipFilename, extractedFilename })
  })
```

---
layout: default
---

# FileSystemモジュール

Effectエコシステムは、一般的なユースケース（`Http`、`FileSystem`、`Stream`など）を実装するためのパッケージをいくつか提供しています。

この場合、`@effect/platform`の`FileSystem`モジュールを使用します。

`FileSystem`は`fs`のEffectラッパーで、すべてのエラーを処理します：

> `fs.exists`は`Effect.Effect<boolean, PlatformError>`を返します。ここで`PlatformError`はファイルの存在確認時のエラーを表します

---

```typescript
import * as Fs from "@effect/platform/FileSystem"
import * as Gzip from "./Gzip.js"
 
const extractGzip = ({
  extractedFilename,
  gzipFilename,
  useCachedFile,
}: {
  readonly gzipFilename: string
  readonly extractedFilename: string
  readonly useCachedFile: boolean
}) =>
  Effect.gen(function* (_) {
    const fs = yield* Fs.FileSystem
    const gzip = yield* Gzip.Gzip
 
    const existsExtractedFilename = yield* fs.exists(extractedFilename)
    if (useCachedFile && existsExtractedFilename) {
      return yield* Effect.logDebug(`using cached file "${extractedFilename}"`)
    }
 
    yield* Effect.logDebug(`extracting ${gzipFilename}...`)
 
    yield* gzip({ gzipFilename, extractedFilename })
  })
```

---
layout: default
---

# `Gzip` モジュール

Effectエコシステムに既存のモジュールがない場合でも、簡単に独自のモジュールを実装することができます。

この例では、`Gzip`モジュールを実装します。

---

```typescript
import * as Fs from "@effect/platform/FileSystem"
import * as Gzip from "./Gzip.js"
 
const extractGzip = ({
  extractedFilename,
  gzipFilename,
  useCachedFile,
}: {
  readonly gzipFilename: string
  readonly extractedFilename: string
  readonly useCachedFile: boolean
}) =>
  Effect.gen(function* (_) {
    const fs = yield* Fs.FileSystem
    const gzip = yield* Gzip.Gzip
 
    const existsExtractedFilename = yield* fs.exists(extractedFilename);
    if (useCachedFile && existsExtractedFilename) {
      return yield* Effect.logDebug(`using cached file "${extractedFilename}"`)
    }
 
    yield* Effect.logDebug(`extracting ${gzipFilename}...`)
 
    yield* gzip({ gzipFilename, extractedFilename })
  })
```
---

新しい `Gzip.ts` ファイル内で、エラー処理のために Effect を使用して `gunzip` をラップする `make` 関数を作成します：

- `Effect.asyncEffect` を使用して、コールバック関数を返す非同期コード（`gunzip`）をラップします
- `Effect.tryPromise` を使用して、`gunzip` 実行時のエラーをキャッチします
- `gunzip` コールバックが正常に戻ったときに `resume` を呼び出します

そして、`Context.Tag` を使用してモジュールとして実装をエクスポートします。

---

# `Gzip.ts`

```typescript
import gunzip from "gunzip-file"
 
class GzipError extends Data.TaggedError("GzipError")<{
  error: unknown
}> {}
 
const make = ({
  extractedFilename,
  gzipFilename,
}: {
  gzipFilename: string
  extractedFilename: string
}): Effect.Effect<any, GzipError, never> =>
  Effect.asyncEffect((resume) =>
    Effect.tryPromise({
      try: () =>
        gunzip(gzipFilename, extractedFilename, () =>
          resume(Effect.succeed(null))
        ),
      catch: (error) => new GzipError({ error }),
    })
  );
 
export class Gzip extends Context.Tag("Gzip")<Gzip, typeof make>() {}
```
---
layout: default
---

# Loggerモジュール

Effectは、`logDebug`のようなメソッドを使用して、ログ機能を標準で提供しています。

後で、`Logger`の実装をカスタマイズし、ログレベル（`Error`、`Debug`、`Info`など）を指定することができます。

---

```typescript
import * as Fs from "@effect/platform/FileSystem"
import * as Gzip from "./Gzip.js"
 
const extractGzip = ({
  extractedFilename,
  gzipFilename,
  useCachedFile,
}: {
  readonly gzipFilename: string
  readonly extractedFilename: string
  readonly useCachedFile: boolean
}) =>
  Effect.gen(function* (_) {
    const fs = yield* Fs.FileSystem
    const gzip = yield* Gzip.Gzip
 
    const existsExtractedFilename = yield* fs.exists(extractedFilename)
    if (useCachedFile && existsExtractedFilename) {
      return yield* Effect.logDebug(`using cached file "${extractedFilename}"`)
    }
 
    yield* Effect.logDebug(`extracting ${gzipFilename}...`)
 
    yield* gzip({ gzipFilename, extractedFilename })
  })
```

---
layout: default
---

# エラー処理

すべてのエラーはEffectによって自動的に追跡されます。

- `fs.exists`は`PlatformError`（`BadArgument`または`SystemError`）を返す可能性があります
- `gzip`は`GzipError`を返す可能性があります

---

```typescript
import * as Fs from "@effect/platform/FileSystem"
import * as Gzip from "./Gzip.js"
 
const extractGzip = ({
  extractedFilename,
  gzipFilename,
  useCachedFile,
}: {
  readonly gzipFilename: string
  readonly extractedFilename: string
  readonly useCachedFile: boolean
}) =>
  Effect.gen(function* (_) {
    const fs = yield* Fs.FileSystem
    const gzip = yield* Gzip.Gzip
 
    const existsExtractedFilename = yield* fs.exists(extractedFilename);
    if (useCachedFile && existsExtractedFilename) {
      return yield* Effect.logDebug(`using cached file "${extractedFilename}"`)
    }
 
    yield* Effect.logDebug(`extracting ${gzipFilename}...`)
 
    yield* gzip({ gzipFilename, extractedFilename })
  })
```

---

`Effect.catchTags`を使用して、すべてのエラーをキャッチして処理することができます。

---

```ts {monaco}
const extractGzip = ({
  extractedFilename,
  gzipFilename,
  useCachedFile,
}: {
  readonly gzipFilename: string
  readonly extractedFilename: string
  readonly useCachedFile: boolean
}) =>
  Effect.gen(function* () {
    const fs = yield* Fs.FileSystem
    const gzip = yield* Gzip.Gzip
 
    const existsExtractedFilename = yield* fs.exists(extractedFilename)
    if (useCachedFile && existsExtractedFilename) {
      return yield* Effect.logDebug(`using cached file "${extractedFilename}"`)
    }
 
    yield* Effect.logDebug(`extracting ${gzipFilename}...`)
 
    yield* gzip({ gzipFilename, extractedFilename })
  }).pipe(
    Effect.catchTags({
      BadArgument: (error) => Console.log(error),
      SystemError: (error) => Console.log(error),
      GzipError: (error) => Console.log(error),
    }),
    Effect.provide(Layer.mergeAll(Gzip.Gzip.Live, NodeFs.layer))
  )
```

---
layout: default
---

# `Layer`: **依存性注入**

これまで、依存関係の具体的な実装を提供していませんでした。

まず、`Gzip`内に`Live`という`Layer`を定義します。この`Layer`は、以前に定義した`make`実装をエクスポートします：

`Gzip.ts`
```typescript
export class Gzip extends Context.Tag("Gzip")<Gzip, typeof make>() {
  static Live = Layer.succeed(this, make)
}
```

`FileSystem`の代わりに、Effectで`fs`の完全な実装を提供する`NodeFileSystem`モジュールを使用します。

これら2つのレイヤーをマージし、`Effect.provide`（依存性注入）を使用して関数に提供します。

---

```ts 
import * as NodeFs from "@effect/platform-node/NodeFileSystem"
import * as Fs from "@effect/platform/FileSystem"
 
import * as Gzip from "./Gzip.js"
 
const extractGzip = ({
  extractedFilename,
  gzipFilename,
  useCachedFile,
}: {
  readonly gzipFilename: string
  readonly extractedFilename: string
  readonly useCachedFile: boolean
}) =>
  ...
```

---

```ts 
  Effect.gen(function* (_) {
    const fs = yield* Fs.FileSystem
    const gzip = yield* Gzip.Gzip
 
    const existsExtractedFilename = yield* fs.exists(extractedFilename)
    if (useCachedFile && existsExtractedFilename) {
      return yield* Effect.logDebug(`using cached file "${extractedFilename}"`)
    }
 
    yield* Effect.logDebug(`extracting ${gzipFilename}...`)
 
    yield* gzip({ gzipFilename, extractedFilename })
  }).pipe(
    Effect.catchTags({
      BadArgument: (error) => Console.log(error),
      GzipError: (error) => Console.log(error),
      SystemError: (error) => Console.log(error),
    }),
    Effect.provide(
      Layer.mergeAll(
        Gzip.Gzip.Live,
        NodeFs.layer
      )
    )
```

---
layout: default
---

# **Effectの実行**

関数の最後で、`Effect.runPromise`を使用して関数を実行します。

これにより、すべてが実行され、元の関数と同様に`Promise<void>`が返されます。

---

```typescript
const extractGzip = ({
  extractedFilename,
  gzipFilename,
  useCachedFile,
}: {
  readonly gzipFilename: string
  readonly extractedFilename: string
  readonly useCachedFile: boolean
}) =>
  Effect.gen(function* (_) {
    const fs = yield* Fs.FileSystem
    const gzip = yield* Gzip.Gzip
    const existsExtractedFilename = yield* fs.exists(extractedFilename)
    if (useCachedFile && existsExtractedFilename) {
      return yield* Effect.logDebug(`using cached file "${extractedFilename}"`)
    }
    yield* Effect.logDebug(`extracting ${gzipFilename}...`)
    yield* gzip({ gzipFilename, extractedFilename })
  }).pipe(
    Effect.catchTags({
      BadArgument: (error) => Console.log(error),
      GzipError: (error) => Console.log(error),
      SystemError: (error) => Console.log(error),
    }),
    Effect.provide(Layer.mergeAll(Gzip.Gzip.Live, NodeFs.layer)),
    Effect.runPromise
  )
```

---
layout: default
---

# これで完了です！

さあ、**自分のTypescriptコードをEffectで書き直す練習**を始めましょう。

プロジェクトが成長するにつれて、速度、信頼性、開発者体験などの明確な改善に気づくでしょう 🚀
