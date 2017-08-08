<template>
    <div class="ion-tabbar tabbar" :class="[state?'show-tabbar':'']" role="tablist">
        <a role="tab" class="disable-hover tab-button" href="#" :aria-selected="index===selectedIndex" v-for="(item, index) in items"
           :class="[item.text?'has-title':'', item.icon?'has-icon':'', item.badge?'has-badge':'']"
           @click="itemClicked(index)">
            <ion-icon class="tab-button-icon" :name="item.icon" v-if="item.icon"></ion-icon>
            <span class="tab-button-text">{{item.text}}</span>
            <ion-badge class="tab-badge" :color="item.badgeColor?item.badgeColor:'danger'" v-if="item.badge">{{item.badge}}</ion-badge>
            <div class="button-effect"></div>
        </a>
    </div>
</template>
<script>
    import channel from '../../utils/channel'
    import IonIcon from '../../components/icon'
    import IonBadge from "../../components/badge";

    const re_color = /^#([0-9A-Fa-f]{3})|([0-9A-Fa-f]{6})$/;

    export default {
        name: 'ion-tabbar',

        components: {
            IonBadge,
            IonIcon
        },

        data() {
            return {
                state: true,
                selectedIndex: 0,
            }
        },

        props: {
            items: {
                type: Array,
                required: true
            },

            onItemClick: {
                type: Function
            }
        },

        mounted() {
            channel.$on('hideTabbar', () => {
                this.hide()
            })

            channel.$on('setBadgeNum', (index, num) => {
                this.setBadgeNum(index, num)
            })

            channel.$on('selectedItem', (index) => {
                this.selectedItem(index)
            })
        },

        methods: {
            itemClicked(index) {
                this.selectedIndex = index
                if (this.items[index].path)
                    $router.forward({ path: this.items[index].path })

                if (this.onItemClick) {
                    this.onItemClick(index)
                }
            },

            selectedItem(index) {
                this.selectedIndex = index
            },

            hide() {
                this.state = false
            },

            setBadgeNum(itemIndex, num) {
                this.items[itemIndex].bage = num
            }
        },
    }
</script>
