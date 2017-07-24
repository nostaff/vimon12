<template>
    <div class="list">
        <div class="item list-header" v-if="title">
            <div class="item-inner">{{title}}</div>
        </div>
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

