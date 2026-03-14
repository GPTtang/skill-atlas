# 贡献指南

感谢你愿意贡献 Skill！这份指南说明如何提交一个高质量的 Skill。

---

## 提交流程

1. Fork 本仓库
2. 在对应分类目录下创建 Skill 目录：`skills/<category>/<skill-name>/`
3. 编写 `SKILL.md`（见下方格式要求）
4. 更新 `catalog.json`（见下方字段说明）
5. 提交 PR，标题格式：`feat(skill): add <skill-name>`

---

## Skill 格式要求

每个 Skill 至少需要一个 `SKILL.md` 文件：

```yaml
---
name: my-skill-name        # 全小写，连字符分隔
description: >
  一句话说明功能。触发场景：关键词1、关键词2。
  Use when: keyword1, keyword2.  # 中英文关键词都写
---

# Skill 名称

简短描述。

## 流程

1. 步骤一（祈使句，具体可执行）
2. 步骤二
3. 步骤三

## 输出格式

说明期望的输出结构。

## 示例

**输入：** 示例输入

**输出：**
示例输出（要真实，不要写占位符）
```

完整规范见 [SKILL_SPEC.md](SKILL_SPEC.md)。

---

## catalog.json 更新

在 `skills` 数组中追加一条记录：

```json
{
  "name": "my-skill-name",
  "category": "devops",
  "path": "skills/devops/my-skill-name",
  "description": "中文描述，一句话",
  "description_en": "English description, one sentence",
  "tags": ["tag1", "tag2"],
  "complexity": "minimal",
  "languages": ["zh", "en"],
  "has_scripts": false,
  "has_evals": false
}
```

`complexity`：`minimal`（只有 SKILL.md）/ `standard`（有脚本或配置）/ `advanced`（有外部依赖）

---

## 分类选择

| 分类 | 适合的 Skill |
|------|-------------|
| `ai-agent` | AI Agent 工具、MCP 服务器、多 Agent 编排、Skill 创建 |
| `devops` | CI/CD、部署、代码质量、开发流程工具 |
| `writing` | 内容创作、文案、配图、信息图 |
| `research` | 学术研究、市场调研、竞品分析 |
| `social-media` | Twitter/X、公众号、小红书、内容分发 |
| `productivity` | 任务管理、头脑风暴、效率工具 |
| `document` | 文档处理、格式转换、视觉设计 |
| `recruitment` | 简历分析、JD 生成、候选人评估 |
| `knowledge-base` | RAG、知识库、问答系统 |
| `language` | 语言学习、翻译、词汇练习 |

---

## 质量标准

提交前自查：

- [ ] `name` 是 kebab-case，与目录名一致
- [ ] `description` 包含触发关键词（中英文）
- [ ] 流程步骤是祈使句，具体可执行
- [ ] 有至少一个真实感的 Input/Output 示例
- [ ] SKILL.md 不超过 500 行
- [ ] catalog.json 已更新
- [ ] 基于真实使用场景（不是纯理论）

---

## 不接受的内容

- 依赖特定付费平台且无法独立使用的 Skill
- 纯理论、无示例的 Skill
- 与现有 Skill 高度重叠的重复提交
- 涉及逆向工程平台 API 的高风险 Skill
