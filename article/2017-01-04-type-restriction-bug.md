---
title: デフォルト引数に型制約が適用されない問題を修正した
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

プログラミングに対するモチベーションが非常に低下している。

# やったこと

## デフォルト引数に型制約が適用されない問題を修正した

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3834">Restrict argument types having a default value by MakeNowJust · Pull Request #3834 · crystal-lang/crystal</a>

例えばこんなコードがあったとする。

```crystal
def foo(x : String = 1)
end

foo
```

`x : String`になってるのに`x = 1`がデフォルト値になっている、見るからに変なコードなんだけど、現状のコンパイラはこれを通してしまう。というのも、デフォルト値に対する型制約は適用されないから。

ついでに言うとこういうコードも上手く動かない。

```crystal
def foo(x : T.class = String) forall T
  p {{ T }}
end

foo
```

型制約のチェックをする際に自由変数の値が設定されるようになってるので。

どうやって修正したかを簡単に説明すると、`TypeRestriction`という疑似ノードを追加して、メソッドが実体化されるときに型制約を持つデフォルト引数があったら挿入するようにしている。
