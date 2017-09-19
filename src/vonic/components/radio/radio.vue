<template>
    <div :class="[
        'radio',
        'radio-'+theme,
        'radio-'+theme+'-'+color,
         disabled?'radio-disabled':''
        ]">
        <div :class="['radio-icon', isChecked?'radio-checked':'']">
            <div class="radio-inner"></div>
        </div>
        <ion-button role="radio" :disabled="disabled" @click.native="onChecked"></ion-button>
    </div>
</template>
<script>
    import { isTrueProperty } from '../../utils/utils'
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
                isChecked: isTrueProperty(this.checked),
                isDisabled: isTrueProperty(this.disabled),
                item: null,
                radioGroup: null,
            }
        },

        props: {
            value: {
                type: [Number, String, Boolean],
                required: true
            },
            disabled: {
                type: [Boolean, String],
                default: false
            },
            checked: {
                type: [Boolean, String],
                default: false
            }
        },

        watch: {
            disabled (val) {
                this.setDisabled(isTrueProperty(val))
            }
        },

        mounted () {
            this.init()
        },

        methods: {
            setDisabled (disabled) {
                this.setChecked(null)
                this.isDisabled = disabled

                this.item && this.item.$el.classList[disabled ? 'add' : 'remove']('item-radio-disabled');
            },

            setChecked (checkedValue) {
                let isChecked = checkedValue === this.value
                if (this.isChecked !== isChecked) {
                    this.isChecked = isChecked

                    this.item && this.item.$el.classList[this.isChecked ? 'add' : 'remove']('item-radio-checked');
                }
            },

            onChecked (ev) {
                ev.preventDefault()
                ev.stopPropagation()

                !this.isDisabled && this.$emit('onSelect', this.value)
            },

            init () {
                // if parent is item
                if (this.$parent.$data.componentName === 'ionItem') {
                    this.item = this.$parent;
                    this.item.setElementClass('item-radio', true)
                }

                // if parent's parent is list
                if (this.$parent.$parent.$data.componentName === 'ionList') {
                    let node = this.$parent.$parent
                    if (node.radioGroup) {
                        this.radioGroup = node
                        this.radioGroup.addRadioButton(this)
                    }
                    console.assert(this.radioGroup, 'Radio组件需要在List组件中加上`radio-group`属性才能正常使用v-model指令!')
                }

                // 初始化禁用状态
                this.setDisabled(isTrueProperty(this.disabled))
            }
        },

        destroyed () {
            this.radioGroup && this.radioGroup.removeRadioButton(this);
        }
    }
</script>

<style lang="scss">
    @import './radio.ios.scss';
    @import './radio.md.scss';
    @import './radio.wp.scss';
</style>