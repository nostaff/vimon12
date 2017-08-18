<template>
    <div class="picker-col" :data-name="column.name"
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
    import Scroller from './scroller';
    import IonButton from "../button/index";
    export default {
        name: 'ion-picker-column',
        components: {
            IonButton,
        },
        data() {
            return {
                optHeight: 0,
            }
        },

        props: {
            column: {
                type: Object,
                required: true
            },
        },

        created () {
//            console.log(this.column)
        },
        mounted() {
            // get the height of one option
            this.optHeight = (this.$refs.button[0] ? this.$refs.button[0].clientHeight : 0);

            this.$nextTick(this.render)
        },

        methods: {
            render() {
                const _this = this;

                const  component = this.$el;
                const  content = this.$refs['picker-opts'];

                this.scroller = new Scroller(component, content, {
                    itemHeight: this.optHeight,
                    defaultValue: this.column.defaultValue,
                    onSelect(value, index) {
                        _this.$emit('on-change', {name: _this.column.name, value: value, index: index})
                    }
                });
            }
        }
    };
</script>