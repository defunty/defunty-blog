import Vue from 'vue'
//import App from './App.vue'
import VueAnalytics from 'vue-analytics'
import VueRouter from 'vue-router'

import App from './App.vue'
import Content from './components/Content.vue'
import Document from './components/Document.vue'

// 開発TIPSがより多く表示される
Vue.config.productionTip = true



/*
const routes = [
]
const router = new VueRouter({
  mode:'history',
  routes
})
*/


Vue.use(VueRouter)
const routes = [
  { path: '/', component: Content  },
  { path: '/documents', component: Document }
]
const router = new VueRouter({
  mode:'history',
  routes // `routes: routes` の短縮表記
})

Vue.use(VueAnalytics, {
  id: 'UA-108454395-5',
  router
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

/*
new Vue({
  render: h => h(App),
}).$mount('#app')
*/

