<template>
    <div class="ion-alert" :class="['alert-'+theme, cssClass]" role="dialog" style="z-index: 9999;">
        <ion-backdrop :class="{'backdrop-no-tappable':!enableBackdropDismiss}" v-show="activated" @click.native="bdClick()"></ion-backdrop>
        <transition name="ion-alert-fadeup">
            <div class="alert-wrapper" v-show="activated">
                <div class="alert-head">
                    <h2 class="alert-title">{{title}}</h2>
                </div>
                <div class="alert-checkbox-group">
                    <ion-button class="alert-tappable" role="alert-checkbox" key="idx" v-for="(input, index) in inputs"
                                :value="input.value"
                                :aria-checked="getChecked(input.value)"
                                @click.native="onCheck(input.value)
                           ">
                        <div class="alert-checkbox-icon">
                            <div class="alert-checkbox-inner"></div>
                        </div>
                        <div class="alert-checkbox-label">{{input.label}}</div>
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
        name:'ion-alert-checkbox',
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
                currentValue: []
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
                        input = {label: input, value: input};
                    }
                    if (!input.cssClass) {
                        input.cssClass = '';
                    }
                    if (input.checked === true || input.checked === 'true') {
                        this.currentValue.push(input.value)
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

            getChecked(val) {
                return this.currentValue.indexOf(val) != -1
            },

            onCheck(val) {
                let index = this.currentValue.indexOf(val)

                if (index == -1) {
                    this.currentValue.push(val)
                } else {
                    this.currentValue.splice(index, 1)
                }
                this.currentValue.sort()
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