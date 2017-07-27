<template>
    <div class="page has-navbar" v-nav="{title: '复选框', showBackButton: true}">
        <div class="page-content">

            <ion-checkbox title="选择感兴趣的板块:" :options="topics" v-model="chosenTopics" theme="positive"></ion-checkbox>

            <p class="padding">
                chosen Topics: {{ chosenTopics }}
            </p>

            <ion-checkbox title="去过的省份:" :options="lists" v-model="chosenAreas" theme="royal"></ion-checkbox>

            <p class="padding">
                chosen Areas: {{ chosenAreas }}
            </p>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                chosenTopics: [],
                chosenAreas: ['gd', 'sd'],
                topics: ["娱乐", "电影", "减肥", "搞笑", "科技"],
                lists: [{key: 'gd', value: '广东', checked: true}, {key: 'gx', value: '广西'}, {key: 'sd', value: '山东', checked: true}, {key: 'sx', value: '山西'}],

            }
        },

        watch: {
            chosenTopics: (newVal) => {
                console.log(newVal)
            },
            chosenAreas: (newVal) => {
                console.log(newVal)
            }
        }
    }
</script>
