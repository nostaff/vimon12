<template>
    <div class="ion-searchbar searchbar-left-aligned" :class="[
            themeClass,
            showCancelButton ? 'searchbar-show-cancel' : '',
            activated ? 'searchbar-active' : '',
            hasFocus ? 'searchbar-has-focus' : '',
            hasValue ? 'searchbar-has-value' : ''
            ]">
        <div class="searchbar-input-container">
            <div class="searchbar-search-icon"></div>
            <input class="searchbar-input" ref="input" type="search" spellcheck="false"
                   :placeholder="placeholder"
                   :value="value"
                   @focus="inputFocused($event)"
                   @blur="inputBlurred($event)"
                   @input="inputChanged($event)">
            <ion-button class="searchbar-clear-icon" clear @click.native="clearInput($event)"></ion-button>
        </div>
        <ion-button v-if="showCancelButton" class="searchbar-ios-cancel" clear @click="cancelSearchbar($event)">{{cancelButtonText}}</ion-button>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins'
import IonButton from '../button'

export default {
      name: 'ion-searchbar',
      mixins: [ThemeMixins],
      components: {
        IonButton
      },
      props: {
        value: {
          type: String,
          required: true
        },
        placeholder: {
          type: String,
          default: ''
        },
        showCancelButton: {
          type: Boolean,
          default: false
        },
        cancelButtonText: {
          type: String,
          default: 'Cancel'
        },
        onChange: Function,
        onCancel: Function
      },

      data () {
        return {
          activated: false,
          hasFocus: false,
          hasValue: false
        }
      },

      mounted () {
        if (this.$el.hasAttribute('floating')) {
          this.stacked = this.fixed = false
          this.floating = true
        }

        if (this.$el.hasAttribute('stacked')) {
          this.floating = this.fixed = false
          this.stacked = true
        }
      },

      methods: {
        cancelSearchbar ($event) {
          this.activated = false
          this.clearInput($event)
          if (this.onCancel) this.onCancel()
        },
        inputFocused ($event) {
          this.activated = true
          this.hasFocus = true
        },
        inputBlurred ($event) {
          setTimeout(() => {
            this.hasFocus = false
          }, 16 * 4)
        },
        inputChanged ($event) {
          let value = $event.target.value
          this.$refs.input.value = value
          this.$emit('input', value)
          if (this.onChange) this.onChange(value)
        },
        clearInput ($event) {
          this.$refs.input.value = ''
          this.$emit('input', '')
        }
      },

      watch: {
        value: function (newValue) {
          this.hasValue = !!newValue
        }
      }
    }
</script>

<style lang="scss">
    @import 'searchbar';
    @import 'searchbar.ios';
    @import 'searchbar.md';
</style>

