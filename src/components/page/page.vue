<template>
    <div class="ion-page show-page" :style="{zIndex:pageZIndex}">
        <slot></slot>
    </div>
</template>

<script>
  import ThemeMixins from '../../themes/theme.mixins';

  let initPageZIndex = 100
  export default {
    name: 'ion-page',
    mixins: [ThemeMixins],
    created() {
      let direction = this.$history.getDirection()
      if (direction === 'forward') {
        this.pageZIndex = ++initPageZIndex
      } else if (direction === 'backward') {
        this.pageZIndex = --initPageZIndex
      } else {
        this.pageZIndex = initPageZIndex
      }
      this.$root.$emit('page:created')
    },
  }
</script>