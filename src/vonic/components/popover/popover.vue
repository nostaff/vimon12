<template>
    <div class="ion-popover" :class="['popover-'+theme, cssClass]" style="z-index: 9999;">
        <ion-backdrop
                :class="{'backdrop-no-tappable':!enableBackdropDismiss}"
                v-if="showBackdrop" v-show="activated" @click.native="bdClick()"></ion-backdrop>
        <transition name="ion-popover-fadeup">
            <div class="popover-wrapper" v-show="activated">
                <div class="popover-arrow" ref="popoverArrow"></div>
                <div class="popover-content" ref="popoverContent">
                <!--<div class="popover-arrow" ref="popoverArrow" style="top: 38px; left: 346.391px;"></div>-->
                <!--<div class="popover-content" ref="popoverContent" style="top: 47px; left: 173px; transform-origin: right top 0px;">-->
                    <div class="popover-viewport" ref="popoverViewport">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import objectAssign from 'object-assign'
    import ThemeMixins from '../../themes/theme.mixins';
    import IonBackdrop from "../backdrop/index";

    const POPOVER_IOS_BODY_PADDING = 2
    const POPOVER_MD_BODY_PADDING = 12

    export default {
        name:'ion-popover',
        mixins: [ThemeMixins],
        components: {
            IonBackdrop
        },
        data() {
            return {
                defaultOptions: {
                    showBackdrop: true,
                    enableBackdropDismiss: true,
                    cssClass: '',
                },

                ev: null,
                showBackdrop: true,
                enableBackdropDismiss: true,
                cssClass: '',

                activated: false
            }
        },

        updated() {
            this.activated && this.updatePositionView();
        },

        methods: {
            show(options) {
                let _options = objectAssign({}, this.defaultOptions, options)
                if (typeof _options.showBackdrop === 'boolean')
                    this.enableBackdropDismiss = _options.showBackdrop;
                if (typeof _options.enableBackdropDismiss === 'boolean')
                    this.enableBackdropDismiss = _options.enableBackdropDismiss;
                this.cssClass = _options.cssClass;
                this.ev = _options.ev;

                this.activated = true;

                return new Promise((resolve, reject) => {
                    this.$on('onHideEvent', (res) => {
                        resolve(res)
                    })
                });

            },

            dismiss(role) {
                this.activated = false;
                this.$emit('onHideEvent', role);

                setTimeout(() => {
                    this.$el.remove();
                }, 200);
            },

            bdClick () {
                if (this.enableBackdropDismiss) {
                    this.dismiss('backdrop');
                }
            },

            mdPositionView() {
                const nativeEle = this.$el;
                const ev = this.ev;

                let originY = 'top';
                let originX = 'left';

                let popoverWrapperEle = nativeEle.querySelector('.popover-wrapper');

                // Popover content width and height
                let popoverEle = nativeEle.querySelector('.popover-content');
                let popoverDim = popoverEle.getBoundingClientRect();
                let popoverWidth = popoverDim.width;
                let popoverHeight = popoverDim.height;

                // Window body width and height
                let bodyWidth = document.documentElement.clientWidth;
                let bodyHeight = document.documentElement.clientHeight;

                // If ev was passed, use that for target element
                let targetDim = ev && ev.target && ev.target.getBoundingClientRect();

                let targetTop = (targetDim && 'top' in targetDim) ? targetDim.top : (bodyHeight / 2) - (popoverHeight / 2);
                let targetLeft = (targetDim && 'left' in targetDim) ? targetDim.left : (bodyWidth / 2) - (popoverWidth / 2);

                let targetHeight = targetDim && targetDim.height || 0;

                let popoverCSS = {
                    top: targetTop,
                    left: targetLeft
                };

                // If the popover left is less than the padding it is off screen
                // to the left so adjust it, else if the width of the popover
                // exceeds the body width it is off screen to the right so adjust
                if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
                    popoverCSS.left = POPOVER_MD_BODY_PADDING;
                } else if (popoverWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left > bodyWidth) {
                    popoverCSS.left = bodyWidth - popoverWidth - POPOVER_MD_BODY_PADDING;
                    originX = 'right';
                }

                // If the popover when popped down stretches past bottom of screen,
                // make it pop up if there's room above
                if (targetTop + targetHeight + popoverHeight > bodyHeight && targetTop - popoverHeight > 0) {
                    popoverCSS.top = targetTop - popoverHeight;
                    nativeEle.classList.add('popover-bottom');
                    originY = 'bottom';
                    // If there isn't room for it to pop up above the target cut it off
                } else if (targetTop + targetHeight + popoverHeight > bodyHeight) {
                    popoverEle.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
                }

                popoverEle.style.top = popoverCSS.top + 'px';
                popoverEle.style.left = popoverCSS.left + 'px';

                popoverEle.style.transformOrigin = popoverEle.style.webkitTransformOrigin = originY + ' ' + originX;

            },

            iosPositionView() {
                const nativeEle = this.$el;
                const ev = this.ev;

                let originY = 'top';
                let originX = 'left';

                let popoverWrapperEle = nativeEle.querySelector('.popover-wrapper');

                // Popover content width and height
                let popoverEle = nativeEle.querySelector('.popover-content');
                let popoverDim = popoverEle.getBoundingClientRect();
                let popoverWidth = popoverDim.width;
                let popoverHeight = popoverDim.height;

                // Window body width and height
                let bodyWidth = document.documentElement.clientWidth;
                let bodyHeight = document.documentElement.clientHeight;

                // If ev was passed, use that for target element
                let targetDim = ev && ev.target && ev.target.getBoundingClientRect();

                let targetTop = (targetDim && 'top' in targetDim) ? targetDim.top : (bodyHeight / 2) - (popoverHeight / 2);
                let targetLeft = (targetDim && 'left' in targetDim) ? targetDim.left : (bodyWidth / 2);
                let targetWidth = targetDim && targetDim.width || 0;
                let targetHeight = targetDim && targetDim.height || 0;

                // The arrow that shows above the popover on iOS
                var arrowEle = nativeEle.querySelector('.popover-arrow');
                let arrowDim = arrowEle.getBoundingClientRect();
                var arrowWidth = arrowDim.width;
                var arrowHeight = arrowDim.height;

                // If no ev was passed, hide the arrow
                if (!targetDim) {
                    arrowEle.style.display = 'none';
                }

                let arrowCSS = {
                    top: targetTop + targetHeight,
                    left: targetLeft + (targetWidth / 2) - (arrowWidth / 2)
                };

                let popoverCSS = {
                    top: targetTop + targetHeight + (arrowHeight - 1),
                    left: targetLeft + (targetWidth / 2) - (popoverWidth / 2)
                };

                // If the popover left is less than the padding it is off screen
                // to the left so adjust it, else if the width of the popover
                // exceeds the body width it is off screen to the right so adjust
                if (popoverCSS.left < POPOVER_IOS_BODY_PADDING) {
                    popoverCSS.left = POPOVER_IOS_BODY_PADDING;
                } else if (popoverWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left > bodyWidth) {
                    popoverCSS.left = bodyWidth - popoverWidth - POPOVER_IOS_BODY_PADDING;
                    originX = 'right';
                }

                // If the popover when popped down stretches past bottom of screen,
                // make it pop up if there's room above
                if (targetTop + targetHeight + popoverHeight > bodyHeight && targetTop - popoverHeight > 0) {
                    arrowCSS.top = targetTop - (arrowHeight + 1);
                    popoverCSS.top = targetTop - popoverHeight - (arrowHeight - 1);
                    nativeEle.classList.add('popover-bottom');
                    originY = 'bottom';
                    // If there isn't room for it to pop up above the target cut it off
                } else if (targetTop + targetHeight + popoverHeight > bodyHeight) {
                    popoverEle.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
                }

                arrowEle.style.top = arrowCSS.top + 'px';
                arrowEle.style.left = arrowCSS.left + 'px';

                popoverEle.style.top = popoverCSS.top + 'px';
                popoverEle.style.left = popoverCSS.left + 'px';

                popoverEle.style.transformOrigin = popoverEle.style.webkitTransformOrigin = originY + ' ' + originX;
            },

            updatePositionView () {
                if (this.theme === 'ios') {
                    this.iosPositionView()
                } else {
                    this.mdPositionView()
                }
            }
        }
    }
</script>

<style lang="scss">
    @import 'popover';
    @import 'popover.ios';
    @import 'popover.md';
    @import 'popover.wp';
</style>