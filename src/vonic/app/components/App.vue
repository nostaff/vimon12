<template>
  <div von-app>
    <navbar></navbar>
    <transition name="page" v-on:before-enter="beforePageEnter">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import Vue from 'vue'
  import channel from '../channel'
  import Navbar from './Navbar'
  import state from '../state'

  Vue.directive('nav', {
    inserted: function (el, binding) {
      let data = binding.value
      channel.$emit('UpdateNavbar', data)
    }
  })

  export default {
    components: {
      Navbar
    },

    data() {
      return {
        gradeClass: 'theme-ios'
      }
    },

    created() {
      // theme-ios for ios, theme-android for android & other
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        this.gradeClass = 'theme-ios'
      } else {
        this.gradeClass = 'theme-android'
      }

      if (state.__page_transition__ == 'ios') {
        this.gradeClass = 'theme-ios'
        state.__disable_nav_title_transition__ = false
      } else if (state.__page_transition__ == 'android') {
        this.gradeClass = 'theme-android'
        state.__disable_nav_title_transition__ = true
      }

      document.querySelector('body').className = this.gradeClass
    },

    methods: {
      beforePageEnter(el) {
        // console.log('beforePageEnter time:', +new Date())
      }
    }
  }
</script>
