<template>
  <ul class="table-view">
    <li class="table-view-divider" v-if="title" v-html="title"></li>
    <slot></slot>
  </ul>
</template>


<script>
    export default {
        props: {
            title: [String],
        }
    }
</script>
