import assign from 'object-assign'
import Vue from 'vue'
import Navigation from './navigation.vue'

import {isFunction, isTrueProperty, createElement} from '../util/util'

export default {
  name: 'nav',
  // bind: function (el, binding, vnode) {
  //   var s = JSON.stringify
  //   el.innerHTML +=
  //     'name: '       + s(binding.name) + '<br>' +
  //     'value: '      + s(binding.value) + '<br>' +
  //     'expression: ' + s(binding.expression) + '<br>' +
  //     'argument: '   + s(binding.arg) + '<br>' +
  //     'modifiers: '  + s(binding.modifiers) + '<br>' +
  //     'vnode keys: ' + Object.keys(vnode).join(', ')
  // },
  inserted: function (el, binding) {
    let props = {
      showBack: false,
      showMenu: false
    }
    let options = binding.value
    if (options.title) { props.title = options.title }

    if (options.showBackButton) { props.showBack = options.showBackButton }
    if (options.backButtonIcon) { props.backIcon = options.backButtonIcon }
    if (options.backButtonText) { props.backText = options.backButtonText }
    if (options.onBackButtonClick && isFunction(options.onBackButtonClick)) { props.onBack = options.onBackButtonClick }

    if (options.showMoreButton) { props.showMore = options.showMoreButton }
    if (options.menuButtonIcon) { props.moreIcon = options.menuButtonIcon }
    if (options.menuButtonText) { props.moreText = options.menuButtonText }
    if (options.onMoreButtonClick && isFunction(options.onMoreButtonClick)) { props.onMore = options.onMoreButtonClick }

    createElement('ion-navigation', el, true)

    Vue.prototype.$navbar = window.$navbar = new Vue(assign({}, Navigation, {
      data: {
        activated: !isTrueProperty(options.hideNavbar)
      },
      propsData: props
    })).$mount('[ion-navigation]')
  }
}
