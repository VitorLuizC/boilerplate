import Vue from 'vue'
import Router from 'vue-router'
import { ViewHome } from './components/views/index.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      alias: '/',
      component: ViewHome
    }
  ]
})

export default router
