---
title: 編集距離とかfrom_yamlとか
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## 印刷費の振り込み

わーい。やりとげたぞ！　新刊はありまーす。

## 編集距離について調べた

Levenstein距離とかDamerau-Levenstein距離とかJaro-Winkler距離とか色々あるらしい。

<a class="embedly-card" data-card-width="100%" data-card-controls="0" href="http://www.joyofdata.de/blog/comparison-of-string-distance-algorithms/">Comparison of String Distance Algorithms | joy of data</a>

このページが非常にまとまっていてよかった。ただ、これらのアルゴリズムをどうやって比較すればいいかな、というのが現状の課題。その辺は色々と論文とか読んでみようと思う。

## `from_yaml`を直した。

<a class="embedly-card" data-card-width="100%" data-card-controls="0" href="https://github.com/crystal-lang/crystal/pull/3662">Allow to pass IO to from_yaml by MakeNowJust · Pull Request #3662 · crystal-lang/crystal</a>

なぜか`String`しか取れないように制限されていたので`IO`も受け取れるようにしてテストも追加したという感じ。それだけ。

`Array`のドキュメントでも眺めていれば何かしら直すところあるだろうと思って直していたら本当にあったとかいう。

何となくバグありそうって言って見つけられたのはちょっと自分でもびっくりしました。

# このあとの予定

Chaos; Childやるぞー!!
