<template>
  <div class="ion-label"
       :class="[themeClass, colorClass]"
       v-if="viewLabel"
  >
    <slot></slot>
  </div>
</template>
<script>
  import ThemeMixins from '../../themes/theme.mixins'

  export default {
    name: 'ion-label',
    mixins: [ThemeMixins],
    inject: {
      itemComponent: {
        from: 'itemComponent',
        default: null
      }
    },
    data () {
      return {
        viewLabel: true,

        itemCmp: null
      }
    },
    created () {
      // 如果slot 没有值 则隐藏该label 不管任何label 的是
      if (typeof (this.$slots.default) === 'undefined') {
        this.viewLabel = false
      }
    },
    mounted () {
      if (this.itemComponent) {
        this.itemComponent.setElementClass('item-label-fixed', this.hasAttribute('fixed'))
        this.itemComponent.setElementClass('item-label-floating', this.hasAttribute('floating'))
        this.itemComponent.setElementClass('item-label-stacked', this.hasAttribute('stacked'))
        this.itemComponent.labelComponent = this
      }
    },
    methods: {
      hasAttribute (name) {
        return this.$el.hasAttribute(name)
      }
    }
  }
</script>
<style lang="scss">
  @import 'label';
  @import 'label.ios';
  @import 'label.md';
</style>
