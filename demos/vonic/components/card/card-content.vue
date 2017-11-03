<template>
    <div class="ion-card-content" :class="[themeClass,colorClass]">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
    import ThemeMixins from '../../themes/theme.mixins';

    export default {
        name: 'ion-card-content',
        mixins: [ThemeMixins],
        data () {
            return {
                roleName: 'card-content',
            }
        }
    }
</script>
