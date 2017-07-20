<template>
    <div class="action-sheet-backdrop" :class="{'active': state == 1}" @click="hide(-1)">
        <div class="action-sheet-wrapper" :class="{'action-sheet-up': state == 1}">
            <div class="action-sheet-container">
                <div class="action-sheet-group">
                    <div class="action-sheet-title" v-text="title"></div>

                    <button class="button action-sheet-button action-sheet-option" v-for="(button, index) in buttons" :class="'action-sheet-'+ (button.role ? button.role : 'default')" @click="hide(index)">
                        <i class="action-sheet-icon icon" :class="button.icon" v-if="button.icon"></i>
                        {{button.text}}
                    </button>
                </div>

                <div class="action-sheet-group">
                    <button class="button action-sheet-button action-sheet-cancel" @click="hide(-1)">
                        <i class="action-sheet-icon icon" :class="cancelIcon" v-if="cancelIcon"></i>
                        {{cancelText}}
                    </button>
                </div>
            </div>
        </div>
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
                buttons: [],
                cancelText: 'Cancel',
                cancelIcon: 'ion-android-close',
                state: 0
            }
        },

        mounted() {
            this.$el.setAttribute('von-action-sheet', '')
        },

        destroyed() {
            document.body.removeChild(this.$el)
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
                this.state = 1

                document.body.addEventListener('touchmove', preventDefault)
            },

            hide(buttonIndex) {
                this.state = 0

                document.body.removeEventListener('touchmove', preventDefault)

                if (buttonIndex > -1) {
                    this.buttons[buttonIndex].handler()
                }

                let wrapper = document.querySelector('[von-action-sheet] > .action-sheet-wrapper')
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
    @import "../../scss/actionsheet";
</style>
