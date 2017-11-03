<template>
    <div class="ion-card-header" :class="[themeClass,colorClass]">
        <slot></slot>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';

    export default {
        name: 'ion-card-header',
        mixins: [ThemeMixins],
        data () {
            return {
                roleName: 'card-header',
            }
        }
    }
</script>