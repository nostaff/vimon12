<template>
	<label class="ion-label" v-if="viewLabel" :class="['label-'+theme, colorClass]">
        <slot></slot>
    </label>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import util from '../../utils/util';
    export default {
        name: 'ion-label',
        mixins: [ThemeMixins],
        data() {
            return {
                viewLabel: true
            }
        },
        beforeMount() {
            //如果slot 没有值 则隐藏该label 不管任何label 的是
            if (typeof (this.$slots.default) == 'undefined') {
                this.viewLabel = false;
            }
        },
        computed: {
            colorClass: function() {
                return `label-${this.theme}-${this.color}`;
            }
        }
    }
</script>
<style lang="scss">
    @import './label';
    @import './label.ios';
    @import './label.md';
    @import './label.wp';
</style>