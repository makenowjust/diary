---
title: 'DAY 4 - Ballerina (Quine AC 2024)'
---

# DAY 4

[Ballerina](https://ballerina.io)というプログラミング言語があります。
HTTPサービスとかgRPCの公開をファーストクラスにサポートしているのが特徴。
構文はC#とかJavaっぽい感じ。フローチャートで表示・編集する機能もあるらしいです。
JVMのバイトコードにコンパイルされて実行されます。
コンセプトは悪くないのだけど、こんなところでロックインされてもなぁという部分でもあるので、流行りそうなものではないと思った。

Quineは `check from ...` によるLINQみたいな構文の繰り返しが面白いと思ったので、それを使ってみています。
`check from` の繰り返しの中でエラーが起こらないので警告が出ているけど気にしないことにする。
あとは、適当にソースコードを見ていたら `toBalString` というメソッドが定義されていることが分かったので、それを使っています。

```csharp
import ballerina/io;

public function main() returns error? {
    string[] xs = [
        "import ballerina/io;",
        "",
        "public function main() returns error? {",
        "    string[] xs = [",
        "    ];",
        "    string x1 = xs[xs.length() - 1];",
        "    string x2 = xs[xs.length() - 2];",
        "    check from var [i, x] in xs.enumerate()",
        "        where i < 4",
        "        do {",
        "            io:println(x);",
        "        };",
        "    check from var [i, x] in xs.enumerate()",
        "        where i < xs.length() - 1",
        "        do {",
        "            io:println(x1 + x.toBalString() + x2);",
        "        };",
        "    io:println(x1 + x1.toBalString());",
        "    check from var [i, x] in xs.enumerate()",
        "        where 4 <= i && i < xs.length() - 2",
        "        do {",
        "            io:println(x);",
        "        };",
        "}",
        ",",
        "        "
    ];
    string x1 = xs[xs.length() - 1];
    string x2 = xs[xs.length() - 2];
    check from var [i, x] in xs.enumerate()
        where i < 4
        do {
            io:println(x);
        };
    check from var [i, x] in xs.enumerate()
        where i < xs.length() - 1
        do {
            io:println(x1 + x.toBalString() + x2);
        };
    io:println(x1 + x1.toBalString());
    check from var [i, x] in xs.enumerate()
        where 4 <= i && i < xs.length() - 2
        do {
            io:println(x);
        };
}
```

実行はこんな感じで。
Homebrewでインストールできるので適当にやってください。

```console
$ bal run quine.bal | diff quine.bal -
```
