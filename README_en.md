# Skill Atlas

**107 ready-to-use Claude Skills covering AI agents, dev, writing, research, social media, and more.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Skills](https://img.shields.io/badge/Skills-107-blue)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[中文](README.md) · [Contribute a Skill](CONTRIBUTING.md) · [Skill Spec](SKILL_SPEC.md)

---

## What is a Claude Skill?

A Skill is a structured instruction file (`SKILL.md`) that tells Claude how to handle a specific type of task. Once installed, Claude **automatically recognizes** when to apply it — no manual triggering required.

**What this repo does**: collects, curates, and maintains high-quality Skill files so you can copy and use them directly — no need to write from scratch.

---

## Quick Start

**Claude Code** (recommended):

```bash
cp -r skills/devops/code-review ~/.claude/skills/
claude
```

**Claude.ai**: Open any Skill directory → download `SKILL.md` → click 🧩 in your conversation to upload.

**API**: Pass the contents of `SKILL.md` as the `system` prompt.

---

## Skills

### 🤖 AI & Agent (14)

[agent-memory](skills/ai-agent/agent-memory/) · [agent-reach](skills/ai-agent/agent-reach/) · [agent-team-orchestration](skills/ai-agent/agent-team-orchestration/) · [agentic-eval](skills/ai-agent/agentic-eval/) · [claude-api](skills/ai-agent/claude-api/) · [developer-growth-analysis](skills/ai-agent/developer-growth-analysis/) · [eval-harness](skills/ai-agent/eval-harness/) · [exa-search](skills/ai-agent/exa-search/) · [langsmith-fetch](skills/ai-agent/langsmith-fetch/) · [mcp-builder](skills/ai-agent/mcp-builder/) · [prompt-engineering-patterns](skills/ai-agent/prompt-engineering-patterns/) · [rag-implementation](skills/ai-agent/rag-implementation/) · [skill-creator](skills/ai-agent/skill-creator/) · [subagent-driven-development](skills/ai-agent/subagent-driven-development/)

### ⚙️ DevOps (29)

[api-design-principles](skills/devops/api-design-principles/) · [architecture-patterns](skills/devops/architecture-patterns/) · [artifacts-builder](skills/devops/artifacts-builder/) · [backend-patterns](skills/devops/backend-patterns/) · [changelog-generator](skills/devops/changelog-generator/) · [clean-content-fetch](skills/devops/clean-content-fetch/) · [code-review](skills/devops/code-review/) · [coding-standards](skills/devops/coding-standards/) · [computer-use](skills/devops/computer-use/) · [debug-pro](skills/devops/debug-pro/) · [docker-essentials](skills/devops/docker-essentials/) · [e2e-testing](skills/devops/e2e-testing/) · [frontend-patterns](skills/devops/frontend-patterns/) · [git-essentials](skills/devops/git-essentials/) · [microservices-patterns](skills/devops/microservices-patterns/) · [modern-javascript-patterns](skills/devops/modern-javascript-patterns/) · [nextjs-app-router-patterns](skills/devops/nextjs-app-router-patterns/) · [postgresql-table-design](skills/devops/postgresql-table-design/) · [python-design-patterns](skills/devops/python-design-patterns/) · [python-performance-optimization](skills/devops/python-performance-optimization/) · [python-testing-patterns](skills/devops/python-testing-patterns/) · [react-state-management](skills/devops/react-state-management/) · [security-auditor](skills/devops/security-auditor/) · [sql-toolkit](skills/devops/sql-toolkit/) · [tdd-workflow](skills/devops/tdd-workflow/) · [typescript-advanced-types](skills/devops/typescript-advanced-types/) · [using-git-worktrees](skills/devops/using-git-worktrees/) · [vue-best-practices](skills/devops/vue-best-practices/) · [webapp-testing](skills/devops/webapp-testing/)

### ✍️ Writing (16)

[ai-humanizer](skills/writing/ai-humanizer/) · [article-illustrator](skills/writing/article-illustrator/) · [article-writing](skills/writing/article-writing/) · [content-research-writer](skills/writing/content-research-writer/) · [content-strategy](skills/writing/content-strategy/) · [copy-editing](skills/writing/copy-editing/) · [copywriting](skills/writing/copywriting/) · [format-markdown](skills/writing/format-markdown/) · [infographic-generator](skills/writing/infographic-generator/) · [internal-comms](skills/writing/internal-comms/) · [investor-materials](skills/writing/investor-materials/) · [investor-outreach](skills/writing/investor-outreach/) · [launch-strategy](skills/writing/launch-strategy/) · [marketing-psychology](skills/writing/marketing-psychology/) · [pricing-strategy](skills/writing/pricing-strategy/) · [viral-writer](skills/writing/viral-writer/)

### 🔬 Research (11)

[academic-paper](skills/research/academic-paper/) · [academic-paper-reviewer](skills/research/academic-paper-reviewer/) · [academic-pipeline](skills/research/academic-pipeline/) · [competitive-ads-extractor](skills/research/competitive-ads-extractor/) · [data-analysis](skills/research/data-analysis/) · [deep-research](skills/research/deep-research/) · [deep-research-pro](skills/research/deep-research-pro/) · [lead-research-assistant](skills/research/lead-research-assistant/) · [market-research](skills/research/market-research/) · [programmatic-seo](skills/research/programmatic-seo/) · [seo-audit](skills/research/seo-audit/)

### 📱 Social Media (7)

[content-engine](skills/social-media/content-engine/) · [crosspost](skills/social-media/crosspost/) · [post-to-wechat](skills/social-media/post-to-wechat/) · [post-to-x](skills/social-media/post-to-x/) · [twitter-algorithm-optimizer](skills/social-media/twitter-algorithm-optimizer/) · [x-api](skills/social-media/x-api/) · [xhs-images](skills/social-media/xhs-images/)

### 📄 Document (14)

[algorithmic-art](skills/document/algorithmic-art/) · [brand-guidelines](skills/document/brand-guidelines/) · [canvas-design](skills/document/canvas-design/) · [comic-creator](skills/document/comic-creator/) · [cover-image](skills/document/cover-image/) · [docx](skills/document/docx/) · [fal-ai-media](skills/document/fal-ai-media/) · [frontend-slides](skills/document/frontend-slides/) · [image-gen](skills/document/image-gen/) · [markdown-to-html](skills/document/markdown-to-html/) · [pdf](skills/document/pdf/) · [slide-deck](skills/document/slide-deck/) · [slidev](skills/document/slidev/) · [theme-factory](skills/document/theme-factory/)

### 🗂️ Productivity (15)

[brainstorming](skills/productivity/brainstorming/) · [compress-image](skills/productivity/compress-image/) · [domain-name-brainstormer](skills/productivity/domain-name-brainstormer/) · [file-organizer](skills/productivity/file-organizer/) · [image-enhancer](skills/productivity/image-enhancer/) · [invoice-organizer](skills/productivity/invoice-organizer/) · [meeting-insights-analyzer](skills/productivity/meeting-insights-analyzer/) · [raffle-winner-picker](skills/productivity/raffle-winner-picker/) · [readgzh](skills/productivity/readgzh/) · [slack-gif-creator](skills/productivity/slack-gif-creator/) · [url-to-markdown](skills/productivity/url-to-markdown/) · [video-downloader](skills/productivity/video-downloader/) · [video-editing](skills/productivity/video-editing/) · [x-to-markdown](skills/productivity/x-to-markdown/) · [youtube-transcript](skills/productivity/youtube-transcript/)

### 🏢 Recruitment (1)

[tailored-resume-generator](skills/recruitment/tailored-resume-generator/)

> 📚 Knowledge Base · 🌏 Language categories coming soon. Contributions welcome.

---

## Contributing

**Simplest path**: open a PR with a Skill you've actually used and found valuable.

A Skill only needs a `SKILL.md` file:

```yaml
---
name: my-skill
description: >
  What it does. Trigger when: [keywords].
---

# My Skill

## Steps
1. Do this (imperative)
2. Then this

## Example
**Input:** ...
**Output:** ...
```

See [SKILL_SPEC.md](SKILL_SPEC.md) for the full spec and [CONTRIBUTING.md](CONTRIBUTING.md) for the PR process.

---

## Acknowledgements

| Source Repository | Skills Included |
|------------------|-----------------|
| [Panniantong/agent-reach](https://github.com/Panniantong/agent-reach) | agent-reach |
| [nashsu/Viral_Writer_Skill](https://github.com/nashsu/Viral_Writer_Skill) | viral-writer |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | deep-research, academic-paper, academic-paper-reviewer, academic-pipeline |
| [composio/awesome-claude-skills](https://github.com/composio/awesome-claude-skills) | artifacts-builder, changelog-generator, competitive-ads-extractor, canvas-design, mcp-builder, skill-creator |
| [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) | article-illustrator, infographic-generator, post-to-wechat, post-to-x, comic-creator, cover-image, slide-deck, xhs-images, and more |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | content-engine, market-research, tdd-workflow, deep-research-pro, and more |
| [LeoYeAI/openclaw-master-skills](https://github.com/LeoYeAI/openclaw-master-skills) | ai-humanizer, agent-team-orchestration, brainstorming, copywriting, content-strategy, code-review, agent-memory, and more |

---

MIT © 2026 Contributors
