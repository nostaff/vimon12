<template>
    <ion-item :class="[
            type == 'textarea'?'ion-textarea':'ion-input',
            floating ? 'item-label-floating' : '',
            stacked ? 'item-label-stacked' : '',
            inputHasFocus ? 'input-has-focus item-input-has-focus' : '',
            inputHasValue ? 'input-has-value' : '',
            'input-'+theme
            ]">

        <ion-label v-if="!!label" slot="label" ref="label" :fixed="fixed" :stacked="stacked" :floating="floating" :color="color">
            {{label}}
        </ion-label>

        <template v-if="type !== 'textarea'" slot="item-content">
            <ion-icon class="input-icon" v-if="icon" :name="icon"></ion-icon>
            <input class="text-input" :class="['text-input-'+theme]" :type="type" :placeholder="placeholder" ref="input" :value="value"
                   @input="input($event)"
                   @focus="focus($event)"
                   @blur="blur($event)"
            >
            <ion-button class="text-input-clear-icon" @click.native="clear()" clear></ion-button>
        </template>
        <textarea v-else slot="item-content" class="'text-input-'+theme" :class="['text-input-'+theme]" ref="input" :placeholder="placeholder"
                  @focus="active = true"
                  @blur="active = false" :disabled="disabled" :readonly="readonly"
                  :value="currentValue" @input="handleInput">
                </textarea>
    </ion-item>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import Clickoutside from '../../utils/clickoutside';
    import IonButton from '../button';
    import IonItem from "../item/item";
    import IonLabel from "../label/index";

    export default {
        name: 'ion-input',
        mixins: [ThemeMixins],
        components: {
            IonLabel,
            IonItem,
            IonButton,
        },
        directives: {
            Clickoutside
        },
        props: {
            type: {
                type: String,
                validator(val) {
                    return val == 'text' || val == 'password' || val == 'email' || val == 'tel'  || val == 'textarea'
                },
                default: 'text'
            },
            label: {
                type: String,
                default: ''
            },
            icon: {
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
        },

        data() {
            return {
                inputHasValue: false,
                inputHasFocus: false,
                fixed: true,
                floating: false,
                stacked: false
            }
        },

        mounted () {
            if (this.$el.hasAttribute('floating')) {
                this.stacked = this.fixed = false;
                this.floating = true;
            }

            if (this.$el.hasAttribute('stacked')) {
                this.floating = this.fixed = false;
                this.stacked = true;
            }
        },

        methods: {
            clear() {
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

            input($event) {
                let value = $event.target.value
                this.$refs.input.value = value
                this.$emit('input', value)
                this.inputHasFocus = true
            },

            focus($event) {
                this.inputHasFocus = true
            },

            blur($event) {
                setTimeout(() => {
                    this.inputHasFocus = false
                }, 16 * 4);
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

