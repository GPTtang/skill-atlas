# Skill Atlas

**一个结构化的 Claude Skills 开源集合，26 个即用 Skill，覆盖 AI Agent、开发、写作、研究、社交媒体等场景。**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Skills-26-blue)](catalog.json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[English](README_en.md) · [日本語](README_ja.md) · [贡献 Skill](CONTRIBUTING.md) · [编写规范](SKILL_SPEC.md)

---

## 什么是 Claude Skill？

Skill 是一份写给 Claude 的结构化指令文件（`SKILL.md`），告诉它在特定场景下该怎么做。安装后 Claude 会**自动识别**何时该用哪个 Skill，不需要你手动触发。

```
你：帮我把这段文章发布到微信公众号
Claude：（自动激活 post-to-wechat skill）好的，我来帮你发布...
```

**这个仓库做什么**：收集、整理并维护高质量的 Skill 文件，让你直接复制使用，无需从零编写。

---

## Skills 列表

### 🤖 AI & Agent (5)

| Skill | 说明 |
|-------|------|
| [agent-reach](skills/ai-agent/agent-reach/) | 统一多平台内容读取与搜索，支持 Twitter/X、Reddit、YouTube、GitHub、B站、小红书等 |
| [agent-memory](skills/ai-agent/agent-memory/) | AI Agent 跨会话持久化记忆，支持事实存储、经验学习、实体追踪 |
| [agent-team-orchestration](skills/ai-agent/agent-team-orchestration/) | 多 Agent 团队编排，定义角色、任务生命周期、交接协议和质量门禁 |
| [mcp-builder](skills/ai-agent/mcp-builder/) | 构建高质量 MCP 服务器，支持 Python/TypeScript |
| [skill-creator](skills/ai-agent/skill-creator/) | 创建和更新 Claude Skill 的权威指南 |

### ⚙️ 开发运维 (4)

| Skill | 说明 |
|-------|------|
| [artifacts-builder](skills/devops/artifacts-builder/) | 构建复杂多组件 claude.ai HTML Artifact（React + shadcn/ui） |
| [changelog-generator](skills/devops/changelog-generator/) | 从 git 提交历史自动生成面向用户的版本说明 |
| [code-review](skills/devops/code-review/) | 系统性代码评审，覆盖安全性、性能、可维护性、正确性、测试五个维度 |
| [tdd-workflow](skills/devops/tdd-workflow/) | 测试驱动开发工作流，强制先写测试再实现，要求 80%+ 覆盖率 |

### ✍️ 写作 (6)

| Skill | 说明 |
|-------|------|
| [ai-humanizer](skills/writing/ai-humanizer/) | 检测并去除 AI 写作痕迹，改写为自然的人类风格 |
| [article-illustrator](skills/writing/article-illustrator/) | 分析文章结构，为每个段落生成风格一致的配图 |
| [content-strategy](skills/writing/content-strategy/) | 内容策略规划，确定选题、主题集群和发布计划 |
| [copywriting](skills/writing/copywriting/) | 专业转化型文案，覆盖主页、落地页、定价页等 |
| [infographic-generator](skills/writing/infographic-generator/) | 信息图生成器，21 种布局 × 20 种视觉风格 |
| [viral-writer](skills/writing/viral-writer/) | 自媒体爆款内容创作，支持微信公众号、小红书、抖音 |

### 🔬 研究 (6)

| Skill | 说明 |
|-------|------|
| [academic-paper](skills/research/academic-paper/) | 12 Agent 学术论文写作，支持 IMRaD/文献综述/案例研究等结构 |
| [academic-paper-reviewer](skills/research/academic-paper-reviewer/) | 5 视角学术论文同行评审，模拟主编 + 3 位审稿人 + 魔鬼代言人 |
| [academic-pipeline](skills/research/academic-pipeline/) | 全流程学术研究编排：研究 → 写作 → 审稿 → 修订 → 终稿 |
| [competitive-ads-extractor](skills/research/competitive-ads-extractor/) | 从广告库提取并分析竞品广告，识别有效的信息传达策略 |
| [deep-research](skills/research/deep-research/) | 13 Agent 学术深度研究，支持 7 种研究模式 |
| [market-research](skills/research/market-research/) | 市场调研、竞品分析、投资者尽调，生成带来源引用的决策报告 |

### 📱 社交媒体 (3)

| Skill | 说明 |
|-------|------|
| [content-engine](skills/social-media/content-engine/) | 平台原生内容引擎，将单一素材适配 X/LinkedIn/TikTok/YouTube/Newsletter |
| [post-to-wechat](skills/social-media/post-to-wechat/) | 通过 API 或 Chrome CDP 发布内容到微信公众号 |
| [post-to-x](skills/social-media/post-to-x/) | 通过 Chrome CDP 自动发布推文和 X Articles 长文 |

### 📄 文档 (1)

| Skill | 说明 |
|-------|------|
| [canvas-design](skills/document/canvas-design/) | 创作视觉设计作品，先生成设计哲学再输出为 PNG/PDF |

### 🗂️ 效率工具 (1)

| Skill | 说明 |
|-------|------|
| [brainstorming](skills/productivity/brainstorming/) | 将创意想法转化为完整设计方案，苏格拉底对话澄清需求 |

> 🏢 招聘 · 📚 知识库 · 🌏 语言 分类即将上线，欢迎贡献。

**总计：26 个 Skill**

---

## 如何使用

### 在 Claude Code 中使用

```bash
# 复制 Skill 到用户目录，所有项目都能用
cp -r skills/devops/agent-reach ~/.claude/skills/

# 重启 Claude Code，Skill 自动加载
claude
```

当你的请求符合 Skill 的触发场景，Claude 会自动激活。也可以用 `/skill-name` 手动调用。

### 在 Claude.ai 中使用

1. 打开任意 Skill 目录，下载 `SKILL.md`
2. 在 Claude.ai 中点击技能图标 🧩 → 上传文件
3. Skill 激活，后续对话自动应用

### 通过 API 使用

```python
import anthropic

client = anthropic.Anthropic()

with open("skills/devops/agent-reach/SKILL.md") as f:
    skill = f.read()

response = client.messages.create(
    model="claude-opus-4-6",
    system=skill,
    messages=[{"role": "user", "content": "搜索 Reddit 上关于 Claude Code 的讨论"}]
)
```

---

## 如何贡献

**最简单的方式**：直接提 PR，添加你用过的、觉得好用的 Skill。

Skill 只需要一个 `SKILL.md` 文件，格式如下：

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

## 项目结构

```
skill-atlas/
├── CLAUDE.md              # Claude Code 项目指令（AI 自动读取）
├── SKILL_SPEC.md          # Skill 编写规范
├── CONTRIBUTING.md        # 贡献指南
├── catalog.json           # 机器可读索引
├── skills/                # 所有 Skills（按分类）
│   ├── ai-agent/          # 🤖 AI & Agent 工具
│   ├── devops/            # ⚙️ 开发运维
│   ├── writing/           # ✍️ 写作
│   ├── research/          # 🔬 研究
│   ├── social-media/      # 📱 社交媒体
│   ├── document/          # 📄 文档
│   ├── productivity/      # 🗂️ 效率工具
│   ├── recruitment/       # 🏢 招聘
│   ├── knowledge-base/    # 📚 知识库
│   └── language/          # 🌏 语言
├── _templates/            # Skill 创建模板（minimal/standard/with-evals）
└── docs/                  # 使用文档
```

`catalog.json` 是机器可读的 Skill 索引，Claude Code 可以直接读取它来检索和管理 Skills。

---

## License

MIT © 2026 Contributors
