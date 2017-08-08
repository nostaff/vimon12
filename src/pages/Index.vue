<template>
    <!--<div class="app-root" v-tabbar="{'items': tabItems, color: 'secondary', onItemClick: itemClicked}">-->
        <!--<ion-tab slot="tab-content" role="tabpanel">-->
        <!--<router-view></router-view>-->
        <!--</ion-tab>-->
    <!--</div>-->
    <div class="app-root">
        <ion-tabs color="secondary">
            <ion-tabbar :items="tabItems" :onItemClick="itemClicked"></ion-tabbar>
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
                        path: '/home'
                    },
                    {
                        icon: 'pricetags',
                        text: '折扣',
                        path: '/sport'
                    },
                    {
                        icon: 'cart',
                        text: '购物车',
                        path: '/cart',
                        badge: '5'
                    },
                    {
                        icon: 'person',
                        text: '我的',
                        path: '/user'
                    },
                    {
                        icon: 'person',
                        text: 'Demo',
                        path: '/demo'
                    }
                ]
            }
        },

        methods: {
            itemClicked(menuIndex) {
                console.log('itemClicked', menuIndex)
            },
        },

        beforeDestroy() {
            $tabbar.$emit('hideTabbar')
        }
    }
</script>
