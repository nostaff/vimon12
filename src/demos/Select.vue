<template>
    <div class="page has-navbar" v-nav="{title: '下拉选择框', showBackButton: true}">
        <div class="page-content padding-top">

            <list title="选择框">
                <von-select label="请选择性别" :options="genderOptions" v-model="gender"></von-select>
                <von-select label="是否参与活动" :options="list2" v-model="selected"></von-select>
            </list>

            <p class="padding">
                option gender: {{ gender }}<br>
                option selected: {{ selected }}
            </p>

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
