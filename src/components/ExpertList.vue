<template>
    <list>
        <item class="title" v-if="title" :link="moreLink">
            {{title}}
            <span class="item-note" v-if="moreLink">更多</span>
        </item>
        <item class="expert" v-for="expert in expertLists" :key="expert.id" link="/expert/10001">
            <!--<div class="item-avatar">-->
                <!--<img :src="expert.avatar" :alt="expert.title">-->
                <!--<h2>{{expert.name}}</h2>-->
                <!--<span class="fc-green">{{expert.joinNum}}</span>人已咨询过 &nbsp;&nbsp;-->
                <!--收到 <span class="fc-green">{{expert.joinNum}}</span>个好评-->
                <!--<p>{{expert.desc}}</p>-->
            <!--</div>-->

            <div class="item-avatar">
                <img src="http://ionicframework.com/img/docs/blue-album.jpg" alt="心理咨询师王新爱">
                <h2>王新爱</h2>
                <p><span class="fc-green">2150</span>人已咨询过 &nbsp;&nbsp;
                收到 <span class="fc-green">2342</span>个好评</p>
                <p>擅长领域：婚姻家庭：1.恋爱择偶咨询。恋爱咨询；婚前咨询；再婚择偶咨询。
                    2.夫妻关系咨询。夫妻关系调试；生育咨询；婚姻变故咨询（婚外恋、婚外性、分居、遗弃、离婚）。
                    3.亲子关系咨询。亲子沟通；养父母与养子女关系咨询；继父母与继子女关系咨询。
                    4.家庭冲突咨询。家庭冲突咨询；家庭变故咨询。
                    职业发展：职场人际关系。
                    个人成长：早年创伤修复，认知调整。
                    青少年：学习压力、考试焦虑、早恋心理调适。</p>
            </div>
        </item>
    </list>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        moreLink: {
            type: String,
            default: ''
        },
        expertLists: Array
    },
}
</script>

<style scoped lang="scss">

.expert {
    .item-avatar {
        padding-left: 80px;
        min-height: 80px;
        > img:first-child, .item-image {
            position: absolute;
            top: 15px;
            left: 15px;
            max-width: 65px;
            max-height: 65px;
            width: 100%;
            border-radius: 50%;
        }

        p {
            margin-top: 8px;
            margin-bottom: 0;
            line-height: 20px;
            color: #666;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            white-space: normal;
            display: -webkit-box;
            text-overflow: ellipsis;
        }
    }
}
</style>