# Claude Code 执行方案：扫描已有 Skills 集合，筛选分类分级

> 使用场景：你已经收集了大量 Skills（本地文件夹，格式各异），需要先扫描分析再决定哪些入库、怎么入库。
>
> 前置条件：已完成 01-init-repo（仓库骨架已搭好）

---

## 任务 1：全量扫描 — 生成 Skills 清单报告

将你收集的 Skills 文件夹放到仓库根目录下的 `_inbox/` 中，然后发送：

```
我在 _inbox/ 目录中放了收集来的 Skills 文件夹，格式各异。请执行全量扫描：

1. 遍历 _inbox/ 下所有子目录（每个子目录视为一个候选 Skill）
2. 对每个候选 Skill 分析：
   - 是否有 SKILL.md？有的话解析 frontmatter (name, description)
   - 没有 SKILL.md 的话，扫描所有文件，推断其功能和领域
   - 统计文件构成：.md / .py / .js / .sh / .json / 其他
   - 检测语言环境：中文 / 英文 / 日文 / 混合
   - 估算内容体量：文件数、总行数

3. 生成 _inbox/scan_report.json，格式如下：

{
  "scanned_at": "ISO时间",
  "total_candidates": 数量,
  "candidates": [
    {
      "dir_name": "文件夹名",
      "has_skill_md": true/false,
      "frontmatter": {"name": "...", "description": "..."} 或 null,
      "inferred_function": "推断的功能描述",
      "inferred_category": "推荐分类 (recruitment/knowledge-base/document/language/devops/writing/other)",
      "file_types": {".md": 3, ".py": 2, ...},
      "languages": ["zh", "en"],
      "total_files": 数量,
      "total_lines": 数量,
      "quality_tier": "ready/needs-work/reference-only",
      "quality_notes": "判定理由"
    }
  ]
}

4. 同时生成 _inbox/scan_report.md 人类可读版本，按 quality_tier 分组展示

quality_tier 判定标准：
- ready：有合法的 SKILL.md（含 frontmatter + 流程 + 示例），可直接入库或小幅调整
- needs-work：有核心内容但缺少 SKILL.md 或格式不规范，需要改写后入库
- reference-only：内容零散或质量不够，仅作为创建新 Skill 的灵感参考
```

---

## 任务 2：分类预览 — 按领域归组

扫描完成后发送：

```
请读取 _inbox/scan_report.json，生成分类预览：

1. 按 inferred_category 分组，展示每组的候选 Skill 列表
2. 标注哪些 Skill 可以合并（功能高度重叠的）
3. 标注需要新建分类的（现有 6 个分类覆盖不了的）
4. 输出为 _inbox/category_preview.md，格式：

## 🏢 recruitment (N 个)
| 文件夹 | 质量 | 推断功能 | 备注 |
|--------|------|---------|------|
| ... | ready | ... | 可直接入库 |
| ... | needs-work | ... | 需补充示例 |

## 📚 knowledge-base (N 个)
...

## ⚠️ 需要新建分类 (N 个)
| 文件夹 | 推荐分类名 | 功能 |
...

## 🔀 建议合并 (N 组)
| 组 | 包含 | 合并理由 |
...

请不要执行任何修改，只输出分析报告让我决策。
```

---

## 任务 3：交互式决策 — 逐个确认入库

分类预览确认后发送：

```
请读取 _inbox/scan_report.json 和 _inbox/category_preview.md。

现在逐个处理所有 quality_tier 为 "ready" 的候选 Skill：

对每个候选，告诉我：
- 原始文件夹名 + 推断功能
- 建议的 Skill 名称 (kebab-case)
- 建议的分类
- 需要做的调整（如有）

然后等我确认（y/n/修改意见）后再执行：
1. 创建 skills/<category>/<skill-name>/
2. 如已有 SKILL.md 且合规 → 直接复制，微调 frontmatter
3. 如 SKILL.md 需调整 → 按 SKILL_SPEC.md 改写
4. 复制 scripts/references/assets
5. 更新 catalog.json
6. git add（先不 commit，最后统一）

全部 ready 的处理完后，统一更新 README 目录表并 git commit。
```

---

## 任务 4：批量改写 — 处理 needs-work 级别

```
请读取 _inbox/scan_report.json，列出所有 quality_tier 为 "needs-work" 的候选。

对每个候选：
1. 展示原始内容摘要（核心功能、关键文件）
2. 指出与 SKILL_SPEC.md 的差距（缺 frontmatter / 缺示例 / 篇幅过长 / 无流程...）
3. 给出改写方案预览（一段话描述怎么改）

等我逐个确认后执行改写：
1. 创建 skills/<category>/<skill-name>/
2. 从原始内容提取核心逻辑，按 SKILL_SPEC.md 编写全新 SKILL.md
3. 原始内容中有价值的文档放入 references/
4. 原始脚本放入 scripts/
5. 更新 catalog.json

全部处理完后统一更新 README 并 git commit。
```

---

## 任务 5：一键全流程 — 扫描到入库

如果你想跳过交互，一次性完成所有步骤：

```
_inbox/ 中是我收集的 Skills 文件夹。请执行完整的扫描-分类-入库流程：

1. 扫描全部候选 Skill，生成 scan_report.json
2. 按 quality_tier 分组：
   - ready：直接入库，SKILL.md 合规的原样复制，不合规的微调 frontmatter
   - needs-work：提取核心内容，按 SKILL_SPEC.md 改写为标准 SKILL.md
   - reference-only：跳过，但在 scan_report.md 中记录供后续参考
3. 所有入库的 Skill 注册到 catalog.json
4. 更新 README.md 和 README_en.md 目录表
5. 生成处理报告 _inbox/import_summary.md，包含：
   - 成功入库 N 个（列表）
   - 改写入库 N 个（列表 + 改写摘要）
   - 跳过 N 个（列表 + 原因）
   - 新建分类 N 个（如有）
6. git add && git commit -m "batch import: N skills from _inbox"

处理原则：
- 遵循 CLAUDE.md 和 SKILL_SPEC.md 中的所有规范
- SKILL.md 控制在 500 行以内
- 每个 Skill 至少包含一个 Input/Output 示例
- description 要写得"略微激进"确保触发
- 如果原始内容没有示例，根据功能合理编造
- 功能重叠的 Skill 合并为一个，取最完整的版本
```

---

## 任务 6：清理 _inbox

全部处理完成后：

```
入库工作已完成。请执行清理：

1. 确认 _inbox/ 中所有 ready 和 needs-work 的内容已入库（对比 scan_report.json 和 catalog.json）
2. 将 _inbox/scan_report.json 和 _inbox/scan_report.md 移到 docs/import-history/ 留档
3. 删除 _inbox/ 目录
4. 确保 .gitignore 中有 _inbox/ 条目（防止未来误提交）
5. git commit -m "cleanup: remove _inbox after import"
```
