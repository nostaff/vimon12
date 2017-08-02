<template>
    <div role="dialog" class="ion-action-sheet" :class="['action-sheet-'+theme]" style="z-index: 10001;">
        <ion-backdrop @click.native="hide(-1)" ref="backdrop"></ion-backdrop>
        <transition name="ion-action-sheet-fadeup" v-on:before-enter="beforePageEnter">
            <div class="action-sheet-wrapper">
                <div class="action-sheet-container">
                    <div class="action-sheet-group">
                        <div class="action-sheet-title" v-text="title"></div>
                        <ion-button role="action-sheet-button" v-for="(button, index) in buttons" :class="'action-sheet-'+ (button.role ? button.role : 'default')" @click.native="hide(index)">
                            <ion-icon class="action-sheet-icon icon" :name="button.icon" v-if="button.icon"></ion-icon>
                            {{button.text}}
                        </ion-button>
                    </div>
                    <div class="action-sheet-group">
                        <ion-button role="action-sheet-button" class="action-sheet-cancel" @click.native="hide(-1)">
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
                },
                buttons: [],
                cancelText: 'Cancel',
                cancelIcon: 'ion-android-close',
                activated: 0
            }
        },

        methods: {
            show(options) {
                let _options = objectAssign({}, this.defaultOptions, options)
                this.title = _options.title
                let that = this
                this.buttons = _options.buttons.filter(function (button) {
                    if (button.role == 'cancel') {
                        that.cancelText = button.text
                        that.cancelIcon = button.icon
                        return ''
                    }
                    return button
                })

                this.activated = true

                this.$refs.backdrop.setStyle('opacity', '0.4');
            },

            hide(buttonIndex) {
                this.activated = false

                if (buttonIndex > -1) {
                    let handler = this.buttons[buttonIndex].handler;
                    if (handler && typeof handler === 'function') {
                        handler();
                    }
                }

                setTimeout(() => {
                    this.$refs.backdrop.setStyle('opacity', '0.01');
                    this.$el.remove();
                }, 150);
            },

            itemClick(item) {
                if (item.handler && typeof item.handler === 'function') {
                    item.handler();
                }
                this.onClose();
            },

            beforePageEnter(el) {
                 console.log('beforePageEnter time:', +new Date())
            }
        }
    };
</script>

<style lang="scss">
    @import './action-sheet.scss';
    @import './action-sheet.ios.scss';
    @import './action-sheet.md.scss';
    @import './action-sheet.wp.scss';

    .ion-action-sheet-fadeup-enter-active {
            transition: transform .4s cubic-bezier(.36, .66, .04, 1);
            transform: translate3d(0, 0, 0);
    }

    .ion-action-sheet-fadeup-leave-active {
            transition: transform .3s cubic-bezier(.36, .66, .04, 1);
            transform: translate3d(0, 100%, 0);
    }

    .ion-action-sheet-fadeup-enter,
    .ion-action-sheet-fadeup-leave-to {
            transform: translate3d(0, 100%, 0);
    }
</style>