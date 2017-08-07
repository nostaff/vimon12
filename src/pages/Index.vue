<template>
    <div class="ion-tabs" v-tabbar="{'items': tabItems, color: 'secondary', onItemClick: itemClicked}">
    <div class="ion-tab show-tab">
        <router-view></router-view>
    </div>
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
                console.log(menuIndex)
            },
        },

        beforeDestroy() {
//            console.log('index beforeDestroy')
            $tabbar.$emit('hideTabbar')
        }
    }
</script>
