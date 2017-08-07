import assign from 'object-assign'
import Vue from 'vue'
import Tabbar from '../components/tabbar/index.vue'
import channel from '../services/channel'

import {createElement} from '../services/utils'

let _vm = undefined;

let _container = undefined;

Vue.directive('tabbar', {
    inserted: function (el, binding) {
        _container = el;
        setTimeout(() => {
            let props = {}
            let data = binding.value

            if (data.color) props.color = data.color
            if (data.onItemClick) props.onItemClick = data.onItemClick

            createElement('ion-tabbar', el)

            _vm = new Vue(assign({}, Tabbar, {
                data: {
                    items: data.items,
                    selectedIndex: data.selectedIndex,
                    state: 1
                },
                propsData: props
            })).$mount('[ion-tabbar]')
        })
    }
})

function vmReady() {
    let cnt = 0;
    return new Promise((resolve, reject) => {
        let timer = setInterval(() => {
            if (cnt > 100) {
                reject('Tabbar _vm undefined.')
                return
            }
            cnt++
            if (_vm) {
                clearInterval(timer)
                resolve()
            }
        }, 10)
    })
}

Vue.directive('tabbar-item-index', {
    inserted: function (el, binding) {
        vmReady().then(() => {
            _vm.selectedItem(binding.value)
        })
    }
})

channel.$on('hideTabbar', () => {
    // console.log('on hideTabbar')
    if (_vm) {
        _vm.$destroy()
        _container.removeChild(_vm.$el)
    }
})

channel.$on('updateTabbarBadge', (itemIndex, num) => {
    if (_vm) {
        _vm.setBadgeNum(itemIndex, num)
    }
})

window.$tabbar = channel
