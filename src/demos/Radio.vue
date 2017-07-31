<template>
    <div class="page has-navbar" v-nav="{title: '单选框', showBackButton: true}">
        <div class="page-content padding-top">

            <!--<ion-checker>-->
                <!--<ion-list-header>-->
                    <!--Language: {{language}}-->
                <!--</ion-list-header>-->

                <!--<ion-item>-->
                    <!--<ion-label slot="item-label">Go</ion-label>-->
                    <!--<ion-radio slot="item-content" checked value="go"></ion-radio>-->
                <!--</ion-item>-->

                <!--<ion-item>-->
                    <!--<ion-label slot="item-label">Rust</ion-label>-->
                    <!--<ion-radio slot="item-content" value="rust"></ion-radio>-->
                <!--</ion-item>-->

                <!--<ion-item>-->
                    <!--<ion-label slot="item-label">Python [disabled]</ion-label>-->
                    <!--<ion-radio slot="item-content" value="python" disabled></ion-radio>-->
                <!--</ion-item>-->

                <!--<ion-item>-->
                    <!--<ion-label slot="item-label">PHP</ion-label>-->
                    <!--<ion-radio slot="item-content" value="php"></ion-radio>-->
                <!--</ion-item>-->
            <!--</ion-checker>-->

            <ion-radio title="请选择性别" :options="genderOptions" v-model="gender" @on-change="change"></ion-radio>

            <p class="padding">
                option gender: {{ gender }}<br>
                option selected: {{ selected }}
            </p>

            <ion-radio title="请选择" :options="list2" v-model="selected" color="danger" @on-change="change"></ion-radio>

        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                gender: '女',
                genderOptions: ["男", "女", "保密"],
                selected: false,
                list2: [{value: true, label: '是'}, {value: false, label: '否'}],
            }
        },
        methods: {
            change (value) {
                console.log('change:', value)
            }
        }
    }
</script>
