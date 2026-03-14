# Skill Atlas

**A structured, open-source collection of Claude Skills — 26 ready-to-use Skills covering AI agents, dev, writing, research, social media, and more.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Skills-26-blue)](catalog.json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[中文](README.md) · [日本語](README_ja.md) · [Contribute a Skill](CONTRIBUTING.md) · [Skill Spec](SKILL_SPEC.md)

---

## What is a Claude Skill?

A Skill is a structured instruction file (`SKILL.md`) that tells Claude how to handle a specific type of task. Once installed, Claude **automatically recognizes** when to apply it — no manual triggering required.

```
You:    Post this article to my WeChat Official Account
Claude: (post-to-wechat skill activates) Sure, let me publish it...
```

**What this repo does**: collects, curates, and maintains high-quality Skill files so you can copy and use them directly — no need to write from scratch.

---

## Skills

### 🤖 AI & Agent (5)

| Skill | Description |
|-------|-------------|
| [agent-reach](skills/ai-agent/agent-reach/) | Read and search across Twitter/X, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu via a single CLI |
| [agent-memory](skills/ai-agent/agent-memory/) | Persistent memory for AI agents: facts, experience, entity tracking across sessions |
| [agent-team-orchestration](skills/ai-agent/agent-team-orchestration/) | Run multi-agent teams with roles, task lifecycle, handoff protocols, and quality gates |
| [mcp-builder](skills/ai-agent/mcp-builder/) | Guide for creating high-quality MCP servers in Python or TypeScript |
| [skill-creator](skills/ai-agent/skill-creator/) | Authoritative guide for creating and updating Claude Skills |

### ⚙️ DevOps (4)

| Skill | Description |
|-------|-------------|
| [artifacts-builder](skills/devops/artifacts-builder/) | Build elaborate multi-component claude.ai HTML artifacts with React + shadcn/ui |
| [changelog-generator](skills/devops/changelog-generator/) | Auto-generate user-facing changelogs from git commit history |
| [code-review](skills/devops/code-review/) | Systematic code review across security, performance, maintainability, correctness, and testing |
| [tdd-workflow](skills/devops/tdd-workflow/) | Enforce test-driven development with tests-before-code and 80%+ coverage |

### ✍️ Writing (6)

| Skill | Description |
|-------|-------------|
| [ai-humanizer](skills/writing/ai-humanizer/) | Detect and remove AI writing patterns; rewrite text to sound natural and human |
| [article-illustrator](skills/writing/article-illustrator/) | Analyze article structure and generate consistent illustrations for each section |
| [content-strategy](skills/writing/content-strategy/) | Plan content strategies for traffic, authority, and leads |
| [copywriting](skills/writing/copywriting/) | Expert conversion copywriting for homepages, landing pages, and pricing pages |
| [infographic-generator](skills/writing/infographic-generator/) | Generate infographics with 21 layout types × 20 visual styles |
| [viral-writer](skills/writing/viral-writer/) | Create viral content for WeChat, XiaoHongShu, and TikTok |

### 🔬 Research (6)

| Skill | Description |
|-------|-------------|
| [academic-paper](skills/research/academic-paper/) | 12-agent academic paper writing for IMRaD, lit review, and case study formats |
| [academic-paper-reviewer](skills/research/academic-paper-reviewer/) | Multi-perspective peer review: EIC + 3 reviewers + Devil's Advocate |
| [academic-pipeline](skills/research/academic-pipeline/) | End-to-end research pipeline: research → write → review → revise → finalize |
| [competitive-ads-extractor](skills/research/competitive-ads-extractor/) | Extract and analyze competitor ads to identify winning messaging patterns |
| [deep-research](skills/research/deep-research/) | 13-agent deep research with 7 modes including PRISMA systematic review |
| [market-research](skills/research/market-research/) | Market research, competitive analysis, and due diligence with source attribution |

### 📱 Social Media (3)

| Skill | Description |
|-------|-------------|
| [content-engine](skills/social-media/content-engine/) | Adapt one asset into platform-native content for X, LinkedIn, TikTok, YouTube, and newsletters |
| [post-to-wechat](skills/social-media/post-to-wechat/) | Publish articles to WeChat Official Account via API or Chrome CDP |
| [post-to-x](skills/social-media/post-to-x/) | Post tweets and X Articles via Chrome CDP automation |

### 📄 Document (1)

| Skill | Description |
|-------|-------------|
| [canvas-design](skills/document/canvas-design/) | Create visual art by generating a design philosophy then outputting as PNG/PDF |

### 🗂️ Productivity (1)

| Skill | Description |
|-------|-------------|
| [brainstorming](skills/productivity/brainstorming/) | Turn ideas into fully-formed designs through Socratic dialogue |

> 🏢 Recruitment · 📚 Knowledge Base · 🌏 Language categories coming soon. Contributions welcome.

**Total: 26 Skills**

---

## How to Use

### In Claude Code

```bash
# Copy a skill to your user skills directory (available across all projects)
cp -r skills/devops/agent-reach ~/.claude/skills/

# Restart Claude Code — skill loads automatically
claude
```

Claude activates the skill when your request matches its trigger conditions. You can also invoke it manually with `/skill-name`.

### In Claude.ai

1. Open any Skill directory and download `SKILL.md`
2. In Claude.ai, click the skills icon 🧩 → upload the file
3. The skill is now active for your conversation

### Via API

```python
import anthropic

client = anthropic.Anthropic()

with open("skills/devops/agent-reach/SKILL.md") as f:
    skill = f.read()

response = client.messages.create(
    model="claude-opus-4-6",
    system=skill,
    messages=[{"role": "user", "content": "Search Reddit for discussions about Claude Code"}]
)
```

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

## Project Structure

```
skill-atlas/
├── CLAUDE.md              # Claude Code project instructions (auto-loaded)
├── SKILL_SPEC.md          # Skill authoring specification
├── CONTRIBUTING.md        # Contribution guide
├── catalog.json           # Machine-readable skill index
├── skills/                # All Skills (by category)
│   ├── ai-agent/          # 🤖 AI & Agent tools
│   ├── devops/            # ⚙️ DevOps
│   ├── writing/           # ✍️ Writing
│   ├── research/          # 🔬 Research
│   ├── social-media/      # 📱 Social Media
│   ├── document/          # 📄 Document
│   ├── productivity/      # 🗂️ Productivity
│   ├── recruitment/       # 🏢 Recruitment
│   ├── knowledge-base/    # 📚 Knowledge Base
│   └── language/          # 🌏 Language
├── _templates/            # Skill templates (minimal/standard/with-evals)
└── docs/                  # Documentation
```

`catalog.json` is a machine-readable index. Claude Code reads it directly to search and manage Skills without scanning the entire directory.

---

## License

MIT © 2026 Contributors
