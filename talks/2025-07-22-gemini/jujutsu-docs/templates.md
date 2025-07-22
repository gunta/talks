# Templates

Jujutsu supports a functional language to customize output of commands.
The language consists of literals, keywords, operators, functions, and
methods.

A couple of `jj` commands accept a template via `-T`/`--template` option.

## Keywords

Keywords represent objects of different types; the types are described in
a follow-up section. In addition to context-specific keywords, the top-level
object can be referenced as `self`.

### Commit keywords

In `jj log`/`jj evolog` templates, all 0-argument methods of [the `Commit`
type](#commit-type) are available as keywords. For example, `commit_id` is
equivalent to `self.commit_id()`.

### Operation keywords

In `jj op log` templates, all 0-argument methods of [the `Operation`
type](#operation-type) are available as keywords. For example,
`current_operation` is equivalent to `self.current_operation()`.

## Operators

The following operators are supported.

* `x.f()`: Method call.
* `-x`: Negate integer value.
* `!x`: Logical not.
* `x * y`, `x / y`, `x % y`: Multiplication/division/remainder. Operands must
  be `Integer`s.
* `x + y`, `x - y`: Addition/subtraction. Operands must be `Integer`s.
* `x >= y`, `x > y`, `x <= y`, `x < y`: Greater than or equal/greater than/
  lesser than or equal/lesser than. Operands must be `Integer`s.
* `x == y`, `x != y`: Equal/not equal. Operands must be either `Boolean`,
  `Integer`, or `String`.
* `x && y`: Logical and, short-circuiting.
* `x || y`: Logical or, short-circuiting.
* `x ++ y`: Concatenate `x` and `y` templates.

(listed in order of binding strengths)

## Global functions

The following functions are defined.

* `fill(width: Integer, content: Template) -> Template`: Fill lines at
  the given `width`.
* `indent(prefix: Template, content: Template) -> Template`: Indent
  non-empty lines by the given `prefix`.
* `pad_start(width: Integer, content: Template[, fill_char: Template])`: Pad (or
  right-justify) content by adding leading fill characters. The `content`
  shouldn't have newline character.
* `pad_end(width: Integer, content: Template[, fill_char: Template])`: Pad (or
  left-justify) content by adding trailing fill characters. The `content`
  shouldn't have newline character.
* `pad_centered(width: Integer, content: Template[, fill_char: Template])`: Pad
  content by adding both leading and trailing fill characters. If an odd number
  of fill characters are needed, the trailing fill will be one longer than the
  leading fill. The `content` shouldn't have newline characters.
* `truncate_start(width: Integer, content: Template[, ellipsis: Template])`:
  Truncate `content` by removing leading characters. The `content` shouldn't
  have newline character. If `ellipsis` is provided and `content` was truncated,
  prepend the `ellipsis` to the result.
* `truncate_end(width: Integer, content: Template[, ellipsis: Template])`:
  Truncate `content` by removing trailing characters. The `content` shouldn't
  have newline character. If `ellipsis` is provided and `content` was truncated,
  append the `ellipsis` to the result.
* `label(label: Stringify, content: Template) -> Template`: Apply label to
  the content. The `label` is evaluated as a space-separated string.
* `raw_escape_sequence(content: Template) -> Template`: Preserves any escape
  sequences in `content` (i.e., bypasses sanitization) and strips labels.
  Note: This function is intended for escape sequences and as such, its output
  is expected to be invisible / of no display width. Outputting content with
  nonzero display width may break wrapping, indentation etc.
* `stringify(content: Stringify) -> String`: Format `content` to string. This
  effectively removes color labels.
* `json(value: Serialize) -> String`: Serialize `value` in JSON format.
* `if(condition: Boolean, then: Template[, else: Template]) -> Template`:
  Conditionally evaluate `then`/`else` template content.
* `coalesce(content: Template...) -> Template`: Returns the first **non-empty**
  content.
* `concat(content: Template...) -> Template`:
  Same as `content_1 ++ ... ++ content_n`.
* `separate(separator: Template, content: Template...) -> Template`:
  Insert separator between **non-empty** contents.
* `surround(prefix: Template, suffix: Template, content: Template) -> Template`:
  Surround **non-empty** content with texts such as parentheses.
* `config(name: String) -> ConfigValue`: Look up configuration value by `name`.

## Types

### `AnnotationLine` type

_Conversion: `Boolean`: no, `Serialize`: no, `Template`: no_

The following methods are defined.

* `.commit() -> Commit`: Commit responsible for changing the relevant line.
* `.content() -> Template`: Line content including newline character.
* `.line_number() -> Integer`: 1-based line number.
* `.first_line_in_hunk() -> Boolean`: False when the directly preceding line
  references the same commit.

### `Boolean` type

_Conversion: `Boolean`: yes, `Serialize`: yes, `Template`: yes_

No methods are defined. Can be constructed with `false` or `true` literal.

### `Commit` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: no_

This type cannot be printed. The following methods are defined.

* `.description() -> String`
* `.trailers() -> List<Trailer>`
* `.change_id() -> ChangeId`
* `.commit_id() -> CommitId`
* `.parents() -> List<Commit>`
* `.author() -> Signature`
* `.committer() -> Signature`
* `.signature() -> Option<CryptographicSignature>`: Cryptographic signature if the
  commit was signed.
* `.mine() -> Boolean`: Commits where the author's email matches the email of
  the current user.
* `.working_copies() -> List<WorkspaceRef>`: For multi-workspace repositories, returns a list of workspace references for each workspace whose working-copy commit matches the current commit.
* `.current_working_copy() -> Boolean`: True for the working-copy commit of the
  current workspace.
* `.bookmarks() -> List<CommitRef>`: Local and remote bookmarks pointing to the
  commit. A tracking remote bookmark will be included only if its target is
  different from the local one.
* `.local_bookmarks() -> List<CommitRef>`: All local bookmarks pointing to the
  commit.
* `.remote_bookmarks() -> List<CommitRef>`: All remote bookmarks pointing to the
  commit.
* `.tags() -> List<CommitRef>`
* `.git_refs() -> List<CommitRef>`
* `.git_head() -> Boolean`: True for the Git `HEAD` commit.
* `.divergent() -> Boolean`: True if the commit's change id corresponds to multiple
  visible commits.
* `.hidden() -> Boolean`: True if the commit is not visible (a.k.a. abandoned).
* `.immutable() -> Boolean`: True if the commit is included in [the set of
  immutable commits](config.md#set-of-immutable-commits).
* `.contained_in(revset: String) -> Boolean`: True if the commit is included in [the provided revset](revsets.md).
* `.conflict() -> Boolean`: True if the commit contains merge conflicts.
* `.empty() -> Boolean`: True if the commit modifies no files.
* `.diff([files: String]) -> TreeDiff`: Changes from the parents within [the
  `files` expression](filesets.md). All files are compared by default, but it is
  likely to change in future version to respect the command line path arguments.
* `.root() -> Boolean`: True if the commit is the root commit.

### `ChangeId` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: yes_

The following methods are defined.

* `.normal_hex() -> String`: Normal hex representation (0-9a-f) instead of the
  canonical "reversed" (z-k) representation.
* `.short([len: Integer]) -> String`
* `.shortest([min_len: Integer]) -> ShortestIdPrefix`: Shortest unique prefix.

### `CommitId` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: yes_

The following methods are defined.

* `.short([len: Integer]) -> String`
* `.shortest([min_len: Integer]) -> ShortestIdPrefix`: Shortest unique prefix.

### `CommitRef` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: yes_

The following methods are defined.

* `.name() -> RefSymbol`: Local bookmark or tag name.
* `.remote() -> Option<RefSymbol>`: Remote name if this is a remote ref.
* `.present() -> Boolean`: True if the ref points to any commit.
* `.conflict() -> Boolean`: True if [the bookmark or tag is
  conflicted](bookmarks.md#conflicts).
* `.normal_target() -> Option<Commit>`: Target commit if the ref is not
  conflicted and points to a commit.
* `.removed_targets() -> List<Commit>`: Old target commits if conflicted.
* `.added_targets() -> List<Commit>`: New target commits. The list usually
  contains one "normal" target.
* `.tracked() -> Boolean`: True if the ref is tracked by a local ref. The local
  ref might have been deleted (but not pushed yet.)
* `.tracking_present() -> Boolean`: True if the ref is tracked by a local ref,
    and if the local ref points to any commit.
* `.tracking_ahead_count() -> SizeHint`: Number of commits ahead of the tracking
  local ref.
* `.tracking_behind_count() -> SizeHint`: Number of commits behind of the
  tracking local ref.

### `ConfigValue` type

_Conversion: `Boolean`: no, `Serialize`: no, `Template`: yes_

This type can be printed in TOML syntax. The following methods are defined.

* `.as_boolean() -> Boolean`: Extract boolean.
* `.as_integer() -> Integer`: Extract integer.
* `.as_string() -> String`: Extract string. This does not convert non-string
  value (e.g. integer) to string.
* `.as_string_list() -> List<String>`: Extract list of strings.

### `CryptographicSignature` type

_Conversion: `Boolean`: no, `Serialize`: no, `Template`: no_

The following methods are defined.

* `.status() -> String`: The signature's status (`"good"`, `"bad"`, `"unknown"`, `"invalid"`).
* `.key() -> String`: The signature's key id representation (for GPG, this is the key fingerprint).
* `.display() -> String`: The signature's display string (for GPG this is the formatted primary user ID).

!!! warning

    Calling any of `.status()`, `.key()`, or `.display()` is slow, as it incurs
    the performance cost of verifying the signature (for example shelling out
    to `gpg` or `ssh-keygen`). Though consecutive calls will be faster, because
    the backend caches the verification result.

!!! info

    As opposed to calling any of `.status()`, `.key()`, or `.display()`,
    checking for signature presence through boolean coercion is fast:
    ```
    if(commit.signature(), "commit has a signature", "commit is unsigned")
    ```

### `DiffStats` type

_Conversion: `Boolean`: no, `Serialize`: no, `Template`: yes_

This type can be printed as a histogram of the changes. The following methods
are defined.

* `.total_added() -> Integer`: Total number of insertions.
* `.total_removed() -> Integer`: Total number of deletions.

### `Email` type

_Conversion: `Boolean`: yes, `Serialize`: yes, `Template`: yes_

The email field of a signature may or may not look like an email address. It may
be empty, may not contain the symbol `@`, and could in principle contain
multiple `@`s.

The following methods are defined.

* `.local() -> String`: the part of the email before the first `@`, usually the
  username.
* `.domain() -> String`: the part of the email after the first `@` or the empty
  string.

### `Integer` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: yes_

No methods are defined.

### `List` type

_Conversion: `Boolean`: yes, `Serialize`: maybe, `Template`: maybe_

A list can be implicitly converted to `Boolean`. The following methods are
defined.

* `.len() -> Integer`: Number of elements in the list.
* `.join(separator: Template) -> Template`: Concatenate elements with
  the given `separator`.
* `.filter(|item| expression) -> List`: Filter list elements by predicate
  `expression`. Example: `description.lines().filter(|s| s.contains("#"))`
* `.map(|item| expression) -> ListTemplate`: Apply template `expression`
  to each element. Example: `parents.map(|c| c.commit_id().short())`

### `List<Trailer>` type

The following methods are defined. See also the `List` type.

* `.contains_key(key: Stringify) -> Boolean`: True if the commit description
  contains at least one trailer with the key `key`.

### `ListTemplate` type

_Conversion: `Boolean`: no, `Serialize`: no, `Template`: yes_

The following methods are defined. See also the `List` type.

* `.join(separator: Template) -> Template`

### `Operation` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: no_

This type cannot be printed. The following methods are defined.

* `.current_operation() -> Boolean`
* `.description() -> String`
* `.id() -> OperationId`
* `.tags() -> String`
* `.time() -> TimestampRange`
* `.user() -> String`
* `.snapshot() -> Boolean`: True if the operation is a snapshot operation.
* `.root() -> Boolean`: True if the operation is the root operation.
* `.parents() -> List<Operation>`

### `OperationId` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: yes_

The following methods are defined.

* `.short([len: Integer]) -> String`

### `Option` type

_Conversion: `Boolean`: yes, `Serialize`: maybe, `Template`: maybe_

An option can be implicitly converted to `Boolean` denoting whether the
contained value is set. If set, all methods of the contained value can be
invoked. If not set, an error will be reported inline on method call.

On comparison between two optional values or optional and non-optional values,
unset value is not an error. Unset value is considered less than any set values.

### `RefSymbol` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: yes_

[A `String` type](#string-type), but is formatted as revset symbol by quoting
and escaping if necessary. Unlike strings, this cannot be implicitly converted
to `Boolean`.

### `RepoPath` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: yes_

A slash-separated path relative to the repository root. The following methods
are defined.

* `.display() -> String`: Format path for display. The formatted path uses
  platform-native separator, and is relative to the current working directory.
* `.parent() -> Option<RepoPath>`: Parent directory path.

### `Serialize` type

An expression that can be serialized in machine-readable format such as JSON.

!!! note

    Field names and value types in the serialized output are usually stable
    across jj versions, but the backward compatibility isn't guaranteed. If the
    underlying data model is updated, the serialized output may change.

### `ShortestIdPrefix` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: yes_

The following methods are defined.

* `.prefix() -> String`
* `.rest() -> String`
* `.upper() -> ShortestIdPrefix`
* `.lower() -> ShortestIdPrefix`

### `Signature` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: yes_

The following methods are defined.

* `.name() -> String`
* `.email() -> Email`
* `.timestamp() -> Timestamp`

### `SizeHint` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: no_

This type cannot be printed. The following methods are defined.

* `.lower() -> Integer`: Lower bound.
* `.upper() -> Option<Integer>`: Upper bound if known.
* `.exact() -> Option<Integer>`: Exact value if upper bound is known and it
  equals to the lower bound.
* `.zero() -> Boolean`: True if upper bound is known and is `0`. Equivalent to
  `.upper() == 0`.

### `String` type

_Conversion: `Boolean`: yes, `Serialize`: yes, `Template`: yes_

A string can be implicitly converted to `Boolean`. The following methods are
defined.

* `.len() -> Integer`: Length in UTF-8 bytes.
* `.contains(needle: Stringify) -> Boolean`
* `.first_line() -> String`
* `.lines() -> List<String>`: Split into lines excluding newline characters.
* `.upper() -> String`
* `.lower() -> String`
* `.starts_with(needle: Stringify) -> Boolean`
* `.ends_with(needle: Stringify) -> Boolean`
* `.remove_prefix(needle: Stringify) -> String`: Removes the passed prefix, if
  present.
* `.remove_suffix(needle: Stringify) -> String`: Removes the passed suffix, if
  present.
* `.trim() -> String`: Removes leading and trailing whitespace
* `.trim_start() -> String`: Removes leading whitespace
* `.trim_end() -> String`: Removes trailing whitespace
* `.substr(start: Integer, end: Integer) -> String`: Extract substring. The
  `start`/`end` indices should be specified in UTF-8 bytes. Negative values
  count from the end of the string.
* `.escape_json() -> String`: Serializes the string in JSON format. This
  function is useful for making machine-readable templates. For example, you
  can use it in a template like `'{ "foo": ' ++ foo.escape_json() ++ ' }'` to
  return a JSON/JSONL.

#### String literals

String literals must be surrounded by single or double quotes (`'` or `"`).
A double-quoted string literal supports the following escape sequences:

* `\"`: double quote
* `\\`: backslash
* `\t`: horizontal tab
* `\r`: carriage return
* `\n`: new line
* `\0`: null
* `\e`: escape (i.e., `\x1b`)
* `\xHH`: byte with hex value `HH`

Other escape sequences are not supported. Any UTF-8 characters are allowed
inside a string literal, with two exceptions: unescaped `"`-s and uses of `\`
that don't form a valid escape sequence.

A single-quoted string literal has no escape syntax. `'` can't be expressed
inside a single-quoted string literal.

### `Stringify` type

An expression that can be converted to a `String`.

Any types that can be converted to `Template` can also be `Stringify`. Unlike
`Template`, color labels are stripped.

### `Template` type

_Conversion: `Boolean`: no, `Serialize`: no, `Template`: yes_

Most types can be implicitly converted to `Template`. No methods are defined.

### `Timestamp` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: yes_

The following methods are defined.

* `.ago() -> String`: Format as relative timestamp.
* `.format(format: String) -> String`: Format with [the specified strftime-like
  format string](https://docs.rs/chrono/latest/chrono/format/strftime/).
* `.utc() -> Timestamp`: Convert timestamp into UTC timezone.
* `.local() -> Timestamp`: Convert timestamp into local timezone.
* `.after(date: String) -> Boolean`: True if the timestamp is exactly at or after the given date.
* `.before(date: String) -> Boolean`: True if the timestamp is before, but not including, the given date.

### `TimestampRange` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: yes_

The following methods are defined.

* `.start() -> Timestamp`
* `.end() -> Timestamp`
* `.duration() -> String`

### `Trailer` type

_Conversion: `Boolean`: no, `Serialize`: no, `Template`: yes_

The following methods are defined.

* `.key() -> String`
* `.value() -> String`

### `TreeDiff` type

_Conversion: `Boolean`: no, `Serialize`: no, `Template`: no_

This type cannot be printed. The following methods are defined.

* `.files() -> List<TreeDiffEntry>`: Changed files.
* `.color_words([context: Integer]) -> Template`: Format as a word-level diff
  with changes indicated only by color.
* `.git([context: Integer]) -> Template`: Format as a Git diff.
* `.stat([width: Integer]) -> DiffStats`: Calculate stats of changed lines.
* `.summary() -> Template`: Format as a list of status code and path pairs.

### `TreeDiffEntry` type

_Conversion: `Boolean`: no, `Serialize`: no, `Template`: no_

This type cannot be printed. The following methods are defined.

* `.path() -> RepoPath`: Path to the entry. If the entry is a copy/rename, this
  points to the target (or right) entry.
* `.status() -> String`: One of `"modified"`, `"added"`, `"removed"`,
  `"copied"`, or `"renamed"`.
* `.source() -> TreeEntry`: The source (or left) entry.
* `.target() -> TreeEntry`: The target (or right) entry.

### `TreeEntry` type

_Conversion: `Boolean`: no, `Serialize`: no, `Template`: no_

This type cannot be printed. The following methods are defined.

* `.path() -> RepoPath`: Path to the entry.
* `.conflict() -> Boolean`: True if the entry is a merge conflict.
* `.file_type() -> String`: One of `"file"`, `"symlink"`, `"tree"`,
  `"git-submodule"`, or `"conflict"`.
* `.executable() -> Boolean`: True if the entry is an executable file.

### `WorkspaceRef` type

_Conversion: `Boolean`: no, `Serialize`: yes, `Template`: yes_

The following methods are defined.

* `.name() -> RefSymbol`: Returns the workspace name as a symbol.
* `.target() -> Commit`: Returns the working-copy commit of this workspace.

## Color labels

Template fragments are usually labeled with the command name, the context (or
the top-level object), and the method names. You can [customize the output
colors][config-colors] by using these labels.

For example, the following template is labeled as `op_log operation id short`:

```sh
jj op log -T 'self.id().short()'
```

In addition to that, you can insert arbitrary labels by `label(label, content)`
function.

To inspect how output fragments are labeled, use `--color=debug` option.

[config-colors]: config.md#custom-colors-and-styles

## Configuration

The default templates and aliases() are defined in the `[templates]` and
`[template-aliases]` sections of the config respectively. The exact definitions
can be seen in the [`cli/src/config/templates.toml`][1] file in jj's source
tree.

[1]: https://github.com/jj-vcs/jj/blob/main/cli/src/config/templates.toml

<!--- TODO: Find a way to embed the default config files in the docs -->

New keywords and functions can be defined as aliases, by using any
combination of the predefined keywords/functions and other aliases.

Alias functions can be overloaded by the number of parameters. However, builtin
functions will be shadowed by name, and can't co-exist with aliases.

For example:

```toml
[template-aliases]
'commit_change_ids' = '''
concat(
  format_field("Commit ID", commit_id),
  format_field("Change ID", change_id),
)
'''
'format_field(key, value)' = 'key ++ ": " ++ value ++ "\n"'
```

## Examples

Get short commit IDs of the working-copy parents:

```sh
jj log --no-graph -r @ -T 'parents.map(|c| c.commit_id().short()).join(",")'
```

Show machine-readable list of full commit and change IDs:

```sh
jj log --no-graph -T 'commit_id ++ " " ++ change_id ++ "\n"'
```
