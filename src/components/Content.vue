<template>
  <div id="content">
    <Post title="週報（2020/02/28）" createdDate="2020/02/28" :body="body_20200229"></Post>
    <!-- <Post title="週報（2020/03/07）" createdDate="2020/03/07" :body="body_20200307"></Post> -->
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
import post_20200301 from '../post_contents/20200301.js'
import post_202003xx from '../post_contents/202003xx.js'

const body_20200229 = post_20200229.html()
const body_20200301 = post_20200301.html()
const body_202003xx = post_202003xx.html()
export default {
  components: {
    Post
  },
  data() {
    return {
      body_20200229: body_20200229,
      body_20200301: body_20200301,
      body_202003xx: body_202003xx
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
