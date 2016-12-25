---
title: レシートを印刷しまくったり、Iterator#flat_mapをIteratorを返すようにしたり
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

クリスマスイブとは？

# やったこと

## レシートを印刷しまくった

バイトでレシートを印刷していた。正確にはPythonでレシートを印刷するプログラムを書いた。

Pythonには[python-escpos](https://github.com/python-escpos/python-escpos)というレシートプリンタを操作するライブラリがあるから余裕、かと思ったけどそんなことなかったぜ。というのもこのライブラリは日本語に対応していなかったので、[エプソンの開発者向けサイト](https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=72)でプリンタのコマンドを調べてきて、日本語部分は直接自力で送る必要があった。まあ調べれば出てくる情報でよかったと思う。

レシート印刷するのめっちゃ楽しい。

## `Iterator#flat_map`が`Iterator`を返すようにした

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3766">Iterator#flat_map returns an iterator by MakeNowJust · Pull Request #3766 · crystal-lang/crystal</a>

Rubyの`Enumerator::Lazy`の`flat_map`が`Enumerator::Lazy`を返す仕様だったのでそれに追従してみようかと。

とはいえこの実装は完全ではなくて、返ってくる`Array`や`Iterator`の型がそれぞれ違うと失敗することがある。ただ、これを直すためには色々と面倒だったのでまだそれを直しはしなかった。
