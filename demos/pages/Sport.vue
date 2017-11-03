<template>
	<ion-page class="sports">
        <ion-content>

            <panel-list :sport-list="sportsList"></panel-list>

        </ion-content>
	</ion-page>
</template>

<script>

//import panelList from '@/components/panelList'

import { mapGetters } from 'vuex'
import IonContent from "../../src/components/content/index";
import IonPage from "../../src/components/page/page";

export default {

	components: {
        IonPage,
        IonContent
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