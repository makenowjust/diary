---
title: bashcachedのv5.0.0とか、--statsフラグとか
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

気が付いたら日付けが変わってた‥‥。今日のは普通に色々やってただけなので許して。

# やったこと

## 冬コミの原稿を入稿した

優勝！

と一概に言えたらよかったのですが現状、原稿不備を言い渡されている。修正版はもう出したので次は大丈夫なはず。大丈夫なはず‥‥。

## `crystal run --stats`でコンパイル時間除いた実行時間まで表示するようにした

<a class="embedly-card" data-card-width="100%" data-card-controls="0" href="https://github.com/crystal-lang/crystal/pull/3643">Enhance --stats option by MakeNowJust · Pull Request #3643 · crystal-lang/crystal</a>

他にも色んな`crystal`のサブコマンドで最後に行う処理の実行時間が表示されるようになってる。これがさくっとマージされたのは恐らく、Ary自身が世界で一番`--stats`フラグを使っているからではないかと思う。ボクが`--stats`を教わったのもAryからだったし。

個人的には[#3622](https://github.com/crystal-lang/crystal/pull/3622)で`crystal docs`でも`--stats`フラグ使えるでしょって言われたから、他のコマンドも同じことが言える気がして実装したんですけど。

あと、最後にAryがさりげなく出してきた`-t`フラグのアイディアは良いと思う。ぶっちゃけ普通のCrystalユーザーが求めてるのはそっちだろうな、と。

（自分の場合はコンパイル時にヤバいことをしたがるので`--stats`フラグは`--stats`フラグで便利なのですが）

それと面白い話として、このPull Requestは`spec`に影響を与える部分が無いにも関わらず数回連続でCIに失敗している。というのも、どうも`Thread::ConditionVariable`のテストに不備があるようで、32bitのLinuxのテストで実行が終了しなくなる **ことがある（100%ではない）** みたい。そのためTravis CIでタイムアウトしていた。
数回で失敗したところでRX14が`spec`の`-v`フラグ（`--verbose`）を立てた方が良くない？　と提言して、Aryが`master`ブランチでそれを適用してCIを回したところで原因は発覚した。その後ボクはその`master`に`rebase`したのだけど、三度目の正直なのか今度は普通にCIが通ってしまった。何だったんだ‥‥。
ちなみに件の`Thread::ConditionVariable`のテストは[ペンディングされることになった](https://github.com/crystal-lang/crystal/commit/2e9c9b50c95b0f906d179aeebd14f2319f527730)。
この問題が起きてるときのAryの書き込みがやけに楽しそうだったのが印象的だった。こういうときに楽しめるのは尊敬できるなぁ、と。

## bashcachedのv5.0.0をリリースした

実装したのは11月20日だと思われる。なんでリリースしていなかったのかというとベンチマークを実装していたからなのだけど、ベンチマークの実装が永遠に終わらなそうなので諦めてリリースすることにした。

ちなみにv4→v5とメジャーバージョンアップになっているけど、直したところとしては、

  - `base64`が`brew install base64`でインストールしたものでも動くようにした。（`-w`フラグを使わないようにした）
  - `incr`と`decr`がバグっていたのを直した

くらい。ぶっちゃけ互換性はある。しかしこれによって、

```console
$ brew install base64 bash socat
```

すれば`bashcached`が動くようになった。つーかmacOS標準の`bash`古すぎだろ。

ベンチマークよりも先にテストを作った方がいい気がする。

## その他

大学でひさしぶりに、プルーストの『失われた時間を求めて』を読んでいた。初めて読む訳だったのでわりと印象が違う。前読んだ方が雰囲気は出てた気がするけど、今回読んだ方が読みやすかった。といってもまだ全体の一割も読んでいないのだけど。こいついつもマドレーヌ食ってやがるな。

『失なわれた時間を求めて』を読もうと思った理由は大体バーナード嬢いわく、のせい。あれは結構好き。

あとはミヒャエル・エンデの言った「永遠に幼きもの *Ewig-Kindliche*」について考えたりしていた。永遠に幼なきものって響き、かなり危険な香りがしていいですよね。

# 明日すること

  - 入稿の確認、代金の振り込み
  - キーボード買うぞ

という感じです。おやすみなさい。

- - -

これは[MakeNowJust Advent Calendar 2016](http://www.adventar.org/calendars/1906)の6日目の記事ですが、もういっそMakeNowJust生存記録みたいな感じにすればいいんじゃないかな‥‥。