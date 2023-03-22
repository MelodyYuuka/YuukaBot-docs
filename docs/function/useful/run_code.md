# 运行代码

## 概述

本功能提供了在群内运行代码的功能

## 指令

### /run

- 指令： `/run [语言] [代码](***stdin)`

- 参数：

  - `语言`： 语言名\代号，详见 [支持语言表](#支持语言表)
  - `代码`： 代码，支持换行
  - `***stdin`： 可选参数，表示输入流内有的内容

- 详情：

  运行代码

## 支持语言表

:::info
以下列出了本功能支持的语言列表，按字母顺序排列
:::

|语言|可用代号|
|----|-------|
|assembly|assembly、asm|
|ats|ats|
|bash|bash|
|C|c|
|clojure|clojure|
|cobol|cobol|
|coffeescript|coffeescript|
|C++|cpp|
|crystal|crystal|
|C#|csharp、c#|
|D|d|
|elixir|elixir|
|elm|elm|
|erlang|erlang|
|F#|fsharp、f#|
|Go|go|
|groovy|groovy|
|hare|hare|
|haskell|haskell|
|idris|idris|
|java|java|
|javascript|javascript、js|
|julia|julia|
|kotlin|kotlin|
|Lua|lua|
|mercury|mercury|
|nim|nim|
|nix|nix|
|ocaml|ocaml|
|perl|perl|
|php|php|
|python|python、py|
|raku|raku|
|ruby|ruby|
|rust|rust|
|sac|sac|
|scala|scala|
|swift|swift|
|typescript|typescript、ts|
|zig|zig|

## 使用示例

- `/run py print("hello world")`： 运行一段 **Python** 代码
- `/run py print(input())***hello world`： 运行一段 **Python** 代码，并将 `hello world` 传入输入流
