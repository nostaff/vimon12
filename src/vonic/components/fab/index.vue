<template>
    <div class="ion-fab" :top="top" :left="left" :right="right" :bottom="bottom" :center="center" :middle="middle" :edge="edge">
        <ion-button :mini="mini" role="fab" ion-fab="" :color="color" @click.native="onClicked($event)">
            <ion-icon slot="backup" class="fab-close-icon" name="close"></ion-icon>
            <ion-icon :name="icon"></ion-icon>
        </ion-button>

        <div class="ion-fab-list" :side="key" v-for="(items, key) in options">
            <ion-button role="fab" class="fab fab-ios fab-in-list" :color="item.color" :class="['fab-'+theme+'-in-list', activated?'show':'']" @click.native="onItemClicked(item.name)" key="idx" v-for="item in items">
                <ion-icon :name="item.icon"></ion-icon>
            </ion-button>
        </div>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import IonButton from "../button/index";
    export default {
        name: 'ion-fabs',
        mixins: [ThemeMixins],
        components: {
            IonButton,
        },
        props: {
            top: Boolean,
            left: Boolean,
            right: Boolean,
            bottom: Boolean,
            center: Boolean,
            middle: Boolean,
            edge: Boolean,
            mini: Boolean,
            icon: String,
            options: Object,
        },

        data() {
            return {
                activated: false,
            }
        },

        methods: {

            onClicked($event) {
                this.activated = !this.activated;
            },

            onItemClicked(item) {
                this.activated = false;

                this.$emit('on-item-clicked', item)
            },
        },

        watch: {
            activated(val) {
                this.$el.querySelector('button[ion-fab]').classList[val ? 'add' : 'remove']('fab-close-active')

                this.$el.querySelectorAll('.ion-fab-list').forEach(fabs => fabs.classList[val ? 'add' : 'remove']('fab-list-active'));

                this.$el.querySelectorAll('.ion-fab-list > button').forEach((fab, index) => {
                    setTimeout(() => fab.classList[val ? 'add' : 'remove']('show'), (index + 1) * 30);
                });
            }
        },
    }
</script>

<style lang="scss">
    @import './fab.scss';
    @import './fab.ios.scss';
    @import './fab.md.scss';
    @import './fab.wp.scss';
</style>
