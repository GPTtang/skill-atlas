# Skill Atlas

**構造化されたClaude Skillsオープンソースコレクション — AIエージェント、開発、ライティング、リサーチ、SNSなど107個のすぐに使えるSkill。**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Skills](https://img.shields.io/badge/Skills-107-blue)
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

### 🤖 AI & Agent (14)

| Skill | 説明 |
|-------|------|
| [agent-memory](skills/ai-agent/agent-memory/) | AIエージェントのセッション横断型永続メモリ（事実・経験・エンティティ追跡） |
| [agent-reach](skills/ai-agent/agent-reach/) | Twitter/X・Reddit・YouTube・GitHub・Bilibili・小紅書など複数プラットフォームの情報を一括取得・検索 |
| [agent-team-orchestration](skills/ai-agent/agent-team-orchestration/) | 複数エージェントチームの編成：役割・タスクライフサイクル・引き継ぎプロトコル・品質ゲートを定義 |
| [agentic-eval](skills/ai-agent/agentic-eval/) | 自己批評ループとLLM評価パイプラインによるエージェント出力評価パターン |
| [claude-api](skills/ai-agent/claude-api/) | Claude API/SDKの完全パターン：ストリーミング・ツール使用・ビジョン・拡張思考・バッチ処理 |
| [developer-growth-analysis](skills/ai-agent/developer-growth-analysis/) | Claude Codeのチャット履歴を分析して成長ギャップを特定、HackerNewsリソースをSlackに配信 |
| [eval-harness](skills/ai-agent/eval-harness/) | 評価駆動開発（EDD）原則を用いたClaude Codeセッションの正式評価フレームワーク |
| [exa-search](skills/ai-agent/exa-search/) | Exa MCP経由のニューラルWebセマンティック検索（Webページ・コード・企業調査） |
| [langsmith-fetch](skills/ai-agent/langsmith-fetch/) | LangSmith実行トレースを取得してLangChain/LangGraphエージェントの動作をデバッグ |
| [mcp-builder](skills/ai-agent/mcp-builder/) | Python / TypeScript対応の高品質MCPサーバー構築ガイド |
| [prompt-engineering-patterns](skills/ai-agent/prompt-engineering-patterns/) | LLMのパフォーマンス・信頼性・制御性向上のための高度なプロンプトエンジニアリング技術 |
| [rag-implementation](skills/ai-agent/rag-implementation/) | ベクターデータベース+セマンティック検索+ドキュメントQ&AのRAGシステム実装 |
| [skill-creator](skills/ai-agent/skill-creator/) | Claude Skillの作成・更新に関する公式ガイド |
| [subagent-driven-development](skills/ai-agent/subagent-driven-development/) | 並列サブエージェントによる独立タスクの同時実行実装計画 |

### ⚙️ 開発・運用 (29)

| Skill | 説明 |
|-------|------|
| [api-design-principles](skills/devops/api-design-principles/) | 直感的・スケーラブル・保守しやすいREST/GraphQL APIデザイン原則 |
| [architecture-patterns](skills/devops/architecture-patterns/) | クリーンアーキテクチャ・六角形アーキテクチャ・DDDなどのバックエンド設計パターン |
| [artifacts-builder](skills/devops/artifacts-builder/) | React + shadcn/uiを使った複合claude.ai HTML Artifactの構築 |
| [backend-patterns](skills/devops/backend-patterns/) | Node.js/Express/Next.js APIバックエンドパターン：ミドルウェア・認証・DB統合 |
| [changelog-generator](skills/devops/changelog-generator/) | gitコミット履歴からユーザー向けChangelogを自動生成 |
| [clean-content-fetch](skills/devops/clean-content-fetch/) | Scrapling使用で動的Webコンテンツ（WeChat記事含む）をクリーン取得 |
| [code-review](skills/devops/code-review/) | セキュリティ・パフォーマンス・保守性・正確性・テストの5軸で行う体系的コードレビュー |
| [coding-standards](skills/devops/coding-standards/) | TypeScript/JavaScript/React/Node.jsの汎用コーディング規約 |
| [computer-use](skills/devops/computer-use/) | X11経由17種操作+VNCでヘッドレスLinuxサーバーのフルデスクトップ自動化 |
| [debug-pro](skills/devops/debug-pro/) | JS/TS/Python/Swift/CSS向けコマンド速查付きの体系的デバッグ方法論 |
| [docker-essentials](skills/devops/docker-essentials/) | コンテナ管理・イメージ操作・ネットワーク・デバッグのDockerコアワークフロー |
| [e2e-testing](skills/devops/e2e-testing/) | Page Object Model・CI/CD統合・不安定テスト対策のPlaywright E2Eテストパターン |
| [frontend-patterns](skills/devops/frontend-patterns/) | React/Next.jsフロントエンドアーキテクチャ・状態管理・パフォーマンス最適化 |
| [git-essentials](skills/devops/git-essentials/) | バージョン管理・ブランチ・マージ・チーム協業のGitコアコマンド |
| [microservices-patterns](skills/devops/microservices-patterns/) | サービス境界・イベント駆動通信・レジリエンスパターンのマイクロサービス設計 |
| [modern-javascript-patterns](skills/devops/modern-javascript-patterns/) | async/await・モジュール・イテレータ・関数型プログラミングなどES6+完全ガイド |
| [nextjs-app-router-patterns](skills/devops/nextjs-app-router-patterns/) | Server Components・ストリーミング・並列ルートを含むNext.js 14+ App Routerガイド |
| [postgresql-table-design](skills/devops/postgresql-table-design/) | データ型・インデックス戦略・制約・パフォーマンスのPostgreSQLスキーマ設計 |
| [python-design-patterns](skills/devops/python-design-patterns/) | KISS・SRP・コンポジション優先などPythonデザインパターン |
| [python-performance-optimization](skills/devops/python-performance-optimization/) | cProfile・メモリプロファイラ使用のPythonパフォーマンス分析と最適化 |
| [python-testing-patterns](skills/devops/python-testing-patterns/) | pytest・fixtures・mocking・TDDを使った総合Pythonテスト |
| [react-state-management](skills/devops/react-state-management/) | Redux Toolkit・Zustand・Jotai・React Queryによるモダンな状態管理 |
| [security-auditor](skills/devops/security-auditor/) | OWASP Top 10・認証・XSS・SQLインジェクション対応のコードセキュリティ審査 |
| [sql-toolkit](skills/devops/sql-toolkit/) | ORM不使用でSQLite/PostgreSQL/MySQLのクエリ・設計・マイグレーション・最適化 |
| [tdd-workflow](skills/devops/tdd-workflow/) | テストより先にコードを書くことを強制、カバレッジ80%以上のTDD実践 |
| [typescript-advanced-types](skills/devops/typescript-advanced-types/) | ジェネリクス・条件型・マップ型・テンプレートリテラルのTypeScript高度型 |
| [using-git-worktrees](skills/devops/using-git-worktrees/) | 安全な機能開発のためのGit Worktree隔離ワークスペース活用 |
| [vue-best-practices](skills/devops/vue-best-practices/) | Composition API・TypeScript・Pinia・Vue RouterのVue 3ベストプラクティス |
| [webapp-testing](skills/devops/webapp-testing/) | スクリーンショットとブラウザログ検査対応のPlaywright Webアプリテストキット |

### ✍️ ライティング (16)

| Skill | 説明 |
|-------|------|
| [ai-humanizer](skills/writing/ai-humanizer/) | AI文体を検出・除去し、自然な人間らしい文章に書き換え |
| [article-illustrator](skills/writing/article-illustrator/) | 記事構造を分析し、各セクションに一貫したスタイルのイラストを生成 |
| [article-writing](skills/writing/article-writing/) | サンプルからブランドトーンを抽出し、ブログ・ガイド・ニュースレターを執筆 |
| [content-research-writer](skills/writing/content-research-writer/) | 調査・引用・フック最適化・リアルタイムフィードバック付きの協働ライティングアシスタント |
| [content-strategy](skills/writing/content-strategy/) | トラフィック・権威性・リード獲得のためのコンテンツ戦略を立案 |
| [copy-editing](skills/writing/copy-editing/) | 明確性・説得力・CTA・フォーマットの多段階チェックで行う系統的コピー編集 |
| [copywriting](skills/writing/copywriting/) | ホームページ・ランディングページ・料金ページ向けのコンバージョン重視コピーライティング |
| [format-markdown](skills/writing/format-markdown/) | frontmatter・タイトル・要約・見出し・コードブロックでMarkdownを整形 |
| [infographic-generator](skills/writing/infographic-generator/) | 21種類のレイアウト × 20種類のビジュアルスタイルでインフォグラフィックを生成 |
| [internal-comms](skills/writing/internal-comms/) | 3P週報・ニュースレター・FAQ・障害報告などの社内コミュニケーション文書作成 |
| [investor-materials](skills/writing/investor-materials/) | ピッチデッキ・1ページサマリー・投資メモ・財務モデルなど資金調達資料の作成 |
| [investor-outreach](skills/writing/investor-outreach/) | エンジェル・VC・アクセラレーター向けのコールドメール・紹介文・フォローアップ起草 |
| [launch-strategy](skills/writing/launch-strategy/) | プロダクトローンチ・GTM戦略・Product Hunt・段階的リリース計画の立案 |
| [marketing-psychology](skills/writing/marketing-psychology/) | 認知バイアスと説得原則を活用した70以上のマーケティング心理学モデル |
| [pricing-strategy](skills/writing/pricing-strategy/) | 段階的価格設定・フリーミアム・Van Westendorp分析・収益化戦略 |
| [viral-writer](skills/writing/viral-writer/) | WeChat・小紅書・TikTok向けのバズるコンテンツ作成 |

### 🔬 リサーチ (11)

| Skill | 説明 |
|-------|------|
| [academic-paper](skills/research/academic-paper/) | IMRaD・文献レビュー・ケーススタディなどに対応した12エージェント構成の学術論文執筆 |
| [academic-paper-reviewer](skills/research/academic-paper-reviewer/) | 編集長・査読者3名・悪魔の代弁者による多視点ピアレビュー |
| [academic-pipeline](skills/research/academic-pipeline/) | リサーチ→執筆→レビュー→修正→最終稿の一貫した研究パイプライン |
| [competitive-ads-extractor](skills/research/competitive-ads-extractor/) | 広告ライブラリから競合広告を抽出・分析し、効果的なメッセージングパターンを特定 |
| [data-analysis](skills/research/data-analysis/) | A/Bテスト・コホート分析・回帰・仮説検定の統計的厳密なデータ分析 |
| [deep-research](skills/research/deep-research/) | PRISMA系統的レビューを含む7モード対応の13エージェント深層リサーチ |
| [deep-research-pro](skills/research/deep-research-pro/) | マルチソース深層リサーチエージェント：Web検索・統合・引用付きレポート（APIキー不要） |
| [lead-research-assistant](skills/research/lead-research-assistant/) | ターゲット企業分析と連絡戦略提供による高品質リードの特定 |
| [market-research](skills/research/market-research/) | 出典付きで市場調査・競合分析・投資家向けデューデリジェンスレポートを作成 |
| [programmatic-seo](skills/research/programmatic-seo/) | テンプレートとデータを使ってSEO最適化ページを大量生成（ディレクトリ・地域・比較ページ等） |
| [seo-audit](skills/research/seo-audit/) | 技術SEO・オンページ最適化・ランキング分析のSEO問題診断 |

### 📱 SNS (7)

| Skill | 説明 |
|-------|------|
| [content-engine](skills/social-media/content-engine/) | 1つの素材をX・LinkedIn・TikTok・YouTube・ニュースレター向けにプラットフォームネイティブで展開 |
| [crosspost](skills/social-media/crosspost/) | X・LinkedIn・Threads・Blueskyへのプラットフォームネイティブ適応コンテンツ配信 |
| [post-to-wechat](skills/social-media/post-to-wechat/) | API または Chrome CDP経由でWeChat公式アカウントに記事を投稿 |
| [post-to-x](skills/social-media/post-to-x/) | Chrome CDP自動化でX (Twitter)にツイートやX Articlesを投稿 |
| [twitter-algorithm-optimizer](skills/social-media/twitter-algorithm-optimizer/) | Twitterオープンソースアルゴリズムの知見を活用してツイートのリーチを最大化 |
| [x-api](skills/social-media/x-api/) | ツイート投稿・タイムライン読取・検索・分析のX/Twitter API統合 |
| [xhs-images](skills/social-media/xhs-images/) | 小紅書画像シリーズ生成：10種のビジュアルスタイル×8種のレイアウト、1〜10枚カード |

### 📄 ドキュメント (14)

| Skill | 説明 |
|-------|------|
| [algorithmic-art](skills/document/algorithmic-art/) | p5.jsによるアルゴリズム生成アート：フローフィールド・パーティクルシステム・インタラクティブ制御 |
| [brand-guidelines](skills/document/brand-guidelines/) | AnyのArtifactにAnthropicの公式ブランドカラーとタイポグラフィを適用 |
| [canvas-design](skills/document/canvas-design/) | デザイン哲学を生成してからPNG/PDFとして視覚的に表現するビジュアルアート制作 |
| [comic-creator](skills/document/comic-creator/) | 多様な画風×トーン組み合わせで教育用知識漫画を作成（ligne-claire・漫画・リアル・墨絵スタイル） |
| [cover-image](skills/document/cover-image/) | 5次元カスタマイズ（タイプ・カラー・レンダリング・テキスト・ムード）で記事カバー画像を生成 |
| [docx](skills/document/docx/) | 変更追跡とコメント対応の完全な.docxドキュメント作成・編集・分析 |
| [fal-ai-media](skills/document/fal-ai-media/) | fal.ai MCP経由のAIメディア生成：テキストから画像・動画・音声 |
| [frontend-slides](skills/document/frontend-slides/) | アニメーション豊富なHTMLプレゼンテーションをゼロから作成またはPowerPointを変換 |
| [image-gen](skills/document/image-gen/) | OpenAI・Google・DashScope・Replicateの公式APIを使ったAI画像生成 |
| [markdown-to-html](skills/document/markdown-to-html/) | コード強調・数学式・PlantUML対応でMarkdownをスタイル付きHTML（WeChat互換）に変換 |
| [pdf](skills/document/pdf/) | テキスト抽出・新規作成・結合/分割・フォーム入力のPDFツールキット |
| [slide-deck](skills/document/slide-deck/) | スタイルガイド付きアウトライン計画とセクション別スライド画像生成でコンテンツを専門的なスライドデッキに変換 |
| [slidev](skills/document/slidev/) | Markdown・Vueコンポーネント・コード強調・アニメーション対応の開発者向けプレゼン作成 |
| [theme-factory](skills/document/theme-factory/) | あらゆるArtifactに一貫したプロフェッショナルテーマを適用（10種のプリセットテーマ付き） |

### 🗂️ 生産性 (15)

| Skill | 説明 |
|-------|------|
| [brainstorming](skills/productivity/brainstorming/) | ソクラテス式対話でアイデアを完成されたデザインに落とし込む |
| [compress-image](skills/productivity/compress-image/) | 自動ツール選択でWebP/PNGに画像を圧縮、バッチ処理対応 |
| [domain-name-brainstormer](skills/productivity/domain-name-brainstormer/) | 創造的なドメイン名を生成し複数TLDの可用性を一括チェック |
| [file-organizer](skills/productivity/file-organizer/) | コンテキスト理解・重複検出・自動クリーンアップによるインテリジェントなファイル整理 |
| [image-enhancer](skills/productivity/image-enhancer/) | 解像度向上・シャープ化・圧縮アーティファクト除去で画像品質を改善 |
| [invoice-organizer](skills/productivity/invoice-organizer/) | 確定申告向けに請求書と領収書を整理、情報抽出と統一アーカイブ |
| [meeting-insights-analyzer](skills/productivity/meeting-insights-analyzer/) | 会議議事録を分析してコミュニケーションパターンとリーダーシップ改善点を特定 |
| [raffle-winner-picker](skills/productivity/raffle-winner-picker/) | リストやスプレッドシートから公平・透明なランダム抽選で当選者を選出 |
| [readgzh](skills/productivity/readgzh/) | ReadGZHサービス経由でWeChat公式アカウントの全文記事を読取（通常記事・画像投稿対応） |
| [slack-gif-creator](skills/productivity/slack-gif-creator/) | Slack向け最適化アニメーションGIF作成（メッセージGIFとEmojiGIF） |
| [url-to-markdown](skills/productivity/url-to-markdown/) | Chrome CDP経由で任意のURLを取得しクリーンなMarkdownに変換（要ログインページ対応） |
| [video-downloader](skills/productivity/video-downloader/) | yt-dlpを使った品質・フォーマット選択可能なYouTube動画ダウンロード |
| [video-editing](skills/productivity/video-editing/) | FFmpeg・Remotion・ElevenLabs・fal.ai・DescriptのAI支援動画編集パイプライン |
| [x-to-markdown](skills/productivity/x-to-markdown/) | YAMLフロントマター付きでX/Twitterのツイートと記事をMarkdownに変換 |
| [youtube-transcript](skills/productivity/youtube-transcript/) | YouTubeビデオの字幕/トランスクリプトを取得してサマリーを生成 |

### 🏢 採用 (1)

| Skill | 説明 |
|-------|------|
| [tailored-resume-generator](skills/recruitment/tailored-resume-generator/) | 求人票を分析して面接確率を最大化するカスタマイズ済み履歴書を生成 |

> 📚 ナレッジベース · 🌏 語学学習 カテゴリは近日公開予定。コントリビューション歓迎。

**合計：107 Skills（8カテゴリ）**

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
├── SKILL_SPEC.md          # Skill記述仕様
├── CONTRIBUTING.md        # コントリビューションガイド
└── skills/                # 全Skills（カテゴリ別）
    ├── ai-agent/          # 🤖 AI & Agentツール
    ├── devops/            # ⚙️ 開発・運用
    ├── writing/           # ✍️ ライティング
    ├── research/          # 🔬 リサーチ
    ├── social-media/      # 📱 SNS
    ├── document/          # 📄 ドキュメント
    ├── productivity/      # 🗂️ 生産性
    ├── recruitment/       # 🏢 採用
    ├── knowledge-base/    # 📚 ナレッジベース
    └── language/          # 🌏 語学
```

---

## 謝辞

本リポジトリのSkillの一部は以下のオープンソースプロジェクトから収録しています。原著者の貢献に感謝します：

| ソースリポジトリ | 収録Skill |
|----------------|----------|
| [Panniantong/agent-reach](https://github.com/Panniantong/agent-reach) | agent-reach |
| [nashsu/Viral_Writer_Skill](https://github.com/nashsu/Viral_Writer_Skill) | viral-writer |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | deep-research, academic-paper, academic-paper-reviewer, academic-pipeline |
| [composio/awesome-claude-skills](https://github.com/composio/awesome-claude-skills) | artifacts-builder, changelog-generator, competitive-ads-extractor, canvas-design, mcp-builder, skill-creator |
| [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) | article-illustrator, infographic-generator, post-to-wechat, post-to-x, comic-creator, cover-image, slide-deck, xhs-imagesなど |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | content-engine, market-research, tdd-workflow, deep-research-proなど |
| [LeoYeAI/openclaw-master-skills](https://github.com/LeoYeAI/openclaw-master-skills) | ai-humanizer, agent-team-orchestration, brainstorming, copywriting, content-strategy, code-review, agent-memoryなど |

---

## ライセンス

MIT © 2026 Contributors
