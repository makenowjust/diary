---
title: make depsを消してしまったので復活させた
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## `make deps`を消してしまったので復活させた

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3838">`make deps` is back by MakeNowJust · Pull Request #3838 · crystal-lang/crystal</a>

[crystal-lang#3720](https://github.com/crystal-lang/crystal/pull/3720)がマージされたのだけど`make deps`が無くなってて困ると言われたので急遽作ったPull Request。Aryとかyasbaddaden辺りは使ってるんだろうなぁと思っていたので確認を取るべきだったなぁと反省をしている。

## 天体のメソッドが書けない

FortanとかCOBOLとかPascalとかOCamlとかで書こうと試みているのだけど、どれも日本語識別子を受け付けてくれない。OCamlが受け付けないのはかなり意外だった。やっぱHaskellは最高だ。

冷静に考えるとIoが素直に日本語識別子を受け入れたのはかなり謎なところだと思う。
