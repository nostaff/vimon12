<template>
    <ion-page v-nav="{title: 'Vonic组件', showBackButton: false}">

        <ion-content class="outer-content">
            <!-- Basic -->
            <ion-list>
                <ion-list-header>组件</ion-list-header>
                <ion-item detail-push @click.native="$router.forward('/demo/button')">
                    按钮<ion-note slot="item-end">Button</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/chip')">
                    Chip<ion-note slot="item-end">Chip</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/badge')">
                    徽章 <ion-note slot="item-end">Badge</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/icons')">
                    图标<ion-note slot="item-end">Icons</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/fabs')">
                    浮动按钮<ion-note slot="item-end">FABs</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/spinner')">
                    加载提示 <ion-note slot="item-end">Spinner</ion-note>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-list-header>Form表单</ion-list-header>
                <ion-item detail-push @click.native="$router.forward('/demo/input')">
                    输入框<ion-note slot="item-end">Input</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/textarea')">
                    多行输入<ion-note slot="item-end">Textarea</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/search')">
                    搜索框<ion-note slot="item-end">SearchBar</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/select')">
                    选择框<ion-note slot="item-end">Select</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/radio')">
                    单选框<ion-note slot="item-end">Radio</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/checkbox')">
                    复选框<ion-note slot="item-end">Checkbox</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/toggle')">
                    开关<ion-note slot="item-end">Toggle</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/range')">
                    滑块<ion-note slot="item-end">Range</ion-note>
                </ion-item>
            </ion-list>

            <ion-list title="布局">
                <ion-item detail-push @click.native="$router.forward('/demo/page')">
                    页面<ion-note slot="item-end">Page</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/list')">
                    列表<ion-note slot="item-end">List</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/toolbar')">
                    工具条<ion-note slot="item-end">Toolbar</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/grid')">
                    栅格 <ion-note slot="item-end">Grid</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/tabs')">
                    Tab选项卡<ion-note slot="item-end">Tabs</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/segment')">
                    分段选项卡<ion-note slot="item-end">Segment</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/menu')">
                    侧边栏/菜单 <ion-note slot="item-end">Menu</ion-note>
                </ion-item>
            </ion-list>

            <ion-list title="数据加载">
                <ion-item detail-push @click.native="$router.forward('/demo/refresher')">
                    下拉刷新<ion-note slot="item-end">Refresher</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/infinite-scroll')">
                    无限加载 <ion-note slot="item-end">InfiniteScroll</ion-note>
                </ion-item>
            </ion-list>

            <!-- advanced -->
            <ion-list title="插件">
                <ion-item detail-push @click.native="$router.forward('/demo/actionsheet')">
                    操作列表 <ion-note slot="item-end">ActionSheet</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/dialog')">
                    对话框 <ion-note slot="item-end">Dialog</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/toast')">
                    文字提示 <ion-note slot="item-end">Toast</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/spinner')">
                    加载提示 <ion-note slot="item-end">Spinner</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/swiper')">
                    轮播 <ion-note slot="item-end">Swiper</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/popup')">
                    弹层<ion-note slot="item-end">Popup</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/picker')">
                    选择器 <ion-note slot="item-end">Picker</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/popover')">
                    弹出框<ion-note slot="item-end">Popover</ion-note>
                </ion-item>
                <ion-item detail-push @click.native="$router.forward('/demo/modal')">
                    模态窗 <ion-note slot="item-end">Modal</ion-note>
                </ion-item>
            </ion-list>

        </ion-content>
    </ion-page>
</template>

<script>
    import IonListHeader from "../../src/components/list/list.header.vue";
    import IonItemGroup from "../../src/components/item/item.group.vue";
    import IonList from "../../src/components/list/list.vue";

    export default {
        components: {
            IonList,
            IonItemGroup,
            IonListHeader},
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

            this.$events.$emit('selectedItem', 4)

            this.$events.$emit('VonicNotification', {
                message: '请先选择'
            })

        },
    }
</script>
