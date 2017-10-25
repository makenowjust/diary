---
title: Reference#dupがファイルprivateなクラスに対して動かないのを修正した
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## `Reference#dup`がファイルprivateなクラスに対して動かないのを修正した

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3858">Fix Reference#dup of file private class by MakeNowJust · Pull Request #3858 · crystal-lang/crystal</a>

タイトルだけ見ると`src/reference.cr`を弄ったかのようだけど、実際はコンパイラを弄ってる。具体的には、マクロ展開の際に`{{@type}}`を特別扱いして、そのクラスが定義された場所の`#<loc:>`プラグマで囲っている。こうすることでファイルprivateなクラスでも上手く動くようになる。

# やること

傷物語を観に行くぞい。
