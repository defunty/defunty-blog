<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
//console.log('sss')

//vueファイルでない場合はnameを与える
export default {
  components: {
    Header,
    Content
  },
}

</script>

<style lang="scss">
#app {
  overflow: hidden;
  width: 100%;
}
body {
  background-color: $color-iceberg-black;
  color: $color-base-font;
  * {
    box-sizing: border-box;
    color: $color-base-font;
  }
}
</style>