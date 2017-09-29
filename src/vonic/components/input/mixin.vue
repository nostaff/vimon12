<template>
    <div :class="[
        type=='textarea'?'ion-textarea':'ion-input',
        'input-'+theme
    ]">
        <input
                :class="['text-input', 'text-input-'+theme]"
                :value="currentValue"
                :type="type"
                :placeholder="placeholder"
                :disabled="isDisabled"
                :readonly="isReadonly"
                :max="max"
                :min="min"
                :step="step"
                ref="input"
                @blur="onBlur($event)"
                @focus="onFocus($event)"
                @input="onInput($event)"
                @keydown="onKeydown($event)"
                v-if="type !== 'textarea'">

        <textarea
                :class="['text-input', 'text-input-'+theme]"
                :value="currentValue"
                :placeholder="placeholder"
                :disabled="isDisabled"
                :readonly="isReadonly"
                :maxlength="maxlength"
                :rows="rows"
                ref="textarea"
                @blur="onBlur($event)"
                @focus="onFocus($event)"
                @input="onInput($event)"
                @keydown="onKeydown($event)"
                v-if="type ==='textarea'"></textarea>

        <ion-button v-if="isClearInput && !isTextarea"
                    class="text-input-clear-icon"
                    @click.native="clearTextInput($event)"
                    clear></ion-button>

    </div>
</template>


<script>
    import { isPresent, isTrueProperty } from '../../utils/utils'
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
                itemCmp: null,

                currentValue: this.value,
                isTextarea: false,
                isReadonly: isTrueProperty(this.readonly),
                isDisabled: isTrueProperty(this.disabled),
                isClearInput: isTrueProperty(this.clearInput),
                isClearOnEdit: isTrueProperty(this.clearOnEdit),
                maxlengthValue: parseInt(this.maxlength),

                timer: null,
                didBlurAfterEdit: false,
                shouldBlur: true
            }
        },

        props: {
            /**
             * @input {string} The type of control to display. The default type is text.
             * Possible values are: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, or `"url"`.
             */
            type: {
                type: String,
                validator (value) {
                    return ['text', 'password', 'email', 'number', 'tel', 'datetime-local', 'date', 'time'].indexOf(value) > -1;
                },
                default: 'text'
            },

            value:{
                type: [String, Number],
                required: false
            },
            /**
             * @input {boolean} If true, a clear icon will appear in the input when there is a value. Clicking it clears the input.
             */
            clearInput: {
                type: [String, Boolean],
                default: true,
            },

            /**
             * @input {boolean} If true, the user cannot modify the value.
             */
            readonly: {
                type: [String, Boolean],
                default: false,
            },

            /**
             * @input {boolean} If true, the user cannot modify the value.
             */
            disabled: {
                type: [String, Boolean],
                default: false,
            },

            /**
             * @input {boolean} If true, the value will be cleared after focus upon edit.
             * Defaults to `true` when `type` is `"password"`, `false` for all other types.
             */
            clearOnEdit: {
                type: [String, Boolean],
                default: false,
            },

            /**
             * @input {string} Instructional text that shows before the input has a value.
             */
            autocomplete: {
                type: String,
                default: ''
            },

            /**
             * @input {string} Instructional text that shows before the input has a value.
             */
            autocorrect: {
                type: String,
                default: ''
            },

            /**
             * @input {string} Instructional text that shows before the input has a value.
             */
            placeholder: {
                type: String,
                default: ''
            },

            /**
             * @input {any} The minimum value, which must not be greater than its maximum (max attribute) value.
             */
            min: {
                type: [String, Number],
                default: ''
            },

            /**
             * @input {any} The maximum value, which must not be less than its minimum (min attribute) value.
             */
            max: {
                type: [String, Number],
                default: ''
            },

            /**
             * @input {any} Works with the min and max attributes to limit the increments at which a value can be set.
             */
            step: {
                type: [String, Number],
                default: ''
            },

            /**
             * @input {any} The maximum length of textarea.
             */
            maxlength: {
                type: [String, Number],
                default: ''
            },
        },
        computed: {
            modeClass () {
                return `input input-${this.mode}`
            },
            textInputClass () {
                return `text-input text-input-${this.mode}`
            }
        },
        created() {
            if (this.$parent.$data.componentName === 'ionItem') {
                this.itemCmp = this.$parent;
            }

            if (this.$data.componentName === 'ionTextarea' || this.type === 'textarea') {
                this.isTextarea = true;
            }

            if (this.type === 'password') {
                this.isClearOnEdit = true
            }
        },
        mounted() {
            if (isPresent(this.itemCmp)) {
                this.itemCmp.setElementClass('item-input', true);
                this.itemCmp.setElementClass('item-textarea', this.isTextarea);

                ['floating', 'stacked'].forEach((attr) => {
                    if (this.$el.hasAttribute(attr)) {
                        this.itemCmp.setElementClass(`item-label-${attr}`, true);
                        this.itemCmp.updateLabelAttribute(attr);
                    }
                });
            }

            this.setItemHasValueClass()
        },

        methods: {
            clearTextInput($event) {
                this.currentValue = ''
                this.onInput()
                this.shouldBlur = false

                this.setItemHasFocusClass(true)
            },
            onInput($event) {
                this.currentValue = $event && $event.target ? $event.target.value : ''
                this.setItemHasValueClass()

                // debounce
                window.clearTimeout(this.timer)
                this.timer = window.setTimeout(() => {
                    this.$emit('onInput', $event)
                    this.$emit('input', this.currentValue)
                }, 0)
            },
            onFocus($event) {
                this.setItemHasFocusClass(true)

                this.$emit('onFocus', $event)

            },
            onBlur($event) {
                window.setTimeout(() => {
                    if (this.shouldBlur) {
                        this.setItemHasFocusClass(false)

                        this.$emit('onBlur', $event)

                        if (this.isClearOnEdit && this.hasValue()) {
                            this.didBlurAfterEdit = true
                        }
                    } else {
                        this.shouldBlur = true
                    }
                }, 16 * 4)
            },
            onKeydown (ev) {
                if (ev && this.isClearOnEdit) {
                    this.checkClearOnEdit()
                }
            },

            /**
             * Check if we need to clear the text input if clearOnEdit is enabled
             * @hidden
             */
            checkClearOnEdit () {
                if (!this.isClearOnEdit) {
                    return
                }

                // clearOnEdit模式激活,并且input有值
                if (this.didBlurAfterEdit && this.hasValue()) {
                    this.inputValue = ''
                    this.inputChanged()
                }

                // 重置标记
                this.didBlurAfterEdit = false
            },

            /**
             * Check if we need to clear the text input if clearOnEdit is enabled
             * @hidden
             */
            checkClearOnEdit() {
                if (!this.isClearOnEdit) {
                    return;
                }

                // Did the input value change after it was blurred and edited?
                if (this.didBlurAfterEdit && this.hasValue()) {
                    // Clear the input
                    this.clearTextInput();
                }

                // Reset the flag
                this.didBlurAfterEdit = false;
            },

            /**
             *  设置父组件Item被点中时的class
             *  @private
             */
            setItemHasFocusClass (isFocus) {
                this.itemCmp && this.itemCmp.setElementClass('input-has-focus', isFocus)
            },

            /**
             *  设置父组件Item有值时的class
             *  @private
             */
            setItemHasValueClass () {
                this.itemCmp && this.itemCmp.setElementClass('input-has-value', this.hasValue())
            },

            /**
             * 判断input是否有value
             * @private
             * */
            hasValue () {
                const inputValue = this.currentValue
                return (inputValue !== null && inputValue !== undefined && inputValue !== '')
            }
        }
    }
</script>


