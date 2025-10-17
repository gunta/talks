# InstallTrust Presentation
## ソフトウェアインストールセキュリティの統一信頼メトリクス

A 20-minute presentation about the InstallTrust Score framework, designed for Japanese ML engineers and researchers.

## About the Presentation

- **Duration**: 20 minutes  
- **Slides**: 56 slides
- **Language**: Japanese (with English subtitles)
- **Target Audience**: Japanese ML engineers/researchers
- **Context**: First paper in a series about security and trust in software installation
- **Call to Action**: Looking for research collaborators on AI Coding Agents, MCP, and DELTA

## Key Topics Covered

1. **Introduction & Context**
   - Speaker introduction
   - Move to AIドリブン推進室
   - Mission to maximize engineer/researcher productivity

2. **The Problem**
   - 742% increase in supply chain attacks
   - Major incidents (SolarWinds, XZ Utils, CrowdStrike)
   - Platform fragmentation

3. **InstallTrust Framework**
   - 6 scoring criteria (0-100 scale)
   - Mathematical foundation
   - Platform comparisons

4. **Android 2026 Revolution**
   - End of anonymous app distribution
   - Developer verification requirements
   - Platform convergence with iOS

5. **Practical Implications**
   - Organization implementation (5 phases)
   - Platform-specific recommendations
   - Methods to avoid (score < 30)

6. **Research Collaboration & DELTA**
   - Call for research collaborators
   - AI Coding Agents and MCP research opportunities
   - Introduction to DELTA paper (Dynamic Evaluation & Learning Through Adaptation)
   - Why DELTA matters for AI agent development

## How to Run

```bash
# Install dependencies
npm install @slidev/cli @slidev/theme-default

# Run the presentation
npx slidev talks/2025-09-29-installtrust/slides.md

# Build for production
npx slidev build talks/2025-09-29-installtrust/slides.md

# Export to PDF
npx slidev export talks/2025-09-29-installtrust/slides.md --format pdf
```

## Key Messages

1. **方法 > プラットフォーム** - Installation method matters more than platform
2. **10ポイント = 10倍安全** - Every 10-point increase = order of magnitude safer
3. **2026年 = モバイル統一** - Mobile platforms converge in 2026
4. **curl | sh = 自殺行為** - Score 18 methods endanger entire organizations
5. **高信頼方法は既に存在** - High-trust methods already exist on every platform

## Visual Features

- Interactive Mermaid diagrams
- Animated gradients and transitions
- Platform-specific color coding
- Trust score visualizations
- Japanese/English bilingual content

## InstallTrust Calculator Tool

### 🎯 Calculate Your Score Today!
**GitHub Repository**: https://github.com/code-agents/installtrust

- Open-source tool for calculating InstallTrust scores
- CLI tool: `npx installtrust check`
- Full methodology documentation
- API for automation and CI/CD integration

## Paper Details

Based on the research paper: **"InstallTrust Score: A Unified Trust Metric for Software Installation Security Across All Computing Platforms"**

- Analyzes 100 installation methods across 8 platform categories
- Reveals trust gaps of up to 83 points within the same platform
- Documents Android's 2026 paradigm shift
- Demonstrates correlation between trust scores and compromise rates

## Contact

**Günther Brunner**  
株式会社サイバーエージェント AIドリブン推進室  
gunther_brunner@cyberagent.co.jp

---

*This is the first in a series of security research papers aimed at helping engineers and researchers make better security decisions.*
