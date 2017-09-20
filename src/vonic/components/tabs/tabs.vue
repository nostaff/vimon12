<template>
    <div class="ion-tabs tabs"
         :class="['tabs-'+theme, colorClass]"
         :tabsLayout="tabsLayout"
         :tabsHighlight="tabsHighlight"
         :tabsPlacement="tabsPlacement">
        <div class="tabbar" role="tablist" ref="tabbar" :tabsLayout="tabsLayout">
            <ion-tab v-for="item in tabItems" key="index"
                     :to="{path: item.path}"
                     :tabTitle="item.text"
                     :tabIcon="item.icon"
                     :tabBadge="item.badge"
                     :selected="index == this.selectedIndex"
            @on-tab-select="onSelect(index)"></ion-tab>
            <div ref="tabHighlight" class="tab-highlight"></div>
        </div>
        <slot></slot>
        <div tab-portal=""></div>
    </div>
</template>
<script>
    import { isBlank, parsePxUnit } from '../../utils/utils'
    import ThemeMixins from '../../themes/theme.mixins';
    import IonTab from './tab'

    export default {
        name: 'ion-tabs',
        mixins: [ThemeMixins],
        components: {
            IonTab
        },
        props: {
            tabs: {
                type: Array,
                required: true
            },
            selectedIndex: {
                type: Number,
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

                isInit: false, // 当前组件初始化状态
                tabElementWidth: 0, // 每个tab的宽度, 用于tabHighLight
                tabSlots: null,
                tabbarElement: null, // tabbar元素
                tabsContentElement: null,
                tabsContentWrapElement: null,
                tabHighlightEle: null, // TabHighlight元素
            }
        },
        computed: {
            tabItems () {
                if (this.tabs.length && {}.hasOwnProperty.call(this.tabs[0], 'text')) {
                    return this.tabs
                } else {
                    return this.tabs.map(function (tab) {
                        return {
                            text: tab,
                            icon: null,
                            badge: 0,
                            disabled: false,
                        }
                    })
                }
            },
            colorClass: function() {
                switch (this.color) {
                    case 'default':
                        return '';
                    default:
                        return `tabs-${this.theme}-${this.color}`;
                }
            }
        },
        watch: {
            $route () {
                console.log('$route')
                if (!this.isInit) return
                let _index = this.getActivatedIndex()
                if (this.selectedIndex !== _index) {
                    this.selectedIndex = _index
                    this.tabHighlightSelect(this.selectedIndex)
                    /**
                     * @event component:Tabs#onTabChange
                     * @description tabs切换触发
                     * @property {string}
                     */
                    this.$emit('onTabChange', _index)
                }
            }
        },

        mounted() {
            //this.initTabs();
        },
        methods: {
            onSelect (index) {
                this.selectedIndex = index;
                console.log('onSelect')
            },
            /**
             * @internal
             */
            initTabs1() {
                // get the selected index from the input
                // otherwise default it to use the first index
                let selectedIndex = (isBlank(this.selectedIndex) ? 0 : parseInt(this.selectedIndex, 10));

                // now see if the deep linker can find a tab index
                const tabsSegment = this._linker.getSegmentByNavIdOrName(this.id, this.name);
                if (tabsSegment) {
                    // we found a segment which probably represents which tab to select
                    selectedIndex = this._getSelectedTabIndex(tabsSegment.secondaryId, selectedIndex);
                }

                // get the selectedIndex and ensure it isn't hidden or disabled
                let selectedTab = this._tabs.find((t, i) => i === selectedIndex && t.enabled && t.show);
                if (!selectedTab) {
                    // wasn't able to select the tab they wanted
                    // try to find the first tab that's available
                    selectedTab = this._tabs.find(t => t.enabled && t.show);
                }

                if (selectedTab) {
                    if (tabsSegment) {
                        selectedTab._lazyRootFromUrl = tabsSegment.name;
                        selectedTab._lazyRootFromUrlData = tabsSegment.data;
                    }
                    this.select(selectedTab);
                }

                // set the initial href attribute values for each tab
                this._tabs.forEach(t => {
                    t.updateHref(t.root, t.rootParams);
                });
            },
            // ------ public ------
            /**
             * @function getByIndex
             * @description
             * 获取第几个index的Tab组件实例
             * @param {number} index - 第几个index
             * @return {Tab}
             * */
            getByIndex (index) {
                if (this.tabSlots[index]) {
                    return this.tabSlots[index].componentInstance
                }
            },

            /**
             * @function getActivatedIndex
             * @description
             * 获取当前被选中Tab实例的index
             * @return {number}
             * */
            getActivatedIndex () {
                for (let i = 0, len = this.tabItems.length; len > i; i++) {
                    let tabIns = this.tabItems[i]
                    if (tabIns.name === this.$route.name || tabIns.path === this.$route.path) {
                        return i
                    }
                }
                return 0
            },

            /**
             * @function getSelected
             * @description
             * 获取当前选中的Tab实例
             * @return {Tab}
             * */
            getSelected () {
                return this.getByIndex(this.getActivatedIndex())
            },

            /**
             * @function select
             * @description
             * 根据传入值选中Tab
             * @param {number/Tab} tabOrIndex - 传入的Tab实例或者Tab的序号
             * @return {Tab}
             * */
            select (tabOrIndex) {
                let tabIns = tabOrIndex
                if (typeof tabOrIndex === 'number') {
                    tabIns = this.getByIndex(tabOrIndex)
                }
                if (tabIns === this.getSelected()) {
                    return tabIns
                } else {
                    this.$router.replace(tabIns.to)
                    return tabIns
                }
            },

            // ------ private ------

            /**
             * 获取每个tab的宽度, 因为是平均, 故用除法就行
             * @private
             * */
            getTabElementWidth () {
                let _count = this.tabSlots.length
                let _warpWidth = this.tabbarElement.offsetWidth
                return _warpWidth / _count
            },

            /**
             * 第一次进入是的初始化
             * @private
             */
            initTabs () {
                if (this.isInit) return

                // 获取tabbar元素
                this.tabSlots = this.$slots.tab
                this.tabbarElement = this.$refs.tabbar
                this.tabElementWidth = this.getTabElementWidth()
                this.selectedIndex = this.getActivatedIndex()

                this.tabHighlightEle = this.$refs.tabHighlight
                this.tabsContentElement = this.$refs.tabsContent
                this.tabsContentWrapElement = this.$refs.tabsContentWrap

                // 计算属性盒子的尺寸
                this.computeTabsContentStyle()
//                this.computeTabsContentWrapStyle()

                // 激活当前选中的Highlight
                if (this.tabsHighlight) {
                    this.tabHighlightSelect(this.selectedIndex)
                }

                this.isInit = true
            },

            /**
             * 计算tabs-content的样式
             * 因为这部分首一下因素影响：fullscreen、Header，Footer
             * @private
             * */
            computeTabsContentStyle () {
//        let _styleType = 'margin'
                let headerBarHeight = 0
                let footerBarHeight = 0
                let computedStyle
                let children = this.$parent.$children
                let ele
                let tagName

                children.forEach((child) => {
                    ele = child.$el
                    tagName = child.$options._componentTag.toLowerCase()
                    if (tagName === 'header') {
                        // this.headerElement = ele
                        computedStyle = window.getComputedStyle(ele)
                        headerBarHeight = parsePxUnit(computedStyle.height)
                    } else if (tagName === 'footer') {
                        // this.footerElement = ele
                        computedStyle = window.getComputedStyle(ele)
                        footerBarHeight = parsePxUnit(computedStyle.height)
                    }
                })

                if (headerBarHeight > 0) {
                    this.tabsContentElement.style.marginTop = headerBarHeight + 'px'
                }
                if (footerBarHeight > 0) {
                    this.tabsContentElement.style.marginBottom = footerBarHeight + 'px'
                }
            },

            /**
             * 计算stabs-content-wrap的样式
             * 这部分的因素影响：tabbar的位置及高度
             * @private
             * */
            computeTabsContentWrapStyle () {
//                let tabBarHeight = window.getComputedStyle(this.tabbarElement).height
//                tabBarHeight = parsePxUnit(tabBarHeight)
//                let _styleType = 'margin' + firstUpperCase(this.tabsPlacement)
//                if (tabBarHeight > 0) {
//                    this.tabsContentWrapElement.style[_styleType] = tabBarHeight + 'px'
//                }
                this.setTabbarPosition(this.tabsPlacement)
            },

            /**
             * 给TabBar定位
             * @param {string} position - top, bottom
             * @private
             */
            setTabbarPosition (position) {
                position = position && position.toLowerCase()
                if (position === 'bottom') {
                    this.tabbarElement.style.bottom = '0px'
                    this.tabbarElement.style.top = 'auto'
                } else {
                    this.tabbarElement.style.top = '0px'
                    this.tabbarElement.style.bottom = 'auto'
                }
                this.tabbarElement.classList.add('show-tabbar')
            },

            /**
             * 下滑线定位
             * @param {number} index
             * @private
             */
            tabHighlightSelect (index) {
                if (this.mode !== 'md') return
                let _offsetLeft = this.tabElementWidth * index
                let transform = `translate3d(${_offsetLeft}px,0,0) scaleX(${this.tabElementWidth})`
                setElementClass(this.tabHighlightEle, 'animate', true)
                this.tabHighlightEle.style[this.$platform.css.transform] = transform
            }
        },
    }
</script>