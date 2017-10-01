<template>
    <transition name="ion-backdrop-fade">
        <div class="ion-backdrop" role="presentation" v-show="activated"></div>
    </transition>
</template>
<script>
    import util from '../../utils/util';
    const disableCls = 'pointer--none';
    const enableCls = 'pointer--auto';

    const preventDefault = (e) => {
        e.preventDefault()
    }

    export default {
        name: 'ion-backdrop',
        data() {
            return {
                activated: false
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