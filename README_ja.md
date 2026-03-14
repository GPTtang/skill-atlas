# Skill Atlas

**構造化されたClaude Skillsオープンソースコレクション — AIエージェント、開発、ライティング、リサーチ、SNSなど26個のすぐに使えるSkill。**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Skills-26-blue)](catalog.json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[中文](README.md) · [English](README_en.md) · [Skillを投稿する](CONTRIBUTING.md) · [記述仕様](SKILL_SPEC.md)

---

## Claude Skillとは？

SkillはClaudeへの構造化された指示ファイル（`SKILL.md`）で、特定のシナリオでどう動作すべきかを教えます。インストール後、Claudeはいつそれを使うべきか**自動的に判断**します。手動でのトリガーは不要です。

```
あなた：この記事をWeChat公式アカウントに投稿して
Claude：（post-to-wechat skillが自動起動）はい、投稿しますね...
```

**このリポジトリの役割**：高品質なSkillファイルを収集・整理・管理し、ゼロから書かずにコピーしてすぐ使えるようにします。

---

## Skills一覧

### 🤖 AI & Agent (5)

| Skill | 説明 |
|-------|------|
| [agent-reach](skills/ai-agent/agent-reach/) | Twitter/X・Reddit・YouTube・GitHub・Bilibili・小紅書など複数プラットフォームの情報を一括取得・検索 |
| [agent-memory](skills/ai-agent/agent-memory/) | AIエージェントのセッション横断型永続メモリ（事実・経験・エンティティ追跡） |
| [agent-team-orchestration](skills/ai-agent/agent-team-orchestration/) | 複数エージェントチームの編成：役割・タスクライフサイクル・引き継ぎプロトコル・品質ゲートを定義 |
| [mcp-builder](skills/ai-agent/mcp-builder/) | Python / TypeScript対応の高品質MCPサーバー構築ガイド |
| [skill-creator](skills/ai-agent/skill-creator/) | Claude Skillの作成・更新に関する公式ガイド |

### ⚙️ 開発・運用 (4)

| Skill | 説明 |
|-------|------|
| [artifacts-builder](skills/devops/artifacts-builder/) | React + shadcn/uiを使った複合claude.ai HTML Artifactの構築 |
| [changelog-generator](skills/devops/changelog-generator/) | gitコミット履歴からユーザー向けChangelogを自動生成 |
| [code-review](skills/devops/code-review/) | セキュリティ・パフォーマンス・保守性・正確性・テストの5軸で行う体系的コードレビュー |
| [tdd-workflow](skills/devops/tdd-workflow/) | テスト駆動開発（コードより先にテストを書くことを強制、カバレッジ80%以上） |

### ✍️ ライティング (6)

| Skill | 説明 |
|-------|------|
| [ai-humanizer](skills/writing/ai-humanizer/) | AI文体を検出・除去し、自然な人間らしい文章に書き換え |
| [article-illustrator](skills/writing/article-illustrator/) | 記事構造を分析し、各セクションに一貫したスタイルのイラストを生成 |
| [content-strategy](skills/writing/content-strategy/) | トラフィック・権威性・リード獲得のためのコンテンツ戦略を立案 |
| [copywriting](skills/writing/copywriting/) | ホームページ・ランディングページ・料金ページ向けのコンバージョン重視コピーライティング |
| [infographic-generator](skills/writing/infographic-generator/) | 21種類のレイアウト × 20種類のビジュアルスタイルでインフォグラフィックを生成 |
| [viral-writer](skills/writing/viral-writer/) | WeChat・小紅書・TikTok向けのバズるコンテンツ作成 |

### 🔬 リサーチ (6)

| Skill | 説明 |
|-------|------|
| [academic-paper](skills/research/academic-paper/) | IMRaD・文献レビュー・ケーススタディなどに対応した12エージェント構成の学術論文執筆 |
| [academic-paper-reviewer](skills/research/academic-paper-reviewer/) | 編集長・査読者3名・悪魔の代弁者による多視点ピアレビュー |
| [academic-pipeline](skills/research/academic-pipeline/) | リサーチ→執筆→レビュー→修正→最終稿の一貫した研究パイプライン |
| [competitive-ads-extractor](skills/research/competitive-ads-extractor/) | 広告ライブラリから競合広告を抽出・分析し、効果的なメッセージングパターンを特定 |
| [deep-research](skills/research/deep-research/) | PRISMA系統的レビューを含む7モード対応の13エージェント深層リサーチ |
| [market-research](skills/research/market-research/) | 出典付きで市場調査・競合分析・投資家向けデューデリジェンスレポートを作成 |

### 📱 SNS (3)

| Skill | 説明 |
|-------|------|
| [content-engine](skills/social-media/content-engine/) | 1つの素材をX・LinkedIn・TikTok・YouTube・ニュースレター向けにプラットフォームネイティブで展開 |
| [post-to-wechat](skills/social-media/post-to-wechat/) | API または Chrome CDP経由でWeChat公式アカウントに記事を投稿 |
| [post-to-x](skills/social-media/post-to-x/) | Chrome CDP自動化でX (Twitter)にツイートやX Articlesを投稿 |

### 📄 ドキュメント (1)

| Skill | 説明 |
|-------|------|
| [canvas-design](skills/document/canvas-design/) | デザイン哲学を生成してからPNG/PDFとして視覚的に表現するビジュアルアート制作 |

### 🗂️ 生産性 (1)

| Skill | 説明 |
|-------|------|
| [brainstorming](skills/productivity/brainstorming/) | ソクラテス式対話でアイデアを完成されたデザインに落とし込む |

> 🏢 採用 · 📚 ナレッジベース · 🌏 語学学習 カテゴリは近日公開予定。コントリビューション歓迎。

**合計：26 Skills**

---

## 使い方

### Claude Codeで使う

```bash
# Skillをユーザーのskillsディレクトリにコピー（全プロジェクトで有効）
cp -r skills/ai-agent/agent-reach ~/.claude/skills/

# Claude Codeを再起動 — Skillが自動的に読み込まれる
claude
```

リクエストがSkillのトリガー条件に合致すると、Claudeが自動的にSkillを起動します。`/skill-name` で手動呼び出しも可能です。

### Claude.aiで使う

1. 任意のSkillディレクトリを開き、`SKILL.md` をダウンロード
2. Claude.aiでスキルアイコン 🧩 をクリック → ファイルをアップロード
3. Skillが有効になり、以降の会話に自動適用される

### APIで使う

```python
import anthropic

client = anthropic.Anthropic()

with open("skills/ai-agent/agent-reach/SKILL.md") as f:
    skill = f.read()

response = client.messages.create(
    model="claude-opus-4-6",
    system=skill,
    messages=[{"role": "user", "content": "Claude CodeについてのReddit投稿を検索して"}]
)
```

---

## コントリビューション

**最も簡単な方法**：実際に使って役に立ったSkillをPRで送ってください。

Skillに必要なのは `SKILL.md` ファイル1つだけです：

```yaml
---
name: my-skill
description: >
  機能の説明。トリガー条件：キーワード1、キーワード2。
  Use when: keyword1, keyword2.
---

# My Skill

## 手順
1. ステップ1（命令形で記述）
2. ステップ2

## 例
**入力：** ...
**出力：** ...
```

詳細な仕様は [SKILL_SPEC.md](SKILL_SPEC.md)、PRの手順は [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

---

## プロジェクト構成

```
skill-atlas/
├── CLAUDE.md              # Claude Codeプロジェクト指示（自動読み込み）
├── SKILL_SPEC.md          # Skill記述仕様
├── CONTRIBUTING.md        # コントリビューションガイド
├── catalog.json           # 機械可読スキルインデックス
├── skills/                # 全Skills（カテゴリ別）
│   ├── ai-agent/          # 🤖 AI & Agentツール
│   ├── devops/            # ⚙️ 開発・運用
│   ├── writing/           # ✍️ ライティング
│   ├── research/          # 🔬 リサーチ
│   ├── social-media/      # 📱 SNS
│   ├── document/          # 📄 ドキュメント
│   ├── productivity/      # 🗂️ 生産性
│   ├── recruitment/       # 🏢 採用
│   ├── knowledge-base/    # 📚 ナレッジベース
│   └── language/          # 🌏 語学
├── _templates/            # Skillテンプレート（minimal/standard/with-evals）
└── docs/                  # ドキュメント
```

`catalog.json` は機械可読なスキルインデックスです。Claude Codeはこれを直接読み込み、ディレクトリ全体をスキャンせずにSkillを検索・管理できます。

---

## ライセンス

MIT © 2026 Contributors
