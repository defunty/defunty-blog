<template>
  <div id="content">
    <Post title="週報（2020/03/16）" createdDate="2020/03/16" :body="body_20200316"></Post>
    <Post title="topコマンドを理解する" createdDate="2020/03/09" :body="body_20200309"></Post>
    <Post title="週報（2020/03/08）" createdDate="2020/03/08" :body="body_20200308"></Post>
    <Post title="週報（2020/02/28）" createdDate="2020/02/28" :body="body_20200229"></Post>
    <!-- <Post title="ブログ工事計画書" createdDate="2020/03/07" :body="body_202003xx"></Post> -->
  </div>
</template>

<script>
//var marked = require('marked')
//import marked from 'marked'
//import md from '../post_contents/test.md'
//console.log(marked(md))

import Post from './Post.vue'
import post_20200229 from '../post_contents/20200229.js'
import post_20200308 from '../post_contents/20200308.js'
import post_20200309 from '../post_contents/20200309.js'
import post_20200316 from '../post_contents/20200316.js'

const body_20200229 = post_20200229.html()
const body_20200308 = post_20200308.html()
const body_20200309 = post_20200309.html()
const body_20200316 = post_20200316.html()

export default {
  components: {
    Post
  },
  data() {
    return {
      body_20200229: body_20200229,
      body_20200308: body_20200308,
      body_20200309: body_20200309,
      body_20200316: body_20200316
    }
  }
}
</script>

<style scoped lang="scss">
#content {
  padding: 12px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
