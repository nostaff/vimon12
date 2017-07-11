<template>
    <!--<router-link class="expert" :to="{path: '/expert/'+ expert.expertId}">-->
        <!--<img :src="expert.avatar" :alt="expert.title">-->
        <!--<div class="summary">-->
            <!--<strong>{{expert.name}}</strong>-->
            <!--<div class="content">-->
                <!--<span class="fc-green">{{expert.joinNum}}</span>人已咨询过 &nbsp;&nbsp;-->
                <!--收到 <span class="fc-green">{{expert.joinNum}}</span>个好评-->
                <!--<p>{{expert.desc}}</p>-->
            <!--</div>-->
        <!--</div>-->
    <!--</router-link>-->

    <router-link class="expert" to="/experts/541"><img src="https://img.yidianling.com/file/2016/01/wjlpgea6hd584j9u.jpg!s200x200" alt="心理咨询师王新爱">
        <div class="summary">
            <strong>王新爱</strong>
            <div class="content">
                <font class="fc-green">2150</font>人已咨询过 &nbsp;&nbsp;
                收到 <font class="fc-green">2342</font>个好评
                <!-- 帮助过<font class="fc-darkgreen"></font>人 收到<font class="fc-darkgreen"></font>次感谢<br> -->
                <p>擅长领域：婚姻家庭：1.恋爱择偶咨询。恋爱咨询；婚前咨询；再婚择偶咨询。
                    2.夫妻关系咨询。夫妻关系调试；生育咨询；婚姻变故咨询（婚外恋、婚外性、分居、遗弃、离婚）。
                    3.亲子关系咨询。亲子沟通；养父母与养子女关系咨询；继父母与继子女关系咨询。
                    4.家庭冲突咨询。家庭冲突咨询；家庭变故咨询。
                    职业发展：职场人际关系。
                    个人成长：早年创伤修复，认知调整。
                    青少年：学习压力、考试焦虑、早恋心理调适。</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        expert: Object
    },
	data() {
		return {

		}
	}
}
</script>

<style scoped lang="scss">
    .expert {
        display: block;
        overflow: hidden;
        margin-top: 15px;
        color: #666;
        text-decoration: none;
        border-bottom: 1px solid #ebebeb;
        position: relative;
        margin-left: 0px;

        img {
            width: 65px;
            margin-bottom: 1em;
            border-radius: 50%;
            float: left;
        }

        .summary {
            width: 77%;
            float: left;
            padding-left: 1em;
            box-sizing: border-box;
            strong {
                display: block;
                font-size: 18px;
                color: #333
            }
            .content {
                margin-top: 5px;
                clear: both;
                margin-right: 20px;
                overflow: hidden;
                font-size: 14px;
                margin-bottom: 1.5em;
                text-overflow: ellipsis;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;

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
    }

</style>