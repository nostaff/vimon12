import Vue from 'vue'
import ActionSheet from './action-sheet.vue'

import {createElement} from '../../services/utils'

class IonActionSheet {
    constructor() {
        this._vm = undefined
    }

    show(option) {
        createElement('ion-dialog')

        this._vm = new Vue(ActionSheet)
        this._vm.$mount('[ion-dialog]')

        return this._vm.show(option)
    }

    hide(buttonIndex) {
        this._vm.hide(buttonIndex)
    }

}

window.$actionSheet = new IonActionSheet()
