<template>
    <div class="ion-modal show-page" :class="['alert-'+theme, cssClass]" role="dialog" style="z-index: 10010;">
        <ion-backdrop v-show="activated"
                      @click.native="bdClick"></ion-backdrop>
        <transition name="modal-fadeup">
            <div class="modal-wrapper" v-show="activated">

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
                    title: '',
                    message: '',
                    buttons: [{text: 'OK'}],
                },

                message: '',
                buttons: [],
                enableBackdropDismiss: true,
                cssClass: '',

                activated: false
            }
        },
        methods: {
            show(options) {
                let _options = objectAssign({}, this.defaultOptions, options)
                this.title = _options.title;
                this.message = _options.message;
                if (typeof _options.enableBackdropDismiss === 'boolean')
                    this.enableBackdropDismiss = _options.enableBackdropDismiss;

                let that = this
                this.buttons = _options.buttons.filter(button => {
                    if (typeof button === 'string') {
                        button = {text: button};
                    }
                    if (!button.cssClass) {
                        button.cssClass = '';
                    }
                    return button;
                })

                this.activated = true;

                return new Promise((resolve, reject) => {
                    this.$on('onHideEvent', (res) => {
                        resolve(res)
                    })
                });

            },

            hide(buttonIndex) {
                this.activated = false;

                if (buttonIndex > -1) {
                    let handler = this.buttons[buttonIndex].handler;
                    if (handler && typeof handler === 'function') {
                        handler();
                    }
                }

                this.$emit('onHideEvent', buttonIndex);
                setTimeout(() => {
                    this.$el.remove();
                }, 400);
            },

            bdClick () {
                if (this.enableBackdropDismiss) {
                    this.hide(-1);
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