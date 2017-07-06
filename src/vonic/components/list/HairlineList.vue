<template>
    <ul class="list" :class="{'has-divider': !!title}">
        <div class="item item-divider" v-if="title" v-text="title"></div>
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        props: {
            title: {
                type: [Number, String],
                default: ''
            }
        }
    }
</script>

