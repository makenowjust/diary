---
title: crystal tool expandを改良したり餃子を食べたりイヤホンが壊れたり
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>
<script async src="//platform.twitter.com/widgets.js"></script>

何も無い一日のようで、色々なことのあった一日のような気がする。もしかしてこれがPretty Daysなのだろうか？

# やったこと

## `crystal tool expand`を改良した

昨日の続き。やったことをまとめておくと、

  - `lib`や`fun`などの`location`がちゃんと取れるようにした
  - インデントがある場所でマクロ式を展開するとインデントが微妙になるのを直した
  - 展開が見つからなかった際のメッセージを改善した
    （指定した座標がマクロ呼び出しではなく通常のメソッド呼び出しだった場合に、そのことを報せるようにした）

と、こんな感じ。結局まだテストは書けていない。`tool context`とか`tool implementation`を参考にしてテストを書いていきたい。

`unless`が`if`になるのとかはさすがに対応しなきゃいけない気がする。一度やってみてメモリ量がどうなるかを見てみる。

Aryからの反応は、

> I think this tool can be useful, I just need to think what's the criteria to merge new tools.

とのこと。どうなるんだろう‥‥。

## 餃子を食べた

yと4869と一緒に渋谷にある渋谷餃子という店に行った。

<a class="embedly-card" href="https://tabelog.com/tokyo/A1303/A130301/13162902/">渋谷餃子 (渋谷/餃子)</a>

渋谷に行くのは久し振りなような気がしたけれどそんなことは無かった。11月末に行ってる。

渋谷駅に着いたのは6時20分くらいだったのだが、待ち合わせは7時だった。早すぎる。仕方ないので渋谷をぶらぶらしていた。人が多すぎるをどうにかしてほしい。Chaos; ChildやChaos; Headで見たような光景がいっぱいあって楽しかった。

戻ってきて待合せ場所のハチ公前口のあたりにいると、なぜかマック赤坂が踊っていた。一体何が起きたのかよく分からなかったがマック赤坂が踊っていた。まったく面白いおじいちゃんである。

全員と合流すると、センター街の奥にある店にいった。店はそこそこ込んでいて、席が空くのを待つ必要があった。

店に入って餃子を頼む。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">優勝 <a href="https://t.co/06UJFz8jXi">pic.twitter.com/06UJFz8jXi</a></p>&mdash; さっき作った@3日目東R-13a (@make_now_just) <a href="https://twitter.com/make_now_just/status/811162679859494912">2016年12月20日</a></blockquote>

オタクはすぐ優勝って言う。

その後、なんやかんや2時間くらい（？）餃子を食べたり炒飯を食べたり唐揚げを食べたり揚げ餃子を食べたり餃子を食べたりしていた。色々話したりもした。3人で餃子60個食べて5000円くらいなら結構安いなぁと思った。

## イヤホンが壊れた

餃子食べ終わって埼京線までがんばって歩いていっていた途中でイヤホンの調子がおかしくなった。そこそこ高いイヤホンだったので明日保証を使おうかと思う。

今は急場しのぎにコンビニで買ったイヤホンを付けている。

# やること

明日は時間に余裕があるので`crystal tool expand`を完成にもっていきたい。あとアニメ観たりとか映画観たりとか。
