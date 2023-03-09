# 介绍

里吼阿，初次见面，请多指教！

## YuukaBot

**YuukaBot** 是一个完全公益的高性能、跨平台功能型 Bot。

项目名来源于 [东方Project](https://zh.moegirl.org.cn/%E4%B8%9C%E6%96%B9Project) 的 [风见幽香 (Kazami Yuuka)](https://zh.moegirl.org.cn/%E9%A3%8E%E8%A7%81%E5%B9%BD%E9%A6%99)

[![badge](https://github.com/MelodyYuuka/YuukaBot-docs/workflows/docs/badge.svg)](https://github.com/MelodyYuuka/YuukaBot-docs)

::: warning
文档目前还在施工中
:::

## 在 QQ 平台如何邀请 Bot ?

邀请 Bot 进群视为同意遵守 [使用须知](/LICENSE.md)

请前往 [云梦都](https://jq.qq.com/?_wv=1027&k=fV5yn9GQ) 了解详情并获取白名单

## Why v6 ?

**YuukaBot** 自 2018 年写下第一行代码以来，陪伴大家欢声笑语。
为了追求更优异的性能，更方便地更新功能，更好地为大家服务，YuukaBot 于 2021 年末完全重构，从 0 开始重新编码。

YuukaBot-v6 相较于 v5 功能更多，交互更简洁，支持多 bot 服务，实现负载均衡，让任一 bot 因 *不可抗力* 而无法继续正常服务时，自动切换其他 bot 继续服务。

## YuukaBot-v6 是如何工作的 ?

**YuukaBot-v6** 使用 [FastAPI](https://github.com/tiangolo/fastapi) 驱动，基于 Python [asyncio (异步)](https://docs.python.org/3/library/asyncio.html) 编写，为 YuukaBot-v6 的高并发，响应迅速提供了框架基础。

## 完善文档

如果对 [文档](https://github.com/MelodyYuuka/YuukaBot-docs) 有更多补充或建议, 欢迎提 issue 或 Pull request

```shell:no-line-numbers
git clone https://github.com/MelodyYuuka/YuukaBot-docs
# 拉取源码

cd YuukaBot-docs

yarn install
# 安装依赖

yarn docs:dev
# 开始写作
```

:::tip
更多可见 [文档贡献指南](../../about/contribute/docs.md)
:::
