<!-- markdownlint-disable MD033 -->

# Markdown 风格指南

:::tip
推荐使用 Visual Studio Code 插件，例如 [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) 或 [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) 来统一风格并检查语法
:::

## 使用 ATX 风格的标题（1～6 个 # 号）

```diff:no-line-numbers
- 一级标题
- =======

+ # 一级标题
+ ## 二级标题
+ ### 三级标题
+ #### 四级标题
```

## 标题与 `#` 之间空一格

```diff:no-line-numbers
- ##一个标题
+ ## 一个标题
```

## 使用一个、两个和三个 * 分别表示斜体、粗体和粗斜体

```diff:no-line-numbers
- 这是一个_斜体_；这是一个__粗体__；这是一个___粗斜体___
+ 这是一个*斜体*；这是一个**粗体**；这是一个***粗斜体***
```

## 文件应以单个换行结尾

```diff:no-line-numbers
- 这是文档的最后一句话。
+ 这是文档的最后一句话。
+ 
```

## 参考资料

1. <https://www.markdownguide.org/basic-syntax> （英文）  
