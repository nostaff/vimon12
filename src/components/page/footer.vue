<template>
  <div class="ion-footer" :class="[themeClass]">
    <slot></slot>
  </div>
</template>
<script>
  import ThemeMixins from '../../themes/theme.mixins'

  export default {
    name: 'ion-footer',
    mixins: [ThemeMixins]
  }
</script>
