<template>
    <div class="ion-alert alert-top" :class="['alert-'+theme, cssClass]" role="dialog" style="z-index: 9999;">
        <ion-backdrop role="presentation" v-show="activated"
                      @click.native="hide"></ion-backdrop>
        <transition name="ion-alert-fadeup">
            <div class="alert-wrapper" v-show="activated">
                <div class="alert-head">
                    <h2 class="alert-title">{{ title }}</h2>
                </div>
                <div class="alert-message">
                    {{ message }}
                </div>
                <div class="alert-input-group" v-if="inputs">
                    <div class="alert-input-wrapper" key="idx" v-for="(input, index) in inputs">
                        <input class="alert-input" type="text"
                               :name="input.name"
                               :placeholder="input.title"
                               :value="input.value"
                               @input="inputChanged($event)">
                    </div>
                </div>
                <div class="alert-button-group">
                    <ion-button role="alert-button" key="idx" v-for="(button, index) in buttons"
                                :class="button.cssClass" @click.native="hide(index)">{{button.text}}
                    </ion-button>
                </div>
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
        name:'ion-prompt',
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
                    inputs: [{name: 'title',placeholder: 'Title'},],
                    buttons: [{text: 'Cancel'}, {text: 'Save'}],
                },

                message: '',
                inputs: [],
                buttons: [],
                enableBackdropDismiss: true,
                cssClass: '',

                activated: false,
                values : []
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

                this.inputs = _options.inputs.filter(input => {
                    if (typeof button === 'string') {
                        input = {title: input, name: input};
                    }
                    if (!input.cssClass) {
                        input.cssClass = '';
                    }
                    if (!!input.value) {
                        that.values[input.name] = input.value
                    }
                    return input;
                })

                this.activated = true;

                return new Promise((resolve, reject) => {
                    this.$on('onHideEvent', data => {
                        resolve(data)
                    })
                });

            },

            hide(buttonIndex) {
                this.activated = false;

                if (buttonIndex > -1) {
                    let handler = this.buttons[buttonIndex].handler;
                    if (handler && typeof handler === 'function') {
                        handler(this.values);
                    }
                }

                // 返回输入框的值
                this.$emit('onHideEvent', {index: buttonIndex, values:this.values});
                setTimeout(() => {
                    this.$el.remove();
                }, 400);
            },

            backdropClick () {
                if (this.enableBackdropDismiss) {
                    this.hide(-1);
                }
            },

            inputChanged($event) {
                let value = $event.target.value
                let name = $event.target.name

                this.values[name] = value
            },
        }
    }
</script>

<style lang="scss">
    @import './alert';
    @import './alert.ios';
    @import './alert.md';
    @import './alert.wp';
</style>