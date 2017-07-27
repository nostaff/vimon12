<template>
    <div class="page has-navbar" v-nav="{title: '输入框', showBackButton: true}">
        <div class="page-content">

            <ion-list :title="hasLabel">
                <ion-input type="text" v-model="username" placeholder="用户名" label="用户名"></ion-input>
                <ion-input type="password" v-model="password" placeholder="密码" label="密码"></ion-input>
            </ion-list>

            <ion-list :title="noLabel">
                <ion-input type="tel" v-model="tel" placeholder="手机"></ion-input>
                <ion-input type="tel" v-model="tel" placeholder="手机"></ion-input>
                <ion-input type="tel" v-model="tel" placeholder="手机"></ion-input>
            </ion-list>

            <ion-list title="带图标:">
                <ion-input type="text" placeholder="用户名" icon="search"></ion-input>
                <ion-input type="password" placeholder="密码"  icon="search"></ion-input>
            </ion-list>

            <ion-list title="堆叠效果：">
                <ion-input type="text" v-model="username" placeholder="Username" label="Username" stacked></ion-input>
                <ion-input type="email" v-model="email" placeholder="Email" label="Email" stacked></ion-input>
                <ion-input type="tel" v-model="phone" placeholder="Phone" label="Phone" stacked></ion-input>
            </ion-list>

            <ion-list title="悬浮效果：">
                <ion-input type="text" v-model="username" label="Username" floating></ion-input>
                <ion-input type="email" v-model="email" label="Email" floating></ion-input>
                <ion-input type="tel" v-model="phone" label="Phone" floating></ion-input>
            </ion-list>


            <ion-list>
                <ion-input type="text" v-model="username" label="Username" floating></ion-input>

                <ion-item>

                    <label class="item-input-wrapper">
                        <i class="icon ion-ios-search"></i>
                        <input type="text" placeholder="Email">
                    </label>
                    <button class="button button-small">
                        Submit
                    </button>
                </ion-item>
            </ion-list>

            <div class="padding">
                <button class="button button-positive button-block">确认</button>
            </div>


        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                username: '',
                password: '',
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
