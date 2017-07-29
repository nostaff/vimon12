<template>
    <div class="page has-navbar" v-nav="{title: '搜索框', showBackButton: true}">
        <div class="page-content">

            <ion-searchbar v-model="keywords" placeholder="输入关键字" :on-change="onChange"
                           :on-cancel="onCancel"></ion-searchbar>

            <div class="item" v-show="searching">
                searching for '{{keywords}}'.
            </div>

        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                keywords: '',
                searching: false
            }
        },

        methods: {
            onChange(keywords) {
                console.log(keywords)
                this.searching = true;
            },

            onCancel() {
                this.searching = false;
                this.keywords = ''
            }
        }
    }
</script>
