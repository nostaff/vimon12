<template>
    <div class="page has-navbar" v-nav="{title: '开关按钮', showBackButton: true}">
        <div class="page-content padding-top">
            <ion-toggle v-model="pushNotification"></ion-toggle>
            <div class="item item-divider">开关状态: <span>{{ pushNotification ? '开启' : '关闭' }}</span></div>

            <div class="padding">
                <div class="button button-block" @click="triggerToggle()">手动切换</div>
            </div>

            <div class="item item-divider">其他主题色</div>
            <ion-toggle theme="primary"></ion-toggle>
            <ion-toggle theme="primary" v-model="values[0]"></ion-toggle>
            <ion-toggle theme="secondary" v-model="values[1]"></ion-toggle>
            <ion-toggle theme="danger" v-model="values[2]"></ion-toggle>
            <ion-toggle theme="light" v-model="values[3]"></ion-toggle>
            <ion-toggle theme="dark" v-model="values[4]"></ion-toggle>
            <ion-toggle theme="energized" v-model="values[5]"></ion-toggle>
            <ion-toggle theme="royal" v-model="values[5]"></ion-toggle>
            <ion-toggle theme="subtle" v-model="values[5]"></ion-toggle>
            <ion-toggle theme="bright" v-model="values[5]"></ion-toggle>
            <ion-toggle theme="vibrant" v-model="values[5]"></ion-toggle>


            <ion-list title="开关按钮">
                <ion-item class="item-toggle">
                    Frodo Baggins
                    <ion-toggle slot="item-right" theme="vibrant"></ion-toggle>
                </ion-item>
                <ion-item class="item-toggle">
                    Sam
                    <ion-toggle slot="item-right" theme="energized"></ion-toggle>
                </ion-item>
                <ion-item class="item-toggle">
                    Éowyn
                    <ion-toggle slot="item-right" theme="danger"></ion-toggle>
                </ion-item>
                <ion-item class="item-toggle">
                    Legolas
                    <ion-toggle slot="item-right" theme="royal"></ion-toggle>
                </ion-item>
                <ion-item class="item-toggle">
                    Gimli
                    <ion-toggle slot="item-right" :value="true" theme="danger"></ion-toggle>
                </ion-item>
                <ion-item class="item-toggle">
                    Saruman
                    <ion-toggle slot="item-right" theme="dark"></ion-toggle>
                </ion-item>
                <ion-item class="item-toggle">
                    Gandalf
                    <ion-toggle slot="item-right" :value="true" theme="energized"></ion-toggle>
                </ion-item>
                <ion-item class="item-toggle">
                    Arwen
                    <ion-toggle slot="item-right" theme="royal"></ion-toggle>
                </ion-item>
                <ion-item class="item-toggle">
                    Treebeard
                    <ion-toggle slot="item-right" :value="true" theme="secondary"></ion-toggle>
                </ion-item>

            </ion-list>
        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return {
                toggleText: "是否开启推送",
                pushNotification: true,

                values: [true, true, true, true, true, true]
            }
        },

        methods: {
            triggerToggle() {
                this.pushNotification = !this.pushNotification
            }
        },

        watch: {
            values: (newVal) => {
                console.log(newVal)
            }
        }
    }
</script>
