/*
const html_content =`
<p>
  初対面の人と会話したとき、緊張のあまりテンパって「えー...あっ、aliasどんなの使ってます？」って謎質問したらいい感じのやつ教えてもらった。<br>
  <br>
  - delete merged branchするalias
  <span>dmb = !git branch --merged | grep -vE '^\\*|master$|develop$' | xargs -I % git branch -d %</span>
  - git logをいい感じにみるalias
  <span>lg = log --graph --date=short --decorate=short --pretty=format:'%Cgreen%h %Creset%cd %C(yellow)%cn %C(cyan)%d %Creset%s'</span>
</p>
<p>
  MacではGyazo Teamsのデスクトップアプリを使ってgif作成をしていたが、Ubuntuでは使えないので
  <a href="https://github.com/phw/peek">peek</a>
  を入れた。Linuxではgif作成しやすいソフトが無いと聞いていたが十二分。
</p>
<p>
  xclipがクリップボードに直接コピーできなくなっていたので代わりに
  <a href="https://github.com/kfish/xsel">xsel</a>
  をインスコ。ついでにpbcopyで使えるようにaliasも設定。<br>
</p>
<p>
  ・peekを入れた
  ・ブラインドタッチ
  ・Vim Mode個人的なVimショートカット有用度ランキング
  ・Flutterの機運
  ・ショートカット設定 gitstatu, xclip
  ・xclipが動かない問題
  ・検索時に右にヒットした場所が出てこない問題
</p>
<p>
  --今後やりたいこと<br>
  ・ヘッドフォン買う
  ・スポーツジム行く
  ・体重増やす
  ・机準備
  ・風呂にipadおけるように
  ・英語読解（まずできるようになりたいことをきめて細分化）
  ・言語化速度上昇
  ・ブラインドタッチ
  ・Vim操作
  ・DNS
  ・Webpack
  ・僕は見積もりができない
  ・個人的なVimショートカット有用度ランキング
  ・拡張機能リファイン
  ・毎週メールを送るサービス（送り返さない場合は罰金徴収（テスト期間は公開処刑でも良い））
  ・インディーズ映画投稿サービス
  ・問題解決共有（問題解決をするためのフレームワークを調べてみる、問題の愛文化は有効か？）
  ・映画批評記事まとめ
  ・ジオメッセージ
  ・covie
  ・写真サイト
  ・週報
  ・CLIでゲーム
  ・メモ表示デスクトップアプリ（cliborみたいな感じ）
</p>
<p>
  --このブログでつけたい機能
  ・Googole Analitics
  ・ドキュメントページ（doneページ（勉強内容、本、映画、todo、なんでも））
  ・コンポーネント化
  ・Vuex
  ・router
  ・Nuxt
  ・NoSQL
  ・マークダウンパーサー
</p>
*/

const marked = require('marked');
const text = `
# サイト更新
前回の記事はHTMLで直書きしていたのでmarkdownで記事を書けるようにした。
ローカルのmdファイルを読み込んでビルドする場合、必要なモジュールが多い。
あとから不必要に和る設定が増えるのも嫌だったので、ヒアドキュメントで書いたmarkdown形式の文字列をmarkedでparseし、コンポーネントに渡す形にした。

[marked - github](https://github.com/markedjs/marked)


# Peek
MacではGyazo Teamsを使っていたが、Ubuntuでは使えないのでgif撮影するためにPeekを入れた。
当たり前だが撮影直後にGyazoに自動アップロードされることはないけど、それ以外は全く問題ない。

[phw/peek: Simple animated GIF screen recorder with an easy to use interface](https://github.com/phw/peek)


# 拡張ディスプレイにおけるワークスペースの設定
Macでは主要ディスプレイと拡張ディスプレイは個別のワークスペースとなっていたが、Ubnutu18.04だとどちらも同一のワークスペースとしてみなされる。
拡張ディスプレイの表示だけそのままで主要ディスプレイのワークスペースを変えたい、というシーンが結構あるので設定方法を調べて設定した。  
（思ったより簡単にできた）

[ubuntu 18.04のデュアルモニターワークスペース](https://qastack.jp/ubuntu/1059479/dual-monitor-workspaces-in-ubuntu-18-04)


# ターミナルの「ヴッ」をならないように設定
ターミナルのビープ音、それなりに好きなんだけどZoomで会議通話してるときとか自然環境音流しながら作業してるときに小うるさいので消した。

[Ubuntuの「端末」で耳障りな「ビープ音」を消す方法 | LFI](https://linuxfan.info/ubuntu-terminal-stop-bell)

# その他
- マスクがないので花粉が辛い。加湿器購入のきざし。  
- ショートカットコマンドで即座に起動してメモを取れるアプリ欲しい。  
- SHIROBAKO観たい。けどコロナが。。
- スマホからTwitterを削除することに成功。代わりの余暇が増えた気はしないので、おそらくTwitterの代わりにはてブを見てるだけ。  

`

function html(){
  return marked(text)
}
export default {
  html
}