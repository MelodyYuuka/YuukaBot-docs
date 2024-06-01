import { navbar } from "vuepress-theme-hope";

export default navbar([
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
  {
    text: '群组',
    icon: 'comments',
    children: [
      { 'text': 'QQ群', 'link': 'https://qm.qq.com/q/RHZqFoSmac' },
      { 'text': 'Kook', 'link': 'https://kook.top/4wZDH7' },
      { 'text': 'QQ 频道', 'link': 'https://pd.qq.com/s/5iyaamyir' },
    ]
  },
]);
