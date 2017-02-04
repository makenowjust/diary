---
title: ドキュメントコメント中のnilとかtrueとかfalseをバッククオートで囲った
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## ドキュメントコメント中の`nil`とか`true`とか`false`をバッククオートで囲った

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3895">Enclose true, false and nil in backquote on document comment by MakeNowJust · Pull Request #3895 · crystal-lang/crystal</a>

地味すぎて死にたくなるような作業だった。作業すぎる。あまりこういうPull Requestは出したくないのだけど、気付いてしまったのでやっていた。

適当に正規表現を書いて`pt`を叩きまくってやった。面倒だった。

## 画像を白黒にする方法について調べた

輝度を取る方法と、フロイド-スタインバーグ法を使ってディザリングする方法があることが分かった。GIFにすると粒々が出てしまうのはディザリングのせいらしい。しかし二値の画像だとこれがかなり上手くはたらく。自分で実装してみたい。

ちなみに、どうしてそんなことを調べていたのかというと、バイトでレシートに画像を印刷する必要があったからです。強くなりたい。
