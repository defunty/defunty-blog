const marked = require('marked');
const mdText = `
**今後の計画**
- [ ] Google Analytics
- [ ] Firebaseとつなぎ込み
- [ ] 読んだ本一覧ページ
- [ ] 読んだ記事一覧ページ
- [ ] 観た映画一覧ページ
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
`

function html(){
  return marked(mdText)
}
export default {
  html
}