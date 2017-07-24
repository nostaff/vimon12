<template>
    <div class="page has-navbar has-tabbar"  v-tabbar-item-index="4">
        <von-header theme="light">
            <span slot="title">Voinc组件</span>
        </von-header>

        <div class="page-content" >
            <!-- Basic -->
            <list title="基础">
                <item is-link @click.native="$router.forward('/demo/basic/button')">
                    Button <span slot="right" class="note">按钮</span>
                </item>
                <item isLink @click.native="$router.forward('/demo/basic/input')">
                    Input <span slot="right" class="note">输入框</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/basic/search')">
                    Search <span slot="right" class="note">搜索框</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/basic/select')">
                    Select <span slot="right" class="note">选择框</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/basic/radio')">
                    Radio <span slot="right" class="note">单选框</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/basic/checkbox')">
                    Checkbox <span slot="right" class="note">复选框</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/basic/toggle')">
                    Toggle <span slot="right" class="note">开关按钮</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/basic/range')">
                    Range Slider <span slot="right" class="note">滑块</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/basic/badge')">
                    Badge <span slot="right" class="note">徽章</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/basic/icons')">
                    Icon <span slot="right" class="note">图标</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/basic/alert')">
                    Alert <span slot="right" class="note">对话框</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/basic/dialog')">
                    Dialog <span slot="right" class="note">对话框</span>
                </item>
                <item is-link @click.native="toast()">
                    Toast <span slot="right" class="note">文字提示</span>
                </item>
                <item is-link @click.native="loading('正在加载..')">
                    Loading <span slot="right" class="note">加载提示</span>
                </item>
            </list>

            <!-- layout -->
            <list title="布局">
                <item is-link @click.native="$router.forward('/demo/layout/header')">
                    Header <span slot="right" class="note">页头</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/layout/list')">
                    List <span slot="right" class="note">列表</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/layout/cells')">
                    Cells <span slot="right" class="note">宫格</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/layout/grid')">
                    Grid <span slot="right" class="note">栅格</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/layout/tabs')">
                    Tabs <span slot="right" class="note">选项卡</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/layout/buttonbar')">
                    ButtonBar <span slot="right" class="note">iOS 选项卡</span>
                </item>
            </list>

            <!-- advanced -->
            <list title="高级">
                <item is-link @click.native="$router.forward('/demo/advanced/swiper')">
                    Swiper <span slot="right" class="note">轮播</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/advanced/scroll')">
                    Scroll <span slot="right" class="note">下拉刷新、无限加载</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/advanced/scroller')">
                    Vue Scroller <span slot="right" class="note">v2.1.0</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/advanced/cascade')">
                    Cascade <span slot="right" class="note">级联</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/advanced/accordion')">
                    Accordion <span slot="right" class="note">手风琴组件</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/advanced/datepicker')">
                    Datepicker <span slot="right" class="note">日期选择器</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/advanced/popup')">
                    Popup <span slot="right" class="note">自定义弹层</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/advanced/actionsheet')">
                    ActionSheet <span slot="right" class="note">操作列表</span>
                </item>
                <item is-link @click.native="toggleSidebarRight()">
                    Sidebar <span slot="right" class="note">侧边栏</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/advanced/tabbar/home')">
                    Tabbar <span slot="right" class="note">嵌套路由使用</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/advanced/tabbarWithoutRoutes')">
                    Tabbar Standalone <span slot="right" class="note">单独使用</span>
                </item>
                <item is-link @click.native="$router.forward('/demo/advanced/modal')">
                    Modal <span slot="right" class="note">模态窗</span>
                </item>
            </list>
        </div>
    </div>
</template>
<style>
    .footer {
        height: 40px;
    }
</style>
<script>
    export default {
        data() {
            return {
                sidebar: undefined,
                sidebarRight: undefined
            }
        },

        mounted() {
            let template = `
        <p style="font-size: 13px;">
        No man is an island,<br>
        entire of itself.<br>
        Every man is a piece of the continent,<br>
        a part of the main.<br>
        If a clod be washed away by the sea,<br>
        Europe is the less,<br>
        as well as if a promontory were,<br>
        as well as if a manor of thy friend's or of thine own were.<br>
        Any man's death diminishes me.<br>
        Because I am involved in mankind.<br>
        And,<br>
        therefore,<br>
        never send to know for whom the bells tolls,<br>
        it tolls for thee.<br>
        </p>
      `
//            this.sidebar = $sidebar.fromTemplate(template, {position: 'left'})

//            this.sidebarRight = $sidebar.fromTemplate('<h5>右边栏</h5>', {position: 'right'})

            // setTimeout(() => {$app.setTitle('标题文字')}, 1000)

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
