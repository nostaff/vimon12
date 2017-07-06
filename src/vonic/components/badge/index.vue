<template>
  <span class="von-badge">
    <div v-html="num" class="von-badge-num"></div>
  </span>
</template>
<script>
  export default {
    props: {
      num: [String, Number]
    }
  }
</script>
