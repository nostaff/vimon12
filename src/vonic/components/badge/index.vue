<template>
    <span class="badge" v-text="num"></span>
</template>

<script>
    export default {
        name: 'ion-badge',
        props: {
            num: [String, Number]
        }
    }
</script>

<style lang="scss">
    @import 'badge';
    @import 'badge.ios';
    @import 'badge.md';
    @import 'badge.wp';
</style>
