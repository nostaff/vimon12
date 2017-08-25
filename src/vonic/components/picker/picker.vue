<template>
    <div role="dialog" class="ion-picker-cmp" :class="['picker-'+theme, cssClass]" style="z-index: 9999;">
        <ion-backdrop @click.native="bdClick()" ref="backdrop" v-show="activated"></ion-backdrop>
        <transition name="ion-picker-fadeup">
            <div class="picker-wrapper" v-show="activated">
                <div class="picker-toolbar" v-if="buttons">
                    <div v-for="(button, index) in buttons" class="picker-toolbar-button" :class="button.cssRole">
                        <ion-button @click.native="btnClick(button)" :class="button.cssClass" class="picker-button" clear>
                            {{button.text}}
                        </ion-button>
                    </div>
                </div>
                <div class="picker-columns">
                    <div class="picker-above-highlight"></div>
                    <ion-picker-column key="idx" v-for="(column, i) in columns" :column="column" @on-change="colChange"></ion-picker-column>
                    <div class="picker-below-highlight"></div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import objectAssign from 'object-assign'
    import ThemeMixins from '../../themes/theme.mixins';
    import IonBackdrop from "../backdrop/backdrop";
    import IonButton from "../button/index";
    import IonPickerColumn from './picker-column'
    export default {
        name: 'ion-picker',
        mixins: [ThemeMixins],
        components: {
            IonButton,
            IonBackdrop,
            IonPickerColumn
        },
        data() {
            return {
                defaultOptions: {
                    buttons: [],
                    columns: [],
                },
                buttons: [],
                columns: [],
                enableBackdropDismiss: true,
                cssClass: '',

                activated: false,
            }
        },

        methods: {
            show(options) {
                let _options = objectAssign({}, this.defaultOptions, options)
                if (typeof _options.cssClass === 'string')
                    this.cssClass = _options.cssClass;
                if (typeof _options.enableBackdropDismiss === 'boolean')
                    this.enableBackdropDismiss = _options.enableBackdropDismiss;

                this.buttons = _options.buttons.filter(button => {
                    if (typeof button === 'string') {
                        button = { text: button };
                    }
                    if (button.role) {
                        button.cssRole = `picker-toolbar-${button.role}`;
                    }
                    return button;
                })

                this.columns = _options.columns.filter(column => {
                    if (!column.options) {
                        column.options = [];
                    }
                    column.selectedIndex = column.selectedIndex || 0;
                    column.options = column.options.map(option => {
                        let opt = {
                            text: '',
                            value: '',
                            disabled: option.disabled,
                        };

                        if (option) {
                            if (typeof option === 'string' || typeof option === 'number') {
                                opt.text = option.toString();
                                opt.value = option;
                            } else {
                                opt.text = option.text ? option.text : option.value;
                                opt.value = option.value ? option.value : option.text;
                            }
                        }
                        return opt;
                    });
                    return column;
                })

                this.activated = true;

                return new Promise((resolve, reject) => {
                    this.$on('onDismissEvent', (data) => {
                        resolve(data)
                    })
                });
            },

            btnClick(button) {
                let shouldDismiss = true;

                if (button.handler && typeof button.handler === 'function') {
                    // a handler has been provided, execute it
                    // pass the handler the values from the inputs
                    if (button.handler(this.getSelected()) === false) {
                        // if the return value of the handler is false then do not dismiss
                        shouldDismiss = false;
                    }
                }

                if (shouldDismiss) {
                    this.dismiss(button.role);
                }
            },

            bdClick() {
                if (this.enableBackdropDismiss) {
                    this.dismiss('backdrop');
                }
            },

            dismiss(role) {
                this.activated = false;

                this.$emit('onDismissEvent', {role: role, selected: this.getSelected()})

                setTimeout(() => {
                    this.$el.remove();
                }, 400);
            },

            getSelected() {
                let selected = {};
                this.columns.forEach((col, index) => {
                    let selectedColumn = col.options[col.selectedIndex];
                    selected[col.name] = selectedColumn ? selectedColumn.value : null;
                });
                return selected;
            },

            // one of the columns has changed its selected index
            colChange(option) {
                let column = this.columns.find(col => col.name === option.name);
                column.selectedIndex = option.index;

                if (column && column.onChange && typeof column.onChange === 'function') {
                    column.onChange(option);
                }
            }
        }
    };
</script>

<style lang="scss">
    @import 'picker';
    @import 'picker.ios';
    @import 'picker.md';
    @import 'picker.wp';
</style>