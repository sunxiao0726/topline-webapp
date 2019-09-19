import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  // 配置路由表
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})
