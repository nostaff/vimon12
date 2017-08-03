<template>
    <div role="dialog" class="ion-action-sheet" :class="['action-sheet-'+theme]" style="z-index: 10001;">
            <ion-backdrop @click.native="close(-1)" ref="backdrop" v-show="activated"></ion-backdrop>
        </transition>
        <transition name="ion-action-sheet-fadeup">
            <div class="action-sheet-wrapper" v-show="activated">
                <div class="action-sheet-container">
                    <div class="action-sheet-group">
                        <div class="action-sheet-title" v-text="title"></div>
                        <ion-button role="action-sheet-button" key="idx" v-for="(button, index) in buttons" :class="'action-sheet-'+ (button.role ? button.role : 'default')" @click.native="close(index)">
                            <ion-icon class="action-sheet-icon icon" :name="button.icon" v-if="button.icon"></ion-icon>
                            {{button.text}}
                        </ion-button>
                    </div>
                    <div class="action-sheet-group">
                        <ion-button role="action-sheet-button" class="action-sheet-cancel" @click.native="close(-1)">
                            <ion-icon class="action-sheet-icon icon" :name="cancelIcon" v-if="cancelIcon"></ion-icon>
                            {{cancelText}}
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
    import IonBackdrop from "../../components/backdrop/index";
    import IonButton from "../../components/button/index";
    import IonIcon from "../../components/icon/index";
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
                    buttons: {},
                    buttonClicked: null
                },
                buttons: [],
                buttonClicked: null,
                cancelText: 'Cancel',
                cancelIcon: 'ion-android-close',
                cancelClicked: null,
                activated: false,
            }
        },

        methods: {
            show(options) {
                let _options = objectAssign({}, this.defaultOptions, options)
                this.title = _options.title;
                this.buttonClicked = _options.buttonClicked;
                let that = this
                this.buttons = _options.buttons.filter(function (button) {
                    if (button.role == 'cancel') {
                        that.cancelText = button.text
                        that.cancelIcon = button.icon
                        that.cancelClicked = button.handler
                        return null;
                    }
                    return button;
                })

                this.activated = true;
            },

            close(buttonIndex) {
                this.activated = false;

                if (buttonIndex == -1 && typeof this.cancelClicked === 'function') {
                    this.cancelClicked();
                }
                if (buttonIndex > -1) {
                    let handler = this.buttons[buttonIndex].handler;
                    if (handler && typeof handler === 'function') {
                        handler();
                    }
                }

                if (typeof this.buttonClicked === 'function') {
                    this.buttonClicked(buttonIndex);
                }

                setTimeout(() => {
                    this.$el.remove();
                }, 400);
            },
        }
    };
</script>

<style lang="scss">
    @import './action-sheet.scss';
    @import './action-sheet.ios.scss';
    @import './action-sheet.md.scss';
    @import './action-sheet.wp.scss';
</style>