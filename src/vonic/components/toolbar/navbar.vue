<template>
    <header class="ion-header header" :class="['header-'+theme]">
        <div class="ion-navbar toolbar" :class="['toolbar-'+theme, colorClass]">
            <div class="toolbar-background" :class="['toolbar-background-'+theme]"></div>
            <slot name="left-item"></slot>
            <slot name="right-item"></slot>
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