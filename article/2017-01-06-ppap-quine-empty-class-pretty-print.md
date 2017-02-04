---
title: PPAPでQuineを書いた
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## PPAPでQuineを書いた

<a class="embedly-card" href="https://github.com/yhara/ppap-lang">yhara/ppap-lang: (maybe yet another) programming language inspired by PPAP</a>

yharaさんが作っていたので、Quineを書いてみた。

<a class="embedly-card" href="https://gist.github.com/MakeNowJust/33b0c6198df0f7884554658ca0da5279">Quine written in ppap-lang (https://github.com/yhara/ppap-lang)</a>

実装はかなり普通というかいい加減というか。メモリが普通に使えるので一文字ずつエンコードして、ループして表示していくだけ。変数名に`p`が含まれていなきゃいけない縛りがめんどくさい。

## `Reference#pretty_print`がインスタンス変数を持たないクラスに対して呼び出されたときに、余計な空白が追加されるのを修正

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3848">Fix empty class pretty print by MakeNowJust · Pull Request #3848 · crystal-lang/crystal</a>

`PrettyPrint`の仕様がなんとなく分かってよかった。
