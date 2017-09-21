<template>
    <div :class="['ion-tabs', 'tabs', 'tabs-'+theme, colorClass]"
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
                type: String,
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
                    return ['icon-top', 'icon-left', 'icon-right', 'icon-bottom', 'icon-hide', 'title-hide'].indexOf(value) > -1;
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

                selectedTabIndex: 0,
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
        created() {
            this.id = 't' + (++tabIds);

            // get the selected index from the input
            // otherwise default it to use the first index
            this.selectedTabIndex = (isBlank(this.selectedIndex) ? 0 : parseInt(this.selectedIndex, 10));

        },
        mounted() {
            this.initTabs();
        },
        methods: {
            initTabs() {
                // get the selected index from the tab
                if (this.selectedTabIndex > this.length())
                    this.selectedTabIndex = 0;

                let selectedTab = this.tabs.find(t => t.isSelected && !t.isDisabled && !t.isHidden);
                if (!selectedTab) {
                    this.selectTab(selectedTab);
                }
            },

            addTab(tab) {
                this.tabs.push(tab);

                return this.id + '-' + (++this.ids);
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

            setTabbarPosition(top, bottom) {
                if (this._top !== top || this._bottom !== bottom) {
                    var tabbarEle = this._tabbar.nativeElement;
                    tabbarEle.style.top = (top > -1 ? top + 'px' : '');
                    tabbarEle.style.bottom = (bottom > -1 ? bottom + 'px' : '');
                    tabbarEle.classList.add('show-tabbar');

                    this._top = top;
                    this._bottom = bottom;
                }
            },

            getTabsLayout () {
                return this.tabsLayout;
            }
        },
    }
</script>