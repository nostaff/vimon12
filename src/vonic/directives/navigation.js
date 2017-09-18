import assign from 'object-assign'
import Vue from 'vue'
import Navbar from '../components/toolbar/navbar.vue'

import {createElement, isFunction, isTrueProperty} from '../utils/utils'

Vue.directive('nav', {
    inserted: function (el, binding) {
        createElement('ion-navigation', el, true)

        let props = {
            showBack: false,
            showMore: false,
        }
        let options = binding.value
        if (options.title)
            props.title = options.title

        if (options.showBackButton)
            props.showBack = options.showBackButton
        if (options.backButtonIcon)
            props.backIcon = options.backButtonIcon
        if (options.backButtonText)
            props.backText = options.backButtonText
        if (options.onBackButtonClick && isFunction(options.onBackButtonClick))
            props.onBack = options.onBackButtonClick

        if (options.showMenuButton)
            props.showMore = options.showMenuButton
        if (options.menuButtonIcon)
            props.moreIcon = options.menuButtonIcon
        if (options.menuButtonText)
            props.moreText = options.menuButtonText

        if (options.onMenuButtonClick && isFunction(options.onMenuButtonClick))
            props.onMenu = options.onMenuButtonClick

        window.$navbar = new Vue(assign({}, Navbar, {
            data: {
                activated: !isTrueProperty(options.hideNavbar)
            },
            propsData: props
        })).$mount('[ion-navigation]');
    }
})
