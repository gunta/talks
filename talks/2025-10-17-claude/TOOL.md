# InstallTrust Calculator Tool

## 🎯 Official Repository
**https://github.com/code-agents/installtrust**

## About the Tool

The InstallTrust Calculator is an open-source tool that implements the InstallTrust Score framework to evaluate the security of software installation methods across all platforms.

## Features

### 📊 Instant Scoring
- Calculate trust scores for any installation method
- Support for all major platforms (Windows, macOS, Linux, iOS, Android, BSD, Container, IoT)
- Real-time security assessment

### 🔍 Method Analysis
- Detailed breakdown of the 6 scoring criteria
- Identify specific weaknesses in installation methods
- Compare multiple methods side-by-side

### 📈 Improvement Recommendations
- Get actionable suggestions to improve scores
- Platform-specific best practices
- Migration paths from low-trust to high-trust methods

## Installation

### NPM Package
```bash
npm install -g @code-agents/installtrust
```

### NPX (No Installation)
```bash
npx installtrust check
```

## Usage Examples

### Check Current Platform
```bash
installtrust check
```

### Analyze Specific Method
```bash
installtrust score "homebrew"
installtrust score "curl | sh" --verbose
```

### Compare Methods
```bash
installtrust compare "homebrew" "macports" "nix"
```

### Get Recommendations
```bash
installtrust recommend --platform macos --min-score 75
```

### CI/CD Integration
```yaml
# GitHub Actions
- name: Check Installation Security
  run: npx installtrust check --min-score 75 --fail-on-low
```

## API Usage

```javascript
const { calculateScore } = require('@code-agents/installtrust');

const score = await calculateScore({
  method: 'homebrew',
  platform: 'macos'
});

console.log(`Trust Score: ${score.total}/100`);
console.log(`Breakdown:`, score.criteria);
```

## Scoring Criteria

The tool evaluates 6 key criteria:

1. **Integrity Verification (25%)** - Signatures, hashes, certificates
2. **Code Review/CI (25%)** - Automated and human review processes
3. **Provenance Tracking (15%)** - Build reproducibility, SBOM
4. **Least-Privilege (15%)** - Sandboxing, permissions
5. **Update Security (10%)** - Signed updates, rollback protection
6. **Distribution Infrastructure (10%)** - Repository security, CDN

## Platform Support

- ✅ Windows (MS Store, Chocolatey, Scoop, WinGet, etc.)
- ✅ macOS (Mac App Store, Homebrew, MacPorts, Nix, etc.)
- ✅ Linux (APT, YUM, Snap, Flatpak, Nix, etc.)
- ✅ iOS (App Store, TestFlight, Enterprise, etc.)
- ✅ Android (Play Store, F-Droid, APK, etc.)
- ✅ BSD Systems (ports, pkg, etc.)
- ✅ Containers (Docker, Kubernetes, etc.)
- ✅ IoT/Embedded (firmware, OTA, etc.)

## Contributing

We welcome contributions! Please see the [GitHub repository](https://github.com/code-agents/installtrust) for:
- Contributing guidelines
- Issue tracker
- Development roadmap
- Documentation

## Research Paper

This tool is based on the research paper:
**"InstallTrust Score: A Unified Trust Metric for Software Installation Security Across All Computing Platforms"**

By Günther Brunner, CyberAgent AI-Driven Division

## License

MIT License - Free for commercial and non-commercial use

## Contact

- **GitHub Issues**: https://github.com/code-agents/installtrust/issues
- **Email**: gunther_brunner@cyberagent.co.jp
- **Research Collaboration**: Open to collaborators for future research

---

*Make every installation decision a security decision.*
