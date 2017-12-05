<template>
  <div class="swiper-container" :style="{
    'width': w,
    'height': h
  }">
    <div class="swiper">
      <slot></slot>
    </div>

    <pagination v-if="direction == 'horizontal' && hidePager == 'false'"
                :size="itemCount"
                :pager-color="pagerColor"
                :pager-bg-color="pagerBgColor"
                ref="pagination"></pagination>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Swiper from './core.js'
  import SwiperPagination from './swiper-pagination'

  /* eslint-disable no-useless-escape */
  const re = /^[\d]+(\%)?$/
  /* eslint-enable no-useless-escape */

  const widthAndHeightValidator = (v) => {
    return re.test(v)
  }

  const widthAndHeightCoerce = (v) => {
    if (v[v.length - 1] !== '%') return v + 'px'
    return v
  }

  export default {
    components: {
      'pagination': SwiperPagination
    },

    props: {
      direction: {
        type: String,
        default: 'vertical'
      },
      width: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator
      },
      height: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator
      },
      autoplay: {
        type: [String, Boolean],
        default: false
      },
      interval: {
        type: String,
        default: '3000'
      },
      pagerColor: {
        type: String,
        default: '#333'
      },
      pagerBgColor: {
        type: String,
        default: '#333'
      },
      hidePager: {
        type: String,
        default: 'false',
        validator: (v) => {
          return v === 'true' || v === 'false'
        }
      },
      callback: Function
    },

    computed: {
      w: function () {
        return widthAndHeightCoerce(this.width)
      },

      h: function () {
        return widthAndHeightCoerce(this.height)
      }
    },

    data () {
      return {
        swiper: undefined,
        itemCount: 0,
        activeIndex: 0
      }
    },

    mounted () {
      Vue.nextTick(() => {
        let container = this.$el.querySelector('.swiper')
        let swiper = new Swiper(container, {
          direction: this.direction,
          autoplay: (this.autoplay === true || this.autoplay === 'true'),
          interval: this.interval,
          transitionEnd: (prev, current) => {
            this.activeIndex = current
            if (this.$refs.pagination) {
              this.$refs.pagination.activate(current)
            }

            // add callback
            if (this.callback) {
              this.callback(prev, current)
            }
          }
        })

        this.swiper = swiper
        this.itemCount = swiper.count

        Vue.nextTick(() => {
          if (this.$refs.pagination) {
            this.$refs.pagination.init()
          }
        })
      })
    },

    destroyed () {
      if (this.swiper) {
        this.swiper.destroy()
      }
    },

    methods: {
      go (index) {
        this.swiper.go(index)
      },

      next () {
        this.swiper.next()
      },

      prev () {
        this.swiper.prev()
      },

      resize () {
        this.swiper.resize()
      }
    }
  }
</script>

<style lang="scss">
  @import "swiper";
</style>
