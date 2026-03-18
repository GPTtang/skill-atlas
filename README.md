# Skill Atlas

**108 个即用 Claude Skills，覆盖 AI Agent、开发、写作、研究、社交媒体等场景。**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Skills](https://img.shields.io/badge/Skills-108-blue)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[English](README_en.md) · [中文](README.md) · [日本語](README_ja.md) · [贡献 Skill](CONTRIBUTING.md) · [编写规范](SKILL_SPEC.md)

---

## 什么是 Claude Skill？

Skill 是一份写给 Claude 的结构化指令文件（`SKILL.md`），告诉它在特定场景下该怎么做。安装后 Claude 会**自动识别**何时该用哪个 Skill，不需要手动触发。

**这个仓库做什么**：收集、整理并维护高质量的 Skill 文件，直接复制使用，无需从零编写。

---

## 快速开始

**方法一：安装单个 Skill（Claude Code）**

```bash
cp -r skills/devops/code-review ~/.claude/skills/
claude
```

安装后 Claude 自动识别触发场景，无需手动调用。

**方法二：MCP Server（全库动态加载，推荐）**

配置后 Claude 可在对话中随时搜索并按需加载任意 Skill，无需预先安装。

```bash
# 1. 编译 MCP Server
cd mcp-server && npm install && npm run build

# 2. 注册到 Claude Code（编辑 ~/.claude/settings.json）
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

配置后直接对话即可，Claude 会自动通过 `search_skills` → `get_skill` 加载相关 Skill。

**方法三：Claude.ai**：打开任意 Skill 目录 → 下载 `SKILL.md` → 在对话中点击 🧩 上传。

**方法四：API**：将 `SKILL.md` 内容作为 `system` prompt 传入即可。

---

## Skills 列表

| 分类 | 数量 | 包含内容 |
|------|------|----------|
| [🤖 AI & Agent](#-ai--agent-14) | 14 | MCP 服务器、RAG、多 Agent 编排、Prompt 工程、评估框架 |
| [⚙️ 开发运维](#️-开发运维-29) | 29 | 代码审查、架构模式、测试、Docker、数据库、前后端框架 |
| [✍️ 写作](#️-写作-16) | 16 | 长文创作、文案、内容策略、营销心理学、融资材料 |
| [🔬 研究](#-研究-11) | 11 | 学术论文、深度调研、市场分析、数据分析、SEO |
| [📱 社交媒体](#-社交媒体-8) | 8 | X/Twitter、微信、小红书、LinkedIn、多平台分发、内容收藏 |
| [📄 文档](#-文档-14) | 14 | 幻灯片、PDF、图片生成、算法艺术、主题设计 |
| [🗂️ 效率工具](#️-效率工具-15) | 15 | 文件整理、图片处理、视频下载、会议分析、抽奖 |
| [🏢 招聘](#-招聘-1) | 1 | 定制化简历生成 |

---

### 🤖 AI & Agent (14)

<details open>
<summary>展开查看</summary>

| Skill | 说明 |
|-------|------|
| [agent-memory](skills/ai-agent/agent-memory/) | AI Agent 跨会话持久化记忆，支持事实存储、经验学习、实体追踪 |
| [agent-reach](skills/ai-agent/agent-reach/) | 统一多平台内容读取与搜索，支持 Twitter/X、Reddit、YouTube、GitHub、B站、小红书等 |
| [agent-team-orchestration](skills/ai-agent/agent-team-orchestration/) | 多 Agent 团队编排，定义角色、任务生命周期、交接协议和质量门禁 |
| [agentic-eval](skills/ai-agent/agentic-eval/) | AI 智能体输出评估模式，含自我批评循环、评估-优化流水线、LLM 评判系统 |
| [claude-api](skills/ai-agent/claude-api/) | Claude API + SDK 完整模式：流式输出、工具使用、视觉、扩展思考、批处理、提示缓存 |
| [developer-growth-analysis](skills/ai-agent/developer-growth-analysis/) | 分析 Claude Code 聊天历史识别编码成长差距，从 HackerNews 策划资源推送 Slack |
| [eval-harness](skills/ai-agent/eval-harness/) | Agent 会话的正式评估框架，实现评估驱动开发（EDD）原则 |
| [exa-search](skills/ai-agent/exa-search/) | 通过 Exa MCP 进行神经语义搜索，支持 Web、代码、公司调研（需配置 Exa MCP） |
| [langsmith-fetch](skills/ai-agent/langsmith-fetch/) | 从 LangSmith Studio 获取执行追踪，调试 LangChain/LangGraph 智能体行为 |
| [mcp-builder](skills/ai-agent/mcp-builder/) | 构建高质量 MCP 服务器，支持 Python/TypeScript |
| [prompt-engineering-patterns](skills/ai-agent/prompt-engineering-patterns/) | 生产级提示工程高级技巧：提高 LLM 性能、可靠性和可控性 |
| [rag-implementation](skills/ai-agent/rag-implementation/) | RAG 系统实现：向量数据库+语义搜索+文档问答 |
| [skill-creator](skills/ai-agent/skill-creator/) | 创建和更新 Claude Skill 的权威指南 |
| [subagent-driven-development](skills/ai-agent/subagent-driven-development/) | 子 Agent 并行执行实现计划，适用于独立任务的并发推进 |

</details>

### ⚙️ 开发运维 (29)

<details open>
<summary>展开查看</summary>

| Skill | 说明 |
|-------|------|
| [api-design-principles](skills/devops/api-design-principles/) | REST 和 GraphQL API 设计原则，构建直观、可扩展、可维护的接口 |
| [architecture-patterns](skills/devops/architecture-patterns/) | 清洁架构、六边形架构、DDD 等经典后端架构模式实践指南 |
| [artifacts-builder](skills/devops/artifacts-builder/) | 构建复杂多组件 claude.ai HTML Artifact（React + shadcn/ui） |
| [backend-patterns](skills/devops/backend-patterns/) | Node.js/Express/Next.js 后端架构模式：中间件、认证、数据库集成 |
| [changelog-generator](skills/devops/changelog-generator/) | 从 git 提交历史自动生成面向用户的版本说明 |
| [clean-content-fetch](skills/devops/clean-content-fetch/) | 动态网页正文提取（含微信公众号），基于 Scrapling，解决普通 fetch 噪音问题 |
| [code-review](skills/devops/code-review/) | 系统性代码评审，覆盖安全性、性能、可维护性、正确性、测试五个维度 |
| [coding-standards](skills/devops/coding-standards/) | TypeScript/JS/React/Node.js 通用编码规范和最佳实践 |
| [computer-use](skills/devops/computer-use/) | 无头 Linux 服务器全桌面自动化，X11 级别操控，支持 17 种操作 + VNC |
| [debug-pro](skills/devops/debug-pro/) | 系统化调试方法论，含 JS/TS/Python/Swift/CSS/网络层调试命令速查 |
| [docker-essentials](skills/devops/docker-essentials/) | Docker 核心命令与工作流：容器管理、镜像操作、网络、卷和调试 |
| [e2e-testing](skills/devops/e2e-testing/) | Playwright E2E 测试模式：Page Object Model、CI/CD 集成、不稳定测试处理 |
| [frontend-patterns](skills/devops/frontend-patterns/) | React/Next.js 前端架构模式、状态管理和性能优化最佳实践 |
| [git-essentials](skills/devops/git-essentials/) | Git 核心命令与工作流：分支/合并/变基/团队协作 |
| [microservices-patterns](skills/devops/microservices-patterns/) | 微服务架构设计：服务边界划分、事件驱动通信、弹性模式 |
| [modern-javascript-patterns](skills/devops/modern-javascript-patterns/) | ES6+ 现代 JavaScript 完整指南：async/await、模块、迭代器、函数式编程等 |
| [nextjs-app-router-patterns](skills/devops/nextjs-app-router-patterns/) | Next.js 14+ App Router 完整指南：Server Components、流式渲染、并行路由 |
| [postgresql-table-design](skills/devops/postgresql-table-design/) | PostgreSQL 表设计最佳实践：数据类型、索引策略、约束、性能优化 |
| [python-design-patterns](skills/devops/python-design-patterns/) | Python 设计模式：KISS/SRP/组合优于继承 |
| [python-performance-optimization](skills/devops/python-performance-optimization/) | Python 性能优化：cProfile/内存分析/瓶颈识别 |
| [python-testing-patterns](skills/devops/python-testing-patterns/) | Python 全面测试：pytest/fixtures/mocking/TDD |
| [react-state-management](skills/devops/react-state-management/) | 现代 React 状态管理：Redux Toolkit/Zustand/Jotai/React Query |
| [security-auditor](skills/devops/security-auditor/) | 代码安全审计，覆盖 OWASP Top 10、认证流程、XSS/SQL 注入防护 |
| [sql-toolkit](skills/devops/sql-toolkit/) | SQL 全栈：SQLite/PostgreSQL/MySQL 查询设计迁移优化，无需 ORM |
| [tdd-workflow](skills/devops/tdd-workflow/) | 测试驱动开发工作流，强制先写测试再实现，要求 80%+ 覆盖率 |
| [typescript-advanced-types](skills/devops/typescript-advanced-types/) | TypeScript 高级类型：泛型/条件类型/映射类型/模板字面量 |
| [using-git-worktrees](skills/devops/using-git-worktrees/) | Git Worktree 隔离工作区：功能开发时创建安全隔离环境 |
| [vue-best-practices](skills/devops/vue-best-practices/) | Vue 3 最佳实践：Composition API + TypeScript + Pinia + Router |
| [webapp-testing](skills/devops/webapp-testing/) | 基于 Playwright 的 Web 应用测试工具包，支持截图和浏览器日志 |

</details>

### ✍️ 写作 (16)

<details open>
<summary>展开查看</summary>

| Skill | 说明 |
|-------|------|
| [ai-humanizer](skills/writing/ai-humanizer/) | 检测并去除 AI 写作痕迹，改写为自然的人类风格 |
| [article-illustrator](skills/writing/article-illustrator/) | 分析文章结构，为每个段落生成风格一致的配图 |
| [article-writing](skills/writing/article-writing/) | 长文内容写作，从示例提取品牌语调，创作博客/教程/Newsletter |
| [content-research-writer](skills/writing/content-research-writer/) | 高质量内容写作助手，提供研究调查、引用添加、标题优化和实时反馈 |
| [content-strategy](skills/writing/content-strategy/) | 内容策略规划，确定选题、主题集群和发布计划 |
| [copy-editing](skills/writing/copy-editing/) | 系统化营销文案编辑：多轮专项检查（清晰度/说服力/CTA/格式） |
| [copywriting](skills/writing/copywriting/) | 专业转化型文案，覆盖主页、落地页、定价页等 |
| [format-markdown](skills/writing/format-markdown/) | Markdown 格式化：添加 frontmatter、标题、摘要、加粗、列表和代码块 |
| [infographic-generator](skills/writing/infographic-generator/) | 信息图生成器，21 种布局 × 20 种视觉风格 |
| [internal-comms](skills/writing/internal-comms/) | 企业内部沟通文档写作，支持 3P 周报、Newsletter、FAQ、事故报告等 |
| [investor-materials](skills/writing/investor-materials/) | 创建 Pitch Deck、一页纸、投资备忘录、财务模型等融资材料 |
| [investor-outreach](skills/writing/investor-outreach/) | 投资者冷邮件/预热介绍/跟进邮件，简洁个性化 |
| [launch-strategy](skills/writing/launch-strategy/) | 产品发布/GTM 策略：分阶段发布/Product Hunt/渠道规划 |
| [marketing-psychology](skills/writing/marketing-psychology/) | 70+ 营销心理学模型：认知偏差/说服原则/消费者决策 |
| [pricing-strategy](skills/writing/pricing-strategy/) | 定价策略：分层定价/免费增值/Van Westendorp/价值指标 |
| [viral-writer](skills/writing/viral-writer/) | 自媒体爆款内容创作，支持微信公众号、小红书、抖音 |

</details>

### 🔬 研究 (11)

<details open>
<summary>展开查看</summary>

| Skill | 说明 |
|-------|------|
| [academic-paper](skills/research/academic-paper/) | 12 Agent 学术论文写作，支持 IMRaD/文献综述/案例研究等结构 |
| [academic-paper-reviewer](skills/research/academic-paper-reviewer/) | 5 视角学术论文同行评审，模拟主编 + 3 位审稿人 + 魔鬼代言人 |
| [academic-pipeline](skills/research/academic-pipeline/) | 全流程学术研究编排：研究 → 写作 → 审稿 → 修订 → 终稿 |
| [competitive-ads-extractor](skills/research/competitive-ads-extractor/) | 从广告库提取并分析竞品广告，识别有效的信息传达策略 |
| [data-analysis](skills/research/data-analysis/) | 统计严谨性数据分析，支持 A/B 测试、队列分析、假设检验等 |
| [deep-research](skills/research/deep-research/) | 13 Agent 学术深度研究，支持 7 种研究模式 |
| [deep-research-pro](skills/research/deep-research-pro/) | 多源深度研究 Agent：搜索网络/综合信息/生成引用报告，无需 API Key |
| [lead-research-assistant](skills/research/lead-research-assistant/) | 识别高质量销售线索，分析目标公司并提供可操作的联系策略 |
| [market-research](skills/research/market-research/) | 市场调研、竞品分析、投资者尽调，生成带来源引用的决策报告 |
| [programmatic-seo](skills/research/programmatic-seo/) | 程序化 SEO：用模板和数据批量创建 SEO 优化页面（目录页/地区页/比较页等） |
| [seo-audit](skills/research/seo-audit/) | SEO 问题诊断与审计，覆盖技术 SEO、页面优化、元标签审查 |

</details>

### 📱 社交媒体 (8)

<details open>
<summary>展开查看</summary>

| Skill | 说明 |
|-------|------|
| [content-engine](skills/social-media/content-engine/) | 平台原生内容引擎，将单一素材适配 X/LinkedIn/TikTok/YouTube/Newsletter |
| [crosspost](skills/social-media/crosspost/) | 多平台内容分发：将内容适配为 X/LinkedIn/Threads/Bluesky 的原生格式 |
| [post-to-wechat](skills/social-media/post-to-wechat/) | 通过 API 或 Chrome CDP 发布内容到微信公众号 |
| [post-to-x](skills/social-media/post-to-x/) | 通过 Chrome CDP 自动发布推文和 X Articles 长文 |
| [twitter-algorithm-optimizer](skills/social-media/twitter-algorithm-optimizer/) | 基于 Twitter 开源算法洞察优化推文，最大化覆盖率和互动量 |
| [x-api](skills/social-media/x-api/) | X/Twitter API 程序化集成：发推、读取时间线、搜索、数据分析 |
| [xhs-images](skills/social-media/xhs-images/) | 小红书信息图系列：10种视觉风格×8种布局，生成1-10张卡通风格图片 |
| [content-collector](skills/social-media/content-collector/) | 自动收集 X/Twitter、即刻、公众号、Reddit 等多平台内容，AI 整理后存入飞书多维表格 |

</details>

### 📄 文档 (14)

<details open>
<summary>展开查看</summary>

| Skill | 说明 |
|-------|------|
| [algorithmic-art](skills/document/algorithmic-art/) | 使用 p5.js 创作算法生成艺术，支持流场、粒子系统、交互式参数探索 |
| [brand-guidelines](skills/document/brand-guidelines/) | Anthropic 官方品牌色彩和字体规范，用于 Artifact 视觉风格统一 |
| [canvas-design](skills/document/canvas-design/) | 创作视觉设计作品，先生成设计哲学再输出为 PNG/PDF |
| [comic-creator](skills/document/comic-creator/) | 知识漫画创作，多画风×基调组合，生成带分镜的教育漫画 |
| [cover-image](skills/document/cover-image/) | 文章封面图生成，5维度定制，支持电影宽屏/16:9/正方形 |
| [docx](skills/document/docx/) | 全功能 .docx 文档创建、编辑与分析，支持追踪更改和批注 |
| [fal-ai-media](skills/document/fal-ai-media/) | 通过 fal.ai MCP 生成图像、视频和音频（需配置 fal.ai MCP） |
| [frontend-slides](skills/document/frontend-slides/) | 从零创建动画丰富的 HTML 演示幻灯片，或将 PPTX 转换为 Web 形式 |
| [image-gen](skills/document/image-gen/) | AI 图片生成，支持 OpenAI/Google/DashScope/Replicate 官方 API |
| [markdown-to-html](skills/document/markdown-to-html/) | Markdown 转微信兼容 HTML，含代码高亮、数学公式、PlantUML |
| [pdf](skills/document/pdf/) | PDF 全功能处理：文本提取、新建、合并/拆分文档、表单填写 |
| [slide-deck](skills/document/slide-deck/) | 内容转专业幻灯片图组：规划大纲并逐页生成设计图片 |
| [slidev](skills/document/slidev/) | 面向开发者的 Markdown 幻灯片：Vue 组件/代码高亮/动画互动 |
| [theme-factory](skills/document/theme-factory/) | 为任意 Artifact 应用一致的专业主题，含 10 套预设主题 |

</details>

### 🗂️ 效率工具 (15)

<details open>
<summary>展开查看</summary>

| Skill | 说明 |
|-------|------|
| [brainstorming](skills/productivity/brainstorming/) | 将创意想法转化为完整设计方案，苏格拉底对话澄清需求 |
| [compress-image](skills/productivity/compress-image/) | 图片压缩转 WebP/PNG，自动选择最优工具，支持批量处理 |
| [domain-name-brainstormer](skills/productivity/domain-name-brainstormer/) | 生成创意域名方案并批量检查多个 TLD 可用性 |
| [file-organizer](skills/productivity/file-organizer/) | 智能文件整理，理解上下文、检测重复、自动化清理数字工作空间 |
| [image-enhancer](skills/productivity/image-enhancer/) | 图片质量提升：分辨率增强、锐化、压缩噪点修复 |
| [invoice-organizer](skills/productivity/invoice-organizer/) | 自动整理发票和收据以备税务申报，提取信息并统一归档 |
| [meeting-insights-analyzer](skills/productivity/meeting-insights-analyzer/) | 分析会议记录，识别沟通行为模式，提供领导力改进建议 |
| [raffle-winner-picker](skills/productivity/raffle-winner-picker/) | 从列表或 Google Sheets 中公平随机抽取获奖者 |
| [readgzh](skills/productivity/readgzh/) | AI 阅读完整微信公众号文章，支持普通图文，通过 ReadGZH 服务 |
| [slack-gif-creator](skills/productivity/slack-gif-creator/) | 创作适配 Slack 的动态 GIF，支持消息 GIF 和 Emoji GIF |
| [url-to-markdown](skills/productivity/url-to-markdown/) | 通过 Chrome CDP 抓取任意网页并转换为 Markdown |
| [video-downloader](skills/productivity/video-downloader/) | 使用 yt-dlp 下载 YouTube 视频，支持多种质量和格式 |
| [video-editing](skills/productivity/video-editing/) | AI 辅助视频编辑全流程：FFmpeg 剪辑、Remotion 动画、ElevenLabs 配音 |
| [x-to-markdown](skills/productivity/x-to-markdown/) | X/Twitter 推文和长文转 Markdown（需用户授权，使用逆向 API） |
| [youtube-transcript](skills/productivity/youtube-transcript/) | 获取 YouTube 视频字幕/转录并生成摘要 |

</details>

### 🏢 招聘 (1)

| Skill | 说明 |
|-------|------|
| [tailored-resume-generator](skills/recruitment/tailored-resume-generator/) | 分析职位描述并生成定制化简历，突出与岗位匹配的经历和技能 |

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
