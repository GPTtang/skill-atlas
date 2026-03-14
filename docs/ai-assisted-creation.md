# AI 辅助创建 Skill

本文档说明如何让 Claude Code 全程帮你完成 Skill 创建和管理工作。

---

## 前提：CLAUDE.md 是关键

Claude Code 每次启动会自动读取 `CLAUDE.md`，因此你不需要每次解释项目规范。只要仓库根目录有 CLAUDE.md，Claude 就知道：

- Skill 的标准格式（SKILL.md 规范）
- 分类体系（9 个分类）
- catalog.json 的维护方式
- 质量分级标准（ready/needs-work/reference-only）

---

## 工作流：用 Claude Code 管理整个仓库

### 场景 1：有大量收集的 Skills，要批量导入

```
_inbox/ 中是我收集的 Skills 文件夹。
请按 04-scan-and-classify.md 的任务 5（一键全流程）执行导入。
```

Claude 会自动扫描、分级、改写、入库，你只需要在关键决策点确认。

### 场景 2：有一个想法，让 Claude 帮写 Skill

```
请帮我创建一个 Skill：功能是 [描述]，分类是 [分类]。
先展示草稿让我确认，再写入文件。
```

### 场景 3：发现某个 Skill 质量不好，让 Claude 改

```
请审查 skills/[分类]/[skill-name]/SKILL.md，
按 SKILL_SPEC.md 的标准指出问题并给出改写建议。
```

### 场景 4：定期维护

```
请执行 03-maintenance.md 任务 1（一致性校验）。
```

---

## 和 Eval 配合测试 Skill

创建 Skill 后，验证它是否真的比"不用 Skill"效果好：

```
请对 skills/[分类]/[skill-name]/ 执行 Eval 测试（03-maintenance.md 任务 4）。
```

Claude 会：
1. 读取或生成测试用例
2. 启动两个子 Agent 对比输出（有 Skill vs 无 Skill）
3. 输出 HTML 对比报告
4. 根据结果提出改进建议

这是验证 Skill 效果最系统的方法。

---

## 提示技巧

**让 Claude 先预览再执行：**
在任何创建/修改任务中，加上"先展示草稿让我确认，再写入文件"，避免一次性改动太多。

**指定参考已有 Skill：**
```
请参考 skills/devops/agent-reach/SKILL.md 的风格，帮我创建一个类似结构的 Skill，功能是...
```

**批量操作时分步骤确认：**
```
请先执行任务 1（扫描），输出报告后暂停，等我确认再继续任务 2。
```
