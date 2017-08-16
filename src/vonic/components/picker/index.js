import Vue from 'vue'
import ActionSheet from './picker.vue'

import {createElement} from '../../utils/utils'

class IonPicker {
    constructor() {
        this._vm = undefined
    }

    show(option) {
        let container = document.querySelector('.ion-app') || document.body;
        createElement('ion-picker', container)

        this._vm = new Vue(ActionSheet)
        this._vm.$mount('[ion-picker]')

        return this._vm.show(option)
    }

    hide(buttonIndex) {
        this._vm.hide(buttonIndex)
    }

}

window.$picker = new IonPicker()
