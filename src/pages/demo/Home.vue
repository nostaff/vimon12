<template>
    <div class="page">
        <div class="page-content">

            <list title="group title">
                <item title="Item 3" badge="5" link="demo" @click.native="onClick" />
            </list>

            <!-- Basic -->
            <list title="基础">
                <item title="按钮" value="Button" link="/basic/button" />
                <item link="/basic/input" value="Input" title="输入框" />
                <item link="/basic/search" value="Search" title="搜索框" />
                <item link="/basic/radio" value="Radio" title="单选框" />
                <item link="/basic/checkbox" value="Checkbox" title="复选框" />
                <item link="/basic/toggle" value="Toggle" title="开关按钮" />
                <item link="/basic/range" value="Range Slider" title="滑块" />
                <item link="/basic/badge" value="Badge" title="徽章" />
                <item link="/basic/dialog" value="Dialog" title="对话框" />
                <item @click.native="toast" value="Toast" title="文字提示" />
                <item @click.native="loading('正在加载..')" value="Loading" title="加载提示" />
            </list>

            <!-- layout -->
            <list title="布局">
                <item link="/layout/header" value="Header" title="页头" />
                <item link="/layout/itemst" value="List" title="列表" />
                <item link="/layout/cells" value="Cells" title="宫格" />
                <item link="/layout/tabs" value="Tabs" title="选项卡" />
                <item link="/layout/buttonbar" value="ButtonBar" title="iOS 选项卡" />
                <item link="/layout/scalable" value="Scalable" title="缩放" />
            </list>

            <!-- advanced -->
            <list title="高级">
                <item link="/advanced/swiper" value="Swiper" title="轮播" />
                <item link="/advanced/vswipe" value="VSwipe" title="v1.0.0" />
                <item link="/advanced/scroll" value="Scroll" title="下拉刷新、无限加载" />
                <item link="/advanced/scroller" value="Vue Scroller" title="v2.1.0" />
                <item link="/advanced/cascade" value="Cascade" title="级联" />
                <item link="/advanced/accordion" value="Accordion" title="手风琴组件" />
                <item link="/advanced/datepicker" value="Datepicker" title="日期选择器" />
                <item link="/advanced/popup" value="Popup" title="自定义弹层" />
                <item link="/advanced/actionsheet" value="ActionSheet" title="操作列表" />
                <item link="/advanced/tabbar/home" value="Tabbar" title="嵌套路由使用" />
                <item link="/advanced/tabbarWithoutRoutes" value="Tabbar Standalone" title="单独使用" />
                <item link="/advanced/modal" value="Modal" title="模态窗" />
            </list>
        </div>
    </div>
</template>
<script>

    import {List, Item} from '@/components/list'

    export default {
        components: {
            List,
            Item
        },
        data() {
            return {
                sidebar: undefined,
                sidebarRight: undefined
            }
        },

        mounted() {
        },

        destroyed() {
//            $sidebar.destroy()
        },

        methods: {
            onClick () {
                console.log('on click')
            },
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

        }
    }
</script>
