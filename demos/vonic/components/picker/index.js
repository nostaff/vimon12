import Vue from 'vue'
import Picker from './picker.vue'

import {createElement} from '../../utils/utils'

class IonPicker {
    constructor() {
        this._vm = undefined
    }

    present(option) {
        let container = document.querySelector('.ion-app') || document.body;
        createElement('ion-picker', container)

        this._vm = new Vue(Picker)
        this._vm.$mount('[ion-picker]')

        return this._vm.present(option)
    }

    dismiss(buttonIndex) {
        this._vm.dismiss(buttonIndex)
    }

}

window.$picker = new IonPicker()
