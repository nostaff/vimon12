<template>
    <ion-page v-tabbar-item-index="4" v-nav="{title: 'Vonic组件', showBackButton: false, showMoreButton: true}">
        <!--<ion-navbar title="Vonic组件"></ion-navbar>-->

        <ion-content>
            <!-- Basic -->
            <ion-list title="基础">
                <ion-item detail-push @click.native="$router.forward('/demo/basic/button')">
                    Button <ion-note slot="item-end">按钮</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/basic/input')">
                    Input <ion-note slot="item-end">输入框</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/basic/search')">
                    SearchBar <ion-note slot="item-end">搜索框</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/basic/select')">
                    Select <ion-note slot="item-end">选择框</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/basic/radio')">
                    Radio <ion-note slot="item-end">单选框</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/basic/checkbox')">
                    Checkbox <ion-note slot="item-end">复选框</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/basic/toggle')">
                    Toggle <ion-note slot="item-end">开关按钮</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/basic/range')">
                    Range Slider <ion-note slot="item-end">滑块</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/basic/badge')">
                    Badge <ion-note slot="item-end">徽章</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/basic/icons')">
                    Icon <ion-note slot="item-end">图标</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/basic/fabs')">
                    FABs <ion-note slot="item-end">浮动按钮</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/basic/dialog')">
                    Dialog <ion-note slot="item-end">对话框</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="toast()">
                    Toast <ion-note slot="item-end">文字提示</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="loading('正在加载..')">
                    Loading <ion-note slot="item-end">加载提示</ion-note>
                </ion-item>
            </ion-list>

            <!-- layout -->
            <ion-list title="布局">
                <ion-item detail-push @click.native="$router.forward('/demo/layout/toolbar')">
                    Toolbar <ion-note slot="item-end">工具条</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/layout/header')">
                    Header <ion-note slot="item-end">页头</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/layout/list')">
                    List <ion-note slot="item-end">列表</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/layout/cells')">
                    Cells <ion-note slot="item-end">宫格</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/layout/grid')">
                    Grid <ion-note slot="item-end">栅格</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/layout/tabs')">
                    Tabs <ion-note slot="item-end">选项卡</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/layout/buttonbar')">
                    ButtonBar <ion-note slot="item-end">iOS 选项卡</ion-note>
                </ion-item>
            </ion-list>

            <!-- advanced -->
            <ion-list title="高级">
                <ion-item detail-push @click.native="$router.forward('/demo/advanced/swiper')">
                    Swiper <ion-note slot="item-end">轮播</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/advanced/scroll')">
                    Scroll <ion-note slot="item-end">下拉刷新、无限加载</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/advanced/scroller')">
                    Vue Scroller <ion-note slot="item-end">v2.1.0</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/advanced/cascade')">
                    Cascade <ion-note slot="item-end">级联</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/advanced/accordion')">
                    Accordion <ion-note slot="item-end">手风琴组件</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/advanced/datepicker')">
                    Datepicker <ion-note slot="item-end">日期选择器</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/advanced/popup')">
                    Popup <ion-note slot="item-end">自定义弹层</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/advanced/actionsheet')">
                    ActionSheet <ion-note slot="item-end">操作列表</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="toggleSidebarRight()">
                    Sidebar <ion-note slot="item-end">侧边栏</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/advanced/tabbar/home')">
                    Tabbar <ion-note slot="item-end">嵌套路由使用</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/advanced/tabbarWithoutRoutes')">
                    Tabbar Standalone <ion-note slot="item-end">单独使用</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/advanced/modal')">
                    Modal <ion-note slot="item-end">模态窗</ion-note>
                </ion-item>
            </ion-list>

        </ion-content>
    </ion-page>
</template>

<script>
    import channel from '../vonic/utils/channel'

    export default {
        data() {
            return {
                sidebar: undefined,
                sidebarRight: undefined
            }
        },

        mounted() {

//            let template = `
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
//            this.sidebar = $sidebar.fromTemplate(template, {position: 'left'})

//            this.sidebarRight = $sidebar.fromTemplate('<h5>右边栏</h5>', {position: 'right'})

//             setTimeout(() => {$app.setTitle('标题文字')}, 100)

            channel.$emit('selectedItem', 4)

            channel.$emit('VonicNotification', {
                message: '请先选择'
            })

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
