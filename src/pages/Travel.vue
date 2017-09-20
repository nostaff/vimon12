<template>
	<ion-page class="travels">

        <ion-navbar title="购物车"></ion-navbar>
        <ion-content>

		    <travel-list :travel-lists="travelsList"></travel-list>

        </ion-content>
	</ion-page>
</template>

<script>

import travelList from '@/components/travelList'

import { mapGetters } from 'vuex'

export default {

	components: {
        travelList
	},
    created() {
        if (this.travelsList.length == 0) {
            this.$store.dispatch('getTravelsList')
        }
    },
	computed: {
		...mapGetters([
			'travelsList'
		])
	},
	data() {
		return {

		}
	},
    mounted() {
        setTimeout(() => {$app.setTitle('购物车')}, 0)
    },
}
</script>

<style lang="scss" scoped>

.travels {
	padding-top: 1px;
}
</style>