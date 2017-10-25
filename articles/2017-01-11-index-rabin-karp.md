---
title: String#indexをラビン-カープ法で実装したものをPull Requestした
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>
<script async src="//platform.twitter.com/widgets.js"></script>

3日も日記サボってごめんなさい。

# やったこと

新宿に行ったらピカデリーで「この世界の片隅に」が上映していた。本当に何かが変わりつつあるのかもしれないと思った。

## `String#index`をラビン-カープ法で実装したものをPull Requestした

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3873">Implement Rabin-Karp algorithm for String#index by MakeNowJust · Pull Request #3873 · crystal-lang/crystal</a>

なんかもう面倒になってきたので投げやりなPull Requestを投げたら高速でマージされてしまった。

明日、Two Way Algorithmを実装してベンチマーク取ります、はい。それでそっちの方が速かったらそっちを投げ直します。

一応、`PRIME_RK`の意味を説明しておくと、`0x1FFFFF`（現行のUnicodeが取り得る最大の値）以上の最初の素数のはずです。バイト列に対してかけてるからなんの意味もないけど。もしかしたら外の素数の方がベンチマークいいかもしれない。誰か試してみてほしい。

あと、`String#rindex`の方は最適化が済んでないので少し待ってください。

# 次回予告

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">明日はカバネリとバイオを観よう。観るぞー!!</p>&mdash; さっき作った (@make_now_just) <a href="https://twitter.com/make_now_just/status/819178223355379713">2017年1月11日</a></blockquote>

決意表明です、確認ください。
