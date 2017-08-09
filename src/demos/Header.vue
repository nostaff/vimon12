<template>
    <ion-page v-nav="{hideNavbar: true}">
        <ion-navbar title="页面标题" :color="theme" :showBack="true" :showMore="true"></ion-navbar>

        <ion-content>

            <div style="height: 20px;"></div>

            <ion-radio :options="themes" v-model="theme"></ion-radio>

        </ion-content>
    </ion-page>
</template>
<script>
    export default {
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
