<template>
  <div :class="['ion-segment', 'segment', 'segment-'+theme, colorClass]">
    <slot></slot>
  </div>
</template>
<script>
  import {isBlank, isTrueProperty} from '../../util/util'
  import ThemeMixins from '../../themes/theme.mixins'

  let tabIds = -1

  export default {
    name: 'ion-segment',
    mixins: [ThemeMixins],
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      disabled: {
        type: [Boolean, String],
        default: true
      }
    },
    data () {
      return {
        componentName: 'ionSegment',
        roleName: 'segment',

        isDisabled: isTrueProperty(this.disable),
        currentValue: this.value,

        buttons: [],

        selectedIndex: -1
      }
    },
    created () {
      this.id = 't-' + (++tabIds)

      this.selectedTabIndex = (isBlank(this.selectedIndex) ? 0 : parseInt(this.selectedIndex, 10))
    },
    mounted () {
      this.$nextTick(() => {
        this.refreshButtons(this.currentValue)
      })
    },
    methods: {
      addButton (button) {
        this.buttons.push(button)

        if (isBlank(this.currentValue) && button.isActive) {
          this.currentValue = button.value
        }

        // listen for button select events
        button.$on('onActived', (val) => {
          // this button has been selected
          this.onButtonActived(val)
        })
      },
      onButtonActived (value) {
        this.refreshButtons(value)
        this.$emit('input', value)
        this.$emit('onChange', value)
      },
      refreshButtons (value) {
        this.buttons.forEach((button) => {
          if (!button.isDisabled) {
            button.setActived(value)
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  @import 'segment';
  @import 'segment.ios';
  @import 'segment.md';
</style>