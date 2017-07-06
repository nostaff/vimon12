<template>
    <li class="item" :class="{'item-icon-right': isLink}">
        <slot></slot>
        <i class="icon ion-ios-arrow-right" v-if="isLink"></i>
    </li>
</template>


<script>
    export default {
        props: {
            isLink: Boolean,
        }
    }
</script>
