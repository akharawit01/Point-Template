import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

// require styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'swiper/dist/css/swiper.css'

Vue.use(BootstrapVue)
Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)
Vue.use(datePicker)
library.add(faSearch)
library.add(faCalendar)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
