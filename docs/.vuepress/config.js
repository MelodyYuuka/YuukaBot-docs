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
            'link', { rel: 'icon', href: '/images/logo.webp' }
        ]
    ],
    theme: defaultTheme({
        logo: '/images/logo.webp',
        navbar: [
            {
                text: '开始',
                link: '/start/',
            },
            {
                text: '指令',
                link: '/guide/',
            },
            {
                text: '群组',
                link: 'https://jq.qq.com/?_wv=1027&k=fV5yn9GQ',
            },
        ],
        notFound: ["呜哇，你怎么到这里来的"],
        backToHome: "回到主页",
        repo: 'MelodyYuuka/YuukaBot-docs',
        repoLabel: '文档仓库',
    }),
    plugins: [
        backToTopPlugin(),
        searchPlugin({
            hotKeys: ['/'],
            maxSuggestions: 10,
        })
    ],
})

