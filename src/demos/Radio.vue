<template>
    <div class="page has-navbar" v-nav="{title: '单选框', showBackButton: true}">
        <div class="page-content padding-top">

            <ion-radio title="请选择性别：" :options="genderOptions" v-model="gender"></ion-radio>

            <p class="padding">
                option gender: {{ gender }}<br>
                option selected: {{ selected }}
            </p>

            <ion-radio title="请选择：" :options="list2" v-model="selected"></ion-radio>

        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                gender: '女',
                genderOptions: ["男", "女", "保密"],
                selected: false,
                list2: [{key: true, value: '是'}, {key: false, value: '否'}],
            }
        }
    }
</script>
