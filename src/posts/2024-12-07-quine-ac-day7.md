---
title: 'DAY 7 - Vedic (Quine AC 2024)'
---

# DAY 7

DAY 7。一週間続いて良かった。

[Vedic](https://vedic-lang.github.io)というプログラミング言語があります。
サンスクリット語です。以上。
何の目的で作ってるのかは謎。Rustで書かててるっぽい。

Quineはドキュメントを読みながらそれっぽく書きました。
よく分からん。
文字列リテラルが2種類あるおかげでどうにか実装できた。
エスケープシーケンスは実装されてないんだけど、改行を受け付けるのはコード上でハンドリングされているので意図的なのではないかと思われる。

```python
मान कोड = [
  "मान कोड = [
  ",
  ",
  ",
  "
];
मान उद्धरण१ = '",
  "';
मान उद्धरण२ = ",
  ";
वद(
  कोड[०] +
  उद्धरण१ + कोड[०] + उद्धरण१ + कोड[१] +
  उद्धरण१ + कोड[१] + उद्धरण१ + कोड[१] +
  उद्धरण१ + कोड[२] + उद्धरण१ + कोड[१] +
  उद्धरण१ + कोड[३] + उद्धरण१ + कोड[१] +
  उद्धरण१ + कोड[४] + उद्धरण१ +
  कोड[२] + उद्धरण१ +
  कोड[३] + उद्धरण१ + उद्धरण२ + उद्धरण१ +
  कोड[४]
);"
];
मान उद्धरण१ = '"';
मान उद्धरण२ = "'";
वद(
  कोड[०] +
  उद्धरण१ + कोड[०] + उद्धरण१ + कोड[१] +
  उद्धरण१ + कोड[१] + उद्धरण१ + कोड[१] +
  उद्धरण१ + कोड[२] + उद्धरण१ + कोड[१] +
  उद्धरण१ + कोड[३] + उद्धरण१ + कोड[१] +
  उद्धरण१ + कोड[४] + उद्धरण१ +
  कोड[२] + उद्धरण१ +
  कोड[३] + उद्धरण१ + उद्धरण२ + उद्धरण१ +
  कोड[४]
);
```

実行は `vedic` を呼ぶだけ。
素直で良い。

```console
$ vedic quine.ved | diff - quine.ved
```