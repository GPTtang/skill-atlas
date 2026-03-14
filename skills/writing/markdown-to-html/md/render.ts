#!/usr/bin/env npx tsx

import fs from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import frontMatter from "front-matter";
import hljs from "highlight.js/lib/core";
import { marked, type RendererObject, type Tokens } from "marked";
import readingTime, { type ReadTimeResults } from "reading-time";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkCjkFriendly from "remark-cjk-friendly";
import remarkStringify from "remark-stringify";

import {
  markedAlert,
  markedFootnotes,
  markedInfographic,
  markedMarkup,
  markedPlantUML,
  markedRuby,
  markedSlider,
  markedToc,
  MDKatex,
} from "./extensions/index.js";
import {
  COMMON_LANGUAGES,
  highlightAndFormatCode,
} from "./utils/languages.js";

type ThemeName = string;

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const THEME_DIR = path.resolve(SCRIPT_DIR, "themes");
const EXTERNAL_THEME_CONFIG_PATH =
  process.env.MD_THEME_CONFIG_PATH
  || "/Users/jimliu/GitHub/md/packages/shared/src/configs/theme.ts";
const EXTERNAL_THEME_DIR =
  process.env.MD_THEME_DIR
  || path.resolve(path.dirname(EXTERNAL_THEME_CONFIG_PATH), "theme-css");
const FALLBACK_THEMES: ThemeName[] = ["default", "grace", "simple"];

const FONT_FAMILY_MAP: Record<string, string> = {
  sans: `-apple-system-font,BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB , Microsoft YaHei UI , Microsoft YaHei ,Arial,sans-serif`,
  serif: `Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif`,
  mono: `Menlo, Monaco, 'Courier New', monospace`,
};

const FONT_SIZE_OPTIONS = ["14px", "15px", "16px", "17px", "18px"];

const CODE_BLOCK_THEMES = [
  "1c-light", "a11y-dark", "a11y-light", "agate", "an-old-hope",
  "androidstudio", "arduino-light", "arta", "ascetic",
  "atom-one-dark-reasonable", "atom-one-dark", "atom-one-light",
  "brown-paper", "codepen-embed", "color-brewer", "dark", "default",
  "devibeans", "docco", "far", "felipec", "foundation",
  "github-dark-dimmed", "github-dark", "github", "gml", "googlecode",
  "gradient-dark", "gradient-light", "grayscale", "hybrid", "idea",
  "intellij-light", "ir-black", "isbl-editor-dark", "isbl-editor-light",
  "kimbie-dark", "kimbie-light", "lightfair", "lioshi", "magula",
  "mono-blue", "monokai-sublime", "monokai", "night-owl", "nnfx-dark",
  "nnfx-light", "nord", "obsidian", "panda-syntax-dark",
  "panda-syntax-light", "paraiso-dark", "paraiso-light", "pojoaque",
  "purebasic", "qtcreator-dark", "qtcreator-light", "rainbow", "routeros",
  "school-book", "shades-of-purple", "srcery", "stackoverflow-dark",
  "stackoverflow-light", "sunburst", "tokyo-night-dark", "tokyo-night-light",
  "tomorrow-night-blue", "tomorrow-night-bright", "vs", "vs2015", "xcode",
  "xt256",
];

const HLJS_CDN_BASE = "https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlightjs/11.11.1";

interface StyleConfig {
  primaryColor: string;
  fontFamily: string;
  fontSize: string;
  foreground: string;
  blockquoteBackground: string;
}

const DEFAULT_STYLE: StyleConfig = {
  primaryColor: "#0F4C81",
  fontFamily: FONT_FAMILY_MAP.sans!,
  fontSize: "16px",
  foreground: "0 0% 3.9%",
  blockquoteBackground: "#f7f7f7",
};

Object.entries(COMMON_LANGUAGES).forEach(([name, lang]) => {
  hljs.registerLanguage(name, lang);
});

export { hljs };

function stripOutputScope(cssContent: string): string {
  let css = cssContent;
  css = css.replace(/#output\s*\{/g, "body {");
  css = css.replace(/#output\s+/g, "");
  css = css.replace(/^#output\s*/gm, "");
  return css;
}

function discoverThemesFromDir(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".css"))
    .map((name) => name.replace(/\.css$/i, ""))
    .filter((name) => name.toLowerCase() !== "base");
}

function readThemeNamesFromConfig(configPath: string): string[] {
  if (!fs.existsSync(configPath)) {
    return [];
  }
  const content = fs.readFileSync(configPath, "utf-8");
  const match = content.match(/themeOptionsMap\s*=\s*\{([\s\S]*?)\n\}/);
  if (!match) {
    return [];
  }
  return Array.from(match[1].matchAll(/^\s*([a-zA-Z0-9_-]+)\s*:/gm)).map(
    (item) => item[1]!
  );
}

function resolveThemeNames(): ThemeName[] {
  const localThemes = discoverThemesFromDir(THEME_DIR);
  const externalThemes = discoverThemesFromDir(EXTERNAL_THEME_DIR);
  const configThemes = readThemeNamesFromConfig(EXTERNAL_THEME_CONFIG_PATH);
  const combined = new Set<ThemeName>([
    ...localThemes,
    ...externalThemes,
    ...configThemes,
  ]);
  const resolved = Array.from(combined).filter((name) =>
    fs.existsSync(path.join(THEME_DIR, `${name}.css`))
    || fs.existsSync(path.join(EXTERNAL_THEME_DIR, `${name}.css`))
  );
  return resolved.length ? resolved : FALLBACK_THEMES;
}

const THEME_NAMES: ThemeName[] = resolveThemeNames();

marked.setOptions({
  breaks: true,
});
marked.use(markedSlider());

interface IOpts {
  legend?: string;
  citeStatus?: boolean;
  countStatus?: boolean;
  isMacCodeBlock?: boolean;
  isShowLineNumber?: boolean;
  themeMode?: "light" | "dark";
}

interface RendererAPI {
  reset: (newOpts: Partial<IOpts>) => void;
  setOptions: (newOpts: Partial<IOpts>) => void;
  getOpts: () => IOpts;
  parseFrontMatterAndContent: (markdown: string) => {
    yamlData: Record<string, any>;
    markdownContent: string;
    readingTime: ReadTimeResults;
  };
  buildReadingTime: (reading: ReadTimeResults) => string;
  buildFootnotes: () => string;
  buildAddition: () => string;
  createContainer: (html: string) => string;
}

interface ParseResult {
  yamlData: Record<string, any>;
  markdownContent: string;
  readingTime: ReadTimeResults;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/`/g, "&#96;");
}

function buildAddition(): string {
  return `
    <style>
      .preview-wrapper pre::before {
        position: absolute;
        top: 0;
        right: 0;
        color: #ccc;
        text-align: center;
        font-size: 0.8em;
        padding: 5px 10px 0;
        line-height: 15px;
        height: 15px;
        font-weight: 600;
      }
    </style>
  `;
}

function buildFootnoteArray(footnotes: [number, string, string][]): string {
  return footnotes
    .map(([index, title, link]) =>
      link === title
        ? `<code style="font-size: 90%; opacity: 0.6;">[${index}]</code>: <i style="word-break: break-all">${title}</i><br/>`
        : `<code style="font-size: 90%; opacity: 0.6;">[${index}]</code> ${title}: <i style="word-break: break-all">${link}</i><br/>`
    )
    .join("\n");
}

function transform(legend: string, text: string | null, title: string | null): string {
  const options = legend.split("-");
  for (const option of options) {
    if (option === "alt" && text) {
      return text;
    }
    if (option === "title" && title) {
      return title;
    }
  }
  return "";
}

const macCodeSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="45px" height="13px" viewBox="0 0 450 130">
    <ellipse cx="50" cy="65" rx="50" ry="52" stroke="rgb(220,60,54)" stroke-width="2" fill="rgb(237,108,96)" />
    <ellipse cx="225" cy="65" rx="50" ry="52" stroke="rgb(218,151,33)" stroke-width="2" fill="rgb(247,193,81)" />
    <ellipse cx="400" cy="65" rx="50" ry="52" stroke="rgb(27,161,37)" stroke-width="2" fill="rgb(100,200,86)" />
  </svg>
`.trim();

function parseFrontMatterAndContent(markdownText: string): ParseResult {
  try {
    const parsed = frontMatter(markdownText);
    const yamlData = parsed.attributes;
    const markdownContent = parsed.body;

    const readingTimeResult = readingTime(markdownContent);

    return {
      yamlData: yamlData as Record<string, any>,
      markdownContent,
      readingTime: readingTimeResult,
    };
  } catch (error) {
    console.error("Error parsing front-matter:", error);
    return {
      yamlData: {},
      markdownContent: markdownText,
      readingTime: readingTime(markdownText),
    };
  }
}

export function initRenderer(opts: IOpts = {}): RendererAPI {
  const footnotes: [number, string, string][] = [];
  let footnoteIndex = 0;
  let codeIndex = 0;
  const listOrderedStack: boolean[] = [];
  const listCounters: number[] = [];
  const isBrowser = typeof window !== "undefined";

  function getOpts(): IOpts {
    return opts;
  }

  function styledContent(styleLabel: string, content: string, tagName?: string): string {
    const tag = tagName ?? styleLabel;
    const className = `${styleLabel.replace(/_/g, "-")}`;
    const headingAttr = /^h\d$/.test(tag) ? " data-heading=\"true\"" : "";
    return `<${tag} class="${className}"${headingAttr}>${content}</${tag}>`;
  }

  function addFootnote(title: string, link: string): number {
    const existingFootnote = footnotes.find(([, , existingLink]) => existingLink === link);
    if (existingFootnote) {
      return existingFootnote[0];
    }

    footnotes.push([++footnoteIndex, title, link]);
    return footnoteIndex;
  }

  function reset(newOpts: Partial<IOpts>): void {
    footnotes.length = 0;
    footnoteIndex = 0;
    setOptions(newOpts);
  }

  function setOptions(newOpts: Partial<IOpts>): void {
    opts = { ...opts, ...newOpts };
    marked.use(markedAlert());
    if (isBrowser) {
      marked.use(MDKatex({ nonStandard: true }, true));
    }
    marked.use(markedMarkup());
    marked.use(markedInfographic({ themeMode: opts.themeMode }));
  }

  function buildReadingTime(readingTimeResult: ReadTimeResults): string {
    if (!opts.countStatus) {
      return "";
    }
    if (!readingTimeResult.words) {
      return "";
    }
    return `
      <blockquote class="md-blockquote">
        <p class="md-blockquote-p">字数 ${readingTimeResult?.words}，阅读大约需 ${Math.ceil(readingTimeResult?.minutes)} 分钟</p>
      </blockquote>
    `;
  }

  const buildFootnotes = () => {
    if (!footnotes.length) {
      return "";
    }

    return (
      styledContent("h4", "引用链接")
      + styledContent("footnotes", buildFootnoteArray(footnotes), "p")
    );
  };

  const renderer: RendererObject = {
    heading({ tokens, depth }: Tokens.Heading) {
      const text = this.parser.parseInline(tokens);
      const tag = `h${depth}`;
      return styledContent(tag, text);
    },

    paragraph({ tokens }: Tokens.Paragraph): string {
      const text = this.parser.parseInline(tokens);
      const isFigureImage = text.includes("<figure") && text.includes("<img");
      const isEmpty = text.trim() === "";
      if (isFigureImage || isEmpty) {
        return text;
      }
      return styledContent("p", text);
    },

    blockquote({ tokens }: Tokens.Blockquote): string {
      const text = this.parser.parse(tokens);
      return styledContent("blockquote", text);
    },

    code({ text, lang = "" }: Tokens.Code): string {
      if (lang.startsWith("mermaid")) {
        if (isBrowser) {
          clearTimeout(codeIndex as any);
          codeIndex = setTimeout(async () => {
            const windowRef = typeof window !== "undefined" ? (window as any) : undefined;
            if (windowRef && windowRef.mermaid) {
              const mermaid = windowRef.mermaid;
              await mermaid.run();
            } else {
              const mermaid = await import("mermaid");
              await mermaid.default.run();
            }
          }, 0) as any as number;
        }
        return `<pre class="mermaid">${text}</pre>`;
      }
      const langText = lang.split(" ")[0];
      const isLanguageRegistered = hljs.getLanguage(langText);
      const language = isLanguageRegistered ? langText : "plaintext";

      const highlighted = highlightAndFormatCode(
        text,
        language,
        hljs,
        !!opts.isShowLineNumber
      );

      const span = `<span class="mac-sign" style="padding: 10px 14px 0;">${macCodeSvg}</span>`;
      let pendingAttr = "";
      if (!isLanguageRegistered && langText !== "plaintext") {
        const escapedText = text.replace(/"/g, "&quot;");
        pendingAttr = ` data-language-pending="${langText}" data-raw-code="${escapedText}" data-show-line-number="${opts.isShowLineNumber}"`;
      }
      const code = `<code class="language-${lang}"${pendingAttr}>${highlighted}</code>`;

      return `<pre class="hljs code__pre">${span}${code}</pre>`;
    },

    codespan({ text }: Tokens.Codespan): string {
      const escapedText = escapeHtml(text);
      return styledContent("codespan", escapedText, "code");
    },

    list({ ordered, items, start = 1 }: Tokens.List) {
      listOrderedStack.push(ordered);
      listCounters.push(Number(start));

      const html = items.map((item) => this.listitem(item)).join("");

      listOrderedStack.pop();
      listCounters.pop();

      return styledContent(ordered ? "ol" : "ul", html);
    },

    listitem(token: Tokens.ListItem) {
      const ordered = listOrderedStack[listOrderedStack.length - 1];
      const idx = listCounters[listCounters.length - 1]!;

      listCounters[listCounters.length - 1] = idx + 1;

      const prefix = ordered ? `${idx}. ` : "• ";

      let content: string;
      try {
        content = this.parser.parseInline(token.tokens);
      } catch {
        content = this.parser
          .parse(token.tokens)
          .replace(/^<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/, "$1");
      }

      return styledContent("listitem", `${prefix}${content}`, "li");
    },

    image({ href, title, text }: Tokens.Image): string {
      const newText = opts.legend ? transform(opts.legend, text, title) : "";
      const subText = newText ? styledContent("figcaption", newText) : "";
      const titleAttr = title ? ` title="${title}"` : "";
      return `<figure><img src="${href}"${titleAttr} alt="${text}"/>${subText}</figure>`;
    },

    link({ href, title, text, tokens }: Tokens.Link): string {
      const parsedText = this.parser.parseInline(tokens);
      if (/^https?:\/\/mp\.weixin\.qq\.com/.test(href)) {
        return `<a href="${href}" title="${title || text}">${parsedText}</a>`;
      }
      if (href === text) {
        return parsedText;
      }
      if (opts.citeStatus) {
        const ref = addFootnote(title || text, href);
        return `<a href="${href}" title="${title || text}">${parsedText}<sup>[${ref}]</sup></a>`;
      }
      return `<a href="${href}" title="${title || text}">${parsedText}</a>`;
    },

    strong({ tokens }: Tokens.Strong): string {
      return styledContent("strong", this.parser.parseInline(tokens));
    },

    em({ tokens }: Tokens.Em): string {
      return styledContent("em", this.parser.parseInline(tokens));
    },

    table({ header, rows }: Tokens.Table): string {
      const headerRow = header
        .map((cell) => {
          const text = this.parser.parseInline(cell.tokens);
          return styledContent("th", text);
        })
        .join("");
      const body = rows
        .map((row) => {
          const rowContent = row.map((cell) => this.tablecell(cell)).join("");
          return styledContent("tr", rowContent);
        })
        .join("");
      return `
        <section style="max-width: 100%; overflow: auto">
          <table class="preview-table">
            <thead>${headerRow}</thead>
            <tbody>${body}</tbody>
          </table>
        </section>
      `;
    },

    tablecell(token: Tokens.TableCell): string {
      const text = this.parser.parseInline(token.tokens);
      return styledContent("td", text);
    },

    hr(_: Tokens.Hr): string {
      return styledContent("hr", "");
    },
  };

  marked.use({ renderer });
  marked.use(markedMarkup());
  marked.use(markedToc());
  marked.use(markedSlider());
  marked.use(markedAlert({}));
  if (isBrowser) {
    marked.use(MDKatex({ nonStandard: true }, true));
  }
  marked.use(markedFootnotes());
  marked.use(
    markedPlantUML({
      inlineSvg: isBrowser,
    })
  );
  marked.use(markedInfographic());
  marked.use(markedRuby());

  return {
    buildAddition,
    buildFootnotes,
    setOptions,
    reset,
    parseFrontMatterAndContent,
    buildReadingTime,
    createContainer(content: string) {
      return styledContent("container", content, "section");
    },
    getOpts,
  };
}

function printUsage(): void {
  console.error(
    [
      "Usage:",
      "  npx tsx src/md/render.ts <markdown_file> [options]",
      "",
      "Options:",
      `  --theme <name>        Theme (${THEME_NAMES.join(", ")})`,
      `  --color <hex>         Primary color (default: ${DEFAULT_STYLE.primaryColor})`,
      `  --font-family <name>  Font: sans, serif, mono, or CSS value`,
      `  --font-size <N>       Font size: ${FONT_SIZE_OPTIONS.join(", ")} (default: 16px)`,
      `  --code-theme <name>   Code highlight theme (default: github)`,
      `  --mac-code-block      Show Mac-style code block header`,
      `  --line-number         Show line numbers in code blocks`,
      `  --cite                Enable footnote citations`,
      `  --count               Show reading time / word count`,
      `  --legend <value>      Image caption: title-alt, alt-title, title, alt, none`,
      `  --keep-title          Keep the first heading in output`,
    ].join("\n")
  );
}

function parseArgValue(argv: string[], i: number, flag: string): string | null {
  const arg = argv[i]!;
  if (arg.includes("=")) {
    return arg.slice(flag.length + 1);
  }
  const next = argv[i + 1];
  return next ?? null;
}

function resolveFontFamily(value: string): string {
  return FONT_FAMILY_MAP[value] ?? value;
}

function parseArgs(argv: string[]): CliOptions | null {
  const ext = loadExtendConfig();

  let inputPath = "";
  let theme: ThemeName = ext.default_theme ?? "default";
  let keepTitle = ext.keep_title ?? false;
  let primaryColor = ext.default_color ?? DEFAULT_STYLE.primaryColor;
  let fontFamily = ext.default_font_family ? resolveFontFamily(ext.default_font_family) : DEFAULT_STYLE.fontFamily;
  let fontSize = ext.default_font_size ?? DEFAULT_STYLE.fontSize;
  let codeTheme = ext.default_code_theme ?? "github";
  let isMacCodeBlock = ext.mac_code_block ?? true;
  let isShowLineNumber = ext.show_line_number ?? false;
  let citeStatus = ext.cite ?? false;
  let countStatus = ext.count ?? false;
  let legend = ext.legend ?? "alt";

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]!;

    if (!arg.startsWith("--") && !inputPath) {
      inputPath = arg;
      continue;
    }

    if (arg === "--help" || arg === "-h") {
      return null;
    }

    if (arg === "--keep-title") { keepTitle = true; continue; }
    if (arg === "--mac-code-block") { isMacCodeBlock = true; continue; }
    if (arg === "--no-mac-code-block") { isMacCodeBlock = false; continue; }
    if (arg === "--line-number") { isShowLineNumber = true; continue; }
    if (arg === "--cite") { citeStatus = true; continue; }
    if (arg === "--count") { countStatus = true; continue; }

    if (arg === "--theme" || arg.startsWith("--theme=")) {
      const val = parseArgValue(argv, i, "--theme");
      if (!val) { console.error("Missing value for --theme"); return null; }
      theme = val as ThemeName;
      if (!arg.includes("=")) i += 1;
      continue;
    }

    if (arg === "--color" || arg.startsWith("--color=")) {
      const val = parseArgValue(argv, i, "--color");
      if (!val) { console.error("Missing value for --color"); return null; }
      primaryColor = val;
      if (!arg.includes("=")) i += 1;
      continue;
    }

    if (arg === "--font-family" || arg.startsWith("--font-family=")) {
      const val = parseArgValue(argv, i, "--font-family");
      if (!val) { console.error("Missing value for --font-family"); return null; }
      fontFamily = resolveFontFamily(val);
      if (!arg.includes("=")) i += 1;
      continue;
    }

    if (arg === "--font-size" || arg.startsWith("--font-size=")) {
      const val = parseArgValue(argv, i, "--font-size");
      if (!val) { console.error("Missing value for --font-size"); return null; }
      fontSize = val.endsWith("px") ? val : `${val}px`;
      if (!FONT_SIZE_OPTIONS.includes(fontSize)) {
        console.error(`Invalid font size: ${fontSize}. Valid: ${FONT_SIZE_OPTIONS.join(", ")}`);
        return null;
      }
      if (!arg.includes("=")) i += 1;
      continue;
    }

    if (arg === "--code-theme" || arg.startsWith("--code-theme=")) {
      const val = parseArgValue(argv, i, "--code-theme");
      if (!val) { console.error("Missing value for --code-theme"); return null; }
      codeTheme = val;
      if (!CODE_BLOCK_THEMES.includes(codeTheme)) {
        console.error(`Unknown code theme: ${codeTheme}`);
        return null;
      }
      if (!arg.includes("=")) i += 1;
      continue;
    }

    if (arg === "--legend" || arg.startsWith("--legend=")) {
      const val = parseArgValue(argv, i, "--legend");
      if (!val) { console.error("Missing value for --legend"); return null; }
      const valid = ["title-alt", "alt-title", "title", "alt", "none"];
      if (!valid.includes(val)) {
        console.error(`Invalid legend: ${val}. Valid: ${valid.join(", ")}`);
        return null;
      }
      legend = val;
      if (!arg.includes("=")) i += 1;
      continue;
    }

    console.error(`Unknown argument: ${arg}`);
    return null;
  }

  if (!inputPath) {
    return null;
  }

  if (!THEME_NAMES.includes(theme)) {
    console.error(`Unknown theme: ${theme}`);
    return null;
  }

  return {
    inputPath, theme, keepTitle, primaryColor, fontFamily, fontSize,
    codeTheme, isMacCodeBlock, isShowLineNumber, citeStatus, countStatus, legend,
  };
}

interface CliOptions {
  inputPath: string;
  theme: ThemeName;
  keepTitle: boolean;
  primaryColor: string;
  fontFamily: string;
  fontSize: string;
  codeTheme: string;
  isMacCodeBlock: boolean;
  isShowLineNumber: boolean;
  citeStatus: boolean;
  countStatus: boolean;
  legend: string;
}

interface ExtendConfig {
  default_theme: string | null;
  default_color: string | null;
  default_font_family: string | null;
  default_font_size: string | null;
  default_code_theme: string | null;
  mac_code_block: boolean | null;
  show_line_number: boolean | null;
  cite: boolean | null;
  count: boolean | null;
  legend: string | null;
  keep_title: boolean | null;
}

function extractYamlFrontMatter(content: string): string | null {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*$/m);
  return match ? match[1]! : null;
}

function parseExtendYaml(yaml: string): Partial<ExtendConfig> {
  const config: Partial<ExtendConfig> = {};
  for (const line of yaml.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const colonIdx = trimmed.indexOf(":");
    if (colonIdx < 0) continue;
    const key = trimmed.slice(0, colonIdx).trim();
    let value = trimmed.slice(colonIdx + 1).trim().replace(/^['"]|['"]$/g, "");
    if (value === "null" || value === "") continue;

    if (key === "default_theme") config.default_theme = value;
    else if (key === "default_color") config.default_color = value;
    else if (key === "default_font_family") config.default_font_family = value;
    else if (key === "default_font_size") config.default_font_size = value.endsWith("px") ? value : `${value}px`;
    else if (key === "default_code_theme") config.default_code_theme = value;
    else if (key === "mac_code_block") config.mac_code_block = value === "true";
    else if (key === "show_line_number") config.show_line_number = value === "true";
    else if (key === "cite") config.cite = value === "true";
    else if (key === "count") config.count = value === "true";
    else if (key === "legend") config.legend = value;
    else if (key === "keep_title") config.keep_title = value === "true";
  }
  return config;
}

function loadExtendConfig(): Partial<ExtendConfig> {
  const paths = [
    path.join(process.cwd(), ".baoyu-skills", "baoyu-markdown-to-html", "EXTEND.md"),
    path.join(homedir(), ".baoyu-skills", "baoyu-markdown-to-html", "EXTEND.md"),
  ];
  for (const p of paths) {
    try {
      const content = fs.readFileSync(p, "utf-8");
      const yaml = extractYamlFrontMatter(content);
      if (!yaml) continue;
      return parseExtendYaml(yaml);
    } catch {
      continue;
    }
  }
  return {};
}

function preprocessCjkEmphasis(markdown: string): string {
  const processor = unified()
    .use(remarkParse)
    .use(remarkCjkFriendly);
  const tree = processor.parse(markdown);
  const visit = (node: any, parent?: any, index?: number) => {
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        visit(node.children[i], node, i);
      }
    }
    if (node.type === "strong" && parent && typeof index === "number") {
      const text = extractText(node);
      parent.children[index] = { type: "html", value: `<strong>${text}</strong>` };
    }
    if (node.type === "emphasis" && parent && typeof index === "number") {
      const text = extractText(node);
      parent.children[index] = { type: "html", value: `<em>${text}</em>` };
    }
  };
  const extractText = (node: any): string => {
    if (node.type === "text") return node.value;
    if (node.children) return node.children.map(extractText).join("");
    return "";
  };
  visit(tree);
  const stringify = unified().use(remarkStringify);
  let result = stringify.stringify(tree);
  result = result.replace(/&#x([0-9A-Fa-f]+);/g, (_, hex) =>
    String.fromCodePoint(parseInt(hex, 16))
  );
  return result;
}

function renderMarkdown(raw: string, renderer: RendererAPI): {
  html: string;
  readingTime: ReadTimeResults;
} {
  const preprocessed = preprocessCjkEmphasis(raw);
  const { markdownContent, readingTime: readingTimeResult } =
    renderer.parseFrontMatterAndContent(preprocessed);

  const html = marked.parse(markdownContent) as string;

  return { html, readingTime: readingTimeResult };
}

function postProcessHtml(
  baseHtml: string,
  reading: ReadTimeResults,
  renderer: RendererAPI
): string {
  let html = baseHtml;
  html = renderer.buildReadingTime(reading) + html;
  html += renderer.buildFootnotes();
  html += renderer.buildAddition();
  html += `
    <style>
      .hljs.code__pre > .mac-sign {
        display: ${renderer.getOpts().isMacCodeBlock ? "flex" : "none"};
      }
    </style>
  `;
  html += `
    <style>
      h2 strong {
        color: inherit !important;
      }
    </style>
  `;
  return renderer.createContainer(html);
}

function formatTimestamp(date = new Date()): string {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(
    date.getDate()
  )}${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
}

function ensureMarkdownPath(inputPath: string): void {
  if (!inputPath.toLowerCase().endsWith(".md")) {
    throw new Error("Input file must end with .md");
  }
}

function loadThemeCss(theme: ThemeName): {
  baseCss: string;
  themeCss: string;
} {
  const basePathCandidates = [
    path.join(THEME_DIR, "base.css"),
    path.join(EXTERNAL_THEME_DIR, "base.css"),
  ];
  const themePathCandidates = [
    path.join(THEME_DIR, `${theme}.css`),
    path.join(EXTERNAL_THEME_DIR, `${theme}.css`),
  ];
  const basePath = basePathCandidates.find((candidate) =>
    fs.existsSync(candidate)
  );
  const themePath = themePathCandidates.find((candidate) =>
    fs.existsSync(candidate)
  );

  if (!basePath) {
    throw new Error(
      `Missing base CSS. Checked: ${basePathCandidates.join(", ")}`
    );
  }

  if (!themePath) {
    throw new Error(
      `Missing theme CSS for "${theme}". Checked: ${themePathCandidates.join(", ")}`
    );
  }

  return {
    baseCss: fs.readFileSync(basePath, "utf-8"),
    themeCss: fs.readFileSync(themePath, "utf-8"),
  };
}

function buildCss(baseCss: string, themeCss: string, style: StyleConfig = DEFAULT_STYLE): string {
  const variables = `
:root {
  --md-primary-color: ${style.primaryColor};
  --md-font-family: ${style.fontFamily};
  --md-font-size: ${style.fontSize};
  --foreground: ${style.foreground};
  --blockquote-background: ${style.blockquoteBackground};
}

body {
  margin: 0;
  padding: 24px;
  background: #ffffff;
}

#output {
  max-width: 860px;
  margin: 0 auto;
}
`.trim();

  return [variables, baseCss, themeCss].join("\n\n");
}

function normalizeThemeCss(css: string): string {
  return stripOutputScope(css);
}

async function fetchCodeThemeCss(themeName: string): Promise<string> {
  const url = `${HLJS_CDN_BASE}/styles/${themeName}.min.css`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to fetch code theme CSS: ${res.status} ${url}`);
      return "";
    }
    return await res.text();
  } catch (error) {
    console.error(`Failed to fetch code theme CSS from ${url}:`, error);
    return "";
  }
}

interface HtmlDocumentMeta {
  title: string;
  author?: string;
  description?: string;
}

function buildHtmlDocument(meta: HtmlDocumentMeta, css: string, html: string, codeThemeCss?: string): string {
  const lines = [
    "<!doctype html>",
    "<html>",
    "<head>",
    '  <meta charset="utf-8" />',
    '  <meta name="viewport" content="width=device-width, initial-scale=1" />',
    `  <title>${meta.title}</title>`,
  ];
  if (meta.author) {
    lines.push(`  <meta name="author" content="${meta.author}" />`);
  }
  if (meta.description) {
    lines.push(`  <meta name="description" content="${meta.description}" />`);
  }
  lines.push(`  <style>${css}</style>`);
  if (codeThemeCss) {
    lines.push(`  <style>${codeThemeCss}</style>`);
  }
  lines.push(
    "</head>",
    "<body>",
    '  <div id="output">',
    html,
    "  </div>",
    "</body>",
    "</html>"
  );
  return lines.join("\n");
}

async function inlineCss(html: string): Promise<string> {
  try {
    const { default: juice } = await import("juice");
    return juice(html, {
      inlinePseudoElements: true,
      preserveImportant: true,
      resolveCSSVariables: false,
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Missing dependency "juice" for CSS inlining. Install it first (e.g. "bun add juice" or "npm add juice"). Original error: ${detail}`
    );
  }
}

function normalizeCssText(cssText: string, style: StyleConfig = DEFAULT_STYLE): string {
  return cssText
    .replace(/var\(--md-primary-color\)/g, style.primaryColor)
    .replace(/var\(--md-font-family\)/g, style.fontFamily)
    .replace(/var\(--md-font-size\)/g, style.fontSize)
    .replace(/var\(--blockquote-background\)/g, style.blockquoteBackground)
    .replace(/hsl\(var\(--foreground\)\)/g, "#3f3f3f")
    .replace(/--md-primary-color:\s*[^;"']+;?/g, "")
    .replace(/--md-font-family:\s*[^;"']+;?/g, "")
    .replace(/--md-font-size:\s*[^;"']+;?/g, "")
    .replace(/--blockquote-background:\s*[^;"']+;?/g, "")
    .replace(/--foreground:\s*[^;"']+;?/g, "");
}

function normalizeInlineCss(html: string, style: StyleConfig = DEFAULT_STYLE): string {
  let output = html;
  output = output.replace(
    /<style([^>]*)>([\s\S]*?)<\/style>/gi,
    (_match, attrs: string, cssText: string) =>
      `<style${attrs}>${normalizeCssText(cssText, style)}</style>`
  );
  output = output.replace(
    /style="([^"]*)"/gi,
    (_match, cssText: string) => `style="${normalizeCssText(cssText, style)}"`
  );
  output = output.replace(
    /style='([^']*)'/gi,
    (_match, cssText: string) => `style='${normalizeCssText(cssText, style)}'`
  );
  return output;
}

function modifyHtmlStructure(htmlString: string): string {
  let output = htmlString;
  const pattern =
    /<li([^>]*)>([\s\S]*?)(<ul[\s\S]*?<\/ul>|<ol[\s\S]*?<\/ol>)<\/li>/i;
  while (pattern.test(output)) {
    output = output.replace(pattern, "<li$1>$2</li>$3");
  }
  return output;
}

function removeFirstHeading(html: string): string {
  return html.replace(/<h[12][^>]*>[\s\S]*?<\/h[12]>/, "");
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  if (!options) {
    printUsage();
    process.exit(1);
  }

  const inputPath = path.resolve(process.cwd(), options.inputPath);
  ensureMarkdownPath(inputPath);

  if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    process.exit(1);
  }

  const outputPath = path.resolve(
    process.cwd(),
    options.inputPath.replace(/\.md$/i, ".html")
  );

  const style: StyleConfig = {
    ...DEFAULT_STYLE,
    primaryColor: options.primaryColor,
    fontFamily: options.fontFamily,
    fontSize: options.fontSize,
  };

  const { baseCss, themeCss } = loadThemeCss(options.theme);
  const css = normalizeThemeCss(buildCss(baseCss, themeCss, style));

  const codeThemeCss = await fetchCodeThemeCss(options.codeTheme);

  const markdown = fs.readFileSync(inputPath, "utf-8");

  const renderer = initRenderer({
    legend: options.legend,
    citeStatus: options.citeStatus,
    countStatus: options.countStatus,
    isMacCodeBlock: options.isMacCodeBlock,
    isShowLineNumber: options.isShowLineNumber,
  });
  const { yamlData } = renderer.parseFrontMatterAndContent(markdown);
  const { html: baseHtml, readingTime: readingTimeResult } = renderMarkdown(
    markdown,
    renderer
  );
  let content = postProcessHtml(baseHtml, readingTimeResult, renderer);
  if (!options.keepTitle) {
    content = removeFirstHeading(content);
  }

  const stripQuotes = (s?: string): string | undefined => {
    if (!s) return s;
    if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
      return s.slice(1, -1);
    }
    if ((s.startsWith('\u201c') && s.endsWith('\u201d')) || (s.startsWith('\u2018') && s.endsWith('\u2019'))) {
      return s.slice(1, -1);
    }
    return s;
  };

  const meta: HtmlDocumentMeta = {
    title: stripQuotes(yamlData.title) || path.basename(outputPath, ".html"),
    author: stripQuotes(yamlData.author),
    description: stripQuotes(yamlData.description) || stripQuotes(yamlData.summary),
  };
  const html = buildHtmlDocument(meta, css, content, codeThemeCss);
  const inlinedHtml = normalizeInlineCss(await inlineCss(html), style);
  const finalHtml = modifyHtmlStructure(inlinedHtml);

  let backupPath = "";
  if (fs.existsSync(outputPath)) {
    backupPath = `${outputPath}.bak-${formatTimestamp()}`;
    fs.renameSync(outputPath, backupPath);
  }

  fs.writeFileSync(outputPath, finalHtml, "utf-8");

  if (backupPath) {
    console.log(`Backup created: ${backupPath}`);
  }
  console.log(`HTML written: ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
