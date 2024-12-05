---
title: 'DAY 5 - ChucK (Quine AC 2024)'
---

# DAY 5

[ChucK](https://chuck.cs.princeton.edu)というプログラミング言語があります。
音が鳴る言語です。
全体的には普通の命令型言語の雰囲気。ただn秒止まるみたいなことが簡単に出来るし、並列に1ステップ進むみたいなのがあるのが音が鳴る言語っぽさがある。
あと代入が `=>` になっている。非エンジニア向けを意識したのかもしれない。

Homebrewでインストールできるので適当にインストールしてQuineを書きました。
Quineは音は鳴りません。けど実行する度にオーディオインターフェースを確保している雰囲気はあります。
文字列がmutableだったので、適当に挿入したりしています。

```ruby
"\\\"=> string s;
s.insert(0, s.substring(0, 1));
s.insert(0, s.substring(0, 1));
s.insert(0, s.substring(3, 1));
<<< s + s.substring(4, 1), s.substring(5) >>>;" => string s;
s.insert(0, s.substring(0, 1));
s.insert(0, s.substring(0, 1));
s.insert(0, s.substring(3, 1));
<<< s + s.substring(4, 1), s.substring(5) >>>;
```

実行はこんな感じで。
標準出力への出力は意図的に無効にしているっぽいので `<<< ... >>>` でデバッグプリントしています。

```console
$ chuck quine.ck 2>&1 | diff quine.ck -
```
