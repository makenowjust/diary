---
title: Regex::MatchDataにメソッドを追加したり、crystal tool expandのテストを書いたり
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## 昨日出したPull Requestはcloseされました

よく考えたら`Array#concat`を直すんじゃなくて、根本的な原因の`Pointer#copy_from`を直した方がいいよなぁ、と。朝気付いて実装し直していたんだけど、ちょうど完成してGitHubを見たらちょうどAryが実装していた。謎にシンクロニシティしていた‥‥。ちょっと悔しかった。

## マクロ中で`yield`したときに`doc`コメントが消えないようにした

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3778">Don't remove docs in block yielding of macro by MakeNowJust · Pull Request #3778 · crystal-lang/crystal</a>

深夜に狂気のような修正をしたんだけど無駄だったぽい。まあ`doc`コメントって`crystal docs`したときしか付加されないしなぁ、と。深夜テンションは悲劇しか生まない‥‥。

## `Regex::MatchData`にメソッドを追加した

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3782">Add Regexp::MatchData#== by MakeNowJust · Pull Request #3782 · crystal-lang/crystal</a>

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3783">Add Regex::MatchData#captures, named_captures, to_a, to_h by MakeNowJust · Pull Request #3783 · crystal-lang/crystal</a>

後者は自分より前に似たようなPull Requestを出した人がいたっぽい。でも今一な実装。Pull Requestを出してから気付いたので微妙に申し訳ない。

前者は単に`==`を追加しただけ。

## `crystal tool expand`にテストを追加した

がんばったらテストを書けた。

ただ個人的には、`doc`コメントの変更を反映したいのでもう少しマージを待ってほしい感じ。

## このリポジトリのパッケージをアップデートした

してみた。

あとgreenkeeper入れた。

## あきゆめくくるをやっている

みはや√とノア√と歩√が終わった。今、柚月√をやっている。みはや√とノア√はサブヒロイン（？）扱いっぽくてほぼシーンだけ。普通に攻略しているつもりだったのだけど、どうやら誰の√にも入らずそっちにいってしまったらしい。みはやかわいい。かわいくない？

歩√は、一言でいうなら学園闘争を主導していたヒロインが、そこから歩み出す物語。ただ、なんかかなり短かった気がする。中身といえばパンツ履かないで登校してきて、なんか轟山サトリが出てきて、なんか過去に戻って学園闘争で死に絶えようとして、なんか主人公の力で元の世界に戻ってきて、なんかループ世界が終わるという。とくに最後が謎だった。謎だらけ。主人公の能力って結局なんなんだろう。

柚月√は歩√よりもTRUEへの布石っぽい話が多い気がする。とはいえまだ終わってないのでなんともいえない。歩はパンツを履かないけど柚月は服を着ないのである。
