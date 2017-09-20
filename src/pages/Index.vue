<template>
    <!--<div class="app-root" v-tabbar="{'items': tabItems, color: 'secondary', onItemClick: itemClicked}">-->
        <!--<ion-tab slot="tab-content" role="tabpanel">-->
        <!--<router-view></router-view>-->
        <!--</ion-tab>-->
    <!--</div>-->
    <div class="app-root">
        <ion-tabs color="danger" :tabs="tabItems">
            <div role="tabpanel" class="ion-tab show-tab" ref="tabsContentWrap">
                <router-view></router-view>
            </div>
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
                        badge: '5',
                        path: '/cart'
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
                console.log(menuIndex)
            }
        },

        beforeDestroy() {
            this.$events.$emit('hideTabbar')
        }
    }
</script>
