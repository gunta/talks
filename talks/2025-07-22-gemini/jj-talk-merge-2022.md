---
title: Jujutsu: A Git-Compatible VCS  
subtitle: Git Merge 2022  
author: Martin von Zweigbergk  
theme: default
layout: center
---

# Jujutsu: A Git-Compatible VCS  
## Git Merge 2022  
### Presented by Martin von Zweigbergk

---

## About the Speaker

- Martin von Zweigbergk
- Works on Source Control at Google
- Experience:
  - Ericsson: Led migration to Git from ClearCase, improved rebase scripts
  - Google: Worked on compensation app, then 8 years on "fig" (integrating Mercurial as a client for Google’s monorepo)

---

## Agenda

1. Background & History of Source Control at Google
2. Why Not Just Use Git?
3. Jujutsu (jj) Workflows & Features
4. Architecture & Design Decisions
5. Git Compatibility
6. Mercurial Inspirations
7. Missing Features & Roadmap
8. Goals & Integration at Google

---

# Background: Source Control at Google

- Started with CVS  
- Switched to Perforce  
- Perforce couldn't scale → Google built Piper (own VCS)  
- Piper's working copy too big → Created virtual file system "CitC"  
- Most Googlers use Piper + CitC  
- For users missing DVCS workflows, added Mercurial on top  
- Monorepo is extremely large, contains all Google source code

---

## Problems with Existing Systems

- **Performance:**  
  - Python-based tools are slow  
  - Eager data structures don’t scale

- **Consistency:**  
  - Race conditions and corruption due to Mercurial not being designed for distributed storage

- **Integration:**  
  - Calling and parsing Mercurial CLI is painful

---

## Motivation for a Next-Gen VCS

- Desire for:
  - Automatic commits (e.g., every editor save)
  - Experimentation with new UX
  - Better integration with Google’s ecosystem
  - Avoiding Git’s multiple implementations and integration issues

---

# Why Not Just Use Git?

- Adding new features to Git would require a separate, potentially ugly set of commands
- Upstream acceptance unlikely
- Google ecosystem integration is difficult due to multiple Git implementations
- Need for features not easily added to Git

---

# Jujutsu (jj): Key Workflows & Features

---

## Anonymous Branches

- Inspired by Mercurial
- No more "detached HEAD" confusion
- All commits are tracked, even unnamed ones
- Old versions of commits are hidden after rewrite/amend
- Manual hiding possible with `jj abandon`

---

## Working Copy as a Commit

- The working copy is always an actual commit (marked with `@`)
- Any change + any jj command = automatic amend to the working copy commit
- `jj checkout` creates a new commit for working copy changes
- `jj edit` resumes editing an existing commit

---

## Consequences of This Model

- Working copy is never "dirty"
- Automatic backup with every command
- No need for `stash`—the working copy commit is your stash
- No need for `commit`—changes are always committed
- Set commit message anytime with `jj describe`
- Consistent CLI: working copy commit behaves like any other commit
- `jj restore` can restore files between any two commits

---

## First-Class Conflicts

- Conflicts are stored in commits in a structured way (not just conflict markers in files)
- Merges and rebases never fail due to conflicts
- You can delay conflict resolution as long as you want
- Collaborate on conflict resolution (resolve some, leave others for coworkers)
- More consistent conflict resolution flow: just check out the commit with conflicts, resolve, and squash

---

## Automatic Rebasing of Descendants

- Rebasing always succeeds
- If you amend a commit in the middle of a stack, all descendants are automatically rebased
- Even conflict resolutions can be rebased

---

## Operation Log

- The entire repo is under source control: refs, anonymous heads, working copy positions
- Like Git’s reflogs, but across all refs and with extra metadata (user, host, time)
- Enables time travel: view or restore repo state at any operation
- Undo any operation (not just the latest), similar to `git revert` but for operations
- Safe concurrency: no data loss or corruption even with concurrent operations on different machines

---

## Undo & Time Travel

- Restore the entire repo to a previous state
- Undo a single operation without undoing later ones
- Useful for recovering from mistakes or understanding repo history

---

# Architecture & Design

---

## Written in Rust

- Implemented as a library for reusability (CLI is just one user)
- Goal: usable in server, CLI, GUI, IDE, etc.
- Modular design: easy to replace components (e.g., commit storage, working copy backend)

---

## Storage Backends

- Two default commit storage backends:
  - Git backend (stores as Git commits)
  - Simple custom backend
- Possible to implement cloud storage backends

- Working copy:
  - Normally on local disk
  - Can be replaced with VFS or smarter backends

---

## Scalability

- Designed for very large repositories
- Avoids operations that require all ancestors
- Achieved via lazy loading: only fetch objects as needed
- Algorithms designed to avoid scaling with repo/tree size unless necessary

---

## Transactional Model

- All operations are performed in the repo first (not the working copy)
- Commits and refs are updated, then the working copy is updated to match
- Working copy is just another commit, simplifying the programming model
- Faster: avoids unnecessary working copy updates
- Laziness: don’t fetch objects unless needed

---

# Git Compatibility

- Can be used independently alongside Git users in the same repo
- Compatibility at multiple levels:
  - Commit storage: can use Git backend, reads/writes Git objects
  - Import/export refs between jj and Git
  - Interact with Git remotes (when using Git backend)

---

# Mercurial Inspirations

- Clean UX (e.g., revsets for selecting revisions)
- Simpler workflows (no staging area)
- History rewriting tools (split, fold, rebase)
- Customizability (Mercurial is Python, jj is Rust but aims for modularity)
- Still working towards Mercurial’s level of customizability

---

# Missing Features & Roadmap

- Garbage collection and repacking (for commits and operations)
- Batch prefetching and caching for networked backends
- Support for copies/renames (undecided on tracking vs. detection)
- Many features still missing (e.g., blame)
- Easier component replacement (custom commands, backends, language bindings)
- Security hardening
- Custom backend needs push/pull support
- Contributions welcome!

---

# Goals & Integration at Google

- Replace Mercurial with jj internally
- Move commit/repo storage to the cloud
- Create a single, huge commit graph for all Google developers
- Cloud-based repos accessible from anywhere (e.g., cloud IDEs, review tools)
- Integrate with Google’s VFS (no need for sparse checkouts)
- Add commands for internal review/merge workflows
- Build a server for cloud IDE and review tool integration

---

# Summary

- Jujutsu (jj) is a Git-compatible VCS with:
  - Anonymous branches
  - Working copy as a commit
  - First-class conflicts
  - Automatic rebasing of descendants
  - Operation log for time travel and undo
  - Modular, scalable, and designed for large repos
- Open source and welcoming contributions
- Aims to improve both open source and Google’s internal development workflows

---

# Get Involved

- Project URL: [https://github.com/martinvonz/jj](https://github.com/martinvonz/jj)
- Discord chat link available on the repo page
- Email: martinvancy@google.com

---

# Thank You!

Questions?  
Find more info and join the community at the project’s GitHub page.

---
