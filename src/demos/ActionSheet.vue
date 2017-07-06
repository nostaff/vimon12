<template>
    <div class="page has-navbar" v-nav="{title: '操作列表', showBackButton: true}">
        <div class="page-content padding padding-top ">
            <div class="item item-divider">
                ACTION SHEETS
            </div>

            <button class="button button-assertive button-block" @click="showActionSheet()">Show Action Sheet</button>

            <span>根据浏览器自动变换样式</span>

        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            showActionSheet() {
                $actionSheet.show({
                    title: '标题',
                    buttons: {
                        'Action - 1': () => {
                            console.log('action 1 called.')
                        },

                        'Action - 2': () => {
                            console.log('action 2 called.')
                        },

                        'Action - 3': () => {
                            console.log('action 3 called.')
                        }
                    }
                })
            }
        }
    }
</script>
