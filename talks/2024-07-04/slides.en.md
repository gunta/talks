---
theme: default
colorSchema: dark
transition: fade-out
mdc: true
class: text-center
highlighter: shiki
title: From TS and Go to Effect
drawings:
  persist: false
author: Günther Brunner
download: true
twoslash: true
monaco: true
---

Hi

---
layout: default
---
 #

<AutoFitText :max="200" :min="100" modelValue="From TS/Go to Effect"/>


---
layout: default
---

# Extract gzip file in plain typescript

Let's look at a single function used to extract the content of a gzip file:

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

> The function is simple, but the implementation hides some errors.
</v-click>]

---
layout: default
---

# If the same was written in naive Go

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

# Problems with "The happy path" TypeScript

The first issue is error handling.

Both `fs.existsSync` and `gunzip` can fail. 

<v-click>
For example:
</v-click>

<v-clicks>

- Corrupted gzip file

- Impossible to access file system

- Missing permissions

</v-clicks>

<br />

<v-click>

> The implementation doesn't perform any error handling. And the return type `Promise<void>` does not help to understand what can go wrong.

</v-click>


---
layout: default
---

# Second problem: dependencies and tests

Dependencies are implicit, and therefore impossible to inject and hard to test.

- `fs`
- `gunzip`

> Implicit dependencies **cannot be mocked for testing**.

> They also create a strong coupling of the code to a specific library, which **makes refactoring way harder**.

`Logging.Logger` is instead injected as parameter, but it needs to be provided every time you call the function (inconvenient).

---

# Dependencies

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

# Same implementation using Effect
Let's look at the same implementation using `Effect`, and **how Effect solves all the above problems**:

- All dependencies are explicit (provided using `Context` + `Layer`)
- Effect **automatically keeps track of possible error** directly in the return type
- Effect provides logging out of the box, which can be then customized (using `Logger` and `Layer`)

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

# FileSystem module

The Effect ecosystem provides some packages to implement common use cases (`Http`, `FileSystem`, `Stream` and more).

In this case we use the `FileSystem` module from `@effect/platform`.

`FileSystem` is an Effect wrapper around `fs` that handles all errors:

> `fs.exists` returns `Effect.Effect<boolean, PlatformError>`, where `PlatformError` represent an error when checking if the file exists

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

# `Gzip` module

When a module is not already present in the Effect ecosystem we can easily implement our own.

In this example we implement a `Gzip` module.

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

Inside a new `Gzip.ts` file we create a `make` function that wraps `gunzip` using Effect to handle errors:

- `Effect.asyncEffect` to wrap async code that returns a callback function (`gunzip`)
- `Effect.tryPromise` to catch any errors when executing `gunzip`
- Call `resume` when the `gunzip` callback returns successfully

We then export the implementation as a module using `Context.Tag`.

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

# Logger module

Logging is provided out of the box by Effect using methods like `logDebug`.

Later we can customize the `Logger` implementation and specify the log level (`Error`, `Debug`, `Info` and more).

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

# Error handling

All errors are tracked automatically by Effect.

- `fs.exists` can return a `PlatformError` (`BadArgument` or `SystemError`)
- `gzip` can return a `GzipError`

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

We can catch and handle all errors using `Effect.catchTags`.

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

# `Layer`: **Dependency injection**

Until now we did not provide any concrete implementation of the dependencies.

We start by defining a `Layer` called `Live` inside `Gzip`. This `Layer` exports the `make` implementation that we defined previously:

`Gzip.ts`
```typescript
export class Gzip extends Context.Tag("Gzip")<Gzip, typeof make>() {
  static Live = Layer.succeed(this, make)
}
```

For `FileSystem` instead we use the `NodeFileSystem` module that provides a complete Effect implementation of `fs` in Effect.

We merge these 2 layers and provide them to the function using `Effect.provide` (dependency injection).

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

# **Running an Effect**

At the end of the function we execute the function using `Effect.runPromise`.

This will execute all and return `Promise<void>` like the original function.

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

# This is it!

Now you can go ahead and **practice rewriting your own Typescript code with Effect**.

As your project grows you will notice clear improvements in speed, reliability, developer experience and more 🚀

