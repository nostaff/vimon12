<template>
    <ion-page v-nav="{title: '输入框', showBackButton: true}">
        <ion-content class="outer-content">

            <ion-list title="有标签-定宽">
                <ion-item>
                    <ion-label slot="item-label" fixed>Username</ion-label>
                    <ion-input slot="item-content" v-model="username" type="text"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label slot="item-label" fixed>Password</ion-label>
                    <ion-input slot="item-content" v-model="password" type="password"></ion-input>
                </ion-item>
            </ion-list>

            <ion-list title="有标签-不定宽">
                <ion-item>
                    <ion-label slot="item-label">用户名：</ion-label>
                    <ion-input slot="item-content" v-model="username" type="text"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label slot="item-label">密码：</ion-label>
                    <ion-input slot="item-content" v-model="password" type="password"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label slot="item-label">确认密码：</ion-label>
                    <ion-input slot="item-content" v-model="password" type="password"></ion-input>
                </ion-item>
            </ion-list>

            <ion-list title="无标签">
                <ion-item>
                    <ion-input slot="item-content" :clearInput="true" placeholder="Username"  v-model="username" ></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input slot="item-content" :clearInput="false" v-model="password" type="password" placeholder="Password" ></ion-input>
                </ion-item>
            </ion-list>


            <ion-list title="Input Floating">
                <ion-item>
                    Username0
                    <ion-input floating slot="item-content" v-model="username"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label slot="item-label">Password</ion-label>
                    <ion-input floating slot="item-content" :clearInput="true" v-model="password" type="password"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label slot="item-label">Date</ion-label>
                    <ion-input floating slot="item-content" :clearInput="false" v-model="date" type="password"></ion-input>
                </ion-item>
            </ion-list>

            <ion-list title="Input Stacked">
                <ion-item>
                    Username1
                    <ion-input stacked slot="item-content" v-model="username"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label slot="item-label">Password</ion-label>
                    <ion-input stacked slot="item-content" :clearInput="true" v-model="password" type="password"></ion-input>
                </ion-item>
            </ion-list>

        </ion-content>
    </ion-page>
</template>
<script>
    import IonItemDivider from "../vonic/components/item/item";
    import IonLabel from "../vonic/components/label/index";
    export default{
        components: {
            IonLabel,
            IonItemDivider},
        data() {
            return {
                username: '',
                password: '',
                date: '',
                tel: '',
                phone: '',
                email: ''
            }
        },
        computed: {
            // a computed getter
            hasLabel: function () {
                return "有标签: " + this.username
            },

            noLabel: function () {
                return "无标签: " + this.tel
            },
        }

    }
</script>
