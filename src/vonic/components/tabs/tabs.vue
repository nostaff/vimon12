<template>
    <div class="ion-tabs tabs"
         :class="['tabs-'+theme, colorClass]"
         :color="color"
    >
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
        computed: {
            colorClass: function() {
                switch (this.color) {
                    case 'default':
                        return '';
                    default:
                        return `tabs-${this.theme}-${this.color}`;
                }
            }
        }
    }
</script>