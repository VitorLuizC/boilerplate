import './index.pug'
import Vue from 'vue'
import Main from './components/Main.vue'
import router from './router.js'

new Vue({
  router,
  el: '#application',
  render: launch => launch(Main)
})
