<template>
  <ion-page class="page" v-nav="{hideNavbar: true}" v-tabbar="{'items': menus, itemColor: '#B5B5B5', activeItemColor: '#44CC00', onItemClick: menuClicked}">
    <router-view></router-view>
  </ion-page>
</template>
<script>
  export default {
    data() {
      return {
        menus: [
          {
            iconOn: 'ion-ios-home',
            iconOff: 'ion-ios-home-outline',
            text: '首页',
            path: '/demo/advanced/tabbar/home'
          },
          {
            iconOn: 'ion-ios-pricetags',
            iconOff: 'ion-ios-pricetags-outline',
            text: '折扣',
            path: '/demo/advanced/tabbar/discount'
          },
          {
            iconOn: 'ion-ios-cart',
            iconOff: 'ion-ios-cart-outline',
            text: '购物车',
            path: '/demo/advanced/tabbar/cart',
            badge: '5'
          },
          {
            iconOn: 'ion-ios-person',
            iconOff: 'ion-ios-person-outline',
            text: '我的',
            path: '/demo/advanced/tabbar/user'
          }
        ]
      }
    },

    methods: {
      menuClicked(menuIndex) {
        console.log(menuIndex)
      }
    },

    beforeDestroy() {
      this.$events.$emit('hideTabbar')
    }
  }
</script>
