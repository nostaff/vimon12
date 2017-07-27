<template>
    <ion-item class="ion-list-header list-header" :color="color" :class="['list-header-'+theme]">
        <slot></slot>
    </ion-item>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import Item from '../item/item.vue'

    export default {
        name: 'ion-list-header',
        mixins: [ThemeMixins],
        components: {
            'ion-item': Item
        }
    }
</script>