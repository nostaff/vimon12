<template>
    <span class="ion-note" :class="['note-'+theme, 'note-'+theme+'-'+color]">
        <slot></slot>
    </span>
</template>

<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-note',
        mixins: [ThemeMixins],
    }
</script>


<style lang="scss">
    @import 'note.ios';
    @import 'note.md';
</style>