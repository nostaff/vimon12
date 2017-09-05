<template>
    <div :class="[
        'checkbox',
        'checkbox-'+theme,
        'checkbox-'+theme+'-'+color,
        disabled?'checkbox-disabled':''
        ]">
        <div :class="['checkbox-icon', isChecked?'checkbox-checked':'']">
            <div class="checkbox-inner"></div>
        </div>
        <ion-button role="checkbox" :disabled="disabled" @click.native="onChecked"></ion-button>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import IonButton from "../button/index";
    export default {
        name: 'ion-checkbox',
        mixins: [ThemeMixins],
        components: {
            IonButton,
        },
        data () {
            return {
                isChecked: this.value,
                isDisabled: this.disabled,

                itemComponent: null
            }
        },

        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: Boolean,
                default: false
            },
        },

        watch: {
            disabled (val) {
                this.setDisabled(val)
            },
            value (val) {
                this.setChecked(val)
            },
        },

        mounted() {
            if (this.$parent.$data.componentName === 'ionItem') {
                this.itemComponent = this.$parent;
                this.itemComponent.$el.classList.add('item-checkbox')
            }

            this.setChecked(this.value)
            this.setDisabled(this.disabled)
        },

        methods: {
            setChecked (checked) {
                if (checked !== this.isChecked) {
                    this.isChecked = checked
                    this.$emit('onChange', this.isChecked)
                    this.$emit('input', this.isChecked)

                    this.itemComponent && this.itemComponent.$el.classList[this.isChecked ? 'add' : 'remove']('item-checkbox-checked');
                }


            },
            setDisabled (disabled) {
                this.isDisabled = disabled
                this.itemComponent && this.itemComponent.$el.classList[this.isDisabled ? 'add' : 'remove']('item-checkbox-disabled');
            },
            onChecked (ev) {
                ev.preventDefault()
                ev.stopPropagation()

                !this.isDisabled && this.setChecked(!this.isChecked)
            }
        },
    }
</script>
