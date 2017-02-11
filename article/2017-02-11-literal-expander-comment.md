---
title: Crystal::LiteralExpanderのコメントが間違っていたので直した
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## Crystal::LiteralExpanderのコメントが間違っていたので直した

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/4017">Correct a doc comment for LiteralExpander of StringInterpolation by MakeNowJust · Pull Request #4017 · crystal-lang/crystal</a>

超が付くほどにどうでもいい修正。文字列の補間の際に使われるのは`IO::Memory`じゃなくて`String::Builder`だよねっていうそれだけ。
