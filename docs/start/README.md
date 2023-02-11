# 介绍

里吼阿，初次见面，请多指教！

## YuukaBot

**YuukaBot** 是一个完全公益的高性能、跨平台功能型 Bot。

[![](https://github.com/MelodyYuuka/YuukaBot-docs/workflows/docs/badge.svg)](https://github.com/MelodyYuuka/YuukaBot-docs)

::: warning
文档目前还在施工中
:::

## Why v6 ？

**YuukaBot** 自 2018 年写下第一行代码以来，陪伴大家欢声笑语。
为了追求更优异的性能，更方便地更新功能，更好地为大家服务，YuukaBot 于 2021 年末完全重构，从 0 开始编码。

YuukaBot-v6 相较于 v5 功能更多，交互更简洁，支持多 bot 服务，实现负载均衡，让任一 bot 因 *不可抗力* 而无法继续正常服务时，自动切换其他 bot 继续服务。

## YuukaBot-v6 是如何工作的？

**YuukaBot-v6** 使用 [FastAPI](https://github.com/tiangolo/fastapi) 驱动，基于 Python [asyncio (异步)](https://docs.python.org/3/library/asyncio.html) 编写，为 YuukaBot-v6 的高并发，响应迅速提供了框架基础。

