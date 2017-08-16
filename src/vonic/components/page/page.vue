<template>
    <div class="ion-page show-page">
        <slot></slot>
    </div>
</template>

<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-page',
        mixins: [ThemeMixins],

        created() {
            this.$events.$on('VonicNotification', (data) => {
                $toast.show(data.message);
            })
        },
    }
</script>