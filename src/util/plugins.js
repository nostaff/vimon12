/**
 * Register a component plugin as being loaded. returns true if compoent plugin already registered
 * @param {object} Vue
 * @param {string} Component name
 * @param {object} Component definition
 */
export function registerComponent (Vue, name, def) {
  Vue._vimo_components_ = Vue._vimo_components_ || {}
  const loaded = Vue._vimo_components_[name]
  if (!loaded && def && name) {
    Vue._vimo_components_[name] = true
    Vue.component(name, def)
  }
  return loaded
}

/**
 * Register a group of components as being loaded.
 * @param {object} Vue
 * @param {object} Object of component definitions
 */
export function registerComponents (Vue, components) {
  for (let component in components) {
    let name = components[component].name || component;
    console.debug(name)
    registerComponent(Vue, name, components[component])
  }
}

/**
 * Register a directive as being loaded. returns true if directive plugin already registered
 * @param {object} Vue
 * @param {string} Directive name
 * @param {object} Directive definition
 */
export function registerDirective (Vue, name, def) {
  Vue._vimo_directives_ = Vue._vimo_directives_ || {}
  const loaded = Vue._vimo_directives_[name]
  if (!loaded && def && name) {
    Vue._vimo_directives_[name] = true
    Vue.directive(name, def)
  }
  return loaded
}

/**
 * Register a group of directives as being loaded.
 * @param {object} Vue
 * @param {object} Object of directive definitions
 */
export function registerDirectives (Vue, directives) {
  for (let directive in directives) {
    registerDirective(Vue, directive, directives[directive])
  }
}

/**
 * Register a plugin as being loaded. returns true if plugin already registered
 * @param {object} Vue
 * @param {object} Plugin definition
 */
export function registerPlugin (Vue, name, def) {
  console.log(Vue._vimo_plugins_)
  Vue._vimo_plugins_ = Vue._vimo_plugins_ || {}
  const loaded = Vue._vimo_plugins_[name]
  if (!loaded && def && name) {
    Vue._vimo_plugins_[name] = true
    Vue.use(def)
  }
  return loaded
}

/**
 * Register a group of plugins as being loaded.
 * @param {object} Vue
 * @param {object} Object of plugin definitions
 */
export function registerPlugins (Vue, plugins) {
  for (let plugin in plugins) {
    registerPlugin(Vue, plugin, plugins[plugin])
  }
}

/**
 * Install plugin if window.Vue available
 * @param {object} Plugin definition
 */
export function vueUse (VuePlugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin)
  }
}