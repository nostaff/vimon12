<template>
    <div role="dialog" class="ion-picker-cmp" :class="['picker-'+theme, cssClass]" style="z-index: 9999;">
        <ion-backdrop @click.native="backdropClick()" ref="backdrop" v-show="activated"></ion-backdrop>
        <transition name="ion-picker-fadeup">
            <div class="picker-wrapper" v-show="activated">
                <div class="picker-toolbar">
                    <div v-for="(button, index) in buttons" class="picker-toolbar-button" :class="button.cssRole">
                        <ion-button @click.native="btnClick(index)" :class="button.cssClass" class="picker-button" clear>
                            {{button.text}}
                        </ion-button>
                    </div>
                </div>
                <div class="picker-columns">
                    <div class="picker-above-highlight"></div>
                    <ion-picker-column key="idx" v-for="(column, i) in columns" :column="column" @on-change.native="colChange($event, i)"></ion-picker-column>
                    <!--<div class="picker-col" v-for="(col, index) in columns" :class="{'picker-opts-left': col.align=='left', 'picker-opts-right': col.align=='right'}" :style="{width: col.columnWidth}" >-->
                        <!--<div v-if="col.prefix" class="picker-prefix" :style="{width: col.prefixWidth}">{{col.prefix}}</div>-->
                        <!--<div class="picker-opts" :style="{'max-width': col.optionsWidth}">-->
                            <!--<ion-button class="picker-opt" v-for="(option, i) in col.options" :class="{'picker-opt-disabled':option.disabled}" disable-activated  @click.native="optClick($event, i)">-->
                                <!--{{option.text}}-->
                            <!--</ion-button>-->
                        <!--</div>-->
                        <!--<div v-if="col.suffix" class="picker-prefix" :style="{width: col.suffixWidth}">{{col.suffixWidth}}</div>-->
                    <!--</div>-->
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
                    this.$on('onChangeEvent', (buttonIndex) => {
                        resolve(buttonIndex)
                    })
                });
            },

            btnClick(buttonIndex) {
                this.activated = false;

                if (buttonIndex > -1) {
                    let handler = this.buttons[buttonIndex].handler;
                    if (handler && typeof handler === 'function') {
                        handler();
                    }
                }

                this.$emit('onChangeEvent', buttonIndex)

                setTimeout(() => {
                    this.$el.remove();
                }, 400);
            },

            colChange1() {
                // one of the columns has changed its selected index
                this.$emit('onChangeEvent', this.getSelected());
            },

            colChange($event, buttonIndex) {
                this.activated = false;

                if (buttonIndex == -1 && typeof this.cancelButton.handler === 'function') {
                    this.cancelButton.handler();
                }
                if (buttonIndex > -1) {
                    let handler = this.buttons[buttonIndex].handler;
                    if (handler && typeof handler === 'function') {
                        handler();
                    }
                }

                this.$emit('onChangeEvent', buttonIndex)

                setTimeout(() => {
                    this.$el.remove();
                }, 400);
            },

            backdropClick () {
                if (this.enableBackdropDismiss) {
                    this.btnClick(-1);
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