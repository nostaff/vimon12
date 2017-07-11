<template>
    <div class="experts-list">
        <expert v-for="(item,index) in expertLists" :expert="item" :key="item.id"></expert>
    </div>
</template>

<script>
import Expert from '../components/expert'

export default {
    props: {
        expertLists: Array
    },
    components: {
        Expert,
    },
	data() {
		return {

		}
	}
}
</script>

<style scoped lang="scss">
.experts-list {
    margin-left: 20px;
}
</style>