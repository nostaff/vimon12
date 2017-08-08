import Vue from 'vue'
import Alert from './alert.vue'
import Prompt from './prompt.vue'
import AlertRadio from './alert.radio.vue'
import AlertCheckbox from './alert.checkbox.vue'

import {createElement} from '../../utils/utils'

let vm = undefined

class IonDialog {

    show(type, options) {
        let rnd = Math.random().toString(36).substring(3, 6)
        let marker = `ion-${type}-${rnd}`
        let container = document.querySelector('.ion-app') || document.body;
        createElement(marker, container)
        let selector = `[${marker}]`


        let component = Alert
        switch (type) {
            case 'alert':
                component = Alert;
                break;
            case 'prompt':
                component = Prompt;
                break;
            case 'radio':
                component = AlertRadio;
                break;
            case 'checkbox':
                component = AlertCheckbox;
                break;
        }

        vm = new Vue(component).$mount(selector)

        vm.$el.setAttribute('ion-dialog', '')
        return vm.show(options)
    }

    alert(options) {
        return this.show('alert', options)
    }

    confirm(options) {
        return this.show('alert', options)
    }

    prompt(options) {
        return this.show('prompt', options)
    }

    radio(options) {
        return this.show('radio', options)
    }

    checkbox(options) {
        return this.show('checkbox', options)
    }

    hide(buttonIndex) {
        if(vm) vm.hide(buttonIndex)
    }

}

window.$dialog = new IonDialog()
