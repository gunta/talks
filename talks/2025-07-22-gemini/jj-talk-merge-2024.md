---
title: "Jujutsu - A Git-compatible VCS"
subtitle: "Martin von Zweigbergk | GitMerge 2024"
author: "GitButler"
date: "2024-10-14"
theme: default
---

# Jujutsu - A Git-compatible VCS  
Martin von Zweigbergk | GitMerge 2024

---

## What is Jujutsu?

- Jujutsu (jj) is a version control system (VCS) with pluggable storage backends.
- It can be used with existing Git repositories and with Google’s internal VCS.
- Focuses on improving the user experience compared to Git.

---

## Key Features

- **Git Compatibility:**  
  Use Jujutsu with existing Git repos; others won’t notice you’re not using regular Git.

- **Pluggable Storage:**  
  Supports different storage backends, including Git and Google’s internal systems.

- **Working Copy as Commit:**  
  The working copy is always modeled as a commit, making changes and history more explicit.

---

## Demo: Getting Started

- The demo uses a clone of the Jujutsu repository.
- The top of the log shows the working copy commit, marked with `@`.
- The working copy commit is empty if there are no changes compared to its parent.

---

## Commit Details

- Each commit has:
  - A regular Git commit hash.
  - A **Change ID** (like Gerrit’s), which persists across rewrites.
- The working copy commit updates automatically with each change.

---

## Making Changes

1. Edit a file (e.g., `README`).
2. The working copy commit gets a new hash, but the Change ID remains.
3. You can set or update the commit description at any time.

---

## Incremental Commits

- Use `jj describe` to set descriptions.
- Use `jj new` to start a new commit on top of the current one.
- Changes are always tracked in the working copy commit.

---

## Git Interoperability

- In a **collocated repo**, you can mix `git` and `jj` commands.
- Example:  
  - Run `git diff` and `jj diff` interchangeably.
- Note: Jujutsu does not yet support Git attributes, so warnings may appear.

---

## Editing History

- You can edit previous commits directly in the working copy.
- Changes to a parent commit will update its descendants accordingly.

---

## No Staging Area

- Jujutsu does not have a staging area like Git.
- Instead, it provides powerful commands for:
  - Moving commits
  - Moving/splitting partial commits
  - Squashing commits

---

## Example: Squashing Commits

- Use `jj squash` to combine arbitrary commits.
- You can squash a commit into its parent and provide a new description.

---

## Operation Log

- Jujutsu keeps a log of all operations in the repository.
- Useful for:
  - Debugging
  - Troubleshooting
  - Understanding the history of changes

---

## Operation Log: Features

- View recent operations (e.g., squash, snapshot).
- Run commands at any previous operation state.
- Undo operations to revert the repository to a previous state.

---

## Mercurial-inspired Features

- **Revsets:**  
  - A language for selecting sets of revisions/commits.
  - Example: `master---` selects three generations back from master.
  - Find root commits, tag commits, and more using expressions.

---

## Handling Conflicts

- Jujutsu can store conflicts in commits—not just as conflict markers, but as structured data.
- This allows:
  - Conflicts to persist across rebases/merges until resolved.
  - More flexible conflict resolution workflows.

---

## Conflict Resolution Workflow

1. Create conflicting changes on different branches.
2. Merge or rebase to produce a conflict.
3. Conflicts are materialized in the working copy as special markers.
4. Resolve conflicts and squash the resolution into the appropriate commit.

---

## Advanced Conflict Handling

- Move commits around freely, even with unresolved conflicts.
- Jujutsu tracks conflicts at the commit level, not just in the working copy.
- Rebasing and reordering commits updates conflicts accordingly.

---

## Parallelizing Commits

- You can flatten multiple commits to be siblings (parallel branches).
- Merges and conflict states are updated automatically.

---

## Squashing Multiple Commits

- Use expressions to select multiple parent commits and squash them into the working copy.
- The working copy will reflect the sum of all changes, with conflicts resolved as needed.

---

## Google Integration

- Jujutsu is integrated with Google’s internal VCS.
- Commits, operations, and trees are stored in the cloud and fetched on demand.
- Local caching improves performance.

---

## Cloud-backed Storage

- Jujutsu uses pluggable storage backends.
- At Google, commits are stored in a database, not just Git objects.
- A local daemon handles caching and background syncing to the cloud.

---

## Performance at Scale

- Google’s monorepo has hundreds of millions of commits and millions of files.
- Jujutsu can:
  - List files matching patterns in seconds.
  - Diff large slices of history efficiently.
  - Access any commit from any repo or workspace.

---

## Universal Access

- All commits are available to everyone at Google.
- You can inspect, cherry-pick, or check out anyone’s commits from any repo.

---

## Summary

- Jujutsu is a Git-compatible VCS with a focus on improved UX and powerful features.
- Key innovations:
  - Working copy as a commit
  - Operation log
  - Structured conflict handling
  - Pluggable storage backends
- Scales to massive repositories and integrates with cloud storage.

---

## Thank You!

- Questions?
- [GitButler YouTube Channel](https://www.youtube.com/@GitButler)
- [Jujutsu on GitHub](https://github.com/martinvonz/jj)

---
