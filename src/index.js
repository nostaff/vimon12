import { Components, Plugins, Directives } from './components'
import { vueUse, registerComponents, registerPlugins, registerDirectives} from './util/plugins'
import core from './core.js'

const VuePlugin = {

  install: function (Vue, options = {}) {
    if (Vue._vimo_installed) {
      return
    }

    core(Vue, options)

    // Register component plugins
    registerComponents(Vue, Components)

    // Register directives plugins
    registerDirectives(Vue, Directives)

    // Register plugin plugins
    registerPlugins(Vue, Plugins)

    var ENV = process.env.NODE_ENV
    if (ENV && ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && typeof window !== 'undefined') {
      console.warn('You are using a whole package of vimo, ' + 'please read docs https://nostaff.github.io/vimo/ to reduce app bundle size.')
    }

    Vue._vimo_installed = true
  }
}

// 通过script脚本使用, 资源全部打包, 不推荐
vueUse(VuePlugin)

export default VuePlugin
