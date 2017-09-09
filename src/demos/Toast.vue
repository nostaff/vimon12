<template>
    <ion-page v-nav="{title: 'Toast', showBackButton: true}">

        <ion-content padding>

            <ion-button block @click.native="showToast('bottom')">Show Toast Bottom Position</ion-button>
            <ion-button block @click.native="showToast('top')">Show Toast Top Position</ion-button>
            <ion-button block @click.native="showToast('middle')">Show Toast Middle Position</ion-button>
            <ion-button block margin-bottom @click.native="showLongToast()">Show Long Toast</ion-button>

            <ion-button block @click.native="showDismissDurationToast()">Show Custom Duration Toast</ion-button>
            <ion-button block @click.native="showToastWithCloseButton()">Show Close Button Toast</ion-button>

        </ion-content>
    </ion-page>
</template>
<script>
    export default {
        created() {
        },

        mounted() {
        },

        methods: {
            showToast(position) {
                $toast.show({
                    message: 'Top was added successfully',
                    duration: 3000,
                    position: position,
                    dismissOnPageChange: true,
                    onDismiss () {
                        console.debug('Toast onDidDismiss()')
                    }
                });
            },

            showLongToast() {
                $toast.show({
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
                    duration: 3000,
                    onDismiss () {
                        console.debug('Toast onDidDismiss()')
                    }
                });
            },

            showDismissDurationToast() {
                $toast.show({
                    message: 'I am dismissed after 1.5 seconds',
                    duration: 1500,
                    onDismiss () {
                        console.debug('Toast onDidDismiss()')
                    }
                });
            },

            showToastWithCloseButton() {
                $toast.show({
                    message: 'Your internet connection appears to be offline. Data integrity is not guaranteed.',
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    onDismiss () {
                        console.debug('Toast onDidDismiss()')
                    }
                });
            }
        }
    }
</script>
