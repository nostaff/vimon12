<template>
    <ion-list :title="title">
        <ion-item :class="[
            'item-radio',
            option.checked ? 'item-radio-checked' : ''
            ]" key="index" v-for="option in processOptions" @click="onClick(option.key)">
            {{option.value}}
            <div slot="item-right" :checked="option.checked" :value="option.key" :class="['radio', 'radio-'+theme]">
                <div :class="['radio-icon', option.checked?'radio-checked':'']">
                    <div class="radio-inner"></div>
                </div>
                <ion-button :class="[
                    'item-cover',
                    'item-cover-'+theme,
                    'item-cover-default',
                    'item-cover-default-'+theme
                ]" :checked="option.checked" :disabled="disabled" role="radio">
                </ion-button>
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
            title: {
                type: [Number, String],
            },
            value: {
                type: [Number, String, Boolean],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            processOptions () {
                if (this.options.length && {}.hasOwnProperty.call(this.options[0], 'key')) {
                    return this.options
                } else {
                    return this.options.map(function (item) {
                        return {
                            key: item,
                            value: item
                        }
                    })
                }
            },
            v: function () {
                return this.value
            }
        },

        data() {
            return {
                radioName: 'v-radio-' + Math.random().toString(36).substring(3, 6)
            }
        },

        methods: {
            onClick(value) {
                this.v = value
                this.$emit('input', value)
            }
        }
    }
</script>


<style lang="scss">
    @import './radio.ios.scss';
    @import './radio.md.scss';
    @import './radio.wp.scss';
</style>