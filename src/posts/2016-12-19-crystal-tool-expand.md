---
title: crystal tool expandを実装した
---

<script async src="//platform.twitter.com/widgets.js"></script>
<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">この世界の片隅に、五回目！</p>&mdash; さっき作った@3日目東R-13a (@make_now_just) <a href="https://twitter.com/make_now_just/status/810327310372999168">2016年12月18日</a></blockquote>

そういえば昨日完全に書き忘れたんですが「この世界の片隅に」を観てきました。5回目です。さすがに5回も観ると分からないところが減ってくるというか、むしろ新しく分かりはしないので分からないシーンが印象に残って離れないのがつらいです。分かるようになりたい。

## `crystal tool expand`を実装した

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3732">Add "expand" command to Crystal tools by MakeNowJust · Pull Request #3732 · crystal-lang/crystal</a>

この前のCrystal勉強会のときにみんなが欲しいと言っていたやつ。ボクは別に`debug`マクロでよくね？　って思うんですけど、まあ確かにあると面白い。`record`とか展開するとこんな風になるんだなぁ、って。

問題は、ソースコードをそのまま使っているのではなくてASTを`to_s`しているから、パーズ時に変換しているもの（例えば`unless`は`then`節と`else`節を逆にした`if`として実装されてる）の表示が微妙になってしまう。あと、Crystalのパーザが付けるソースコード上の座標の情報がいい加減で信用ならないという問題がある。

前者は`semantic`処理時にマクロを展開するタイミングでフックして展開結果を取るようにすればいいんだけど、何重にも展開されるときに元座標を取得しておくのが面倒そうでやっていない（簡単にできるような気もする）。あと、生文字列だとインデントの調整とかがかったるい。後者は気合で直すしかないんだけど、ASTにプロパティを無闇に生やすとメモリ消費量がどこまでも増加することになるからあまりやりたくない。Aryの意見待ち。

現在の実装は、`semantic`処理のみで`cleanup`変換をしていないASTの中からマクロを探索している。これは結構上手くいく。`cleanup`処理をしていないのは、するとマクロが展開されてしまうから。

ぱっと見の反応は悪くないっぽくて、kostyaとchenkovsky（誰だ‥‥。知らねぇ）が:+1:している。ありがたい。

あともう一個Pull Request出したけどそっちはどうでもいいただのタイポFixです。

# やること

[crystal-lang/crystal#3700](https://github.com/crystal-lang/crystal/pull/3700)どうしよう。まだ決めかねてる。

とりあえず承認されたので幸せです。
