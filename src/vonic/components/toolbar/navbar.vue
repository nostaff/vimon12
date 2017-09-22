<template>
    <div class="ion-navbar toolbar" :class="['toolbar-'+theme, colorClass]">
        <div class="toolbar-background" :class="['toolbar-background-'+theme]"></div>
        <ion-button role="bar-button" :class="['back-button','back-button-'+theme,'show-back-button']" :icon-only="!backText" @click.native="onBackClick" v-if="showBack">
            <ion-icon :class="['back-button-icon','back-button-icon-'+theme]" :name="backIcon" v-if="backIcon"></ion-icon>
            <span :class="['back-button-text','back-button-text-'+theme]" v-if="backText && theme ==='ios'" v-text="backText"></span>
        </ion-button>
        <slot name="item-start"></slot>
        <slot name="item-end"></slot>
        <div class="toolbar-content" :class="['toolbar-content-'+theme]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-navbar',
        mixins: [ThemeMixins],
        data() {
            return {
                componentName: 'ionNavbar',
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
            }
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
            if (this.$slots['item-start']) {
                this.$slots['item-start'].forEach(function (item) {
                    item.elm.setAttribute('start', '')
                })
            }
            if (this.$slots['item-end']) {
                this.$slots['item-end'].forEach(function (item) {
                    item.elm.setAttribute('end', '')
                })
            }
        },
        methods: {
            onBackClick(ev) {
                ev.preventDefault();
                ev.stopPropagation();

                let root = document.querySelector('.ion-app')
                if (root) root.setAttribute('transition-direction', 'back');
                history.go(-1)
            }
        }
    }
</script>