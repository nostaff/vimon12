<template>
    <div class="item item-block" :class="['item-'+theme]">
        <slot name="item-left"></slot>
        <div class="item-inner">
            <div class="input-wrapper">
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
    import util from '../../utils/util';
    import ItemMixin from './item.mixin';

    export default {
        name: 'ion-item',
        mixins: [ItemMixin],
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
            //设置 label 的  floating
            addLabelAttr(attr, val = '') {
                /*
                 *viewLabel 为true 则没有设置 slot 为 ion-label else 则设置呢
                 * 设置了 如下
                 * <ion-label slot="ion-label">password</ion-label>
                 */
                let $labelEl = this.getText().length > 0 ? this.$refs.label.$el : this.$slots['ion-label'][0].elm;
                if (!$labelEl.hasAttribute(attr)) {
                    $labelEl.setAttribute(attr, val);
                }
            }
        }
    }
</script>
