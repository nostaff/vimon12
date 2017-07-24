<template>
    <div class="alert-backdrop" :class="{'active': state == 1}" @click="hide(-1)">
        <div class="alert-wrapper" style="opacity: 1; transform: scale(1);">
            <div class="alert-head">
                <h2 class="alert-title"  v-text="title"></h2>
            </div>
            <div class="alert-message" v-text="message"></div>
            <div class="alert-button-group">
                <button ion-button="alert-button" class="alert-button alert-button-ios alert-button-default alert-button-default-ios">
                    {{OKText}}
                </button>
            </div>
        </div>

        <div class="alert-wrapper" style="opacity: 1; transform: scale(1);">
            <div class="alert-head"><h2 class="alert-title" id="alert-hdr-12">Login</h2></div>
            <div class="alert-message" id="alert-msg-12">Enter a name for this new album you're so keen on adding</div>

            <div class="alert-input-group">
                <div class="alert-input-wrapper">
                    <input class="alert-input ng-pristine ng-valid ng-touched"
                                                        placeholder="Title" type="text" min="null" max="null"
                                                        id="alert-input-12-0">
                </div>
            </div>

            <div class="alert-button-group">
                <button ion-button="alert-button"
                        class="disable-hover alert-button alert-button-ios alert-button-default alert-button-default-ios">
                    <span class="button-inner">Cancel</span>
                    <div class="button-effect"></div>
                </button>
                <button ion-button="alert-button"
                        class="disable-hover alert-button alert-button-ios alert-button-default alert-button-default-ios">
                    <span class="button-inner">Save</span>
                    <div class="button-effect"></div>
                </button>
            </div>
        </div>


        <div class="alert-wrapper" style="opacity: 1; transform: scale(1);">
            <div class="alert-head"><!----><h2 class="alert-title" id="alert-hdr-14">Use this lightsaber?</h2><!---->
            </div>
            <div class="alert-message" id="alert-msg-14">
                Do you agree to use this lightsaber to do good across the intergalactic galaxy?
            </div><!---->
            <div class="alert-button-group"><!---->
                <button ion-button="alert-button"
                        class="disable-hover alert-button alert-button-ios alert-button-default alert-button-default-ios">
                    <span class="button-inner">Disagree</span>
                    <div class="button-effect"></div>
                </button>
                <button ion-button="alert-button"
                        class="disable-hover alert-button alert-button-ios alert-button-default alert-button-default-ios">
                    <span class="button-inner">Agree</span>
                    <div class="button-effect"></div>
                </button>
            </div>
        </div>


        <!--<div class="action-sheet-wrapper" :class="{'action-sheet-up': state == 1}">-->
            <!--<div class="action-sheet-container">-->
                <!--<div class="action-sheet-group">-->
                    <!--<div class="action-sheet-title" v-text="title"></div>-->

                    <!--<button class="button action-sheet-button action-sheet-option" v-for="(button, index) in buttons" :class="'action-sheet-'+ (button.role ? button.role : 'default')" @click="hide(index)">-->
                        <!--<i class="action-sheet-icon icon" :class="button.icon" v-if="button.icon"></i>-->
                        <!--{{button.text}}-->
                    <!--</button>-->
                <!--</div>-->

                <!--<div class="action-sheet-group">-->
                    <!--<button class="button action-sheet-button action-sheet-cancel" @click="hide(-1)">-->
                        <!--<i class="action-sheet-icon icon" :class="cancelIcon" v-if="cancelIcon"></i>-->
                        <!--{{cancelText}}-->
                    <!--</button>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    </div>

</template>
<script>
    import objectAssign from 'object-assign'

    const preventDefault = (e) => {
        e.preventDefault()
    }

    export default {
        data() {
            return {
                defaultOptions: {
                    title: '',
                    buttons: {},
                },
                title: '',
                message: '',
                buttons: [],

                OKText: 'OK',
                cancelText: 'Cancel',
                cancelIcon: 'ion-android-close',
                state: 0
            }
        },

        mounted() {
            this.$el.setAttribute('von-alert', '')
        },

        destroyed() {
            document.body.removeChild(this.$el)
        },

        methods: {

            show(options) {
                let _options = objectAssign({}, this.defaultOptions, options)
                this.title = _options.title
//                let that = this
//                this.buttons = _options.buttons.filter(function (button) {
//                    if (button.role == 'cancel') {
//                        that.cancelText = button.text
//                        that.cancelIcon = button.icon
//                        return ''
//                    }
//                    return button
//                })
                this.state = 1

                document.body.addEventListener('touchmove', preventDefault)
            },

            hide(buttonIndex) {
                this.state = 0

                document.body.removeEventListener('touchmove', preventDefault)

                if (buttonIndex > -1) {
                    this.buttons[buttonIndex].handler()
                }

                let wrapper = document.querySelector('[von-alert] > .alert-wrapper')
                wrapper.addEventListener('webkitTransitionEnd', () => {
                    this.$destroy()
                }, false)
            },

            getState() {
                return this.state
            }
        }
    }
</script>

<style lang="scss">
    @import "../../scss/alert";
</style>
