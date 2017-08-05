<template>
    <div class="ion-tabs tabs"
         :class="['tabs-'+theme, colorClass]"
         :color="color"
         :selectedindex="selectedindex"
         :tabslayout="tabsLayout"
         :tabsplacement="tabsPlacement"
         :tabshighlight="tabsHighlight">
        <slot></slot>
        <div tab-portal=""></div>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-tabs',
        mixins: [ThemeMixins],
        data() {
            return {
                componentName: 'ionTabs'
            };
        },
        props: {
            selectedIndex: {
                type: [String, Number],
                default: 0
            },
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