<template>
    <div class="ion-page show-page">
        <slot></slot>
    </div>
</template>

<script>
    import channel from '../../utils/channel'

    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-page',
        mixins: [ThemeMixins],

        created() {
            channel.$on('VonicNotification', (data) => {
                $toast.show(data.message);
            })
        },
    }
</script>