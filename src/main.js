import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router'
Vue.use(Router)

import Vum from './vum.js'
Vue.use(Vum)

import routes from './routes'
import store from './store'

let router = new Router({
  routes: routes
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

Vum.router(router)

import FastClick from 'fastclick'
FastClick.attach(document.body)
