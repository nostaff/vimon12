import Vue from 'vue'
import Alert from './Alert'

import {createElement} from '../utils'

class VonicAlert {
    constructor() {
        this._vm = undefined
    }

    show(option) {
        createElement('von-alert')

        this._vm = new Vue(Alert)
        this._vm.$mount('[von-alert]')

        setTimeout(() => {
            this._vm.show(option)
        })
    }

    hide(buttonIndex) {
        this._vm.hide(buttonIndex)
    }

    getState() {
        return this._vm ? this._vm.getState() : 0
    }
}

window.$alert = new VonicAlert()
