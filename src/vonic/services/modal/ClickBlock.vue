<template>
    <div von-modal-click-block class="click-block" :class="{'click-block-hide': state == 0}"></div>
</template>
<script>
    export default {
        data() {
            return {
                state: 0
            }
        },

        mounted() {
            this.$events.$on('ModalSlideUpStart', () => {
                this.show()
            })

            this.$events.$on('ModalSlideUpEnd', () => {
                this.hide()
            })

            this.$events.$on('RemoveClickBlock', () => {
                this.$destroy()
            })
        },

        destroyed() {
            this.$el.parentNode.removeChild(this.$el)
        },

        methods: {
            show() {
                this.state = 1
            },

            hide() {
                this.state = 0
            }
        }
    }
</script>
