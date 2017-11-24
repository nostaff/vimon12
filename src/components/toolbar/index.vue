<script>
    import Toolbar from './toolbar.vue';
    import Navbar from './navbar.vue';
    import Title from './toolbar.title.vue';
    import Buttons from './toolbar.button.vue';

    export default {
        Toolbar,
        Navbar,
        Title,
        Buttons
    };
</script>

<style lang="scss">
    @import 'toolbar.button';
    @import 'toolbar';
    @import 'toolbar.ios';
    @import 'toolbar.md';
    @import 'toolbar.wp';
</style>