
import Vue from 'vue'

import Vonic from './vonic'
Vue.use(Vonic)

import sess from './lib/session'
const beforeEach = (toRoute, fromRoute, next) => {
    const to = toRoute.path
    const from = fromRoute.path
    const scrollTop = Vonic.app.pageContentScrollTop()

    let h = sess.get(to)
    if (h && h.history) {
        Vonic.app.nextDirection('back')
        h.history = false
        sess.set(to, h)
    } else {
        sess.set(from || '/', {
            history: true,
            scrollTop: scrollTop
        })
        Vonic.app.nextDirection('forward')
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
        Vonic.app.nextDirection('forward')
    }

    if (
        (to == '/' && from == '/home') ||
        (to == '/home' && from == '/advanced/tabbar/home') ||
        (to == '/advanced/tabbar/user' && from == '/pageFromTabbar')
    ) {
        Vonic.app.nextDirection('back')
    }

    next()
}

const afterEach = (toRoute, fromRoute) => {
    const to = toRoute.path
    const from = fromRoute.path
    // [Custom Business] Never use history scrollTop when '/' => '/home'
    if (from == '/' && to == '/home') return

    const h = sess.get(to)
    if (h && h.scrollTop) {
        Vue.nextTick(() => {
            Vonic.app.pageContentScrollTop(h.scrollTop)
        })
    }
}

// Register beforeEach and afterEach Hooks
Vonic.app.setConfig('beforeEach', beforeEach)
Vonic.app.setConfig('afterEach', afterEach)

// Vonic.app.setConfig('pushMethod', 'replace')
// Vonic.app.setConfig('pageTransition', 'ios')

import routes from './routes'
import store from './store'

Vue.use(Vonic.app, {
    routes: routes,
    store: store
})

// import FastClick from 'fastclick'
// FastClick.attach(document.body)