<template>
    <ion-page v-nav="{title: '选项卡', showBackButton: true}">
        <ion-content class="tabs-demo">

            <ion-tabs tabs-only>
                <ion-tabbar v-model="tabIndex" :title-only="true" :items="tabItems" :on-item-click="onItemClick"></ion-tabbar>
                <ion-tab role="tabpanel">

                </ion-tab>

                <ion-tab role="tabpanel">

                </ion-tab>
            </ion-tabs>

            <ion-tabs tabs-only color="secondary">
                <ion-tabbar v-model="tabIndex"  :icon-only="true" :items="tabItems" :on-item-click="onItemClick"></ion-tabbar>
                <ion-tab role="tabpanel">

                </ion-tab>

                <ion-tab role="tabpanel">

                </ion-tab>
            </ion-tabs>

            <ion-tabs tabs-only color="danger">
                <ion-tabbar :items="tabItems" :on-item-click="onItemClick"></ion-tabbar>
                <ion-tab role="tabpanel">

                </ion-tab>
            </ion-tabs>

            <ion-tabs tabs-only tabslayout="icon-bottom">
                <ion-tabbar :items="tabItems" :on-item-click="onItemClick"></ion-tabbar>
                <ion-tab role="tabpanel">

                </ion-tab>
            </ion-tabs>

            <ion-tabs tabs-only tabslayout="icon-end" color="dark">
                <ion-tabbar :items="tabItems" :on-item-click="onItemClick"></ion-tabbar>
            </ion-tabs>

            <ion-tabs tabs-only tabslayout="icon-start">
                <ion-tabbar :items="tabItems" :on-item-click="onItemClick"></ion-tabbar>
            </ion-tabs>


                <p>
                    Active Tab Index: {{ tabIndex }}
                </p>


        </ion-content>
    </ion-page>
</template>

<script>
    export default{
        data(){
            return {
                tabItems: [
                    {
                        text: 'Recents',
                        icon: 'call',
                        path: '/home'
                    },
                    {
                        text: 'Favorites',
                        icon: 'heart',
                        path: '/sport',
                        badge: 23,
                        badgeColor: 'default'
                    },
                    {
                        text: 'Settings',
                        icon: 'settings',
                        path: '/user'
                    }
                ],

                tabIndex: 0,

                categoryIndex: 0
            }
        },

        methods: {
            onItemClick(index) {
                console.log(index)
                this.tabIndex = index
            },

            onCategoryClick(index) {
                this.categoryIndex = index
                console.log('category changed, current tab index is:', index);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-demo {

        .ion-tabs[tabs-only]:first-child {
            margin-top: 20px;
        }

        .ion-tabs[tabs-only], .ion-tabs[tabs-only] .tabbar {
            position: relative;
            top: auto;
            height: auto;
            visibility: visible;
            opacity: 1;
        }
        .ion-tabs[tabs-only] {
            margin-bottom: 20px;
            contain: none;
        }
        .ion-tabs, .ion-tabs .tabbar {
            position: relative;
            top: auto;
            height: auto;
            visibility: visible;
            opacity: 1;
        }
    }
</style>