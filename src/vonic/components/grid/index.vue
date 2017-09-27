<script>
    var Grid = {
        name: 'ion-grid',
        template: '<div class="grid"><slot></slot></div>'
    };
    var Row = {
        name: 'ion-row',
        template: '<div class="row"><slot></slot></div>'
    };
    var Col = {
        name: 'ion-col',
        template: '<div class="col"><slot></slot></div>'
    };

    export default {
        Grid,
        Row,
        Col,
    };
</script>

<style lang="scss">
    @import 'grid';
</style>