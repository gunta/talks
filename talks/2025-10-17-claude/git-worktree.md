## Run parallel sessions with Git worktrees

Suppose you need to work on multiple tasks simultaneously with complete code isolation between Gemini instances.

1. **Understand Git worktrees**

Git worktrees allow you to check out multiple branches from the same repository into separate directories. Each worktree has its own working directory with isolated files, while sharing the same Git history. Learn more in the official Git worktree documentation.

2. **Create a new worktree**

1. Run Claude Code in each worktree
```sh
# Create a new worktree with a new branch 
git worktree add ../project-feature-a -b feature-a

# Or create a worktree with an existing branch
git worktree add ../project-bugfix bugfix-123

This creates a new directory with a separate working copy of your repository.

# Navigate to your worktree 
cd ../project-feature-a

# Run Gemini in this isolated environment
gemini

2. Run Claude in another worktree
```sh
cd ../project-bugfix
gemini
```

## Tips
 • Each worktree has its own independent file state, making it perfect for parallel Claude Code sessions
 • Changes made in one worktree won’t affect others, preventing Gemini instances from interfering with each other
 • All worktrees share the same Git history and remote connections
 • For long-running tasks, you can have Claude working in one worktree while you continue development in another
 • Use descriptive directory names to easily identify which task each worktree is for
 • Remember to initialize your development environment in each new worktree according to your project’s setup. Depending on your stack, this might include:
 ▫ JavaScript projects: Running dependency installation (‎`npm install`, ‎`yarn`)
 ▫ Python projects: Setting up virtual environments or installing with package managers