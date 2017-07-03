<template>
  <span v-if="badge || showDot" v-text="badge" :class="['badge', {'badge-dot': typeof badge === 'undefined', 'badge-single': typeof badge !== 'undefined' && badge.toString().length === 1}]"></span>
</template>
<script>
    export default {
        props: {
            badge: [String, Number],
            showDot: Boolean,
        }
    }
</script>
