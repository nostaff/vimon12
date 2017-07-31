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
            }
        },

        mounted() {
            this.updateParentItem();
        },

        props: {
            type: {
                type: String,
                validator(val) {
                    return val == 'text' || val == 'password' || val == 'email' || val == 'tel'  || val == 'textarea'
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
            // 过parent是item，做更新
            updateParentItem() {
                let $parent = this.$parent;
                if ($parent.$data.componentName === 'ionItem') {
                    $parent.$el.classList.add('item-input');

                    let $el = this.$el;
                    let attrs = ['floating', 'stacked'];
                    attrs.forEach(function(attr){
                        if ($el.hasAttribute(attr)) {
                            $parent.addClass(`item-label-${attr}`);
                            $parent.updateLabelAttribute(attr);
                        }
                    });
                }

            }
        },

        watch: {
            value: function (val) {
                let hasValue = !!val;
                this.$parent.$el.classList[hasValue ? 'add' : 'remove']('input-has-value');
            },
            activated(val) {
                this.$parent.$el.classList[val ? 'add' : 'remove']('input-has-focus');
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

