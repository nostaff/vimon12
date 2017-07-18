<template>
    <div class="page has-navbar" v-nav="{title: '输入框', showBackButton: true}">
        <div class="page-content">

            <!-- type: text, password, email, tel -->
            <list :title="hasLabel">
                <von-input type="text" v-model="username" placeholder="用户名" label="用户名"></von-input>
                <von-input type="password" v-model="password" placeholder="密码" label="密码"></von-input>
            </list>

            <list :title="noLabel">
                <von-input type="tel" v-model="tel" placeholder="手机"></von-input>
                <von-input type="tel" v-model="tel" placeholder="手机"></von-input>
                <von-input type="tel" v-model="tel" placeholder="手机"></von-input>
            </list>

            <list title="带图标:">
                <von-input type="text" placeholder="用户名" icon-class="ion-search"></von-input>
                <von-input type="password" placeholder="密码"  icon-class="ion-search"></von-input>
            </list>

            <list title="堆叠效果：">
                <von-input type="text" v-model="username" placeholder="Username" label="Username" stacked-label="true"></von-input>
                <von-input type="email" v-model="email" placeholder="Email" label="Email" stacked-label="true"></von-input>
                <von-input type="tel" v-model="phone" placeholder="Phone" label="Phone" stacked-label="true"></von-input>
            </list>

            <list title="悬浮效果：">
                <von-input type="text" v-model="username" placeholder="Username" label="Username" floating-label="true"></von-input>
                <von-input type="email" v-model="email" placeholder="Email" label="Email" floating-label="true"></von-input>
                <von-input type="tel" v-model="phone" placeholder="Phone" label="Phone" floating-label="true"></von-input>
            </list>


            <list>
                <item class="item-input-inset">
                    <label class="item-input-wrapper">
                        <i class="icon ion-ios-search placeholder-icon"></i>
                        <input type="text" placeholder="Email">
                    </label>
                    <button class="button button-small">
                        Submit
                    </button>
                </item>
            </list>

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
