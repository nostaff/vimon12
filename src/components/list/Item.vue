<template>
    <div class="table-view-cell">
        <a class="navigate-right" v-if="isLink || !!link">
            <span v-if="value" class="value">{{value}}</span>
            <span v-if="badge" class="badge">{{badge}}</span>
            <slot name="title">{{title}}</slot>
        </a>
    </div>
</template>


<script>
    export default {
        props: {
            title: [String],
            value: [String, Number, Array],
            badge: [String, Number],
            isLink: Boolean,
            isLoading: Boolean,
            inlineDesc: [String, Number],
            primary: {
                type: String,
                default: 'title'
            },
            link: [String, Object],
            valueAlign: [String, Boolean, Number],
            borderIntent: {
                type: Boolean,
                default: true
            },
            disabled: Boolean,
            arrowDirection: String // down or up
        },
        beforeMount () {
            this.hasTitleSlot = !!this.$slots.title
        },
        computed: {
            valueClass () {
                return {
                    'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
                    'vux-cell-align-left': this.valueAlign === 'left',
                    'vux-cell-arrow-transition': !!this.arrowDirection,
                    'vux-cell-arrow-up': this.arrowDirection === 'up',
                    'vux-cell-arrow-down': this.arrowDirection === 'down'
                }
            }
        },
        methods: {
            getLabelStyles () {
                return {
                    width: this.$parent.labelWidth || this.$parent.$parent.labelWidth,
                    textAlign: this.$parent.labelAlign || this.$parent.$parent.labelAlign,
                    marginRight: this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight
                }
            },
            onClick () {
                !this.disabled && go(this.link, this.$router)
            }
        },
        data () {
            return {
                hasTitleSlot: false
            }
        }
    }
</script>