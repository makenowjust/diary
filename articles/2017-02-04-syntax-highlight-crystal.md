---
title: Crystalのシンタックスハイライタを直していた
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## Crystalのシンタックスハイライトを直した

<a class="embedly-card" href="https://github.com/isagalaev/highlight.js/pull/1445">Update Crystal language definition by MakeNowJust · Pull Request #1445 · isagalaev/highlight.js</a>

<a class="embedly-card" href="https://github.com/PrismJS/prism/pull/1092">Update Crystal keywords by MakeNowJust · Pull Request #1092 · PrismJS/prism</a>

highlight.jsとprism.jsのCrystalのシンタックスハイライトを新しい構文に対応させておいた。具体的には、

  - `select`、`uninitialized`、`__END_LINE__`の3つのキーワードを追加したり、
  - `ifdef`を削除したり、
  - ヒアドキュメントとか`%q{...}`文字列に対応させたり

していた。

CodeMirrorはちょっと面倒な気がするのでやってない。というか誰かがやってそうな気もする。

あと、pygmentsにいつの間にか追加されててビビった。pygmentsはmercurialで管理されてるせいで手が出しにくなったのでやってくれる人がいるなら楽でいい。

## highlight.jsに`console`のシンタックスハイライトを追加した

<a class="embedly-card" href="https://github.com/isagalaev/highlight.js/pull/1444">Add a new language: shell-session (also console) by MakeNowJust · Pull Request #1444 · isagalaev/highlight.js</a>

完全に自分が欲しかったから作ったのだけど、あとから探したらそういうIssueが既に立っていた。

結構適当だけどそこそこ動く気がする。

## `crystal tool expand`が`private`なメソッドとかモジュール内のマクロの展開を表示してくれないのを修正した

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3998">Fix `crystal tool expand` for private definitions by MakeNowJust · Pull Request #3998 · crystal-lang/crystal</a>

なんか一週間くらい前に作ったパッチな気がする。なんとなく公開してなかった。

# やること

明日はフリフラ見るぞ。
