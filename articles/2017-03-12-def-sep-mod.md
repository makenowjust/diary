---
title: crystal tool formatでprivate defが区切られないのを修正
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## `crystal tool format`で`private def`が区切られないのを修正

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/issues/4133">Formatter: not separate def with visibility modifier · Issue #4133 · crystal-lang/crystal</a>

タイトルの通り。直すの自体は単純だったのだけど、フォーマッタの実装のそのままの区切りの判定だとしんどいところがあったので、若干リファクタリングしている。
