<template>
  <div class="ion-card-title" :class="[themeClass,colorClass]">
    <slot></slot>
  </div>
</template>
<script>
  import ThemeMixins from '../../themes/theme.mixins'

export default {
    name: 'ion-card-title',
    mixins: [ThemeMixins],
    data () {
      return {
        roleName: 'card-title'
      }
    },
    created () {
      if (!this.$parent || this.$parent.$option.name !== 'ion-card') {
        console.error('Card-title component must combine with Card')
      }
    }
  }
</script>
