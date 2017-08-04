<template>
    <transition name="ion-backdrop-fade">
        <div class="ion-backdrop" v-show="activated"></div>
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
            show(allowTouchMove) {
                if (!allowTouchMove)
                    document.body.addEventListener('touchmove', preventDefault)
                this.activated = true
            },

            hide(allowTouchMove) {
                if (!allowTouchMove)
                    document.body.removeEventListener('touchmove', preventDefault)
                this.activated = true
                return timeout(duration)
            },
            disableClick() {
                let $el = this.$el;
                util.hasClass($el, enableCls) && util.removeClass($el, enableCls);
                util.addClass($el, disableCls);
            },
            enableClick() {
                let $el = this.$el;
                util.hasClass($el, disableCls) && util.removeClass($el, disableCls);
                util.addClass($el, enableCls);
            }
        }
    };
</script>
<style lang="scss">
    @import './backdrop.scss';

    .ion-backdrop-fade-enter-active {
        transition: opacity .4s
    }

    .ion-backdrop-fade-leave-active {
        transition: opacity .3s
    }

    .ion-backdrop-fade-enter, .ion-backdrop-fade-leave-to {
        opacity: 0.01;
    }

    .pointer--none {
        pointer-events: none;
    }

    .pointer--auto {
        pointer-events: auto;
    }
</style>