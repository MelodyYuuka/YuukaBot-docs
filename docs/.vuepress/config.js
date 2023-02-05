import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    host: '0.0.0.0',
    title: 'YuukaBot-v6',
    description: '高性能の跨平台Bot',
    head: [
        [
            'link', { rel: 'icon', href: '/images/logo.png' }
        ]
    ],
    theme: defaultTheme({
        logo: '/images/logo.png',
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '开始使用',
                link: '/start/',
            },
            {
                text: '指令',
                link: '/guide/',
            },
        ],
        notFound: ["呜哇，你怎么到这里来的"],
        backToHome: "回到主页"
    }),
    plugins: [
        backToTopPlugin(),
        searchPlugin({
            hotKeys: ['/'],
            maxSuggestions: 10,
        })
    ],
})

