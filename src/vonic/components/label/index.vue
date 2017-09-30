<template>
	<div class="ion-label"
         v-if="viewLabel"
         :class="['label-'+theme, colorClass]"
         :fixed="fixed"
         :floating="floating"
         :stacked="stacked">
        <slot></slot>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import util from '../../utils/util';
    export default {
        name: 'ion-label',
        mixins: [ThemeMixins],
        data() {
            return {
                viewLabel: true,

                itemCmp: null
            }
        },
        props: {
            fixed: Boolean,
            floating: Boolean,
            stacked: Boolean
        },
        computed: {
            colorClass: function() {
                return `label-${this.theme}-${this.color}`;
            }
        },
        beforeMount() {
            //如果slot 没有值 则隐藏该label 不管任何label 的是
            if (typeof (this.$slots.default) == 'undefined') {
                this.viewLabel = false;
            }
        },
        mounted () {
            if (this.$parent.$data.componentName === 'ionItem') {
                this.itemCmp = this.$parent
                this.itemCmp.setElementClass('item-label-fixed', this.fixed)
                this.itemCmp.setElementClass('item-label-floating', this.floating)
                this.itemCmp.setElementClass('item-label-stacked', this.stacked)
                this.itemCmp.labelComponent = this
            }
        }
    }
</script>
<style lang="scss">
    @import 'label';
    @import 'label.ios';
    @import 'label.md';
    @import 'label.wp';
</style>