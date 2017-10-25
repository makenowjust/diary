---
title: String#rindexをラビン-カープ法で実装したり、GOOD ON THE REELを聴いたり
---

<script async src="//platform.twitter.com/widgets.js"></script>

# やったこと

## `String#rindex`をラビン-カープ法で実装した

`String#index`ができたんだから`rindex`もできるだろう的な。速くするのが難しい。

V8の実装を確認したり（後ろから文字列を舐めていって、最初の文字が同じだったら実際の比較を行なうようになってた。`String.prototype.indexOf`は文字列の長さによって色々な戦略が取られるようになっていた。`memchr`的なので最初の文字だけ探して、実際の比較を行なって、何度かそれに失敗したらBMH法に移行する、みたいなのが面白かった）、Rustの実装の知見を得たり（Two Way Algorithmというやつらしい。詳細はよく分かっていない）した。

あと、多分SSE 4.2で追加された文字列処理SIMDを使うのが一番速いんだろうなぁ、とも思うんだけど、それだとUTF-8の文字数カウントできないし‥‥。

## GOOD ON THE REELを聴いた

GOOD ON THE REELというバンドに出会った。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">GOOD ON THE REEL / 存在証明書 Music Video <a href="https://t.co/nvBcltPR9p">https://t.co/nvBcltPR9p</a> <a href="https://twitter.com/YouTube">@YouTube</a>さんから</p>&mdash; さっき作った (@make_now_just) <a href="https://twitter.com/make_now_just/status/818449277315739649">2017年1月9日</a></blockquote>

どうして出会ったのかはよく覚えていない。なんかツイートで流れてきたような気がする。

ツイートは「存在証明書」だけど「素晴らしき今日の始まり」とか「雨天決行」とか、かなり良い。

<iframe width="560" height="315" src="https://www.youtube.com/embed/0hazuIKucbo" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/TgwZ7xveZls" frameborder="0" allowfullscreen></iframe>

もっと色々なバンドを知っていきたい。
