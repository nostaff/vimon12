<template>
    <ion-page v-nav="{title: '浮动按钮', showBackButton: true}">
        <ion-content class="padding-top">

                <ion-fabs top right mini icon="add" :options="downItems" @on-item-clicked="onClick"></ion-fabs>

                <ion-fabs center middle icon="md-share" :options="list" color="secondary" @on-item-clicked="onClick"></ion-fabs>

                <ion-fabs top left icon="arrow-dropright" :options="rightItems" color="danger" @on-item-clicked="onClick"></ion-fabs>

        </ion-content>
    </ion-page>
</template>
<script>
    export default {
        data(){
            return {
                rightItems: {
                    right: [
                        {
                            name: 'facebook',
                            icon: 'logo-facebook',
                            color: 'secondary'
                        },
                        {
                            name: 'twitter',
                            icon: 'logo-twitter',
                            color: 'primary'
                        },
                        {
                            name: 'vimeo',
                            icon: 'logo-vimeo',
                            color: 'danger'
                        },
                        {
                            name: 'googleplus',
                            icon: 'logo-googleplus',
                        }
                    ]
                },

                downItems: {
                    bottom: [
                        {
                            name: 'facebook',
                            icon: 'logo-facebook',
                        },
                        {
                            name: 'twitter',
                            icon: 'logo-twitter',
                        },
                        {
                            name: 'vimeo',
                            icon: 'logo-vimeo',
                        },
                        {
                            name: 'googleplus',
                            icon: 'logo-googleplus',
                        }
                    ]
                },

                list: {
                    left: [
                        {
                            name: 'facebook',
                            icon: 'logo-facebook',
                            color: 'secondary'
                        }
                        ],
                    right: [
                        {
                            name: 'twitter',
                            icon: 'logo-twitter',
                            color: 'primary'
                        }
                    ],
                    top: [
                        {
                            name: 'vimeo',
                            icon: 'logo-vimeo',
                            color: 'danger'
                        }
                        ],
                    bottom: [
                        {
                            name: 'googleplus',
                            icon: 'logo-googleplus',
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
