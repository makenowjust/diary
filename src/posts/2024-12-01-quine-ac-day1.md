---
title: 'DAY 1 - Shiika (Quine AC 2024)'
---

# DAY 1

[Quine Advent Calendar 2024](https://qiita.com/advent-calendar/2024/quine)のDAY 1です。
10年前に[Quine Advent Calendar 2014](https://adventar.org/calendars/645)をやったので、10周年ということで復活してみました。
やることは10年前と変わらず小ネタを出していく感じだと思います。

というわけで[Shiika](https://github.com/shiika-lang/shiika)というプログラミング言語をご存じでしょうか？

BiwaSchemeの作者のyharaさんが開発しているプログラミング言語で、型の付いたRubyといった雰囲気の言語です。
全体的にCrystalに似ているような気がしますが、細かいところは色々違うようです。

Rustで書かれているようなので `doc/guide/src/install.md` に従って `cargo build` などをしたら動きました。

で、Quineはこんな感じ。
`inspect` の実装が雑でエスケープが必要な文字などをあまり処理しないようなので、その辺りを考慮して書きました。
かなりRubyっぽい気がします。

```ruby
let s = ["let s = ", "
puts s[0] + s.inspect + s[1]"]
puts s[0] + s.inspect + s[1]
```

実行方法はこんな感じ。

```console
$ target/debug/shiika run quine.sk | diff - quine.sk
```

というわけで、明日からもよろしくお願いします。
