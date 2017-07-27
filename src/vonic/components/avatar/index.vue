<template>
    <span class="ion-avatar">
        <img :src="src" v-if="src">
        <slot></slot>
    </span>
</template>
<script>
    export default {
        name: 'ion-avatar',
        props: {
            src: {
                type: String,
                default: ''
            }
        }
    }
</script>