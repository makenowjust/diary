---
title: Chaos; Childをクリアしたり、クラス単位のprivte macroを実装したり
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## Chaos; Childをクリアした

最高にクソったれなゲームをクリアしてしまった。

褒め言葉なんですけどね。

クリアまで半年以上かかったけど、クリアして本当によかったと思う。このゲームをやれてよかった。「素晴しき日々」と同じかそれ以上に気に入った作品になった。

Chaos; Headとかいうぶっとんだ物語に対して、正統に続編でありながらそれ以上に面白いものを作れる人がいるってことに驚愕した。驚愕しっぱなし。

## `crystal tool expand`の改善

なんか`crystal tool context`の方が壊れていたので直しておいた。これの根本的な理由は`macro`内で`yield`したときに展開されたコードに`#<loc`プラグマが付くのだけど、これが`yield`が終わったあとに座標が元に戻らないために、`FunDef`の`end_location`がおかしなことになるから。とりあえずad-hocに修正したけど、根本的な修正方法は思い付いているので明日にでもやる。多分、別のPull Requestに切り出すことになると思う。

テストどうやって書けばいいんだろう‥‥。

## クラス単位の`private macro`を実装した

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3747">Allow 'private macro' inside classes by MakeNowJust · Pull Request #3747 · crystal-lang/crystal</a>

ただ、現状あまり筋のいい提案ではない気がする。というのも、モチベーションとしては`# :nodoc:`されてるクラス内のマクロをどうにかしたい、ってことなんだけど、実際にはこの実装はもっと色々なことができる。例えば、現状は`Object`に定義されてる`property`マクロは、その気になればトップレベルでも使用できる。

```crystal
Object.property hello

hello # compile error!
```

けど、`property`マクロを`private`修飾すればこれを根本的に禁止することができる。しかしその使い方をすると当初の目的が果たせなくなるし、そもそも同じような問題のある`JSON.mapping`とかはどうすんだという話になる。まぁ`JSON`を`include`して、みたいにすればいいって考え方もあるのだけど、そんなの面倒で誰も賛同しないだろう（ボクだって嫌だ）。というわけで、今のところはPull Requestの文面では当初の目標についてだけ触れるようにしている。

クラス単位のマクロが無いのはまあその辺が面倒だからなんだと思うんだけど‥‥。[ファイル単位のマクロが追加されたPull Request](https://github.com/crystal-lang/crystal/issues/2950)を見ても、BlaXpiritが聞いてるのに答えていないので何も分からない。教えてほしい。

## efをインストールした

やりたかったので。公式サイトでシリアルコードを入力してインストーラを落としてこないと、DVDのインストーラだと上手くインストールできないので注意。
