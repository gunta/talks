---
title: GerritMeets May 2025  
subtitle: Jujutsu - A Git-compatible Version Control System  
author: Martin Von Zweigbergk (Google)  
date: 2025-06-21
theme: default
---

# GerritMeets May 2025  
## Jujutsu - A Git-compatible Version Control System

- Live demo and presentation
- Presented by Martin Von Zweigbergk, Senior Software Engineer, Google

---

# Introduction

- Jujutsu (JJ) is a Git-compatible version control system.
- Rapidly growing in popularity (GitHub stars increasing quickly).
- Started about 5 years ago.
- Competes with similar tools (e.g., Sapling from Facebook, GitButler).

---

# What is Jujutsu (JJ)?

- A version control system (VCS) compatible with Git.
- Can be used with Git repositories and GitHub.
- Has its own VCS backend, but can use Git as a backend.
- Supports custom backends (e.g., at Google, repositories are stored in a large database).

---

# JJ at Google

- Repositories stored in a database: each commit and tree is a row.
- All developer commits live in a "commit cloud."
- Plan to roll out JJ to all Google developers, replacing the current Mercurial-based system within a year.

---

# Key Differences from Git

- **Working copy is a commit:**  
  - Every JJ command snapshots changes into a commit.
  - You work with your working copy like any other commit.
  - Simplifies the user interface (no staging area, no soft/hard reset confusion).
  - Provides automatic backup of working copy.

---

# Working with Commits

- You can check out any commit at any time; JJ won't complain about a "dirty" working copy.
- Supports recording conflicts in commits:
  - When a conflict occurs, it becomes a commit.
  - Inputs to the conflict are stored, allowing reproduction of the conflicted state.

---

# Rebasing and Merging

- Every rebase or merge will succeed; conflicts can be resolved later.
- JJ can always rebase all descendants:
  - If you amend an old commit, JJ automatically rebases everything on top.
  - Possible because conflicts are first-class and can be recorded.

---

# Branches and Heads

- No need to create named branches for your commits.
- Anonymous heads are tracked (like Mercurial).
- Old commits are forgotten when rewritten; repository points to the new commit.

---

# Demo: Cloning and Exploring a Repo

```bash
jj git clone <repo-url>
cd <repo>
ls -a
```

- `.jj/` directory contains:
  - The actual Git repository.
  - Additional JJ-specific data (e.g., anonymous heads, operation logs).

---

# JJ Commit Storage

- Git repository stores commits, entries, blobs.
- JJ adds refs to prevent garbage collection of off-branch commits.
- JJ log commands:
  - `jj log` or just `jj` shows local commits by default.
  - Can show all commits, including those on the server.

---

# Working Copy Commit

- The working copy is always a commit.
- Making changes and running `jj` snapshots the working copy.
- You can set descriptions for commits at any time.
- Empty commits can be used as a to-do list.

---

# Creating and Editing Commits

```bash
jj new  # creates a new commit and makes it the working copy
jj edit <commit-id>  # edit an existing commit
```

- Works similarly to Git, but branch handling is different.
- Feels more like Mercurial: you can create parallel virtual branches.

---

# Change IDs

- JJ uses "change IDs" (similar to Gerrit).
- Change IDs are unique prefixes for referring to commits.
- JJ change IDs are written to the Git commit header.

---

# Handling Conflicts

- Conflicts are stored as part of the commit (not just conflict markers).
- When rebasing, conflicts are preserved and can be resolved later.
- JJ records the input trees for conflicts in the commit tree.

---

# Demo: Rebasing with Conflicts

- Rebasing a commit with conflicts:
  - The rebase does not stop; you can continue working or resolve conflicts later.
  - Conflict markers are shown in the working copy, but the underlying data is more structured.

---

# Pushing and Sharing

```bash
jj git push
jj git push -r <remote> <commit-id> --as <branch>
```

- JJ push is a JJ command (not just a wrapper for `git push`).
- Can invent a branch on the remote if needed.
- JJ uses "bookmarks" (similar to branches, but behave differently).

---

# Bookmarks vs Branches

- Bookmarks are imported from Git branches.
- Bookmarks do not automatically advance when you create commits on top.
- You can force-push or regular push depending on the changes.

---

# Force Pushes and Code Review

- JJ project on GitHub prefers force pushes for clean commit history.
- GitHub UI is not ideal for reviewing rebased/force-pushed branches, but compare tools help.
- In Gerrit, amending commits and replacing patch sets is common.

---

# Operation Log and Undo

```bash
jj op log  # shows a log of operations
jj undo    # undoes the most recent operation
jj op restore <operation-id>  # restore to a previous state
```

- JJ keeps a log of all operations (not just commits).
- You can undo or restore to any point in the operation log.
- Undoing operations in the middle is possible but complex.

---

# Scalability

- At Google, JJ is used for a single, massive repository.
- Demoed rebasing from commit 500 million to 600 million.
- Handles hundreds of millions of commits and a huge number of files.

---

# JJ and Code Review Tools

- JJ does not have a native code review UI.
- Uses GitHub for the JJ project; internally at Google, code review is done in a separate system.
- Plans for open-source server and cloud-backed experience in the future.

---

# JJ Data Interoperability

- JJ commits look like regular Git commits to non-JJ clients.
- Additional data (e.g., change IDs) are stored in commit headers.
- Conflicts are stored in special subdirectories in the commit tree (e.g., `jj_base0`).

---

# Integrations and Tools

- Several third-party tools and integrations:
  - Visual JJ (visualjj.com)
  - JJ2, Lazy JJ, JJ UI, and more
- None are official Google projects.

---

# Q&A Highlights

- Largest repo at Google: hundreds of millions of commits, huge number of files.
- JJ changes are accessible via Gerrit or GitHub, depending on preference.
- PRs are accepted via GitHub.
- Plans for more UI integrations (e.g., IntelliJ, Visual JJ).

---

# Why "JJ"?

- Easy to type and replace.
- Originally a placeholder name.
- Later associated with "Jujutsu" (martial art).
- Avoided "GG" to prevent confusion with logging.

---

# Summary

- JJ is a modern, Git-compatible VCS with unique features:
  - Working copy as a commit
  - First-class conflict handling
  - Flexible backends and scalability
  - Operation log and powerful undo/restore
- Used at Google for massive codebases.
- Open-source, with growing community and integrations.

---

# Thank You!

- Presented by Martin Von Zweigbergk, Google
- Questions?
- [GitHub: martinvonz/jj](https://github.com/martinvonz/jj)
- [Visual JJ](https://visualjj.com)

---