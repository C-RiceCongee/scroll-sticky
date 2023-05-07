import Vue from 'vue'
import App from './App.vue'
import scrollPercent from "./package/ScrollPercent/index"
Vue.config.productionTip = false
Vue.use(scrollPercent)
new Vue({
  render: h => h(App),
}).$mount('#app')