<template>
    <div class="page has-navbar" v-nav="{title: '操作列表', showBackButton: true}">
        <div class="page-content">
            <div class="padding-top scroll-content action-sheets-basic-page">
                <ion-button block @click.native="showActionSheet()">Show Action Sheet</ion-button>

                <span>根据浏览器自动变换样式</span>
            </div>

        </div>
    </div>
</template>
<script>
    const is_md = /Android/.test(navigator.userAgent)

    export default {
        methods: {
            showActionSheet() {
                $actionSheet.show({
                    title: '标题',
                    buttonClicked: function (itemIndex) {
                        console.log(itemIndex)
                    },
                    buttons: [
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
                    ]
                })
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
