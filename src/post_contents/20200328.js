const marked = require('marked');
const text = `
# サイト更新

Vue-analyticsを導入した。
公式ドキュメント見たりQiita見たりしてみたけどscriptが反映されずに時間がかかったけど、prerenderしてないのが原因だった。

やりたいことは山ほどあるけど仕事が忙しいのでまた来週。
`

function html(){
  return marked(text)
}
export default {
  html
}