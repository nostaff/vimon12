<template>
    <div class="app-root">
        <ion-tabs selectedIndex="2" color="secondary" @onTabChange="onTabChange" >
            <ion-tab tabTitle="首页" tabIcon="home" tabUrlPath="/home"></ion-tab>
            <ion-tab tabTitle="折扣" tabIcon="pricetags" tabUrlPath="/sport"></ion-tab>
            <ion-tab tabTitle="购物车" tabIcon="cart" tabUrlPath="/cart" tabBadge="12" tabBadgeStyle="danger"></ion-tab>
            <ion-tab tabTitle="我的" tabIcon="person" tabUrlPath="/user"></ion-tab>
            <ion-tab tabTitle="Demo" tabIcon="musical-notes" tabUrlPath="/demo"></ion-tab>

            <div slot="tab-content" class="ion-tab show-tab" role="tabpanel">
                <router-view></router-view>
                <div class="nav-decor"></div>
            </div>
        </ion-tabs>
    </div>
</template>

<script>
    export default {
        methods: {
            onTabChange(menuIndex) {
                console.log('onTabChange', menuIndex)
            }
        },

        beforeDestroy() {
            this.$events && this.$events.$emit('hideTabbar')
        }
    }
</script>
