<template>
    <a class="tab-item" :class="{'active': isActive}" @click="onItemClick()">
        <div class="icon" v-if="!simple">
            <slot name="icon" v-if="!simple && !(hasActiveIcon && isActive)"></slot>
            <slot name="icon-active" v-if="!simple && hasActiveIcon && isActive"></slot>
            <span v-if="badge || showDot" v-text="badge" :class="['badge', {'badge-dot': typeof badge === 'undefined', 'badge-single': typeof badge !== 'undefined' && badge.toString().length === 1}]"></span>
        </div>
        <slot name="label"></slot>
    </a>
</template>

<script>
    export default {
        beforeMount () {
            if (!this.$slots.icon) {
                this.simple = true
            }
            if (this.$slots['icon-active']) {
                this.hasActiveIcon = true
            }
        },
        props: {
            id:{
                type:String
            },
            showDot: {
                type: Boolean,
                default: false
            },
            simple: {
                type: Boolean,
                default: false
            },
            hasActiveIcon: {
                type: Boolean,
                default: false
            },
            badge: {
                type:String
            },
        },
        computed: {
            isActive () {
                return this.$route.name === this.id
            }
        },
        methods:{
            onItemClick(){
                this.$router.push(this.id)
            }
        }

    }
</script>
