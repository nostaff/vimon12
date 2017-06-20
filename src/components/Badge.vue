<template>
  <span v-text="text" :class="['badge', {'badge-dot': typeof text === 'undefined', 'badge-single': typeof text !== 'undefined' && text.toString().length === 1}]"></span>
</template>

<script>
export default {
  props: {
    text: [String, Number]
  }
}
</script>
