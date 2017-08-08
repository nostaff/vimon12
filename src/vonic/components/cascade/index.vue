<template>
    <ion-list :title="title" class="cascade">
        <ion-item class="item" is-link v-for="(field, index) in fields" :key="index" @click.native="showCascadePanel(index)">
            <span v-text="field"></span>
            <span class="item-note" v-text="value[index]"></span>
        </ion-item>
    </ion-list>
</template>
<script>
    import axios from 'axios'
    import Vue from 'vue'
    import channel from '../../utils/channel'
    import List from '../list'
    import Item from '../item'

    const filter = (filters, data) => {
        let options = []

        data.forEach((d) => {
            let r = true
            filters.forEach((f, i) => {
                r = r && f == d[i]
            })
            if (r) {
                let option = d[filters.length]

                if (!!option && options.indexOf(option) == -1) {
                    options.push(option)
                }
            }
        })

        return options
    }

    export default {
        components: {
            List,
            Item,
        },

        props: {
            title: {
                type: [String, Number],
            },
            fields: {
                type: Array,
                required: true
            },

            ajaxUrl: {
                type: String,
                default: undefined
            },

            ajaxData: {
                type: String,
                default: undefined
            },

            data: {
                type: Array
            },

            value: {
                type: Array,
                required: true
            },

            onChange: {
                type: Function,
                required: true
            }
        },

        data() {
            return {
                options: []
            }
        },

        mounted() {
            if (this.ajaxUrl) {
                axios.get(this.ajaxUrl)
                    .then(response => response.data)
                    .then((data) => {
                        this.data = this.ajaxData ? data[this.ajaxData] : data
                        this.options = this.filter()
                    })
            } else {
                this.options = this.filter()
            }
        },

        methods: {
            showCascadePanel(index) {
                let v = this.value, f = this.fields

                if (index > v.length) {
                    channel.$emit('VonicNotification', {
                        message: '请先选择' + f[index - 1]
                    })

                    return
                }

                let title = f[index]
                let options = this.filter(index)
                // console.log('show cascade panel =>', title, options)

                $cascadePanel
                    .show(title, options)
                    .then((optionIndex) => {
                        if (optionIndex == -1) return

                        this.value.splice(index, 1, options[optionIndex])
                        this.resetDown(index)

                        this.onChange(this.value)
                    })
            },

            filter(index) {
                let filters = [];
                for (let i = 0; i < index; i++) filters.push(this.value[i])
                return filter(filters, this.data)
            },

            resetDown(index) {
                let len = index + 1
                this.value.splice(len, this.value.length - len)
            }
        }
    }
</script>
