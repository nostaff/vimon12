<template>
    <div :class="[
        'toggle',
        'toggle-'+theme,
        'toggle-'+theme+'-'+color,
        checked?'toggle-checked':'',
        disabled?'toggle-disabled':''
        ]" @click="onToggle()">
        <div class="toggle-icon">
            <div class="toggle-inner"></div>
        </div>
        <ion-button role="checkbox" :disabled="disabled" :checked="checked"></ion-button>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import IonButton from "../button/index";
    export default{
        name: 'ion-toggle',
        mixins: [ThemeMixins],
        components: {IonButton},
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
            disabled: {
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
                checked: false,
            }
        },
        methods: {
            onToggle() {
                if (this.disabled) return;
                this.checked = ! this.checked
                this.$emit('input', this.checked)
                this.$emit('onChange', this.checked)
            },
        },
        watch: {
            value (val) {
                this.checked = val
            },
        },
    }
</script>


<style lang="scss">
    @import 'toggle.ios';
    @import 'toggle.md';
    @import 'toggle.wp';
</style>
