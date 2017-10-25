---
title: あけましておめでとうございます
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

あけましておめでとうございます。今年もよろしくお願いします。

# やったこと

普通にCrystalにPull Request出してた。

## `Iterator#with_index(&block)`がメモリを確保しないようにした

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3814">Avoid allocation in Iterator#with_index(&block) by MakeNowJust · Pull Request #3814 · crystal-lang/crystal</a>

なんか手元のCrystalのリポジトリ見たらあったのでPull Requestを送っておいた。いつやったんだっけ？　大分前から問題としては認識してたんだけど、なんとなく放置してた気がする。

というかどうしてこのコードがマージされていたのかが謎。`class`を`new`してるんだから止めろよ。

## `each`とか`each`っぽいメソッドはレシーバーを返すようにした

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3815">Fix each* methods to return self by MakeNowJust · Pull Request #3815 · crystal-lang/crystal</a>

地味に面倒だった。`grep`かけてチェックしていくだけだけど。テストが雑な気がする。

ちなみに`Enumerable#each_cons`とかは`nil`を返すまま変更してない。というのもRubyがそうだったから。でもどうしてそうなってるんだろう？　別にレシーバー返してもよくない？

# やること

今年の抱負的なことは明日書きます。あとパーフェクト・ブルー観たい。
