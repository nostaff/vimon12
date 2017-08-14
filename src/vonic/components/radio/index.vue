<template>
    <ion-list :title="title">
        <ion-item :class="[
            'item-radio',
            'item-radio-'+theme,
            'item-radio-'+theme+'-'+getColor(option.color),
            option.disabled?'item-radio-disabled':'',
            (option.value === currentValue) ? 'item-radio-checked' : ''
            ]" key="idx" v-for="option in processOptions" @click.native="onChecked(option.value, option.disabled)">
            {{option.label}}
            <div slot="item-end" :class="[
                'radio',
                'radio-'+theme,
                'radio-'+theme+'-'+getColor(option.color),
                 option.disabled?'radio-disabled':''
                ]">
                <div :class="['radio-icon', (option.value === currentValue)?'radio-checked':'']">
                    <div class="radio-inner"></div>
                </div>
                <ion-button role="radio" :disabled="option.disabled"></ion-button>
            </div>
        </ion-item>
    </ion-list>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import IonList from '../list/list'
    import IonItem from "../item/item";
    import IonButton from "../button/index";
    export default {
        name: 'ion-radio',
        mixins: [ThemeMixins],
        components: {
            IonButton,
            IonItem,
            IonList
        },
        props: {
            options: {
                type: Array,
                required: true
            },
            value: {
                type: [Number, String, Boolean],
                required: true
            },
        },

        computed: {
            processOptions () {
                if (this.options.length && {}.hasOwnProperty.call(this.options[0], 'label')) {
                    return this.options
                } else {
                    return this.options.map(function (item) {
                        return {
                            label: item,
                            value: item,
                            disabled: false,
                        }
                    })
                }
            },

            currentValue: function () {
                return this.value
            },

        },

        methods: {
            onChecked(newVal, disabled) {
                if (disabled) return;
                this.currentValue = newVal
                this.$emit('input', newVal)
                this.$emit('on-change', newVal)
            },

            // option的颜色优先
            getColor: function (optionColor) {
                return typeof optionColor != 'undefined' ? optionColor : this.color;
            }
        },
    }
</script>

<style lang="scss">
    @import './radio.ios.scss';
    @import './radio.md.scss';
    @import './radio.wp.scss';
</style>