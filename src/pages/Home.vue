<template>
	<div class="home">
		<div class="banner">
				 <swiper ref="swiper"
						 direction="horizontal"
						 width="100%"
						 height="150"
						 pager-color="#ea5a49"
						 pager-bg-color="#e5e4e3"
						 hide-pager="false"
				 >
					<swiper-item class="swiper-item"><img src="../assets/images/y-banner01.jpg" alt="..."></swiper-item>
					<swiper-item class="swiper-item"><img src="../assets/images/y-banner03.jpg" alt="..."></swiper-item>
			</swiper>
		</div>
		<travel-list :travel-lists="travelListIndex"></travel-list>
	</div>
</template>

<script>

//    import { Swiper, SwiperItem } from '../components/swiper'
//import nav from '@/components/nav'
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
