<template>
    <ion-item class="ion-item-divider item-divider" :color="color" :class="['list-divider-'+theme]">
        <slot></slot>
    </ion-item>
</template>

<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import Item from '../item/item.vue'

    export default {
        name: 'ion-item-divider',
        mixins: [ThemeMixins],
        components: {
            'ion-item': Item
        }
    }
</script>