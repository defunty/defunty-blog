import Vue from 'vue'
import App from './App.vue'
//import VueRouter from 'vue-router'
//import router from './router'
import VueAnalytics from 'vue-analytics'

//Vue.config.productionTip = false

/*
const routes = [
]
const router = new VueRouter({
  mode:'history',
  routes
})
*/


new Vue({
  render: h => h(App),
}).$mount('#app')

// Google Analytics
Vue.use(VueAnalytics, {
  id: 'UA-108454395-5'
})

