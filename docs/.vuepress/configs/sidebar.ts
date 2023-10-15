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
            text: '🍥概览',
            link: '/function',
        },
        {
            text: '🛠️管理功能',
            collapsible: true,
            children: [
                '/function/admin/plugin_manager.md',
                '/function/admin/task_manager.md',
                '/function/admin/load_balance.md',
                '/function/admin/invite_request.md',
                '/function/admin/user_interaction.md',
                '/function/admin/group_manager.md',
                '/function/admin/group_action.md',
                '/function/admin/event_limit.md',
                '/function/admin/platform.md',
                '/function/admin/follow_delete.md',
            ]
        },
        {
            text: '☯️东方相关',
            collapsible: true,
            children: [
                '/function/touhou/touhou_quiz.md',
                '/function/touhou/touhou_grass.md',
                '/function/touhou/touhou_news.md',
                '/function/touhou/random_touhou.md',
                '/function/touhou/touhou_doujin.md',
            ]
        },
        {
            text: '🎨图片功能',
            collapsible: true,
            children: [
                '/function/img/pixiv_plugin.md',
                '/function/img/img_search.md',
                '/function/img/img_meme.md',
                '/function/img/img_recognition.md',
                '/function/img/img_deeper.md',
                '/function/img/img_editor.md',
                '/function/img/safebooru.md',
                '/function/img/pic_to_url.md',
            ]
        },
        {
            text: '🔍查询数据',
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
                '/function/query/weibo.md',
                '/function/query/wiki.md',
                '/function/query/ygo.md'
            ]
        },
        {
            text: '🌐实用功能',
            collapsible: true,
            children: [
                '/function/useful/60s.md',
                '/function/useful/chemical.md',
                '/function/useful/countdown.md',
                '/function/useful/dice.md',
                '/function/useful/everyday_en.md',
                '/function/useful/math.md',
                '/function/useful/music.md',
                '/function/useful/ncm_plugin.md',
                '/function/useful/run_code.md',
                '/function/useful/schedule_reminder.md',
                '/function/useful/search.md',
                '/function/useful/translate.md',
                '/function/useful/wantwords.md',
                '/function/useful/weather.md',
                '/function/useful/shortof.md',
                '/function/useful/wordcloud.md',
                '/function/useful/exchange_rate.md',
                '/function/useful/aminer.md',
                '/function/useful/useful.md',
            ]
        },
        {
            text: "🎈娱乐功能",
            collapsible: true,
            children: [
                '/function/play/fantasy.md',
                '/function/play/asoul.md',
                '/function/play/char_reverse.md',
                '/function/play/drama_generator.md',
                '/function/play/help_choose.md',
                '/function/play/hitokoto.md',
                '/function/play/minesweeper.md',
                '/function/play/poem_writer.md',
                '/function/play/remake.md',
                '/function/play/saying.md',
                '/function/play/shindanmaker.md',
                '/function/play/today_luck.md',
                '/function/play/voice.md',
                '/function/play/tarot.md',
                '/function/play/random.md',
            ]
        },
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
    ],
    '/about': [
        {
            text: '关于',
            collapsible: false,
            children: [
                '/about/',
                '/about/instructions.html',
            ]
        },
        {
            text: '贡献指南',
            collapsible: false,
            children: [
                '/about/contribute/docs.html'
            ]
        },
        {
            text: '术语表',
            collapsible: false,
            link: '/about/glossary.html',
        },
        {
            text: 'Bot 列表',
            collapsible: false,
            link: '/about/botlist.html',
        },
        {
            text: '赞助',
            collapsible: false,
            link: '/about/sponsor.html',
        },
    ],
    '/changelog': [
        {
            text: '更新日志',
            collapsible: false,
            children: [
                '/changelog/next.html',
                '/changelog/v6.7.0.html',
                '/changelog/v6.6.0.html',
                '/changelog/v6.5.0.html',
                '/changelog/v6.4.0.html',
                '/changelog/v6.3.0.html',
                '/changelog/v6.2.0.html',
                '/changelog/v6.1.0.html',
                '/changelog/v6.0.0.html',
                '/changelog/v6.0.0-rc4.html',
                '/changelog/v6.0.0-rc3.html',
                '/changelog/v6.0.0-rc2.html',
                '/changelog/v6.0.0-rc1.html',
                '/changelog/v6.0.0-beta23.html',
            ]
        },
    ]
}
