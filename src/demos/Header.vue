<template>
    <ion-page v-nav="{hideNavbar: true}">
        <ion-content>
            <von-header :theme="theme">
                <button class="button button-icon ion-ios-arrow-back" slot="left" @click="$router.back('/demo')"></button>
                <span slot="title">标题文字</span>
                <button class="button button-icon ion-navicon" slot="right"></button>
            </von-header>

            <div style="height: 20px;"></div>

            <ion-radio :options="themes" v-model="theme"></ion-radio>

        </ion-content>
    </ion-page>
</template>
<script>
    import IonPage from "../vonic/components/page/page";
    import IonContent from "../vonic/components/content/index";
    export default {
        components: {
            IonContent,
            IonPage},
        data() {
            return {
                themes: [
                    'light',
                    'stable',
                    'positive',
                    'calm',
                    'balanced',
                    'energized',
                    'assertive',
                    'dark'
                ],
                theme: 'light'
            }
        }
    }
</script>
