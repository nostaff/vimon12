<template>
    <div class="page has-navbar" v-nav="{title: '浮动按钮', showBackButton: true}">
        <div class="page-content padding-top">

                <ion-fabs top right mini icon="add" :options="downItems" @on-item-clicked="onClick"></ion-fabs>

                <ion-fabs center middle icon="ion-md-share" :options="list" color="secondary" @on-item-clicked="onClick"></ion-fabs>

                <ion-fabs top left icon="arrow-dropright" :options="rightItems" color="danger" @on-item-clicked="onClick"></ion-fabs>

        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                rightItems: {
                    right: [
                        {
                            name: 'facebook',
                            icon: 'ion-logo-facebook',
                            color: 'secondary'
                        },
                        {
                            name: 'twitter',
                            icon: 'ion-logo-twitter',
                            color: 'primary'
                        },
                        {
                            name: 'vimeo',
                            icon: 'ion-logo-vimeo',
                            color: 'danger'
                        },
                        {
                            name: 'googleplus',
                            icon: 'ion-logo-googleplus',
                        }
                    ]
                },

                downItems: {
                    bottom: [
                        {
                            name: 'facebook',
                            icon: 'ion-logo-facebook',
                        },
                        {
                            name: 'twitter',
                            icon: 'ion-logo-twitter',
                        },
                        {
                            name: 'vimeo',
                            icon: 'ion-logo-vimeo',
                        },
                        {
                            name: 'googleplus',
                            icon: 'ion-logo-googleplus',
                        }
                    ]
                },

                list: {
                    left: [
                        {
                            name: 'facebook',
                            icon: 'ion-logo-facebook',
                            color: 'secondary'
                        }
                        ],
                    right: [
                        {
                            name: 'twitter',
                            icon: 'ion-logo-twitter',
                            color: 'primary'
                        }
                    ],
                    top: [
                        {
                            name: 'vimeo',
                            icon: 'ion-logo-vimeo',
                            color: 'danger'
                        }
                        ],
                    bottom: [
                        {
                            name: 'googleplus',
                            icon: 'ion-logo-googleplus',
                        }
                    ]
                }
            }
        },

        methods: {
            onClick(item) {
                console.log(item)
            }
        },
    }
</script>
