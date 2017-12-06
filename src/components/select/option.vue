<template>
    <span :label="label" :disabled="isDisabled" :selected="isSelected"></span>
</template>
<script type="text/javascript">
    import { isBlank, isTrueProperty } from '../../util/util'

    export default {
      name: 'ion-option',
      data () {
        return {
          selectComponent: null,

          isSelected: isTrueProperty(this.selected),
          isDisabled: isTrueProperty(this.disabled),
          label: '',
          optionValue: this.value
        }
      },
      props: {
        value: [Object, String, Array],
        text: [String],
        disabled: [Boolean, String],
        selected: [Boolean, String]
      },
      methods: {
        getText () {
          if (this.text) {
            return this.text.trim()
          } else if (this.$slots.default && this.$slots.default[0] && this.$slots.default[0].text) {
            return this.$slots.default[0].text.trim()
          }
          return ''
        }
      },

      mounted () {
        this.label = this.getText()

        // if parent is select
        if (this.$parent.$data.componentName === 'ionSelect') {
          this.selectComponent = this.$parent
          this.selectComponent.updateOptionList(this)
        }

        console.assert(this.selectComponent, 'Option组件必须在Select组件之内使用!')
        if (isBlank(this.optionValue)) {
          this.optionValue = this.label
        }
      }
    }
</script>

<style lang="scss">
  @import 'select';
  @import 'select.ios';
  @import 'select.md';
</style>