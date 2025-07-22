
# **Jujutsu and Google: An Analysis of a Strategic Open-Source Symbiosis**

## **Executive Summary: Deconstructing the Jujutsu-Google Relationship**

The version control system (VCS) Jujutsu, also known as jj, presents a nuanced case study in modern corporate open-source strategy. The central finding of this analysis is that while Jujutsu is not an official "Google Product" in a commercial or legal sense, it is fundamentally a **Google-led, Google-resourced, and Google-governed** open-source project. This distinction is deliberate and strategic. The project's genesis, development trajectory, and future roadmap are inextricably linked to Google's strategic interests in modernizing its internal developer tooling, particularly for its massive-scale monorepo, Piper.

The evidence supporting this conclusion is multifaceted:

* **Creator and Team:** The project was initiated and is led by Martin von Zweigbergk, a Google engineer. It has evolved from his "20% project" into his full-time role, supported by a team of other Google engineers, indicating a direct and significant investment of company resources.1  
* **Strategic Goal:** Jujutsu is the designated successor to "Fig," Google's internal Mercurial-based client. It is being architected with a specific, planned backend for Piper, Google's primary internal monorepo, demonstrating its critical role in Google's future engineering infrastructure.2  
* **Governance and Control:** The project is governed through the mandatory Google Contributor License Agreement (CLA) and is hosted in a Google-owned GitHub organization. This legal and administrative framework grants Google ultimate control over contributions and the project's direction.1

The persistent disclaimer that Jujutsu is "not a Google product" can be understood as a standard corporate open-source strategy. This phrasing manages public expectations regarding official support and commercial liability while allowing Google to reap the benefits of community-driven development, attract talent, and de-risk the creation of a critical internal tool.

For the purpose of a presentation at a Google event, it is essential to convey this nuanced reality. Presenting Jujutsu requires acknowledging its powerful open-source features and community while being transparent about the deep, strategic, and financial investment from Google that underpins and drives the entire project.

## **The Genesis of Jujutsu: From Hobby Project to Strategic Tool**

### **The Creator: Martin von Zweigbergk's Foundational Role**

The creation and design philosophy of Jujutsu are deeply rooted in the specific professional history of its author, Martin von Zweigbergk. He is a Swedish software engineer currently employed by Google in Mountain View, CA, where his work focuses on source control systems.7 His career includes a significant tenure at Google, a period at Ericsson, and a subsequent return to Google, where he has been deeply involved with version control technology.4

His expertise is not merely theoretical; it is forged from direct, hands-on experience with the dominant VCS paradigms at an industrial scale. Between 2010 and 2013, he was a contributor to the Git project, specifically working to clean up the notoriously complex git rebase codebase.4 More recently, his work at Google has involved "Fig," which is explicitly described as "Mercurial as a client for Google's internal monorepo".4 This background provides him with a unique and expert perspective on the practical strengths and weaknesses of both Git's powerful but often unforgiving model and Mercurial's more user-friendly but potentially less performant approach, especially within the demanding context of Google's infrastructure.

It is critical to clarify that Martin von Zweigbergk, the software engineer, is a distinct individual from another person of the same name, Martin 'Franke' von Zweigbergk, who is a prominent figure in the professional poker and festival organization community.9 This report is concerned exclusively with the Google engineer and creator of Jujutsu.

The design of Jujutsu is not an arbitrary exercise but a direct intellectual product of its creator's specific career. It represents a deliberate synthesis, attempting to combine the perceived best elements of different systems—such as Git's data model and Mercurial's user experience—while directly addressing the pain points he personally worked on and the architectural challenges he faced. The complexity of git rebase and the performance limitations of scaling Mercurial for Google's monorepo are not abstract problems for him; they are the professional challenges that have defined his recent career. Jujutsu, therefore, can be seen as the tangible output of this unique expertise, designed to solve problems he understands intimately.

### **The Problem Space: Why the World Needs Another VCS (According to Google)**

Jujutsu's development addresses two distinct but related sets of problems: the general usability issues inherent in Git and the specific, monumental challenges of version control at Google's scale.

For the broader developer community, Jujutsu aims to solve the well-documented shortcomings of Git. These include a steep learning curve, a frequently confusing command-line interface, and fragile, error-prone processes for complex but common operations like history rewriting (rebasing) and resolving merge conflicts.11 A primary source of this confusion is the concept of the "index" or "staging area," a mandatory intermediate step between the working directory and a commit. Jujutsu eliminates this concept entirely, aiming for a simpler and more intuitive user experience.2

However, the more pressing driver behind Jujutsu's core architecture is the specific pain of development at Google's scale. The company's engineering history saw an evolution from CVS to Perforce and ultimately to a custom-built, centralized monorepo named Piper. The sheer size of Piper—one of the largest codebases in the world—created its own set of problems, necessitating further layers of tooling like "Client in the Cloud" (CitC) and, eventually, a Mercurial-based client called Fig to provide developers with familiar DVCS-style workflows (e.g., stacked commits).4

Even Fig, however, encountered performance and consistency issues when interfacing with the monorepo.4 Jujutsu is being engineered from the ground up to overcome these limitations. Its architecture, written in the performance-oriented language Rust, is explicitly designed to support large monorepos through features like lazy data fetching, which avoids downloading unnecessary history or files.2 Furthermore, its abstract storage model is intentionally designed to accommodate "hybrid systems like Google's cloud-based design, Piper/CitC," making it a purpose-built solution for Google's unique infrastructure.5 A presentation by von Zweigbergk on the Fig system explicitly identifies switching to

jj as the "Next step" in this evolutionary path.4 Thus, while Jujutsu offers compelling benefits to individual developers, its core architectural decisions and performance targets are driven by the extreme requirements of Google's engineering environment. It is less about replacing Git for the entire world and more about creating a tool that does not buckle under the immense strain of Google's internal software development lifecycle.

## **A Technical Primer on Jujutsu's Innovations**

### **The Core Paradigm Shift: Everything is a Commit**

The most fundamental departure Jujutsu takes from Git is the complete elimination of the index, or staging area. In its place, Jujutsu introduces a paradigm where the user's working copy is always represented as a real, albeit special, commit.2 Any change made to a file on disk is not in a liminal state waiting to be staged; it is immediately and automatically part of this "working-copy commit."

This design radically simplifies the developer's mental model. Instead of juggling three distinct states—the working directory, the staging area, and the commit history—the user only needs to think about a unified history of commits.11 This creates a pleasing symmetry in the command-line interface. Commands that operate on historical commits, such as

jj diff to see changes or jj describe to edit a commit message, work identically on the current working copy because it is, itself, a commit.13 The traditional

git add and git commit ceremony is replaced by a much simpler workflow. When the user is satisfied with the state of their working-copy commit, they simply run jj new to finalize it and begin work on a new, empty commit on top of it.2

### **Fearless Development: Undo, Safe History Rewriting, and First-Class Conflicts**

Jujutsu is designed to make development safer and more flexible, particularly when it comes to correcting mistakes and managing complex histories.

* **The Universal Safety Net:** Every operation that modifies the repository's history—a rebase, a commit, an amendment—is recorded in an operation log. The jj op log command allows a user to view this log, and the simple jj undo command can revert any previous operation. This provides a universal safety net that is far more intuitive and robust than Git's reflog, which is powerful but often considered obscure by many users.14  
* **Ergonomic History Manipulation:** Where Git requires the complex and often intimidating interactive rebase (git rebase \-i) for most history editing, Jujutsu provides a suite of direct and powerful commands. These include jj split to break a single commit into multiple commits, jj move to transfer changes between any two commits, and jj amend to squash changes into a parent commit.2 This power is amplified by Jujutsu's automatic rebasing of descendant commits. For example, fixing a typo in an old commit becomes a trivial operation: the user checks out the old commit, edits the file, and  
  jj automatically handles the work of rebasing all subsequent commits on top of the corrected version.13  
* **Revolutionary Conflict Resolution:** Jujutsu's handling of merge conflicts is perhaps its most innovative feature. In Git, a merge conflict is a blocking event; it halts the merge or rebase process and forces the user to resolve the conflict immediately before proceeding. Jujutsu takes a different approach by treating conflicts as first-class objects that can be stored within a commit's metadata.2 This means a merge or rebase will always "succeed," even if it results in conflicts. The outcome is simply a new commit that contains a representation of the conflict. The user can then address this conflict at their convenience. Once resolved, the resolution is automatically propagated to any descendant commits, saving significant time and effort compared to Git's manual, repetitive conflict resolution process.12

### **Git Compatibility: The Bridge to the Ecosystem**

Despite its radical new features, Jujutsu is designed for pragmatic adoption. For the foreseeable future, it is best understood not as a replacement for Git, but as a highly advanced alternative interface or frontend that sits on top of Git.11 It is explicitly not a fork of the Git project.16

The default and "production-ready" storage backend for Jujutsu is a standard Git repository.2 It uses modern Git libraries like

gitoxide to interact directly with the underlying .git directory and its objects.5 This architecture ensures full compatibility with the vast existing Git ecosystem. Users can use

jj locally and still push their changes to services like GitHub. Collaborators who continue to use standard Git commands will be entirely unaffected and will likely not even be aware that a team member is using Jujutsu.5

To facilitate this, Jujutsu offers a "colocation mode." By initializing a repository with jj git init \--colocate, users can have both the .jj and .git directories in their project, allowing jj and git commands to be used interchangeably on the same repository. This provides a seamless, low-risk adoption path for developers and teams.12

### **Table 3.1: Git vs. Jujutsu: A Feature and Philosophy Comparison**

| Feature/Philosophy | Git (The Established Paradigm) | Jujutsu (The New Paradigm) |
| :---- | :---- | :---- |
| **Staging Area** | Explicit git add required to stage changes. | None; changes are automatically part of the working-copy commit. |
| **Working Copy** | Separate from commit history; a "dirty" state. | Is a real commit, always tracked in the history. |
| **Saving Work** | git commit command. | jj new to start a new commit; edits are saved automatically. |
| **History Editing** | git rebase \-i (complex, risky, multi-step process). | jj split, jj move, jj amend (direct, ergonomic commands). |
| **Conflict Handling** | Halts operation; must be resolved immediately. | Stored as first-class objects in commits; can be resolved anytime. |
| **Undo Mechanism** | git reflog (powerful but obscure and less comprehensive). | jj undo (simple, universal, tracks all repo operations). |
| **Branching Model** | Named pointers to commits are central to the workflow. | Anonymous by default; names are optional labels for commits. |

This table synthesizes comparative data from sources 2, and.11

## **The Anatomy of the Google Connection: A Multi-faceted Analysis**

### **Direct Investment and Resource Allocation: From "20% Time" to Full-Time Team**

The trajectory of Jujutsu within Google serves as a clear indicator of its strategic importance. The project began in late 2019 as a personal hobby project for Martin von Zweigbergk, which he also pursued as part of Google's well-known "20% time" policy—a program that allows engineers to dedicate a portion of their work hours to innovative side projects.1

The critical development occurred when the project transitioned from this exploratory phase to an officially sanctioned and resourced initiative. Martin von Zweigbergk has stated that Jujutsu has since "evolved into my full-time project at Google," and he is now "paid by Google to work on the project".1 This is a significant milestone. Moving a project from 20% time to a full-time, funded role requires managerial approval and budget allocation, which is typically granted only when a project demonstrates clear alignment with strategic priorities and a potential return on investment.

Furthermore, the project is no longer a solo endeavor. It is now supported by "several other Googlers" who assist in its development.1 This signifies the formation of an official, albeit small, team within Google dedicated to Jujutsu. This path—from a 20% project to a fully funded team—is a classic internal incubation pattern at Google, responsible for some of its most successful products. This trajectory is the most unambiguous signal of Google's strategic commitment and direct financial investment in Jujutsu's success.

### **Strategic Alignment and Internal Integration: The Path to Piper**

Jujutsu's open-source development is not occurring in a vacuum; it is strategically aligned with Google's internal engineering needs. A 2023 presentation by Martin von Zweigbergk on Fig, Google's current Mercurial-based client for its monorepo, explicitly lists the "Next step" as switching to jj.4 This is direct, public evidence of Jujutsu's intended role as the successor to existing internal tooling. This plan is corroborated by external reporting, which confirms that

jj is intended to replace Fig.3

The very design of Jujutsu is tailored for this purpose. The project's official documentation states its architecture is suitable for "hybrid systems like Google's cloud-based design, Piper/CitC".5 There are explicit plans to extend Jujutsu with a dedicated backend for Google's internal cloud-based storage system.2 This is not an afterthought but a core design consideration. Public presentations, such as the one at Git Merge 2022, were explicitly about Jujutsu's design and "our plans for the project at Google," further cementing this connection.18

This open-source development model serves as a strategic means to an internal end. The public, Git-compatible version of Jujutsu acts as a large-scale, real-world testbed. It allows Google to build, debug, and harden the core logic of the tool with the help of a global community. This process effectively de-risks the final, critical deployment of Jujutsu as a core piece of Google's internal engineering infrastructure. The pluggable backend architecture is key to this strategy, allowing Google to perfect the core user experience and algorithms in the open (with the Git backend) while simultaneously developing the proprietary internal backend for Piper.

### **Governance and Control: The Google CLA and Project Ownership**

The legal and administrative framework governing Jujutsu provides the most formal evidence of Google's control. All contributions to the project, whether from external developers or Google employees, "must be accompanied by a Contributor License Agreement" (CLA).6 This is not optional; it is the official Google CLA, hosted at

cla.developers.google.com, and is a prerequisite for participation.6

The function of this CLA is to give Google the legal certainty it needs to use the contributed code. The agreement specifies that while contributors retain the copyright to their work, they grant Google a broad, perpetual, and irrevocable license "to use and redistribute your contributions as part of the project".6 This is the essential legal mechanism that allows Google to incorporate community-developed code into its own systems, including proprietary internal tools, without encountering licensing conflicts or intellectual property disputes.3

The requirement of a Google-specific CLA has been a point of contention within the project's community, with some contributors advocating for a move to a neutral third-party foundation (like the Linux Foundation or Apache) to ensure more distributed governance.1 However, after internal discussions with "stakeholders at Google," the official decision was made to maintain the Google CLA and keep the project under the Google-controlled

jj-vcs GitHub organization.1 This refusal to relinquish control underscores the project's strategic importance to Google. Further signs of the project's origins include the initial

LICENSE file, which used boilerplate for a "new Google open source project," and the AUTHORS file, which originally listed "Google LLC" as the copyright holder before being changed to "The Jujutsu Authors".5 The CLA is not merely a bureaucratic hurdle; it is the fundamental legal instrument that enables and protects the project's primary strategic value to Google.

### **The "Not a Google Product" Paradox: A Study in Corporate Open-Source Strategy**

Across numerous platforms—from the official GitHub README to discussion forums and package documentation—Martin von Zweigbergk consistently and explicitly states, "this is not a Google product".1 This statement appears to stand in stark contrast to the overwhelming evidence: the project is led and staffed by full-time Google employees, funded by Google, governed by Google's legal agreements, and is strategically destined for Google's internal infrastructure.

The resolution to this paradox lies in the specific definition of a "Google Product." Terms like Google Search, Android, or Google Cloud Platform are designated as official products, which carries specific commercial and legal implications. These include official support channels, Service Level Agreements (SLAs), dedicated marketing budgets, and certain liabilities to customers. By disclaiming this "product" status for Jujutsu, Google is making a precise strategic distinction. It is positioning Jujutsu as an open-source *project* that it sponsors and leads, rather than a commercial *product* that it sells and officially supports.

This disclaimer is a deliberate and sophisticated communications strategy, common in the world of corporate open source. It allows Google to maximize the benefits of open development—such as community engagement, diverse feedback, and a wider talent pool—while simultaneously minimizing the obligations and liabilities associated with a commercial product. It effectively manages community expectations, limits legal exposure, and gives Google the flexibility to guide the project according to its own internal needs without being contractually beholden to the support demands of every external user. This statement is not a denial of Google's deep involvement; rather, it is a careful definition of the *type* of involvement.

## **Conclusion and Presentation Talking Points**

Jujutsu represents a sophisticated and modern model of corporate-led open-source development. It is a project where a major technology company, Google, acts as the primary patron, investor, and strategic beneficiary. The open-source model is leveraged as a highly efficient and powerful research and development methodology. It allows for the collaborative creation and hardening of a tool that is ultimately destined to become a critical piece of internal infrastructure, de-risking the development process and tapping into a global pool of talent. The relationship is symbiotic: the community receives a powerful, innovative, and free tool, while Google receives a purpose-built solution for its unique, industrial-scale engineering challenges.

The following points are designed to be used directly in a presentation to a Google audience, providing a nuanced and accurate summary of the project's status and its relationship with the company.

* "Jujutsu was created by Google engineer Martin von Zweigbergk, an expert who has worked on both Git's rebase command and Google's internal version control systems. The project is the culmination of this unique experience."  
* "While it started as a '20% project,' Jujutsu is now Martin's full-time role at Google, with a team of other Googlers contributing. This represents a significant and direct investment from Google in the project's success."  
* "It's crucial to understand that while Jujutsu is an open-source tool that anyone can use, its development is strategically aligned with Google's internal needs. It's the designated successor to our 'Fig' client and is being built to work directly with our Piper monorepo."  
* "The official line is that Jujutsu is 'not a Google product.' This is a strategic distinction. It means that while Google leads and funds the project, it's not a commercial offering with official support SLAs. This is a common and smart way Google engages with the open-source community."  
* "The project's governance is handled through the standard Google open-source framework, including a mandatory Google Contributor License Agreement. This ensures that all contributions can be safely and legally integrated back into Google's internal systems, which is the project's primary strategic goal."  
* "From a technical standpoint, Jujutsu offers a radical simplification over Git by eliminating the staging area and treating the working copy as a commit. Features like a universal undo and first-class conflict management are designed to solve common developer frustrations, especially at scale."

#### **Works cited**

1. Governance: Remove Google CLA requirement · jj-vcs jj ... \- GitHub, accessed July 22, 2025, [https://github.com/martinvonz/jj/discussions/4849](https://github.com/martinvonz/jj/discussions/4849)  
2. Jujutsu: a new, Git-compatible version control system \- LWN.net, accessed July 22, 2025, [https://lwn.net/Articles/958468/](https://lwn.net/Articles/958468/)  
3. Jujutsu: a new, Git-compatible version control system \- LWN.net, accessed July 22, 2025, [https://lwn.net/Articles/958814/](https://lwn.net/Articles/958814/)  
4. Mercurial at Google \- Mercurial Paris Conferences, accessed July 22, 2025, [https://mercurial.paris/download/Mercurial%20at%20Google.pdf](https://mercurial.paris/download/Mercurial%20at%20Google.pdf)  
5. jj-vcs/jj: A Git-compatible VCS that is both simple and powerful \- GitHub, accessed July 22, 2025, [https://github.com/jj-vcs/jj](https://github.com/jj-vcs/jj)  
6. Guidelines and "How to...?" \- Jujutsu docs, accessed July 22, 2025, [https://jj-vcs.github.io/jj/latest/contributing/](https://jj-vcs.github.io/jj/latest/contributing/)  
7. The creator, Martin von Zweigbergk, is Swedish. I learned to know him when we both went to the same church in Stockholm, before he moved to California and started working at Google. \- Per Persson \- Medium, accessed July 22, 2025, [https://medium.com/@md2perpe/the-creator-martin-von-zweigbergk-is-swedish-c91fc400bec8](https://medium.com/@md2perpe/the-creator-martin-von-zweigbergk-is-swedish-c91fc400bec8)  
8. Martin von Zweigbergk @martinvonz \- GitHub, accessed July 22, 2025, [https://github.com/martinvonz](https://github.com/martinvonz)  
9. Martin von Zweigbergk \- Hendon Mob Poker Database, accessed July 22, 2025, [https://pokerdb.thehendonmob.com/player.php?a=r\&n=127430](https://pokerdb.thehendonmob.com/player.php?a=r&n=127430)  
10. Martin 'Franke' von Zweigbergk – Force behind The Festival, accessed July 22, 2025, [https://www.thefestival.com/martin-franke-von-zweigbergk](https://www.thefestival.com/martin-franke-von-zweigbergk)  
11. Git and Jujutsu: The next evolution in version control systems \- InfoVision, accessed July 22, 2025, [https://www.infovision.com/blog/git-and-jujutsu-next-evolution-version-control-systems](https://www.infovision.com/blog/git-and-jujutsu-next-evolution-version-control-systems)  
12. Jujutsu: The Future of Version Control | Medium, accessed July 22, 2025, [https://medium.com/@shrmtv/jujutsu-150945f97753](https://medium.com/@shrmtv/jujutsu-150945f97753)  
13. Tech Notes: The Jujutsu version control system \- neugierig.org, accessed July 22, 2025, [https://neugierig.org/software/blog/2024/12/jujutsu.html](https://neugierig.org/software/blog/2024/12/jujutsu.html)  
14. Jujutsu VCS Introduction and Patterns \- Kuba Martin, accessed July 22, 2025, [https://kubamartin.com/posts/introduction-to-the-jujutsu-vcs/](https://kubamartin.com/posts/introduction-to-the-jujutsu-vcs/)  
15. Introducing Jujutsu: A Modern Alternative to Git | by Mayuresh K \- Medium, accessed July 22, 2025, [https://mskadu.medium.com/introducing-jujutsu-a-modern-alternative-to-git-32bb8b7fadd9](https://mskadu.medium.com/introducing-jujutsu-a-modern-alternative-to-git-32bb8b7fadd9)  
16. Jujutsu is not a Google product. Jujutsu is not a fork of anything, so upstreami... | Hacker News, accessed July 22, 2025, [https://news.ycombinator.com/item?id=39236831](https://news.ycombinator.com/item?id=39236831)  
17. jujutsu 0.7.1 \- Docs.rs, accessed July 22, 2025, [https://docs.rs/crate/jujutsu/latest](https://docs.rs/crate/jujutsu/latest)  
18. Jujutsu: A Git-Compatible VCS \- Git Merge 2022 \- YouTube, accessed July 22, 2025, [https://www.youtube.com/watch?v=bx\_LGilOuE4](https://www.youtube.com/watch?v=bx_LGilOuE4)  
19. jujutsu \- crates.io: Rust Package Registry, accessed July 22, 2025, [https://crates.io/crates/jujutsu](https://crates.io/crates/jujutsu)  
20. I'm daily driving Jujutsu, and maybe you should too \- Hacker News, accessed July 22, 2025, [https://news.ycombinator.com/item?id=42380306](https://news.ycombinator.com/item?id=42380306)