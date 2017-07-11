<template>
	<div class="travels page has-navbar has-tabbar" v-tabbar-item-index="2">
        <von-header theme="light">
            <span slot="title">购物车</span>
        </von-header>
        <div class="page-content">
		<travel-list :travel-lists="travelsList"></travel-list>
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