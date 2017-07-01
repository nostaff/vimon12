import BackLink from './directives/back-link'
import Swipe from './directives/swipe'
import Transitionend from './directives/transitionend'
import Vue from 'vue'

export default {
  install (Vue) {
    Vue.directive('back-link', BackLink)
    Vue.directive('swipe', Swipe)
    Vue.directive('transitionend', Transitionend)
  }
}
