---
title: Array#concatが和型を受け取れるようにしたり、あきゆめくくるを始めたり
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

そういやエリナー・リグビー聴いてないな。

# やったこと

## `Array#concat`が和型を受け取れるようにした

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3775">Fix to concat a union of arrays by MakeNowJust · Pull Request #3775 · crystal-lang/crystal</a>

どういう意味なのかというと、例えばこういう配列があったとする。

```crystal
arr = [1, '2']
```

この配列の型は当然`Array(Int32 | Char)`だ。

そして、こういう引数で`concat`する際には上手く動作する。

```crystal
# Array(Int32)
arr.concat([3])
# Array(Char)
arr.concat(['4'])
# Array(Int32 | Char)
arr.concat([5, '6'])
```

しかし、この場合には上手くコンパイルできない。

```
# Array(Int32) | Array(Char)
arr.concat([7] || ['7'])
```

なぜかというと、内部で`Array(Int32) | Array(Char)`が`Pointer(Int32) | Pointer(Char)`になって、最終的に`Pointer(Void)`にキャストされようとするのだけど、ポインタの和型は任意のポインタにキャストできるわけではないのでエラーになる。これは挙動としては正しいので、どうにかして`concat`の引数が和型になるのを防がなければいけない。

そのために、新しく`Array#concat_to`というメソッドを作って、`concat`の内部ではそれを呼ぶようにした。こうすることで和型の各型がばらされて呼び出される形になる。この方法を思い付いたときには結構感動した。

## あきゆめくくるを始めた

買ってきたしやろうと思ってインストールした。普通に楽しいじゃん、という感じ。まだ1ルートも終わってないので何とも言えないけど。
