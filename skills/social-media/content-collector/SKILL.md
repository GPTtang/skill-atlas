---
name: content-collector
description: >
  自动收集社交媒体内容（X/Twitter、即刻、微信公众号、Reddit、知乎、Bilibili、Hacker News 等）并整理成结构化笔记存入飞书多维表格。
  当用户发送链接、截图或混合内容时自动触发。支持平台检测、去重、AI 摘要、飞书云存储一体化流程。
  Use when: user shares a link or screenshot from social media platforms and wants to save/collect/organize content into Feishu.
---

# Content Collector - 社交内容收藏助手

自动收集社交媒体精彩内容，AI 整理后存入飞书多维表格。

> **来源**：[vigorX777/content-collector-skill](https://github.com/vigorX777/content-collector-skill)

## 触发条件

当用户发送以下内容时自动触发：
- **链接**：X/Twitter、即刻、微信公众号、Reddit、知乎、Bilibili、Hacker News 等
- **图片**：截图（OCR 识别后提取链接）
- **混合**：链接 + 截图

## 依赖的 Skill

本 skill 不直接调用外部脚本，而是输出指引由 Agent 在运行时调用对应 skill。

### 必需 Skill

| Skill | 用途 |
|:---|:---|
| **feishu-doc** | 读写飞书文档（追加内容、读取已有内容做去重） |
| **defuddle** | 通用网页正文提取（微信公众号、即刻、Reddit、知乎等） |

### 推荐 Skill（按平台）

| Skill | 用途 |
|:---|:---|
| **x-tweet-fetcher** | X/Twitter 推文、文章、时间线提取（零依赖 FxTwitter API） |
| **web-content-fetcher** | 微信公众号抓取（Scrapling 方案，绕过反爬） |
| **baoyu-url-to-markdown** | 通用 URL 转 Markdown（fallback 方案） |

## 工作流程

```
用户发送链接/图片
  → 平台检测 (extract_content.py)
  → 去重检查 (deduplicate.py)
  → Agent 调用对应 skill 提取内容
  → AI 整理成结构化格式
  → 上传原文到飞书云空间（.md 文件）
  → 写入飞书多维表格
```

### Step 1：平台检测

运行 `extract_content.py` 检测链接来源，获取推荐 skill 和提取方式：

```bash
python3 scripts/extract_content.py "https://x.com/user/status/123"
```

输出示例：
```json
{
  "platform_id": "twitter",
  "platform_label": "X/Twitter",
  "url": "https://x.com/user/status/123",
  "skill": "x-tweet-fetcher",
  "note": "使用 x-tweet-fetcher skill 提取推文/文章内容"
}
```

**支持的平台映射**：

| 平台 | 首选 Skill | Fallback |
|:---|:---|:---|
| X/Twitter | x-tweet-fetcher | — |
| 微信公众号 | web-content-fetcher (Scrapling) | defuddle |
| 即刻 | defuddle | baoyu-url-to-markdown |
| Reddit | defuddle | baoyu-url-to-markdown |
| Hacker News | defuddle | — |
| 知乎 | defuddle | baoyu-url-to-markdown |
| Bilibili | defuddle | baoyu-url-to-markdown |
| 其他 | defuddle | baoyu-url-to-markdown |

### Step 2：去重检查

```bash
python3 scripts/deduplicate.py "https://x.com/user/status/123"
```

- 本地缓存：`.cache/collected_urls.json`
- 自动去除 utm_source、fbclid 等追踪参数后再比对

### Step 3：内容提取

Agent 根据 Step 1 输出调用对应 skill 提取内容。

### Step 4：AI 整理

提取到原始内容后，整理为结构化信息：

| 字段 | 说明 |
|:---|:---|
| 标题 | 内容标题 |
| 来源 | 作者/平台 |
| 分类 | 按内容类型分类 |
| 摘要内容 | AI 生成，3-5 句话概括核心内容 |
| 原文链接 | 原始链接 |
| 原文文件 | 飞书云空间 .md 文件链接 |

### Step 5：存入多维表格（v1.4.0 优化方案）

```
1. 抓取内容 → 保存为 .md 文件
2. 调用 feishu_drive_file upload 上传到飞书云空间
3. LLM 只输出短字段（标题、来源、分类、摘要内容）
4. 调用 feishu_bitable_app_table_record 写入多维表格
```

优势：
- LLM 不输出长文本内容，大幅节省 token
- 原文内容完整，不会截断
- 飞书中直接打开 .md 文件

### Step 6：图片 OCR（可选）

```bash
python3 scripts/ocr_image.py /path/to/image.png
```

识别后自动提取文本中的 URL，回到 Step 1。

## 示例

**Input：** 用户发送 `https://x.com/user/status/123456`

**Output：**
1. 检测平台 → X/Twitter，调用 `x-tweet-fetcher` skill
2. 去重检查 → 未收录
3. 提取推文内容，保存为 `/tmp/content_123456.md`
4. 上传到飞书云空间，获取文件链接
5. AI 生成摘要，写入多维表格：
   - 标题：推文标题
   - 来源：@username / X/Twitter
   - 分类：技术/观点/其他
   - 摘要内容：3-5 句话的核心摘要
   - 原文链接：https://x.com/user/status/123456
   - 原文文件：飞书云空间链接
