<template>
    <router-link v-if="!!link" class="item item-block" :class="['item-'+theme]" :to="link" >
        <slot name="item-start"></slot>
        <div class="item-inner">
            <div class="input-wrapper">
                <slot name="item-label"></slot>
                <ion-label ref="label" :color="color" v-if="noItemLabel">
                    <slot></slot>
                </ion-label>
                <slot name="item-content"></slot>
            </div>
            <slot name="item-end"></slot>
        </div>
    </router-link>

    <button v-else-if="!!isLink" class="item item-block" :class="['item-'+theme]">
        <slot name="item-start"></slot>
        <div class="item-inner">
            <div class="input-wrapper">
                <slot name="item-label"></slot>
                <ion-label ref="label" :color="color" v-if="noItemLabel">
                    <slot></slot>
                </ion-label>
                <slot name="item-content"></slot>
            </div>
            <slot name="item-end"></slot>
        </div>
        <div class="button-effect"></div>
    </button>

    <div v-else class="item item-block" :class="['item-'+theme]">
        <slot name="item-start"></slot>
        <div class="item-inner">
            <div class="input-wrapper">
                <slot name="item-label"></slot>
                <ion-label ref="label" :color="color" v-if="noItemLabel">
                    <slot></slot>
                </ion-label>
                <slot name="item-content"></slot>
            </div>
            <slot name="item-end"></slot>
        </div>
    </div>

</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';

    export default {
        name: 'ion-item',
        mixins: [ThemeMixins],
        props: {
            link: {
                type: String,
                default: ''
            },
            isLink: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                componentName: 'ionItem',
            };
        },
        computed: {
            noItemLabel: function () {
                return typeof this.$slots['item-label'] === 'undefined';
            },
        },
        mounted () {
            if (this.$el.classList.contains('item-divider'))
                this.$el.classList.remove('item-block')

            if (this.$slots['item-start']) {
                this.$slots['item-start'].forEach(function (item) {
                    item.elm.setAttribute('item-start', '')
                })
            }
            if (this.$slots['item-end']) {
                this.$slots['item-end'].forEach(function (item) {
                    item.elm.setAttribute('item-end', '')
                })
            }
        },
        methods: {
            // 给子组件用的方法
            addClass(className) {
                this.$el.classList.add(className)
            },
            removeClass(className) {
                this.$el.classList.remove(className)
            },
            updateLabelAttribute(name, value = '') {
                if (this.$refs.label && this.$refs.label.$el.length != 0) {   // 空==0，不为空 != 0 ，非大于0
                    this.$refs.label.$el.setAttribute(name, value);
                } else if (this.$slots['item-label']) {
                    this.$slots['item-label'].forEach(item => {
                        item.elm.setAttribute(name, value)
                    })
                }
            },
            getLabelText () {
                if (this.$refs.label && this.$refs.label.$el.length != 0) {   // 空==0，不为空 != 0 ，非大于0
                    return this.$refs.label.$el.innerText;
                } else if (this.$slots['item-label']) {
                    return this.$slots['item-label'][0].elm.innerText;
                }
                return ''
            }
        }
    }
</script>
