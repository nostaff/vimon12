<template>
    <div class="ion-alert" :class="['alert-'+theme, cssClass]" role="dialog" style="z-index: 10010;">
        <ion-backdrop role="presentation" v-show="activated"
                      @click.native="backdropClick"></ion-backdrop>
        <transition name="ion-alert-fadeup">
            <div class="alert-wrapper" v-show="activated">
                <div class="alert-head">
                    <h2 class="alert-title">{{ title }}</h2>
                </div>
                <div class="alert-message">
                    {{ message }}
                </div>
                <template v-if="buttons.length > 2">
                    <div class="alert-button-group" key="idx" v-for="(button, index) in buttons" >
                        <ion-button role="alert-button":class="button.cssClass" @click.native="hide(index)">{{button.text}}</ion-button>
                    </div>
                </template>
                <template v-else>
                    <div class="alert-button-group">
                        <ion-button role="alert-button" key="idx" v-for="(button, index) in buttons" :class="button.cssClass" @click.native="hide(index)">{{button.text}}</ion-button>
                    </div>
                </template>
            </div>
        </transition>
    </div>
</template>
<script>
    import objectAssign from 'object-assign'
    import ThemeMixins from '../../themes/theme.mixins';
    import IonBackdrop from "../backdrop/backdrop";
    import IonButton from "../button/index";
    export default {
        mixins: [ThemeMixins],
        components: {
            IonButton,
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

            backdropClick () {
                if (this.enableBackdropDismiss) {
                    this.hide(-1);
                }
            }
        }
    }
</script>

<style lang="scss">
    @import './alert';
    @import './alert.ios';
    @import './alert.md';
    @import './alert.wp';
</style>