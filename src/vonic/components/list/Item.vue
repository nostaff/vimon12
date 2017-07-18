<template>
    <a v-if="isLink || !!link" class="item" @click="onClick($event)">
        <slot></slot>
    </a>
    <div v-else class="item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            isLink: {
                type: Boolean,
                default: false
            },
            link: {
                type: String,
                default: ''
            },
        },
        methods: {
            onClick(e) {
                e.preventDefault()
                let btn = e.target

                btn.classList.add('activated')

                this.link && $router.forward(this.link)

                setTimeout(() => {
                    btn.classList.remove('activated')
                }, 200)
            }
        }
    }
</script>
