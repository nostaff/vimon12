<template>
    <div class="toggle" :class="['toggle-'+theme, checked?'toggle-checked':'']">
        <div class="toggle-icon">
            <div class="toggle-inner"></div>
        </div>

        <button class="item-cover disable-hover" role="checkbox" :checked="checked" type="button" @click="onToggle()">
            <span class="button-inner"></span>
            <div class="button-effect"></div>
        </button>
    </div>
</template>
<script>
    export default{

        created () {
            if (typeof this.value !== 'undefined') {
                this.checked = this.value
            }
        },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            theme: {
                type: String,
                default: 'light'
            },
        },
        data () {
            return {
                checked: false,
            }
        },
        methods: {
            onToggle() {
                this.checked = ! this.checked
                this.$emit('input', this.checked)
            },
        },
        watch: {
            value (val) {
                this.checked = val
            },
        },
    }
</script>
