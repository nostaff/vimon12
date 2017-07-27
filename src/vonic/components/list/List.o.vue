<template>
    <div class="ion-list" :class="['list-'+theme]">
        <ion-item class="ion-list-header" v-if="title" v-text="title"></ion-item>
        <slot></slot>
    </div>
</template>

<script>
    import Item from '../item'
    export default {
        components: {
          Item
        },
        props: {
            title: String
        }
    }
</script>

