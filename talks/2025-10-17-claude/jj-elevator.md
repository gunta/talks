## Elevator Pitch

Jujutsu (`jj`) is a version control system with a significantly simplified mental model and command-line interface compared to Git, without sacrificing expressibility or power (in fact, you could argue Jujutsu is more powerful). Stacked-diff workflows, seamless rebases, and ephemeral revisions are all natural with `jj`, and it uses Git as a backend, which means you can begin using it non-destructively with a single command and can always drop back down to Git if you need to.

## Getting Started

Install the `jj` command line tool. Make sure you set your authorship information, and also don't skip the section on setting up shell completions (the newer dynamic completions are well worth it).

```
jj config set --user user.name "Your Name"
jj config set --user user.email "your.name@example.com"
```

Then you'll need a repository to work with. You could use an existing repository of yours (although I'd recommend cloning a fresh copy, or at the very least making sure all your in-progress changes are committed and pushed), or if you want to follow along more closely, you can clone the repository containing this website's source code.

To use an existing repository, `cd` into it and run:

```
jj git init --colocate .
```

To clone a new one, you can do the clone and the `jj` initialisation in one step with (e.g.):

```
jj git clone --colocate git@github.com:maddiemort/maddie-wtf.git
```

In either case, you'll end up with a Jujutsu repository alongside the existing Git repository, in `.jj/`. This will not be visible to Git, and there's no risk of desynchronisation between the two: Jujutsu uses the Git repo as its storage backend, so whenever you interact with either `jj` or `git`, you're operating on the same data. The fact you're using Jujutsu rather than Git will not impact anyone else who interacts with the repository.

After initialising the colocated Git repo, `jj` will suggest that you track all of the remote branches that are associated with the ones you have checked out, and it helpfully provides a command that will track all of them at once (something like `jj bookmark track main@origin`, but containing each of the branch names that you have local checkouts of). Copy and paste it, and run it.

## How To Use It

Jujutsu's command line interface has a much smaller surface area than Git, and its mental model is simpler. That means there's much less to learn—this should be less intimidating than Git was when you originally learned it—but it _does_ mean you're going to have to adapt to a slightly different workflow.

You might also find Steve's Jujutsu Tutorial a helpful resource, but this page will try to provide a higher-level overview for busy devs who just want to get on with it.

### Starting A New Revision

When you start working on something new with Git, the first thing you'd usually do is check out `main`, pull the latest version of it from the remote, and then create a new branch off from there. Jujutsu isn't as branch-oriented as Git is, so you don't start by creating a new branch—you just place a new _revision_ on top of an existing one and start working inside it.

First, get the latest changes from the remote:

```
jj git fetch
```

Take a look at the repo history to orient yourself:

```
jj log
```

You should see something like this (if you're doing this in a fresh clone of a repo, this is probably _all_ you'll see):

```
@  rxlwrvrr blog@maddie.wtf 19 minutes ago 51931bfc
│  (empty) (no description set)
◆  rttmyopz blog@maddie.wtf 23 hours ago main git_head() 90ee7425
│  fix: add missed code tag around links to tags
~
```

In an attempt to be helpful, Jujutsu has done something that's actually a bit inconvenient for this tutorial: it created a new empty revision for you on top of `main`. Since in your typical workflow you would probably start out somewhere else in the history, this doesn't really fit with what I'm trying to teach—so for now, **ignore that first entry**.

The second entry is the important one. This is an entry in the log for a revision with ID `rttmyopz`, authored by `blog@maddie.wtf` 23 hours ago, and it's got `main` pointing to it.

You'll also notice that there's a commit hash associated with this, `90ee7425`, and that's the same one you'd see if you ran `git log`. The reason for the two different kinds of ID is that Jujutsu assigns an identifier to each revision, which it keeps stable even as the underlying Git commit might change (it will make more sense later why the Git hash might change).

Any of those identifiers can be used to refer to this revision (`rttmyopz`, or its highlighted prefix `rt`; `90ee7425`, or its highlighted prefix `9`; or `main`). Since, semantically, we want our new changes to be based on the current tip of `main` no matter what revision that is, let's use that identifier to create a new revision:

```
jj new main
```

Looking at the log reveals what happened:

```
@  ozpszrnr blog@maddie.wtf 3 seconds ago c0f838b6
│  (empty) (no description set)
◆  rttmyopz blog@maddie.wtf 23 hours ago main git_head() 90ee7425
│  fix: add missed code tag around links to tags
~
```

A new revision has been created on top of the one at the tip of `main`, and it's been given the identifier `ozpszrnr` (whose shortest unique prefix is `o`, so I'll refer to it as such from now on). The `@` on the left hand side marks that this is the working copy (current revision)—any changes we make are going to become part of this revision. We can use `@` in commands to refer to whatever the current revision is at any given time.

You'll notice that the revision I told you to ignore earlier (`rxlwrvrr`) is gone. I'll explain why it disappeared in the next section. We _could_ have just used that one, but I asked you to run `jj new` in order to demonstrate the full process of beginning a new set of changes on top of `main`.

### Making Changes

As soon as you edit a file, the changes will be included in whatever revision you're currently editing—there's no separate staging area in Jujutsu. I'll make a change to `README.md` and then look at the log again.

```
@  ozpszrnr blog@maddie.wtf 1 second ago 088e997b
│  (no description set)
◆  rttmyopz blog@maddie.wtf 1 day ago main git_head() 90ee7425
│  fix: add missed code tag around links to tags
~
```

A few things have changed. The revision is no longer marked as empty, because the change I just made is in it. If you're particularly sharp-eyed, you might notice that the Git commit hash immediately changed (but the Jujutsu revision ID remained the same). That's because as soon as changes were made, Jujutsu took care of keeping that synchronised with the underlying Git repo in the background by creating a new commit (you can `git show` it if you want!)—but those details are all abstracted away from us.

Let's say we're finished with this change and want to move on to the next revision (the same point at which you would have run `git commit` with Git). Jujutsu _does_ have a `jj commit` command, but it's just a helper that combines two operations: a `jj describe` and a `jj new`. Doing the two steps individually will help build your mental model:

```
jj describe -m "chore: add a line to README.md"
```

The log now shows:

```
@  ozpszrnr blog@maddie.wtf 2 seconds ago 0af545e5
│  chore: add a line to README.md
◆  rttmyopz blog@maddie.wtf 1 day ago main git_head() 90ee7425
│  fix: add missed code tag around links to tags
~
```

We've added a message to the revision, but we're still editing it (see the `@` on the left?). To move on to the next revision, we can run `jj new o` (or just `jj new`, since it defaults to creating a new revision on top of the current revision).

```
@  kkrnnmxs blog@maddie.wtf 1 second ago c50fbae5
│  (empty) (no description set)
○  ozpszrnr blog@maddie.wtf 29 seconds ago git_head() 0af545e5
│  chore: add a line to README.md
◆  rttmyopz blog@maddie.wtf 1 day ago main 90ee7425
│  fix: add missed code tag around links to tags
~
```

Hopefully now you can see why `jj commit` is just `jj describe` followed by `jj new`—it would have done exactly what we just did.

#### Navigating

I'll take a moment for a brief interlude to teach you a few things about how to navigate around with Jujutsu.

- Whenever you run `jj new`, Jujutsu creates a new empty revision—but if you ever move somewhere else and that revision is still empty and still has no description, it will be automatically abandoned. You therefore don't have to worry about littering your history with a bunch of empty revisions. You can try this right now in the tutorial with no ill effects—run `jj new main`, look at the log, then run `jj new o` again!
- You can manually abandon a revision, even if it contains changes and/or has a description, with `jj abandon <rev ID>`. This is a destructive operation—it will abandon the rev without confirmation—but you can undo it with `jj op undo`. See the docs for the operation log if you want to know more about undoing.
- As an alternative to creating new revisions, you can also move to _inside_ an existing revision by running `jj edit <rev ID>`. If you were to run `jj edit o` at this point in the tutorial and check the log, you'd see an `@` next to `o`, indicating it's the current revision (you're editing it). Then to get back to where you were, run `jj new o` again.
- You can also refer to revisions in these commands using revset expressions rather than by their IDs. Some useful ones to know:
  - `@` - the current revision
  - `x-` - the parent(s) of some revision `x` ("the revision before it" in the simple case)
  - `y+` - the child(ren) of `y` ("the revision after it" in the simple case)
  - `z::` - all descendants of `z`, including `z`

### Branches (Bookmarks)

You'll have noticed that at no point so far did we ever think about creating a branch. That's because Jujutsu's relationship to branches is a bit different to Git's—they're just pointers that you move around so they point to whichever revision you want them to at a given time. There's no concept of "being on a branch" in Jujutsu, you're always just editing a revision.

In fact, Jujutsu's branches are different enough from Git's that they were recently renamed to "bookmarks" instead.

Let's say that our revision, `o`, contains the only changes we needed to make for this particular unit of work, and we're ready to create a PR. In order to share our changes, we'll need to create a bookmark:

```
jj bookmark create add-readme-line -r o
```

This command says "create a new bookmark called `add-readme-line` pointing to the revision `o`". The log reflects that:

```
@  kkrnnmxs blog@maddie.wtf 3 minutes ago c50fbae5
│  (empty) (no description set)
○  ozpszrnr blog@maddie.wtf 3 minutes ago add-readme-line git_head() 0af545e5
│  chore: add a line to README.md
◆  rttmyopz blog@maddie.wtf 1 day ago main 90ee7425
│  fix: add missed code tag around links to tags
~
```

There's now an `add-readme-line` bookmark pointing to the revision `o`. If we want to push our changes, now we can:

```
jj git push -b add-readme-line --allow-new
```

The `--allow-new` arg tells Jujutsu it's okay to create a new branch on the remote (this confirmation is necessary because `jj git push` without a bookmark name will try to push all bookmarks that appear in the ancestors of the current revision).

The workflow from here on is the same as with Git—if you're using GitHub, the remote will reply with a message in your terminal containing a shortcut link straight to creating a PR with the new branch, just like usual.

Let's say you realise you need to add some more changes to your PR. I'll run through the first few commands all at once, since they're the same as above.

```
# Check where you are in the tree
jj log

# Create a new revision on top of o if necessary
jj new o

<make some changes>

# All in one this time, instead of `describe` followed by `new`
jj commit -m "chore: fix typo in README.md"
```

Here's the state of our repository now:

```
@  wlwmnxxn blog@maddie.wtf 2 seconds ago 40959102
│  (empty) (no description set)
○  kkrnnmxs blog@maddie.wtf 2 seconds ago git_head() 07602d4e
│  chore: fix typo in README.md
○  ozpszrnr blog@maddie.wtf 5 minutes ago add-readme-line 0af545e5
│  chore: add a line to README.md
◆  rttmyopz blog@maddie.wtf 1 day ago main 90ee7425
│  fix: add missed code tag around links to tags
~
```

Most of this won't be surprising, but one important thing to notice is that the bookmark _didn't move_—Jujutsu bookmarks don't automatically move when you commit, you just move them around yourself whenever they need to move. So let's do that:

```
jj bookmark move add-readme-line --to k
```

The log:

```
@  wlwmnxxn blog@maddie.wtf 1 minute ago 40959102
│  (empty) (no description set)
○  kkrnnmxs blog@maddie.wtf 1 minute ago add-readme-line* git_head() 07602d4e
│  chore: fix typo in README.md
○  ozpszrnr blog@maddie.wtf 6 minutes ago add-readme-line@origin 0af545e5
│  chore: add a line to README.md
◆  rttmyopz blog@maddie.wtf 1 day ago main 90ee7425
│  fix: add missed code tag around links to tags
~
```

The asterisk after the bookmark name indicates that the bookmark has diverged from the remote branch it's tracking (the remote branch is listed separately on the revision below as `add-readme-line@origin`). We can sort that out easily:

```
jj git push
```

```
@  wlwmnxxn blog@maddie.wtf 1 minute ago 40959102
│  (empty) (no description set)
○  kkrnnmxs blog@maddie.wtf 1 minute ago add-readme-line git_head() 07602d4e
│  chore: fix typo in README.md
○  ozpszrnr blog@maddie.wtf 7 minutes ago 0af545e5
│  chore: add a line to README.md
◆  rttmyopz blog@maddie.wtf 1 day ago main 90ee7425
│  fix: add missed code tag around links to tags
~
```

### Conflicts

Jujutsu handles conflicts in a much less panicky way than Git does: whenever conflicts occur for any reason, it just marks the conflicted revisions and any of their children with a `conflicted` marker and then lets you continue with your day.

Inside those conflicted revisions, there will be conflict markers in the files that need them, and the way you resolve conflicts is simply to make the conflict markers go away by editing those files. You can do this in one of two ways: either directly edit a conflicted revision with `jj edit <revision ID>`, or create a new revision on top of the conflicted one with `jj new <revision ID>`, resolve the conflicts in that new revision, and then squash the resolution changes in with `jj squash`.

- `edff1a4`
- `maddie-wtf v0.1.3`