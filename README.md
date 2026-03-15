# Skill Atlas

**107 个即用 Claude Skills，覆盖 AI Agent、开发、写作、研究、社交媒体等场景。**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Skills](https://img.shields.io/badge/Skills-107-blue)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[English](README_en.md) · [贡献 Skill](CONTRIBUTING.md) · [编写规范](SKILL_SPEC.md)

---

## 什么是 Claude Skill？

Skill 是一份写给 Claude 的结构化指令文件（`SKILL.md`），告诉它在特定场景下该怎么做。安装后 Claude 会**自动识别**何时该用哪个 Skill，不需要手动触发。

**这个仓库做什么**：收集、整理并维护高质量的 Skill 文件，直接复制使用，无需从零编写。

---

## 快速开始

**Claude Code**（推荐）：

```bash
cp -r skills/devops/code-review ~/.claude/skills/
claude
```

**Claude.ai**：打开任意 Skill 目录 → 下载 `SKILL.md` → 在对话中点击 🧩 上传。

**API**：将 `SKILL.md` 内容作为 `system` prompt 传入即可。

---

## Skills 列表

### 🤖 AI & Agent (14)

[agent-memory](skills/ai-agent/agent-memory/) · [agent-reach](skills/ai-agent/agent-reach/) · [agent-team-orchestration](skills/ai-agent/agent-team-orchestration/) · [agentic-eval](skills/ai-agent/agentic-eval/) · [claude-api](skills/ai-agent/claude-api/) · [developer-growth-analysis](skills/ai-agent/developer-growth-analysis/) · [eval-harness](skills/ai-agent/eval-harness/) · [exa-search](skills/ai-agent/exa-search/) · [langsmith-fetch](skills/ai-agent/langsmith-fetch/) · [mcp-builder](skills/ai-agent/mcp-builder/) · [prompt-engineering-patterns](skills/ai-agent/prompt-engineering-patterns/) · [rag-implementation](skills/ai-agent/rag-implementation/) · [skill-creator](skills/ai-agent/skill-creator/) · [subagent-driven-development](skills/ai-agent/subagent-driven-development/)

### ⚙️ 开发运维 (29)

[api-design-principles](skills/devops/api-design-principles/) · [architecture-patterns](skills/devops/architecture-patterns/) · [artifacts-builder](skills/devops/artifacts-builder/) · [backend-patterns](skills/devops/backend-patterns/) · [changelog-generator](skills/devops/changelog-generator/) · [clean-content-fetch](skills/devops/clean-content-fetch/) · [code-review](skills/devops/code-review/) · [coding-standards](skills/devops/coding-standards/) · [computer-use](skills/devops/computer-use/) · [debug-pro](skills/devops/debug-pro/) · [docker-essentials](skills/devops/docker-essentials/) · [e2e-testing](skills/devops/e2e-testing/) · [frontend-patterns](skills/devops/frontend-patterns/) · [git-essentials](skills/devops/git-essentials/) · [microservices-patterns](skills/devops/microservices-patterns/) · [modern-javascript-patterns](skills/devops/modern-javascript-patterns/) · [nextjs-app-router-patterns](skills/devops/nextjs-app-router-patterns/) · [postgresql-table-design](skills/devops/postgresql-table-design/) · [python-design-patterns](skills/devops/python-design-patterns/) · [python-performance-optimization](skills/devops/python-performance-optimization/) · [python-testing-patterns](skills/devops/python-testing-patterns/) · [react-state-management](skills/devops/react-state-management/) · [security-auditor](skills/devops/security-auditor/) · [sql-toolkit](skills/devops/sql-toolkit/) · [tdd-workflow](skills/devops/tdd-workflow/) · [typescript-advanced-types](skills/devops/typescript-advanced-types/) · [using-git-worktrees](skills/devops/using-git-worktrees/) · [vue-best-practices](skills/devops/vue-best-practices/) · [webapp-testing](skills/devops/webapp-testing/)

### ✍️ 写作 (16)

[ai-humanizer](skills/writing/ai-humanizer/) · [article-illustrator](skills/writing/article-illustrator/) · [article-writing](skills/writing/article-writing/) · [content-research-writer](skills/writing/content-research-writer/) · [content-strategy](skills/writing/content-strategy/) · [copy-editing](skills/writing/copy-editing/) · [copywriting](skills/writing/copywriting/) · [format-markdown](skills/writing/format-markdown/) · [infographic-generator](skills/writing/infographic-generator/) · [internal-comms](skills/writing/internal-comms/) · [investor-materials](skills/writing/investor-materials/) · [investor-outreach](skills/writing/investor-outreach/) · [launch-strategy](skills/writing/launch-strategy/) · [marketing-psychology](skills/writing/marketing-psychology/) · [pricing-strategy](skills/writing/pricing-strategy/) · [viral-writer](skills/writing/viral-writer/)

### 🔬 研究 (11)

[academic-paper](skills/research/academic-paper/) · [academic-paper-reviewer](skills/research/academic-paper-reviewer/) · [academic-pipeline](skills/research/academic-pipeline/) · [competitive-ads-extractor](skills/research/competitive-ads-extractor/) · [data-analysis](skills/research/data-analysis/) · [deep-research](skills/research/deep-research/) · [deep-research-pro](skills/research/deep-research-pro/) · [lead-research-assistant](skills/research/lead-research-assistant/) · [market-research](skills/research/market-research/) · [programmatic-seo](skills/research/programmatic-seo/) · [seo-audit](skills/research/seo-audit/)

### 📱 社交媒体 (7)

[content-engine](skills/social-media/content-engine/) · [crosspost](skills/social-media/crosspost/) · [post-to-wechat](skills/social-media/post-to-wechat/) · [post-to-x](skills/social-media/post-to-x/) · [twitter-algorithm-optimizer](skills/social-media/twitter-algorithm-optimizer/) · [x-api](skills/social-media/x-api/) · [xhs-images](skills/social-media/xhs-images/)

### 📄 文档 (14)

[algorithmic-art](skills/document/algorithmic-art/) · [brand-guidelines](skills/document/brand-guidelines/) · [canvas-design](skills/document/canvas-design/) · [comic-creator](skills/document/comic-creator/) · [cover-image](skills/document/cover-image/) · [docx](skills/document/docx/) · [fal-ai-media](skills/document/fal-ai-media/) · [frontend-slides](skills/document/frontend-slides/) · [image-gen](skills/document/image-gen/) · [markdown-to-html](skills/document/markdown-to-html/) · [pdf](skills/document/pdf/) · [slide-deck](skills/document/slide-deck/) · [slidev](skills/document/slidev/) · [theme-factory](skills/document/theme-factory/)

### 🗂️ 效率工具 (15)

[brainstorming](skills/productivity/brainstorming/) · [compress-image](skills/productivity/compress-image/) · [domain-name-brainstormer](skills/productivity/domain-name-brainstormer/) · [file-organizer](skills/productivity/file-organizer/) · [image-enhancer](skills/productivity/image-enhancer/) · [invoice-organizer](skills/productivity/invoice-organizer/) · [meeting-insights-analyzer](skills/productivity/meeting-insights-analyzer/) · [raffle-winner-picker](skills/productivity/raffle-winner-picker/) · [readgzh](skills/productivity/readgzh/) · [slack-gif-creator](skills/productivity/slack-gif-creator/) · [url-to-markdown](skills/productivity/url-to-markdown/) · [video-downloader](skills/productivity/video-downloader/) · [video-editing](skills/productivity/video-editing/) · [x-to-markdown](skills/productivity/x-to-markdown/) · [youtube-transcript](skills/productivity/youtube-transcript/)

### 🏢 招聘 (1)

[tailored-resume-generator](skills/recruitment/tailored-resume-generator/)

> 📚 知识库 · 🌏 语言 分类即将上线，欢迎贡献。

---

## 如何贡献

**最简单的方式**：提 PR，添加你用过的、觉得好用的 Skill。

一个 Skill 只需要一个 `SKILL.md` 文件：

```yaml
---
name: my-skill
description: >
  说明功能，以及何时触发（关键词：xxx、xxx）。
---

# My Skill

## 流程
1. 步骤一（祈使句）
2. 步骤二

## 示例
**输入：** ...
**输出：** ...
```

详见 [SKILL_SPEC.md](SKILL_SPEC.md) 完整规范，[CONTRIBUTING.md](CONTRIBUTING.md) 提交流程。

---

## 致谢

| 来源仓库 | 收录的 Skills |
|---------|--------------|
| [Panniantong/agent-reach](https://github.com/Panniantong/agent-reach) | agent-reach |
| [nashsu/Viral_Writer_Skill](https://github.com/nashsu/Viral_Writer_Skill) | viral-writer |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | deep-research, academic-paper, academic-paper-reviewer, academic-pipeline |
| [composio/awesome-claude-skills](https://github.com/composio/awesome-claude-skills) | artifacts-builder, changelog-generator, competitive-ads-extractor, canvas-design, mcp-builder, skill-creator |
| [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) | article-illustrator, infographic-generator, post-to-wechat, post-to-x, comic-creator, cover-image, slide-deck, xhs-images 等 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | content-engine, market-research, tdd-workflow, deep-research-pro 等 |
| [LeoYeAI/openclaw-master-skills](https://github.com/LeoYeAI/openclaw-master-skills) | ai-humanizer, agent-team-orchestration, brainstorming, copywriting, content-strategy, code-review, agent-memory 等 |

---

MIT © 2026 Contributors
