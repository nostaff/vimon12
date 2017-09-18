<template>
    <div class="ion-item-options" :side="side">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'ion-item-options',
        data() {
            return {
                componentName: 'ionItemOptions'
            }
        },
        props: {
            side: {
                type: String,
                default: 'right'
            }
        },
        methods: {
            width() {
                let elRef = this.$slots.default || [];
                let width = 0;
                for (const el of elRef) {
                    if (el.tag != undefined) {
                        width += el.elm.getBoundingClientRect().width;
                    }
                }
                return width;
            }
        }
    }
</script>