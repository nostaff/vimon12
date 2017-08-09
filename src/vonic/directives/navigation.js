import assign from 'object-assign'
import Vue from 'vue'
import Navbar from '../components/toolbar/navbar.vue'
import channel from '../utils/channel'

import {createElement} from '../utils/utils'

let _vm = undefined;

Vue.directive('nav', {
    inserted: function (el, binding) {
        setTimeout(() => {

            createElement('ion-navigation', el, true)

            let props = {
                showBack: false,
                showMore: false,
            }
            let options = binding.value
            if (options.title) props.title = options.title
            if (options.onBackButtonClick) props.onBack = options.onBackButtonClick
            if (options.onMenuButtonClick) props.onMenu = options.onMenuButtonClick
            if (options.showBackButton) props.showBack = options.showBackButton
            if (options.backButtonIcon) props.backIcon = options.backButtonIcon
            if (options.backButtonText) props.backText = options.backButtonText
            if (options.showMoreButton) props.showMore = options.showMoreButton
            if (options.menuButtonIcon) props.moreIcon = options.menuButtonIcon
            if (options.menuButtonText) props.moreText = options.menuButtonText

            _vm = new Vue(assign({}, Navbar, {
                data: {
                    state: options.hideNavbar && options.hideNavbar == true ? 0 : 1
                },
                propsData: props
            })).$mount('[ion-navigation]')
        })
    }
})

channel.$on('hideNavbar', () => {
    console.log('hideNavbar', _vm.$el)
    if (_vm) {
        _vm.$destroy()
        _vm.$el.parentNode.removeChild(_vm.$el)
        // _container.removeChild(_vm.$el)
    }
})

window.$navbar = channel
