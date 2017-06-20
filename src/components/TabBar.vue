<template>
    <nav class="bar bar-tab" v-show="isShowTabbar">
        <slot></slot>
    </nav>
</template>

<script>
    import { parentMixin } from '../mixins/multi-items'

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
    @import "../assets/css/variables";
    @import "../assets/css/bars";
</style>
