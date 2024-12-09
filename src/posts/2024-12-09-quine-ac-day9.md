---
title: 'DAY 9 - Jolie (Quine AC 2024)'
---

# DAY 9

[Jolie](https://www.jolie-lang.org)というプログラミング言語があります。
サービスをつなげていくタイプの言語。
DAY 4に書いた[Ballerina](https://ballerina.io)に近いものがあります。

独特の構文というか、初期化してない変数にいきなり色々代入できるのが面白かったです。
関数呼び出しみたいなのに括弧が2つ付いてるのは、一つがrequestで、もう一つがresponseを指定するからみたいです。

Quineはこんな感じになりました。

```lua
from console import Console

service Quine {
  embed Console as Console

  main {
    q[#q] = "from console import Console

service Quine {
  embed Console as Console

  main {
    q[#q] = "
    q[#q] = "\""
    q[#q] = "\\"
    q[#q] = "    q[#q] = "
    q[#q] = "    println@Console(q[0] + q[1] + q[0] + q[1])()
    println@Console(q[3] + q[1] + q[2] + q[1] + q[1])()
    println@Console(q[3] + q[1] + q[2] + q[2] + q[1])()
    println@Console(q[3] + q[1] + q[3] + q[1])()
    println@Console(q[3] + q[1] + q[4] + q[1])()
    println@Console(q[4])()
  }
}"
    println@Console(q[0] + q[1] + q[0] + q[1])()
    println@Console(q[3] + q[1] + q[2] + q[1] + q[1])()
    println@Console(q[3] + q[1] + q[2] + q[2] + q[1])()
    println@Console(q[3] + q[1] + q[3] + q[1])()
    println@Console(q[3] + q[1] + q[4] + q[1])()
    println@Console(q[4])()
  }
}
```

実行は `jolie` コマンドを叩くだけです。

```console
$ jolie quine.ol | diff quine.ol -
```
