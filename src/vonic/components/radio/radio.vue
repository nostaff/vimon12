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
                isChecked: false,
                isDisabled: this.disabled,
                itemComponent: null,
                radioGroupComponent: null,
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

                this.itemComponent && this.itemComponent.$el.classList[disabled ? 'add' : 'remove']('item-radio-disabled');
            },

            setChecked (checked) {
                let isChecked = checked === this.value
                if (this.isChecked !== isChecked) {
                    this.isChecked = isChecked
                    this.isChecked && this.$emit('onSelect', this.value)

                    this.itemComponent && this.itemComponent.$el.classList[this.isChecked ? 'add' : 'remove']('item-radio-checked');
                }
            },

            onChecked (ev) {
                ev.preventDefault()
                ev.stopPropagation()
                !this.isDisabled && this.radioGroupComponent && this.radioGroupComponent.onRadioChange(this.value)
            },

            init () {
                // if parent is item
                if (this.$parent.$data.componentName === 'ionItem') {
                    this.itemComponent = this.$parent;
                    this.itemComponent.$el.classList.add('item-radio')
                }

                // if parent's parent is list
                if (this.$parent.$parent.$data.componentName === 'ionList') {
                    let node = this.$parent.$parent
                    if (node.radioGroup) {
                        this.radioGroupComponent = node
                        this.radioGroupComponent.updateRadioList(this)
                    }
                    console.assert(this.radioGroupComponent, 'Radio组件需要在List组件中加上`radio-group`属性才能正常使用v-model指令!')
                }

                // 初始化禁用状态
                this.setDisabled(this.disabled)
            }
        }
    }
</script>