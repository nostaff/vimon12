<template>
    <span class="ion-badge" :class="['badge-'+theme, 'badge-'+theme+'-'+color]">
        <slot></slot>
    </span>
</template>

<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import Item from '../item/item.vue'

    export default {
        name: 'ion-badge',
        mixins: [ThemeMixins],
        components: {
            'ion-item': Item
        }
    }
</script>

<style lang="scss">
    @import 'badge';
    @import 'badge.ios';
    @import 'badge.md';
    @import 'badge.wp';
</style>
