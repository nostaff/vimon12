<template>
    <ion-list :title="title">
        <ion-item :class="[
            'item-checkbox',
            'item-checkbox-'+theme+'-'+getColor(option.color),
            option.disabled?'item-checkbox-disabled':'',
            getChecked(option.value) ? 'item-checkbox-checked' : ''
            ]" key="idx" v-for="option in processOptions" @click.native="onChecked(option.value, option.disabled)">
            {{option.label}}

            <div :slot="labelPosition==='right'?'item-start':'item-end'" :class="[
                'checkbox',
                'checkbox-'+theme,
                'checkbox-'+theme+'-'+getColor(option.color),
                option.disabled?'checkbox-disabled':''
                ]">
                <div :class="['checkbox-icon', getChecked(option.value)?'checkbox-checked':'']">
                    <div class="checkbox-inner"></div>
                </div>
                <ion-button role="checkbox" :disabled="option.disabled"></ion-button>
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
        name: 'ion-checkbox',
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
                type: Array,
                default: () => []
            },
            labelPosition: {
                type: String,
                default: 'right'
            }
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

            getChecked(val) {
                return this.currentValue.indexOf(val) != -1
            },

            onChecked(val, disabled) {
                if (disabled) return;

                let index = this.currentValue.indexOf(val)

                if (index == -1) {
                    this.currentValue.push(val)
                } else {
                    this.currentValue.splice(index, 1)
                }
                this.currentValue.sort()

                this.$emit('on-change', this.currentValue)
            },

            // option的颜色优先
            getColor: function (optionColor) {
                return typeof optionColor != 'undefined' ? optionColor : this.color;
            }
        },
    }
</script>

<style lang="scss">
    @import './checkbox.ios.scss';
    @import './checkbox.md.scss';
    @import './checkbox.wp.scss';
</style>
