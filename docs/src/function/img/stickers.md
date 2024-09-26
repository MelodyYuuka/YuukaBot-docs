# 贴纸表情包生成器

:::tip
由于腾讯的要求，本功能在 `QQ官方` 平台上暂不可用
:::

## 概述

本功能提供了 pjsk 表情包制作的功能

## 指令

### 交互模式

- 指令： `/pjsk`

- 详情：

  进入交互制作表情包模式

### 命令模式

- 帮助菜单： `/pjsk -h`

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
  -s SIZE, --size SIZE  文字的大小，不指定时会以默认大小为最大值自动调整
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
