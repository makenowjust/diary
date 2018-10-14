---
title: Quineを書いたりFlateを直したりした
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## DafnyでQuineを書いた

DafnyというMicrosoftが作っている正当性の検証のできるプログラミング言語があるらしい。

<a class="embedly-card" href="https://www.microsoft.com/en-us/research/project/dafny-a-language-and-program-verifier-for-functional-correctness/">Dafny: A Language and Program Verifier for Functional Correctness - Microsoft Research</a>

バックエンドにBoogieとz3を使って検証するらしい。形式手法というのだろうか？　ともかくz3がつよいということが分かる言語だった。

多分、C#とかに比較的近い構文で形式手法ができることに価値があるのではないかと思う。

Quineはこれ。

<a class="embedly-card" href="https://github.com/MakeNowJust/quine/blob/55ac3a8393bf1d41225d7018b4cb817a381b99ed/quine.dfy">quine/quine.dfy at 55ac3a8393bf1d41225d7018b4cb817a381b99ed · MakeNowJust/quine</a>

せっかくなので`Quote`メソッドで返される文字列が引数の文字列の長さの二倍より二大きくなっているか検証している。Quineかどうかの検証というのは中々難しい。というかできるんだろうか‥‥。

実行方法は、

```console
$ dafny quine.dfy
Dafny program verifier version 1.9.7.30401, Copyright (c) 2003-2016, Microsoft.

Dafny program verifier finished with 4 verified, 0 errors
Compiled assembly into quine.exe
$ mono quine.exe | diff quine.dfy -
```

みたいな感じでいいと思います。ちなみに改行の大きさを1に仮定してるのでrise4funのオンラインで実行できるやつだと上手く動きません。

これの地味にしんどかったところは、文字列の長さが`100`より大きくなることを要求すると問答無用で検証に失敗するところ。要するに`requires |s| > 100`みたいなのがあるとダメ。なので文字列の長さから引いた位置から部分文字列を取り出すようにしてる。これだと上手くいく。完全に謎。

## JamでQuineを書いた

これは一週間前のことなんだけど実行方法をメモっておかないと忘れそうなので。

Jamというビルドシステムがある。Boostのビルドで使われるのでこれで有名かもしれない。

このビルドの定義用の言語でQuineを書いた。

<a class="embedly-card" href="https://github.com/MakeNowJust/quine/blob/88becc31080ade377a0c9416b5e4c040af9394cd/quine.jam">quine/quine.jam at 88becc31080ade377a0c9416b5e4c040af9394cd · MakeNowJust/quine</a>

で、これはJamでこう実行できる。

```console
$ jam -d0 -f quine.jam | diff quine.jam -
```

ちなみに、これはBoost.Jamだと上手く動かない。というのもオリジナルのJamだと出力の末尾にスペースが入るのだけど、Boost.Jamだとそれがないから。なのでファイルの最後のスペースを消せばQuineになるはず。どう考えてもオリジナルのJamが悪いのだけど、されどオリジナルなので許容することにした。Boost.Jamも方言扱いして別のQuine書こうかとも思ったのだけど、これ以外に何が違うのかよく分かっていないので手を付けていない。

## Flateを直した

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/4193">Flate: try to inflate even if @stream.avail_in is 0 by MakeNowJust · Pull Request #4193 · crystal-lang/crystal</a>

なんかがんばったら直った。zlibよく分からないしちゃんと理解したい。
