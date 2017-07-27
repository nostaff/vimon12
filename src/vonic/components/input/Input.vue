<template>
    <div class="item item-block item-input"
         :class="{
            'item-label-floating': floatingLabel == 'true',
            'item-label-stacked': stackedLabel == 'true',
            'input-has-focus': inputHasFocus,
            'item-input-has-focus': inputHasFocus,
            'input-has-value': inputHasValue
        }"
    >
        <div class="item-inner">
            <div class="input-wrapper">
                <span class="label fixed" v-if="!!label" v-text="label"
                      :class="{'floating': floatingLabel == 'true', 'stacked': stackedLabel == 'true'}"
                ></span>

                <template v-if="type !== 'textarea'">
                    <i class="icon placeholder-icon" v-if="iconClass" :class="iconClass"></i>
                    <span class="input-clear" :class="{'activated': inputHasValue}" @click="clear(value)"></span>

                    <input class="text-input" :class="['text-input-'+theme]" :type="type" :placeholder="placeholder" ref="input" :value="value"
                           @change="change($event)"
                           @focus="focus($event)"
                           @blur="blur($event)"
                           @clickoutside="doCloseActive"
                    >

                </template>
                <textarea v-else class="text-input" :class="['text-input-'+theme]" ref="input" :placeholder="placeholder"
                          @focus="active = true"
                          @blur="active = false" :disabled="disabled" :readonly="readonly"
                          :value="currentValue" @input="handleInput">
                </textarea>

            </div>
        </div>
    </div>
</template>
<script>

    import ThemeMixins from '../../themes/theme.mixins';
    import Clickoutside from '../../utils/clickoutside';
    import IonButton from '../button';

    export default {
        name: 'ion-input',
        mixins: [ThemeMixins],
        components: {
            IonButton
        },
        directives: {
            Clickoutside
        },
        props: {
            type: {
                type: String,
                validator(val) {
                    return val == 'text' || val == 'password' || val == 'email' || val == 'tel'
                },
                default: 'text'
            },
            label: {
                type: String,
                default: ''
            },
            iconClass: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            value:{
                type: [String, Number],
                required: false
            },
            stackedLabel: {
                type: String,
                default: 'false',
                validator(val) {
                    return val == 'true' || val == 'false'
                }
            },
            floatingLabel: {
                type: String,
                default: 'false',
                validator(val) {
                    return val == 'true' || val == 'false'
                }
            }
        },

        data() {
            return {
                inputHasValue: false,
                inputHasFocus: false
            }
        },

        methods: {
            clear(value) {
                this.$refs.input.blur()
                this.$refs.input.value = ''
                this.$emit('input', '')
                this.inputHasValue = false
                this.$refs.input.focus()
            },

            updateValue(value) {
                this.$refs.input.value = value
                this.$emit('input', value)
            },

            change($event) {
                if (lock) {
                    $event.preventDefault()
                    return
                }

                let value = $event.target.value
                this.$refs.input.value = value
                this.$emit('input', value)
            },

            focus($event) {
                this.inputHasFocus = true
            },

            blur($event) {
                this.inputHasFocus = false
            }
        },

        watch: {
            value: function (newValue) {
                this.inputHasValue = !!newValue
            }
        }
    }
</script>

<style lang="scss">
    @import './input.scss';
    @import './input.ios.scss';
    @import './input.md.scss';
    @import './input.wp.scss';
</style>
