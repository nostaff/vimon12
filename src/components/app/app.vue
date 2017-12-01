<template>
    <div class="ion-app" :class="theme">
        <div app-viewport=""></div>
        <div class="ion-nav">
            <div nav-viewport=""></div>
            <transition name="page" v-on:before-enter="beforePageEnter">
                <slot></slot>
            </transition>
            <div class="nav-decor"></div>
        </div>
    </div>
</template>
<script>
  import ThemeMixins from '../../themes/theme.mixins';

  export default {
    name: 'ion-app',
    mixins: [ThemeMixins],
    methods: {
      beforePageEnter(el) {
        console.log('beforePageEnter time:', +new Date())
      }
    }
  }
</script>


<style lang="scss">
    @import 'app';
    @import 'app.ios';
    @import 'app.md';
    @import 'app.wp';
</style>
