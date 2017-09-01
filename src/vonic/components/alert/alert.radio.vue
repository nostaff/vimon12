<template>
    <div class="ion-alert" :class="['alert-'+theme, cssClass]" role="dialog" style="z-index: 9999;">
        <ion-backdrop :class="{'backdrop-no-tappable':!enableBackdropDismiss}" v-show="activated" @click.native="bdClick()"></ion-backdrop>
        <transition name="ion-alert-fadeup">
            <div class="alert-wrapper" v-show="activated">
                <div class="alert-head">
                    <h2 class="alert-title">{{title}}</h2>
                </div>
                <div class="alert-radio-group" role="radiogroup">
                    <ion-button class="alert-tappable" role="alert-radio" key="idx" v-for="(input, index) in inputs"
                                :value="input.value"
                                :aria-checked="input.value === currentValue"
                                @click.native="onCheck(input.value)
                           ">
                        <div class="alert-radio-icon">
                            <div class="alert-radio-inner"></div>
                        </div>
                        <div class="alert-radio-label">{{input.label}}</div>
                    </ion-button>
                </div>
                <div class="alert-button-group">
                    <ion-button role="alert-button" key="idx" v-for="(button, index) in buttons"
                                :class="button.cssClass" @click.native="hide(index)">
                        {{button.text}}
                    </ion-button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import objectAssign from 'object-assign'
    import ThemeMixins from '../../themes/theme.mixins';
    import IonBackdrop from "../backdrop/index";
    import IonButton from "../button/index";
    export default {
        name:'ion-alert-radio',
        mixins: [ThemeMixins],
        components: {
            IonButton,
            IonBackdrop
        },
        data() {
            return {
                defaultOptions: {
                    title: '',
                    inputs: [{label: 'title', value: 'Title'},],
                    buttons: [{text: 'Cancel'}, {text: 'Save'}],
                },

                inputs: [],
                buttons: [],
                enableBackdropDismiss: true,
                cssClass: '',

                activated: false,
                currentValue: ''
            }
        },
        methods: {
            show(options) {
                let _options = objectAssign({}, this.defaultOptions, options)
                this.title = _options.title;
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
                        input = {label: input, value: input, checked: false};
                    }
                    if (!input.cssClass) {
                        input.cssClass = '';
                    }
                    if (input.checked === true || input.checked === 'true') {
                        this.currentValue = input.value
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
                        handler(this.currentValue);
                    }
                }

                // 返回输入框的值
                this.$emit('onHideEvent', {index: buttonIndex, value: this.currentValue});
                setTimeout(() => {
                    this.$el.remove();
                }, 400);
            },

            bdClick () {
                if (this.enableBackdropDismiss) {
                    this.hide(-1);
                }
            },

            onCheck(value) {
                this.currentValue = value
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