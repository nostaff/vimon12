<template>
  <div class="bar bar-tab" :class="{'visible': state == 1}">
    <a v-for="(menu, $index) in menus"
       class="tab-item"
       :class="{'active': menuIndex == $index}"
       @click="menuClicked($index)">
      <div class="icon" v-if="!menu.simple">
        <i :class="menu.icon"></i>
        <badge :badge="menu.badge" :show-dot="menu.showDot"></badge>
      </div>
      <span class="tab-label" v-text="menu.text"></span>
    </a>
  </div>
</template>
<script>
    import Badge from '../../components/badge'

    export default {
        components: {
            Badge
        },

        props: {
            onMenuClick: {
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
            if (document.body.classList.contains('grade-a'))
                window.__disable_nav_title_transition__ = false
        },

        desctoryed() {
            document.body.removeChild(this.$el)
        },

        data() {
            return {
                menus: [],
                menuIndex: 0,
                state: 0
            }
        },

        methods: {
            menuClicked(menuIndex) {
                window.__disable_nav_title_transition__ = true

                this.menuIndex = menuIndex
                if (this.menus[menuIndex].path)
                    $router.forward({ path: this.menus[menuIndex].path })

                if (this.onMenuClick) {
                    this.onMenuClick(menuIndex)
                }
            },

            activate(index) {
                this.menuIndex = index
            },

            show() {
                this.state = 1
            },

            setBadgeNum(menuIndex, num) {
                this.menus[menuIndex].bage = num
            }
        },
    }
</script>
