# Claude Code 执行方案：日常维护

> 使用场景：添加或修改 Skill 后的校验、审查和发布前检查。

---

## 任务 1：一致性校验

发布前必跑，确保 catalog.json、README 和实际文件三者同步。

```
请执行仓库一致性校验：

1. 遍历 skills/ 下所有子目录，收集实际存在的 Skill 列表
2. 与 catalog.json 的 skills[] 数组对比：
   - 在 skills/ 存在但不在 catalog.json 的 → 漏注册
   - 在 catalog.json 但 skills/ 目录不存在的 → 幽灵条目
3. 检查每个 Skill 的 SKILL.md：
   - 是否有合法 frontmatter（name + description）
   - name 是否与目录名一致
   - 文件行数是否超过 500 行
4. 检查 README.md 分类表中的数量是否与实际一致
5. 输出结构化报告：

## 校验报告 [日期]

### 漏注册（N 个）
- skills/[category]/[name] → 需添加到 catalog.json

### 幽灵条目（N 个）
- catalog.json 中的 [name] → skills/ 目录不存在

### SKILL.md 问题（N 个）
- [path] → [问题描述]

### README 计数不一致（N 个）
- [分类] → README 显示 X，实际 Y

### 通过 ✓
一切正常，无需修复。

发现问题后询问我是否自动修复，不要直接修改。
```

---

## 任务 2：更新 catalog.json 和 README

批量更新，将实际 Skills 同步到索引和文档。

```
请重新生成 catalog.json 的 skills[] 数组和 README.md 的分类表：

1. 遍历 skills/ 下所有 SKILL.md，提取：
   - name（frontmatter）
   - description（frontmatter，中文）
   - 目录路径推断 category 和 path
   - 检查是否有 scripts/（has_scripts）
   - 检查是否有 evals/（has_evals）
   - 通过行数和目录结构推断 complexity
   - 通过内容检测 languages

2. 用提取结果重写 catalog.json 的 skills 数组（保留 version、updated_at、categories）

3. 重写 README.md 和 README_en.md 中每个分类行的数量，并在各分类下添加 Skill 列表（如果 README 有详细列表区域）

4. 更新 catalog.json 的 updated_at 为今天日期

完成后输出变更摘要（新增/修改/删除了哪些条目）。
```

---

## 任务 3：单个 Skill 质量审查

对新提交或刚导入的 Skill 进行深度质量审查。

```
请对 skills/[分类]/[skill-name]/ 执行质量审查：

**格式检查：**
□ frontmatter 格式正确（YAML，name 为 kebab-case，description 非空）
□ description 包含：功能说明 + 触发场景 + 至少 2 个触发关键词
□ 正文有流程（步骤为祈使句，不是描述句）
□ 正文有示例（Input/Output 格式，真实感）
□ 行数 ≤ 500
□ 超长内容已放入 references/（如果有）

**内容质量：**
□ 功能定位清晰，不与现有 Skill 高度重叠
□ 流程步骤具体可执行（不是"分析需求"这种模糊步骤）
□ 示例真实，不是占位符（"input here"之类）
□ 如果有 scripts/，脚本有注释说明用途
□ 如果有 evals/，测试用例覆盖核心功能

**输出：**
- 通过的检查项 ✓
- 需要改进的检查项 × + 具体改进建议
- 总体评分：ready / needs-minor-fix / needs-rework
```

---

## 任务 4：Skill Evals（测试对比）

用于验证一个 Skill 是否比"不用 Skill"的输出更好。

```
请对 skills/[分类]/[skill-name]/ 执行 Eval 测试：

测试用例来源：
- 如果有 evals/evals.json，使用其中的 cases
- 如果没有，根据 SKILL.md 的功能描述生成 3 个有代表性的测试用例

测试方式：
1. 读取测试用例的 input
2. 启动两个子 Agent：
   - Agent A：加载 SKILL.md 作为系统提示，处理 input
   - Agent B：不加载 Skill，只用相同的 input 直接处理
3. 收集两个输出

评估维度：
- 格式符合度：输出格式是否符合 SKILL.md 中定义的输出格式
- 完整性：是否覆盖了 expected_contains 中的关键词
- 一致性：多次运行是否稳定（可只评估一次）

输出 HTML 对比报告，包含：
- 每个测试用例的 Agent A vs Agent B 输出
- 通过/失败标注
- 改进建议（如果 Skill 效果不如预期）

询问是否要根据结果改写 SKILL.md。
```

---

## 任务 5：发布前检查清单

PR 合并或 push 到 main 之前运行。

```
请执行发布前完整检查：

1. 运行任务 1（一致性校验），确认零问题
2. 确认所有新增 Skill 的 SKILL.md 格式正确
3. 确认 catalog.json updated_at 已更新为今天
4. 确认 README.md 和 README_en.md 分类表数量准确
5. 确认没有 _inbox/ 内容被意外提交（检查 .gitignore）
6. 输出 git diff --stat 的摘要

全部通过后，建议的 commit message 格式：
- 新增 Skill：feat(skill): add [skill-name] to [category]
- 批量导入：feat: batch import N skills ([categories])
- 修复/改进：fix(skill): improve [skill-name] [what changed]
- 维护：chore: update catalog and README

所有检查通过后输出 "✅ Ready to commit"，否则列出阻塞项。
```
