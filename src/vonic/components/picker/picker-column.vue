<template>
    <div class="picker-col"
         :class="{'picker-opts-left': column.align=='left', 'picker-opts-right': column.align=='right'}"
         :style="{width: column.columnWidth}" >
        <div v-if="column.prefix" class="picker-prefix" :style="{width: column.prefixWidth}">{{column.prefix}}</div>
        <div class="picker-opts" ref="picker-opts" :style="{'max-width': column.optionsWidth}">
            <div class="picker-opt" ref="button" :key="index" v-for="(option, index) in column.options" :class="{'picker-opt-disabled':option.disabled}" :data-value="option.value" @click.native="optClick($event, index)">{{option.text}}</div>
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
                defaultOptions: {
                    name: '',
                    align: 'center',
                    selectedIndex: 0,
                    prevSelected: 0,
                    prefix: '',
                    suffix: '',
                    options: [{
                        text: '',
                        value: '',
                        disabled: false,
                    }],
                    cssClass: '',
                    columnWidth: '',
                    prefixWidth: '',
                    suffixWidth: '',
                    optionsWidth: ''
                },

                colHeight: 0,
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

        created () {

        },

        mounted() {
            // get the scrollable element within the column
            this.colHeight = this.$el.clientHeight;

            // get the height of one option
            this.optHeight = (this.$refs.button[0] ? this.$refs.button[0].clientHeight : 0);

//            this.refresh()

            this.$nextTick(this.render);

        },

        methods: {

            optClick(ev, index) {
                if (!this.velocity) {
                    ev.preventDefault();
                    ev.stopPropagation();

                    this.setSelected(index, 150);
                }
            },

            render() {
                const self = this;

                const content = this.$refs['picker-opts'];

                console.log(content.offsetHeight)

                this.scroller = new Scroller(content, {
                    itemHeight: this.optHeight,
                    onSelect(value) {
                        console.log('currentValue', value);
                        self.currentValue = value
//                            self['current' + column] = value;
//                            self.scrolling[column] = false;
                    },
                    callback(top, isDragging) {
                            console.log(top, isDragging)
                        if(isDragging) {
                            self.scrolling = true;
                        }
                        content.style.webkitTransform = 'translate3d(0, ' + (-top) + 'px, 0)'
                    }
                });

                this.scroller.setDimensions(this.colHeight, content.offsetHeight, this.column.options.length);
                if (this.currentValue)
                    this.scroller.select(this.currentValue, false);
                this.scrolling = false;
            },

            setValue() {
                let value = '';

                if (this.type === 'datetime') {
                    value = `${this.currentYear}-${this.currentMonth}-${this.currentDay} ${this.currentHour}:${this.currentMinute}`;
                } else if (this.type === 'date') {
                    value = `${this.currentYear}-${this.currentMonth}-${this.currentDay}`;
                } else {
                    value = `${this.currentHour}:${this.currentMinute}`;
                }

                this.currentValue = value;
                this.$emit('pickerConfirm', value);
                this.close();
            },
            inDatas(items, key) {
                let b = false;
                items.forEach((item) => {
                    if (item.value == key) b = true;
                });
                return b;
            },

            scrolloToPosition(type, allDatas, callback) {
                const self = this;

                const scroller = self.scroller;
                if (!scroller) return;

                this.scroller.setDimensions(this.$refs['Component_' + type][0].clientHeight, self.$refs['Content_' + type][0].offsetHeight, allDatas.length);

                setTimeout(() => {
                    const indatas = self.inDatas(allDatas, self['current' + type]);
                    if (!self.scrolling[type]) {
                        scroller.select(indatas ? self['current' + type] : allDatas[0].value, false);
                    }
                    typeof callback === 'function' && callback();
                }, 0);
            },
        },
        watch: {
            currentYear(val) {
                this.setMonths(val);
            },
        }
    };
</script>