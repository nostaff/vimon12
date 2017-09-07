<template>
    <div class="ion-modal show-page" :class="['alert-'+theme, cssClass]" role="dialog" style="z-index: 10010;">
        <ion-backdrop :class="{'backdrop-no-tappable':!enableBackdropDismiss}"
                      v-if="showBackdrop"
                      v-show="activated"
                      @click.native="bdClick"></ion-backdrop>
        <transition name="modal-fadeup">
            <div class="modal-wrapper" v-show="activated">
                <div class="modal-viewport"></div>
            </div>
        </transition>
    </div>
</template>
<script>
    import objectAssign from 'object-assign'
    import ThemeMixins from '../../themes/theme.mixins';
    import IonBackdrop from "../backdrop/index";
    export default {
        name:'ion-modal',
        mixins: [ThemeMixins],
        components: {
            IonBackdrop
        },
        data() {
            return {
                defaultOptions: {
                    showBackdrop: true,
                    enableBackdropDismiss: true,
                },

                showBackdrop: true,
                enableBackdropDismiss: true,
                cssClass: '',
                onDismiss: () => {},

                activated: false
            }
        },
        methods: {
            show1(options) {
                let _options = objectAssign({}, this.defaultOptions, options)
                this.showBackdrop = isTrueProperty(_options.showBackdrop);
                this.enableBackdropDismiss = isTrueProperty(_options.enableBackdropDismiss);

                this.activated = true;

                return new Promise((resolve, reject) => {
                    this.$on('onDismissEvent', (res) => {
                        resolve(res)
                    })
                });

            },

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

            dismiss(buttonIndex) {
                this.activated = false;

                if (buttonIndex > -1) {
                    let handler = this.buttons[buttonIndex].handler;
                    if (handler && typeof handler === 'function') {
                        handler();
                    }
                }

                this.$emit('onDismissEvent', buttonIndex);
                setTimeout(() => {
                    this.$el.remove();
                }, 400);
            },

            dismiss1 (dataBack) {
                if (this.isActive) {
                    this.isActive = false
                    this.onDismiss && this.onDismiss(dataBack)
                    if (!this.enabled) {
                        this.$nextTick(() => {
                            this.dismissCallback()
                            this.$el.remove()
                            this.enabled = true
                        })
                    }
                    return new Promise((resolve) => { this.dismissCallback = resolve })
                } else {
                    return new Promise((resolve) => { resolve() })
                }
            },

            bdClick () {
                if (this.enableBackdropDismiss) {
                    this.dismiss(-1);
                }
            }
        }
    }
</script>

<style lang="scss">
    @import './modal';
    @import './modal.ios';
    @import './modal.md';
    @import './modal.wp';
</style>