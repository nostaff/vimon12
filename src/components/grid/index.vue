<script>
  var Grid = {
    name: 'ion-grid',
    template: '<div class="grid"><slot></slot></div>'
  };
  var Row = {
    name: 'ion-row',
    template: '<div class="row"><slot></slot></div>'
  };
  var Column = {
    name: 'ion-col',
    template: '<div class="col"><slot></slot></div>'
  };

  export default {
    Grid,
    Row,
    Column,
  };
</script>

<style lang="scss">
    @import 'grid';
</style>