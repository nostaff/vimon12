<template>
    <transition name="ion-backdrop-fade">
        <div class="ion-backdrop" :class="{'backdrop-no-tappable': !isEnableBackdropDismiss}" role="presentation" v-show="activated"></div>
    </transition>
</template>

<script>
    import { isTrueProperty } from '../../utils/utils'
    const preventDefault = (e) => {
        e.preventDefault()
    }

    export default {
        name: 'ion-backdrop',
        data() {
            return {
                activated: isTrueProperty(this.isActive),
                isEnableBackdropDismiss: isTrueProperty(this.enableBackdropDismiss)
            }
        },
        props: {
            isActive:{
                type: [Boolean, String],
                default: false
            },
            enableBackdropDismiss:{
                type: [Boolean, String],
                default: true
            },
        },
        watch: {
            isActive (val) {
                this.activated = isTrueProperty(val);
            }
        },
        methods: {
            present(allowTouchMove) {
                if (!allowTouchMove)
                    document.body.addEventListener('touchmove', preventDefault)
                this.activated = true
            },

            dismiss(allowTouchMove) {
                if (!allowTouchMove)
                    document.body.removeEventListener('touchmove', preventDefault)
                this.activated = true
                return timeout(duration)
            },
            getState() {
                return this.activated;
            }
        }
    };
</script>

<style lang="scss">
    @import 'backdrop';
</style>