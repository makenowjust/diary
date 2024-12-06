---
title: 'DAY 6 - Unison (Quine AC 2024)'
---

# DAY 6

[Unison](https://www.unison-lang.org)というプログラミング言語があります。
Haskell系の構文の言語で、`do` 記法などもありかなりHaskellっぽいです。
effectをabilityという枠組みで管理しているのは面白そうです。
ただ、プロジェクト管理の部分と言語が密結合していて、あまり広くは受け入れられなさそうな雰囲気があります。

Quineは適当に書きました。
トリプルクオートで `"""` で複数行の文字列リテラルになるので、それをいい感じに使いました。

```haskell
code = """

main : '{IO, Exception} ()
main = do printLine (Text.join "" [
  "code = ",
  fromCharList [?", ?", ?"],
  Text.take 1 code,
  code,
  Text.take 1 code,
  fromCharList [?", ?", ?"],
  Text.take 1 code,
  code,
])
"""

main : '{IO, Exception} ()
main = do printLine (Text.join "" [
  "code = ",
  fromCharList [?", ?", ?"],
  Text.take 1 code,
  code,
  Text.take 1 code,
  fromCharList [?", ?", ?"],
  Text.take 1 code,
  code,
])
```

実行が面倒で、プロジェクトを作る必要があります。

```console
$ utm
> project.create quine
> load quine.u
> add
> compile main quine
> exit
$ utm run.compile quine.uc | diff quine.u -
```

言語を覚える前にツールを覚えなきゃいけないのはしんどいなぁ。
