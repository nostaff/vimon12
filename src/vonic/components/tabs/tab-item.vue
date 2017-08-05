<template>
    <div class="toolbar" :class="['toolbar-'+theme, colorClass]">
        <div class="toolbar-background" :class="['toolbar-background-'+theme]"></div>
        <slot name="left-item"></slot>
        <slot name="right-item"></slot>
        <div class="toolbar-content" :class="['toolbar-content-'+theme]">
            <slot></slot>
        </div>


        <ion-icon *ngIf="tab.tabIcon" [name]="tab.tabIcon" [isActive]="tab.isSelected" class="tab-button-icon"></ion-icon>
        <span *ngIf="tab.tabTitle" class="tab-button-text">{{tab.tabTitle}}</span>
        <ion-badge *ngIf="tab.tabBadge" class="tab-badge" [color]="tab.tabBadgeStyle">{{tab.tabBadge}}</ion-badge>
        <div class="button-effect"></div>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-tab-item',
        mixins: [ThemeMixins],
        data() {
            return {
                componentName: 'ionToolbar'
            };
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