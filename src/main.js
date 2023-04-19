import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import{carousel,carouselItem,Pagination} from 'element-ui'
Vue.use(carousel)
Vue.use(carouselItem)
Vue.use(Pagination)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
