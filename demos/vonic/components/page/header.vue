<template>
    <div class="ion-header header" :class="['header-'+theme]">
        <slot></slot>
    </div>
</template>

<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-header',
        mixins: [ThemeMixins]
    }
</script>