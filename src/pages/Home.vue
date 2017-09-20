<template>
    <ion-page class="home">
        <ion-navbar title="心理无忧">
            <img src="../assets/logo.png" width="30" height="30" slot="left-item">
        </ion-navbar>

        <ion-content class="">
            <swiper ref="swiper"
                    autoplay="true"
                    interval="3000"
                    direction="horizontal"
                    width="100%"
                    height="180"
                    pager-color="#ea5a49"
                    pager-bg-color="#e5e4e3"
                    hide-pager="false"
            >
                <swiper-item><img src="../assets/images/y-banner01.jpg"></swiper-item>
                <swiper-item><img src="../assets/images/y-banner03.jpg"></swiper-item>
                <swiper-item><img src="../assets/images/y-banner03.jpg"></swiper-item>
            </swiper>
            <cells inner-border="false" class="features" :items="entrances" :on-cell-click="onCellClick" row="1"></cells>

            <div class="list-box">
                <h3>我们的服务</h3>
                <div class="info-desc bt_line_fix"></div>
                <div class="serve_phone fl f-12 fc-gray">
                    <img src="https://static.yidianling.com/mobile/images/home_serve01.png" width="60">
                    <h3>电话倾诉</h3>一对一私密对话<br>已有<span class="fc-darkgreen">120561</span>人连接
                </div>
                <div class="serve_expert fl f-12 fc-gray">
                    <div class="fl"><h3>找专家</h3>一对一预约咨询</div>
                    <div class="fr"><img src="https://static.yidianling.com/mobile/images/home_serve02.png" width="60"></div>
                </div>
                <div class="serve_ask fl f-12 fc-gray">
                    <div class="fl"><h3>在线问答</h3>免费提问 专业解答</div>
                    <div class="fr"><img src="https://static.yidianling.com/mobile/images/home_serve03.png" width="60"></div>
                </div>
            </div>
            <div class="list-box">
                <h3>帮你解决</h3>
                <div class="info-desc bt_line_fix"></div>
                <div class="items">
                    <div class="item_area box1">婚姻恋爱<a class="link-cover" href="/experts/search?cat=1"></a></div>
                    <div class="item_area box2">个人成长<a class="link-cover" href="/experts/search?cat=26"></a></div>
                    <div class="item_area box3">情绪压力<a class="link-cover" href="/experts/search?cat=27"></a></div>
                    <div class="item_area box4">孩子教育<a class="link-cover" href="/experts/search?cat=23"></a></div>
                    <div class="item_area box5">职场发展<a class="link-cover" href="/experts/search?cat=22"></a></div>
                    <div class="item_area box6">性心理<a class="link-cover" href="/experts/search?cat=24"></a></div>
                </div>
            </div>

            <div class="list-box experts-index">
                <expert-list title="推荐专家" :expert-lists="travelListIndex" more-link="/experts"></expert-list>
                <router-link class="list-footer" to="/experts">
                    <div class="text-center">
                        更多专家 <i class="fa fa-angle-right"></i>
                    </div>
                </router-link>
            </div>

            <div class="list-box">
                <expert-list title="心理测试" :expert-lists="travelListIndex" more-link="/experts"></expert-list>
            </div>

        </ion-content>
    </ion-page>
</template>

<script>

    import ExpertList from '../components/ExpertList'

    import { mapGetters } from 'vuex'

    export default {
        components: {
            ExpertList
        },
        data() {
            return {
                entrances: [
                    '<div class="entrance assertive"><i class="icon ion-ios-flame"></i><br><span>中科院专家顾问</span></div>',
                    '<div class="entrance energized"><i class="icon ion-ios-star"></i><br><span>国家认证咨询师</span></div>',
                    '<div class="entrance balanced"><i class="icon ion-ios-location"></i><br><span>长期服务公益</span></div>',
                ]
            }
        },
        created() {
            if (this.travelListIndex.length == 0) {
                this.$store.dispatch('getTravelsList')
            }
        },
        computed: {
            ...mapGetters([
                'travelListIndex'
            ])
        },

        methods: {
            onCellClick(cellIndex) {
                console.log('cell ' + cellIndex + ' clicked');
            },

        }
    }
</script>


<style lang="scss">

    .home {
        .features {
            margin-top: 0;
        }
        .entrance {
            height: 80px;
            padding: 15px 0;

            .icon {
                font-size: 30px;
                line-height: 30px;
                width: 30px;
                height: 30px;
                margin-bottom: 6px;
            }
            span {
                font-size: 14px;
                line-height: 14px;
            }
        }
        .link-cover {
            display: inline-block;
            zoom: 1;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
        .fc-darkgreen {
            color: #16c95e;
        }
        .list-box {
            margin-top: 12px;
            border-top: none;
            border-bottom: 1px solid #efefef;
            margin-bottom: 0;
            background-color: #fff;
            position: relative;
            float: left;
            width: 100%;

            h3 {
                line-height: 40px;
                font-size: 16px;
                color: #444;
                margin-left: 15px;
                margin-bottom: 0;

                span {
                    position: absolute;
                    top: 0;
                    right: 15px;
                    font-size: 12px;
                    a {
                        color: #747474;
                    }
                }
            }

            .info-desc, .info-answer {
                border-top: 1px solid #EFEFEF;
                margin-left: 15px;
                margin-right: 0;
            }
            .bt_line_fix {
                border-bottom: none;
            }

            .serve_phone {
                width: 45%;
                border-right: 1px solid #efefef;
                text-align: center;
                padding: 15px 0;
                position: relative;
            }
            .serve_expert, .serve_ask {
                padding: 12px 0 12px 15px;
                border-bottom: 1px solid #efefef;
                width: 50%;
            }
            .serve_ask {
                border-bottom: none;
            }
            .serve_expert h3, .serve_phone h3, .serve_ask h3 {
                font-size: 17px;
                font-weight: bold;
            }
            .serve_phone h3 {
                color: #16c95e;
            }

            .serve_expert h3 {
                color: #52a0ef;
                margin-top: 6px;
            }

            .serve_ask h3 {
                color: #F9A42F;
                margin-top: 6px;
            }

            .items {
                overflow: hidden;
                padding: 14px;
            }

            .item_area {
                position: relative;
                color: #fff;
                font-size: 14px;
                float: left;
                width: 32%;
                height: 40px;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                border-radius: 3px;
                text-align: center;
                line-height: 40px;

                &.box1 {
                    background: #ff6262;
                    margin-bottom: 10px;
                }
                &.box2 {
                    background: #46c7bf;
                    margin: 0 2%;
                    margin-bottom: 10px;
                }
                &.box3 {
                    background: #cc87f0;
                    margin-bottom: 10px;
                }
                &.box4 {
                    background: #6acf67;
                }
                &.box5 {
                    background: #84baf7;
                    margin: 0 2%;
                }
                &.box6 {
                    background: #ff92d0;
                }
            }
        }

        .list-footer {
            line-height: 60px;
            padding-top: 0;
            color: #698ec7;
        }
    }
</style>
