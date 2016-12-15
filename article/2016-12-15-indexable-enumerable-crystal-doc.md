---
title: IndexableがEnumerableをincludeするようにしたり、「てんしのはねとアクマのシッポ」を読んだり
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>
<script async src="//platform.twitter.com/widgets.js"></script>

# やったこと

## `Indexable`が`Enumerable`を`include`するようにした

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3699">Avoid TODO, not to include Enumeranle directly by MakeNowJust · Pull Request #3699 · crystal-lang/crystal</a>

単にTODOを潰しただけ。

本当は`Array#zip`を`Indexable#zip`にする変更をしようとしてたんだけど、何かイマイチなような気もするので保留している。

## Gitリポジトリの外で`crystal docs`したときにGitの警告が出るのを抑制した

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3700">Show warning message if cannot detect github repository on crystal docs by MakeNowJust · Pull Request #3700 · crystal-lang/crystal</a>

というのをこのPRの骨子と考えるとSijaみたいな指摘が出てくるのかな、と思った。

「fatal: Not a git repository」ってメッセージじゃ何も伝わらないよね、Gitリポジトリじゃないから何なのっていうのを強調する必要があるな、という考えで出したPull Requestなわけです。

とはいえSijaとのやりとりがこじれたのは自分の英語力不足なので申し訳ない。「not 〜 perfectly」じゃなくて「no perfectly」な。注意しような。

なんでこんな毎日のように`crystal docs`周りのPull Request出してるんだろう。

## Sija/serialport.crに招待された

突然なので焦った。`libserialport`のラッパーらしい。招待されると何なのかよく分からないんだけど、とりあえずコントリビュートしろという圧力を感じるのでコードを確認しようと思う。

Sijaなんなんだ。

## 「てんしのはねとアクマのシッポ」を読んだ

<a class="embedly-card" href="http://www.mangaz.com/book/detail/44921">てんしのはねとアクマのシッポ | マンガ図書館Z - 全巻無料で読み放題</a>

マンガ図書館Zで公開されていて、ちょっと気になったので。

絵がとてもかわいかった。シスプリのミニキャラを描いてた人らしい。なるほど。

なんというか、漫画って単純な絵の巧さじゃないんだな、と思った。その場その場で必要な絵柄っていうのがあるのかなって。

全2巻とそんなに長くないし、最後はハッピーエンドで終わる話なので時間に余裕のある人は読んでみてください。

## Siriと戯れた

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">Siriに「百合って何だか教えて」って聞いてみました。 <a href="https://t.co/esoUoaViel">pic.twitter.com/esoUoaViel</a></p>&mdash; さっき作った@3日目東R-13a (@make_now_just) <a href="https://twitter.com/make_now_just/status/809336984938254340">2016年12月15日</a></blockquote>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">これひどすぎでは <a href="https://t.co/kA1otYsAmy">pic.twitter.com/kA1otYsAmy</a></p>&mdash; さっき作った@3日目東R-13a (@make_now_just) <a href="https://twitter.com/make_now_just/status/809337718668857344">2016年12月15日</a></blockquote>

Siriって何に使えばいいんですか？

# 所感

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">余計なお世話の押し付け合いがオープンソースなので、オープンソースのプロジェクトにコントリビュートしていきたい人はまず自分のすることは原則として余計なお世話だということを理解しなきゃいけない</p>&mdash; さっき作った@3日目東R-13a (@make_now_just) <a href="https://twitter.com/make_now_just/status/809352903773171712">2016年12月15日</a></blockquote>

これをもっと伝えていきたい。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/make_now_just">@make_now_just</a> Xeon積んだサーバで良いなら提供できるかも</p>&mdash; きょんたん (@sukukyon) <a href="https://twitter.com/sukukyon/status/809299515438006272">2016年12月15日</a></blockquote>

いえーいきょんたん神めっちゃ尊敬してる言質は取った。

# 雑感

やけに疲れていて午後入ってすぐは眠すぎて死にそうになった。気が付いたらベンチで寝ててまずかった。
