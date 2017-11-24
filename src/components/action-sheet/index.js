import Vue from 'vue'
import ActionSheet from './action-sheet.vue'

import {createElement} from '../../utils/utils'

class IonActionSheet {
    constructor() {
        this._vm = undefined
    }

    present(option) {
        createElement('ion-dialog')

        this._vm = new Vue(ActionSheet)
        this._vm.$mount('[ion-dialog]')

        return this._vm.present(option)
    }

    dismiss(buttonIndex) {
        this._vm.dismiss(buttonIndex)
    }

}

const VuePlugin = {

  install: function (Vue, options = {}) {
    if (this.installed) {
      return
    }

    Vue.prototype.$actionSheet = new IonActionSheet()

    this.installed = true
  }

}

export default VuePlugin
