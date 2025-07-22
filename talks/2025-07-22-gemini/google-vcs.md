---
# Why Google Stores Billions of Lines of Code in a Single Repository
### Rachel Potvin, Google

---

## Introduction

- Overview of Google’s source control management strategy
- Why use a single, monolithic repository?
- Outline of talk: scale, systems, workflows, advantages, and trade-offs

---

## About the Speaker

- Rachel Potvin, Engineering Manager at Google
- Background in video game industry
- Fascinated by Google’s single-repo model since joining

---

## The Monolithic Repository at Google

- Google uses one giant, shared codebase
- 95% of engineers use this repository
- Possibly the largest single repo in the world

---

## Scale of Google’s Repository

- ~1 billion files (including deleted and branched files)
- 35 million commits in history
- 45,000 commits per workday
- Billions of file read requests daily
- QPS: 800,000 peak, 500,000 average

---

## Growth Over Time

- Exponential increase in size and rate of change
- 2004 (Gmail launch) barely visible on growth graph
- Significant investments in tooling to sustain growth

---

## Usage Patterns

- High volume of commits and file reads
- Consistency and performance are critical
- Distributed build and test systems drive most traffic

---

## Human vs. Automated Commits

- Early years: most commits by humans
- After custom source control system: automated commits dominate
- Both human and robot use cases are key

---

## Comparison: Linux Kernel

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
- Problematic changes can be rolled back automatically

---

## Piper and CitC

- Piper: custom system hosting the monolithic repo
- Globally replicated, optimized for latency
- CitC (Clients in the Cloud): cloud-based file system overlay
- Developers see personal changes overlaid on full repo

---

## Developer Workflow

- No need to clone or sync state locally
- Seamless code browsing, building, and editing
- Snapshots allow recovery and support automated tooling

---

## Custom Tools at Google

- Critique: code review tool
- Code Search: semantic code browsing and history
- Tricorder: static analysis system
- Tap: automated test infrastructure
- Rosie: tool for managing large-scale code changes

---

## Trunk-Based Development

- All developers work from “head” (latest code)
- Branching is rare (mainly for releases)
- Feature flags control code paths
- Single, consistent view of codebase

---

## Advantages of a Monolithic Repository

- Unified versioning and single source of truth
- Extensive code sharing and reuse
- Simplified dependency management
- Atomic changes (large-scale refactoring possible)
- Collaboration across teams
- Flexible team boundaries and code ownership
- Easier reasoning about code relationships

---

## Single Source of Truth

- No confusion about authoritative file versions
- Easy to depend on other teams’ code
- Fluid team boundaries and easy refactoring

---

## Simplified Dependency Management

- All code versioned together
- Avoids “diamond dependency” problem
- Updates to libraries propagate instantly
- No technical debt from outdated dependencies

---

## Atomic Changes

- Major changes can touch thousands of files in one commit
- Enables large-scale refactoring and modernization

---

## Codebase Modernization

- Centralized teams can update codebase-wide
- Compiler team can enforce new standards and fix patterns
- Old APIs can be safely removed

---

## Disadvantages and Trade-Offs

- Heavy investment in tooling required
- Codebase complexity can be challenging
- Need for strong code health practices

---

## Tooling Investment

- Custom tools for code review, analysis, testing, refactoring
- Trade-off between tool cost and user benefit

---

## Codebase Complexity

- Large codebase can be hard to understand and maintain
- Easy to add dependencies, which can cause issues
- Risk of unnecessary or abandoned dependencies

---

## Managing Dependencies

- Tools to find/remove dead or underutilized code
- API visibility defaults to private to encourage hygiene
- Structures in place to prevent unwanted dependencies

---

## Rosie and Large-Scale Changes

- Rosie automates large-scale code changes
- Review committee ensures value outweighs review cost
- Controls in place to prevent unnecessary churn

---

## When Monorepos Work

- Best for open, collaborative cultures
- Not suitable where code must be private between groups
- Google’s investment has enabled scaling to 1B files, 35M commits

---

## Conclusion

- Monolithic model not for everyone
- Google continues to invest in scalability
- Model has enabled global collaboration and rapid growth

---

## Further Reading

- Paper by Rachel Potvin and Josh Levenberg in Communications of the ACM (2015)

---

## Thank You

- Questions?
- [@Scale YouTube Channel](https://www.youtube.com/@Scale)

---