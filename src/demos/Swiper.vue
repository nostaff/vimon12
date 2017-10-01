<template>
    <ion-page class="page-swiper" v-nav="{title: '轮播', showBackButton: true}">
        <ion-content class="padding-top">

            <ion-item is-link @click.native="$router.forward('/demo/swiper/default')">
                Horizontal (default)<span class="item-note">水平 (默认)</span>
            </ion-item>

            <ion-item is-link  @click.native="$router.forward('/demo/swiper/vertical')">
                Vertical <span class="item-note">垂直</span>
            </ion-item>

            <ion-item is-link  @click.native="swiperInPopup()">
                Swiper in Popup<span class="item-note">弹层内轮播</span>
            </ion-item>

        </ion-content>
    </ion-page>
</template>
<style lang="scss">

    .popup.swiper-popup {
        .popup-body {
            padding: 0;
            p {
                font-size: 14px;
                line-height: 30px;
                text-align: center;
                margin-bottom: 0;
            }

            .swiper {

                .swiper-item {
                    padding-top: 50px;

                    h1 {
                        color: #fff;
                        font-size: 32px;
                        line-height: 50px;
                        text-align: center;
                        font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
                    }

                    &:nth-of-type(1) {
                        background-color: #0a9dc7;
                    }

                    &:nth-of-type(2) {
                        background-color: #44cc00;
                    }

                    &:nth-of-type(3) {
                        background-color: #ffc900;
                    }
                }
            }
        }
    }

</style>
<script>
    export default{
        data() {
            return {
                popupShowed: false,
                swiperPopupButtons: [
                    {
                        text: '关闭'
                    }
                ]
            }
        },

        methods: {
            swiperInPopup() {
                const template = `
          <p>弹层内轮播</p>
          <swiper direction="horizontal" width="100%" height="150">
            <swiper-item>
              <h1>Item 1</h1>
            </swiper-item>

            <swiper-item>
              <h1>Item 2</h1>
            </swiper-item>

            <swiper-item>
              <h1>Item 3</h1>
            </swiper-item>
          </swiper>
        `

                let popup = $popup.fromTemplate(template, {
                    cssClass: 'swiper-popup',
                    buttons: [
                        {
                            text: '确定'
                        }
                    ]
                })

                popup.present()
            }
        }
    }
</script>
