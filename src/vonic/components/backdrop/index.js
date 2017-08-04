import Vue from 'vue'
import Backdrop from './backdrop'
import {createElement} from '../../services/utils'

class IonBackdrop {
    constructor() {
        this._vm = undefined
    }

    show(allowTouchMove) {
        if (!document.querySelector('[ion-backdrop]')) {
            createElement('ion-backdrop')
        }

        this._vm = new Vue(Backdrop)
        this._vm.$mount('[ion-backdrop]')

        setTimeout(() => {
            this._vm.show(allowTouchMove)
        })

        return new Promise((resolve) => {
            setTimeout(() => {
                this._vm.show(allowTouchMove)
                resolve()
            })
        })
    }

    hide(allowTouchMove) {
        if (this._vm) {
            this._vm.hide(allowTouchMove).then(() => {
                this._vm.$destroy()
            })
        }
    }

    getState() {
        return this._vm ? this._vm.getState() : 0
    }
}

window.$backdrop = new IonBackdrop()
