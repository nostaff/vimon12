<template>
    <div class="ion-tabbar tabbar" :class="[state?'show-tabbar':'']" role="tablist">
        <a role="tab" class="disable-hover tab-button" :aria-selected="index === selectedIndex" v-for="(item, index) in items"
           :class="[hasTitle(item)?'has-title':'icon-only', hasIcon(item)?'has-icon':'title-only', item.badge?'has-badge':'']"
           @click="itemClicked(index)">
            <ion-icon class="tab-button-icon" :name="item.icon" v-if="hasIcon(item)"></ion-icon>
            <span class="tab-button-text" v-if="hasTitle(item)">{{item.text}}</span>
            <ion-badge class="tab-badge" :color="badgeColor(item)" v-if="item.badge">{{item.badge}}</ion-badge>
            <div class="button-effect"></div>
        </a>
    </div>
</template>
<script>
    import IonIcon from '../../components/icon'
    import IonBadge from "../../components/badge";

    export default {
        name: 'ion-tabbar',

        components: {
            IonBadge,
            IonIcon
        },

        data() {
            return {
                state: true,
                selectedIndex: this.value
            }
        },

        props: {
            items: {
                type: Array,
                required: true
            },

            iconOnly: {
                type: Boolean,
                default: false
            },

            titleOnly: {
                type: Boolean,
                default: false
            },

            value: {
                type: Number,
                default: 0
            },

            onItemClick: {
                type: Function
            }
        },

        mounted() {
            this.$events.$on('hideTabbar', () => {
                this.hide()
            })

            this.$events.$on('setBadgeNum', (index, num) => {
                this.setBadgeNum(index, num)
            })

            this.$events.$on('selectedItem', (index) => {
                this.selectedItem(index)
            })
        },

        methods: {
            hasIcon (item) {
                return item.icon && !this.titleOnly
            },

            hasTitle (item) {
                return item.text && !this.iconOnly
            },

            badgeColor (item) {
                return item.badgeColor || 'default'
            },

            itemClicked(index) {
                this.selectedIndex = index

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

        watch: {
            value (newValue) {
                this.selectedIndex = newValue
            },
        },
    }
</script>
