<template>
    <div class="ion-list" :class="['list-'+theme]">
        <ion-list-header :color="color" v-if="title">{{title}}</ion-list-header>
        <slot></slot>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import IonListHeader from "./list.header";

    export default {
        name: 'ion-list',
        mixins: [ThemeMixins],
        components: {
            IonListHeader,
        },
    }
</script>