# 文档贡献指南

:::tip
本页面所用术语可从 [术语表 > 文档相关](../glossary.md#文档相关) 中查询
:::

## 中文写作排版风格指南

### [**CJK**](../glossary.md#CJK) 与 [**西文**](../glossary.md#西文) 之间一律插入一个空格

```diff:no-line-numbers
- 在Python中，我们使用class关键字来声明类。
- 在 Python中，我们使用 class关键字来声明类。
+ 在 Python 中，我们使用 class 关键字来声明类。

- 他只用了100行不到的代码就实现了那个复杂的功能。
+ 他只用了 100 行不到的代码就实现了那个复杂的功能。
```

### CJK 一律使用全角书写，西文一律使用半角书写

```diff:no-line-numbers
- １２３ ＡＢＣ
+ 123 ABC

- ﾋﾞﾘﾋﾞﾘ
+ ビリビリ
```

### 数字与英文单位之间加空格，与符号单位之间不加空格

```diff:no-line-numbers
- 我有一块 512GB 的硬盘。
+ 我有一块 512 GB 的硬盘。

- 今天气温 23 ˚C，有 70 % 的可能性下雨。
+ 今天气温 23˚C，有 70% 的可能性下雨。
```

### 全角标点与其它字符之间不加空格

```diff:no-line-numbers
- 他有一台 Mac 。
+ 他有一台 Mac。
```

### CJK与 [**西文符号**](../glossary.md#西文符号) 之间加空格

```diff:no-line-numbers
- 很多人都在学习 C++这门语言。
+ 很多人都在学习 C++ 这门语言。

- count--表示给 count 变量减 1。
+ count-- 表示给 count 变量减 1。
```

### 在 CJK 语境下使用全角标点（除数学运算符）

```diff:no-line-numbers
- 你好,请问<朝花夕拾>这本书还有的卖吗?
+ 你好，请问《朝花夕拾》这本书还有的卖吗？

- Android Studio 从 1.3 版本开始加入了 NDK(Native Development Kit)支持.
+ Android Studio 从 1.3 版本开始加入了 NDK（Native Development Kit）支持。
```

### 链接与文本之间加空格

```diff:no-line-numbers
- 可以查询[术语表](../glossary.md)来找到相关信息
+ 可以查询 [术语表](../glossary.md) 来找到相关信息
```

## Markdown 风格指南

### 使用 ATX 风格的标题（1～6 个 # 号）

```diff:no-line-numbers
- 一级标题
- =======

+ # 一级标题
+ ## 二级标题
+ ### 三级标题
+ #### 四级标题
```

### 标题与 `#` 之间空一格

```diff:no-line-numbers
- ##一个标题
+ ## 一个标题
```

### 使用一个、两个和三个 * 分别表示斜体、粗体和粗斜体

```diff:no-line-numbers
- 这是一个_斜体_；这是一个__粗体__；这是一个___粗斜体___
+ 这是一个*斜体*；这是一个**粗体**；这是一个***粗斜体***
```

## 参考资料

- <https://stdrc.cc/style-guides/chinese>
- <https://stdrc.cc/style-guides/markdown>
