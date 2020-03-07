<template>
  <footer id="footer">
    <ul>
      <li>
        
      </li>
    </ul>
  </footer>
</template>

<script>
const FooterLink = {
  template: '<li>{{ $route.params.name }}</li>'
}

const router = new VueRouter({
  routes: [
    // コロンで始まる動的セグメント
    { path: '/:name', component: FooterLink }
  ]
})

export default {
}
</script>

<style scoped lang="scss">
#header {
  width: 100%;

  .title {
    color: $color-bold-font;
    display: block;
    font-weight: bold;
    padding: 12px;
    width: 100%;
  }
}
</style>
