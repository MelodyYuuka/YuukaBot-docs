# safebooru 功能

## 概述

在群内快速获取 safebooru 图片

## 指令

### safebooru-图片搜索

- 指令： `搜safe[tag]`

- 参数：

  - `tag`： 需要搜索的 tag，一般为英文名，详见[搜 tag](#safebooru-tag-搜索)

- 详情：

  搜索safebooru图片

### safebooru-tag 搜索

- 指令： `搜tag[关键词]`

- 参数：

  - `关键词`： 想找的东西

- 详情：

  搜索 tag

:::warning
仅能搜到**关键词后**有额外字段的 tag  

例如使用：

```text:no-line-numbers
搜tag usami
```

可返回 **usami_renko**

而使用：

```text:no-line-numbers
搜tag renko
```

则搜不到 **usami_renko**

:::

### safebooru-id 获取图片

- 指令： `safeid[图片id]`

- 参数：

  - `图片id`： safebooru 图片id

- 详情：

  用safebooru id获取图片
