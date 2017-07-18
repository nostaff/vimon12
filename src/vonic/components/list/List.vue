<template>
    <div class="list">
        <item v-if="title" class="item-divider">{{title}}</item>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>

