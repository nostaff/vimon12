<template>
    <div class="ion-avatar">
        <img :src="src" v-if="src">
        <slot></slot>
    </div>
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