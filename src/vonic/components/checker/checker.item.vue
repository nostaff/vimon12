<template>
    <div :class="['radio', 'radio-'+theme]" :value="value" @click="onClick()">
        <div :class="['radio-icon', checked?'radio-checked':'']">
            <div class="radio-inner"></div>
        </div>
        <ion-button role="radio" :disabled="disabled" :color="color"></ion-button>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import IonButton from "../button/index";

    export default {
        name: 'ion-radio',
        mixins: [ThemeMixins],
        components: {
            IonButton,
        },

        data() {
            return {
                checked: false
            }
        },

        props: {
            value: {
                type: [Number, String, Boolean],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            checked: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            classNames () {
                const isSimpleValue = typeof this.value === 'string' || typeof this.value === 'number'
                const names = {
                    'vux-tap-active': !this.disabled
                }

                if (this.$parent.defaultItemClass) {
                    names[this.$parent.defaultItemClass] = true
                }

                if (this.$parent.selectedItemClass) {
                    let selected = false
                    if (this.$parent.type === 'radio') {
                        if (isSimpleValue && this.$parent.currentValue === this.value) {
                            selected = true
                        } else if (typeof this.value === 'object' && isEqual(this.$parent.currentValue, this.value)) {
                            selected = true
                        }
                    } else {
                        if (typeof this.value === 'string') {
                            if (this.$parent.currentValue.indexOf(this.value) > -1) {
                                selected = true
                            }
                        } else if (this.$parent.currentValue && this.$parent.currentValue.length) {
                            const match = this.$parent.currentValue.filter(one => {
                                return isEqual(one, this.value)
                            })
                            selected = match.length > 0
                        }
                    }
                    names[this.$parent.selectedItemClass] = selected
                }

                if (this.$parent.disabledItemClass) {
                    names[this.$parent.disabledItemClass] = this.disabled
                }

                return names
            }
        },

        methods: {
            onClick() {
                if (this.disabled)
                    return;

                this.checked = !this.checked

                if (this.$parent.currentValue === this.value) {
                    this.$parent.currentValue = ''
                } else {
                    this.$parent.currentValue = this.value
                }

                this.$emit('on-item-click', this.value)
            },
        },

    }
</script>
