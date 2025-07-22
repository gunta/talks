---
# Why Google Stores Billions of Lines of Code in a Single Repository
#### Rachel Potvin, Google | @Scale 2015

---

## Introduction

- Overview of Google’s source control management strategy
- Why use a single, monolithic repository (“monorepo”)?
- Outline: scale, systems, workflows, advantages, trade-offs

---

## Speaker & Background

- Rachel Potvin, Engineering Manager at Google
- Previously in the video game industry
- Fascinated by Google’s single-repo model since joining

---

## The Monolithic Repository at Google

- One giant, shared codebase for nearly all Google projects
- About 95% of Google engineers use this repository
- Possibly the largest single repository in the world

---

## Repository Scale: Numbers

- ~1 billion files (includes deleted files, release branch copies)
- ~35 million commits in history (as of January snapshot)
- 45,000 commits per workday (average)
- Billions of file read requests daily
- QPS (queries per second): ~800,000 peak, ~500,000 average

---

## Growth Over Time

- Exponential increase in both size and rate of change
- 2004 (Gmail launch) barely visible on growth graph
- Significant investments in tooling to sustain growth

---

## Usage Patterns

- Highly used and modified: 45,000 daily commits
- Consistency and performance are key for thousands of global users
- Most traffic from Google’s distributed build and test systems

---

## Human vs. Automated Commits

- Early years: most commits by humans
- After switch from Perforce to custom system (Piper): automated commits dominate
- Both human and robot use cases are critical
- Regular dips in commit graph correspond to holidays (even robots “take holidays”)

---

## Perspective: Linux Kernel Comparison

- Linux kernel: ~15 million lines of code
- Google: 15 million lines modified every week by humans

---

## What is a Monolithic Repository?

- Single, central repository for all code, configs, docs, data
- Developers create personal workspaces for changes
- Code review required before committing
- Most developers can view/propose changes anywhere

---

## Code Ownership and Review

- Tree structure: each directory has owners
- Owners approve changes in their directories
- Automated analysis and testing at every stage
- System can automatically roll back problematic changes

---

## Piper and CitC

- **Piper**: custom system hosting the monolithic repo
  - Built on standard Google infrastructure, globally replicated
  - Uses caching and async operations to optimize latency
- **CitC (Clients in the Cloud)**: cloud-based file system overlay
  - Developers see personal changes overlaid on full repo
  - No need to clone or sync state locally

---

## Developer Workflow

- Seamless code browsing, building, and editing
- Snapshots allow recovery and support automated tooling
- Developers can change machines/tools and retain workspace state
- Only modified files are stored in personal workspace

---

## Custom Tools at Google

- **Critique**: code review tool
- **Code Search**: semantic code browsing and history
- **Tricorder**: static analysis system (suggests fixes, coverage, quality)
- **Tap**: automated test infrastructure (defends against breaking changes)
- **Rosie**: manages large-scale code changes (splits patches, automates review & submit)

---

## Trunk-Based Development

- All developers work from “head” (latest code)
- Branching is rare (mainly for releases)
- Feature flags control code paths for new/old features
- Single, consistent view of codebase
- Release branches: snapshot from trunk + cherry-picks

---

## Advantages of a Monolithic Repository

- Unified versioning and single source of truth
- Extensive code sharing and reuse (libraries, utilities)
- Simplified dependency management (no “diamond dependency” problem)
- Atomic changes: large-scale refactoring possible in single commits
- Collaboration across teams (fix bugs in other teams’ code)
- Flexible team boundaries and code ownership
- Easier reasoning about code relationships and dependencies

---

## Unified Source of Truth

- No confusion about authoritative file versions
- Easy to depend on other teams’ code
- Fluid team boundaries and easy refactoring
- Entire history of projects remains intact

---

## Simplified Dependency Management

- All code versioned together; only one version of truth
- Avoids “diamond dependency” problem:
  - Example: A depends on B and C; B and C depend on D, but on different versions
  - In monorepo, all dependencies updated atomically
- No technical debt from outdated dependencies
- Changes to base libraries instantly propagate through dependency chain

---

## Atomic Changes

- Major changes can touch thousands of files in one commit
- Enables large-scale refactoring and modernization
- Example: renaming a class/function across entire repo in a single consistent operation

---

## Codebase Modernization

- Centralized teams can update codebase-wide (e.g., half a million call sites)
- Compiler team enforces new standards, fixes patterns, and can block problematic code
- Old APIs can be safely removed after all callers migrate

---

## Disadvantages and Trade-Offs

- Heavy investment in tooling required (code review, analysis, test infra, refactoring)
- Codebase complexity can be challenging (hard to understand/maintain)
- Easy to add dependencies, which can cause issues (dependency bloat, binary size, abandoned projects)
- Need for strong code health practices

---

## Managing Code Health

- Tools to find/remove dead or underutilized code (Code Search shows dead code layer)
- Tools to find/remove unneeded dependencies, identify candidates for refactoring
- API visibility defaults to private (since 2011), must be explicitly marked for cross-team use
- Structures in place to prevent unwanted dependencies and encourage hygienic dependency graphs

---

## Rosie and Large-Scale Changes

- Rosie automates large-scale code changes and distributes review
- As Rosie’s usage grew, controls were added to prevent unnecessary churn
- Review committee ensures value of changes outweighs review cost
- Some changes submitted as single atomic changes; some rejected or redirected

---

## When Does This Model Work?

- Best for open, collaborative cultures
- Not suitable where code must be private between groups
- Google’s investment has enabled scaling to 1B files, 35M commits, 45,000 daily commits

---

## Conclusion

- Monolithic model not for everyone
- Google continues to invest in scalability and code health
- Model has enabled global collaboration and rapid growth
- With investment, this model can scale to massive size and change rate

---

## Further Reading

- Paper by Rachel Potvin and Josh Levenberg: “Why Google Stores Billions of Lines of Code in a Single Repository” (Communications of the ACM, 2016)

---

## Thank You

- Questions?
- Watch the full talk: [YouTube Link](https://www.youtube.com/watch?v=W71BTkUbdqE)

---