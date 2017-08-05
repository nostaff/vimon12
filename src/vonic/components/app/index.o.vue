<template>
    <div class="ion-app">
        <ion-nav></ion-nav>
        <transition name="page" v-on:before-enter="beforePageEnter">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import Vue from 'vue'
    import channel from './channel'

    Vue.directive('nav', {
        inserted: function (el, binding) {
            let data = binding.value
            channel.$emit('UpdateNavbar', data)
        }
    })

    export default {
        data() {
            return {
                gradeClass: 'theme-ios'
            }
        },

        created() {
        },

        methods: {
            beforePageEnter(el) {
                 console.log('beforePageEnter time:', +new Date())
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
