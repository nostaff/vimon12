<template>
    <a class="tab-button" @click="tabClickHandler($event)"
       :id="tabId"
       :class="{
           'has-title':hasTitle,
           'has-icon':hasIcon,
           'has-title-only':hasTitleOnly,
           'icon-only':hasIconOnly,
           'has-badge':hasBadge,
           'tab-disabled':isDisabled,
           'tab-hidden':isHidden,
           'tab-active':isActive,
           'aria-selected':isSelected
       }">
        <ion-icon v-if="tabIcon" :name="tabIcon" :isActive="isActive" class="tab-button-icon"></ion-icon>
        <span v-if="tabTitle" class="tab-button-text">{{tabTitle}}</span>
        <ion-badge v-if="tabBadge" class="tab-badge" :color="tabBadgeStyle">{{tabBadge}}</ion-badge>
    </a>
</template>
<script type="text/javascript">
    import { isTrueProperty } from '../../utils/utils';
    import ThemeMixins from '../../themes/theme.mixins';
    import IonIcon from '../icon';
    import IonBadge from '../badge';
    let _tabId = -1
    export default{
        name: 'ion-tab',
        mixins: [ThemeMixins],
        components: {
            IonIcon,
            IonBadge
        },
        props: {
            to: {
                type: Object,
                required: true
            },
            tabTitle: String,
            tabIcon: String,
            tabBadge: String,
            tabBadgeStyle: String,
            disabled: {
                type: [Boolean, String],
                default: false
            },
            hidden: {
                type: [Boolean, String],
                default: false
            },
            selected: {
                type: [Boolean, String],
                default: false
            }
        },
        data () {
            return {
                index: ++_tabId,
                isActive: false, // 这个值具有滞后性, 只代表当前的页面的状态, 不能用于其他

                isHidden: isTrueProperty(this.hidden),
                isDisabled: isTrueProperty(this.disabled),
                isSelected: isTrueProperty(this.selected),
            }
        },
        computed: {
            hasTitle () {
                return this.tabTitle
            },
            tabId () {
                return `tabId-${this.index}`
            },
            hasIcon () {
                return this.tabIcon
            },
            hasTitleOnly () {
                return this.tabTitle && !this.tabIcon
            },
            hasIconOnly () {
                return this.tabIcon && !this.tabTitle
            },
            hasBadge () {
                return this.tabBadge
            }
        },
        watch: {
            $route () {
                console.log('$route change')
                this.refreshMatchState()
            }
        },
        created () {
            this.refreshMatchState()
            console.assert(this.$parent.$data.componentName === 'ionTabs', 'Tab component must combine with Tabs')
        },
        methods: {
            isMatch () {
                return this.to.name === this.$route.name || this.to.path === this.$route.path
            },
            tabClickHandler () {
                if (!this.isDisabled) {
                    this.$router.replace(this.to)
                    this.$emit('onTabSelect', this)
                }
            },
            refreshMatchState () {
                this.isActive = this.isMatch()
            }
        }

    }
</script>
