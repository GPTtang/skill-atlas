# Skill Atlas

**即戦力の Claude Skills コレクション — AI エージェント、開発、ライティング、リサーチ、SNS など 107 個を収録。**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Skills](https://img.shields.io/badge/Skills-107-blue)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[English](README_en.md) · [中文](README.md) · [日本語](README_ja.md) · [Skill を投稿](CONTRIBUTING.md) · [作成仕様](SKILL_SPEC.md)

---

## Claude Skill とは？

Skill は、特定のタスクで Claude がどう動くべきかを記述した構造化指示ファイル（`SKILL.md`）です。インストール後は Claude が**自動的に**適切な Skill を判断して適用します。手動での呼び出しは不要です。

**このリポジトリの目的**：高品質な Skill ファイルを収集・整理・メンテナンスし、ゼロから書かずにそのまま使えるようにする。

---

## クイックスタート

**Claude Code**（推奨）：

```bash
cp -r skills/devops/code-review ~/.claude/skills/
claude
```

**Claude.ai**：任意の Skill ディレクトリを開く → `SKILL.md` をダウンロード → 会話内で 🧩 をクリックしてアップロード。

**API**：`SKILL.md` の内容を `system` プロンプトとして渡すだけ。

---

## Skills 一覧

| カテゴリ | 数 | 内容 |
|---------|-----|------|
| [🤖 AI & Agent](#-ai--agent-14) | 14 | MCP サーバー、RAG、マルチエージェント、プロンプトエンジニアリング、評価フレームワーク |
| [⚙️ 開発・DevOps](#️-開発devops-29) | 29 | コードレビュー、アーキテクチャ、テスト、Docker、DB、フロント/バックエンド |
| [✍️ ライティング](#️-ライティング-16) | 16 | 長文コンテンツ、コピーライティング、コンテンツ戦略、マーケティング心理学 |
| [🔬 リサーチ](#-リサーチ-11) | 11 | 学術論文、ディープリサーチ、市場分析、データ分析、SEO |
| [📱 SNS](#-sns-7) | 7 | X/Twitter、WeChat、XiaoHongShu、LinkedIn、マルチプラットフォーム配信 |
| [📄 ドキュメント](#-ドキュメント-14) | 14 | スライド、PDF、画像生成、アルゴリズムアート、テーマデザイン |
| [🗂️ 生産性](#️-生産性-15) | 15 | ファイル整理、画像処理、動画ダウンロード、会議分析、抽選 |
| [🏢 採用](#-採用-1) | 1 | カスタマイズ履歴書生成 |

---

### 🤖 AI & Agent (14)

<details open>
<summary>一覧を見る</summary>

| Skill | 説明 |
|-------|------|
| [agent-memory](skills/ai-agent/agent-memory/) | AI Agent のセッション横断永続記憶：事実・経験・エンティティ追跡 |
| [agent-reach](skills/ai-agent/agent-reach/) | Twitter/X・Reddit・YouTube・GitHub・Bilibili・小紅書などをまとめて検索・取得 |
| [agent-team-orchestration](skills/ai-agent/agent-team-orchestration/) | マルチエージェントチームの編成：役割・タスクライフサイクル・引き継ぎ・品質ゲート |
| [agentic-eval](skills/ai-agent/agentic-eval/) | 自己批判ループと LLM-as-judge によるエージェント出力評価パターン |
| [claude-api](skills/ai-agent/claude-api/) | Claude API/SDK フルパターン：ストリーミング・ツール使用・ビジョン・拡張思考・バッチ・キャッシュ |
| [developer-growth-analysis](skills/ai-agent/developer-growth-analysis/) | Claude Code チャット履歴を分析してコーディングの成長ギャップを特定、Slack に通知 |
| [eval-harness](skills/ai-agent/eval-harness/) | 評価駆動開発（EDD）原則に基づく Claude Code セッションの正式評価フレームワーク |
| [exa-search](skills/ai-agent/exa-search/) | Exa MCP によるニューラルウェブ検索：Web・コード・企業調査・人物検索 |
| [langsmith-fetch](skills/ai-agent/langsmith-fetch/) | LangSmith 実行トレースを取得して LangChain/LangGraph エージェントをデバッグ |
| [mcp-builder](skills/ai-agent/mcp-builder/) | Python または TypeScript で高品質な MCP サーバーを構築するガイド |
| [prompt-engineering-patterns](skills/ai-agent/prompt-engineering-patterns/) | LLM の性能・信頼性・制御性を高める高度なプロンプトエンジニアリング技術 |
| [rag-implementation](skills/ai-agent/rag-implementation/) | ベクターDB とセマンティック検索を使った RAG システムの構築 |
| [skill-creator](skills/ai-agent/skill-creator/) | Claude Skill を作成・更新するための公式ガイド |
| [subagent-driven-development](skills/ai-agent/subagent-driven-development/) | 並列サブエージェントで実装計画を実行：独立タスクの同時推進 |

</details>

### ⚙️ 開発・DevOps (29)

<details open>
<summary>一覧を見る</summary>

| Skill | 説明 |
|-------|------|
| [api-design-principles](skills/devops/api-design-principles/) | 直感的・スケーラブル・保守性の高い REST/GraphQL API 設計原則 |
| [architecture-patterns](skills/devops/architecture-patterns/) | クリーンアーキテクチャ・ヘキサゴナル・DDD など複雑なバックエンド向けパターン |
| [artifacts-builder](skills/devops/artifacts-builder/) | React + shadcn/ui で複雑なマルチコンポーネント claude.ai HTML Artifact を構築 |
| [backend-patterns](skills/devops/backend-patterns/) | Node.js/Express/Next.js バックエンドパターン：ミドルウェア・認証・DB 連携 |
| [changelog-generator](skills/devops/changelog-generator/) | git コミット履歴からユーザー向けリリースノートを自動生成 |
| [clean-content-fetch](skills/devops/clean-content-fetch/) | Scrapling でクリーンなウェブコンテンツを取得：動的レンダリング・WeChat 対応 |
| [code-review](skills/devops/code-review/) | セキュリティ・パフォーマンス・保守性・正確性・テストを網羅した系統的コードレビュー |
| [coding-standards](skills/devops/coding-standards/) | TypeScript・JavaScript・React・Node.js の共通コーディング規約 |
| [computer-use](skills/devops/computer-use/) | ヘッドレス Linux サーバーのフルデスクトップ自動化：X11・17 アクション・VNC |
| [debug-pro](skills/devops/debug-pro/) | JS/TS/Python/Swift/CSS 向けコマンド付き系統的デバッグ方法論 |
| [docker-essentials](skills/devops/docker-essentials/) | コンテナ管理・イメージ・ネットワーク・デバッグの Docker 必須コマンド |
| [e2e-testing](skills/devops/e2e-testing/) | Page Object Model・CI/CD 統合・不安定テスト対策を含む Playwright E2E テスト |
| [frontend-patterns](skills/devops/frontend-patterns/) | React/Next.js フロントエンドアーキテクチャ・状態管理・パフォーマンス最適化 |
| [git-essentials](skills/devops/git-essentials/) | バージョン管理・ブランチ・マージ・チーム協業の Git 必須コマンド |
| [microservices-patterns](skills/devops/microservices-patterns/) | サービス境界・イベント駆動通信・レジリエンスパターンでマイクロサービスを設計 |
| [modern-javascript-patterns](skills/devops/modern-javascript-patterns/) | ES6+ 完全ガイド：async/await・モジュール・イテレータ・関数型プログラミング |
| [nextjs-app-router-patterns](skills/devops/nextjs-app-router-patterns/) | Next.js 14+ App Router：Server Components・ストリーミング・並列ルート |
| [postgresql-table-design](skills/devops/postgresql-table-design/) | データ型・インデックス戦略・制約・パフォーマンスパターンを含む PostgreSQL スキーマ設計 |
| [python-design-patterns](skills/devops/python-design-patterns/) | Python 設計パターン：KISS・SRP・継承よりコンポジション |
| [python-performance-optimization](skills/devops/python-performance-optimization/) | cProfile・メモリプロファイラでボトルネックを特定して Python を最適化 |
| [python-testing-patterns](skills/devops/python-testing-patterns/) | pytest・フィクスチャ・モック・TDD による包括的 Python テスト |
| [react-state-management](skills/devops/react-state-management/) | Redux Toolkit・Zustand・Jotai・React Query を使ったモダン React 状態管理 |
| [security-auditor](skills/devops/security-auditor/) | OWASP Top 10・認証・XSS・SQL インジェクションを網羅したコードセキュリティレビュー |
| [sql-toolkit](skills/devops/sql-toolkit/) | ORM 不要で SQLite/PostgreSQL/MySQL をクエリ・設計・マイグレーション・最適化 |
| [tdd-workflow](skills/devops/tdd-workflow/) | テストファースト・80%+ カバレッジを徹底するテスト駆動開発ワークフロー |
| [typescript-advanced-types](skills/devops/typescript-advanced-types/) | TypeScript 高度な型：ジェネリクス・条件型・マップ型・テンプレートリテラル |
| [using-git-worktrees](skills/devops/using-git-worktrees/) | Git ワークツリーで安全な機能開発用の隔離された作業空間を作成 |
| [vue-best-practices](skills/devops/vue-best-practices/) | Composition API・TypeScript・Pinia・Vue Router による Vue 3 ベストプラクティス |
| [webapp-testing](skills/devops/webapp-testing/) | スクリーンショットとブラウザログ検査付き Playwright ベースの Web アプリテスト |

</details>

### ✍️ ライティング (16)

<details open>
<summary>一覧を見る</summary>

| Skill | 説明 |
|-------|------|
| [ai-humanizer](skills/writing/ai-humanizer/) | AI らしい文体を検出・除去してナチュラルな人間らしい文章に書き直す |
| [article-illustrator](skills/writing/article-illustrator/) | 記事構造を分析して各セクションに統一感のあるイラストを生成 |
| [article-writing](skills/writing/article-writing/) | ブランドのトーンを例から抽出して長文コンテンツを執筆：ブログ・ガイド・ニュースレター |
| [content-research-writer](skills/writing/content-research-writer/) | リサーチ・引用追加・フック最適化・リアルタイムフィードバック付きライティングアシスタント |
| [content-strategy](skills/writing/content-strategy/) | トラフィック・権威性・リード獲得のためのコンテンツ戦略を立案 |
| [copy-editing](skills/writing/copy-editing/) | 明確さ・説得力・CTA に焦点を当てた多段階の系統的マーケティングコピー編集 |
| [copywriting](skills/writing/copywriting/) | ホームページ・ランディングページ・料金ページ向けの高転換率コピーライティング |
| [format-markdown](skills/writing/format-markdown/) | フロントマター・タイトル・要約・見出し・コードブロックを含む Markdown フォーマット |
| [infographic-generator](skills/writing/infographic-generator/) | 21 種のレイアウト × 20 種のビジュアルスタイルでインフォグラフィックを生成 |
| [internal-comms](skills/writing/internal-comms/) | 社内コミュニケーション文書の作成：3P 更新・ニュースレター・FAQ・インシデントレポート |
| [investor-materials](skills/writing/investor-materials/) | 資金調達用のピッチデッキ・ワンページャー・投資家向けメモ・財務モデルを作成 |
| [investor-outreach](skills/writing/investor-outreach/) | エンジェル・VC・アクセラレーター向けのコールドメール・紹介文・フォローアップを作成 |
| [launch-strategy](skills/writing/launch-strategy/) | プロダクトローンチ・GTM 戦略・Product Hunt・段階的リリースの計画立案 |
| [marketing-psychology](skills/writing/marketing-psychology/) | 70+ の心理学的原則と認知バイアスをマーケティングに応用 |
| [pricing-strategy](skills/writing/pricing-strategy/) | 価格設定・階層化・フリーミアム・Van Westendorp 分析・マネタイズ戦略 |
| [viral-writer](skills/writing/viral-writer/) | WeChat・XiaoHongShu・TikTok 向けのバイラルコンテンツを作成 |

</details>

### 🔬 リサーチ (11)

<details open>
<summary>一覧を見る</summary>

| Skill | 説明 |
|-------|------|
| [academic-paper](skills/research/academic-paper/) | IMRaD・文献レビュー・ケーススタディ向けの 12 エージェント学術論文執筆 |
| [academic-paper-reviewer](skills/research/academic-paper-reviewer/) | 編集長 + 査読者 3 名 + 悪魔の代弁者による多視点ピアレビュー |
| [academic-pipeline](skills/research/academic-pipeline/) | エンドツーエンド研究パイプライン：調査 → 執筆 → レビュー → 修正 → 最終版 |
| [competitive-ads-extractor](skills/research/competitive-ads-extractor/) | 広告ライブラリから競合広告を抽出・分析して効果的なメッセージングパターンを特定 |
| [data-analysis](skills/research/data-analysis/) | A/B テスト・コホート分析・回帰・仮説検定を含む統計的データ分析 |
| [deep-research](skills/research/deep-research/) | PRISMA 系統的レビューを含む 7 つのモードを持つ 13 エージェントディープリサーチ |
| [deep-research-pro](skills/research/deep-research-pro/) | ウェブ検索・統合・引用付きレポートのマルチソースリサーチエージェント（API キー不要） |
| [lead-research-assistant](skills/research/lead-research-assistant/) | ターゲット企業を分析して高品質なリードを特定し、コンタクト戦略を提供 |
| [market-research](skills/research/market-research/) | ソース引用付きの市場調査・競合分析・デューデリジェンスレポートを生成 |
| [programmatic-seo](skills/research/programmatic-seo/) | テンプレートとデータを使って SEO 最適化ページを大量生成（ディレクトリ・地域・比較ページ） |
| [seo-audit](skills/research/seo-audit/) | テクニカル SEO・オンページ最適化・ランキング分析を含む SEO 診断 |

</details>

### 📱 SNS (7)

<details open>
<summary>一覧を見る</summary>

| Skill | 説明 |
|-------|------|
| [content-engine](skills/social-media/content-engine/) | 1 つの素材を X・LinkedIn・TikTok・YouTube・ニュースレター向けにプラットフォーム最適化 |
| [crosspost](skills/social-media/crosspost/) | X・LinkedIn・Threads・Bluesky にネイティブ適応してコンテンツを一斉配信 |
| [post-to-wechat](skills/social-media/post-to-wechat/) | API または Chrome CDP で WeChat 公式アカウントに記事を投稿 |
| [post-to-x](skills/social-media/post-to-x/) | Chrome CDP 自動化でツイートと X Articles 長文を投稿 |
| [twitter-algorithm-optimizer](skills/social-media/twitter-algorithm-optimizer/) | Twitter のオープンソースアルゴリズムの知見を活かしてリーチと engagement を最大化 |
| [x-api](skills/social-media/x-api/) | X/Twitter API 統合：投稿・タイムライン読み取り・検索・分析 |
| [xhs-images](skills/social-media/xhs-images/) | 小紅書（XiaoHongShu）画像シリーズ：10 ビジュアルスタイル × 8 レイアウト |

</details>

### 📄 ドキュメント (14)

<details open>
<summary>一覧を見る</summary>

| Skill | 説明 |
|-------|------|
| [algorithmic-art](skills/document/algorithmic-art/) | p5.js でジェネラティブアートを作成：フローフィールド・パーティクルシステム・インタラクティブ制御 |
| [brand-guidelines](skills/document/brand-guidelines/) | Anthropic の公式ブランドカラーとタイポグラフィを任意の Artifact に適用 |
| [canvas-design](skills/document/canvas-design/) | デザイン哲学を生成してから PNG/PDF として出力するビジュアルアート制作 |
| [comic-creator](skills/document/comic-creator/) | アートスタイル × トーンの組み合わせで教育的知識漫画を作成 |
| [cover-image](skills/document/cover-image/) | 5 次元カスタマイズ（タイプ・パレット・レンダリング・テキスト・ムード）で記事カバー画像を生成 |
| [docx](skills/document/docx/) | 変更履歴とコメント付きの完全な .docx 文書作成・編集・分析 |
| [fal-ai-media](skills/document/fal-ai-media/) | fal.ai MCP 経由の AI メディア生成：テキスト→画像・動画・音声 |
| [frontend-slides](skills/document/frontend-slides/) | アニメーション豊富な HTML プレゼンテーションをゼロから作成または PowerPoint を変換 |
| [image-gen](skills/document/image-gen/) | OpenAI・Google・DashScope・Replicate の公式 API を使った AI 画像生成 |
| [markdown-to-html](skills/document/markdown-to-html/) | コードハイライト・数式・PlantUML 付きの WeChat 対応スタイル付き HTML に Markdown を変換 |
| [pdf](skills/document/pdf/) | PDF ツールキット：テキスト抽出・新規作成・結合/分割・フォーム入力 |
| [slide-deck](skills/document/slide-deck/) | スタイルガイド付きアウトラインとセクションごとのスライド生成でコンテンツをプロ仕様のスライドに変換 |
| [slidev](skills/document/slidev/) | Markdown・Vue コンポーネント・コードハイライト・アニメーションを使った開発者向けプレゼンテーション |
| [theme-factory](skills/document/theme-factory/) | 任意の Artifact に一貫したプロのテーマを適用 — 10 種のプリセットテーマ付き |

</details>

### 🗂️ 生産性 (15)

<details open>
<summary>一覧を見る</summary>

| Skill | 説明 |
|-------|------|
| [brainstorming](skills/productivity/brainstorming/) | ソクラテス式対話でアイデアを完全に形成されたデザインに変換 |
| [compress-image](skills/productivity/compress-image/) | 自動ツール選択でバッチ処理対応の WebP/PNG 画像圧縮 |
| [domain-name-brainstormer](skills/productivity/domain-name-brainstormer/) | クリエイティブなドメイン名を生成して複数 TLD の取得可能状況を一括確認 |
| [file-organizer](skills/productivity/file-organizer/) | コンテキスト理解・重複検出・自動クリーンアップでファイルをインテリジェントに整理 |
| [image-enhancer](skills/productivity/image-enhancer/) | 解像度向上・シャープ化・圧縮アーティファクト低減で画像品質を改善 |
| [invoice-organizer](skills/productivity/invoice-organizer/) | 確定申告に向けた請求書・領収書の自動整理：情報抽出・フォルダ分類 |
| [meeting-insights-analyzer](skills/productivity/meeting-insights-analyzer/) | 会議の記録を分析してコミュニケーションパターンとリーダーシップ改善点を発見 |
| [raffle-winner-picker](skills/productivity/raffle-winner-picker/) | リストやスプレッドシートから公平かつ透明性のある抽選でランダムに当選者を選出 |
| [readgzh](skills/productivity/readgzh/) | ReadGZH サービス経由で WeChat 公式アカウントの全文記事を読み取り |
| [slack-gif-creator](skills/productivity/slack-gif-creator/) | Slack 最適化のアニメーション GIF を作成（メッセージ GIF・絵文字 GIF） |
| [url-to-markdown](skills/productivity/url-to-markdown/) | Chrome CDP 経由で任意の URL を取得してクリーンな Markdown に変換（ログイン必要ページ対応） |
| [video-downloader](skills/productivity/video-downloader/) | yt-dlp を使って品質・フォーマット選択付きで YouTube 動画をダウンロード |
| [video-editing](skills/productivity/video-editing/) | AI 支援の動画編集パイプライン：FFmpeg・Remotion・ElevenLabs・fal.ai・Descript |
| [x-to-markdown](skills/productivity/x-to-markdown/) | X/Twitter のツイートと記事を YAML フロントマター付き Markdown に変換 |
| [youtube-transcript](skills/productivity/youtube-transcript/) | YouTube 動画のトランスクリプトを取得して要約を生成 |

</details>

### 🏢 採用 (1)

| Skill | 説明 |
|-------|------|
| [tailored-resume-generator](skills/recruitment/tailored-resume-generator/) | 求人票を分析してマッチした経験・スキルを強調したカスタマイズ履歴書を生成 |

> 📚 ナレッジベース · 🌏 語学学習 カテゴリは近日公開予定。コントリビューション歓迎。

---

## コントリビュート方法

**最も簡単な方法**：実際に使って価値があると感じた Skill を PR で投稿。

Skill に必要なのは `SKILL.md` ファイル 1 つだけ：

```yaml
---
name: my-skill
description: >
  機能の説明。トリガー条件：[キーワード]。
---

# My Skill

## 手順
1. これをする（命令形）
2. 次にこれ

## 例
**入力：** ...
**出力：** ...
```

完全な仕様は [SKILL_SPEC.md](SKILL_SPEC.md)、PR プロセスは [CONTRIBUTING.md](CONTRIBUTING.md) を参照。

---

## 謝辞

| ソースリポジトリ | 収録 Skills |
|----------------|------------|
| [Panniantong/agent-reach](https://github.com/Panniantong/agent-reach) | agent-reach |
| [nashsu/Viral_Writer_Skill](https://github.com/nashsu/Viral_Writer_Skill) | viral-writer |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | deep-research, academic-paper, academic-paper-reviewer, academic-pipeline |
| [composio/awesome-claude-skills](https://github.com/composio/awesome-claude-skills) | artifacts-builder, changelog-generator, competitive-ads-extractor, canvas-design, mcp-builder, skill-creator |
| [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) | article-illustrator, infographic-generator, post-to-wechat, post-to-x, comic-creator, cover-image, slide-deck, xhs-images など |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | content-engine, market-research, tdd-workflow, deep-research-pro など |
| [LeoYeAI/openclaw-master-skills](https://github.com/LeoYeAI/openclaw-master-skills) | ai-humanizer, agent-team-orchestration, brainstorming, copywriting, content-strategy, code-review, agent-memory など |

---

MIT © 2026 Contributors
