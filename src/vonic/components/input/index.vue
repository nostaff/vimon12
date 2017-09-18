<template>
    <div :class="[
        type=='textarea'?'ion-textarea':'ion-input',
        'input-'+theme
    ]">
        <template v-if="type !== 'textarea'">
            <ion-icon class="input-icon" v-if="icon" :name="icon"></ion-icon>
            <input class="text-input" :class="['text-input-'+theme]" :type="type" ref="input"
                   :placeholder="placeholder"
                   :value="value"
                   :disabled="disabled"
                   :readonly="readonly"
                   @input="inputChanged($event)"
                   @focus="inputFocused($event)"
                   @blur="inputBlurred($event)">
            <ion-button v-if="!disableClear" class="text-input-clear-icon" @click.native="clearInput($event)" clear></ion-button>
        </template>
        <textarea v-else class="textarea-input" :class="['text-input-'+theme]" ref="input"
                  :placeholder="placeholder"
                  :disabled="disabled"
                  :readonly="readonly"
                  @input="inputChanged($event)"
                  @focus="inputFocused($event)"
                  @blur="inputBlurred($event)"
        >{{value}}</textarea>
    </div>
</template>


<script>
    import { isPresent } from '../../utils/utils'
    import ThemeMixins from '../../themes/theme.mixins';
    import IonButton from '../button';

    export default {
        name: 'ion-input',
        mixins: [ThemeMixins],
        components: {
            IonButton,
        },

        data() {
            return {
                activated: false,

                parentItem: null,   // if Parent is item component, get it
            }
        },

        props: {
            type: {
                type: String,
                validator (value) {
                    return ['text', 'password', 'email', 'number', 'tel', 'datetime-local', 'date', 'time'].indexOf(value) > -1;
                },
                default: 'text'
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
            readonly: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            disableClear: {
                type: Boolean,
                default: false
            },
        },

        created() {
            if (this.$parent.$data.componentName === 'ionItem') {
                this.parentItem = this.$parent;
            }
        },

        mounted() {
            if (isPresent(this.parentItem)) {
                this.parentItem.setClass('item-input', true);

                ['floating', 'stacked'].forEach((attr) => {
                    if (this.$el.hasAttribute(attr)) {
                        this.parentItem.setClass(`item-label-${attr}`, true);
                        this.parentItem.updateLabelAttribute(attr);
                    }
                });
            }
        },

        methods: {
            clearInput($event) {
                if (this.disabled || this.readonly) return;

                this.$refs.input.value = ''
                this.$emit('input', '')
            },
            inputChanged($event) {
                let value = $event.target.value
                this.$refs.input.value = value
                this.$emit('input', value)
                this.activated = true
            },
            inputFocused($event) {
                this.activated = true
            },
            inputBlurred($event) {
                setTimeout(() => {
                    this.activated = false
                }, 16 * 4);
            },
        },

        watch: {
            value: function (val) {
                let hasValue = !!val;
                this.parentItem && this.parentItem.setClass('input-has-value', hasValue)
//                this.$parent.$el.classList[hasValue ? 'add' : 'remove']();
            },
            activated(val) {
                this.parentItem && this.parentItem.setClass('input-has-focus', val)

//                this.$parent.$el.classList[val ? 'add' : 'remove']('input-has-focus');
            }
        },

    }
</script>

<style lang="scss">
    @import './input.scss';
    @import './input.ios.scss';
    @import './input.md.scss';
    @import './input.wp.scss';
</style>

