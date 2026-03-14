# Claude Code 执行方案：初始化仓库

> 使用场景：**第一次**搭建 skill-atlas 仓库骨架时使用。
> 如果仓库已存在结构，跳过此文件，直接使用 04-scan-and-classify.md。

---

## 任务 1：确认骨架已就绪

```
请检查当前目录，确认以下结构是否已存在：

必需文件：
- CLAUDE.md
- SKILL_SPEC.md
- catalog.json
- README.md
- README_en.md
- LICENSE

必需目录：
- skills/{recruitment,knowledge-base,document,language,devops,writing,social-media,productivity,research}/
- _templates/{minimal,standard,with-evals/evals}/
- docs/import-history/

如果以上结构已完整，回复"骨架已就绪，可直接进行 Skills 导入"，不要执行任何修改。
如果有缺失，列出缺少的文件/目录，然后执行任务 2。
```

---

## 任务 2：创建缺失的骨架文件

```
请根据上一步的检查结果，创建以下缺失内容：

1. 缺失的目录：用 mkdir -p 批量创建
2. LICENSE（如果缺失）：使用 MIT License，版权归 Contributors，年份为当前年

模板文件创建：

_templates/minimal/SKILL.md：
---
name: your-skill-name
description: >
  一句话说明功能。触发场景：[关键词1]、[关键词2]。
---

# Skill 名称

简短描述。

## 流程

1. 步骤一
2. 步骤二
3. 步骤三

## 输出格式

描述期望的输出结构。

## 示例

**输入：** ...

**输出：** ...

---

_templates/standard/SKILL.md：在 minimal 基础上增加"## 前置条件"和"## 注意事项"章节。

_templates/with-evals/SKILL.md：在 standard 基础上增加"## 测试用例"章节，引用 evals/evals.json。

_templates/with-evals/evals/evals.json：
{
  "skill": "skill-name",
  "version": "1.0",
  "cases": [
    {
      "id": "basic-01",
      "description": "基本功能测试",
      "input": "示例输入",
      "expected_contains": ["关键词1", "关键词2"],
      "expected_format": "markdown",
      "notes": ""
    }
  ]
}

完成后列出所有创建的文件，不需要 git commit。
```

---

## 任务 3：初始化 Git 仓库

```
请执行 git 初始化：

1. git init（如果还不是 git 仓库）
2. 创建 .gitignore，内容包含：
   _inbox/
   .DS_Store
   *.pyc
   __pycache__/
   .env
   node_modules/
3. git add CLAUDE.md SKILL_SPEC.md catalog.json README.md README_en.md LICENSE .gitignore _templates/ docs/ skills/
4. git commit -m "init: project skeleton"

完成后输出 git log --oneline 确认提交成功。
```

---

## 完成后

骨架建好后，下一步是导入已收集的 Skills：

```bash
# 把收集的 Skills 文件夹放入 _inbox/
cp -r /path/to/collected/skills/* _inbox/

# 发送 04-scan-and-classify.md 中的任务内容给 Claude Code
```
