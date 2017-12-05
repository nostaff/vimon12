<template>
  <div class="ion-navbar toolbar" :class="['toolbar-'+theme, colorClass]">
    <div class="toolbar-background" :class="['toolbar-background-'+theme]"></div>
    <ion-button role="bar-button" :class="['back-button','back-button-'+theme,'show-back-button']" :icon-only="!backText" @click.native="onBackClick" v-if="isShowBack">
      <ion-icon :class="['back-button-icon','back-button-icon-'+theme]" :name="backIcon" v-if="backIcon"></ion-icon>
      <span :class="['back-button-text','back-button-text-'+theme]" v-if="backText && theme ==='ios'" v-text="backText"></span>
    </ion-button>
    <slot name="item-start"></slot>
    <slot name="item-end"></slot>
    <div class="toolbar-content" :class="['toolbar-content-'+theme]">
      <slot>
        <ion-title v-if="title">{{title}}</ion-title>
      </slot>
    </div>
  </div>
</template>

<script>
  import {isTrueProperty} from '../../util/util'
  import ThemeMixins from '../../themes/theme.mixins'

export default {
    name: 'ion-navbar',
    mixins: [ThemeMixins],
    data () {
      return {
        componentName: 'ionNavbar',

        isShowBack: isTrueProperty(this.showBack)
      }
    },
    props: {
      showBack: {
        type: [Boolean, String],
        default: false
      },
      backIcon: {
        type: String,
        default: 'arrow-back'
      },
      backText: {
        type: String,
        default: 'Back'
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
    },
    methods: {
      onBackClick (ev) {
        ev.preventDefault()
        ev.stopPropagation()

        let root = document.querySelector('.ion-app')
        if (root) root.setAttribute('transition-direction', 'back')
        history.go(-1)
      }
    }
  }
</script>

<style lang="scss">
  @import 'toolbar';
  @import 'toolbar.ios';
  @import 'toolbar.md';
</style>