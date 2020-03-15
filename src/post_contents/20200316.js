const marked = require('marked');
const text = `
# サイト更新
なし

# web1weekでアプリを作った
一週間でWebアプリ作るイベントに参加して、「都道府県ランキングバトル」というゲームを作った。  

[都道府県ランキングバトル](https://sad-clarke-7d9921.netlify.com/)  

[都道府県別ランキングで戦う一人用ゲームをつくりました （3/9～3/15）１週間でWebサービスを作るイベント - お題「Home」 - Boards - Crieit](https://crieit.net/boards/web1week-202003/e22135df3427d3e3700bf84a761ff7f7)  

[ソースコード - github](https://github.com/defunty/web-one-week)

各種統計データと手札として、都道府県ごとに対戦していくゲーム。
手札の強さが相手ごとに変わるという点で、どの手札をどのタイミングで使うかという戦略性や、どの手札がどれだけ強いのかを推理するというリプレイ性が出せた（と思う）。

ゲームを作るのは初めてだったので、できるだけ柔軟に対応できるようにjQueryで書いた。  
Prototype形式の書き方は分からなかったので、疑似クラス形式で書いたところ、それなりにスムーズに書けた。イベント周りをEventController的なもので管理してみたが、このあたりはもう少しやりようがあったかもしれない。

パラメータを渡して該当のclassのtextを変える関数を作って、textを書き換える処理はすべてこの関数に任せる形とした。結果的にこれが一番便利に機能していた。

ランキングデータの入力が面倒だったので、ランキングデータごとに「北海道,福岡県, ... 」というように、一位から都道府県を並べる文字列を静的に格納し、ページアクセス時にこれらをコンマでsplitしてデータ構造を構築する処理を作ることでデータ入力を簡易化した。

`

function html(){
  return marked(text)
}
export default {
  html
}