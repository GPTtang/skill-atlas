# Claude Code 执行方案：添加单个 Skill

> 使用场景：逐个手动添加新 Skill 时参考。
> 批量导入已有 Skills 请使用 04-scan-and-classify.md。

---

## 方式 A：从头创建新 Skill

发送以下 prompt 给 Claude Code（替换 `[...]` 部分）：

```
请帮我创建一个新的 Skill：

功能描述：[用一两句话描述这个 Skill 要做什么]
目标用户：[这个 Skill 针对什么场景/用户]
分类：[从 recruitment/knowledge-base/document/language/devops/writing/social-media/productivity/research 中选择]
复杂度：[minimal（纯指令）/ standard（有脚本或配置）/ advanced（有外部依赖）]

额外说明（可选）：
- 依赖工具：[如 yt-dlp、gh CLI 等]
- 参考资料：[已有的文档、README、代码]
- 示例输入输出：[如果你有具体例子]

请：
1. 从 _templates/[复杂度]/ 复制模板
2. 在 skills/[分类]/[skill-name]/ 下创建 SKILL.md
3. 遵循 SKILL_SPEC.md 的规范（frontmatter + 流程 + 示例）
4. 将 Skill 注册到 catalog.json
5. 更新 README.md 和 README_en.md 的分类表（数量 +1，加入列表）
6. 输出创建的文件路径和 SKILL.md 内容预览

先展示 SKILL.md 草稿让我确认，确认后再写入文件。
```

---

## 方式 B：将已有项目/文档转为 Skill

```
我有一个已有的项目/工具/文档，想把它转成 Claude Skill。

资料如下：
[粘贴你的 README、文档、代码片段，或者描述这个工具的功能]

请：
1. 提取核心流程和指令（忽略安装说明、营销语言、版本历史）
2. 按 SKILL_SPEC.md 规范重写为 SKILL.md
3. 如果原内容超过 500 行，把大段参考资料放入 references/
4. 如果有可执行脚本，放入 scripts/
5. 推断合适的分类和 name（kebab-case）
6. 先展示草稿让我确认，确认后写入 skills/[分类]/[name]/

写作原则：
- 用祈使句（"分析简历" 而非 "你应该分析简历"）
- 每个步骤要具体可执行，不要写模糊建议
- 至少编造一个真实感的示例（如果原材料没有示例）
```

---

## 方式 C：克隆并改写现有 Skill

```
我想基于现有的 Skill 创建一个变体版本：

原始 Skill：skills/[分类]/[原-skill-name]/
变体说明：[描述你想改变什么，例如"针对日文简历"、"增加 JSON 输出模式"]
新 Skill 名：[new-skill-name]（留空则由你推荐）

请：
1. 读取原始 SKILL.md
2. 按变体说明修改，保留不变的部分
3. 更新 frontmatter 的 name 和 description
4. 在同分类或新分类下创建新 Skill
5. 注册到 catalog.json，更新 README
```

---

## 质量自检清单

Skill 创建完成后，验证以下项目：

```
请对刚创建的 skills/[分类]/[skill-name]/ 执行质量自检：

□ frontmatter 有 name（kebab-case）和 description
□ description 包含触发场景和关键词
□ 正文有流程章节（步骤是祈使句）
□ 正文有示例章节（Input → Output 格式）
□ SKILL.md 不超过 500 行
□ catalog.json 已更新
□ README 分类表已更新（数量正确）

输出通过/失败的检查项，失败的给出修复建议。
```
