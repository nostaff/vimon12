<template>
    <ion-app>
        <ion-nav>
            <router-view></router-view>
        </ion-nav>
    </ion-app>
</template>
<script type="text/javascript">
    import IonNav from "../../src/components/nav/nav.vue";

    export default {
        components: {IonNav},
        name: 'app-root',
        mounted () {

        }
    }
</script>
