<template>
	<div class="home">
		<div class="banner">
			 <swiper :options="swiperOption" class="swiper-box">
					<swiper-slide class="swiper-item"><img src="../assets/images/y-banner01.jpg" alt="..."></swiper-slide>
					<swiper-slide class="swiper-item"><img src="../assets/images/y-banner03.jpg" alt="..."></swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<travel-list :travel-lists="travelListIndex"></travel-list>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
//import nav from '@/components/nav'
import travelList from '@/components/travelList'

import { mapGetters } from 'vuex'

export default {

	components: {
		swiper,
		swiperSlide,
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

<style lang="scss">
	@import '../assets/scss/function';

	// Variables
	@import "../assets/scss/variables.scss";

	// Mixins
	@import "../assets/scss/mixins.scss";

	// Normalize & Base CSS
	@import "../assets/scss/normalize.scss";
	@import "../assets/scss/base.scss";
	@import "../assets/scss/type.scss";

	// Ratchicons
	@import "../assets/scss/ratchicons.scss";

	// Theme iOS
	@import "../assets/scss/theme-ios.scss";

</style>