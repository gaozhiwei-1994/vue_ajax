
import Vue from 'vue'
//import VueSource from 'vue-resource'
//import App from './App.vue'

import app from './components/app.vue'

//Vue.use(VueSource)

new Vue({
  el: '#app',
  //render: h => h(App)
  render: h=> h(app)
})
