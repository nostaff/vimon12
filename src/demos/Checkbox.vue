<template>
    <ion-page v-nav="{title: '复选框', showBackButton: true}">
        <ion-content>

            <ion-checkbox title="选择感兴趣的板块:" :options="topics" v-model="chosenTopics" @on-change="change"></ion-checkbox>

            <p class="padding">
                chosen Topics: {{ chosenTopics }}
            </p>

            <ion-checkbox title="去过的省份:" label-position="left" color="secondary" :options="lists" v-model="chosenAreas" @on-change="change"></ion-checkbox>

            <p class="padding">
                chosen Areas: {{ chosenAreas }}
            </p>

            <ion-checkbox title="设置选项的颜色:" :options="lists2" v-model="chosenAreas2" @on-change="change"></ion-checkbox>

            <p class="padding">
                chosen Areas: {{ chosenAreas2 }}
            </p>

        </ion-content>
    </ion-page>
</template>
<script>
    export default{
        data() {
            return {
                chosenTopics: ["电影", "科技"],
                chosenAreas: ['gd', 'sd'],
                chosenAreas2: ['bj','gd', 'sd'],
                topics: ["娱乐", "电影", "减肥", "搞笑", "科技"],
                lists: [{value: 'gd', label: '广东'}, {value: 'gx', label: '广西'}, {value: 'sd', label: '山东'}, {value: 'sx', label: '山西'}],
                lists2: [{value: 'bj', label: '北京', color: 'dark'}, {value: 'gd', label: '广东', color: 'primary'}, {value: 'gx', label: '广西', color: 'secondary'}, {value: 'sd', label: '山东', color: 'light', disabled: true}, {value: 'sx', label: '山西', color: 'danger'}],

            }
        },
        methods: {
            change (value) {
                console.log('change:', value)
            }
        },
    }
</script>
