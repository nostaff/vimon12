<template>
    <ion-list :title="title">
        <div class="item item-checkbox" v-for="option in processOptions">
            <div class="checkbox" :class="['checkbox-'+theme]" @click="onClick(option.key)">
                <input type="checkbox" :name="checkboxName" v-model="v" :value="option.key">
            </div>
            <span v-text="option.value"></span>
        </div>
    </ion-list>
</template>
<script>
    import List from '../list'

    export default{
        components: {
            List
        },
        props: {
            options: {
                type: Array,
                required: true
            },

            title: {
                type: [String, Number],
            },

            value: {
                type: [Array, Number],
                required: true
            },

            theme: {
                type: String,
                default: 'assertive'
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

        data() {
            return {
                checkboxName: 'v-checkbox-' + Math.random().toString(36).substring(3, 6)
            }
        },

        methods: {
            onClick(i) {
                let index = this.v.indexOf(i)
                if (index == -1) {
                    this.v.push(i)
                } else {
                    this.v.splice(index, 1)
                }
                this.v.sort()
            }
        }
    }
</script>
