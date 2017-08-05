<template>
    <div class="ion-nav">
        <div nav-viewport=""></div>
        <slot></slot>
        <!--<div class="nav-decor"></div>-->
    </div>
</template>
<script>
    import assign from 'object-assign'
    import channel from './channel'
    import Vue from 'vue'
    import Header from './header'

    import { timeout, is_ios_device } from './utils'

    let renderCount = 0

    export default {
        name: 'ion-nav',
        data() {
            return {
                visible: false,
                enableTransition: false,
                headers: []
            }
        },

        created() {
            console.log('nav mounted')
            channel.$on('UpdateNavbar', (el, data) => {
                console.log('UpdateNavbar', data)
                this.visible = !data.hideNavbar
                if (!data.hideNavbar) {
                    this.createHeader(el, data)
                }
            })

            setTimeout(() => {
                this.enableTransition = true
            }, 500)
        },

        methods: {
            navStyle() {
                if (renderCount && this.enableTransition) {
                    return {
                        webkitTransition: '400ms',
                        transition: '400ms',
                        opacity: this.visible ? '1' : '0'
                    }
                }

                return {
                    webkitTransition: '0s',
                    transition: '0s',
                    opacity: this.visible ? '1' : '0'
                }
            },

            _createHeaderDom(container) {
                let el = document.createElement('div')
//                container.appendChild(el)
                container.insertBefore(el, container.firstChild)
                return timeout(el, 0)
            },

            createHeader(el, options) {
                let props = {
                    enableTitleTransition: is_ios_device(),
                    showBack: false,
                    showMenu: false
                }
                if (options.title) props.title = options.title
                if (options.onBackButtonClick) props.onBack = options.onBackButtonClick
                if (options.onMenuButtonClick) props.onMenu = options.onMenuButtonClick
                if (options.showBackButton) props.showBack = options.showBackButton
                if (options.showMenuButton) props.showMenu = options.showMenuButton
                if (options.backButtonText) props.backText = options.backButtonText
                if (options.menuButtonText) props.menuText = options.menuButtonText
                props.enableTitleTransition = renderCount != 0
                renderCount++
                props.renderCount = renderCount

                let HeaderComponent = Vue.extend(Header)
                this._createHeaderDom(el).then(container => {
                    let vm = new HeaderComponent({
                        propsData: props
                    }).$mount(container)

                    let headers = this.headers
                    let headerToCache = headers.pop()
                    if (headerToCache) {
                        headerToCache.$el.setAttribute('von-navbar', 'cached')
                        headerToCache.cache()
                    }
                    headers.push(vm)
                })
            }
        }
    }
</script>
