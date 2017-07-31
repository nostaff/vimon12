<template>
    <div class="toggle" :class="['toggle-'+theme, checked?'toggle-checked':'']">
        <div class="toggle-icon">
            <div class="toggle-inner"></div>
        </div>

        <ion-button role="checkbox" :checked="checked" type="button" @click="onToggle()"></ion-button>
    </div>
</template>
<script>
    import IonButton from "../button/index";
    export default{
        components: {IonButton},
        name: 'ion-toggle',
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
