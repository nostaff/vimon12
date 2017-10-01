import Vue from 'vue'
import Loading from './loading.vue'
// import Loading from './../alert/alert.vue'

import {createElement} from '../../utils/utils'

let vm = undefined

class IonLoading {

    present(options) {
        let rnd = Math.random().toString(36).substring(3, 6)
        let marker = `ion-loading-${rnd}`
        let container = document.querySelector('.ion-app');
        createElement(marker, container)
        let selector = `[${marker}]`

        vm = new Vue(Loading).$mount(selector)
        vm.$el.setAttribute('ion-dialog', '')

        return vm.present(options)
    }

    dismiss(role) {
        if(vm) vm.dismiss(role)
    }

}

window.$loading = new IonLoading()