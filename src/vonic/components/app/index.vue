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



    .page-enter-active,
    .page-leave-active
    {
        transition-duration: $ios-transition-duration;
        transition-timing-function: $ios-transition-timing-function;
        -webkit-transition-property: opacity, -webkit-transform;
        transition-property: opacity, transform;
    }

    .ion-app.md .page-enter-active,
    .ion-app.md .page-leave-active
    {
        transition-duration: $android-transition-duration;
        transition-timing-function: $android-transition-timing-function;
    }

    [transition-direction="forward"] {
        .page-enter {
            transform: translate3d(100%, 0, 0);
            opacity: 1;
            z-index: 2;
        }
        .page-enter-active {
            box-shadow: 0 0 10px rgba(0,0,0,.15);
        }
        .page-enter-to {
            transform: translate3d(0, 0, 0);
            opacity: 1;
            z-index: 2;
        }
        .page-leave {
            transform: translate3d(0, 0, 0);
            opacity: 0.8;
            z-index: 1;
        }
        .page-leave-to {
            transform: translate3d(-33%, 0, 0);
            opacity: 0;
            z-index: 1;
        }
    }

    [transition-direction="back"] {
        .page-enter {
            transform: translate3d(-33%, 0, 0);
            opacity: 0.8;
            z-index: 1;
        }
        .page-enter-to {
            transform: translate3d(0, 0, 0);
            opacity: 1;
            z-index: 1;
        }
        .page-leave {
            transform: translate3d(0, 0, 0);
            opacity: 1;
            z-index: 2;
        }
        .page-leave-active {
            box-shadow: 0 0 10px rgba(0,0,0,.15);
        }
        .page-leave-to {
            transform: translate3d(100%, 0, 0);
            opacity: 1;
            z-index: 2;
        }
    }

</style>
