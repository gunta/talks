---
theme: default
background: '#020617'
class: text-white
highlighter: shiki
lineNumbers: false
info: |
  ## InstallTrust Score Deep Dive
  Quantifying software installation trust for ML engineers in Japan
  
  2025-09-29 InstallTrust Study Session
drawings:
  persist: false
transition: fade
routerMode: hash
title: InstallTrust Score Deep Dive
colorSchema: dark
fonts:
  sans: 'Noto Sans JP, Inter, system-ui'
  mono: 'JetBrains Mono, Fira Code'
---

<!-- Slide 1 -->
---
layout: cover
class: text-white backdrop-blur
---
<div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black"></div>
<div class="relative z-10 h-full flex flex-col justify-center items-center text-center space-y-6 px-8">
  <div class="text-sm tracking-[0.3em] uppercase text-blue-200/80">INSTALLTRUST SCORE</div>
  <h1 class="text-5xl md:text-6xl font-bold leading-tight drop-shadow-xl">
    ソフトウェアインストールの信頼度を可視化する
  </h1>
  <p class="text-xl md:text-2xl text-blue-100/90">
    Quantifying Installation Trust for Secure AI-Driven Development
  </p>
  <div class="flex flex-wrap justify-center items-center gap-6 text-base md:text-lg text-slate-200/90">
    <span class="inline-flex items-center gap-2"><mdi-account-badge-outline class="text-2xl" /> グンタ・ブルナー</span>
    <span class="inline-flex items-center gap-2"><mdi-domain class="text-2xl" /> サイバーエージェント AIドリブン推進室</span>
    <span class="inline-flex items-center gap-2"><mdi-calendar-month class="text-2xl" /> 2025年9月29日</span>
  </div>
</div>

<!-- Slide 2 -->
---
layout: center
class: text-left
---
<h2 class="text-4xl font-bold mb-6"><mdi-alert-decagram class="text-amber-400" /> なぜインストール方法の信頼度なのか？</h2>
<ul class="text-2xl space-y-4">
  <li><span class="font-semibold">Supply chain攻撃は2019年比で742%増加</span><span class="text-base text-slate-300 block">742% increase in supply chain attacks (2019-2023)</span></li>
  <li>AI/MCP開発では <span class="text-blue-300 font-semibold">常時新しいツールを導入</span> ⇒ インストール経路の安全性がそのままリスクになる</li>
  <li>「curl | sh」で済ませていませんか？ <span class="text-rose-400 font-semibold">InstallTrust Score 25/100</span></li>
</ul>

<!-- Slide 3 -->
---
layout: two-cols
class: text-white
---
# 自己紹介 <span class="text-slate-300 text-base">About Me</span>
<div class="space-y-4 text-lg leading-relaxed">
  <p class="flex items-center gap-2 text-xl"> <mdi-palette-outline class="text-2xl text-blue-300" /> 元グラフィックデザイナー → 開発者</p>
  <p><mdi-robot-industrial-outline class="text-2xl text-emerald-300" /> <span class="font-semibold">コードを書くより「仕組みを作る」ことが好き</span> —— ドキュメント、ガイドライン、評価指標</p>
  <p><mdi-pencil-ruler class="text-2xl text-amber-300" /> 研究者ではなく <span class="font-semibold">プロダクト視点で深掘りする人</span> としての知見共有</p>
  <p><mdi-rocket-launch-outline class="text-2xl text-purple-300" /> 現在: サイバーエージェント AIドリブン推進室 / Productivity Tech</p>
</div>

::right::
<div class="bg-white/10 rounded-3xl border border-white/10 p-6 flex flex-col gap-4 text-base">
  <div class="flex items-center gap-3 text-blue-100 text-lg"><mdi-lightbulb-on-outline class="text-3xl" /> <span>Paper Series 第1弾: InstallTrust Score</span></div>
  <ul class="space-y-2 text-slate-200">
    <li>👨‍💻 実務者だからこそ <span class="font-semibold">「すぐ使える安全指標」</span> を設計</li>
    <li>🧪 100種類のインストール方法を採点する未踏調査</li>
    <li>🌐 グローバル標準 (TUF, SLSA, in-toto) をローカライズ</li>
  </ul>
</div>

<!-- Slide 4 -->
---
layout: center
class: text-left
---
<h2 class="text-4xl font-bold mb-6 text-blue-100"><mdi-school-outline class="text-emerald-300" /> 研究者ではありません宣言</h2>
<p class="text-2xl text-slate-100 leading-relaxed">
  私は論文のプロではありません。<br/>
  <span class="font-bold text-blue-200">「現場で即役立つ安全なインストールのための地図」</span> を作るために、InstallTrust Scoreを設計しました。
</p>
<p class="text-base text-slate-300 mt-6">*I am a practitioner distilling research-grade rigor into practical guardrails.*</p>

<!-- Slide 5 -->
---
layout: two-cols
---
# ミッション <span class="text-slate-300 text-base">Mission of AIドリブン推進室</span>
<ul class="space-y-4 text-xl">
  <li><mdi-target class="text-emerald-300" /> エンジニア / 研究者の生産性を最大化</li>
  <li><mdi-shield-lock-outline class="text-blue-300" /> セキュアかつ再現性のある開発インフラを整備</li>
  <li><mdi-pipe-disconnected class="text-rose-300" /> MCP / AI エージェントが壊れない依存関係管理</li>
  <li><mdi-chart-timeline-variant-shimmer class="text-amber-300" /> ベストプラクティスを <span class="font-semibold">指標とストーリー</span> に落とし込む</li>
</ul>
::right::
<div class="bg-gradient-to-br from-slate-900/60 to-blue-900/40 border border-white/10 rounded-2xl p-6 text-lg leading-7">
  <p class="font-semibold text-blue-100">InstallTrust Paper Series</p>
  <ol class="list-decimal list-inside space-y-2 text-slate-200 text-base">
    <li>InstallTrust Score —— 本日のテーマ</li>
    <li>Secure MCP Pipelines —— 近日公開</li>
    <li>Enterprise AI Toolchains —— 2026年以降</li>
  </ol>
</div>

<!-- Slide 6 -->
---
layout: center
class: text-left
---
<h2 class="text-4xl font-bold mb-6"><mdi-order-bool-descending-variant class="text-purple-300" /> 今日の流れ</h2>
<ol class="grid md:grid-cols-2 gap-4 text-lg">
  <li class="bg-white/5 border border-white/10 rounded-2xl p-4">1. InstallTrust Scoreとは？<br/><span class="text-slate-300 text-sm">What & why</span></li>
  <li class="bg-white/5 border border-white/10 rounded-2xl p-4">2. 脅威モデルと評価軸<br/><span class="text-slate-300 text-sm">Threat model</span></li>
  <li class="bg-white/5 border border-white/10 rounded-2xl p-4">3. プラットフォーム別分析<br/><span class="text-slate-300 text-sm">Platform findings</span></li>
  <li class="bg-white/5 border border-white/10 rounded-2xl p-4">4. 実務での活かし方<br/><span class="text-slate-300 text-sm">Practical playbook</span></li>
</ol>

<!-- Slide 7 -->
---
layout: center
class: text-left
---
<h2 class="text-4xl font-bold mb-6"><mdi-timeline-alert-outline class="text-rose-300" /> サプライチェーン攻撃タイムライン 2020-2024</h2>
<div class="space-y-4 text-lg">
  <p class="text-slate-300">SolarWinds → Codecov → Kaseya → Log4Shell → XZ Utils → CrowdStrike outage...</p>
  <div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-base leading-6 text-slate-200">
    <strong>Graph:</strong> Supply chain incident count by year (bar chart, 2019-2024, showing 742% growth).<br/>
    <span class="text-slate-400">Include annotations for SolarWinds (2020), XZ Utils (2024), CrowdStrike (2024).</span>
  </div>
</div>

<!-- Slide 8 -->
---
layout: center
class: text-left
---
<h2 class="text-4xl font-bold mb-6"><mdi-cpu-64-bit class="text-emerald-300" /> なぜML開発者が気にするべきか</h2>
<ul class="text-xl space-y-4">
  <li>AI/MCPスタックは <span class="font-semibold text-blue-200">常に新しい依存を追加</span> —— モデル、CLI、拡張、ドライバ</li>
  <li>一つの危険なインストールで <span class="text-rose-300 font-semibold">秘密鍵・学習データ・顧客情報</span> が流出</li>
  <li>InstallTrust Scoreは <span class="text-emerald-300 font-semibold">即参照できる指標</span> を提供</li>
</ul>
<p class="text-base text-slate-400 mt-4">*Secure installation paths are table stakes for reproducible ML pipelines.*</p>

<!-- Slide 9 -->
---
layout: center
class: text-left
---
<h2 class="text-4xl font-bold mb-6"><mdi-shield-search-outline class="text-blue-300" /> InstallTrust Scoreとは？</h2>
<p class="text-2xl text-slate-100 leading-relaxed">
  プラットフォームを問わず <span class="font-semibold">ソフトウェアインストール方法の信頼度を0-100で定量化</span> するための枠組み。
</p>
<ul class="mt-6 text-lg space-y-3">
  <li>100通りのインストール手法 × 8プラットフォームを比較</li>
  <li>6つの評価基準: Integrity / Review / Provenance / Least-Privilege / Update / Distribution</li>
  <li>SLSA/TUF/in-totoと整合するスコアリング</li>
</ul>

<!-- Slide 10 -->
---
layout: center
class: text-left
---
<h2 class="text-4xl font-bold mb-4"><mdi-function-variant class="text-purple-300" /> スコア計算式</h2>
<p class="text-lg text-slate-300 mb-4">重み付き平均により総合得点を算出し、閾値で評価ランクを決定します。</p>
<div class="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
  <p class="text-2xl">$$
  \text{InstallTrust}(m) = \sum_{i=1}^{6} w_i \cdot s_i(m), \quad \sum w_i = 1
  $$</p>
  <p class="text-lg text-slate-300 mt-4">$$
  w = [0.25, 0.25, 0.15, 0.15, 0.10, 0.10]
  $$</p>
</div>
<p class="text-base text-slate-400 mt-4 text-right">*Weights optimized via sensitivity analysis (paper §3.5).* </p>

<!-- Slide 11 -->
---
layout: two-cols
---
# 6つの評価基準 <span class="text-slate-300 text-base">Six Trust Factors</span>
<ul class="space-y-3 text-lg">
  <li><mdi-shield-check-outline class="text-emerald-300" /> Integrity Verification (25%)</li>
  <li><mdi-account-cog-outline class="text-blue-300" /> Code Review & CI/CD (25%)</li>
  <li><mdi-source-branch-check class="text-purple-300" /> Provenance Tracking (15%)</li>
  <li><mdi-key-chain-variant class="text-amber-300" /> Least-Privilege Installation (15%)</li>
  <li><mdi-update class="text-teal-300" /> Update Security (10%)</li>
  <li><mdi-server-security class="text-rose-300" /> Distribution Infrastructure (10%)</li>
</ul>
::right::
<div class="bg-white/5 border border-white/10 rounded-2xl p-5 text-base text-slate-200 leading-6">
  <strong>Graph:</strong> Hexagon radar chart comparing App Store (98), Nix (94), curl|sh (25).<br/>
  <span class="text-slate-400">Use radar vertices for each factor to visualize strength gaps.</span>
</div>

<!-- Slide 12 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-blue-100 mb-4">評価対象のスコープ</h2>
<ul class="grid md:grid-cols-2 gap-4 text-lg">
  <li class="bg-white/5 border border-white/10 rounded-2xl p-4">100種類のインストール手法</li>
  <li class="bg-white/5 border border-white/10 rounded-2xl p-4">8つの主要プラットフォーム</li>
  <li class="bg-white/5 border border-white/10 rounded-2xl p-4">42名のセキュリティ専門家ヒアリング</li>
  <li class="bg-white/5 border border-white/10 rounded-2xl p-4">2019-2024年のインシデント分析</li>
</ul>
<p class="text-base text-slate-400 mt-4">*Data sources: vendor docs, CVE trend analysis, platform telemetry (paper §4.1).* </p>

<!-- Slide 13 -->
---
layout: center
class: text-left
---
<h2 class="text-4xl font-bold mb-6"><mdi-bug-outline class="text-rose-300" /> 脅威モデルの全体像</h2>
<div class="bg-white/5 border border-white/10 rounded-3xl p-6 text-base text-slate-200 leading-7">
  <strong>Diagram:</strong> Five-phase supply chain threat flow (Development → Build → Distribution → Installation → Update) with representative attack vectors.<br/>
  <span class="text-slate-400">Highlight known incidents: SolarWinds (build), XZ Utils (distribution), CrowdStrike (update).</span>
</div>

<!-- Slide 14 -->
---
layout: two-cols
---
# Threat Taxonomy
<ul class="space-y-3 text-lg">
  <li><mdi-source-branch-alert class="text-emerald-300" /> 開発時: commit hijack, dependency confusion</li>
  <li><mdi-hammer-wrench class="text-blue-300" /> ビルド時: CIへの侵入、署名鍵窃取</li>
  <li><mdi-cloud-alert class="text-purple-300" /> 配信時: CDN差し替え、DNSハイジャック</li>
  <li><mdi-download-lock class="text-amber-300" /> インストール時: 権限昇格、installer改ざん</li>
  <li><mdi-update-alert class="text-rose-300" /> 更新時: アップデートトロイ化</li>
</ul>
::right::
<div class="bg-rose-500/10 border border-rose-500/40 rounded-2xl p-4 text-base text-rose-100">
  <strong>Key Insight:</strong> インストール時は <span class="font-semibold">ユーザー権限が最大化</span> する瞬間。<br/>InstallTrust Scoreはこの瞬間のリスクにフォーカス。
</div>

<!-- Slide 15 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-blue-100 mb-4">プラットフォーム別セキュリティモデル</h2>
<p class="text-lg text-slate-200 mb-4">Mobile vs Desktop vs Container vs Specialized</p>
<div class="bg-white/5 border border-white/10 rounded-2xl p-5 text-base text-slate-200 leading-6">
  <strong>Table:</strong> Summary matrix with columns = Platform category, Baseline controls, Trust floor, User freedom.<br/>
  <span class="text-slate-400">Populate with: iOS (High floor, Low freedom), Android (Moderate floor, Changing freedom), Windows (Low floor, High freedom), macOS (High floor, Mixed), Linux (Wide variance).</span>
</div>

<!-- Slide 16 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-emerald-200 mb-4">Fragmentation Problem</h2>
<ul class="text-lg space-y-3">
  <li>同じプラットフォームでも <span class="font-semibold">80ポイントの差</span> (iOS: App Store 98 vs Jailbreak 15)</li>
  <li>開発/検証/本番の環境差異が <span class="text-rose-300">攻撃面を拡大</span></li>
  <li>「方法の選択」が最大のリスク要因</li>
</ul>
<p class="text-base text-slate-400 mt-4">*Key finding: Method selection outweighs platform selection (paper §4.2).* </p>

<!-- Slide 17 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-amber-200 mb-4">Methodology Gap</h2>
<p class="text-lg text-slate-200 mb-4">既存基準 (SLSA/TUF) は「開発プロセス」を評価する一方、<span class="font-semibold text-blue-200">エンドユーザーのインストール選択を評価する指標が不足</span>。</p>
<ul class="text-lg space-y-2">
  <li>アプリストア以外の自主管理領域に空白</li>
  <li>企業ポリシーは感覚ベース → 実装がバラバラ</li>
</ul>

<!-- Slide 18 -->
---
layout: two-cols
---
# InstallTrust Scoreの貢献
<ul class="space-y-3 text-lg">
  <li><mdi-chart-donut class="text-blue-300" /> 全プラットフォームで比較可能な 0-100 スコア</li>
  <li><mdi-scale-balance class="text-emerald-300" /> 重み付き評価でセキュリティ要素を可視化</li>
  <li><mdi-table-large class="text-amber-300" /> 100手法 × 6基準の採点データセット</li>
  <li><mdi-certificate-outline class="text-purple-300" /> 2026年Android新制度の影響を予測</li>
</ul>
::right::
<div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-slate-200 leading-6">
  <strong>Deliverables:</strong>
  <ul class="list-disc list-inside text-sm text-slate-300 space-y-1 mt-2">
    <li>Score calculator (GitHub - internal)</li>
    <li>Policy templates for enterprise rollout</li>
    <li>Visual assets for security awareness</li>
  </ul>
</div>

<!-- Slide 19 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-blue-100 mb-4">評価プロセス</h2>
<ol class="space-y-3 text-lg">
  <li><span class="font-semibold">データ収集:</span> 公式ドキュメント、CVE、ヒアリング</li>
  <li><span class="font-semibold">スコアリング:</span> 6基準へ定量マッピング (paper Table 2)</li>
  <li><span class="font-semibold">検証:</span> 重みの感度分析 / 専門家レビュー</li>
</ol>
<p class="text-base text-slate-400 mt-4">*See §3.5 for weight optimization method (L-BFGS with constraints).* </p>

<!-- Slide 20 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-purple-100 mb-4">スコア分布の全体像</h2>
<div class="bg-white/5 border border-white/10 rounded-2xl p-5 text-base text-slate-200 leading-6">
  <strong>Graph:</strong> Box plot per platform (iOS, Android, Windows, macOS, Linux, BSD, Container, Emerging).<br/>
  <span class="text-slate-400">Use paper Figure §4.3 data. Emphasize Windows variance and BSD high median.</span>
</div>

<!-- Slide 21 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-emerald-200 mb-4">トップ vs ボトム</h2>
<div class="bg-white/5 border border-white/10 rounded-2xl p-5 text-lg leading-6">
  <p class="font-semibold text-blue-200 mb-3">上位スコア (90+)</p>
  <ul class="list-disc list-inside space-y-1 text-slate-200 text-base">
    <li>iOS App Store 98</li>
    <li>macOS Nix 93</li>
    <li>Nix/NixOS 94</li>
    <li>OpenBSD pkg_add 96 (paper supplemental)</li>
  </ul>
  <p class="font-semibold text-rose-200 mt-4 mb-3">下位スコア (30以下)</p>
  <ul class="list-disc list-inside space-y-1 text-slate-200 text-base">
    <li>iOS Jailbreak 15</li>
    <li>Windows PowerShell unsigned script 20</li>
    <li>Linux curl|sh 25</li>
    <li>Unknown Android store 30</li>
  </ul>
</div>

<!-- Slide 22 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-amber-100 mb-4">キーインサイト</h2>
<p class="text-2xl text-slate-100 leading-relaxed">
  <span class="font-semibold text-blue-200">「プラットフォームより手法」</span> —— LinuxのNix (94) の方が、macOSの未署名スクリプト (43) より遥かに安全。
</p>
<p class="text-base text-slate-400 mt-4">*Method choice can swing trust by 70+ points on the same device.* </p>

<!-- Slide 23 -->
---
layout: two-cols
---
# iOS ハイライト
<ul class="space-y-3 text-lg">
  <li>平均スコア: <span class="font-semibold text-blue-200">73 (High Trust)</span></li>
  <li>App Store: 98 / TestFlight: 92</li>
  <li>EU代替ストア (DMA対応): 74</li>
  <li>Jailbreak: 15 (Trust Floor)</li>
</ul>
::right::
<div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-slate-200">
  <strong>Graph:</strong> Horizontal bar chart of iOS methods (paper Table 3).<br/>
  <span class="text-slate-400">Highlight DMA impact: -24 points for Epic Store EU vs App Store.</span>
</div>

<!-- Slide 24 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-blue-100 mb-4">iOS ベストプラクティス</h2>
<ul class="text-lg space-y-3">
  <li><span class="font-semibold text-emerald-300">App Storeのみ</span>を基本にする (98)</li>
  <li>ベータはTestFlightへ限定 (92)</li>
  <li>構成プロファイル配布は最小限＆監査 (45)</li>
  <li>Jailbreak環境への導入は禁止 (15)</li>
</ul>
<p class="text-base text-slate-400 mt-4">*Enterprise distribution requires hardened MDM enforcement.* </p>

<!-- Slide 25 -->
---
layout: two-cols
---
# Android 現状 (2025)
<ul class="space-y-3 text-lg">
  <li>平均スコア: <span class="font-semibold text-emerald-300">64 (Moderate)</span></li>
  <li>Play Store: 85 / F-Droid: 76</li>
  <li>Direct APK: 55 / Unknown store: 30</li>
  <li>Galaxy Store, Amazon Storeは80前後</li>
</ul>
::right::
<div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-slate-200 leading-6">
  <strong>Graph:</strong> Radar or grouped bar comparing curated stores vs sideloading.<br/>
  <span class="text-slate-400">Note F-Droid reproducible builds scoring high despite third-party status.</span>
</div>

<!-- Slide 26 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-amber-100 mb-4">Android 2026年9月の大転換</h2>
<div class="bg-white/5 border border-white/10 rounded-2xl p-5 text-base text-slate-200 leading-7">
  <strong>Table:</strong> Pre vs Post 2026 InstallTrust scores (Play Store +3, Direct APK +13, Unverified APK → 0).<br/>
  <span class="text-slate-400">Add annotation “Verified developer requirement” from paper §4.2.3.</span>
</div>
<p class="text-base text-rose-200 mt-4">自由度が犠牲になりつつ、最小信頼度が30 → 45へ上昇。</p>

<!-- Slide 27 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-rose-100 mb-4">Security vs Freedom</h2>
<ul class="text-lg space-y-3">
  <li><span class="font-semibold text-emerald-300">Security Gains:</span> 開発者実名登録、マルウェア70-80%削減予測</li>
  <li><span class="font-semibold text-rose-300">Freedom Losses:</span> 匿名アプリ完全排除、プライバシーアプリ萎縮</li>
  <li>Custom ROMが新たな回避ルートに</li>
</ul>
<p class="text-base text-slate-400 mt-4">*Policy implication: need parallel governance for custom ROM ecosystems.* </p>

<!-- Slide 28 -->
---
layout: two-cols
---
# Windows ハイライト
<ul class="space-y-3 text-lg">
  <li>平均スコア: <span class="font-semibold text-amber-200">63</span></li>
  <li>Microsoft Store: 88 / winget: 82</li>
  <li>MSIX (署名済み): 78</li>
  <li>Unsigned PowerShell: 20 (ワースト)</li>
</ul>
::right::
<div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-slate-200">
  <strong>Graph:</strong> Column chart highlighting legacy vs modern packaging (paper Table 4).
</div>

<!-- Slide 29 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-amber-100 mb-4">Windows ベストプラクティス</h2>
<ul class="text-lg space-y-3">
  <li>MS Store / winget を標準導線に (88 / 82)</li>
  <li>MSIXパッケージを採用し最小権限化</li>
  <li>Chocolatey/Scoopは <span class="font-semibold">社内リポジトリで署名運用</span></li>
  <li>Unsigned EXE / PowerShellは禁止 (35 / 20)</li>
</ul>

<!-- Slide 30 -->
---
layout: two-cols
---
# macOS ハイライト
<ul class="space-y-3 text-lg">
  <li>平均スコア: <span class="font-semibold text-blue-200">71</span></li>
  <li>Mac App Store: 95 / Nix: 93 / Homebrew Core: 89</li>
  <li>curl|sh (開発者): 43 / (サードパーティ): 18</li>
</ul>
::right::
<div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-slate-200 leading-6">
  <strong>Graph:</strong> Waterfall or bar chart showing trust cliff from Mac App Store to curl|sh.
</div>

<!-- Slide 31 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-rose-100 mb-4">curl | sh 問題の本質</h2>
<div class="bg-rose-500/10 border border-rose-500/40 rounded-2xl p-5 text-base text-rose-100 leading-7">
  <p>Integrity: 8, Review: 0, Provenance: 15, Least-Privilege: 6, Update: 6, Distribution: 8 —— 合計43 (開発者)。</p>
  <p class="mt-3">再配布されたスクリプトはさらに <span class="font-semibold">18ポイントまで低下</span>。macOSの安全性を自ら壊している。</p>
</div>
<p class="text-base text-slate-400 mt-4">*Action: replace with signed Homebrew formula or notarized pkg.* </p>

<!-- Slide 32 -->
---
layout: two-cols
---
# Linux ハイライト
<ul class="space-y-3 text-lg">
  <li>平均スコア: <span class="font-semibold text-emerald-200">69</span></li>
  <li>Nix/NixOS: 94 / Debian apt: 91 / Flatpak: 85</li>
  <li>AUR: 65 / Binary tarball: 45 / curl|sh: 25</li>
</ul>
::right::
<div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-slate-200">
  <strong>Graph:</strong> Stacked bars for distribution types vs trust levels (paper Table 5).
</div>

<!-- Slide 33 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-emerald-200 mb-4">Linux 信頼度の支柱</h2>
<ul class="text-lg space-y-3">
  <li><span class="font-semibold text-blue-200">Reproducible builds</span> (Nix, Guix) で Integrity 全振り</li>
  <li>Official repoは <span class="font-semibold">SLSA L2</span> を達成</li>
  <li>Community (AUR/PPA) はレビューと署名でギリギリ</li>
  <li>Script配布は <span class="text-rose-300">InstallTrust 25</span> → 監査必須</li>
</ul>

<!-- Slide 34 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-purple-200 mb-4">新興プラットフォーム</h2>
<ul class="text-lg space-y-3">
  <li>ChromeOS Web Store: 92 (L3 equivalent)</li>
  <li>Meta Quest Store: 88</li>
  <li>WASM/WASI: 85 —— <span class="text-emerald-300 font-semibold">サンドボックスが強い</span></li>
  <li>Blockchain/IPFS配信: 78 —— Provenance強いがReview弱い</li>
</ul>
<p class="text-base text-slate-400 mt-4">*Opportunity: codify trust requirements before ecosystem explodes.* </p>

<!-- Slide 35 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-blue-100 mb-4">クロスプラットフォーム比較</h2>
<div class="bg-white/5 border border-white/10 rounded-2xl p-5 text-base text-slate-200 leading-6">
  <strong>Graph:</strong> Multi-platform violin plot (paper Figure §4.3) showing variance; annotate “Trust gap” between best & worst method on each platform.
</div>

<!-- Slide 36 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-emerald-200 mb-4">スコアとインシデント率</h2>
<div class="bg-white/5 border border-white/10 rounded-2xl p-5 text-base text-slate-200 leading-6">
  <strong>Graph:</strong> Log-scale scatter showing InstallTrust score vs incident count (paper §5.2).<br/>
  <span class="text-slate-400">Regression trend: Every +10 points ⇒ 約10倍の攻撃成功率低下。</span>
</div>

<!-- Slide 37 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-blue-100 mb-4">MLパイプラインでの適用</h2>
<ul class="text-lg space-y-3">
  <li>モデル実行環境 (Docker, Nix, Conda) のInstallTrust評価</li>
  <li>GPUドライバ配布経路の検証 (NVIDIA pkg vs ベンダーサイト)</li>
  <li>社内パッケージ (Wheel, npm) への署名とCI証跡</li>
</ul>
<p class="text-base text-slate-400 mt-4">*Mandate InstallTrust ≥ 80 for production inference stack.* </p>

<!-- Slide 38 -->
---
layout: two-cols
---
# 実務チェックリスト
<ul class="space-y-3 text-lg">
  <li><span class="font-semibold text-emerald-300">記録する:</span> インストール経路とSLSAレベル</li>
  <li><span class="font-semibold text-blue-300">比較する:</span> 代替手法のInstallTrust</li>
  <li><span class="font-semibold text-amber-300">合意する:</span> チーム内の最低スコア基準</li>
  <li><span class="font-semibold text-rose-300">監査する:</span> スクリプト/バイナリ配布の署名</li>
</ul>
::right::
<div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-slate-200">
  <strong>Template:</strong> InstallTrust runbook entry (method, score, maintainer, renewal cadence).
</div>

<!-- Slide 39 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-blue-200 mb-4">企業ポリシーへの落とし込み</h2>
<ol class="text-lg space-y-3">
  <li>基準値設定: 本番環境 80+, 開発環境 60+</li>
  <li>例外承認プロセス: 署名付きリスク説明 + 代替策</li>
  <li>継続モニタリング: 6ヶ月ごとのスコア再評価</li>
</ol>
<p class="text-base text-slate-400 mt-4">*Adopt InstallTrust sections into security baseline documents.* </p>

<!-- Slide 40 -->
---
layout: two-cols
---
# InstallTrust導入ロードマップ
<ol class="space-y-3 text-lg list-decimal list-inside">
  <li>現状インベントリ作成 (方法 × スコア)</li>
  <li>ハイリスク経路の置換計画策定</li>
  <li>CI/CDにスコアチェックを組み込み</li>
  <li>ユーザー教育とガバナンス整備</li>
</ol>
::right::
<div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-slate-200 leading-6">
  <strong>Graph:</strong> Timeline with milestones (Q4 2025 inventory, Q1 2026 remediation, Q2 2026 automation).
</div>

<!-- Slide 41 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-purple-200 mb-4">InstallTrustと他基準の統合</h2>
<ul class="text-lg space-y-3">
  <li>SLSAレベルと <span class="font-semibold">InstallTrust >= 80</span> を相互参照</li>
  <li>TUFメタデータ → Provenanceスコアを直接改善</li>
  <li>in-totoチェーン署名 → Review/CI証跡を付与</li>
</ul>
<p class="text-base text-slate-400 mt-4">*See paper §2.3 for mapping matrix.* </p>

<!-- Slide 42 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-emerald-200 mb-4">将来予測</h2>
<ul class="text-lg space-y-3">
  <li>AndroidとiOSは2026年以降 <span class="font-semibold">Trust Floorが収束 (72 vs 73)</span></li>
  <li>デスクトップは <span class="font-semibold">企業スコアリング</span> で改善余地が最大</li>
  <li>OSSコミュニティは <span class="text-blue-200">再現ビルド × 署名</span> に投資が必要</li>
</ul>

<!-- Slide 43 -->
---
layout: two-cols
---
# 今後の研究課題
<ul class="space-y-3 text-lg">
  <li><mdi-cog-sync-outline class="text-blue-300" /> InstallTrust自動評価ツール</li>
  <li><mdi-chart-areaspline class="text-emerald-300" /> リアルタイム脅威インテリジェンスとの連携</li>
  <li><mdi-account-group-outline class="text-amber-300" /> コミュニティベースのレビュー基盤</li>
</ul>
::right::
<div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-slate-200 leading-6">
  <strong>Roadmap:</strong> 2026年 InstallTrust SaaS、2027年 Industry benchmark report。
</div>

<!-- Slide 44 -->
---
layout: center
class: text-left
---
<h2 class="text-4xl font-bold text-blue-100 mb-6">Call to Action</h2>
<ul class="text-2xl space-y-3">
  <li><span class="font-semibold text-emerald-300">自分の環境のInstallTrustを測定</span></li>
  <li>チームへ共有し、最低基準を合意</li>
  <li>ハイリスクな経路を今週中に1つ置き換える</li>
</ul>
<p class="text-base text-slate-300 mt-4">*Check your InstallTrust Score before installing the next tool.*</p>

<!-- Slide 45 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-emerald-100 mb-4">次に読むべきリソース</h2>
<ul class="text-lg space-y-3">
  <li>InstallTrust Paper (英語版・日本語版)</li>
  <li>Android 開発者検証アップデート (2025/08/26)</li>
  <li>SLSA v1.0 / TUF / in-toto 公式ドキュメント</li>
  <li>社内: InstallTrustポリシーテンプレート</li>
</ul>

<!-- Slide 46 -->
---
layout: center
class: text-left
---
<h2 class="text-4xl font-bold text-blue-100 mb-6">まとめ</h2>
<ul class="text-2xl space-y-4">
  <li>InstallTrust Scoreは <span class="font-semibold">インストール経路の健康診断</span></li>
  <li>方法の選択が最大のセキュリティレバー</li>
  <li>今すぐ測定し、80ポイントを目指そう</li>
</ul>

<!-- Slide 47 -->
---
layout: center
class: text-left
---
<h2 class="text-5xl font-bold text-emerald-200 mb-6">ありがとうございました</h2>
<p class="text-xl text-slate-200">ご質問どうぞ！<span class="text-base text-slate-400 ml-2">Questions welcome.</span></p>

<!-- Slide 48 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-blue-100 mb-4">Backup: スコアカテゴリの定義</h2>
<div class="bg-white/5 border border-white/10 rounded-2xl p-5 text-base text-slate-200 leading-6">
  <strong>Table:</strong> Score bands (90-100 = Mission Critical, 75-89 = Recommended, 50-74 = Caution, &lt;50 = Block). Include Japanese descriptions.
</div>

<!-- Slide 49 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-emerald-100 mb-4">Backup: 例外承認フォーム</h2>
<div class="bg-white/5 border border-white/10 rounded-2xl p-5 text-base text-slate-200 leading-6">
  <strong>Form Layout:</strong> Method, Current score, Compensating controls, Expiry date.<br/>
  <span class="text-slate-400">Use for temporary allowances below threshold.</span>
</div>

<!-- Slide 50 -->
---
layout: center
class: text-left
---
<h2 class="text-3xl font-semibold text-blue-100 mb-4">Backup: 参考文献</h2>
<ul class="text-base space-y-2 text-slate-200">
  <li>InstallTrust Score: Universal Trust Metrics for Software Installation (2025)</li>
  <li>Forrester 2024 AppSec Trends / Gartner 2024 Supply Chain Security</li>
  <li>Google Android Developer Program Verification (2025)</li>
  <li>XZ Utils Backdoor Analysis (2024) / CrowdStrike Outage Report (2024)</li>
</ul>
