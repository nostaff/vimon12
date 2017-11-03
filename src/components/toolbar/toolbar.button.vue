<template>
    <div class="ion-buttons bar-buttons" :class="['bar-buttons-'+theme]">
        <slot></slot>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-buttons',
        mixins: [ThemeMixins],
        data() {
            return {
                componentName: 'ionButtons'
            };
        },
    }
</script>