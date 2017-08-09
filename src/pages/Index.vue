<template>
    <!--<div class="app-root" v-tabbar="{'items': tabItems, color: 'secondary', onItemClick: itemClicked}">-->
        <!--<ion-tab slot="tab-content" role="tabpanel">-->
        <!--<router-view></router-view>-->
        <!--</ion-tab>-->
    <!--</div>-->
    <div class="app-root">
        <ion-tabs color="secondary">
            <ion-tabbar :items="tabItems" :on-item-click="itemClicked"></ion-tabbar>
            <ion-tab role="tabpanel">
                <router-view></router-view>
            </ion-tab>
        </ion-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabItems: [
                    {
                        icon: 'home',
                        text: '首页',
                    },
                    {
                        icon: 'pricetags',
                        text: '折扣',
                    },
                    {
                        icon: 'cart',
                        text: '购物车',
                        badge: '5'
                    },
                    {
                        icon: 'person',
                        text: '我的',
                    },
                    {
                        icon: 'person',
                        text: 'Demo',
                    }
                ]
            }
        },

        methods: {
            itemClicked(menuIndex) {
                switch (menuIndex) {
                    default:
                    case 0:
                        $router.forward('/home');
                        break;
                    case 1:
                        $router.forward('/sport');
                        break;
                    case 2:
                        $router.forward('/cart');
                        break;
                    case 3:
                        $router.forward('/user');
                        break;
                    case 4:
                        $router.forward('/demo');
                        break;
                }
            }
        },

        beforeDestroy() {
            $tabbar.$emit('hideTabbar')
        }
    }
</script>
