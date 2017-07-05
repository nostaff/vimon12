<template>
  <div class="page-content"
       v-nav="{
      title: 'Components',
      showBackButton: true,
      onBackButtonClick: back,
      showMenuButton: true,
      onMenuButtonClick: toggleSidebar
    }">

    <!-- Basic -->
    <list title="基础">
      <item is-link @click.native="$router.forward('/demo/basic/button')">
        Button <span class="value">按钮</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/basic/input')">
        Input <span class="value">输入框</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/basic/search')">
        Search <span class="value">搜索框</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/basic/radio')">
        Radio <span class="value">单选框</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/basic/checkbox')">
        Checkbox <span class="value">复选框</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/basic/toggle')">
        Toggle <span class="value">开关按钮</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/basic/range')">
        Range Slider <span class="value">滑块</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/basic/badge')">
        Badge <span class="value">徽章</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/basic/dialog')">
        Dialog <span class="value">对话框</span>
      </item>
      <item is-link @click.native="toast()">
        Toast <span class="value">文字提示</span>
      </item>
      <item is-link @click.native="loading('正在加载..')">
        Loading <span class="value">加载提示</span>
      </item>
    </list>

    <!-- layout -->
    <list title="布局">
      <item is-link @click.native="$router.forward('/demo/layout/header')">
        Header <span class="value">页头</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/layout/list')">
        List <span class="value">列表</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/layout/cells')">
        Cells <span class="value">宫格</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/layout/tabs')">
        Tabs <span class="value">选项卡</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/layout/buttonbar')">
        ButtonBar <span class="value">iOS 选项卡</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/layout/scalable')">
        Scalable <span class="value">缩放</span>
      </item>
    </list>

    <!-- advanced -->
    <list title="高级">
      <item is-link @click.native="$router.forward('/demo/advanced/swiper')">
        Swiper <span class="value">轮播</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/advanced/vswipe')">
        VSwipe <span class="value">v1.0.0</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/advanced/scroll')">
        Scroll <span class="value">下拉刷新、无限加载</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/advanced/scroller')">
        Vue Scroller <span class="value">v2.1.0</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/advanced/cascade')">
        Cascade <span class="value">级联</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/advanced/accordion')">
        Accordion <span class="value">手风琴组件</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/advanced/datepicker')">
        Datepicker <span class="value">日期选择器</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/advanced/popup')">
        Popup <span class="value">自定义弹层</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/advanced/actionsheet')">
        ActionSheet <span class="value">操作列表</span>
      </item>
      <item is-link @click.native="toggleSidebarRight()">
        Sidebar <span class="value">侧边栏</span>
      </item>
      <item is-link @click.native="$router.forward('/demo/advanced/tabbar/home')">
        Tabbar <span class="value">嵌套路由使用</span>
      </item>
      <item @click.native="$router.forward('/demo/advanced/tabbarWithoutRoutes')">
        Tabbar Standalone <span class="value">单独使用</span>
      </item>
      <item @click.native="$router.forward('/demo/advanced/modal')">
        Modal <span class="value">模态窗</span><badge>5</badge>
      </item>
    </list>

  </div>
</template>
<script>
    export default {
        data() {
            return {
                sidebar: undefined,
                sidebarRight: undefined
            }
        },

        mounted() {
//      let template = `
//        <p style="font-size: 13px;">
//        No man is an island,<br>
//        entire of itself.<br>
//        Every man is a piece of the continent,<br>
//        a part of the main.<br>
//        If a clod be washed away by the sea,<br>
//        Europe is the less,<br>
//        as well as if a promontory were,<br>
//        as well as if a manor of thy friend's or of thine own were.<br>
//        Any man's death diminishes me.<br>
//        Because I am involved in mankind.<br>
//        And,<br>
//        therefore,<br>
//        never send to know for whom the bells tolls,<br>
//        it tolls for thee.<br>
//        </p>
//      `
//      this.sidebar = $sidebar.fromTemplate(template, {position: 'left'})
//
//      this.sidebarRight = $sidebar.fromTemplate('<h5>右边栏</h5>', {position: 'right'})
//
//      // setTimeout(() => {$app.setTitle('标题文字')}, 1000)

        },

        destroyed() {
            $sidebar.destroy()
        },

        methods: {
            back() {
                $router.back({path: '/'})
            },

            loading(tips) {
                $loading.show(tips)

                setTimeout(() => {
                    $loading.hide()
                }, 2000)
            },

            toast() {
                $toast.show('发送成功', 1500).then(() => {
                    console.log('toast hide')
                })
            },

            toggleSidebar() {
                this.sidebar.toggle()
            },

            toggleSidebarRight() {
                this.sidebarRight.toggle()
            }
        }
    }
</script>
