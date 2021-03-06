import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import Routes from './routes'
import Style from './styles/style.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false

export const bus = new Vue()

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(Style)
Vue.use(VueAxios, axios)

const router = new VueRouter({
   mode: 'history',
   routes: Routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
