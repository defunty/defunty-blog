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