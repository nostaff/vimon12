<template>
    <ion-page v-nav="{title: '对话框', showBackButton: true}">
        <ion-content class="padding-top">

            <ion-list title="对话框">
                <ion-item is-link @click.native="showAlert()">
                    Alert <ion-note slot="item-right">提示框</ion-note>
                </ion-item>
                <ion-item is-link @click.native="showAlert2()">
                    Alert <ion-note slot="item-right">多个按钮提示框</ion-note>
                </ion-item>
                <ion-item is-link @click.native="showConfirm()">
                    Confirm <ion-note slot="item-right">确认框</ion-note>
                </ion-item>
                <ion-item is-link @click.native="showPrompt()">
                    Prompt <ion-note slot="item-right">带文本输入的提示框</ion-note>
                </ion-item>
                <ion-item is-link @click.native="showRadio()">
                    Alert Radio <ion-note slot="item-right">带单选框的提示框</ion-note>
                </ion-item>
                <ion-item is-link @click.native="showCheckbox()">
                    Alert Chekckbox <ion-note slot="item-right">带复选框的提示框</ion-note>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
<script>
    import IonNote from "../vonic/components/note/index";
    export default {
        components: {IonNote},
        methods: {
            showAlert() {
                $dialog.alert({
                    title: 'New Friend!',
                    message: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
                    buttons: [
                        {
                            text: '确定',
                            handler: () => {
                                console.log('OK clicked');
                            }
                        }
                    ]
                }).then((res) => {
                    console.log('alert hide.', res)
                })
            },

            showAlert2() {
                $dialog.alert({
                    title: 'New Friend!',
                    message: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
                    buttons: [
                        {
                            text: 'OK',
                            handler: () => {
                                console.log('OK clicked');
                            }
                        },
                        {text: 'OK2'},
                        {text: 'OK3'},
                    ]
                }).then((res) => {
                    console.log('alert hide.', res)
                })
            },

            showConfirm() {
                $dialog.confirm({
                    title: '在"微信"中打开链接吗?',
                    message: '即将启动"微信",并在微信中打开连接',
                    buttons: [
                        {text: '取消'},
                        {
                            text: '打开',
                            handler: () => {
                                console.log('OK clicked');
                            }
                        },

                    ]
                }).then((res) => {
                    console.log('confirm result: ', res)
                })
            },

            showPrompt() {
                $dialog.prompt({
                    title: 'Login',
                    message: "Enter a name for this new album you're so keen on adding",
                    inputs: [
                        {
                            name: 'title',
                            placeholder: 'Title',
                            value: 'valjue1'
                        },
                        {
                            name: 'title1',
                            placeholder: 'Title'
                        },
                    ],
                    buttons: [
                        {
                            text: 'Cancel',
                            handler: data => {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Save',
                            handler: data => {
                                console.log('Saved clicked', data);
                            }
                        }
                    ]
                }).then((data) => {
                    console.log('alert hide.', data)
                })
            },

            showRadio() {
                $dialog.radio({
                    title: 'Login',
                    inputs: [
                        {
                            label: 'title',
                            value: 'valjue1'
                        },
                        {
                            label: 'title1',
                            value: 'Title'
                        },
                        {
                            label: 'title33',
                            value: 'valjue133',
                            checked: 'false'
                        },
                        {
                            label: 'title133',
                            value: 'Title333'
                        },
                    ],
                    buttons: [
                        {
                            text: 'Cancel',
                            handler: data => {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Save',
                            handler: data => {
                                console.log('Saved clicked', data);
                            }
                        }
                    ]
                }).then((data) => {
                    console.log('alert hide.', data)
                })
            },

            showCheckbox() {
                $dialog.checkbox({
                    title: 'Login',
                    inputs: [
                        {
                            label: 'title',
                            value: 'valjue1',
                            checked: true
                        },
                        {
                            label: 'title1',
                            value: 'Title'
                        },
                        {
                            label: 'title33',
                            value: 'valjue133',
                            checked: 'true'
                        },
                        {
                            label: 'title133',
                            value: 'Title333'
                        },
                    ],
                    buttons: [
                        {
                            text: 'Cancel',
                            handler: data => {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Save',
                            handler: data => {
                                console.log('Saved clicked', data);
                            }
                        }
                    ]
                }).then((data) => {
                    console.log('alert hide.', data)
                })
            },

            multiMode() {
                let options = {
                    theme: 'ios',
                    title: '测试',
                    okText: '好'
                }

                for (let i = 0; i < 3; i++) {
                    setTimeout(() => {
                        options.content = `第${i+1}条消息`
                        $dialog.alert(options)
                    }, 500 * i)
                }
            }
        }
    }
</script>
