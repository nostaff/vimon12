<template>
    <div class="bar bar-tab" v-show="isShowTabbar">
        <slot></slot>
    </div>
</template>

<script>
    import { parentMixin } from '../utils/multi-items'

    export default {
        mixins: [parentMixin],
        props: {
        },
        computed: {
            isShowTabbar () {
                let routeLength = this.$route.path.split('/').length
                return routeLength > 2 ? false : true
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/variables";
    @import "../assets/scss/bars";
</style>
