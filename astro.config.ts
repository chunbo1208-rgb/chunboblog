import {
  defineConfig,
  envField,
  fontProviders,
  svgoOptimizer,
} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkBreaks from "remark-breaks";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import rehypeCallouts from "rehype-callouts";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import config from "./astro-paper.config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import path from "node:path";

function remarkContentLinks() {
  const contentRoot = path.resolve("src/content");

  return (tree: any, file: any) => {
    if (!file.path) return;

    const visit = (node: any) => {
      if (node.type === "link" && typeof node.url === "string") {
        const [sourcePath, anchor] = node.url.split("#", 2);

        if (
          sourcePath &&
          !sourcePath.startsWith("/") &&
          !/^[a-z][a-z\d+.-]*:/i.test(sourcePath) &&
          /\.mdx?$/i.test(sourcePath)
        ) {
          let decodedPath = sourcePath;
          try {
            decodedPath = decodeURIComponent(sourcePath);
          } catch {
            // Keep malformed URLs unchanged.
          }

          const targetPath = path.resolve(path.dirname(file.path), decodedPath);
          const relativePath = path
            .relative(contentRoot, targetPath)
            .split(path.sep)
            .join("/");
          const match = relativePath.match(
            /^(posts|columns|pages)\/(.+)\.mdx?$/i
          );

          if (match) {
            const [, collection, entry] = match;
            const route = entry.replace(/\/index$/, "");
            const prefix = collection === "pages" ? "" : `/${collection}`;
            node.url = `${prefix}/${route}${anchor ? `#${anchor}` : ""}`;
          }
        }
      }

      node.children?.forEach(visit);
    };

    visit(tree);
  };
}

function remarkDoubleDollarBlock() {
  return (tree: any, file: any) => {
    const visit = (
      node: any,
      type: string,
      callback: any,
      parent: any = null
    ) => {
      if (node.type === type) {
        callback(node, parent);
      }
      if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
          visit(node.children[i], type, callback, node);
        }
      }
    };

    visit(tree, "inlineMath", (node: any, parent: any) => {
      if (node.position && file.value) {
        const rawText = (file.value as string).slice(
          node.position.start.offset,
          node.position.end.offset
        );
        if (rawText.startsWith("$$") && rawText.endsWith("$$")) {
          node.type = "math";
          node.data = {
            hName: "div",
            hProperties: {
              className: ["math", "math-display"],
            },
            hChildren: [
              {
                type: "text",
                value: node.value,
              },
            ],
          };

          if (
            parent &&
            parent.type === "paragraph" &&
            parent.children.length === 1
          ) {
            parent.type = "math";
            parent.value = node.value;
            parent.data = node.data;
            parent.children = [];
          }
        }
      }
    });
  };
}

export default defineConfig({
  site: config.site.url,
  integrations: [
    mdx(),
    sitemap({
      filter: page =>
        config.features?.showArchives !== false || !page.endsWith("/archives/"),
    }),
  ],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkContentLinks,
        remarkMath,
        remarkDoubleDollarBlock,
        remarkBreaks,
        remarkToc,
        [remarkCollapse, { test: "Table of contents" }],
      ],
      rehypePlugins: [rehypeCallouts, rehypeKatex],
    }),
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Google Sans Code",
      cssVariable: "--font-google-sans-code",
      provider: fontProviders.google(),
      fallbacks: ["monospace"],
      weights: [300, 400, 500, 600, 700],
      styles: ["normal", "italic"],
      formats: ["woff", "ttf"],
    },
  ],
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
