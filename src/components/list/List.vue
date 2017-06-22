<template>
    <div class="table-view">
        <div class="table-view-divider" v-if="title" v-html="title"></div>
        <slot></slot>
    </div>
</template>


<script>
    export default {
        props: {
            title: [String],
        }
    }
</script>