<template>
    <div role="dialog" class="ion-action-sheet" :class="['action-sheet-'+theme, cssClass]" style="z-index: 10001;">
        <ion-backdrop @click.native="bdClick()" :class="{'backdrop-no-tappable':!enableBackdropDismiss}" v-show="activated"></ion-backdrop>
        <transition name="ion-action-sheet-fadeup">
            <div class="action-sheet-wrapper" v-show="activated">
                <div class="action-sheet-container">
                    <div class="action-sheet-group">
                        <div class="action-sheet-title" v-text="title"></div>
                        <ion-button role="action-sheet-button" key="idx" v-for="(button, index) in buttons" :disabled="button.disabled" :class="button.cssClass" @click.native="dismiss(index, button.disabled)">
                            <ion-icon class="action-sheet-icon icon" :name="button.icon" v-if="button.icon"></ion-icon>
                            {{button.text}}
                        </ion-button>
                    </div>
                    <div class="action-sheet-group">
                        <ion-button role="action-sheet-button" class="action-sheet-cancel" :class="cancelButton.cssClass" :disabled="cancelButton.disabled" @click.native="dismiss(-1, cancelButton.disabled)">
                            <ion-icon class="action-sheet-icon icon" :name="cancelButton.icon" v-if="cancelButton.icon"></ion-icon>
                            {{cancelButton.text}}
                        </ion-button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import objectAssign from 'object-assign'
    import ThemeMixins from '../../themes/theme.mixins';
    import IonBackdrop from "../backdrop/index";
    import IonButton from "../button/index";
    import IonIcon from "../icon/index";
    export default {
        name: 'ion-action-sheet',
        mixins: [ThemeMixins],
        components: {
            IonButton,
            IonBackdrop,
            IonIcon
        },
        data() {
            return {
                defaultOptions: {
                    title: '',
                    buttons: [],
                },
                buttons: [],
                enableBackdropDismiss: true,
                cssClass: '',

                cancelButton: {},
                activated: false,
            }
        },

        methods: {
            present(options) {
                let _options = objectAssign({}, this.defaultOptions, options)
                this.title = _options.title;
                if (typeof _options.cssClass === 'string')
                    this.cssClass = _options.cssClass;
                if (typeof _options.enableBackdropDismiss === 'boolean')
                    this.enableBackdropDismiss = _options.enableBackdropDismiss;

                let that = this
                this.buttons = _options.buttons.filter(button => {
                    if (typeof button === 'string') {
                        button = { text: button };
                    }
                    if (!button.cssClass) {
                        button.cssClass = '';
                    }
                    switch (button.role) {
                        case 'cancel':
                            this.cancelButton = button;
                            return null;
                        case 'destructive':
                            button.cssClass = (button.cssClass + ' ' || '') + 'action-sheet-destructive';
                            break;
                        case 'selected':
                            button.cssClass = (button.cssClass + ' ' || '') + 'action-sheet-selected';
                            break;
                    }
                    return button;
                })

                this.activated = true

                return new Promise((resolve, reject) => {
                    this.$on('onDismissEvent', (buttonIndex) => {
                        resolve(buttonIndex)
                    })
                });
            },

            dismiss(buttonIndex, disabled) {
                if (disabled) return;
                this.activated = false;

                if (buttonIndex == -1 && typeof this.cancelButton.handler === 'function') {
                    this.cancelButton.handler();
                }
                if (buttonIndex > -1) {
                    let handler = this.buttons[buttonIndex].handler;
                    if (handler && typeof handler === 'function') {
                        handler();
                    }
                }

                this.$emit('onDismissEvent', buttonIndex)

                setTimeout(() => {
                    this.$el.remove();
                }, 400);
            },

            bdClick () {
                if (this.enableBackdropDismiss) {
                    this.dismiss(-1);
                }
            }
        }
    };
</script>

<style lang="scss">
    @import 'action-sheet';
    @import 'action-sheet.ios';
    @import 'action-sheet.md';
    @import 'action-sheet.wp';
</style>