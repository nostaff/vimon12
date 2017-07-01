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

import session from './lib/session'

router.beforeEach(function (to, from, next) {
    console.log(to, from, next)
    const _to = to.path
    const _from = from.path
    // const scrollTop = router.app.$el.querySelector('.page-content').scrollTop
    const scrollTop = 0
    const h = session.get(_to)
    if (h && h.history || (_from && _from.indexOf(_to) === 0)) {
        // router.app.$el.className = 'transition-reverse'
        h.history = false
        session.set(_to, h)
    } else {
        session.set(_from, {
            scrollTop: scrollTop,
            history: true
        })
        // router.app.$el.className = ''
    }
    next()
})

router.afterEach(function (to, from, next) {
    // [Custom Business] Never use history scrollTop when '/' => '/home'
    if (from == '/' && to == '/home') return

    const h = session.get(to.path)
    if (h && h.scrollTop) {
        Vue.nextTick(() => {
            console.log('should scroll to' + h.scrollTop)
            // const _to = router.app.$el.querySelectorAll('.page-content')[1]
            // if (_to) _to.scrollTop = h.scrollTop  // TODO:
        })
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

import FastClick from 'fastclick'
FastClick.attach(document.body)
