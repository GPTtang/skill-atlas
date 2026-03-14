# Claude Code 执行方案：总览

## 文件清单

本方案包含以下文件，按执行顺序排列：

| 文件 | 用途 | 何时使用 |
|------|------|---------|
| `CLAUDE.md` | 项目指令文件 | 放入仓库根目录，Claude Code 自动读取 |
| `01-init-repo.md` | 初始化仓库 | 第一次搭建仓库时使用 |
| `04-scan-and-classify.md` | 扫描分类已有 Skills | 有大量已收集的 Skills 需要筛选入库时使用 |
| `02-add-skills.md` | 手动添加单个 Skill | 逐个添加新 Skill 时参考 |
| `03-maintenance.md` | 日常维护 | 校验、审查、发布前检查 |

## 快速开始

### 1. 初始化仓库

```bash
cd ~/projects
claude
# 发送 01-init-repo.md 中的任务内容
```

完成后你会得到：
```
skill-atlas/
├── CLAUDE.md
├── README.md / README_en.md
├── SKILL_SPEC.md
├── catalog.json
├── LICENSE
├── .gitignore
├── skills/          （6个分类空目录）
├── _templates/      （3级模板）
└── docs/            （3份文档）
```

### 2. 批量导入已收集的 Skills（推荐路径）

你已经收集了大量 Skills，推荐使用 `04-scan-and-classify.md` 中的流程：

```bash
cd skill-atlas

# 把收集的 Skills 文件夹全部放入 _inbox/
mkdir _inbox
cp -r /path/to/your/collected/skills/* _inbox/

# 启动 Claude Code
claude

# 按 04-scan-and-classify.md 的步骤执行：
# 任务1 → 全量扫描，生成报告
# 任务2 → 分类预览，确认归组
# 任务3 → 逐个确认 ready 级入库
# 任务4 → 改写 needs-work 级入库
# 任务6 → 清理 _inbox
```

或者用 **任务5（一键全流程）** 跳过交互，一次性完成。

### 3. 手动添加单个 Skill

如果后续有新 Skill 要单独添加：

```bash
claude
# 使用 02-add-skills.md 中的 prompt 模板
```

### 4. 推送到 GitHub

```bash
git remote add origin git@github.com:<your-username>/skill-atlas.git
git branch -M main
git push -u origin main
```

### 5. 持续维护

每次添加或修改 Skill 后：
- 运行 **一致性校验**（03-maintenance.md 任务1）
- 对新 Skill 运行 **质量审查**（03-maintenance.md 任务3）

## 工作流示意

```
┌───────────────────────────────────────┐
│  收集的 Skills 放入 _inbox/            │
└──────────────┬────────────────────────┘
               │
               ▼
┌───────────────────────────────────────┐
│  任务1：全量扫描                       │  04-scan-and-classify.md
│  → scan_report.json + scan_report.md  │
└──────────────┬────────────────────────┘
               │
               ▼
┌───────────────────────────────────────┐
│  任务2：分类预览                       │  按领域归组，发现合并/新分类
│  → category_preview.md                │
└──────────────┬────────────────────────┘
               │
               ▼
┌───────────────────────────────────────┐
│  任务3：ready 级直接入库               │  有 SKILL.md 且合规
│  任务4：needs-work 级改写入库          │  提取核心，按规范改写
└──────────────┬────────────────────────┘
               │
               ▼
┌───────────────────────────────────────┐
│  更新 catalog.json + README            │  自动同步
│  质量审查 + 一致性校验                  │  03-maintenance.md
└──────────────┬────────────────────────┘
               │
               ▼
┌───────────────────────────────────────┐
│  任务6：清理 _inbox                    │
│  git commit + push                    │
└───────────────────────────────────────┘


后续单个添加：

┌─────────────────┐     参考 02-add-skills.md
│  启动 Claude Code │────── 中的 prompt 模板
│  发送添加任务      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐     Claude Code 自动读取
│  Claude Code 执行 │────── CLAUDE.md 了解规范
│  创建 Skill       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  质量审查 + 校验  │     03-maintenance.md
│  git commit      │
└─────────────────┘
```

## 注意事项

1. **CLAUDE.md 是关键** — Claude Code 每次启动自动读取，不需要你每次重复说明项目规范
2. **catalog.json 是索引** — AI 可以快速检索相关 Skill 作为参考，不需要遍历整个目录
3. **_inbox/ 是临时区** — 只用于导入，处理完毕后删除，不提交到 Git
4. **scan_report.json 留档** — 处理完后移到 docs/import-history/，记录导入历史
5. **Skill 质量 > 数量** — 每个 Skill 都是 AI 创建新 Skill 的参考，质量直接影响生成质量
