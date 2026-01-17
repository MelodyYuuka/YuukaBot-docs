<!-- markdownlint-disable MD033 -->

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

:::tip
推荐使用 Visual Studio Code 插件，例如 [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) 来统一风格并检查语法
:::

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

### 文件应以单个换行结尾

```diff:no-line-numbers
- 这是文档的最后一句话。
+ 这是文档的最后一句话。$
```

“$”在此表示换行（如 `U+000A` 换行字符，或简单的轻击回车键）

## Markdown 语法指南

:::info
更多信息请参阅 [Markdown 教程](https://markdown.com.cn/basic-syntax/)
:::

### 换行

#### 输入两个空格然后按下回车键以换行

Markdown | HTML | 效果
--- | --- | ---
这是第一行。&nbsp;&nbsp;<br>这是第二行。 | 这是第一行。\<br><br>这是第二行。 | 这是第一行。<br>这是第二行。

### 反引号（`）

#### 使用单个反引号（`）来以代码格式显示文本

示例 | 效果
--- | ---
插入\`代码\`到文本中 | 插入`代码`到文本中

#### 使用两个反引号（``）来转义其他反引号

反引号转义 | 反斜线转义 | 效果
--- | --- | ---
\`\` 这是\`单个反引号\`的作用 \`\` | 这是\\\`单个反引号\\\`的作用 | 这是`单个反引号`的作用

#### 使用三个反引号（```）来形成围栏代码块  

示例：

```Markdown
```Python
print("Hello World!")
```
```

效果：

```Python
print("Hello World!")
```

将 `Python` 替换成其他语言可以添加对应语言的的语法高亮显示，而添加 `:no-line-numbers` 会移除代码块左侧的行数显示。  
替换成`diff`则会用绿色显示以 `+` 开头的行，并用红色显示以 `-` 开头的行。具体效果参考[上文](#数字与英文单位之间加空格-与符号单位之间不加空格)。  
通过缩进（四个空格或按下一次Tab）也可以实现代码块，但实践中请**优先**使用上述方式。

### 表格

:::danger
在表格内添加原始HTML代码可能会导致 Vuepress 报错
:::

添加表格时，请使用三个或更多连字符（---）创建每列的标题，并使用竖线（|）分隔每列。其余文字内容以外的改变不会影响最终结果（例如连字符的数量，竖线前面的空格）。

风格示例：

```对齐风格的表格
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
| EOL         | Line Feed   |
```

```紧凑风格的表格
| Character | Meaning |
| --- | --- |
| Y | Yes |
| N | No |
```

#### 表格对齐

在连字符的左/右侧添加冒号（:）会将该列的内容向左/右对齐，而在两侧都添加冒号则会居中对齐。

示例：

```Markdown
|       向左对齐 | 居中对齐 | 向右对齐       |
|          :--- |  :----:  | ---:          |
|   这依旧有文字 |  这是文字  | 这仍然是文字  |
|   那还是有文字 |  那有文字  | 那是更多文字  |
```

效果：

向左对齐 | 居中对齐 | 向右对齐
:--- | :----: | ---:
这依旧有文字 | 这是文字 | 这仍然是文字
那还是有文字 | 那有文字 | 那是更多文字

## 参考资料

1. <https://stdrc.cc/style-guides/chinese>
2. <https://stdrc.cc/style-guides/markdown>
3. <https://www.markdownguide.org/basic-syntax> （英文）  
