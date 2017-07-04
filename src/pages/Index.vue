<template>
    <div class="page" v-tabbar="{'items': tabItems, onItemClick: itemClicked}">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabItems: [
                    {
                        icon: 'demo-icon-home',
//                        simple: true,
                        text: '首页',
                        path: '/home'
                    },
                    {
                        icon: 'demo-icon-search',
                        text: '折扣',
                        path: '/sport',
                        badge: '5'
                    },
                    {
                        icon: 'demo-icon-noti',
                        text: '消息',
                        path: '/setting',
                        showDot: true,
                    },
                    {
                        icon: 'demo-icon-me',
                        text: '我的',
                        path: '/user'
                    },
                    {
                        icon: 'demo-icon-me',
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
