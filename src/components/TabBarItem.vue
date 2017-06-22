<template>
    <a href="javascript:;;" class="tab-item" :class="{'active': isActive}" @click="onItemClick(true)">
        <div class="icon" v-if="!simple">
            <slot name="icon" v-if="!simple && !(hasActiveIcon && isActive)"></slot>
            <slot name="icon-active" v-if="!simple && hasActiveIcon && isActive"></slot>
            <span v-if="badge || showDot" v-text="badge" :class="['badge', {'badge-dot': typeof badge === 'undefined', 'badge-single': typeof badge !== 'undefined' && badge.toString().length === 1}]"></span>
        </div>
        <slot name="label"></slot>
    </a>
</template>

<script>
    import { childMixin } from '../utils/multi-items'

    export default {
        beforeMount () {
            if (!this.$slots.icon) {
                this.simple = true
            }
            if (this.$slots['icon-active']) {
                this.hasActiveIcon = true
            }
        },
        mixins: [childMixin],
        props: {
            showDot: {
                type: Boolean,
                default: false
            },
            badge: String,
            link: [String, Object],
        },
        computed: {
            isActive () {
                return this.$parent.index === this.currentIndex
            }
        },
        data () {
            return {
                simple: false,
                hasActiveIcon: false
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/variables";
    @import "../assets/scss/bars";
</style>