<template>
    <div class="app-root">
        <ion-tabs selectedIndex="2" color="secondary" @onTabChange="onTabChange" >
            <ion-tab tabTitle="Location" tabIcon="navigate" tabUrlPath="/home" @on-tab-select="itemClicked"></ion-tab>
            <ion-tab tabTitle="Favorites" tabIcon="star" tabUrlPath="/cart" tabBadge="12" tabBadgeStyle="dark" @on-tab-select="itemClicked"></ion-tab>
            <ion-tab tabTitle="Radio" tabIcon="person" tabUrlPath="/user" @on-tab-select="itemClicked"></ion-tab>
            <ion-tab tabTitle="Demo" tabIcon="musical-notes" tabUrlPath="/demo" @on-tab-select="itemClicked"></ion-tab>

            <div slot="tab-content" class="ion-tab show-tab" role="tabpanel">
                <router-view></router-view>
                <div class="nav-decor"></div>
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
                        badgeStyle: 'danger',
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
            onTabChange(menuIndex) {
                console.log(menuIndex)
            },
            itemClicked(menuIndex) {
                console.log(menuIndex)
            }
        },

        beforeDestroy() {
            this.$events && this.$events.$emit('hideTabbar')
        }
    }
</script>
