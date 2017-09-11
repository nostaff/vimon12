<template>
    <div class="ion-list-header list-header item" :class="['item-'+theme, 'list-header-'+theme]">
        <div class="item-inner">
            <div class="input-wrapper">
                <slot name="item-label"></slot>
                <ion-label ref="label" v-if="noItemLabel">
                    <slot></slot>
                </ion-label>
            </div>
            <slot name="item-end"></slot>
        </div>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';

    export default {
        name: 'ion-list-header',
        mixins: [ThemeMixins],

        data() {
            return {
                componentName: 'ionItem'
            };
        },
        computed: {
            noItemLabel: function () {
                return typeof this.$slots['item-label'] === 'undefined';
            },
        },
        mounted () {
            if (this.$slots['item-end']) {
                this.$slots['item-end'].forEach(function (item) {
                    item.elm.setAttribute('item-end', '')
                })
            }
        }
    }
</script>