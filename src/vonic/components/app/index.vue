<template>
    <div class="ion-app" :class="theme">
        <transition name="page" v-on:before-enter="beforePageEnter">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import channel from '../../utils/channel'
    import ThemeMixins from '../../themes/theme.mixins';

    export default {
        name: 'ion-index',
        mixins: [ThemeMixins],

        created() {
            channel.$on('VonicNotification', (data) => {
                $toast.show(data.message);
            })
        },

        mounted() {
//            console.debug('app mounted')
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
