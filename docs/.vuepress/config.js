import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { seoPlugin } from 'vuepress-plugin-seo2'
import { searchConsolePlugin } from 'vuepress-plugin-china-search-console'
import { sidebar } from './configs/sidebar'
import { navbar } from './configs/navbar'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { yuukabotTheme } from './theme'


export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    host: '0.0.0.0',
    title: 'YuukaBot-v6',
    description: '高性能の跨平台Bot',
    head: [
        [
            'link', { rel: 'icon', href: '/images/logo.webp' }
        ],
    ],
    theme: yuukabotTheme({
        logo: '/images/logo.webp',
        navbar: navbar,
        sidebar: sidebar,
        // sidebar: [

        // ],
        notFound: ["呜哇，你怎么到这里来的"],
        backToHome: "回到主页",
        repo: 'MelodyYuuka/YuukaBot-docs',
        repoLabel: '文档仓库',
        editLinkText: '在 GitHub 上编辑此页',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        lastUpdatedText: '上次更新',

    }),
    plugins: [
        docsearchPlugin({
            apiKey: '2525b098427a1e6609e6f839b9a831b1',
            indexName: 'yuukabot-yunmengdu',
            appId: '5UHRJG3CUA',
            placeholder: '搜索文档',
            toggleColorMode: '切换颜色模式',
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
        }),
        sitemapPlugin({
            hostname: 'yuukabot.yunmengdu.cn',
            excludeUrls: ['/404.html'],
            sitemapFilename: 'sitemap.xml',
            changefreq: 'daily',
        }),
        seoPlugin({
            hostname: 'yuukabot.yunmengdu.cn',
        }),
        searchConsolePlugin({
            baiduId: '7a0d3a4e8454cc167b63e7dc1de54488',
            autoPushBaiduSwitch: true,
        }),
        mdEnhancePlugin({
            // 启用自定义容器
            container: true,
        }),
        copyCodePlugin({
            
        })
    ],
})

