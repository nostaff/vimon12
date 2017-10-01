import Vue from 'vue'
import {createElement, timeout} from '../../utils/utils'
import CascadePanel from '../../components/cascade/CascadePanel.vue'

class CascadePanelService {
    constructor() {
        this._vm = undefined
    }

    present(title, options) {
        createElement('von-cascade-panel')
        this._vm = new Vue(CascadePanel).$mount('[von-cascade-panel]')
        return timeout(50).then(() => {
            return this._vm.present(title, options)
        })
    }

    dismiss() {
        this._vm.dismiss()
    }
}

window.$cascadePanel = new CascadePanelService()
