<template>
  <div class="tabbar" :class="{'visible': state == 1}">
    <div v-for="(menu, index) in items"
         class="tabbar-item"
         :style="{'color': itemIndex == index ? activeItemColor : itemColor}"
         @click="itemClicked(index)">
      <div class="icon-wrapper">
        <i :class="getIconClass(menu, index)"></i>
      </div>

      <div class="text-wrapper">
          <span v-text="menu.text"></span>
      </div>

      <badge v-if="menu.badge" :num="menu.badge"></badge>
    </div>
  </div>
</template>
<script>
  import Badge from '../../components/badge'

  const re_color = /^#([0-9A-Fa-f]{3})|([0-9A-Fa-f]{6})$/;

  export default {
    components: {
      Badge
    },

    props: {
      itemColor: {
        type: String,
        default: '#888',
        validator(v) {
          return re_color.test(v)
        }
      },

      activeItemColor: {
        type: String,
        default: '#EA5A49',
        validator(v) {
          return re_color.test(v)
        }
      },

      onItemClick: {
        type: Function
      }
    },

    mounted() {
      this.$el.setAttribute('von-tabbar', '')
      this.show()
      setTimeout(() => {
        this.$el.classList.add('fixed')
      }, 600)
    },

    beforeDestroy() {
      if (document.body.classList.contains('theme-ios'))
        window.__disable_nav_title_transition__ = false
    },

    desctoryed() {
      document.body.removeChild(this.$el)
    },

    data() {
      return {
        items: [],
        itemIndex: 0,
        state: 0
      }
    },

    methods: {
      itemClicked(itemIndex) {
        window.__disable_nav_title_transition__ = true

        this.itemIndex = itemIndex
        if (this.items[itemIndex].path)
          $router.forward({ path: this.items[itemIndex].path })

        if (this.onItemClick) {
          this.onItemClick(itemIndex)
        }
      },

      activate(index) {
        this.itemIndex = index
      },

      show() {
        this.state = 1
      },

      getIconClass(menu, index) {
        let iconClass = {}
        iconClass['icon ' + menu.iconOn] = this.itemIndex == index
        iconClass['icon  ' + menu.iconOff] = this.itemIndex != index
        return iconClass
      },

      setBadgeNum(itemIndex, num) {
        this.items[itemIndex].bage = num
      }
    },
  }
</script>
