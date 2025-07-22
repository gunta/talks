# Frequently asked questions

### Why does my bookmark not move to the new commit after `jj new/commit`?

If you're familiar with Git, you might expect the current bookmark to move forward
when you commit. However, Jujutsu does not have a concept of a "current bookmark".

To move bookmarks, use `jj bookmark move`.

### I made a commit and `jj git push --all` says "Nothing changed" instead of pushing it. What do I do?

`jj git push --all` pushes all _bookmarks_, not all revisions. You have two
options:

* Using `jj git push --change` will automatically create a bookmark and push it.
* Using `jj bookmark` commands to create or move a bookmark to either the commit
  you want to push or a descendant on it. Unlike Git, Jujutsu doesn't do this
  automatically (see previous question).

### Where is my commit, why is it not visible in `jj log`?

Is your commit visible with `jj log -r 'all()'`?

If yes, you should be aware that `jj log` only shows a subset of the commits in
the repo by default. Most commits that exist on a remote are not shown. Local
commits and their immediate parents (for context) are shown. The thinking is
that you are more likely to interact with this set of commits. You can configure
the set of revisions to show by default by overriding `revsets.log` as described
in [config].

If not, the revision may have been abandoned (e.g. because you
used `jj abandon`, or because it's an obsolete version that's been rewritten
with `jj rebase`, `jj describe`, etc). In that case, `jj log -r commit_id`
should show the revision as "hidden". `jj new commit_id` should make the
revision visible again.

See [revsets] and [templates] for further guidance.

### What are elided revisions in the output of `jj log`? How can I display them?

"Elided revisions" appears in the log when one revision descends from another,
both are in the revset, but the revisions connecting them are _not_ in the
revset.

For example, suppose you log the revset `tyl|mus` which contains exactly two
revisions:

```sh
$  jj log -r 'tyl|mus'
○  musnqzvt me@example.com 1 minute ago 9a09f8a5
│  Revision C
~  (elided revisions)
○  tylynnzk me@example.com 1 minute ago f26967c8
│  Revision A
```

Only the two revisions in the revset are displayed. The text "(elided
revisions)" is shown to indicate that `musnqzvt` descends from `tylynnzk`, but
the nodes connecting them are not in the revset.

To view the elided revisions, change the [revset expression](revsets.md) so it
includes the connecting revisions.  The `connected()` revset function does
exactly this:

```sh
$ jj log -r 'connected(tyl|mus)'
○  musnqzvt me@example.com 43 seconds ago 9a09f8a5
│  Revision C
○  rsvnrznr me@example.com 43 seconds ago 5b490f30
│  Revision B
○  tylynnzk me@example.com 43 seconds ago f26967c8
│  Revision A
```

### How can I get `jj log` to show me what `git log` would show me?

Use `jj log -r ..`. The `..` [operator] lists all visible commits in the repo, excluding the root (which is never interesting and is shared by all repos).

### Can I monitor how `jj log` evolves?

The simplest way to monitor how the history as shown by `jj log` evolves is by using the [watch(1)](https://man7.org/linux/man-pages/man1/watch.1.html) command (or [hwatch](https://github.com/blacknon/hwatch?tab=readme-ov-file#configuration) or [viddy](https://github.com/sachaos/viddy)).
For example:

```sh
watch --color jj --ignore-working-copy log --color=always
```

This will continuously update the (colored) log output in the terminal.
The `--ignore-working-copy` option avoids conflicts with manual operations during the creation of snapshots.
Martin used watch in a [tmux](https://github.com/tmux/tmux/wiki) pane during his presentation [Jujutsu - A Git-compatible VCS](https://www.youtube.com/watch?v=LV0JzI8IcCY).

Alternatively, you can use [jj-fzf](https://github.com/tim-janik/jj-fzf), where the central piece is the `jj log` view and common operations can be carried out via key bindings while the log view updates.

The wiki lists additional TUIs and GUIs beyond the terminal: [GUI-and-TUI](https://github.com/jj-vcs/jj/wiki/GUI-and-TUI)

### Should I co-locate my repository?

Co-locating a Jujutsu repository allows you to use both Jujutsu and Git in the
same working copy. The benefits of doing so are:

- You can use Git commands when you're not sure how to do something with
  Jujutsu, Jujutsu hasn't yet implemented a feature (e.g., bisection), or you
  simply prefer Git in some situations.

- Tooling that expects a Git repository still works (IDEs, build tooling, etc.)

The [co-location documentation describes the
drawbacks](git-compatibility.md#co-located-jujutsugit-repos) but the most
important ones are:

- Interleaving `git` and `jj` commands may create confusing bookmark conflicts
  or divergent changes.

- If the working copy commit or its parent contain any conflicted files, tools
  expecting a Git repo may interpret the commit contents or its diff in a wrong
  and confusing way. You should avoid doing mutating operations with Git tools
  and ignore the confusing information such tools present for conflicted commits
  (unless you are curious about [the details of how `jj` stores
  conflicts](technical/conflicts.md)). See
  [\#3979](https://github.com/jj-vcs/jj/issues/3979) for plans to improve
  this situation.

- Jujutsu commands may be a little slower in very large repositories due to
  importing and exporting changes to Git. Most repositories are not noticeably
  affected by this.

If you primarily use Jujutsu to modify the repository, the drawbacks are
unlikely to affect you. Try co-locating while you learn Jujutsu, then switch if
you find a specific reason not to co-locate.

### `jj` is said to record the working copy after `jj log` and every other command. Where can I see these automatic "saves"?

Indeed, every `jj` command updates the current "working-copy" revision, marked
with `@` in `jj log`. You can notice this by how the [commit ID] of the
working copy revision changes when it's updated. Note that, unless you move to
another revision (with `jj new` or `jj edit`, for example), the [change ID] will
not change.

If you expected to see a historical view of your working copy changes in the
parent-child relationships between commits you can see in `jj log`, this is
simply not what they mean. What you can see in `jj log` is that after the
working copy commit gets amended (after any edit), the commit ID changes.

You can see the actual history of working copy changes using `jj evolog`. This
will show the history of the commits that were previously the "working-copy
commit", since the last time the change id of the working copy commit changed.
The obsolete changes will be marked as "hidden". They are still accessible with
any `jj` command (`jj diff`, for example), but you will need to use the commit
id to refer to hidden commits.

You can also use `jj evolog -r` on revisions that were previously the
working-copy revisions (or on any other revisions). Use `jj evolog -p` as an
easy way to see the evolution of the commit's contents.

### Can I prevent Jujutsu from recording my unfinished work? I'm not ready to commit it.

Jujutsu automatically records new files in the current working-copy commit and
doesn't provide a way to prevent that.

However, you can easily record intermediate drafts of your work. If you think
you might want to go back to the current state of the working-copy commit,
simply use `jj new`. There's no need for the commit to be "finished" or even
have a description.

Then future edits will go into a new working-copy commit on top of the now
former working-copy commit. Whenever you are happy with another set of edits,
use `jj squash` to amend the previous commit.

If you have changes you _never_ want to put in a public commit, see: [How can I
keep my scratch files in the repository without committing
them?](#how-can-i-keep-my-scratch-files-in-the-repository-without-committing-them)

For more options see the next question.

### Can I interactively create a new commit from only some of the changes in the working copy, like `git add -p && git commit` or `hg commit -i`?

Since the changes are already in the working-copy commit, the equivalent to
`git add -p && git commit`/`git commit -p`/`hg commit -i` is to split the
working-copy commit with `jj split -i` (or the practically identical
`jj commit -i`).

For the equivalent of `git commit --amend -p`/`hg amend -i`, use `jj squash -i`.

### Is there something like `git rebase --interactive` or `hg histedit`?

It is often sufficient to use some form of `jj rebase` with `-A/-B`. For
example, if you have a linear chain of revisions `A` through `C` and want to
move `C` before `B`, use `jj rebase -r C -B B`. See `jj help rebase` for more
examples.

There is a [tracking issue][reordering] you can check for updates.

To squash or split commits, use `jj squash` and `jj split`.

### How can I keep my scratch files in the repository without committing them?

You can set `snapshot.auto-track` to only start tracking new files matching the
configured pattern (e.g. `"none()"`). Changes to already tracked files will
still be snapshotted by every command.

You can keep your notes and other scratch files in the repository, if you add
a wildcard pattern to either the repo's `gitignore` or your global `gitignore`.
Something like `*.scratch` or `*.scratchpad` should do, after that rename the
files you want to keep around to match the pattern.

If you keep your scratch files in their own directory with no tracked files, you
can create a `.gitignore` file in that directory containing only `*`. This will
ignore everything in the directory including the `.gitignore` file itself.

If `$EDITOR` integration is important, something like `scratchpad.*` may be more
helpful, as you can keep the filename extension intact (it
matches `scratchpad.md`, `scratchpad.rs` and more). Another option is to add a
directory to the global `.gitignore` which then stores all your temporary files
and notes. For example, you could add `scratch/` to `~/.git/ignore` and then
store arbitrary files in `<your-git-repo>/scratch/`.

You can find more details on `gitignore` files [here][gitignore].

### How can I avoid committing my local-only changes to tracked files?

Suppose your repository tracks a file like `secret_config.json`, and you make
some changes to that file to work locally. Since Jujutsu automatically commits
the working copy, there's no way to prevent Jujutsu from committing changes to
the file. But, you never want to push those changes to the remote repository.

One solution is to keep these changes in a separate commit branched from the
trunk. To use those changes in your working copy, _merge_ the private commit
into your branch.

Suppose you have a commit "Add new feature":

```shell
$ jj log
@  xxxxxxxx me@example.com 2024-08-21 11:13:21 ef612875
│  Add new feature
◉  yyyyyyyy me@example.com 2024-08-21 11:13:09 main b624cf12
│  Existing work
~
```

First, create a new commit branched from main and add your private changes:

```shell
$ jj new main -m "private: my credentials"
Working copy  (@) now at: wwwwwwww 861de9eb (empty) private: my credentials
Parent commit (@-)      : yyyyyyyy b624cf12 main | Existing work
Added 0 files, modified 1 files, removed 0 files

$ echo '{ "password": "p@ssw0rd1" }' > secret_config.json
```

Now create a merge commit with the branch you're working on and the private
commit:

```shell
$ jj new xxxxxxxx wwwwwwww
Working copy  (@) now at: vvvvvvvv ac4d9fbe (empty) (no description set)
Parent commit (@-)      : xxxxxxxx ef612875 Add new feature
Parent commit (@-)      : wwwwwwww 2106921e private: my credentials
Added 0 files, modified 1 files, removed 0 files

$ jj log
@    vvvvvvvv me@example.com 2024-08-22 08:57:40 ac4d9fbe
├─╮  (empty) (no description set)
│ ◉  wwwwwwww me@example.com 2024-08-22 08:57:40 2106921e
│ │  private: my credentials
◉ │  xxxxxxxx me@example.com 2024-08-21 11:13:21 ef612875
├─╯  Add new feature
◉  yyyyyyyy me@example.com 2024-08-21 11:13:09 main b624cf12
│  Existing work
~
```

Now you're ready to work:

- Your work in progress _xxxxxxxx_ is the first parent of the merge commit.
- The private commit _wwwwwwww_ is the second parent of the merge commit.
- The working copy (_vvvvvvvv_) contains changes from both.

As you work, squash your changes using `jj squash --into xxxxxxxx`.

If you need a new empty commit on top of `xxxxxxxx` you can use the
`--insert-after` and `--insert-before` options (`-A` and `-B` for short):

```shell
# Insert a new commit after xxxxxxxx
$ jj new --no-edit -A xxxxxxxx -m "Another feature"
Working copy  (@) now at: uuuuuuuu 1c3cff09 (empty) Another feature
Parent commit (@-)      : xxxxxxxx ef612875 Add new feature

# Insert a new commit between yyyyyyyy and vvvvvvvv
$ jj new --no-edit -A yyyyyyyy -B vvvvvvvv -m "Yet another feature"
Working copy  (@) now at: tttttttt 938ab831 (empty) Yet another feature
Parent commit (@-)      : yyyyyyyy b624cf12 Existing work
```

To avoid pushing change _wwwwwwww_ by mistake, use the configuration
[git.private-commits](config.md#set-of-private-commits):

```shell
jj config set --user git.private-commits "'''description(glob:'private:*')'''"
```

### I accidentally changed files in the wrong commit, how do I move the recent changes into another commit?

Let's say we are editing a commit for "featureA", and we forgot to run `jj
new` or `jj commit` before doing some work that belongs in a new commit:

```console
$ jj log
@  lnvvtrzo jjfan@example.org 2025-02-28 21:01:10 31a347e0
│  featureA
◆  zzzzzzzz root() 00000000
$ cat file  # Oh no, the work on "feature B" should be in a separate commit!
Done with feature A
Working on feature B
```

#### Step 1: Find the commit id for the "last good version"

<!-- TODO: Reorganize the two related questions, this one and
  -- the one linked below
  -->
You can find [all the past versions of the working copy revision that `jj` has
saved](#jj-is-said-to-record-the-working-copy-after-jj-log-and-every-other-command-where-can-i-see-these-automatic-saves)
by running `jj evolog`. The obsolete versions will be marked as "hidden" and
will have the same change id, but will have different commit ids. This
represents different [commits] that are all parts of the same [change].

For example, this is what the evolog might look like after you made two edits to
the same change:

```console
$ # Note the word "hidden", the commit ids on the right,
$ # and the unchanging change id on the left.
$ jj evolog
@  lnvvtrzo jjfan@example.org 2025-02-28 21:01:10 31a347e0
│  featureA
○  lnvvtrzo hidden jjfan@example.org 2025-02-28 21:00:51 b8004ab8
│  featureA
○  lnvvtrzo hidden jjfan@example.org 2025-02-28 20:50:05 e4d831d
   (no description set)
```

Since commit `b800` is hidden, it is considered obsolete and `jj log` (without
arguments) will not show it, nor can it be accessed by its change id. However,
most `jj` operations work normally on such commits if you refer to them by their
commit id.

To find out which of these versions is the last time before we started working
on feature B (the point where we should have created a new change, but failed
to do so), we can look at the actual changes between the `evolog` commits by
running `jj evolog -p`:

```console
$ # When was the last saved point before we started working on feature B?
$ jj evolog -p --git  # We use `--git` to make diffs clear without colors
@  lnvvtrzo jjfan@example.org 2025-02-28 21:01:10 31a347e0
│  featureA
│  diff --git a/file b/file
│  index 2b455c4207..2a7e05a01a 100644
│  --- a/file
│  +++ b/file
│  @@ -1,1 +1,2 @@
│   Done with feature A
│  +Working on feature B
○  lnvvtrzo hidden jjfan@example.org 2025-02-28 21:00:51 b8004ab8
│  featureA
│  diff --git a/file b/file
│  index cb61245109..2b455c4207
│  --- a/file
│  +++ b/file
│  @@ -1,1 +1,1 @@
│  -Working on feature A
│  +Done with feature A
○  lnvvtrzo hidden jjfan@example.org 2025-02-28 20:50:05 e4d831d
   (no description set)
   diff --git a/file b/file
   index 0000000000..cb61245109
   --- /dev/null
   +++ b/file
   @@ 0,0 +1,1 @@
   +Working on feature A
```

In this example, the version of the change when we were actually done with
feature A is when we edited the file to say "Done with feature A". This state
was saved in the commit with id `b80` (the second one in the list). The
following edit (commit `31a`) belongs in a new change.

#### Step 2: Create a new change for the current state and restore the existing change to the older state

The "featureA" change is currently at commit `31a`:

```console
$ jj log
@  lnvvtrzo jjfan@example.org 2025-02-28 21:01:10 31a347e0
│  featureA
◆  zzzzzzzz root() 00000000
```

We'd like to create a new "featureB" change with the contents of the current
commit `31a`, and we'd like the "featureA" change to be reverted to its former
state at commit `b80` (see step 1 above for how we found that commit id).

First, we create a new empty child commit. Since it is empty, it has the same
contents as `31a`.

```console
$ jj new -m "featureB"
Working copy  (@) now at: pvnrkl 47171aa (empty) featureB
Parent commit (@-)      : lnvvtr 31a347e featureA
$ cat file
Done with feature A
Working on feature B
```

Now, we `jj restore` the change `lnvvtr` to its state at commit `b80`. We use
the `--restore-descendants` flag so that the *file contents* (AKA snapshot) of
the "featureB" change is preserved.

```console
$ # We refer to `lnvvtr` as `@-` for brevity
$ jj restore --from b80 --into @- --restore-descendants
Created lnvvtr 599994e featureA
Rebased 1 descendant commits (while preserving their content)
Working copy  (@) now at: pvnrkl 468104c featureB
Parent commit (@-)      : lnvvtr 599994e featureA
```

Even though `@-` was modified, `--restore-descendants` preserved the contents of
the current change:

```console
$ jj file show -r @ file  # Same as `cat file`
Done with feature A
Working on feature B
$ jj file show -r @- file
Done with feature A
```

??? info "More details on what `--restore-descendants` does"

    When we ran the `jj restore` command, the working copy change `@` was
    at commit `471` and `@` was the only child of `@-`. In this situation,

    ```shell
    jj restore --from b80 --into @- --restore-descendants
    ```

    is equivalent to

    ```shell
    jj restore --from b80 --into @-
    jj restore --from 471 --into @
    ```

Now, we have achieved the exact state we desired:

```
$ jj log -p --git
@  pvnrklkn jjfan@example.org 2025-02-28 21:39:29 468104c2
│  featureB
│  diff --git a/file b/file
│  index 2b455c4207..2a7e05a01a 100644
│  --- a/file
│  +++ b/file
│  @@ -1,1 +1,2 @@
│   Done with feature A
│  +Working on feature B
○  lnvvtrzo jjfan@example.org 2025-02-28 21:39:29 599994ee
│  featureA
│  diff --git a/file b/file
│  new file mode 100644
│  index 0000000000..2b455c4207
│  --- /dev/null
│  +++ b/file
│  @@ -0,0 +1,1 @@
│  +Done with feature A
◆  zzzzzzzz root() 00000000
$ jj diff --from b80 --to @- # No output means these are identical
$ jj diff --from 31a --to @  # No output means these are identical
```


### How do I resume working on an existing change?

There are two ways to resume working on an earlier change: `jj new` then `jj squash`,
and `jj edit`. The first is generally recommended, but `jj edit` can be useful. When
you use `jj edit`, the revision is directly amended with your new changes, making it
difficult to tell what exactly you change. You should avoid using `jj edit` when the
revision has a conflict, as you may accidentally break the plain-text annotations on
your state without realising.

To start, use `jj new <rev>` to create a change based on that earlier revision. Make
your edits, then use `jj squash` to update the earlier revision with those edits.
For when you would use git stashing, use `jj edit <rev>` for expected behaviour.
Other workflows may prefer `jj edit` as well.

### Why are most merge commits marked as "(empty)"?

Jujutsu, like Git, is a snapshot-based VCS. That means that each commit
logically records the state of all current files in the repo. The changes in a
commit are not recorded but are instead calculated when needed by comparing the
commit's state to the parent commit's state. Jujutsu defines the changes in a
commit to be relative to the auto-merged parents (if there's only one parent,
then that merge is trivial - it's the parent commit's state). As a result, a
merge commit that was a clean merge (no conflict resolution, no additional
changes) is considered empty. Conversely, if the merge commit contains conflict
resolutions or additional changes, then it will be considered non-empty.

This definition of the changes in a commit is used throughout Jujutsu. It's
used by `jj diff -r` and `jj log -p` to show the changes in a commit. It's used
by `jj rebase` to rebase the changes in a commit. It's used in `jj log` to
indicate which commits are empty. It's used in the `files()` revset function
(and by `jj log <path>`) to find commits that modify a certain path. And so on.

## How do I revert a merge commit? `jj revert -r <merge>` does nothing

Jujutsu defines the changes in a merge commit (and non-merge commits) as the
changes made compared to the auto-merged parents. That means that merge commits
are often empty. As a result, `jj revert` or a merge commit often results in an
empty commit. To revert the changes merged in from the second parent, instead
use `jj restore --from <first parent>` .

Example:
```text
@
|
C
| \
B D
|/
A
```
To revert the merge in `C`, create a new commit with `jj new C`,
then `jj restore --from B`, and then describe the message
with something like `jj desc -m "Revert the merge of D into B`. Now, commit `@`
undoes the merge of `D` into  `B`. If necessary, you can now rebase it
elsewhere, e.g. `jj rebase -r @ -d main`.

### How do I deal with divergent changes ('??' after the [change ID])?

A [divergent change][glossary_divergent_change] represents a change that has two
or more visible commits associated with it. To refer to such commits, you must
use their [commit ID]. Most commonly, the way to resolve
this is to abandon the unneeded commits (using `jj abandon <commit ID>`). If you
would like to keep both commits with this change ID, you can `jj duplicate` one
of them before abandoning it.

### How do I deal with conflicted bookmarks ('??' after bookmark name)?

A [conflicted bookmark][bookmarks_conflicts] is a bookmark that refers to multiple
different commits because jj couldn't fully resolve its desired position.
Resolving conflicted bookmarks is usually done by setting the bookmark to the
correct commit using `jj bookmark move <name> --to <commit ID>`.

Usually, the different commits associated with the conflicted bookmark should all
appear in the log, but if they don't you can use `jj bookmark list`to show all the
commits associated with it.

### How do I integrate Jujutsu with Gerrit?

Add this to your configuration to automatically add Change-Id trailers to commit messages:
```toml
[templates]
commit_trailers = '''
if(
  !trailers.contains_key("Change-Id"),
  format_gerrit_change_id_trailer(self)
)
'''
```
Note: If you don't check for the presence of the "Change-Id" trailer, you might
occasionally get duplicate trailers.
This happens when Jujutsu's change-id isn't in sync with the "Change-Id" trailer.
Eg. after `jj split`, the "Change-Id" trailer generated for the new change would
be different from the original one, it wouldn't be deduplicated.

You'll have to manually invoke `git push` of `HEAD` on the underlying git repository
into the remote Gerrit bookmark `refs/for/$BRANCH`, where `$BRANCH` is the base
bookmark you want your changes to go to (e.g., `git push origin
HEAD:refs/for/main`). Using a [co-located][co-located] repo
will make the underlying git repo directly accessible from the working
directory.

We hope to integrate with Gerrit natively in the future.

### I'm experiencing `jj` command issues in a Vite/Vitest project, how do I fix this?

When using Vite or Vitest in a Jujutsu repository, you may experience:
- Very slow vitest startup times
- Timeout errors in `jj` terminal commands
- Errors with 3rd party visual tools like `jjk` or `visual-jj`
- Corrupted `working_copy.lock` files

This happens because Vite watches the `.jj` directory where Jujutsu stores its internal state.
This creates unnecessary overhead as Vite processes Jujutsu's frequent internal file changes,
which can slow down both tools and occasionally cause file access conflicts.

**Solution**: Configure Vite to ignore the `.jj` directory by adding it to the
`server.watch.ignored` array inside your Vite configuration, for example:
```js
// vite.config.js
export default defineConfig({
  // ... other config like plugins, test setup, etc.
  server: {
    watch: {
      ignored: [
        "**/.jj/**",
      ]
    }
  },
})
```

Note: There was a [request](https://github.com/vitejs/vite/issues/20036) to include `.jj`
in the default ignore list, but manual configuration remains the recommended approach.

### I want to write a tool which integrates with Jujutsu. Should I use the library or parse the CLI?

There are some trade-offs and there is no definitive answer yet.

* Using `jj-lib` avoids parsing command output and makes error handling easier.
* `jj-lib` is not a stable API, so you may have to make changes to your tool
when the API changes.
* The CLI is not stable either, so you may need to make your tool detect the
different versions and call the right command.
* Using the CLI means that your tool will work with custom-built `jj` binaries,
like the one at Google (if you're using the library, you will not be able to
detect custom backends and more).


[bookmarks_conflicts]: bookmarks.md#conflicts

[change]: glossary.md#change
[change ID]: glossary.md#change-id
[co-located]: glossary.md#co-located-repos
[commit ID]: glossary.md#commit-id
[commits]: glossary.md#commit
[config]: config.md

[gerrit-integration]: https://gist.github.com/thoughtpolice/8f2fd36ae17cd11b8e7bd93a70e31ad6
[gitignore]: https://git-scm.com/docs/gitignore

[glossary_divergent_change]: glossary.md#divergent-change

[operator]: revsets.md#operators

[revsets]: revsets.md

[templates]: templates.md

[reordering]: https://github.com/jj-vcs/jj/issues/1531
