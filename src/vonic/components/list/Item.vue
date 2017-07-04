<template>
    <li class="table-view-cell" :class="{'media': isMedia, 'disabled': disabled}">
        <a class="navigate-right" v-if="isLink || !!link">
            <slot></slot>
        </a>
        <template v-else>
            <slot></slot>
        </template>
    </li>
</template>


<script>
    export default {
        props: {
            isMedia: Boolean,
            isLink: Boolean,
            link: [String, Object],
            disabled: Boolean,
        },
        methods: {
            onClick () {
                !this.disabled && this.$router.forward(this.link)
            }
        },
    }
</script>
