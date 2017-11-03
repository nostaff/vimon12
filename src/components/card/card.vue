<template>
    <div class="ion-card" :class="[themeClass, colorClass]">
        <slot></slot>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';

    export default {
        name: 'ion-card',
        mixins: [ThemeMixins],
        data () {
            return {
                roleName: 'card',
            }
        }
    }
</script>