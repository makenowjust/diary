---
title: MakeNowJustとMakeNowJust Advent Calendar 2016について
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

昨日雑に1日目を終えてしまったので2日目はちゃんと書きたい。
というわけでまずは、MakeNowJust Advent Calendar 2016について。

# <a class="embedly-card" data-card-width="100%" data-card-controls="0" href="http://www.adventar.org/calendars/1906">MakeNowJust Advent Calendar 2016</a>

完全に悪ノリで作ったAdvent Calendarです。

なんか18日に4869が入ってますし、他の人もじゃんじゃん入れちゃってください。お願いします。じゃないとボクの負担が大きすぎる‥‥。

といっても二年前に（もう二年前なのか‥‥）Quine Advent Calendar 2014を半年くらい続けた身としては余裕じゃねーのと言われれば、それもそうなのですが。

# MakeNowJustについて

ボクについて簡単に自己紹介しておきます。

都内の大学に通う大学生です。文系です。プログラミング言語とか形式言語とかが好きらしいです。

Crystalにコントリビュートしています。最近日本で一番Crystalにコントリビュートした人になりました。やったね。

基本的に他人のやらなさそうなことをやることが多いです。

適当ですがそんな感じ。

# 今日やったこと

## `crystal eval`とか`crystal spec`に`--no-color`オプションを指定できるようにした

[Add missing --no-color option to spec and eval command by MakeNowJust · Pull Request #3621 · crystal-lang/crystal](https://github.com/crystal-lang/crystal/pull/3621 "Add missing --no-color option to spec and eval command by MakeNowJust · Pull Request #3621 · crystal-lang/crystal")

役に立つのかというとちょっと自信がない。

しかしこれは次のPull Requestへの伏線なのだ（本当です）。

## `crystal docs`にコンパイラオプションの一部を指定できるようにした

[Accept to pass compiler options to crystal docs by MakeNowJust · Pull Request #3622 · crystal-lang/crystal](https://github.com/crystal-lang/crystal/pull/3622 "Accept to pass compiler options to crystal docs by MakeNowJust · Pull Request #3622 · crystal-lang/crystal")

上のPull RequestはこのPull Requestを作ってるときに思い付いたもの。基本的にソースを弄ってるといくつか変更点ができてしまって、複数のPull Requestができるのが普通だと思うのですが他の人はそうではないのだろうか。

実はこのPull Requestもさらに続くものがある予定なのだけど、それはほぼまったく手を着けていないのでまだまだ公開できそうにない。

それと、このPull Requestに対して「`--stats`オプションって`crystal docs`に対しても使えるんじゃない？」って言われたのだけど、これには結構頭を抱えてる。`--stats`というのはコンパイル時の各フェーズにかかった時間とメモリ消費量を表示するオプションで、それって`docs`に限らず大体のコマンドに使えるような気がするけど、コンパイラの他のコマンドではバイナリを生成しないものは`--stats`コマンドが使えなくなっているので。色々模索していくつもり。

# 明日やりたいこと

  - ともかくアニメを観る
  - とくにクビキリサイクルの2話を観たい
  - コミケの原稿のチェックと版組み
  - ELVMのCrystalターゲットの公開（さっさと`README.md`を追記しろ）

明日も忙しい。

あとこれは明日以降の予定

  - この日記の改善（色々とやることがある）

- - -

というわけでMakeNowJust Advent Calendar 2016の2日目でした。
