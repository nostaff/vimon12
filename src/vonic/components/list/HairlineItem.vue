<template>
    <div class="item" :class="{'item-icon-right': isLink}" @click="onClick($event)">
        <slot></slot>
        <i class="icon ion-ios-arrow-right" v-if="isLink"></i>
    </div>
</template>


<script>
    export default {
        props: {
            isLink: Boolean,
        },
        methods: {
            onClick(e) {
                e.preventDefault()
                let btn = e.target

                btn.classList.add('actived')
                setTimeout(() => {
                    btn.classList.remove('actived')
                }, 200)
            }
        }
    }
</script>
