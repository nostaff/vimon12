import assign from 'object-assign'
import Vue from 'vue'
import Navbar from '../components/toolbar/navbar.vue'
import channel from '../services/channel'

let _vm = undefined;
let _container = undefined;

Vue.directive('nav', {
    inserted: function (el, binding) {

        _container = el
        setTimeout(() => {
            let element = document.createElement('div')
            _container.insertBefore(element, _container.firstChild)

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
                    items: options.items,
                    selectedIndex: options.selectedIndex,
                    state: 1
                },
                propsData: props
            })).$mount(element)
        })
    }
})

channel.$on('hideNavbar', () => {
    console.log('hideNavbar', _vm.$el)
    if (_vm) {
        _vm.$destroy()
        _container.removeChild(_vm.$el)
    }
})

window.$navbar = channel
