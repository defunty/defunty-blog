<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
    <!--<RouterLink to="/documents">My Documents</RouterLink>-->
  </div>
</template>

<script>
import Header from './components/Header.vue'
//import Footer from './components/Footer.vue'

//vueファイルでない場合はnameを与える
export default {
  components: {
    Header
  },
  /*
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
  */
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