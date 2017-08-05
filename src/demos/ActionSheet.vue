<template>
    <ion-page v-nav="{title: '操作列表', showBackButton: true}">
        <ion-content>
            <div class="padding scroll-content action-sheets-basic-page">
                <ion-button block @click.native="normal()">点击背景关闭</ion-button>
                <p></p>
                <ion-button block color="secondary" @click.native="disableBackdrop()">背景不可点击</ion-button>

                <span>根据浏览器自动变换样式</span>
            </div>

        </ion-content>
    </ion-page>
</template>
<script>
    const is_md = /Android/.test(navigator.userAgent)

    const buttonItems = [
        {
            text: 'Delete',
            role: 'destructive',
            icon: is_md ? 'ion-trash-b' : null,
            handler: () => {
                console.log('Delete clicked');
            }
        },
        {
            text: 'Share',
            icon: is_md ? 'ion-android-share' : null,
            handler: () => {
                console.log('Share clicked');
            }
        },
        {
            text: 'Play',
            icon: is_md ? 'ion-android-arrow-dropright-circle' : null,
            handler: () => {
                console.log('Play clicked');
            }
        },
        {
            text: 'Favorite',
            icon: is_md ? 'ion-android-heart-outline' : null,
            handler: () => {
                console.log('Favorite clicked');
            }
        },
        {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: is_md ? 'ion-android-close' : null,
            handler: () => {
                console.log('Cancel clicked');
            }
        }
    ];

    export default {
        methods: {
            normal() {
                $actionSheet.show({
                    title: '标题',
                    cssClass: 'a b',
                    buttons: buttonItems
                }).then((res) => {
                    console.log('button clicked: ', res)
                });
            },
            disableBackdrop() {
                $actionSheet.show({
                    title: '标题',
                    buttons: buttonItems,
                    enableBackdropDismiss: false
                });
            }

        }
    }
</script>

<style>

    .action-sheets-basic-page .ion-android-share {
        color: #ED4248
    }

    .action-sheets-basic-page .ion-android-arrow-dropright-circle {
        color: #508AE4
    }

    .action-sheets-basic-page .ion-android-heart-outline {
        color: #31D55F
    }

    .action-sheets-basic-page .action-sheet-cancel.icon, .action-sheets-basic-page .action-sheet-destructive.icon {
        color: #757575
    }

</style>
