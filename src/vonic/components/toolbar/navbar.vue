<template>
    <header class="ion-header header" :class="['header-'+theme]">
        <div class="ion-navbar toolbar" :class="['toolbar-'+theme, colorClass]">
            <div class="toolbar-background" :class="['toolbar-background-'+theme]"></div>
            <slot name="left-item">
                <ion-button role="bar-button" :class="['back-button','back-button-'+theme,'show-back-button']" :icon-only="!backText" @click.native="onBackClick($event)" v-if="showBack">
                    <ion-icon :class="['back-button-icon','back-button-icon-'+theme]" :name="backIcon" v-if="backIcon"></ion-icon>
                    <span :class="['back-button-text','back-button-text-'+theme]" v-if="backText && theme ==='ios'" v-text="backText"></span>
                </ion-button>
            </slot>
            <slot name="right-item">
                <ion-buttons end v-if="showMore">
                    <ion-button :icon-only="!moreText" @click.native="onMoreClick($event)">
                        <ion-icon :class="['more-button-icon','more-button-icon-'+theme]" :name="moreIcon" v-if="moreIcon"></ion-icon>
                        <span :class="['more-button-text','more-button-text-'+theme]" v-if="moreText" v-text="moreText"></span>
                    </ion-button>
                </ion-buttons>
            </slot>
            <div class="toolbar-content" :class="['toolbar-content-'+theme]">
                <slot>
                    <div class="ion-title" :class="['title-'+theme]">
                        <div class="toolbar-title" :class="['toolbar-title-'+theme]"><span v-text="title"></span></div>
                    </div>
                </slot>
            </div>
        </div>
    </header>
</template>

<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-navbar',
        mixins: [ThemeMixins],
        data() {
            return {
                componentName: 'ionToolbar'
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

            showMore: {
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
                this.$slots['left-item'][0].elm.setAttribute('start', '')
            }
            if (this.$slots['right-item']) {
                this.$slots['right-item'][0].elm.setAttribute('end', '')
            }
        },
        methods: {
            onBackClick(ev) {
                ev.preventDefault();
                ev.stopPropagation();

                if (this.onBack) {
                    this.onBack()
                    return
                }

                let root = document.querySelector('.ion-app')
                if (root) root.setAttribute('transition-direction', 'back');
                history.go(-1)
            },
            onMoreClick(ev) {
                ev.preventDefault();
                ev.stopPropagation();

                if (this.onMenu) {
                    this.onMenu()
                }
            },
        }
    }
</script>