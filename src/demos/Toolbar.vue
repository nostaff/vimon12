<template>
    <ion-page v-nav="{title: '工具条', showBackButton: true}">
            <ion-content>
            <!--<ion-header>-->
                <!--<ion-navbar :color="theme">-->
                    <!--<ion-button icon-only slot="left-item">-->
                        <!--<ion-icon name="menu"></ion-icon>-->
                    <!--</ion-button>-->

                    <!--<ion-title>-->
                        <!--Page Title-->
                    <!--</ion-title>-->

                    <!--<ion-buttons slot="right-item">-->
                        <!--<ion-button icon-only>-->
                            <!--<ion-icon name="options"></ion-icon>-->
                        <!--</ion-button>-->
                    <!--</ion-buttons>-->
                <!--</ion-navbar>-->
            <!--</ion-header>-->


                <ion-toolbar :color="theme">
                    <ion-button icon-only slot="left-item">
                        <ion-icon name="menu"></ion-icon>
                    </ion-button>

                    <ion-title>
                        Page Title
                    </ion-title>

                    <ion-buttons slot="right-item">
                        <ion-button icon-only>
                            <ion-icon name="options"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>

                <ion-toolbar>
                    <ion-title>Scrolls with the content</ion-title>
                </ion-toolbar>

                <ion-toolbar color="primary">
                    <ion-title>Toolbar</ion-title>
                </ion-toolbar>


                <ion-toolbar color="secondary">
                    <ion-title>Toolbar</ion-title>
                </ion-toolbar>

                <ion-toolbar color="danger">
                    <ion-title>Toolbar</ion-title>
                </ion-toolbar>


                <ion-toolbar color="dark">
                    <ion-title>Toolbar</ion-title>
                </ion-toolbar>


                <ion-toolbar>
                    <ion-button icon-only slot="left-item">
                        <ion-icon name="menu"></ion-icon>
                    </ion-button>

                    <ion-title>
                        Page Title
                    </ion-title>

                    <ion-buttons slot="right-item">
                        <ion-button icon-only>
                            <ion-icon name="options"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>

                <ion-toolbar>
                    <ion-button icon-only outline slot="left-item">
                        <ion-icon name="contact"></ion-icon>
                    </ion-button>

                    <ion-title>
                        Page Title
                    </ion-title>

                    <ion-buttons slot="right-item">
                        <ion-button outline icon-end color="secondary">
                            Help
                            <ion-icon name="help-circle"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>

                <div style="height: 20px;"></div>

                <ion-radio :options="themes" v-model="theme"></ion-radio>

            </ion-content>


            <ion-footer>

                <ion-toolbar>
                    <ion-title>I'm a footer</ion-title>
                </ion-toolbar>

            </ion-footer>

            <!--<von-header :theme="theme">-->
                <!--<button class="button button-icon ion-ios-arrow-back" slot="left" @click="$router.back('/demo')"></button>-->
                <!--<span slot="title">标题文字</span>-->
                <!--<button class="button button-icon ion-navicon" slot="right"></button>-->
            <!--</von-header>-->

    </ion-page>
</template>
<script>
    import IonToolbar from "../vonic/components/toolbar/toolbar";
    export default {
        components: {IonToolbar},
        data() {
            return {
                themes: [
                    'primary',
                    'secondary',
                    'danger',
                    'light',
                    'dark',
                    'energized',
                    'assertive',
                    'royal',
                    'positive'
                ],
                theme: 'light'
            }
        }
    }
</script>
