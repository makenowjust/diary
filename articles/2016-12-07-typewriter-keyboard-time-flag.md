---
title: タイプライター風のキーボードを買ったり、--timeフラグを実装したり
---

<script async src="//platform.twitter.com/widgets.js"></script>
<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## タイプライター風のキーボードを買ってきた

秋葉に行ったのでタイプライター風のキーボードを買ってきた。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">今日買ってきたキーボードです <a href="https://t.co/ZomdUP2KWc">pic.twitter.com/ZomdUP2KWc</a></p>&mdash; さっき作った@3日目東R-13a (@make_now_just) <a href="https://twitter.com/make_now_just/status/806496923314028545">2016年12月7日</a></blockquote>

恵安のKFK51Nというキーボード。ソフマップで1万円ちょっとだった。恵安なので当然のようにMade in China。保証は1年。

茶軸のメカニカルキーボード。個人的にはこの概観で青軸だったら目立ちまくれていいなと思ったのだけど、さすがにそんなものは売ってなかった。

キー配列が非常に独特で、なぜかバックスラッシュとアンダースコアが右上の方に隔離されている。なぜなのか‥‥。あとスペースキーが異常に横に長くて右Ctrl、右Altが存在しない。なんじゃそりゃという感じ。これを使いこなすのは簡単なことではない。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">俺も見た目だけで選んで機能性無視した買い物したい</p>&mdash; 伊 (@Amber097) <a href="https://twitter.com/Amber097/status/806499748857290753">2016年12月7日</a></blockquote>

そうっすね‥‥。

## `crystal`に`--time`フラグを実装した

<a class="embedly-card" data-card-width="100%" data-card-controls="0" href="https://github.com/crystal-lang/crystal/pull/3651">Add --time flag to show real execution time of crystal run by MakeNowJust · Pull Request #3651 · crystal-lang/crystal</a>

昨日言ってた`--time`フラグを一応実装してみた。ほっとけばAryが実装するような気もするけれど、自分も欲しいと思ったので。

実装はかなり雑というか最小限なのだけど、これでも試行錯誤の上だったりする。`Execution:`じゃなくて`crystal run 〜:`みたいな感じになるバージョンとかも作ったのだけど、完全にコマンドライン引数と同じものを組み立てるのはシェルにしか無理って結論に辿りついて、その上でGNU coreutils版の`time`コマンドとかを参考にして、`Execution`でいいかって。そんな感じ。

## Vimperatorを使いはじめた

キーボードが手に入ったので。

キーボードだけで完結する分にはすごく快適だなぁ、と。ただ、Twitterをするのが若干つらい。あとSlackとかどうすればいいのよ‥‥。

## 英かな⌘を使いはじめた

英かなという名前のくせに汎用キーリマップツールと化してるアレ。`Ctrl-J`をかなにリマップしている。これでiTerm2でも日本語入力できる。よかった。

## 入稿

二度目の原稿不備。ぬりたしが無いと言わてたので修正。これで大丈夫であって欲しい。というか迷惑をかけまくっていて申し訳ない。

## その他

bashcachedの`README.md`を直したり、この日記をレスポンシブデザインにしたりした。スマホで見てもそこそこいい感じになってると思う。それと、その途中でAndroid版FirefoxをPCでデバッグしたのですけど、結構簡単に出来るんですね。覚えておきたい。

# 明日の予定

いい加減`8cc.cr`公開します‥‥。

- - -

気が付いたら日付けが変わっていた‥‥。
