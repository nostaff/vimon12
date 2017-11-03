<template>
    <div class="ion-menu"
         :id="id"
         :type="type"
         :side="side"
         :class="{'show-menu':showMenu}">
        <ion-backdrop :class="{'show-backdrop':!showBackdrop}" isActive="showBackdrop"  :isActive="activated" @click.native="bdClick()"></ion-backdrop>
        <transition
                :name="animationName"
                @before-enter="beforeEnter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @after-leave="afterLeave">
            <div class="menu-inner" v-if="isOpen">
                <slot></slot>
                <div class="menu-viewport" ref="viewPort"></div>
            </div>
        </transition>
    </div>
</template>

<script type="text/javascript">
    import { firstUpperCase, assert } from '../../utils/utils'
//    import { recordMenuInstance } from './menus'
    import Backdrop from '../backdrop'

    const NOOP = () => {}

    export default {
        name: 'ion-menu',
        components: {
            Backdrop
        },

        data () {
            return {
//                private _cntEle: HTMLElement;
//            private _gesture: MenuContentGesture;
//            private _type: MenuType;
//            private isEnabled: boolean;
//            private _isAnimating: boolean = false;
//            private _init: boolean = false;
//            private _events: UIEventManager;
//            private _gestureBlocker: BlockerDelegate;
//            private _isPane: boolean = false;
//            private _side: Side;


                isOpen: false, // menu-inner 动画控制
                isRightSide: false, // menu-inner 动画控制
                isEnabled: isTrueProperty(this.enabled),
                showMenu: false, // 整体menu显示控制
                showBackdrop: false, // 是否显示半灰色蒙层
                animationName: '', // 过度动画名称

                // promise
                presentCallback: NOOP,
                dismissCallback: NOOP
            }
        },
        props: {
            /**
             * @input {string} An id for the menu.
             */
            id: String,
            /**
             * @input {string} Which side of the view the menu should be placed. Default `"left"`.
             */
            side: {
                type: String,
                default: 'left'
            },
            /**
             * @input {string} The display type of the menu. Default varies based on the mode,
             * `"overlay"`, `"reveal"`, `"push"`.
             */
            type: {
                type: String,
                default: 'overlay'
            },
            /**
             * @input {boolean} If true, the menu is enabled. Default `true`.
             */
            enabled: {
                type: [Boolean, String],
                default: true
            },
        },
        created () {
            // 记录当前实例
//            recordMenuInstance(this);

            this.ngOnInit();
        },
        methods: {
//            // 过渡钩子
//            beforeEnter () {
//                this.$app && this.$app.setEnabled(false, 300)
//            },
//            afterEnter () {
//                this.presentCallback()
//            },
//            beforeLeave () {
//                this.$app && this.$app.setEnabled(false, 300)
//            },
//            afterLeave () {
//                this.$eventBus && this.$eventBus.$emit('onMenuClosed', this.id)
//                this.dismissCallback()
//                this.showMenu = false
//            },
//
//
//            /**
//             * open
//             * @return {Promise}
//             * */
//            openMenu () {
//                if (!this.enabled) {
//                    this.presentCallback()
//                } else {
//                    this.showMenu = true
//                    if (this.type === 'overlay') {
//                        this.showBackdrop = true
//                        // 确定左右动画
//                        this.animationName = 'slideIn' + firstUpperCase(this.side)
//                    }
//
//                    if (this.type === 'push') {
//                        // this.showBackdrop = true;
//                        // 确定左右动画
//                        this.animationName = 'slideIn' + firstUpperCase(this.side)
//                    }
//
//                    this.isOpen = true
//                    this.$eventBus && this.$eventBus.$emit('onMenuOpen', this.id)
//                }
//                return new Promise((resolve) => { this.presentCallback = resolve })
//            },
//
//            /**
//             * close
//             * @return {Promise}
//             * */
//            closeMenu () {
//                if (!this.enabled) {
//                    this.dismissCallback()
//                } else {
//                    this.showBackdrop = false
//                    this.isOpen = false
//                    this.$eventBus && this.$eventBus.$emit('onMenuClosing', this.id)
//                }
//                return new Promise((resolve) => { this.dismissCallback = resolve })
//            },



            /**
             * @hidden
             */
            ngOnInit() {
                this._init = true;

//                let content = this.content;
//                this._cntEle = (content instanceof Node) ? content : content && content.getNativeElement && content.getNativeElement();
//
//                // requires content element
//                if (!this._cntEle) {
//                    return console.error('Menu: must have a [content] element to listen for drag events on. Example:\n\n<ion-menu [content]="content"></ion-menu>\n\n<ion-nav #content></ion-nav>');
//                }

                this.setElementAttribute('side', this.side);

                // normalize the "type"
                if (!this.type) {
                    console.error('this.type empty')
//                    this.type = this._config.get('menuType');
                }
                this.setElementAttribute('type', this.type);

//                // add the gestures
//                this._gesture = new MenuContentGesture(this._plt, this, this._gestureCtrl, this._domCtrl);
//
//                // add menu's content classes
//                this._cntEle.classList.add('menu-content');
//                this._cntEle.classList.add('menu-content-' + this.type);

                let isEnabled = this.isEnabled;
                if (isEnabled === true || typeof isEnabled === 'undefined') {
                    // check if more than one menu is on the same side
                    isEnabled = !this._menuCtrl.getMenus().some(m => {
                        return m.side === this.side && m.enabled;
                    });
                }
                // register this menu with the app's menu controller
                this._menuCtrl._register(this);

                // mask it as enabled / disabled
                this.enable(isEnabled);
            },

            bdClick(ev) {
                ev.preventDefault();
                ev.stopPropagation();
                this._menuCtrl.close();
            },

            /**
             * @hidden
             */
            _getType() {
                if (!this._type) {
                    this._type = MenuController.create(this.type, this, this._plt);

                    if (this._config.get('animate') === false) {
                        this._type.ani.duration(0);
                    }
                }
                return this._type;
            },

            /**
             * @hidden
             */
            setOpen(shouldOpen, animated) {
                // If the menu is disabled or it is currenly being animated, let's do nothing
                if ((shouldOpen === this.isOpen) || !this._canOpen() || this._isAnimating) {
                    return Promise.resolve(this.isOpen);
                }
                return new Promise(resolve => {
                    this._before();
                    this._getType().setOpen(shouldOpen, animated, () => {
                        this._after(shouldOpen);
                        resolve(this.isOpen);
                    });
                });
            },

            _forceClosing() {
                assert(this.isOpen, 'menu cannot be closed');
                this._isAnimating = true;
                this._getType().setOpen(false, false, () => {
                    this._after(false);
                });
            },

            /**
             * @hidden
             */
            isAnimating() {
                return this._isAnimating;
            },

            _before() {
                assert(!this._isAnimating, '_before() should not be called while animating');

                // this places the menu into the correct location before it animates in
                // this css class doesn't actually kick off any animations
                this.setElementClass('show-menu', true);
                this.backdrop.setElementClass('show-backdrop', true);
                this.resize();
                this._keyboard.close();
                this._isAnimating = true;
            },

            _after(isOpen) {
                assert(this._isAnimating, '_before() should be called while animating');

                this._app.setEnabled(false, 100);
                // keep opening/closing the menu disabled for a touch more yet
                // only add listeners/css if it's enabled and isOpen
                // and only remove listeners/css if it's not open
                // emit opened/closed events
                this.isOpen = isOpen;
                this._isAnimating = false;

                this._events.unlistenAll();
                if (isOpen) {
                    this._cntEle.classList.add('menu-content-open');
                    let callback = this.onBackdropClick.bind(this);
                    this._events.listen(this._cntEle, 'click', callback, { capture: true });
                    this._events.listen(this.backdrop.getNativeElement(), 'click', callback, { capture: true });

                    this.ionOpen.emit(true);

                } else {
                    // Enable swipe to go back gesture
                    this._gestureBlocker.unblock();

                    this._cntEle.classList.remove('menu-content-open');
                    this.setElementClass('show-menu', false);
                    this.backdrop.setElementClass('show-menu', false);

                    this.ionClose.emit(true);
                }
            },

            /**
             * @hidden
             */
            open() {
                return this.setOpen(true);
            },

            /**
             * @hidden
             */
            close() {
                return this.setOpen(false);
            },

            /**
             * @hidden
             */
            resize() {
                const content = this.menuContent
                    ? this.menuContent
                    : this.menuNav;
                content && content.resize();
            },

            /**
             * @hidden
             */
            toggle() {
                return this.setOpen(!this.isOpen);
            },

            _canOpen() {
                return this.isEnabled && !this._isPane;
            },

            /**
             * @hidden
             */
            _updateState() {
                const canOpen = this._canOpen();

                // Close menu inmediately
                if (!canOpen && this.isOpen) {
                    assert(this._init, 'menu must be initialized');
                    // close if this menu is open, and should not be enabled
                    this._forceClosing();
                }

                if (this.isEnabled && this._menuCtrl) {
                    this._menuCtrl._setActiveMenu(this);
                }

                if (!this._init) {
                    return;
                }

                const gesture = this._gesture;
                // only listen/unlisten if the menu has initialized
                if (canOpen && this._isSwipeEnabled && !gesture.isListening) {
                    // should listen, but is not currently listening
                    console.debug('menu, gesture listen', this.side);
                    gesture.listen();

                } else if (gesture.isListening && (!canOpen || !this._isSwipeEnabled)) {
                    // should not listen, but is currently listening
                    console.debug('menu, gesture unlisten', this.side);
                    gesture.unlisten();
                }

                if (this.isOpen || (this._isPane && this.isEnabled)) {
                    this.resize();
                }
                assert(!this._isAnimating, 'can not be animating');
            }

            /**
             * @hidden
             */
            enable(shouldEnable) {
                this.isEnabled = shouldEnable;
                this.setElementClass('menu-enabled', shouldEnable);
                this._updateState();
                return this;
            },

            /**
             * @internal
             */
            initPane() {
                return false;
            },

            /**
             * @internal
             */
            paneChanged(isPane) {
                this._isPane = isPane;
                this._updateState();
            },

            /**
             * @hidden
             */
            swipeEnable(shouldEnable) {
                this._isSwipeEnabled = shouldEnable;
                this._updateState();
                return this;
            },

            /**
             * @hidden
             */
            getNativeElement() {
                return this._elementRef.nativeElement;
            },

            /**
             * @hidden
             */
            getMenuElement() {
                return this.getNativeElement().querySelector('.menu-inner');
            },

            /**
             * @hidden
             */
            getContentElement() {
                return this._cntEle;
            },

            /**
             * @hidden
             */
            getBackdropElement() {
                return this.backdrop.getNativeElement();
            },

            /**
             * @hidden
             */
            width() {
                return this.getMenuElement().offsetWidth;
            },

            /**
             * @hidden
             */
            getMenuController() {
                return this._menuCtrl;
            },

            /**
             * @hidden
             */
            getElementRef() {
                return this._elementRef;
            }
        }

    }
</script>

<style lang="scss">
    @import "menu";
    @import "menu.ios";
    @import "menu.md";

    /*slideInLeft*/
    /*animate class*/
    .slideInLeft-enter-active,
    .slideInLeft-leave-active {
        transform: translateX(0);
    }

    .slideInLeft-enter,
    .slideInLeft-leave-active {
        transform: translateX(-100%);
        transition: all cubic-bezier(0.2, 0, 1, 1) 280ms;
    }

    /*slideInRight*/
    /*animate class*/
    .slideInRight-enter-active,
    .slideInRight-leave-active {
        transform: translateX(0);
    }

    .slideInRight-enter,
    .slideInRight-leave-active {
        transform: translateX(100%);
        transition: all cubic-bezier(0, 0, 1, 1) 280ms;
    }

</style>