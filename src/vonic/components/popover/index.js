import Vue from 'vue'
import Popover from './popover.vue'

import {createElement, extend, isObject, isString, uuid} from '../../utils/utils'

class IonPopover {
    constructor() {
        this._vm = undefined
    }

    show(options) {
        let refId = uuid()
        let components = (options && options.components) ? options.components : {}
        let template = (options && options.template) ? options.template : {}

        if (this._vm) {
            this._vm.$destroy()
            this._vm = undefined
        }

        let container = document.querySelector('.ion-app');
        let wrapper = container.querySelector('[ion-popover]') || createElement('ion-popover', container)

        if (isString(template)) {
            wrapper.innerHTML = '<ion-popover ref="' + refId + '">' + template + '</ion-popover>';

            this._vm = new Vue({
                components: extend({'ion-popover': Popover}, components),
                el: '[ion-popover]'
            }).$refs[refId];
        }

        else if (isObject(template)) {
            let PopoverComponent = Vue.extend(Popover)
            this._vm = new PopoverComponent().$mount('[ion-popover]')

            let ContentComponent = Vue.extend(template)
            let content = new ContentComponent({propsData: options.propsData})
            content.$mount(this._vm.$el.querySelector('.popover-viewport'))
        }

        return this._vm.show(options);
    }

    dismiss(role) {
        this._vm.dismiss(role)
    }

}

window.$popover = new IonPopover()
