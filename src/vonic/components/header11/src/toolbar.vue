<template>
    <nav class="ion-navbar ion-toolbar toolbar " :class="['toolbar-'+theme,colorClass]">
        <div class="toolbar-background " :class="['toolbar-background-'+theme]"></div>
        <slot name="buttons"></slot>
        <div class="toolbar-content " :class="['toolbar-content-'+theme]">
            <slot></slot>
        </div>
    </nav>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-toolbar',
        mixins: [ThemeMixins],
        computed: {
            colorClass: function() {
                switch (this.color) {
                    case 'default':
                        return '';
                    default:
                        return `toolbar-${this.theme}-${this.color}`;
                }
            }
        }
    }
</script>
<style lang="scss">
    @import './toolbar.scss';
    @import './toolbar.ios.scss';
    @import './toolbar.md.scss';
    @import './toolbar.wp.scss';
</style>