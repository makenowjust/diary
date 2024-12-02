---
title: 'DAY 2 - 11l (Quine AC 2024)'
---

# DAY 2

[Quine Advent Calendar 2024](https://qiita.com/advent-calendar/2024/quine)のDAY 2です。

[11l](http://11l-lang.org)という言語があります。
Pythonで実装された言語で、C++へと変換されてコンパイルされるみたいです。
1文字のキーワードとインデント構文が特徴だと思います。
キーワードが1文字なので怖く見えるのですが、それ以外は割と普通の言語なのであまりコメントすることがありません。
型エラーがC++のエラーメッセージそのままで出てくるので多少のエスパー力が必要です。

公式サイトから `11l.tar.xz` を落としてきて展開して、`build-essentials` と `python3` をインストールすれば動くはずです。

文字列リテラルが2種類あって、開きクオート (`‘`) と閉じクオート (`’`) の組が使えるのが面白いと思ったので、Quineではそれを使ってます。

```python
V xs = [
  "V xs = [",
  "]",
  "print(xs[0])",
  "L(x) xs",
  "  print(‘  ’Char(code' 34)‘’x‘’Char(code' 34)‘,’)",
  "L(x) xs[1..]",
  "  print(x)",
]
print(xs[0])
L(x) xs
  print(‘  ’Char(code' 34)‘’x‘’Char(code' 34)‘,’)
L(x) xs[1..]
  print(x)
```

実行はこんな感じ。

```console
$ ./11l quine.11l && ./quine | diff - quine.11l
```

明日は何の言語にしようか。
