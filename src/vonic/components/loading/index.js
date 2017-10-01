import Vue from 'vue'
import Loading from './loading.vue'

import {createElement, uuid} from '../../utils/utils'

let vm = undefined

class IonLoading {

    present(options) {
        let rnd = uuid()
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