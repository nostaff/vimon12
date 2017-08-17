<template>
    <div class="picker-col"
         :class="{'picker-opts-left': column.align=='left', 'picker-opts-right': column.align=='right'}"
         :style="{width: column.columnWidth}" >
        <div v-if="column.prefix" class="picker-prefix" :style="{width: column.prefixWidth}">{{column.prefix}}</div>
        <div class="picker-opts" ref="picker-opts" :style="{'max-width': column.optionsWidth}">
            <div class="picker-opt" ref="button" :key="index" v-for="(option, index) in column.options" :class="{'picker-opt-disabled':option.disabled}" :data-value="option.value">{{option.text}}</div>
        </div>
        <div v-if="column.suffix" class="picker-prefix" :style="{width: column.suffixWidth}">{{column.suffixWidth}}</div>
    </div>
</template>
<script>
    import objectAssign from 'object-assign'
    import Scroller from './scroller';
    import ThemeMixins from '../../themes/theme.mixins';
    import IonButton from "../button/index";
    export default {
        name: 'ion-picker-column',
        mixins: [ThemeMixins],
        components: {
            IonButton,
        },
        data() {
            return {
                optHeight: 0,
                currentValue: this.value
            }
        },

        props: {
            column: {
                type: Object,
                required: true
            },
            value: {
                type: String,
                required: false
            },
        },

        mounted() {
            // get the height of one option
            this.optHeight = (this.$refs.button[0] ? this.$refs.button[0].clientHeight : 0);

            this.$nextTick(this.render)
        },

        methods: {

            render() {
                const self = this;

                const  component = this.$el;
                const  content = this.$refs['picker-opts'];

                this.scroller = new Scroller(component, content, {
                    itemHeight: this.optHeight,
                    onSelect(value) {
                        console.log('onSelect', value);
                        self.currentValue = value
                    }
                });

                this.scroller.select(this.currentValue, false);
            },
        }
    };
</script>