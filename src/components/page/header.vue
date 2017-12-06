<template>
  <div class="ion-header" :class="[themeClass]">
    <slot></slot>
  </div>
</template>

<script>
  import ThemeMixins from '../../themes/theme.mixins'

  export default {
    name: 'ion-header',
    mixins: [ThemeMixins]
  }
</script>
