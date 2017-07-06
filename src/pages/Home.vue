<template>
	<div class="home" v-tabbar-item-index="0">
		<von-header theme="light">
			<!--<button class="button button-icon ion-ios-arrow-back" slot="left" @click="$router.back('/home')"></button>-->
			<img src="../assets/logo.png" width="30" height="30" slot="left">
			<span slot="title">360心理</span>
			<!--<button class="button button-icon ion-navicon" slot="right"></button>-->
			<button class="button button-icon ion-navicon" slot="right"></button>
		</von-header>

		<div class="page-content">
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
					<swiper-item class="swiper-item"><img src="../assets/images/y-banner03.jpg"></swiper-item>
				</swiper>

            <grid class="features" :items="entrances" :on-cell-click="onCellClick" row="1"></grid>

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
                entrances: [
                    '<div class="entrance assertive"><i class="icon ion-ios-flame"></i><br><span>中科院专家顾问</span></div>',
                    '<div class="entrance energized"><i class="icon ion-ios-star"></i><br><span>国家认证咨询师</span></div>',
                    '<div class="entrance balanced"><i class="icon ion-ios-location"></i><br><span>长期服务公益</span></div>',
                ]
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

    .home {
        .features {
            margin-top: 0;
        }
        .entrance {
            height: 80px;
            padding: 15px 0;

            .icon {
                font-size: 30px;
                line-height: 30px;
                width: 30px;
                height: 30px;
                margin-bottom: 6px;
            }
            span {
                font-size: 14px;
                line-height: 14px;
            }

        }
    }
</style>
