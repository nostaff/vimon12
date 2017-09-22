<template>
    <div :class="['ion-tabs', 'tabs', 'tabs-'+theme, colorClass]"
         :id="id"
         :tabsLayout="tabsLayout"
         :tabsHighlight="tabsHighlight"
         :tabsPlacement="tabsPlacement">
        <div class="tabbar" role="tablist">
            <slot></slot>
            <div class="tab-highlight"></div>
        </div>
        <slot name="tab-content"></slot>
        <div tab-portal=""></div>
    </div>
</template>
<script>
    import { isBlank, isPresent, parsePxUnit } from '../../utils/utils'
    import ThemeMixins from '../../themes/theme.mixins';

    let tabIds = -1;

    export default {
        name: 'ion-tabs',
        mixins: [ThemeMixins],
        props: {
            selectedIndex: {
                type: [String, Number],
                default: 0
            },
            tabsHighlight: {
                type: Boolean,
                default: true
            },
            tabsLayout: {
                type: String,
                default: 'icon-top',
                validator(value) {
                    return ['icon-top', 'icon-start', 'icon-end', 'icon-bottom', 'icon-hide', 'title-hide'].indexOf(value) > -1;
                }
            },
            tabsPlacement: {
                type: String,
                default: 'bottom',
                validator(value) {
                    return ['top', 'bottom'].indexOf(value) > -1;
                }
            }
        },
        data () {
            return {
                componentName: 'ionTabs',
                tabsCmp: null,

                id: '',
                ids: -1,
                tabs: [],

                selectedTabIndex: -1,
            }
        },
        computed: {
            colorClass: function() {
                return this.color ? `tabs-${this.theme}-${this.color}` : ''
            }
        },
        created() {
            this.id = 't-' + (++tabIds);

            this.selectedTabIndex = (isBlank(this.selectedIndex) ? 0 : parseInt(this.selectedIndex, 10));
        },
        mounted() {
            if (this.selectedTabIndex > this.length())
                this.selectedTabIndex = 0;
        },
        methods: {
            addTab(tab) {
                this.tabs.push(tab);

                return `${this.id}-${++this.ids}`;
            },

            selectTab(tabOrIndex) {
                const selectedTab = (typeof tabOrIndex === 'number' ? this.getByIndex(tabOrIndex) : tabOrIndex);
                if (isBlank(selectedTab)) {
                    return;
                }

                let selectedIndex = this.getTabIndex(selectedTab);

                // If the selected tab is not the current selected tab, we do switch
                if (this.selectedTabIndex != selectedIndex) {
                    const currentTab = this.getByIndex(this.selectedTabIndex);
                    currentTab.updateSelected(false);

                    this.selectedTabIndex = selectedIndex;
                    this.$emit('onTabChange', this.selectedTabIndex)
                }
            },

            getByIndex(index) {
                return this.tabs[index];
            },

            getTabIndex(tab) {
                return this.tabs.indexOf(tab);
            },

            length() {
                return this.tabs.length;
            },

            getTabsLayout () {
                return this.tabsLayout;
            }
        }
    }
</script>