---
title: crystal docを直したり日記を作ったりした
---

# `crystal doc`を直した

Crystalの`BitArray`のドキュメントにおかしい部分があることに気付いていたので眺めていたら、なんかもっと根本的におかしい部分を見付けたので直していた。
例えば`BitArray`は`Enumerable(Bool)`とか`Indexable(Bool)`を`include`しているのだけど、これがなぜか`Enumerable({"T", T})`とか`Indexable({"T", T})`みたいになる。ジェネリククスを継承してるとおかしくなるっぽい。

![BitArrayのドキュメントがおかしい](https://cloud.githubusercontent.com/assets/6679325/20783654/88fb9edc-b7d8-11e6-841f-a7969e022bb6.png)

これは主に、[この行が原因](https://github.com/crystal-lang/crystal/blob/b8602fbd0ce920fc35c2bf3109c636e2798d751c/src/compiler/crystal/tools/doc/type.cr#L59-L60)、

```crystal
    when GenericInstanceType
      type.type_vars
```

`type.type_vars`の型は`Hash(String, Crystal::ASTNode)`なんだけど、このメソッド（`Crystal::Doc::Type#type_vars`）は`Array(String)?`が返ることが期待されてる。それにも関わらずこのメソッドの返り値を使う部分では型にあまり依存しない処理しかされてないから、そのことがコンパイルエラーにならない、という感じ。

ならその行を直せばいいのかというとそんなに事態は単純でもないのだけど‥‥、説明が面倒になったので次の二つのPull Requestを見てほしい。

  - [Fix doc of the type inherited from generics class or module](https://github.com/crystal-lang/crystal/pull/3616)
  - [Fix doc of the type having generic superclass](https://github.com/crystal-lang/crystal/pull/3617)

よくもまあ似たような名前のPull Requestを作るものだ。

他にも[`ArrayLiteral#[]=`のドキュメントを追加するPull Request](https://github.com/crystal-lang/crystal/pull/3615)を出したりした。

# 日記を作った

上の`crystal doc`の修正は大体学校でやっていたのだけど、家に帰ってからはずっとこの日記を作っていた。どうしてこんなものを作ったのかというと、昨日ノリと勢いだけで[Make Now Just Advent Calendar 2016](http://www.adventar.org/calendars/1906)を作ってしまったので、どこかしらそれを記事を公開していかなければならなくなったからだったりする。

`gulp`とかをどうしても使いたくなかったので車輪の再発明をしまくった気がする。まあ動いてはいる。

- - -

というわけでこの日記を[Make Now Just Advent Calendar 2016](http://www.adventar.org/calendars/1906)の1日目の記事ということにしたいと思います。（雑）
