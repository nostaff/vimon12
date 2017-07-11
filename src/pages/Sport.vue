<template>
	<div class="sports page has-navbar has-tabbar" v-tabbar-item-index="1">
        <von-header theme="light">
            <span slot="title">折扣</span>
        </von-header>
		<panel-list :sport-list="sportsList"></panel-list>
	</div>
</template>

<script>

//import panelList from '@/components/panelList'

import { mapGetters } from 'vuex'

export default {

	components: {
//		panelList
	},
	data() {
		return {

		}
	},
    created() {
        if (this.sportsList.length == 0) {
            this.$store.dispatch('getSportsList')
        }
    },
	computed: {
		...mapGetters([
			'sportsList'
		])
	},
	mounted(){
        setTimeout(() => {$app.setTitle('购物车1')}, 0)
    },
	methods: {

	}
}
</script>