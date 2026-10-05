import type { ThemePluginsOptions } from "vuepress-theme-hope";
import { fallbackImage, hostname, siteDescription } from "./site.js";

function imageUrl(value: unknown): string | null {
  if (typeof value !== "string" || !value.trim()) return null;
  try {
    const url = new URL(value.trim(), hostname);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

export const seo: Exclude<ThemePluginsOptions["seo"], boolean | undefined> = {
  // 使用移除 .html 后的实际路由，保留目录页的尾斜杠。
  canonical: (page) =>
    page.path === "/404.html" || page.frontmatter.seo === false
      ? null
      : new URL(page.path, hostname).href,
  fallBackImage: fallbackImage,
  ogp: (data, page) => ({
    ...data,
    "og:image": page.path === "/start/" ? fallbackImage : imageUrl(data["og:image"]) ?? fallbackImage,
  }),
  jsonLd: (data, page) => {
    // 显式封面优先于正文首图。
    // 入门页仅在 SEO 元数据中使用 logo，不添加影响布局的 cover。
    if (data["@type"] === "Article" || data["@type"] === "BlogPosting") {
      const cover = imageUrl(page.frontmatter.banner) ?? imageUrl(page.frontmatter.cover);
      const images = Array.isArray(data.image)
        ? data.image.map(imageUrl).filter((image): image is string => image !== null)
        : [];
      data.image = page.path === "/start/" ? [fallbackImage] : cover ? [cover] : images.length ? images : [fallbackImage];
    }
    return { ...data, url: new URL(page.path, hostname).href };
  },
  customHead: (head, page) => {
    if (page.path === "/404.html") {
      head.push(["meta", { name: "robots", content: "noindex, follow" }]);
    }
    if (page.path === "/") {
      head.push([
        "script",
        { type: "application/ld+json" },
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${hostname}/#website`,
          name: "YuukaBot",
          url: `${hostname}/`,
          description: siteDescription,
          inLanguage: "zh-CN",
        }),
      ]);
    }
  },
};
