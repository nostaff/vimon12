<template>
    <div class="page has-navbar" v-nav="{title: '栅格 非组件', showBackButton: true}">

        <div class="page-content content-padded">

            <div class="padding">
                同等大小网格：
            </div>
            <div class="row">
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
            </div>

            <div class="padding">
                指定列宽：
            </div>

            <div class="row">
                <div class="col col-50">
                    <div class="col-demo">.col.col-50</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
            </div>

            <div class="row">
                <div class="col col-75">
                    <div class="col-demo">.col.col-75</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col col-75">
                    <div class="col-demo">.col.col-75</div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
            </div>

            <div class="padding">
                有偏移量的网格：
            </div>
            <div class="row">
                <div class="col col-33 col-offset-33">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
            </div>

            <div class="row">
                <div class="col col-33">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col col-33 col-offset-33">
                    <div class="col-demo">.col</div>
                </div>
            </div>

            <div class="row">
                <div class="col col-33 col-offset-67">
                    <div class="col-demo">.col</div>
                </div>
            </div>

            <div class="padding">
                纵向对齐的网格：
            </div>
            <div class="row">
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">1<br>2<br>3<br>4</div>
                </div>
            </div>

            <div class="row">
                <div class="col col-top">
                    <div class="col-demo">.col-top</div>
                </div>
                <div class="col col-center">
                    <div class="col-demo">.col-center</div>
                </div>
                <div class="col col-bottom">
                    <div class="col-demo">.col-bottom</div>
                </div>
                <div class="col">
                    <div class="col-demo">1<br>2<br>3<br>4</div>
                </div>
            </div>

            <div class="row row-top">
                <div class="col">
                    <div class="col-demo">.row-top</div>
                </div>
                <div class="col">
                    <div class="col-demo">.row-top</div>
                </div>
                <div class="col">
                    <div class="col-demo">.row-top</div>
                </div>
                <div class="col">
                    <div class="col-demo">1<br>2<br>3<br>4</div>
                </div>
            </div>

            <div class="row row-center">
                <div class="col">
                    <div class="col-demo">.row-center</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">1<br>2<br>3<br>4</div>
                </div>
            </div>

            <div class="row row-bottom">
                <div class="col">
                    <div class="col-demo">.row-bottom</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">.col</div>
                </div>
                <div class="col">
                    <div class="col-demo">1<br>2<br>3<br>4</div>
                </div>
            </div>


        </div>
    </div>
</template>

<style lang="scss">

    .col-demo {
        padding: 5px;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 2px;
        background: #f7f7f7;
        text-align: center;
    }

</style>
<script>
    export default{
        data(){
            return {
                icons: [
                    'ion-android-arrow-up',
                    'ion-android-arrow-down',
                    'ion-android-arrow-back',
                    'ion-android-arrow-forward',

                    'ion-ios-arrow-up',
                    'ion-ios-arrow-down',
                    'ion-ios-arrow-left',
                    'ion-ios-arrow-right',

                    'ion-ios-arrow-thin-up',
                    'ion-ios-arrow-thin-down',
                    'ion-ios-arrow-thin-left',
                    'ion-ios-arrow-thin-right',

                    'ion-android-arrow-up',
                    'ion-android-arrow-down',
                    'ion-android-arrow-back',
                    'ion-android-arrow-forward',
                ],

                entrances: [
                    '<div class="entrance assertive"><i class="icon ion-ios-flame"></i><br><span>热门</span></div>',
                    '<div class="entrance energized"><i class="icon ion-ios-star"></i><br><span>好评</span></div>',
                    '<div class="entrance balanced"><i class="icon ion-ios-location"></i><br><span>附近</span></div>',
                    '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>',
                ]
            }
        },

        methods: {
            onCellClick(cellIndex) {
                console.log('cell ' + cellIndex + ' clicked');
            },

            getIcon(iconName, color) {
                return '<i class="' + iconName + '"></i>'
            },

            getItems(n) {
                let items = []
                for (let i = 0; i < n; i++) {
                    items.push(this.getIcon(this.icons[i]))
                }
                return items
            }
        }
    }
</script>
