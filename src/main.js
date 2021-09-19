import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'


import VueTailwind from 'vue-tailwind'
import VueTailwindSettings from '/VueTailwindSettings.js'

Vue.config.productionTip = false

Vue.use(VueTailwind, VueTailwindSettings)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
