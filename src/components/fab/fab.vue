<<template>
  <div class="ion-fab">
    <slot></slot>
  </div>
</template>
<script>
  import { parsePxUnit } from '../../util/util'
  import ThemeMixins from '../../themes/theme.mixins';

  export default {
    name: 'ion-fab',
    provide () {
      let _this = this
      return {
        fabComponent: _this
      }
    },
    data() {
      return {
        /**
         * @hidden
         */
        listsActive: false,

        /**
         * @hidden
         */
        mainButton: null,

        /**
         * @hidden
         */
        fabLists: []
      };
    },
    methods: {
      /**
       * @hidden
       */
      clickHandler(ev) {
        if (this.canActivateList(ev)) {
          this.toggleList();
        }
      },

      /**
       * @hidden
       */
      canActivateList(ev) {
        console.log(this.mainButton)
        if (this.fabLists.length > 0 && this.mainButton && ev.target) {
          let ele = ev.target.closest('ion-fab>[ion-fab]');
          return (ele && ele === this.mainButton.getNativeElement());
        }
        return false;
      },

      /**
       * @hidden
       */
      toggleList() {
        this.$app && this.$app.setEnabled(false, 300)

        this.setActiveLists(!this.listsActive);
      },

      /**
       * @hidden
       */
      setActiveLists(isActive) {
        if (isActive === this.listsActive) {
          return;
        }

        let lists = this.fabLists;
        for (let list of lists) {
          list.setVisible(isActive);
        }
        this.mainButton.setActiveClose(isActive);
        this.listsActive = isActive;
      },

      /**
       * Close an active FAB list container
       */
      close() {
        this.setActiveLists(false);
      },

    }
  }
</script>

<style lang="scss">
  @import 'fab';
  @import 'fab.ios';
  @import 'fab.md';
</style>
