<template>
    <div class="ion-tab" role="tabpanel" :tabicon="tabIcon" :tabtitle="tabTitle" aria-hidden="true">
        <slot></slot>
        <div class="nav-decor"></div>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-tab',
        mixins: [ThemeMixins],
        data() {
            return {
                componentName: 'ionTab',
                isSelected: false
            };
        },
        props: {
            enabled: {
                type: Boolean,
                default: true
            },
            show: {
                type: Boolean,
                default: true
            },
            tabTitle: {
                type: [String, number],
                default: 0
            },
            tabIcon: {
                type: Boolean,
                default: false
            },
            root: {
                type: String,
                default: 'icon-top'      // icon-top, icon-start, icon-end, icon-bottom, icon-hide, title-hide
            },
            rootParams: {
                type: String,
                default: 'bottom'       //top, bottom.
            },
            tabBadge: {
                type: [String, number],
                default: 0
            },
            tabBadgeStyle: {
                type: String,
                default: 'default'       //top, bottom.
            },
        },
        computed: {
            colorClass: function() {
                switch (this.color) {
                    case 'default':
                        return '';
                    default:
                        return `toolbar-${this.theme}-${this.color}`;
                }
            }
        },
        mounted () {
            if (this.$slots['left-item']) {
                this.$slots['left-item'][0].elm.setAttribute('start', '')
            }
            if (this.$slots['right-item']) {
                this.$slots['right-item'][0].elm.setAttribute('end', '')
            }
        },
    }
</script>