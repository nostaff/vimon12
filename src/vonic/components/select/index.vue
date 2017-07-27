<template>
    <div class="item item-input item-select">
        <span class="input-label" v-if="!!label" v-text="label" ></span>
        <select :id="`von-selector-${uuid}`"  v-model="currentValue" :name="name" @change="onChange(i)">
            <option v-for="option in processOptions" :value="option.key" v-text="option.value"></option>
        </select>
    </div>
</template>
<script>
    export default {
        created () {
            if (typeof this.value !== 'undefined') {
                this.currentValue = this.value
            }
        },
        props: {
            options: {
                type: Array,
                required: true
            },
            value: {
                value: [Boolean, String, Number, Object],
                required: true
            },
            label: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: 'Search'
            },
            cancelText: {
                type: String,
                default: 'Cancel'
            },
            onSearch: Function,
            onCancel: Function
        },

        data () {
            return {
                currentValue: '',
//                isIOS: /iPad|iPhone|iPod/.test(window.navigator.userAgent)
            }
        },

        computed: {
            processOptions () {
                if (this.options.length && {}.hasOwnProperty.call(this.options[0], 'key')) {
                    return this.options
                } else {
                    return this.options.map(function (item) {
                        return {
                            key: item,
                            value: item,
                        }
                    })
                }
            },
            v: function () {
                return this.value
            }
        },

        watch: {
            value (val) {
                this.currentValue = val
            },
            currentValue (val) {
                this.$emit('input', val)
                this.$emit('on-change', val)
            }
        },

    }
</script>
