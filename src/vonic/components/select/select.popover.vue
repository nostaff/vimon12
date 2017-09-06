<template>
    <ion-list radio-group>
        <ion-item v-for="option in options" key="idx">
            <ion-label slot="item-label">{{option.text}}</ion-label>
            <ion-radio slot="item-content" :checked="option.checked" :value="option.value" :disabled="option.disabled"></ion-radio>
        </ion-item>
    </ion-list>
</template>
<script type="text/javascript">
    import { isBlank, isTrueProperty } from '../../utils/utils'
    import IonList from "../list/list.vue";
    import IonItem from "../item/item.vue";
    import IonLabel from "../label/index.vue";
    import IonRadio from "../radio/radio.vue";

    export default {
        name: 'ion-option',
        components: {
            IonRadio,
            IonLabel,
            IonItem,
            IonList
        },
        data () {
            return {
                currentValue: this.value
            }
        },
        props: {
            value: [Object, String, Array],
            options: Array,
        },
        methods: {
            getValue() {
                let checkedOption = this.options.find(option => option.checked);

                return checkedOption ? checkedOption.value : undefined;
            },

            setValue(value) {
                let checkedOption = this.options.find(option => option.value === value);
                if (checkedOption && checkedOption.handler) {
                    checkedOption.handler();
                }
//                this.viewController.dismiss(value);
            }
        },
    }
</script>
