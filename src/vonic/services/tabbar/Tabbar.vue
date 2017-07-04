<template>
  <div class="bar bar-tab" :class="{'visible': state == 1}">
    <a v-for="(item, $index) in items"
       class="tab-item"
       :class="{'active': itemIndex == $index}"
       @click="itemClicked($index)">
      <div class="icon" v-if="!item.simple">
        <i :class="item.icon"></i>
        <badge :badge="item.badge" :show-dot="item.showDot"></badge>
      </div>
      <span class="tab-label" v-text="item.text"></span>
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
            if (document.body.classList.contains('grade-a'))
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

            setBadgeNum(itemIndex, num) {
                this.items[itemIndex].bage = num
            }
        },
    }
</script>
