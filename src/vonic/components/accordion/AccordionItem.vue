<template>
    <ion-list class="list-accordion" :style="{height: getHeight()}">
        <ion-item class="item-icon-right" @click.native="onClick()">
            <span v-text="title"></span>
            <i class="icon ion-arrow-down-b" :class="{'rotated': expanded}"></i>
        </ion-item>
        <transition name="von-accordion">
            <div v-show="expanded" class="accordion-content hairline-bottom">
                <slot></slot>
            </div>
        </transition>
    </ion-list>
</template>
<script>
    import channel from '../../utils/channel'
    import List from '../list'
    import Item from '../item'

    export default {
        components: {
            List,
            Item,
        },

        props: {
            title: String,
            contentHeight: {
                type: String,
                validator: function (value) {
                    return /^[\d]{1,}$/.test(value)
                },
                default: '100'
            }
        },

        data() {
            return {
                expanded: false,
                index: -1
            }
        },

        mounted() {
            let children = this.$el.parentNode.children

            for (let i = 0; i < children.length; i++) {
                if (children[i] == this.$el) {
                    this.index = i
                    break
                }
            }

            // console.log('accordion item index => ', this.index)

            channel.$on('activeIndexChanged', activeIndex => {
                if (activeIndex != this.index)
                    this.expanded = false
            })
        },

        methods: {
            onClick() {
                this.expanded = !this.expanded
                if (this.expanded)
                    channel.$emit('activeIndexChanged', this.index)
            },

            getHeight() {
                return this.expanded ? parseInt(this.contentHeight) + 50 + 'px' : '50px'
            }
        }
    }
</script>
