<template>
    <div class="ion-list-header list-header item" :class="['item-'+theme, 'list-header-'+theme]">
        <div class="item-inner">
            <div class="input-wrapper">
                <ion-label ref="label" :color="color">
                    <slot></slot>
                </ion-label>
            </div>
            <slot name="item-end"></slot>
        </div>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';

    export default {
        name: 'ion-list-header',
        mixins: [ThemeMixins],

        data() {
            return {
                componentName: 'ionItem'
            };
        },

        mounted () {
            if (this.$slots['item-end']) {
                this.$slots['item-end'][0].elm.setAttribute('item-end', '')
            }
        },
    }
</script>