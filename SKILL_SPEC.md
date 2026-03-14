# SKILL_SPEC — Skill 编写规范

本文档是编写 Claude Skill 的权威参考，**人和 AI 共用**。

---

## 1. 什么是 Skill

Skill 是一份写给 Claude 的结构化指令，告诉它"遇到某类任务时，该怎么做"。

一个合格的 Skill：
- 解决**一个具体的、可重复的**任务
- 包含**可执行的流程**，而非模糊建议
- 有**示例**展示期望的输入输出
- **篇幅适中**（正文 ≤ 500 行），超出部分放 `references/`

---

## 2. 目录结构

```
skill-name/
├── SKILL.md          # 必需
├── scripts/          # 可选：可直接运行的辅助脚本
├── references/       # 可选：大段参考资料（按需加载）
├── assets/           # 可选：模板、示例文件
└── evals/            # 可选：测试用例
    └── evals.json
```

---

## 3. SKILL.md 格式

### 3.1 Frontmatter（必需）

```yaml
---
name: kebab-case-name
description: >
  一句话说明功能，加上触发场景和关键词。
  写得"略微激进"——宁可多触发，不要漏触发。
---
```

**name 规范：**
- 全小写，连字符分隔，无空格
- 描述功能而非技术实现：`resume-analyzer` 而非 `gpt-hr-tool`

**description 规范：**
- 第一句说"做什么"
- 第二句说"何时触发"（场景 + 关键词）
- 中英文关键词都要写（如果面向多语言用户）

### 3.2 正文结构（推荐顺序）

```markdown
# Skill 名称

简短描述（1-2 句话，补充 frontmatter）

## 前置条件（如有）

依赖的工具、API key、环境要求

## 流程

1. 步骤一（祈使句）
2. 步骤二
3. ...

## 输出格式

说明期望的输出结构、格式、长度

## 示例

### 示例 1

**输入：** ...

**输出：** ...

## 注意事项（如有）

边界情况、常见错误、限制说明
```

---

## 4. 写作原则

### 用祈使句，不用描述句

| 错误 | 正确 |
|------|------|
| "你应该分析简历的技能匹配度" | "分析简历，找出与 JD 要求匹配/不匹配的技能" |
| "Claude 会生成一份报告" | "生成报告，包含：技能匹配度、缺口分析、建议" |

### 解释为什么，不堆砌 MUST/NEVER

| 弱 | 强 |
|----|-----|
| "MUST include a summary. NEVER skip examples." | "包含摘要，因为用户通常只看前三行；示例是理解输出格式最快的方式" |

### 示例是最强的教学工具

- 至少一个完整的 Input → Output 示例
- 示例要真实，不要造假数据
- 如果功能复杂，提供 2-3 个覆盖不同场景的示例

### 篇幅控制

- SKILL.md 正文 ≤ 500 行
- 大段参考文档、领域知识 → `references/`
- 可执行脚本 → `scripts/`

---

## 5. 分类规则

根据功能主题选择分类，**选最具体的**：

| 分类 | 关键词 |
|------|--------|
| `recruitment` | 简历、JD、候选人、面试、招聘、人才筛选 |
| `knowledge-base` | 知识库、RAG、问答、培训、FAQ、检索增强 |
| `document` | 文档、PDF、Word、Markdown、格式转换、模板 |
| `language` | 语言学习、翻译、闪卡、词汇、语法、口语 |
| `devops` | 部署、Docker、CI/CD、服务器、监控、Agent 工具 |
| `writing` | 写作、公众号、博客、书评、文章、内容创作 |
| `social-media` | Twitter/X、Reddit、小红书、YouTube、B站、社交平台 |
| `productivity` | 任务管理、日历、CRM、自动化、效率、时间管理 |
| `research` | 学术研究、市场调研、竞品分析、文献综述、调研报告 |

---

## 6. 质量等级

提交时自评，也用于 _inbox 导入分级：

| 等级 | 标准 |
|------|------|
| **ready** | 有合法 frontmatter + 完整流程 + ≥1 个示例 |
| **needs-work** | 有核心内容，但缺 frontmatter / 缺示例 / 格式不规范 |
| **reference-only** | 内容零散，仅作灵感参考，不直接入库 |

---

## 7. evals.json 格式（可选）

```json
{
  "skill": "skill-name",
  "version": "1.0",
  "cases": [
    {
      "id": "basic-01",
      "description": "测试基本功能",
      "input": "用户输入内容",
      "expected_contains": ["期望输出中应包含的关键词"],
      "expected_format": "markdown | json | plain",
      "notes": "评估说明"
    }
  ]
}
```

---

## 8. catalog.json 字段说明

每个 Skill 在 catalog.json 中的注册格式：

```json
{
  "name": "skill-name",
  "category": "devops",
  "path": "skills/devops/skill-name",
  "description": "中文描述，一句话",
  "description_en": "English description, one sentence",
  "tags": ["tag1", "tag2"],
  "complexity": "minimal | standard | advanced",
  "languages": ["zh", "en"],
  "has_scripts": false,
  "has_evals": false
}
```

`complexity` 判断标准：
- `minimal`：只有 SKILL.md，无依赖
- `standard`：有 scripts 或 references，需要配置
- `advanced`：有外部依赖、需要安装工具或 API Key
