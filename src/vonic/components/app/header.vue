<template>
    <ion-navbar von-navbar="active" :class="[cached?'cached':'']" :title="title">
        <ion-buttons slot="left-item">
            <ion-button icon-start @click.native="onBackClick()">
                <ion-icon name="arrow-back"></ion-icon>
                Back
            </ion-button>
        </ion-buttons>

        <ion-buttons slot="right-item">
            <ion-button icon-only>
                <ion-icon name="menu"></ion-icon>
            </ion-button>
        </ion-buttons>
    </ion-navbar>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import channel from './channel'

    const TITLE_TRANSITION = () => window.__disable_nav_title_transition__ === false ? '500ms cubic-bezier(.15, .1, .02, 1)' : '0ms'

    const DEFAULT_BACK_TEXT = '<i class="icon ion-ios-arrow-back"></i>'
    const DEFAULT_MENU_TEXT = '<i class="icon ion-navicon"></i>'

    import { timeout, _body, page_in_transition } from './utils'

    export default {
        name: 'ion-header',
        mixins: [ThemeMixins],
        props: {
            title: String,
            showBack: {
                type: Boolean,
                default: false
            },
            backText: {
                type: String,
                default: DEFAULT_BACK_TEXT
            },
            onBack: Function,
            showMenu: {
                type: Boolean,
                default: false
            },
            menuText: {
                type: String,
                default: DEFAULT_MENU_TEXT
            },
            onMenu: Function,
            enableTitleTransition: Boolean,
            renderCount: Number
        },

        data() {
            return {
                cached: false
            }
        },

        mounted() {
            setTimeout(this.titleEnter, 0)
        },

        destroyed() {
            console.log('destroyed')
            let navContainer = document.querySelector('.bar-nav .navbar-container')
            let cached = document.querySelectorAll('[von-navbar="cached"]')

            console.log(cached)
            let i = 0
            while (i < cached.length) {
                navContainer.removeChild(cached[i])
                i++
            }
        },

        methods: {
            onBackClick() {
                if (this.onBack) {
                    this.onBack()
                    return
                }

                if (window.__push_method__ === 'push') {
                    let root = document.querySelector('[ion-app]')
                    if (root) root.setAttribute('transition-direction', 'back');
                    history.go(-1)
                }
            },

            onMenuClick() {
                if (this.onMenu) {
                    this.onMenu()
                }
            },

            cache() {
                console.log('header cache')
                if (window.__disable_nav_title_transition__) {
                    this.$destroy()
                    return
                }

                this.cached = true
                this.titleLeave()
            },

            isCached() {
                return this.cached
            },

            titleEnter() {
                let container = this.$el
                console.log(container)
                let el = container.querySelector('.toolbar-content')
                let text = container.querySelector('.toolbar-content > .toolbar-title')

                let style = el.style
                style.webkitTransition = style.transition = 'none'

                let dist = parseInt((el.offsetWidth - text.offsetWidth) / 2) + 'px'
                let direction = document.querySelector('[ion-app]').getAttribute('transition-direction')
                if (direction) {
                    style.webkitTransform =
                        style.transform = 'translate3d(' + (direction == 'back' ? '-' : '') + dist + ',0,0)'
                }

                timeout().then(() => {
                    style.opacity = 1
                    style.webkitTransform = style.transform = 'translate3d(0,0,0)'

                    style.webkitTransition = style.transition = (direction && this.enableTitleTransition) ? TITLE_TRANSITION() : 'none'

                    if (this.renderCount == 1) {
                        this.fixNavbar()
                    }

                    if (this.renderCount == 2) {
                        el.addEventListener('transitionEnd', () => {}, false)
                        el.addEventListener('webkitTransitionEnd', this._titleEnterTransitionEnd, false)
                    }
                })

                // freeze body
                _body.freeze()
                let unfreezeTimer = setInterval(() => {
                    if (!page_in_transition()) {
                        setTimeout(_body.unfreeze, 50)
                        clearInterval(unfreezeTimer)
                    }
                }, 10)
            },

            titleLeave() {
                let container = this.$el
                let el = this.$el.querySelector('.title')
                let text = container.querySelector('.title > span')

                let style = el.style
                style.webkitTransition
                style.transition = 'none'

                timeout().then(() => {
                    let dist = parseInt((el.offsetWidth - text.offsetWidth) / 2) + 'px'
                    let direction = document.querySelector('[ion-app]').getAttribute('transition-direction')
                    if (direction) {
                        style.webkitTransform =
                            style.transform = 'translate3d(' + (direction == 'back' ? '' : '-') + dist + ',0,0)'
                    }
                    style.opacity = 0

                    style.webkitTransition =
                    style.transition = direction && (this.renderCount == 1 || this.enableTitleTransition) ? TITLE_TRANSITION() : 'none'

                    el.addEventListener('transitionEnd', () => {}, false)
                    el.addEventListener('webkitTransitionEnd', this._titleLeaveTransitionEnd, false)
                })
            },

            _titleEnterTransitionEnd(e) {
                this.fixNavbar()
                e.target.removeEventListener('webkitTransitionEnd', this._titleEnterTransitionEnd)
            },

            _titleLeaveTransitionEnd(e) {
                this.$destroy()
                this.fixNavbar()
                e.target.removeEventListener('webkitTransitionEnd', this._titleLeaveTransitionEnd)
            },

            fixNavbar() {
                let timer = setInterval(() => {
                    if (!page_in_transition()) {
                        setTimeout(() => {
                            document.querySelector('.bar-nav').style.position = 'fixed'
                        }, 50)
                        clearInterval(timer)
                    }
                }, 10)
            }
        }
    }
</script>
