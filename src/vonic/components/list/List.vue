<template>
    <div class="ion-list" :class="['list-'+theme]">
        <slot></slot>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-list',
        mixins: [ThemeMixins]
    }
</script>