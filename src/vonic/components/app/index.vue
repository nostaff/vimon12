<template>
    <div class="ion-app" :class="gradeClass">
        <ion-nav>
            <transition name="page" v-on:before-enter="beforePageEnter">
                <router-view></router-view>
            </transition>
        </ion-nav>
    </div>
</template>
<script>
    import Vue from 'vue'
    import channel from './channel'
    import IonNav from './nav'

    Vue.directive('nav', {
        inserted: function (el, binding) {
            console.log(binding);

            let data = binding.value
            console.log('directive nav: ', data)
            channel.$emit('UpdateNavbar', el, data)
        }
    })

    export default {
        components: {
            IonNav
        },

        data() {
            return {
                gradeClass: 'ios'
            }
        },

        created() {
            console.log('app created')

            // theme-ios for ios, theme-md for android & other
            if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                this.gradeClass = 'ios'
            } else if (/Windows Phone/.test(navigator.userAgent)) {
                this.gradeClass = 'wp'
            } else {
                this.gradeClass = 'md'
            }

//            document.querySelector('.ion-app').classList.add(this.gradeClass)

            channel.$on('VonicNotification', (data) => {
                $toast.show(data.message);
            })
        },

        mounted() {
            console.log('app mounted')
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
