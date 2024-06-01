import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'
import { getDirname, path } from 'vuepress/utils';

const __dirname = getDirname(import.meta.url);


export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  host: '0.0.0.0',
  title: 'YuukaBot',
  description: '高性能の跨平台Bot',
  head: [
    [
      'link', { rel: 'icon', href: '/images/logo.webp' }
    ],
  ],
  theme,
  plugins: [
    removeHtmlExtensionPlugin()
  ],
  clientConfigFile: path.resolve(__dirname, "./client.ts"),
});
