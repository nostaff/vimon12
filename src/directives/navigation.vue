<template>
  <ion-header v-show="activated">
    <ion-toolbar class="ion-navbar">
      <ion-button :class="['back-button','back-button-'+theme,'show-back-button']" :icon-only="!backText" @click.native="onBackClick" slot="item-start" v-if="showBack">
        <ion-icon :class="['back-button-icon','back-button-icon-'+theme]" :name="backIcon" v-if="backIcon"></ion-icon>
        <span :class="['back-button-text','back-button-text-'+theme]" v-if="backText && theme ==='ios'" v-text="backText"></span>
      </ion-button>
      <ion-buttons slot="item-end" v-if="showMenu">
        <ion-button :icon-only="!moreText" @click.native="onMenuClick">
          <ion-icon :class="['more-button-icon','more-button-icon-'+theme]" :name="moreIcon" v-if="moreIcon"></ion-icon>
          <span :class="['more-button-text','more-button-text-'+theme]" v-if="moreText" v-text="moreText"></span>
        </ion-button>
      </ion-buttons>
      <ion-title>{{title}}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
  import ThemeMixins from '../themes/theme.mixins';
  import IonHeader from "../components/page/header";
  import IonToolbar from "../components/toolbar/toolbar";
  import IonButtons from "../components/toolbar/toolbar-buttons";
  import IonIcon from "../components/icon/icon";
  import IonTitle from "../components/toolbar/toolbar-title";
  import IonButton from "../components/button/button";

  export default {
    components: {
      IonButton,
      IonTitle,
      IonIcon,
      IonButtons,
      IonToolbar,
      IonHeader
    },
    name: 'ion-navigation',
    mixins: [ThemeMixins],
    data() {
      return {
        componentName: 'ionToolbar',
        roleName: 'toolbar',

        activated: true
      };
    },
    props: {
      showBack: {
        type: Boolean,
        default: false
      },
      backIcon: {
        type: String,
        default: 'arrow-back'
      },
      backText: {
        type: String,
        default: 'Back'
      },
      onBack: Function,

      showMenu: {
        type: Boolean,
        default: false
      },
      moreIcon: {
        type: String,
        default: 'more'
      },
      moreText: {
        type: String,
        default: ''
      },
      onMenu: Function,
    },
    mounted() {
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
      onBackClick(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        if (this.onBack) {
          return this.onBack(ev)
        }

        let root = document.querySelector('.ion-app')
        if (root) root.setAttribute('transition-direction', 'back');
        history.go(-1)
      },
      onMenuClick(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        if (this.onMenu) {
          this.onMenu(ev)
        }
      },
    }
  }
</script>


<style lang="scss">
  @import '../components/toolbar/toolbar-buttons';
  @import '../components/toolbar/toolbar';
  @import '../components/toolbar/toolbar.ios';
  @import '../components/toolbar/toolbar.md';
</style>