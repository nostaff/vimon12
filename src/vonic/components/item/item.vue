<template>
    <div class="item item-block" :class="['item-'+theme]">
        <slot name="item-left"></slot>
        <div class="item-inner">
            <div class="input-wrapper">
                <slot name="label"></slot>
                <ion-label ref="label" :color="color">
                    <slot></slot>
                </ion-label>
                <slot name="item-content"></slot>
            </div>
            <slot name="item-right"></slot>
        </div>
        <div class="button-effect"></div>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import util from '../../utils/util';

    export default {
        name: 'ion-item',
        mixins: [ThemeMixins],
        data() {
            return {
                componentName: 'ionItem'
            };
        },
        mounted () {
            if (this.$el.classList.contains('list-header') || this.$el.classList.contains('item-divider'))
                this.$el.classList.remove('item-block')

            if (this.$slots['item-left']) {
                this.$slots['item-left'][0].elm.setAttribute('item-left', '')
            }
            if (this.$slots['item-right']) {
                this.$slots['item-right'][0].elm.setAttribute('item-right', '')
            }
        },
        methods: {
            addLabelAttribute(name, value = '') {
                let $labelEl = this.$refs.label ? this.$refs.label.$el : this.$slots['label'][0].elm;
                if (!$labelEl.hasAttribute(name)) {
                    $labelEl.setAttribute(name, value);
                }
            }
        }
    }
</script>
