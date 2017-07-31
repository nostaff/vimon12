<template>
    <div :class="['radio-group', 'radio-group-'+theme]">
        <slot></slot>
    </div>
</template>

<script>
    import ThemeMixins from '../../themes/theme.mixins';

    export default {
        name: 'ion-radio-group',
        mixins: [ThemeMixins],
//        mounted() {
//            if (this.$parent.$data.componentName === 'ionItem') {
//                this.isParentItem = true;
//                this.$parent.$el.classList.add('item-radio');
//            }
//        },
//
        data () {
            return {
                currentValue: this.value
            }
        },

        props: {
            defaultItemClass: String,
            selectedItemClass: String,
            disabledItemClass: String,
            type: {
                type: String,
                default: 'radio'
            },
            value: [String, Number, Array, Object],
            max: Number,
        },

        methods: {
            onClick() {
                if (this.disabled)
                    return;
                this.checked = !this.checked
            },
        },

        computed: {
            currentValue: function () {
                return this.value
            }
        },

        watch: {
            value (newValue) {
                this.currentValue = newValue
                this.$emit('on-change', newValue)
            },
            currentValue (val) {
                this.$emit('input', val)
            }
        },
    }

</script>



