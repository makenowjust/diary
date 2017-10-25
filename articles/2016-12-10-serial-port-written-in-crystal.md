---
title: Crystalでシリアルポートに接続するライブラリを作った
---

<script async src="//cdn.embedly.com/widgets/platform.js"></script>
<script async src="//platform.twitter.com/widgets.js"></script>

この記事は[Crystal Advent Calendar 2016](http://qiita.com/advent-calendar/2016/crystal)の10日目の記事です。9日目はいなかったみたいです、残念。

# 一行で

Crystalでシリアルポートに接続するライブラリを作ったよ

<a class="embedly-card" data-card-width="100%" data-card-controls="0" href="https://github.com/MakeNowJust/serialport">MakeNowJust/serialport: serial port library for Crystal</a>

# 本編

## 流れ

本来ならボクはAdvent CalendarにCrystalで`memcached`を実装したものを記事にして投稿するつもりだったのですが、今一面白い記事が書けそうになかったので挫折しました。`Hash`の再実装とかしたくない‥‥。

そして今日になって、バイトの最中で微妙にやることがなくなって手持ち無沙汰にしていたところ社長にAdvent Calendarのことを話したら、会社のことを絡めるなら仕事中に書いてもいいと言われたのでどうにかして会社を絡めたネタを考えました。

で、どうしてシリアルポートなのかというと、ボクのバイトしている[ニャンパス](http://nyampass.com/)ではIoTデバイスの開発もいくつか行なっています。その中にはいくつかシリアルポートを介してPCから信号を受け取り動作するデバイスや、その逆にシリアルポートでデータをPCへと送信デバイスがあります。Crystalを使ってそれらを制御できたら面白そうだったので、これをAdvent Calendarのテーマとしようと決めました。

それで少し調べてみたところ、[serial.cr](https://github.com/marceloboeira/serial.cr)というlibserialportのバインディングらしき何かは見つけたのですが、どうもcrystal-libを適用する前のコードしか置かれていなくて全く使いものにならなそうなので、諦めて自作することにしたという次第です。というかこのMacBook Airにはlibserialportはインストールされていません。

## どんなライブラリを作るか考える

Crystalには[`IO::FileDescriptor`](https://crystal-lang.org/api/0.20.1/IO/FileDescriptor.html)というクラスがあります。これはファイルデスクリプタをラップして`IO`クラスを実装したものです。つまり、ファイルデスクリプタがあれば`gets`メソッドや`<<`メソッドを使うことができるようになります。
（余談ですが、この`IO::FileDescriptor`クラスは`File`クラスや`Socket`クラスのスーパークラスです）

`IO`クラスを実装しているので、`to_s`に渡したり`to_json`に渡したりと様々なことができるようになります。`IO`クラスは本当にCrystalの骨幹をなしています。`IO`クラスを制するものはCrystalを制すると言っても過言ではないでしょう。Crystalにおけるリバウンドであるというわけです。

また、C言語でシリアルポートを扱う際には`open`関数で`/dev`以下にあるデバイスファイルをオープンし、シリアルポート独特の設定をしたファイルデスクリプタに対して`write`や`read`をするみたいです。ちょうどいいですね。

というわけで、`IO::FileDescriptor`を継承し、`initialize`でファイルデスクリプタを設定して`super`に渡すようなクラスを作ることにしました。

## `IO::FileDescriptor`を継承したクラスの作り方

基本的にはこんな形になります。

```crystal
class HogeFile < IO::FileDescriptor
  def initialize(path : String)
    # C言語の`open`関数を呼び出して、ファイルデスクリプタを得る
    # 引数の`path`に対して`check_no_null_byte`を呼び出して、C言語に渡しても問題のない文字列かチェックしている
    fd = LibC.open(path.check_no_null_byte, LibC::O_RDWR)

    # C言語の関数は失敗したからと言って例外を投げてくれないので、自前でチェックする必要がある
    if fd < 0
      raise Error.new "cannot open '#{path}'"
    end

    # （この辺で各クラス固有のファイルデスクリプタの設定をする）

    # `IO::FileDescriptor`をさっき得たファイルデスクリプタで初期化する
    super fd
  end
end
```

事実、これだけのコードで`File`クラスのようにファイルを読み書きできるようになります。

そして、実際の`SerialPort`クラスはこうなりました。

```crystal
class SerialPort < IO::FileDescriptor
  def initialize(@path : String, baudrate : Termios::BaudRate, blocking = false)
    oflag = LibC::O_RDWR | LibC::O_NOCTTY | LibC::O_SYNC | LibC::O_CLOEXEC

    fd = LibC.open(path.check_no_null_byte, oflag)
    if fd < 0
      raise Errno.new("Error opening serial port '#{path}'")
    end

    self.sync = true # no buffering

    set_interface_attributes(fd, baudrate, blocking)
    super fd, blocking
  end
end
```

さきほどの`HogeFile`と比べると、`initialize`の引数に`baudrate`や`blocking`が増えていることが分かります。`baudrate`はシリアルポートのボードレートを指定するもので、`blocking`は`IO::FileDescriptor`にも元から存在する引数で、IOがブロックするかどうかを指定します。基本的には非同期の方がいいでしょう。

また、途中に`self.sync = true`という行がありますが、これは`IO::Buffered`を`include`しているので、バッファリングしないようにするためです。シリアルポートでバッファリングされるといつデータが送られるのか分からなくなってちょっと困ります。

最後の方に`set_interface_attributes`というメソッドの呼び出しがありますが、これが今回の実装のキモです。ここで`fd`をシリアルポート向けに設定します。

## `set_interface_attributes`の実装

`set_interface_attributes`はC言語でシリアルポートに接続するコードを参考にして、次のようになりました。
（もちろんこのコードは実際には`class SerialPort < IO::FileDescriptor`の中にあります）

```crystal
  private def set_interface_attributes(fd, baudrate, blocking)
    if LibC.tcgetattr(fd, out mode) != 0
      raise Error.new("initialize serial port: tcgetaddr")
    end

    LibC.cfsetospeed(pointerof(mode), baudrate)
    LibC.cfsetispeed(pointerof(mode), baudrate)

    mode.c_cflag |= (Termios::ControlMode::CLOCAL |
                     Termios::ControlMode::CREAD).value # ignore modem controls
    mode.c_cflag &= ~Termios::ControlMode::CSIZE.value
    mode.c_cflag |= Termios::ControlMode::CS8.value     # 8-bit characters
    mode.c_cflag &= ~Termios::ControlMode::PARENB.value # no parity bit
    mode.c_cflag &= ~Termios::ControlMode::CSTOPB.value # only need 1 stop bit
    mode.c_cflag &= ~LibC::CRTSCTS                      # no hardware flowcontrol

    mode.c_iflag &= ~(Termios::InputMode::IGNBRK |
                      Termios::InputMode::BRKINT |
                      Termios::InputMode::PARMRK |
                      Termios::InputMode::ISTRIP |
                      Termios::InputMode::INLCR |
                      Termios::InputMode::IGNCR |
                      Termios::InputMode::ICRNL |
                      Termios::InputMode::IXON).value
    mode.c_lflag &= ~(Termios::LocalMode::ECHO |
                      Termios::LocalMode::ECHONL |
                      Termios::LocalMode::ICANON |
                      Termios::LocalMode::ISIG |
                      Termios::LocalMode::IEXTEN).value
    mode.c_oflag &= ~Termios::OutputMode::OPOST.value

    mode.c_cc[LibC::VMIN] = blocking ? 1_u8 : 0_u8
    mode.c_cc[LibC::VTIME] = 5_u8

    if LibC.tcsetattr(fd, Termios::LineControl::TCSANOW, pointerof(mode)) != 0
      raise Error.new("initialize serial port: tcsetattr")
    end
  end
```

特徴的なのは、冒頭で`LibC.tcgetattr(fd, out mode)`と`out`パラメーターを使って`mode`を受け取っていることでしょうか。

さて、ここで一つ問題が発生しました。Crystalは標準ライブラリに`termios.h`に対するバインディングをいくつか提供しているのですが、今回利用したい全てに対応しているというわけではありません。
しかし、幸いにもCrystalにはC言語の関数や定数を簡単に定義できる仕組みがあります。さくっと`libc.cr`というファイルを作って、足りない関数や定数を補うことにしました。
（定数の値や関数のプロトタイプ宣言などは、実際にヘッダファイルを見たり`man`ページを参考にして記述しました）

```crystal
lib LibC
  # from fnctl.h
  O_NOCTTY = 0x20000

  # from termios.h
  CCTS_OFLOW = 0x00010000
  CRTS_IFLOW = 0x00020000
  CDTR_IFLOW = 0x00040000
  CDSR_OFLOW = 0x00080000
  CCAR_OFLOW = 0x00100000
  CRTSCTS    = (CCTS_OFLOW | CRTS_IFLOW)

  VTIME = 17

  fun cfsetospeed(termios_p : Termios*, speed : SpeedT) : Int
  fun cfsetispeed(termios_p : Termios*, speed : SpeedT) : Int

  fun tcdrain(fd : Int) : Int
end
```

さりげなく`initialize`の方にも本来は定義されていない定数があったことがバレてしまいましたね。

とりあえず、こんな風にしてCrystalでシリアルポートに接続するライブラリは完成しました、一応。

## それで、作ったもの。

これです。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">なんなのか‥‥ <a href="https://t.co/n1j8mpsPU7">pic.twitter.com/n1j8mpsPU7</a></p>&mdash; さっき作った@3日目東R-13a (@make_now_just) <a href="https://twitter.com/make_now_just/status/807514728931041281">2016年12月10日</a></blockquote>

なんなのか‥‥。

ちなみに、これを動かしたCrystalのスクリプトはこんな感じです。

```crystal
require "./src/serialport"

serial = SerialPort.new "/dev/なんとかかんとか", Termios::BaudRate::B9600

i = 0
loop do
  serial << "v #{i}"
  i = (i + 100) % 1024
  sleep 0.1
end
```

シリアルポートに「v 0-1023の数値」の形式で書き込むと数値に対応した位置までサーボモーターが動くというものが会社にあったので、それを動かしまくってみました。なんともシュールな光景になったと思います。このデバイスを作った人にはサーボモーターに負荷がかかるからやめろと言われました‥‥。ごめんなさい。

あと、シリアルポートを読み取る方のプログラムも書いたことには書いたのですが、センサーが不調だったようで上手く結果が取れなかったので非公開としておきます。

## 今後の課題とか

  - Linuxや他の環境でも動くようにする（手元で動けばいいという気持ちで作ったから他の環境のことを考えていない。多分Cバインディング周りで、定数の値が違うからコケる）
  - テストを書く（どうやって書けばいいんすか‥‥）
  - シリアルポートに対してもっと細かく設定できるようにする（この辺は他のライブラリを参考にしたい）
  - というかもっとシリアルポートについて理解を深めろ（ぶっちゃけよく分かってない）

誰かLinuxに移植したりテスト書いといたりしといてください。Pull Requestはいつでも待っています。

# 最後に

CrystalではC言語と簡単に連携できると言いますが、その例は大抵がC言語の関数を呼び出すところで終わってしまいます。しかし、本来ならばその先に、C言語の関数をCrystalらしく使えるようにする、という作業が残っているはずです。今回の記事では、その部分に少しフォーカスを当ててみたつもりです。

あと勢いでシリアルポートに繋ぐライブラリを作ってみましたが、これって使い途あるんでしょうか？　Crystalでシリアルポートにつなぎたい機会ってあります？　スクリプト言語の方がよくありません？　あ、でも組み込みで動かすときとかだと話は別なのかな‥‥。いや、Crystal組み込みで動かねえし‥‥。

とまあ使い途がよく分からなくなっているのですが、Crystalでシリアルポートに繋ぎたくなったらぜひ使ってみてください。

あと、もしもこの記事でニャンパスに興味を持った方がいたら、Halake（ニャンパスが運営しているコワーキングスペースです）に来たときに「MakeNowJustの記事を読んだよ」と言ってください。そうするとボクの給料が増えて日本経済を回すきっかけになる可能性があります。いや、ねーよ。

最後にどうしてボクがひたすらCrystalにコントリビュートしているのか書いたらかっこいいなとか思ったのですが、特に理由がありませんでした。強いて言えばpineさんがcrystal-jpとかやってるのについかっとなってやったとかそんな感じでしょうか（本当です）。完全にキレる若者ですね。若者ってこえー。

というわけでここまで読んでいただきありがとうございました。ありがとうございます。
