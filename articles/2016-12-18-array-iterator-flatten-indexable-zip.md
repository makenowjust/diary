---
title: Iterator#flattenを直したり、Array#zipをIndexable#zipにしたり
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## `Iteratir#flatten`を直した

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3703">Revive Iterator#flatten from type inference hell by MakeNowJust · Pull Request #3703 · crystal-lang/crystal</a>

最高に疲れたんだけどマージされて本当によかった。`Array`だけ平坦にするんで妥協するんでもういいんじゃないかな‥‥。

> Forgot to say this, best issue title ever! 🤘

めちゃくちゃ嬉しい。

## `Array#zip`を`Indexable#zip`にした

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3725">Move Array#zip to Indexable#zip by MakeNowJust · Pull Request #3725 · crystal-lang/crystal</a>

これはまあできるよなぁって思ってた。

まだ反応がないのでなんとも言えない。

## `Array#flatten`が`Iterator`も`flatten`するようにした

`Iterator#flatten`の挙動に合わせるようにした。

これは別にマージされなくてもかまわないのだけど、Aryがここまで考えてたら面白いなぁとかその程度。

# やってないこと

[crystal-lang/crystal#3700](https://github.com/crystal-lang/crystal/pull/3700)の対応は明日やります。
