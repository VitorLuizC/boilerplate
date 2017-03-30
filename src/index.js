import './index.pug'
import Vue from 'vue'
import Main from './components/Main.vue'

new Vue({
  el: '#application',
  render: launch => launch(Main)
})
