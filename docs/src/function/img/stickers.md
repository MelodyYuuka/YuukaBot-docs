# 贴纸表情包生成器

:::tip
由于腾讯的要求，本功能在 `QQ官方` 平台上暂不可用
:::

## 概述

支持制作 **PJSK** 和 **BanG Dream!** 贴纸表情包，可以选择底图、添加文字，也可以调整文字的位置、大小、颜色和描边。BanG Dream! 目前提供 62 张底图。

## 指令

| 功能 | PJSK | BanG Dream! |
| --- | --- | --- |
| 进入交互制作 | `/pjsk` | `/bang表情` |
| 查看角色与表情列表 | `/pjsk列表` | `/bang表情列表` |
| 查看某个角色的表情 | `/pjsk列表 [角色名]` | `/bang表情列表 [角色名]` |
| 查看命令帮助 | `/pjsk -h` | `/bang表情 -h` |

两套表情使用各自的 ID，请以对应列表为准

### 交互模式

- 指令： `/pjsk` 或 `/bang表情`

- 详情：

  按提示依次选择角色、表情 ID 和文字。也可以直接输入表情 ID，或发送 `随机` 选择一张底图；交互过程中发送 `0` 可以退出。

### 命令模式

- 帮助菜单： `/pjsk -h` 或 `/bang表情 -h`

两种表情共用下面的参数。制作 BanG Dream! 表情时，将命令开头的 `/pjsk` 换成 `/bang表情` 即可。

BanG Dream! 的默认字号为 `92`。不指定 `-s` 时，会以默认字号为上限自动缩小，尽量放下文字；需要指定字号时可使用 `-s [大小]`。

```bash:no-line-numbers
用法: /pjsk [-i ID] [-h] [-x X] [-y Y] [-r ROTATE] [-s SIZE] [-c FONT_COLOR]
            [-W STROKE_WIDTH] [-C STROKE_COLOR] [-S LINE_SPACING]
            [text ...]

位置参数:
  text                  所添加的文字，为空时使用默认值

可选参数:
  -i ID, --id ID        表情 ID，可通过指令 `/pjsk列表` 查询，不提供时则随机选择
  -h, --help            显示帮助菜单
  -x X                  文字的中心 x 坐标
  -y Y                  文字的中心 y 坐标
  -r ROTATE, --rotate ROTATE
                        文字旋转的角度
  -s SIZE, --size SIZE  文字的大小，不指定时会以默认大小为上限自动缩小，尽量让文字放入底图
  -c FONT_COLOR, --font-color FONT_COLOR
                        文字颜色，使用十六进制格式
  -W STROKE_WIDTH, --stroke-width STROKE_WIDTH
                        文本描边宽度
  -C STROKE_COLOR, --stroke-color STROKE_COLOR
                        文本描边颜色，使用十六进制格式
  -S LINE_SPACING, --line-spacing LINE_SPACING
                        文本行间距

Tips:

- 大部分有默认值的数值参数都可以用 ^ 开头指定相对于默认值的偏移量
- 不提供任何指令参数时会进入交互创建模式
```

- 使用示例：
  - /pjsk 香草泥 -i 233

    ![233](/images/pjsk/pjsk233.webp)
  - /pjsk 我怎么有十根手指 -i 123

    ![123](/images/pjsk/pjsk123.webp)

<!-- :::warning
QQ 平台因未知原因，发送 png 图片均会转换成 jpg 图片而丢失透明层，如需获得最佳体验请移步 `KOOK` 或 `QQ频道`
::: -->
