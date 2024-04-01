import type { NavbarConfig } from "vuepress";


export const navbar: NavbarConfig = [
    {
        text: '开始',
        link: '/start/',
    },
    {
        text: '指令',
        link: '/function/',
    },
    {
        text: 'FAQ',
        link: '/FAQ/',
    },
    {
        text: '更新日志',
        link: '/changelog/next'
    },
    {
        text: '更多',
        link: '/about/',
    },
    {
        text: '群组',
        children: [
            {'text': 'QQ群', 'link': 'https://qm.qq.com/q/2iiZddIyz6'},
            {'text': 'Kook', 'link': 'https://kook.top/4wZDH7'},
            {'text': 'QQ 频道', 'link': 'https://pd.qq.com/s/5iyaamyir'},
        ]
    },
]