# Skill Atlas

**108 ready-to-use Claude Skills covering AI agents, dev, writing, research, social media, and more.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Skills](https://img.shields.io/badge/Skills-131-blue)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[English](README_en.md) · [中文](README.md) · [日本語](README_ja.md) · [Contribute a Skill](CONTRIBUTING.md) · [Skill Spec](SKILL_SPEC.md)

---

## What is a Claude Skill?

A Skill is a structured instruction file (`SKILL.md`) that tells Claude how to handle a specific type of task. Once installed, Claude **automatically recognizes** when to apply it — no manual triggering required.

**What this repo does**: collects, curates, and maintains high-quality Skill files so you can copy and use them directly — no need to write from scratch.

---

## Quick Start

**Option 1: Install a single Skill (Claude Code)**

```bash
cp -r skills/devops/code-review ~/.claude/skills/
claude
```

Claude automatically detects when to apply the Skill — no manual triggering needed.

**Option 2: MCP Server (dynamic on-demand loading, recommended)**

Configure once to make the entire library available on-demand. Claude searches and loads Skills automatically during conversation.

```bash
# 1. Build the MCP server
cd mcp-server && npm install && npm run build

# 2. Register in Claude Code (edit ~/.claude/settings.json)
```

```json
{
  "mcpServers": {
    "skill-atlas": {
      "command": "node",
      "args": ["/path/to/skill-atlas/mcp-server/dist/index.js"]
    }
  }
}
```

Claude will automatically call `search_skills` → `get_skill` to load the right Skill for your task.

**Option 3: Claude.ai**: Open any Skill directory → download `SKILL.md` → click 🧩 in your conversation to upload.

**Option 4: API**: Pass the contents of `SKILL.md` as the `system` prompt.

---

## Skills

| Category | Count | Covers |
|----------|-------|--------|
| [🤖 AI & Agent](#-ai--agent-14) | 14 | MCP servers, RAG, multi-agent orchestration, prompt engineering, eval frameworks |
| [⚙️ DevOps](#️-devops-29) | 29 | Code review, architecture, testing, Docker, databases, frontend/backend frameworks |
| [✍️ Writing](#️-writing-16) | 16 | Long-form content, copywriting, content strategy, marketing psychology, fundraising |
| [🔬 Research](#-research-11) | 11 | Academic papers, deep research, market analysis, data analysis, SEO |
| [📱 Social Media](#-social-media-8) | 8 | X/Twitter, WeChat, XiaoHongShu, LinkedIn, multi-platform distribution, content collection |
| [📄 Document](#-document-14) | 14 | Slides, PDF, image generation, generative art, theme design |
| [🗂️ Productivity](#️-productivity-15) | 15 | File organization, image processing, video download, meeting analysis, raffle |
| [🏢 Recruitment](#-recruitment-1) | 1 | Tailored resume generation |

---

### 🤖 AI & Agent (14)

<details open>
<summary>Show all</summary>

| Skill | Description |
|-------|-------------|
| [agent-memory](skills/ai-agent/agent-memory/) | Persistent memory for AI agents: facts, experience, entity tracking across sessions |
| [agent-reach](skills/ai-agent/agent-reach/) | Read and search across Twitter/X, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu via a single CLI |
| [agent-team-orchestration](skills/ai-agent/agent-team-orchestration/) | Run multi-agent teams with roles, task lifecycle, handoff protocols, and quality gates |
| [agentic-eval](skills/ai-agent/agentic-eval/) | Patterns for evaluating agent outputs via self-critique loops and LLM-as-judge pipelines |
| [claude-api](skills/ai-agent/claude-api/) | Full Claude API/SDK patterns: streaming, tool use, vision, extended thinking, batches, prompt caching |
| [developer-growth-analysis](skills/ai-agent/developer-growth-analysis/) | Analyze Claude Code chat history to identify growth gaps; curate HackerNews resources to Slack |
| [eval-harness](skills/ai-agent/eval-harness/) | Formal evaluation harness for Claude Code sessions using eval-driven development (EDD) principles |
| [exa-search](skills/ai-agent/exa-search/) | Neural web search via Exa MCP for pages, code, company research, and people lookup |
| [langsmith-fetch](skills/ai-agent/langsmith-fetch/) | Fetch LangSmith execution traces to debug LangChain/LangGraph agent behavior |
| [mcp-builder](skills/ai-agent/mcp-builder/) | Guide for creating high-quality MCP servers in Python or TypeScript |
| [prompt-engineering-patterns](skills/ai-agent/prompt-engineering-patterns/) | Advanced prompt engineering techniques for LLM performance, reliability, and controllability |
| [rag-implementation](skills/ai-agent/rag-implementation/) | Build RAG systems with vector databases and semantic search for knowledge-grounded AI |
| [skill-creator](skills/ai-agent/skill-creator/) | Authoritative guide for creating and updating Claude Skills |
| [subagent-driven-development](skills/ai-agent/subagent-driven-development/) | Execute implementation plans with parallel subagents for independent concurrent tasks |

</details>

### ⚙️ DevOps (29)

<details open>
<summary>Show all</summary>

| Skill | Description |
|-------|-------------|
| [api-design-principles](skills/devops/api-design-principles/) | REST and GraphQL API design principles for intuitive, scalable, and maintainable interfaces |
| [architecture-patterns](skills/devops/architecture-patterns/) | Clean Architecture, Hexagonal Architecture, and DDD for complex backend systems |
| [artifacts-builder](skills/devops/artifacts-builder/) | Build elaborate multi-component claude.ai HTML artifacts with React + shadcn/ui |
| [backend-patterns](skills/devops/backend-patterns/) | Node.js/Express/Next.js API backend patterns: middleware, auth, and database integration |
| [changelog-generator](skills/devops/changelog-generator/) | Auto-generate user-facing changelogs from git commit history |
| [clean-content-fetch](skills/devops/clean-content-fetch/) | Fetch clean web content using Scrapling; handles dynamic rendering and WeChat articles |
| [code-review](skills/devops/code-review/) | Systematic code review across security, performance, maintainability, correctness, and testing |
| [coding-standards](skills/devops/coding-standards/) | Universal coding standards for TypeScript, JavaScript, React, and Node.js |
| [computer-use](skills/devops/computer-use/) | Full desktop automation for headless Linux servers via X11 with 17 actions and VNC |
| [debug-pro](skills/devops/debug-pro/) | Systematic debugging methodology with language-specific commands for JS/TS/Python/Swift/CSS |
| [docker-essentials](skills/devops/docker-essentials/) | Essential Docker commands and workflows for container management, images, and debugging |
| [e2e-testing](skills/devops/e2e-testing/) | Playwright E2E testing patterns with Page Object Model, CI/CD integration, and flaky test strategies |
| [frontend-patterns](skills/devops/frontend-patterns/) | React/Next.js frontend architecture patterns, state management, and performance optimization |
| [git-essentials](skills/devops/git-essentials/) | Essential Git commands for version control, branching, merging, and team collaboration |
| [microservices-patterns](skills/devops/microservices-patterns/) | Design microservices with service boundaries, event-driven communication, and resilience patterns |
| [modern-javascript-patterns](skills/devops/modern-javascript-patterns/) | Master ES6+ features: async/await, modules, iterators, generators, and functional programming |
| [nextjs-app-router-patterns](skills/devops/nextjs-app-router-patterns/) | Next.js 14+ App Router: Server Components, streaming, parallel routes, and advanced data fetching |
| [postgresql-table-design](skills/devops/postgresql-table-design/) | PostgreSQL schema design with data types, indexing strategies, constraints, and performance patterns |
| [python-design-patterns](skills/devops/python-design-patterns/) | Python design patterns: KISS, SRP, composition over inheritance, separation of concerns |
| [python-performance-optimization](skills/devops/python-performance-optimization/) | Profile and optimize Python code using cProfile, memory profilers, and best practices |
| [python-testing-patterns](skills/devops/python-testing-patterns/) | Comprehensive Python testing with pytest, fixtures, mocking, and TDD |
| [react-state-management](skills/devops/react-state-management/) | Modern React state: Redux Toolkit, Zustand, Jotai, and React Query |
| [security-auditor](skills/devops/security-auditor/) | Code security review covering OWASP Top 10, authentication, XSS, and SQL injection |
| [sql-toolkit](skills/devops/sql-toolkit/) | Query, design, migrate, and optimize SQLite/PostgreSQL/MySQL databases without ORMs |
| [tdd-workflow](skills/devops/tdd-workflow/) | Enforce test-driven development with tests-before-code and 80%+ coverage |
| [typescript-advanced-types](skills/devops/typescript-advanced-types/) | TypeScript advanced types: generics, conditional types, mapped types, template literals |
| [using-git-worktrees](skills/devops/using-git-worktrees/) | Use Git worktrees to create isolated workspaces for safe feature development |
| [vue-best-practices](skills/devops/vue-best-practices/) | Vue 3 best practices with Composition API, TypeScript, Pinia, and Vue Router |
| [webapp-testing](skills/devops/webapp-testing/) | Playwright-based web app testing toolkit with screenshots and browser log inspection |

</details>

### ✍️ Writing (16)

<details open>
<summary>Show all</summary>

| Skill | Description |
|-------|-------------|
| [ai-humanizer](skills/writing/ai-humanizer/) | Detect and remove AI writing patterns; rewrite text to sound natural and human |
| [article-illustrator](skills/writing/article-illustrator/) | Analyze article structure and generate consistent illustrations for each section |
| [article-writing](skills/writing/article-writing/) | Write long-form content in a brand's voice derived from examples; covers blogs, guides, newsletters |
| [content-research-writer](skills/writing/content-research-writer/) | Collaborative writing assistant with research, citations, hook optimization, and real-time feedback |
| [content-strategy](skills/writing/content-strategy/) | Plan content strategies for traffic, authority, and leads |
| [copy-editing](skills/writing/copy-editing/) | Systematic marketing copy editing through multiple focused passes for clarity, persuasion, and CTAs |
| [copywriting](skills/writing/copywriting/) | Expert conversion copywriting for homepages, landing pages, and pricing pages |
| [format-markdown](skills/writing/format-markdown/) | Format plain text or Markdown with frontmatter, titles, summaries, headings, and code blocks |
| [infographic-generator](skills/writing/infographic-generator/) | Generate infographics with 21 layout types × 20 visual styles |
| [internal-comms](skills/writing/internal-comms/) | Write internal communications: 3P updates, newsletters, FAQs, status reports, incident reports |
| [investor-materials](skills/writing/investor-materials/) | Create pitch decks, one-pagers, investor memos, and financial models for fundraising |
| [investor-outreach](skills/writing/investor-outreach/) | Draft cold emails, warm intros, and follow-ups for angels, VCs, and accelerators |
| [launch-strategy](skills/writing/launch-strategy/) | Plan product launches, GTM strategy, Product Hunt, and phased release campaigns |
| [marketing-psychology](skills/writing/marketing-psychology/) | Apply 70+ psychological principles and cognitive biases to marketing |
| [pricing-strategy](skills/writing/pricing-strategy/) | Pricing decisions, tiers, freemium, Van Westendorp analysis, and monetization strategy |
| [viral-writer](skills/writing/viral-writer/) | Create viral content for WeChat, XiaoHongShu, and TikTok |

</details>

### 🔬 Research (11)

<details open>
<summary>Show all</summary>

| Skill | Description |
|-------|-------------|
| [academic-paper](skills/research/academic-paper/) | 12-agent academic paper writing for IMRaD, lit review, and case study formats |
| [academic-paper-reviewer](skills/research/academic-paper-reviewer/) | Multi-perspective peer review: EIC + 3 reviewers + Devil's Advocate |
| [academic-pipeline](skills/research/academic-pipeline/) | End-to-end research pipeline: research → write → review → revise → finalize |
| [competitive-ads-extractor](skills/research/competitive-ads-extractor/) | Extract and analyze competitor ads to identify winning messaging patterns |
| [data-analysis](skills/research/data-analysis/) | Statistical data analysis: A/B testing, cohort analysis, regression, and hypothesis testing |
| [deep-research](skills/research/deep-research/) | 13-agent deep research with 7 modes including PRISMA systematic review |
| [deep-research-pro](skills/research/deep-research-pro/) | Multi-source deep research agent: web search, synthesis, and cited reports; no API keys needed |
| [lead-research-assistant](skills/research/lead-research-assistant/) | Identify high-quality leads by analyzing target companies and providing contact strategies |
| [market-research](skills/research/market-research/) | Market research, competitive analysis, and due diligence with source attribution |
| [programmatic-seo](skills/research/programmatic-seo/) | Create SEO-driven pages at scale using templates and data; covers directory, location, and comparison pages |
| [seo-audit](skills/research/seo-audit/) | Diagnose SEO issues including technical SEO, on-page optimization, and ranking analysis |

</details>

### 📱 Social Media (8)

<details open>
<summary>Show all</summary>

| Skill | Description |
|-------|-------------|
| [content-engine](skills/social-media/content-engine/) | Adapt one asset into platform-native content for X, LinkedIn, TikTok, YouTube, and newsletters |
| [crosspost](skills/social-media/crosspost/) | Distribute content across X, LinkedIn, Threads, and Bluesky with platform-native adaptation |
| [post-to-wechat](skills/social-media/post-to-wechat/) | Publish articles to WeChat Official Account via API or Chrome CDP |
| [post-to-x](skills/social-media/post-to-x/) | Post tweets and X Articles via Chrome CDP automation |
| [twitter-algorithm-optimizer](skills/social-media/twitter-algorithm-optimizer/) | Optimize tweets for maximum reach using Twitter's open-source algorithm insights |
| [x-api](skills/social-media/x-api/) | X/Twitter API integration for posting, reading timelines, search, and analytics |
| [xhs-images](skills/social-media/xhs-images/) | Generate XiaoHongShu image series: 10 visual styles × 8 layouts, 1–10 cartoon-style cards |
| [content-collector](skills/social-media/content-collector/) | Auto-collect content from X/Twitter, Jike, WeChat, Reddit, etc. and organize it into Feishu databases with AI summarization |

</details>

### 📄 Document (14)

<details open>
<summary>Show all</summary>

| Skill | Description |
|-------|-------------|
| [algorithmic-art](skills/document/algorithmic-art/) | Create generative art with p5.js: flow fields, particle systems, interactive parameter controls |
| [brand-guidelines](skills/document/brand-guidelines/) | Apply Anthropic's official brand colors and typography to any artifact |
| [canvas-design](skills/document/canvas-design/) | Create visual art by generating a design philosophy then outputting as PNG/PDF |
| [comic-creator](skills/document/comic-creator/) | Create educational knowledge comics with flexible art style × tone combinations |
| [cover-image](skills/document/cover-image/) | Generate article cover images with 5-dimension customization (type, palette, rendering, text, mood) |
| [docx](skills/document/docx/) | Full .docx document creation, editing, and analysis with tracked changes and comments |
| [fal-ai-media](skills/document/fal-ai-media/) | AI media generation via fal.ai MCP: text-to-image, text-to-video, text-to-speech |
| [frontend-slides](skills/document/frontend-slides/) | Create animation-rich HTML presentations from scratch or convert PowerPoint files |
| [image-gen](skills/document/image-gen/) | AI image generation using official APIs from OpenAI, Google, DashScope, and Replicate |
| [markdown-to-html](skills/document/markdown-to-html/) | Convert Markdown to styled HTML with code highlighting, math, PlantUML; WeChat-compatible |
| [pdf](skills/document/pdf/) | PDF toolkit: text extraction, new PDFs, merge/split, and form filling at scale |
| [slide-deck](skills/document/slide-deck/) | Transform content into professional slide deck images with style-guided outline and per-section slide generation |
| [slidev](skills/document/slidev/) | Create developer-friendly presentations using Markdown, Vue components, code highlighting, and animations |
| [theme-factory](skills/document/theme-factory/) | Apply consistent professional themes to any artifact — includes 10 preset themes |

</details>

### 🗂️ Productivity (15)

<details open>
<summary>Show all</summary>

| Skill | Description |
|-------|-------------|
| [brainstorming](skills/productivity/brainstorming/) | Turn ideas into fully-formed designs through Socratic dialogue |
| [compress-image](skills/productivity/compress-image/) | Compress images to WebP/PNG with automatic tool selection; supports batch processing |
| [domain-name-brainstormer](skills/productivity/domain-name-brainstormer/) | Generate creative domain names and bulk-check availability across multiple TLDs |
| [file-organizer](skills/productivity/file-organizer/) | Intelligently organize files by understanding context, detecting duplicates, and automating cleanup |
| [image-enhancer](skills/productivity/image-enhancer/) | Improve image quality by enhancing resolution, sharpness, and reducing compression artifacts |
| [invoice-organizer](skills/productivity/invoice-organizer/) | Organize invoices and receipts for tax prep by extracting info and sorting into folders |
| [meeting-insights-analyzer](skills/productivity/meeting-insights-analyzer/) | Analyze meeting transcripts to uncover communication patterns and leadership improvement areas |
| [raffle-winner-picker](skills/productivity/raffle-winner-picker/) | Pick random winners from lists or spreadsheets with fair and transparent selection |
| [readgzh](skills/productivity/readgzh/) | Read full-text WeChat Official Account articles via ReadGZH service |
| [slack-gif-creator](skills/productivity/slack-gif-creator/) | Create animated GIFs optimized for Slack (message GIFs and emoji GIFs) |
| [url-to-markdown](skills/productivity/url-to-markdown/) | Fetch any URL via Chrome CDP and convert to clean Markdown; supports login-required pages |
| [video-downloader](skills/productivity/video-downloader/) | Download YouTube videos using yt-dlp with quality and format options |
| [video-editing](skills/productivity/video-editing/) | AI-assisted video editing pipeline: FFmpeg, Remotion, ElevenLabs, fal.ai, Descript |
| [x-to-markdown](skills/productivity/x-to-markdown/) | Convert X/Twitter tweets and articles to Markdown with YAML front matter |
| [youtube-transcript](skills/productivity/youtube-transcript/) | Fetch and summarize YouTube video transcripts via residential IP proxy |

</details>

### 🏢 Recruitment (1)

| Skill | Description |
|-------|-------------|
| [tailored-resume-generator](skills/recruitment/tailored-resume-generator/) | Analyze job descriptions and generate tailored resumes to maximize interview chances |

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
