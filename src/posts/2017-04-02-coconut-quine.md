---
title: CoconutでQuineを書いた
---

# やったこと

## CoconutでQuineを書いた

書いたのは昨日なのだけど、疲れていたので説明するのを忘れていた。

[Coconut](https://github.com/evhub/coconut)というのはAltPythonみたいな感じの言語で、Pythonにパイプ演算子とかその他関数型っぽい物を追加したやつ。Pythonで実装されているらしい。

Hacker Newsを「programming language」で検索していたら発見した。

Quineはパイプ演算子を使ってそれっぽくしてみただけ。

<a class="embedly-card" href="https://github.com/MakeNowJust/quine/blob/ddf86151be8388b7f22291eae7bf34044132fa85/quine.coco">quine/quine.coco at ddf86151be8388b7f22291eae7bf34044132fa85 · MakeNowJust/quine</a>

実行はこんな感じ。

```
$ pip install coconut
$ coconut -qr quine.coco | diff quine.coco -
```

面白いけど使わないなぁ、という印象。
