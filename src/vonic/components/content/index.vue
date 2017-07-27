<template>
    <section class="ion-content" :class="['content-'+theme]">
        <div class="scroll-content">
            <slot></slot>
        </div>
        <slot name="ion-refresher"></slot>
    </section>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-content',
        mixins: [ThemeMixins]
    }
</script>
<style lang="scss">
    @import "./content.scss";
    @import "./content.ios.scss";
    @import "./content.md.scss";
    @import "./content.wp.scss";
</style>