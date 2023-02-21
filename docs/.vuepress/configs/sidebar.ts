import type { SidebarConfig } from "@vuepress/theme-default"


export const sidebar: SidebarConfig = {
    '/start': [
        {
            text: '开始',
            link: '/start/',
        }
    ],
    '/function': [
        {
            text: '概览',
            link: '/function',
        },
        {
            text: '管理功能',
            collapsible: true,
            children: [
                '/function/admin/plugin_manager.md',
                '/function/admin/task_manager.md',
                '/function/admin/load_balance.md',
            ]
        },
        {
            text: '东方相关',
            collapsible: true,
            children: [
                '/function/touhou/touhou_quiz.md',
                '/function/touhou/touhou_grass.md',
                '/function/touhou/touhou_news.md',
                '/function/touhou/random_touhou.md',
            ]
        },
        {
            text: '图片功能',
            collapsible: true,
            children: [
                '/function/img_function/pixiv_plugin.md',
                '/function/img_function/img_search.md',
                '/function/img_function/img_maker.md',
                '/function/img_function/img_writer.md',
                '/function/img_function/img_recognition.md',
                '/function/img_function/img_deeper.md',
                '/function/img_function/img_editor.md',
                '/function/img_function/safebooru.md',
                '/function/img_function/pic_to_url.md',
            ]
        },
        {
            text: '查询数据',
            collapsible: true,
            children: [
                '/function/query/bilibili.md',
                '/function/query/earthquake.md',
                '/function/query/garbage.md',
                '/function/query/github.md',
                '/function/query/hypixel.md',
                '/function/query/maps.md',
                '/function/query/minecraft.md',
                '/function/query/patchyvideo.md',
                '/function/query/shadowverse.md',
                '/function/query/shortof.md',
                '/function/query/weibo.md',
                '/function/query/wiki.md',
                '/function/query/ygo.md'
            ]
        }
    ],
    '/function/autodoc.html': [
        {
            text: 'autodoc',
            link: '/function/autodoc.html',
        }
    ],
    '/FAQ': [
        {
            text: 'FAQ',
            link: '/FAQ/',
        }
    ]
}