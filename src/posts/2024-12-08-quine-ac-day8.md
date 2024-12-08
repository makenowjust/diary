---
title: 'DAY 8 - Harbour (Quine AC 2024)'
---

# DAY 8

[Harbour](https://harbour.github.io)というプログラミング言語があります。
[dBASE](https://ja.wikipedia.org/wiki/DBASE)クローンの[xBase](https://ja.wikipedia.org/wiki/XBase)の一種です。
歴史のある言語っぽさもありつつ、コードブロックが値として取り回せたりするのでモダンな雰囲気もあります。

Quineは適当に書きました。
値を末尾に逃がすために関数を追加してます。
`AEval`は`for each`的な感じだと思ってください。
`e"..."`でエスケープシーケンスが使えるという発見をしたのだけど結局使わなかった。

```pgsql
FUNCTION Main()
  LOCAL lines := {}, nl := Chr(10), q := Chr(34)
  InsertLines(lines)
  AEval(lines, { |line| OutStd(line+nl) })
  AEval(lines, { |line| OutStd('  AAdd(lines, '+q+line+q+')'+nl) })

FUNCTION InsertLines(lines)
  AAdd(lines, "FUNCTION Main()")
  AAdd(lines, "  LOCAL lines := {}, nl := Chr(10), q := Chr(34)")
  AAdd(lines, "  InsertLines(lines)")
  AAdd(lines, "  AEval(lines, { |line| OutStd(line+nl) })")
  AAdd(lines, "  AEval(lines, { |line| OutStd('  AAdd(lines, '+q+line+q+')'+nl) })")
  AAdd(lines, "")
  AAdd(lines, "FUNCTION InsertLines(lines)")
```

実行はコンパイルしてどうこうします。
`prg`という拡張子が歴史を感じる。

```console
$ hbmk2 quine.prg
$ ./quine | diff quine.prg -
```

というわけで [makenowjust/quine](https://github.com/makenowjust/quine) リポジトリ300言語目でした。
300言語目がこの言語でいいのか？
