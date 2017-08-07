<template>
    <div class="ion-app" :class="theme">
        <transition name="page" v-on:before-enter="beforePageEnter">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import Vue from 'vue'
    import ThemeMixins from '../../themes/theme.mixins';

    let vm = new Vue();

    export default {
        name: 'ion-index',
        mixins: [ThemeMixins],

        created() {
//            console.log('app created')
            vm.$on('VonicNotification', (data) => {
                $toast.show(data.message);
            })

            vm.$on('UpdateNavbar', (el, data) => {
                console.log('UpdateNavbar', data)
            })
        },

        methods: {
            beforePageEnter(el) {
//                 console.log('beforePageEnter time:', +new Date())
            }
        }
    }
</script>


<style lang="scss">
    @import './app';
    @import './app.ios';
    @import './app.md';
    @import './app.wp';
</style>
