<template>
    <ion-page>
        <ion-header>
            <ion-navbar showBack="true" :color="theme" title="Page Title"></ion-navbar>
        </ion-header>

        <ion-content>

            <div style="height: 20px;"></div>

            <ion-radio-group :options="themes" v-model="theme"></ion-radio-group>

        </ion-content>

        <ion-footer>

            <ion-toolbar>
                <ion-title>I'm a footer</ion-title>
            </ion-toolbar>

        </ion-footer>
    </ion-page>
</template>
<script>
    export default {
        data() {
            return {
                themes: [
                    'default',
                    'primary',
                    'light',
                    'secondary',
                    'danger',
                    'dark'
                ],
                theme: 'default'
            }
        }
    }
</script>
