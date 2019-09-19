import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.css'

import { Button, NavBar, Field, Icon } from 'vant'
Vue
  .use(Button)
  .use(NavBar)
  .use(Field)
  .use(Icon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
