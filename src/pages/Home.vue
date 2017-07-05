<template>
	<div class="home" v-tabbar-item-index="0">
		<von-header theme="light">
			<!--<button class="button button-icon ion-ios-arrow-back" slot="left" @click="$router.back('/home')"></button>-->
			<img src="../assets/logo.png" width="30" height="30" slot="left">
			<span slot="title">首页</span>
			<!--<button class="button button-icon ion-navicon" slot="right"></button>-->
			<button class="button button-icon ion-navicon" slot="right"></button>
		</von-header>

		<div class="page-content">
			<div class="banner">
				<swiper ref="swiper"
						direction="horizontal"
						width="100%"
						height="180"
						pager-color="#ea5a49"
						pager-bg-color="#e5e4e3"
						hide-pager="false"
				>
					<swiper-item class="swiper-item"><img src="../assets/images/y-banner01.jpg"></swiper-item>
					<swiper-item class="swiper-item"><img src="../assets/images/y-banner03.jpg"></swiper-item>
				</swiper>
			</div>

			<div class="banner">
				<swiper ref="swiper"
						direction="horizontal"
						width="100%"
						height="180"
						pager-color="#ea5a49"
						pager-bg-color="#e5e4e3"
						hide-pager="false"
				>
					<swiper-item class="swiper-item"><img src="../assets/images/y-banner01.jpg"></swiper-item>
					<swiper-item class="swiper-item"><img src="../assets/images/y-banner03.jpg"></swiper-item>
				</swiper>
			</div>
			<div class="banner">
				<swiper ref="swiper"
						direction="horizontal"
						width="100%"
						height="180"
						pager-color="#ea5a49"
						pager-bg-color="#e5e4e3"
						hide-pager="false"
				>
					<swiper-item class="swiper-item"><img src="../assets/images/y-banner01.jpg"></swiper-item>
					<swiper-item class="swiper-item"><img src="../assets/images/y-banner03.jpg"></swiper-item>
				</swiper>
			</div>
			<div class="banner">
				<swiper ref="swiper"
						direction="horizontal"
						width="100%"
						height="180"
						pager-color="#ea5a49"
						pager-bg-color="#e5e4e3"
						hide-pager="false"
				>
					<swiper-item class="swiper-item"><img src="../assets/images/y-banner01.jpg"></swiper-item>
					<swiper-item class="swiper-item"><img src="../assets/images/y-banner03.jpg"></swiper-item>
				</swiper>
			</div>
			<travel-list :travel-lists="travelListIndex"></travel-list>
		</div>
	</div>
</template>

<script>

    import travelList from '@/components/travelList'

    import { mapGetters } from 'vuex'

    export default {

        components: {
            travelList
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    slidesPerView: 1,
                    autoplay: 5000,
                    paginationClickable: true,
                    spaceBetween: 30,
                    loop: true
                }
            }
        },
        created() {
            if (this.travelListIndex.length == 0) {
                this.$store.dispatch('getTravelsList')
            }
        },
        computed: {
            ...mapGetters([
                'travelListIndex'
            ])
        },
        mounted(){

        },
        methods: {

        }
    }
</script>
