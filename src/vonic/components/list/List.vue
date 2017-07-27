<template>
    <div class="ion-list" :class="['list-'+theme]">
        <ion-item class="ion-list-header list-header" :color="color" :class="['list-header-'+theme]" v-if="title">
            {{title}}
        </ion-item>
        <slot></slot>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import Item from '../item/item.vue'

    export default {
        name: 'ion-list',
        mixins: [ThemeMixins],
        components: {
            'ion-item': Item
        }
    }
</script>