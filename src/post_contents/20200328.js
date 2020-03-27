const marked = require('marked');

const a = '```' + `
// これがないと
// [Vue warn]: Unknown custom element: - did you register the component correctly? For recursive components, make sure to provide the "name" option.
// 的なエラーが出る
Vue.use(VueRouter)
` + '```'


const text = `
仕事が忙すぎて先週サボりました。今週も忙しかったので書くことがない。  

# サイト更新

vue-analyticsを追加した。公式ドキュメント通りにやってもGoogle Analyticsが動かなかったが、routerを利用する形にすると動作した。
よくわからんがまぁよし。

ついてにvue-routerも追加した。公式ドキュメントどおりにやっても動かなかったが下記宣言を追加すると動いた。  
${a}  

公式には載っていなくて辛い。。と思ったら済っこの方に載っていた。。辛い。。  

[https://github.com/vuejs/vue-cli/issues/3999]([Vue warn]: Unknown custom element: <router-link> · Issue #3999 · vuejs/vue-cli)  
[https://router.vuejs.org/ja/guide/#html](はじめに | Vue Router)


来週はファビコン作りたい。

`




function html(){
  return marked(text)
}
export default {
  html
}