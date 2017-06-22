<template>
    <div class="bar bar-tab">
        <router-link v-for="item in footList" :key="item.id" :to="item.linkTo" class="tab-item" :class="{active: item.isActive}" @click="activeItem(item.id)" >
            <span class="icon icon-home" :class="item.iconClass"></span>
            <span class="tab-label">{{item.name}}</span>
        </router-link>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {

            }
        },
        methods: {
            activeItem (id) {
                this.$store.dispatch('changeActive', id)
            }
        },
        computed: {
            ...mapGetters(['footList', 'allNum']),
            isShowTabbar () {
                console.log(this.$route.path)
                let routeLength = this.$route.path.split('/').length
                return routeLength > 2 ? false : true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    @import "../assets/scss/bars";
</style>