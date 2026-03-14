# 如何创建 Skill

创建 Skill 有三种路径，选择最适合你的。

---

## 路径 1：用 Claude Code 辅助创建（推荐新手）

直接告诉 Claude Code 你想要什么：

```
请帮我创建一个新的 Skill：

功能描述：自动分析 GitHub 仓库的代码质量，输出评分报告
分类：devops
复杂度：standard
```

Claude Code 会自动读取 CLAUDE.md 和 SKILL_SPEC.md，然后：
1. 推荐合适的 Skill 名和分类
2. 生成 SKILL.md 草稿
3. 等你确认后写入文件
4. 更新 catalog.json 和 README

参考 `02-add-skills.md` 中的 prompt 模板。

---

## 路径 2：从模板手动创建

1. 根据复杂度选择模板：
   ```bash
   cp -r _templates/minimal/    skills/[category]/[skill-name]/
   cp -r _templates/standard/   skills/[category]/[skill-name]/
   cp -r _templates/with-evals/ skills/[category]/[skill-name]/
   ```

2. 编辑 `SKILL.md`，遵循 [SKILL_SPEC.md](../SKILL_SPEC.md) 规范

3. 更新 `catalog.json`

4. 更新 `README.md` 和 `README_en.md`

---

## 路径 3：将已有工具转为 Skill

如果你有一个 README、文档或已有脚本，发给 Claude Code：

```
我有一个已有工具，想转成 Skill。资料如下：
[粘贴 README 或功能描述]
```

Claude Code 会提取核心流程、改写为 SKILL.md 格式。

---

## 关键原则

**1. 一个 Skill 做一件事**

好的 Skill：`resume-analyzer`（分析简历技能匹配度）
不好的 Skill：`hr-everything`（招聘流程全搞定）

**2. 触发词要够用**

description 的作用是让 Claude 知道"什么时候用这个 Skill"。写太窄会漏触发：

```yaml
# 太窄
description: 分析英文简历。

# 合适
description: >
  分析候选人简历，匹配职位要求，输出评分报告。
  触发场景：简历筛选、候选人评估、技能匹配。
  关键词：简历、CV、resume、候选人、招聘、JD 匹配。
```

**3. 示例 > 规则**

用一个真实示例教 Claude，胜过写十条 MUST/NEVER。

**4. 控制篇幅**

SKILL.md 超过 500 行，Claude 的注意力会分散。长内容放 `references/`。

---

## 提交 PR

1. Fork 仓库
2. 在对应分类目录创建 Skill
3. 更新 catalog.json
4. 运行 `03-maintenance.md 任务 5`（发布前检查）
5. 提交 PR，标题格式：`feat(skill): add [skill-name]`
