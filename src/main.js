// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import sess from './utils/session'

import './assets/scss/ratchet.scss'

router.beforeEach(function (to, from, next) {
    store.dispatch('updateLoadingStatus', true)
    // const scrollTop = Vonic.app.pageContentScrollTop()

    let h = sess.get(to)
    if (h && h.history) {
        store.dispatch('updateDirection', 'back')
        h.history = false
        sess.set(to, h)
    } else {
        sess.set(from || '/', {
            history: true,
            // scrollTop: scrollTop
        })
        store.dispatch('updateDirection', 'forward')
    }

    const tabbarRoutes = [
        '/advanced/tabbar/home',
        '/advanced/tabbar/discount',
        '/advanced/tabbar/cart',
        '/advanced/tabbar/user'
    ]

    if (from && tabbarRoutes.indexOf(from) > -1) {
        sess.set(from, {
            history: false,
            scrollTop: scrollTop
        })
    }

    // 某些页面定制 page transition direction
    if (
        (from == '/' && to == '/home') ||
        (from == '/home' && to == '/advanced/tabbar/home') ||
        (from == '/advanced/tabbar/user' && to == '/pageFromTabbar')
    ) {
        store.dispatch('updateDirection', 'forward')
    }

    if (
        (to == '/' && from == '/home') ||
        (to == '/home' && from == '/advanced/tabbar/home') ||
        (to == '/advanced/tabbar/user' && from == '/pageFromTabbar')
    ) {
        store.dispatch('updateDirection', 'back')

    }

    next()
})

router.afterEach (function (to, from) {
    store.dispatch('updateLoadingStatus', false)

    // [Custom Business] Never use history scrollTop when '/' => '/home'
    if (from == '/' && to == '/home')
        return

    const h = sess.get(to)
    if (h && h.scrollTop) {
        Vue.nextTick(() => {
            // Vonic.app.pageContentScrollTop(h.scrollTop)
        })
    }

    if (process.env.NODE_ENV === 'production') {
        // ga && ga('set', 'page', to.fullPath)
        // ga && ga('send', 'pageview')
    }
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

