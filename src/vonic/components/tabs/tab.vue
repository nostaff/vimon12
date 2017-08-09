<template>
    <div class="ion-tab" :class="show?'show-tab':''" role="tabpanel" :aria-hidden="show">
        <slot></slot>
        <div class="nav-decor"></div>
    </div>
</template>
<script>
    export default {
        name: 'ion-tab',
        data() {
            return {
                componentName: 'ionTab',
            };
        },
        props: {
            show: {
                type: Boolean,
                default: true
            },
        },
        mounted () {
            console.log(this.$parent)
        }
    }
</script>