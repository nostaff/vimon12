<template>
    <div class="ion-list" :class="['list-'+theme]">
        <ion-list-header :color="color" v-if="title">{{title}}</ion-list-header>
        <slot></slot>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    import IonListHeader from "./list.header";

    export default {
        name: 'ion-list',
        mixins: [ThemeMixins],
        components: {
            IonListHeader,
        },
        data() {
            return {
                componentName: 'ionList',

                radioComponentList: [],
                timer: null
            };
        },

        props: {
            radioGroup: Boolean,
            value: String,
        },
        watch: {
            value (val) {
                this.radioComponentList.forEach((radio) => {
                    radio.setChecked(val)
                })
            },
        },

        methods: {

            // called by radio where checked
            onRadioChange (value) {
                this.radioComponentList.forEach((radio) => {
                    radio.setChecked(value)
                })
                this.$emit('input', value)
                this.$emit('onChange', value)
            },


            updateRadioList (radio) {
                this.radioComponentList.push(radio)

                this.timer && clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    this.radioComponentList.forEach((radio) => {
                        radio.setChecked(this.value)
                    });
                }, 0);
            }
        },

    }
</script>