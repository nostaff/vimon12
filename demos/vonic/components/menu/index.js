import Vue from 'vue'
import Menu from './Menu'

class IonMenu {
    constructor() {
        this._menus = {}
        this._vm = undefined
    }

    present(options) {
        let components = (options && options.components) ? options.components : {}
        let template = (options && options.template) ? options.template : {}

        if (this._vm) {
            this._vm.$destroy()
            this._vm = undefined
        }

        let container = document.querySelector('.ion-app');
        container.querySelector('[ion-menu]') || createElement('ion-menu', container)

        let MenuComponent = Vue.extend(Menu);
        this._vm = new MenuComponent().$mount('[ion-menu]');

        let ContentComponent;
        if (isString(template)) {
            ContentComponent = Vue.extend({
                template: '<div>' + template + '</div>',
                components: components
            });
        } else if (isObject(template)) {
            ContentComponent = Vue.extend(template);
        }

        // create an instance of Profile and mount it on an element
        new ContentComponent({
            $data: options.data     // send to component, get by this.$options.$data
        }).$mount(this._vm.$el.querySelector('.menu-viewport'));

        return this._vm.present(options);
    }

    dismiss(role) {
        this._vm.dismiss(role)
    }

    fromTemplateUrl(url, options) {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then((response) => {
                    return response.data
                })
                .then((template) => {
                    resolve(this.fromTemplate(template, options))
                })
        })
    }

    fromTemplate(template, options) {
        return this._init(template, options)
    }

    _init(template, options) {
        let refId = (options && options.refId) ? options.refId : Math.random().toString(36).substr(3, 6)
        let position = (options && options.position) ? options.position : 'left'
        let wrapper = document.createElement('div')
        wrapper.setAttribute('von-sidebar-container', '')
        wrapper.setAttribute('von-sidebar-container-' + refId, '')
        document.querySelector('[von-app]').appendChild(wrapper)
        wrapper.innerHTML = `<sidebar position='${position}' ref='${refId}'>${template}</sidebar>`

        let vm = new Vue({
            components: {
                Sidebar
            },
            el: `[von-sidebar-container-${refId}]`
        })
        _menus[refId] = vm.$refs[refId]

        vm.$refs[refId].setWrapperSelector(`[von-sidebar-container-${refId}]`)

        return vm.$refs[refId]
    }

    delegate(refId) {
        return _menus[refId]
    }

    destroy() {
        for (let refId in _menus) {
            if (_menus[refId]) {
                _menus[refId].$destroy()
                _menus[refId] = undefined
            }

            let wrapper = document.querySelector(`[von-sidebar-container-${refId}]`)
            wrapper.innerHTML = ''
            document.querySelector('[von-app]').removeChild(wrapper)
        }
        _menus = {}
    }
}

window.$menu = new IonMenu()
