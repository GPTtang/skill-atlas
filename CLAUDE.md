# Skill Atlas

## 项目概述

这是一个开源的 Claude Skills 集合仓库，提供可直接使用的 Skills，同时作为 AI 创建新 Skill 时的结构化 few-shot 参考。

## 目录结构

```
skill-atlas/
├── CLAUDE.md                  # Claude Code 项目指令（本文件，AI 自动读取）
├── README.md                  # 中文主页
├── README_en.md               # English README
├── SKILL_SPEC.md              # Skill 编写规范（人和AI共用）
├── CONTRIBUTING.md            # 贡献指南
├── catalog.json               # 机器可读 Skills 索引
├── LICENSE                    # MIT
├── .claude/                   # Claude Code 工作流文档（内部使用）
│   ├── 00-overview.md         # 总览与快速开始
│   ├── 01-init-repo.md        # 初始化仓库
│   ├── 02-add-skills.md       # 添加单个 Skill
│   ├── 03-maintenance.md      # 日常维护
│   └── 04-scan-and-classify.md # 批量导入流程
├── skills/                    # 所有 Skills 按分类存放
│   ├── recruitment/           # 🏢 招聘
│   ├── knowledge-base/        # 📚 知识库/RAG
│   ├── document/              # 📄 文档处理
│   ├── language/              # 🌏 语言学习
│   ├── devops/                # ⚙️ 开发运维
│   ├── writing/               # ✍️ 写作创作
│   ├── social-media/          # 📱 社交媒体
│   ├── productivity/          # 🗂️ 效率工具
│   └── research/              # 🔬 研究
├── _templates/                # Skill 创建模板
│   ├── minimal/               # 仅 SKILL.md
│   ├── standard/              # + scripts/references
│   └── with-evals/            # + evals
└── docs/                      # 文档
    ├── how-to-use.md
    ├── how-to-create.md
    ├── ai-assisted-creation.md
    └── import-history/        # 导入历史记录
```

## Skill 标准结构

每个 Skill 必须遵循：

```
skill-name/
├── SKILL.md          # 必需：YAML frontmatter (name + description) + Markdown 指令
├── scripts/          # 可选：可直接执行的辅助脚本
├── references/       # 可选：按需加载的参考文档
├── assets/           # 可选：模板、示例文件
└── evals/            # 可选：测试用例
    └── evals.json
```

### SKILL.md 格式要求

```yaml
---
name: kebab-case-name
description: >
  功能说明 + 触发场景 + 触发关键词。
  写得"略微激进"，宁可多触发不要漏触发。
---
```

正文必须包含：目标、流程、输出格式、至少一个 Input/Output 示例。
正文控制在 500 行以内，超出放 references/。

### SKILL.md 编写原则

- 用祈使句（"分析简历" 而非 "你应该分析简历"）
- 解释为什么，而非堆砌 MUST/NEVER
- Input/Output 示例是最有效的教学
- 多语言/多领域内容用 references/ 分离

## catalog.json 维护

每次新增/修改 Skill 后必须同步更新 catalog.json。格式：

```json
{
  "name": "skill-name",
  "category": "分类目录名",
  "path": "skills/category/skill-name",
  "description": "中文描述",
  "description_en": "English description",
  "tags": ["tag1", "tag2"],
  "complexity": "minimal|standard|advanced",
  "languages": ["zh", "ja", "en"],
  "has_scripts": false,
  "has_evals": false
}
```

## _inbox/ 批量导入流程

当有大量已收集的 Skills 需要入库时，使用 `_inbox/` 目录作为临时中转区。

### 质量分级标准

扫描候选 Skill 时，按以下标准判定 quality_tier：

- **ready**：有合法 SKILL.md（含 YAML frontmatter + 流程 + 至少一个示例），可直接入库或小幅调整
- **needs-work**：有核心内容但缺少 SKILL.md 或格式不规范，需要按 SKILL_SPEC.md 改写后入库
- **reference-only**：内容零散或质量不够，仅作为创建新 Skill 的灵感参考，不入库

### 分类推断规则

根据内容关键词推断 inferred_category：
- **ai-agent**：AI Agent、MCP 服务器、多 Agent 编排、Skill 创建、记忆系统、Agent 工具
- **recruitment**：简历、JD、候选人、面试、招聘、HR、人才
- **knowledge-base**：知识库、RAG、问答、培训、FAQ、检索
- **document**：文档、转换、PDF、Word、Markdown、格式化
- **language**：语言学习、翻译、闪卡、词汇、语法
- **devops**：部署、Docker、CI/CD、服务器、配置、监控、代码质量
- **writing**：写作、文章、公众号、博客、书评、内容创作
- **social-media**：Twitter/X、Reddit、小红书、YouTube、B站、社交平台
- **productivity**：任务管理、日历、CRM、自动化、效率、时间管理
- **research**：学术研究、市场调研、竞品分析、文献综述、调研报告
- **other**：以上都不匹配时，记录并建议新分类

### 导入流程

1. 扫描 `_inbox/` 生成 `scan_report.json`（结构化）+ `scan_report.md`（人类可读）
2. 按 category 分组生成 `category_preview.md`，标注合并和新分类建议
3. ready 级：直接入库或微调 frontmatter
4. needs-work 级：提取核心内容，按 SKILL_SPEC.md 全新改写
5. reference-only 级：跳过，记录在报告中
6. 更新 catalog.json + README
7. 清理 _inbox/，报告移到 `docs/import-history/`

### scan_report.json 格式

```json
{
  "scanned_at": "ISO时间",
  "total_candidates": 0,
  "candidates": [
    {
      "dir_name": "文件夹名",
      "has_skill_md": true,
      "frontmatter": {"name": "...", "description": "..."},
      "inferred_function": "推断的功能描述",
      "inferred_category": "recruitment",
      "file_types": {".md": 3, ".py": 2},
      "languages": ["zh", "en"],
      "total_files": 5,
      "total_lines": 320,
      "quality_tier": "ready",
      "quality_notes": "判定理由"
    }
  ]
}
```

## 常用任务

### 添加新 Skill

1. 确定分类，在 `skills/<category>/` 下创建目录
2. 从 `_templates/` 复制对应模板
3. 编写 SKILL.md（遵循上述规范）
4. 更新 catalog.json
5. 更新 README.md 和 README_en.md 的目录表

### 将已有项目转为 Skill

1. 提取核心流程和指令
2. 用 SKILL_SPEC.md 规范重写为 SKILL.md
3. 大段参考资料放 references/
4. 辅助脚本放 scripts/
5. 注册到 catalog.json

### 批量导入已收集的 Skills

1. 将所有候选 Skill 文件夹放入 `_inbox/`
2. 执行全量扫描，生成 scan_report.json
3. 按 quality_tier 分批处理（ready → needs-work）
4. 更新 catalog.json + README
5. 清理 _inbox/

### 新增分类

1. 在 `skills/` 下创建新目录
2. 在 catalog.json 的 categories 中注册
3. 更新两个 README 的分类说明表
