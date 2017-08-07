<template>
    <div style="z-index:20"
         :class="['tabs', 'tabs-'+theme, colorClass]"
         :selectedIndex="selectedIndex"
         :tabslayout="tabsLayout"
         :tabsplacement="tabsPlacement"
         :tabshighlight="tabsHighlight">
        <div class="tabbar" :class="[state?'show-tabbar':'']" role="tablist">
            <a role="tab" class="disable-hover tab-button" href="#" :aria-selected="index===selectedIndex" v-for="(item, index) in items"
               :class="[item.text?'has-title':'', item.icon?'has-icon':'', item.badge?'has-badge':'']"
               @click="itemClicked(index)">
                <ion-icon class="tab-button-icon" :name="item.icon" v-if="item.icon"></ion-icon>
                <span class="tab-button-text">{{item.text}}</span>
                <ion-badge class="tab-badge" :color="item.badgeColor?item.badgeColor:'danger'" v-if="item.badge">{{item.badge}}</ion-badge>
                <div class="button-effect"></div>
            </a>
        </div>
        <div tab-portal=""></div>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';

    import IonIcon from '../../components/icon'
    import IonBadge from "../../components/badge";

    const re_color = /^#([0-9A-Fa-f]{3})|([0-9A-Fa-f]{6})$/;

    export default {
        mixins: [ThemeMixins],

        components: {
            IonBadge,
            IonIcon
        },

        data() {
            return {
                items: [],
                selectedIndex: 0,
                state: 0
            }
        },

        props: {
            tabsHighlight: {
                type: Boolean,
                default: false
            },
            tabsLayout: {
                type: String,
                default: 'icon-top'      // icon-top, icon-start, icon-end, icon-bottom, icon-hide, title-hide
            },
            tabsPlacement: {
                type: String,
                default: 'bottom'       //top, bottom.
            },
            onItemClick: {
                type: Function
            }
        },

        mounted() {
            this.show()
        },

        desctoryed() {
            console.log("tabbar desctoryed")
//            document.body.removeChild(this.$el)
        },

        methods: {
            itemClicked(index) {
                window.__disable_nav_title_transition__ = true

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

            show() {
                this.state = 1
            },

            setBadgeNum(itemIndex, num) {
                this.items[itemIndex].bage = num
            }
        },

        computed: {
            colorClass: function() {
                switch (this.color) {
                    case 'default':
                        return '';
                    default:
                        return `tabs-${this.theme}-${this.color}`;
                }
            }
        },
    }
</script>
