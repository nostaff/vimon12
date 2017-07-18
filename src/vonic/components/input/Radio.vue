<template>
    <list :title="title">
        <div class="item item-radio" v-for="option in processOptions" @click="onClick(option.key)">
            <input type="radio" :name="radioName" v-model="v" :value="option.key" checked="option.checked">
            <div class="radio-content">
                <div class="item-content" v-text="option.value"></div>
                <i class="radio-icon ion-checkmark"></i>
            </div>
        </div>
    </list>
</template>
<script>
    import List from '../list/List.vue'
    export default {
        components: {
            List
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
