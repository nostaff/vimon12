<template>
    <ion-header v-show="activated">
        <ion-toolbar class="ion-navbar">
            <ion-buttons slot="left-item" v-if="showBack">
                <ion-button :class="['back-button','back-button-'+theme,'show-back-button']" :icon-only="!backText" @click.native="onBackClick">
                    <ion-icon :class="['back-button-icon','back-button-icon-'+theme]" :name="backIcon" v-if="backIcon"></ion-icon>
                    <span :class="['back-button-text','back-button-text-'+theme]" v-if="backText && theme ==='ios'" v-text="backText"></span>
                </ion-button>
            </ion-buttons>
            <ion-buttons slot="right-item" v-if="showMenu">
                <ion-button :icon-only="!moreText" @click.native="onMenuClick">
                    <ion-icon :class="['more-button-icon','more-button-icon-'+theme]" :name="moreIcon" v-if="moreIcon"></ion-icon>
                    <span :class="['more-button-text','more-button-text-'+theme]" v-if="moreText" v-text="moreText"></span>
                </ion-button>
            </ion-buttons>
            <ion-title>{{title}}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-nav',
        mixins: [ThemeMixins],
        data() {
            return {
                componentName: 'ionToolbar',
                activated: true
            };
        },
        props: {
            showBack: {
                type: Boolean,
                default: false
            },
            backIcon: {
                type: String,
                default: 'arrow-back'
            },
            backText: {
                type: String,
                default: 'Back'
            },
            onBack: Function,

            showMenu: {
                type: Boolean,
                default: false
            },
            moreIcon: {
                type: String,
                default: 'more'
            },
            moreText: {
                type: String,
                default: ''
            },
            onMenu: Function,
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
                this.$slots['left-item'].forEach(function (item) {
                    item.elm.setAttribute('start', '')
                })
            }
            if (this.$slots['right-item']) {
                this.$slots['right-item'].forEach(function (item) {
                    item.elm.setAttribute('end', '')
                })
            }
        },
        methods: {
            onBackClick(ev) {
                ev.preventDefault();
                ev.stopPropagation();

                if (this.onBack) {
                    return this.onBack(ev)
                }

                let root = document.querySelector('.ion-app')
                if (root) root.setAttribute('transition-direction', 'back');
                history.go(-1)
            },
            onMenuClick(ev) {
                ev.preventDefault();
                ev.stopPropagation();

                if (this.onMenu) {
                    this.onMenu(ev)
                }
            },
        }
    }
</script>


<style lang="scss">
    @import '../toolbar/toolbar.button';
    @import '../toolbar/toolbar';
    @import '../toolbar/toolbar.ios';
    @import '../toolbar/toolbar.md';
    @import '../toolbar/toolbar.wp';
</style>