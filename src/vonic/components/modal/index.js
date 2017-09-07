import Vue from 'vue'
import Modal from './modal.vue'

import {createElement, extend, isObject, isString, uuid} from '../../utils/utils'

class IonModal {
    constructor() {
        this._vm = undefined
    }

    show(component, options) {
        let refId = uuid()
        let components = (options && options.components) ? options.components : {}
        // let template = (options && options.template) ? options.template : {}

        if (this._vm) {
            this._vm.$destroy()
            this._vm = undefined
        }

        let container = document.querySelector('.ion-app');
        let wrapper = container.querySelector('[ion-modal]') || createElement('ion-modal', container)

        if (isString(component)) {
            wrapper.innerHTML = '<ion-modal ref="' + refId + '">' + component + '</ion-modal>';

            this._vm = new Vue({
                components: extend({'ion-modal': Modal}, components),
                el: '[ion-popover]'
            }).$refs[refId];
        }

        else if (isObject(component)) {
            let ModalComponent = Vue.extend(Modal)
            this._vm = new ModalComponent().$mount('[ion-modal]')

            let ContentComponent = Vue.extend(component)
            let content = new ContentComponent({propsData: {}})
            content.$mount(this._vm.$el.querySelector('.modal-viewport'))
        }

        return this._vm.show(options);
    }

    dismiss(role) {
        this._vm.dismiss(role)
    }

}

window.$modal = new IonModal()
