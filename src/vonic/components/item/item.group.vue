<template>
    <section class="ion-item-group">
        <ion-item-divider :color="color" v-if="title">
            {{title}}
        </ion-item-divider>
        <slot></slot>
    </section>
</template>
<script>

    import ThemeMixins from '../../themes/theme.mixins';
    import Item from '../item/item.divider.vue'

    export default {
        name: 'ion-item-group',
        mixins: [ThemeMixins],
        components: {
            'ion-item-divider': Item
        }
    }

</script>