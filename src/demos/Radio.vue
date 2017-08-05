<template>
    <ion-page v-nav="{title: '单选框', showBackButton: true}">
        <ion-content class="padding-top">

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
                option selected: {{ selected2 }}
            </p>

            <ion-radio title="设置整个Radio的颜色" :options="list" v-model="selected" color="danger" @on-change="change"></ion-radio>
            <ion-radio title="设置每个Option的颜色" :options="list2" v-model="selected2" @on-change="change"></ion-radio>

        </ion-content>
    </ion-page>
</template>
<script>
    export default{
        data() {
            return {
                gender: '女',
                genderOptions: ["男", "女", "保密"],
                selected: false,
                selected2: false,
                list: [{value: true, label: '是'}, {value: false, label: '否'}, {value: 'true1', label: '是1', disabled: true}, {value: 'gfgfgf', label: '否2-RED'}],
                list2: [{value: true, label: 'secondary', color: "secondary"}, {value: false, label: 'dark', color:'dark'}, {value: 'true1', label: 'disabled', disabled: true}, {value: 'gfgfgf', label: 'danger', color:'danger'}],
            }
        },
        methods: {
            change (value) {
                console.log('change:', value)
            }
        }
    }
</script>
