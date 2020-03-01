import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Google Analytics
Vue.use(VueAnalytics, {
  id: 'UA-108454395-5'
})

