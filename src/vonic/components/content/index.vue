<template>
    <div class="ion-content" :class="['content-'+theme]">
        <div class="scroll-content">
            <slot></slot>
        </div>
        <slot name="ion-refresher"></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-content',
        mixins: [ThemeMixins],

//        mounted() {
//            console.debug('content mounted')
//            Vue.nextTick(() => {
//                let header = document.querySelector('.ion-header')
//                console.log(header)
//                let container = this.$el.querySelector('.swiper')
//                let swiper = new Swiper(container, {
//                    direction: this.direction,
//                    autoplay: (this.autoplay == true || this.autoplay == "true"),
//                    interval: this.interval,
//                    transitionEnd: (prev, current) => {
//                        this.activeIndex = current
//                        if (this.$refs.pagination) {
//                            this.$refs.pagination.activate(current)
//                        }
//
//                        // add callback
//                        if (this.callback) {
//                            this.callback(prev, current)
//                        }
//                    }
//                })
//
//                this.swiper = swiper
//                this.itemCount = swiper.count
//
//                Vue.nextTick(() => {
//                    if (this.$refs.pagination) {
//                        this.$refs.pagination.init()
//                    }
//                })
//            })
//        },
    }
</script>
<style lang="scss">
    @import "./content.scss";
    @import "./content.ios.scss";
    @import "./content.md.scss";
    @import "./content.wp.scss";
</style>