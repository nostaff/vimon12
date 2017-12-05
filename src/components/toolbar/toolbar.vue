<template>
    <div class="toolbar" :class="['toolbar-'+theme, colorClass]">
        <div class="toolbar-background" :class="['toolbar-background-'+theme]"></div>
        <slot name="item-start"></slot>
        <slot name="item-end"></slot>
        <div class="toolbar-content" :class="['toolbar-content-'+theme]">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins'
export default {
      name: 'ion-toolbar',
      mixins: [ThemeMixins],
      data () {
        return {
          componentName: 'ionToolbar',
          roleName: 'toobar'
        }
      },
      mounted () {
        if (this.$slots['item-start']) {
          this.$slots['item-start'].forEach(function (item) {
            item.elm.setAttribute('start', '')
          })
        }
        if (this.$slots['item-end']) {
          this.$slots['item-end'].forEach(function (item) {
            item.elm.setAttribute('end', '')
          })
        }
      }
    }
</script>

<style lang="scss">
  @import 'toolbar';
  @import 'toolbar.ios';
  @import 'toolbar.md';
</style>