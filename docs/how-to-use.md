# 如何使用 Skill

## 在 Claude Code 中使用

### 方法 1：用户级安装（推荐）

将 Skill 目录复制到 Claude Code 的用户 skills 目录，所有项目都能使用：

```bash
cp -r skills/devops/agent-reach ~/.claude/skills/
```

重新启动 Claude Code 后，skill 自动加载。触发条件：当你的请求符合 Skill 描述的场景时，Claude 会自动激活。

### 方法 2：项目级安装

只在当前项目使用：

```bash
cp -r skills/devops/agent-reach .claude/skills/
```

### 方法 3：手动加载

将 SKILL.md 内容直接粘贴到对话中，或作为系统提示传入。

---

## 在 Claude.ai 中使用

1. 下载对应 Skill 的 `SKILL.md` 文件
2. 打开 Claude.ai，点击技能图标（🧩）
3. 选择"上传自定义技能"
4. 上传 `SKILL.md` 文件
5. 技能激活后，Claude 会在相关场景自动应用

---

## 通过 API 使用

```python
import anthropic

client = anthropic.Anthropic()

# 读取 Skill 内容
with open("skills/devops/agent-reach/SKILL.md") as f:
    skill_content = f.read()

response = client.messages.create(
    model="claude-opus-4-6",
    system=skill_content,  # Skill 作为系统提示
    messages=[
        {"role": "user", "content": "帮我搜索 Twitter 上关于 Claude Code 的最新讨论"}
    ]
)
print(response.content[0].text)
```

### 同时使用多个 Skill

```python
# 合并多个 Skill 的内容
skills = ["skills/devops/agent-reach", "skills/research/market-research"]
combined = "\n\n---\n\n".join(
    open(f"{s}/SKILL.md").read() for s in skills
)

response = client.messages.create(
    model="claude-opus-4-6",
    system=combined,
    messages=[...]
)
```

---

## 查找合适的 Skill

### 通过 catalog.json 检索

```python
import json

with open("catalog.json") as f:
    catalog = json.load(f)

# 按分类筛选
devops_skills = [s for s in catalog["skills"] if s["category"] == "devops"]

# 按标签筛选
twitter_skills = [s for s in catalog["skills"] if "twitter" in s.get("tags", [])]
```

### 通过 Claude Code 搜索

```
请在 catalog.json 中找到与"社交媒体搜索"相关的 Skill，列出名称和功能描述。
```
