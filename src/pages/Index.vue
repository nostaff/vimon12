<template>
    <div class="page has-navbar  has-tabbar" v-nav="{hideNavbar: true}" v-tabbar="{'items': tabItems, itemColor: '#999', activeItemColor: '#FF4400', onItemClick: itemClicked}">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabItems: [
                    {
                        iconOn: 'ion-ios-home',
                        iconOff: 'ion-ios-home-outline',
                        text: '首页',
                        path: '/home'
                    },
                    {
                        iconOn: 'ion-ios-pricetags',
                        iconOff: 'ion-ios-pricetags-outline',
                        text: '折扣',
                        path: '/sport'
                    },
                    {
                        iconOn: 'ion-ios-cart',
                        iconOff: 'ion-ios-cart-outline',
                        text: '购物车',
                        path: '/cart',
                        badge: '5'
                    },
                    {
                        iconOn: 'ion-ios-person',
                        iconOff: 'ion-ios-person-outline',
                        text: '我的',
                        path: '/user'
                    },
                    {
                        iconOn: 'ion-ios-person',
                        iconOff: 'ion-ios-person-outline',
                        text: 'Demo',
                        path: '/demo'
                    }

                ]
            }
        },

        methods: {
            itemClicked(menuIndex) {
                console.log(menuIndex)
            }
        },

        beforeDestroy() {
            $tabbar.$emit('hideTabbar')
        }
    }
</script>
