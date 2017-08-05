<template>
    <div class="toolbar" :class="['toolbar-'+theme, colorClass]">
        <div class="toolbar-background" :class="['toolbar-background-'+theme]"></div>
        <slot name="left-item"></slot>
        <slot name="right-item"></slot>
        <div class="toolbar-content" :class="['toolbar-content-'+theme]">
            <slot></slot>
        </div>
    </div>

    <div class="ion-tabs tabs"
         :class="['tabs-'+theme, colorClass]"
         :color="color"
         :selectedindex="selectedindex"
         :tabslayout="tabsLayout"
         :tabsplacement="tabsPlacement"
         :tabshighlight="tabsHighlight"
    >
        <div class="tabbar" role="tablist">
            <a class="tab-button has-title has-icon has-badge disable-hover"
                                                     href="#" role="tab" id="tab-t3-0" aria-controls="tabpanel-t3-0"
                                                     aria-selected="false">
            <ion-icon class="tab-button-icon icon icon-ios ion-ios-call-outline" role="img"
                      aria-label="call outline"></ion-icon><span class="tab-button-text">Recents</span>
            <ion-badge class="tab-badge badge badge-ios badge-ios-light">47</ion-badge>
            <div class="button-effect"></div>
        </a>
            <a class="tab-button has-title has-icon disable-hover" href="#" role="tab" id="tab-t3-1"
               aria-controls="tabpanel-t3-1" aria-selected="true">
            <ion-icon class="tab-button-icon icon icon-ios ion-ios-heart" role="img" aria-label="heart"></ion-icon>
            <span class="tab-button-text">Favorites</span>
            <div class="button-effect"></div>
        </a><a class="tab-button has-title has-icon disable-hover" href="#" role="tab" id="tab-t3-2"
               aria-controls="tabpanel-t3-2" aria-selected="false">
            <ion-icon class="tab-button-icon icon icon-ios ion-ios-settings-outline" role="img"
                      aria-label="settings outline"></ion-icon><span class="tab-button-text">Settings</span>

            <div class="button-effect"></div>
        </a>
            <div class="tab-highlight"></div>
        </div>
        <ion-tab role="tabpanel" tabbadge="47" tabbadgestyle="light" tabicon="call" tabtitle="Recents"
                 id="tabpanel-t3-0" aria-labelledby="tab-t3-0" aria-hidden="true">
            <div></div>
            <div class="nav-decor"></div>
        </ion-tab>
        <ion-tab role="tabpanel" tabicon="heart" tabtitle="Favorites" id="tabpanel-t3-1" aria-labelledby="tab-t3-1"
                 class="show-tab" aria-hidden="false">
            <div></div>
            <tab-page class="ion-page show-page" style="z-index: 100;">
                <div>johnny utah</div>
            </tab-page>
            <div class="nav-decor"></div>
        </ion-tab>
        <ion-tab role="tabpanel" tabicon="settings" tabtitle="Settings" id="tabpanel-t3-2" aria-labelledby="tab-t3-2"
                 aria-hidden="true">
            <div></div>
            <div class="nav-decor"></div>
        </ion-tab>
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