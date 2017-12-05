<template>
  <div class="ion-thumbnail">
    <img :src="src" v-if="src">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ion-thumbnail',
    props: {
      src: {
        type: String,
        default: ''
      }
    }
  }
</script>