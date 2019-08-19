import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store/index'
import store from './store1/index'
// import store from './store'
import './registerServiceWorker'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import lodash from 'lodash'
Vue.prototype._ = lodash

import HTTP from '@/common/httputils'
Vue.prototype.http = HTTP;

Vue.prototype.bus = new Vue()

import VCharts from 'v-charts'
Vue.use(VCharts)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
