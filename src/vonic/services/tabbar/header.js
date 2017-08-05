import assign from 'object-assign'
import Vue from 'vue'
import Navbar from '../../components/app/header.vue'
import channel from './channel'

import {createElement} from '../utils'

let _vm = undefined;

let _container = undefined;

Vue.directive('navbar', {
    inserted: function (el, binding) {
        _container = el;
        setTimeout(() => {
            let props = {}
            let data = binding.value

            if (data.color) props.color = data.color
            if (data.onItemClick) props.onItemClick = data.onItemClick

            createElement('ion-navbar', el)

            _vm = new Vue(assign({}, Tabbar, {
                data: {
                    items: data.items,
                    selectedIndex: data.selectedIndex,
                    state: 1
                },
                propsData: props
            })).$mount('[ion-navbar]')
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
