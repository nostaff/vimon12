<template>
    <div class="item item-block item-input" :class="{'item-floating-label': floatingLabel == 'true', 'item-stacked-label': stackedLabel == 'true'}">
        <div class="item-inner">
            <div class="input-wrapper">
                <label class="label fixed" v-if="!!label" v-text="label" :class="{'has-input': floatingLabel == 'true' && !!value}"></label>

                <i class="icon placeholder-icon" v-if="iconClass" :class="iconClass"></i>

                <input class="text-input" v-if="type == 'text'" type="text" :placeholder="placeholder" ref="input" :value="value"
                       @compositionstart="compositionStart($event)"
                       @compositionend="compositionEnd($event)"
                       @input="input($event)"
                       @focus="focus($event)"
                       @blur="blur($event)" >

                <!-- password -->
                <input v-if="type == 'password'" type="password" :placeholder="placeholder" ref="input" :value="value"
                       @input="updateValue($event.target.value)"
                       @focus="focus($event)"
                       @blur="blur($event)" >

                <!-- email -->
                <input v-if="type == 'email'" type="email" :placeholder="placeholder" ref="input" :value="value"
                       @input="updateValue($event.target.value)"
                       @focus="focus($event)"
                       @blur="blur($event)" >

                <!-- tel -->
                <input v-if="type == 'tel'" type="tel" :placeholder="placeholder" ref="input" :value="value"
                       @input="updateValue($event.target.value)"
                       @focus="focus($event)"
                       @blur="blur($event)" >

                <span class="input-clear" :class="{'active': showClearButton}" @click="clear(value)"></span>
            </div>
        </div>
    </div>
</template>
<script>

    let lock = false

    const is_ios = /iPad|iPhone|iPod/.test(navigator.userAgent)

    export default {
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
                showClearButton: false
            }
        },

        methods: {
            clear(value) {
                this.$refs.input.blur()
                this.$refs.input.value = ''
                this.$emit('input', '')
                this.showClearButton = false
                this.$refs.input.focus()
            },

            updateValue(value) {
                console.log('updateValue')

                this.$refs.input.value = value
                this.$emit('input', value)
            },

            input($event) {
                console.log('input')

                if (lock) {
                    $event.preventDefault()
                    return
                }

                let value = $event.target.value
                this.$refs.input.value = value
                this.$emit('input', value)
            },

            compositionStart($event) {
                lock = true
            },

            compositionEnd($event) {
                lock = false
                this.$emit('input', this.$refs.input.value)
            },

            focus($event) {
                console.log('focus')
                if (is_ios) this.showClearButton = !!this.$refs.input.value
            },

            blur($event) {
                console.log('blur')

                if (is_ios) this.showClearButton = false
            }
        },

        watch: {
            value: function (newValue) {
                this.showClearButton = !!newValue
            }
        }
    }
</script>
