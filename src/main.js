import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import Routes from './routes'
import Style from './styles/style.scss'

Vue.config.productionTip = false



Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(Style)

const router =new VueRouter({
   routes:Routes
})
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
