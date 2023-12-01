# 最近更新

::: warning
本节目前还在施工中
:::

## 更新时间线

### 2023-12-01

- 因版权问题，移除 [Asoul 相关](../function/play/asoul.md) 功能

### 2023-11-29

- 支持官方群 bot 的语音发送
- 更新 [网易云音乐功能](../function/useful/ncm_plugin.md)：支持多平台
- 更新 [点歌相关](../function/useful/music.md)：支持多平台，修复酷我点歌

### 2023-11-28

- 优化了官方群 bot 的使用体验

### 2023-11-27

- 💥适配官方群 bot 接口，添加公域幽幽子

### 2023-11-26

- 修复 [东方新闻](../function/touhou/touhou_news.md) 推送
- 修复 [读懂世界](../function/useful/60s.md) 推送
- 优化 [AI 聊天](../function/useful/chatai.md)：限制历史记录长度

### 2023-11-22

- 优化 [RGB色图生成器](../function/img/rgb.md)：尺寸由 `100×100` 改为 `256×256`

### 2023-11-21

- 更新 [东方问答](../function/touhou/touhou_quiz.md) 知识问答部分题目
- 修复 [东方新闻](../function/touhou/touhou_news.md)：修复了无法正常推送最新新闻的问题
- 更新 [读懂世界](../function/useful/60s.md)：现在支持多平台服务

### 2023-11-17

- 新增 [RGB色图生成器](../function/img/rgb.md)
- 更新 [表情包制作](../function/img/img_meme.md)：`虹夏举牌` 取消反光蒙版
- 更新 [表情包制作](../function/img/img_meme.md)：弃用提醒改为图片形式

### 2023-11-16

- 💥更新 [表情包制作](../function/img/img_meme.md)：
  - 添加了所有表情包的对应 `/` 前缀指令，支持参数补全与提醒
  - 取消了无 `/` 前缀指令的参数补全及提醒
  - 也就是现在使用无 `/` 前缀指令需要一次性发送所有参数
  - 使用有 `/` 前缀指令则可以进行参数补全及提醒

- 💥更新 [百科](../function/query/wiki.md)：
  - 添加了所有百科的对应 `/` 前缀指令
  - 现在无 `/` 前缀指令在找不到百科条目时不会返回任何信息
  - 使用有 `/` 前缀指令则可以返回错误信息

- 更新 `QQ频道`：现在支持发送更多链接（频道链接有白名单限制，不允许随意发链接）
- 更新 [图片简单编辑](../function/img/img_editor.md)：支持使用回复消息作为参数

### 2023-11-14

- 更新 [帮助]：现在 /help 完善了 `QQ频道` 支持

### 2023-11-12

- 更新 [数学工具](../function/useful/math.md#化数解方程)：更新 `化数解方程`
- 优化 [翻译](../function/useful/translate.md)：QQ频道支持回复参数

### 2023-11-11

- 更新 [东方新闻](../function/touhou/touhou_news.md)：现在支持多平台服务

### 2023-11-10

- 修复在某些不常用场景下无法使用功能的问题
- 更新 [幻想系统](../function/play/fantasy.md) ：现在支持多平台服务
- 更新 [功能管理](../function/admin/plugin_manager.md)：现在 `查看功能帮助` 支持多平台
- 优化了在指令验证不通过（例如当前群未开启 bot，）的时候是否返回提醒的逻辑

### 2023-11-07

- 优化 [词云](../function/useful/wordcloud.md) 的生成速度

### 2023-11-01

- 更新 [诗词相关](../function/play/poem_writer.md)：优化并添加更多藏句子的姿势
- 重构 [跨平台服务](../function/admin/platform.md)：现在支持同平台绑定多个账户
- 修复 [百度百科](../function/query/wiki.md)：修复在某些极端情况下，无法返回的问题

### 2023-10-26

- 修复 [网易云音乐功能](../function/useful/ncm_plugin.md)：更新到最新版网易云接口
- 优化 [AI 聊天](../function/useful/chatai.md) （测试）：添加 gpt3.5

### 2023-10-25

- 修复因优化导致的 [词云](../function/useful/wordcloud.md) 无法显示的问题
- 优化 [AI 聊天](../function/useful/chatai.md) （测试）：添加三种模型

### 2023-10-24

- 修复 在 `QQ频道` 平台下，[表情包制作](../function/img/img_meme.md)无法正确识别图片的问题

### 2023-10-23

- 因上游服务器关闭，删除 `烂剧制造`

### 2023-10-22

- 优化 [AI 聊天](../function/useful/chatai.md) （测试）

### 2023-10-21

- 新增 [AI 聊天](../function/useful/chatai.md) （测试）
- 修改部分 Bot 称谓
- 修复 [表情包制作](../function/img/img_meme.md) (`balogo`)：修复了在输入为空的情况下，不能正常输出图片的问题
- 修复 [百度以图搜图](../function/img/img_search.md#百度以图搜图)：百度删除了匹配度属性

### 2023-10-19

- 修复 [ascii以图搜图](../function/img/img_search.md#ascii以图搜图) 在某些特定情况下不返回正确信息的问题
- 修复 [天气](../function/useful/weather.md)：现在在数据源缺失部分信息的极端情况下，也可以正常返回信息

### 2023-10-15

- 更新 [表情包制作](../function/img/img_meme.md) (`balogo`)

### 2023-10-13

- 新增 [pjsk 表情包生成器](../function/img/pjsk.md)

### 2023-10-09

- 更新 [语音功能](../function/play/voice.md) (`宁宁说`, `爱瑠说`, `芳乃说`, `茉子说`, `丛雨说`, `小春说`, `七海说`)
- 因为 [东方新作](https://thwiki.cc/%E4%B8%9C%E6%96%B9%E5%85%BD%E7%8E%8B%E5%9B%AD) 的原因，更新 [东方问答](../function/touhou/touhou_quiz.md) 知识问答部分题目
- 更新 [表情包制作](../function/img/img_meme.md) (`紧抓不放`, `沙沙想`)

### 2023-10-07

- 新增 [随机词条生成器](../function/play/random.md) (`随机玩stg`, `随机合约stg`)

### 2023-10-06

- 更新 [表情包制作](../function/img/img_meme.md) (`小伞举牌`)

### 2023-10-04

- 优化在 `KOOK`、`QQ频道` 上的使用体验

### 2023-10-03

- 优化 [百度以图搜图](../function/img/img_search.md#百度以图搜图)
- 优化 [Pixiv功能](../function/img/pixiv_plugin.md#随机tag) (`随机tag`)
- 优化 [语音功能](../function/play/voice.md)
- 修复 [表情包制作](../function/img/img_meme.md) (`金龙飞升`, `金龙盘旋`)

### 2023-09-27

- 更新 [语音功能](../function/play/voice.md) (`塔菲说`, `小菲说`, `东雪莲说`, `嘉然说`)

### 2023-09-25

- 优化在 `KOOK`、`QQ频道` 上的使用体验
