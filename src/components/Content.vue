<template>
  <div id="content">
    <Post title="週報（2020/02/28）" createdDate="2020/02/28" :body="body"></Post>
  </div>
</template>

<script>
import Post from './Post.vue'
import post_20200229 from '../post_contents/20200229.js'

const body_20200229 = post_20200229.html()
export default {
  components: {
    Post
  },
  data() {
    return {
      body: body_20200229
    }
  }
}
</script>

<style scoped lang="scss">
#content {
  padding: 12px;
  width: 100%;
  max-width: 1200px;
}
</style>
