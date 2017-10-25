---
title: bashcachedのv5.1.0をリリースしたり、each系のメソッドがnilを返すようにしたり
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>

# やったこと

## `bashcached`のv5.1.0をリリースした

といっても`--help`の出力から`udp`を無くしただけだけど。`udp`のプロトコルは実はちょっと違って、対応するのが面倒なので。

## `each`系のメソッドが`nil`を返すようにした

<a class="embedly-card" href="https://github.com/crystal-lang/crystal/pull/3826">Fix each* methods to return only nil by MakeNowJust · Pull Request #3826 · crystal-lang/crystal</a>

やっぱり`self`よりも`nil`の方がいいような気がしたので。

## Ioで天体のメソッドを実装した

<a class="embedly-card" href="https://github.com/furaji/sora-no-method/pull/7">Ioで天体のメソッドを実装 by MakeNowJust · Pull Request #7 · furaji/sora-no-method</a>

プロトタイプベースのオブジェクト指向が無かったので。

そういえば昔プロトタイプベースのオブジェクト指向言語って大規模開発に向かないよなぁって言ったら「JavaScriptはオブジェクト指向じゃないのか」と返されたことがあるのだけど、JavaScriptはちょっと違うよなぁと思う。プロトタイプのチェーンはあるんだけど、それを有効に活用してることなんて滅多にないし。クラスのメソッドを実質的にオブジェクトが持っているという状況が活かされる場面ってほぼほぼ無いんだよなぁ。

## Occultic; Nineを観た

時間が取れたので勢いで観た。面白かった。Chaos; Childもそうだけど、ともかく面白さってなんだろうってのを考え抜いて作られてる感じがする。

ただ、結末については何とも言えないというか、1クールのストーリーじゃないというか、明らかに回収されてない伏線があるし、ゲームなり小説なりでどうにかするんだろうなという気がしてちょっと納得がいっていない。
