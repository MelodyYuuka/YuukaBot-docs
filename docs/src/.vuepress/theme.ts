import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./config/navbar.js";
import sidebar from "./config/sidebar.js";

export default hopeTheme({
  hostname: "https://bot.yunmengdu.cn",

  author: {
    name: "旋律",
    url: "https://github.com/MelodyYuuka",
  },

  iconAssets: "fontawesome-with-brands",
  logo: "/images/logo.webp",
  repo: "MelodyYuuka/YuukaBot-docs",
  repoLabel: '文档仓库',
  docsBranch: 'main',
  docsDir: "src",
  editLinkPattern: ':repo/edit/:branch/docs/:path',

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "GroupLink", "Repo", "Outlook", "Search"],
  },

  license: "CC-BY-SA-4.0",
  copyright: "CC-BY-SA-4.0 Licensed | Copyright © 2019-present MelodyYuuka",
  displayFooter: true,

  // 加密配置
  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
    date: "更新日期"
  },

  routeLocales: {
    notFoundMsg: ["呜哇，你怎么到这里来的"],
  },

  // 在这里配置主题提供的插件
  plugins: {
    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    comment: {
      comment: true,
      provider: "Giscus",
      repo: "MelodyYuuka/YuukaBot-docs",
      repoId: "R_kgDOI6FjGA",
      category: "Announcements",
      categoryId: "DIC_kwDOI6FjGM4CdVzV",
      strict: true,
      lazyLoading: true,
    },

    docsearch: {
      apiKey: '7de33b6d5435eb8f4972b2515756f967',
      indexName: 'bot-yunmengdu',
      appId: 'MWA1J06RXQ',
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档',
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消',
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除',
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接',
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者',
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈',
          },
        },
      },
    },
    seo: {
    },
    sitemap: {
      excludePaths: ['/404.html'],
      sitemapFilename: 'sitemap.xml',
      changefreq: 'daily',
    },
    components: {
      components: [
        // "ArtPlayer",
        // "AudioPlayer",n
        "Badge",
        // "BiliBili",
        // "CodePen",
        // "FontIcon",
        // "PDF",
        // "Replit",
        // "Share",
        // "SiteInfo",
        // "StackBlitz",
        "VPBanner",
        "VPCard",
        // "VidStack",
        // "XiGua",
      ],
      componentOptions: {
        fontIcon: {
          assets: "fontawesome",
        },
      },
    },
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      hint: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      katex: true,
    },
  },
});
