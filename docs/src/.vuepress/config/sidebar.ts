import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  '/start': [
    {
      text: '开始',
      icon: 'signs-post',
      link: '/start/',
    },
    {
      text: '指令',
      icon: 'lightbulb',
      link: '/function/',
    },
    {
      text: 'FAQ',
      icon: 'circle-question',
      link: '/FAQ/',
    },
    {
      text: '更新日志',
      icon: 'clock',
      link: '/changelog/next'
    },
    {
      text: '更多',
      icon: 'splotch',
      link: '/about/',
    },
  ],
  '/function': [
    {
      text: '🍥概览',
      link: '/function/',
    },
    {
      text: '☯️东方相关',
      collapsible: true,
      prefix: "/function/touhou/",
      children: [
        'touhou_quiz.md',
        'touhou_grass.md',
        'touhou_news.md',
        'random_touhou.md',
        'touhou_doujin.md',
        'random_scene.md',
        'touhou_music.md',
        'touhou_guess.md',
        'yunmengdu.md',
        'random_shion.md',
      ]
    },
    {
      text: '🎨图片功能',
      collapsible: true,
      prefix: "/function/img/",
      children: [
        'pixiv_plugin.md',
        'img_search.md',
        'img_meme.md',
        'img_recognition.md',
        'img_deeper.md',
        'img_editor.md',
        'safebooru.md',
        'img2url.md',
        'pjsk.md',
        'rgb.md',
        'random_meme.md',
      ]
    },
    {
      text: '🔍查询数据',
      collapsible: true,
      prefix: "/function/query/",
      children: [
        'bilibili.md',
        'earthquake.md',
        'garbage.md',
        'github.md',
        'hypixel.md',
        'maps.md',
        'minecraft.md',
        'patchyvideo.md',
        'shadowverse.md',
        'weibo.md',
        'wiki.md',
        'ygo.md',
        'orange_juice.md'
      ]
    },
    {
      text: '🌐实用功能',
      collapsible: true,
      prefix: "/function/useful/",
      children: [
        '60s.md',
        'chemical.md',
        'countdown.md',
        'dice.md',
        'everyday_en.md',
        'math.md',
        'music.md',
        'ncm_plugin.md',
        'run_code.md',
        'schedule_reminder.md',
        'search.md',
        'translate.md',
        'wantwords.md',
        'weather.md',
        'shortof.md',
        'wordcloud.md',
        'exchange_rate.md',
        'aminer.md',
        'useful.md',
        'chatai.md',
        'lang_plugin.md',
      ]
    },
    {
      text: "🎈娱乐功能",
      collapsible: true,
      prefix: "/function/play/",
      children: [
        'fantasy.md',
        'char_reverse.md',
        'help_choose.md',
        'hitokoto.md',
        'minesweeper.md',
        'poem_writer.md',
        'remake.md',
        'saying.md',
        'shindanmaker.md',
        'today_luck.md',
        'voice.md',
        'tarot.md',
        'fabing.md',
        'what2eat.md',
        'crazy_thursday.md',
        'emoji_mix.md',
        'httpcat.md',
        'riddle.md',
        'wordle.md'
      ]
    },
    {
      text: '🛠️管理功能',
      collapsible: true,
      prefix: "/function/admin/",
      children: [
        'plugin_manager.md',
        'task_manager.md',
        'load_balance.md',
        'invite_request.md',
        'user_interaction.md',
        'group_manager.md',
        'group_action.md',
        'event_limit.md',
        'platform.md',
        'follow_delete.md',
      ]
    },
  ],
  '/FAQ': [
    {
      text: '开始',
      icon: 'signs-post',
      link: '/start/',
    },
    {
      text: '指令',
      icon: 'lightbulb',
      link: '/function/',
    },
    {
      text: 'FAQ',
      icon: 'circle-question',
      link: '/FAQ/',
    },
    {
      text: '更新日志',
      icon: 'clock',
      link: '/changelog/next'
    },
    {
      text: '更多',
      icon: 'splotch',
      link: '/about/',
    },
  ],
  '/about': [
    {
      text: '关于',
      collapsible: false,
      children: [
        '/about/',
        '/about/instructions.md',
      ]
    },
    {
      text: '贡献指南',
      collapsible: false,
      children: [
        '/about/contribute/docs.md'
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
      prefix: "/changelog/",
      children: [
        'next.md',
        'v6.9.0.md',
        'v6.8.0.md',
        'v6.7.0.md',
        'v6.6.0.md',
        'v6.5.0.md',
        'v6.4.0.md',
        'v6.3.0.md',
        'v6.2.0.md',
        'v6.1.0.md',
        'v6.0.0.md',
        'v6.0.0-rc4.md',
        'v6.0.0-rc3.md',
        'v6.0.0-rc2.md',
        'v6.0.0-rc1.md',
        'v6.0.0-beta23.md',
      ]
    },
  ]
});
