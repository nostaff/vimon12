<template>
  <div class="segment-button" role="button" @click="onClickHandler"
       :aria-pressed="isActive"
       :class="{
            'segment-activated':isActive,
            'segment-button-disabled':isDisabled
        }">
    <slot></slot>
    <div class="button-effect"></div>
  </div>
</template>
<script type="text/javascript">
  import {isTrueProperty, isBlank, isPresent} from '../../utils/utils';
  import ThemeMixins from '../../themes/theme.mixins';

  export default {
    name: 'ion-segment-button',
    mixins: [ThemeMixins],
    props: {
      value: {
        type: [String],
        default: ''
      },
      disabled: {
        type: [Boolean, String],
        default: true
      }
    },
    data() {
      return {
        segmentCmp: null,

        isDisabled: isTrueProperty(this.disable),
        isActive: false
      }
    },
    watch: {
      disabled(val) {
        this.setDisabled(isTrueProperty(val))
      }
    },
    created() {
      if (!isPresent(this.value)) {
        console.warn('<ion-segment-button> requires a "value" attribute');
      }

      if (this.$parent && this.$parent.$option.name === 'ion-segment') {
        this.segmentCmp = this.$parent;
      } else {
        console.error('Segment-button component must combine with Segment')
      }

      this.segmentCmp.addButton(this);
    },
    methods: {
      onClickHandler(ev) {
        if (!this.isDisabled && !this.isActive) {
          this.isActive = true;
          this.$emit('onActived', this.value)
        }
      },
      setActived(value) {
        let isActive = value === this.value
        if (this.isActive !== isActive) {
          this.isActive = isActive
        }
      },
      setDisabled(disabled) {
        this.setActived(null)
        this.isDisabled = disabled
      }
    }

  }
</script>
