<template>
    <button v-if="isLink" class="item item-block" @click="onClick()">
        <slot name="left" class="item-left"></slot>
        <div class="item-inner">
            <div class="input-wrapper">
                <label class="label">
                    <slot></slot>
                </label>
            </div>
            <slot name="right"></slot>
        </div>
        <div class="button-effect"></div>
    </button>
    <a v-else-if="!!link" class="item item-block" @click="onClick()">
        <slot name="left"></slot>
        <div class="item-inner">
            <div class="input-wrapper">
                <label class="label">
                    <slot></slot>
                </label>
            </div>
            <slot name="right"></slot>
        </div>
    </a>
    <div v-else class="item item-block">
        <slot name="left"></slot>
        <div class="item-inner">
            <div class="input-wrapper">
                <label class="label">
                    <slot></slot>
                </label>
            </div>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isLink: {
                type: Boolean,
                default: false
            },
            link: {
                type: String,
                default: ''
            },
        },
        methods: {
            onClick(e) {
                this.link && $router.forward(this.link)
            }
        },
        mounted () {
            if (this.$slots.left) {
                this.$slots.left[0].elm.classList.add('item-left')
            }
            if (this.$slots.right) {
                this.$slots.right[0].elm.classList.add('item-right')
            }
        }
    }
</script>
