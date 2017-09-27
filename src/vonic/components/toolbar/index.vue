<script>
    import Toolbar from './toolbar.vue';
    import Navbar from './navbar.vue';
    import BarTitle from './toolbar.title.vue';
    import BarButtons from './toolbar.button.vue';

    export default {
        Toolbar,
        Navbar,
        BarTitle,
        BarButtons
    };
</script>

<style lang="scss">
    @import 'toolbar.button';
    @import 'toolbar';
    @import 'toolbar.ios';
    @import 'toolbar.md';
    @import 'toolbar.wp';
</style>