<template>
    <span class="ion-badge" :class="[themeClass, colorClass]">
        <slot></slot>
    </span>
</template>

<script>
  import ThemeMixins from '../../themes/theme.mixins'

  export default {
    name: 'ion-badge',
    mixins: [ThemeMixins]
  }
</script>

<style lang="scss">
  @import 'badge';
  @import 'badge.ios';
  @import 'badge.md';
</style>
