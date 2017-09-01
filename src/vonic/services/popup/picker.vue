<template>
    <div role="dialog" class="ion-picker-cmp" :class="['picker-'+theme, cssClass]" style="z-index: 9999;">
        <ion-backdrop @click.native="bdClick()" v-show="activated"></ion-backdrop>
        <transition name="ion-picker-fadeup">
            <div class="picker-wrapper" v-show="activated">
                <div class="picker-toolbar" v-if="buttons">
                    <div v-for="(button, index) in buttons" class="picker-toolbar-button" :class="button.cssRole">
                        <ion-button @click.native="btnClick(button)" :class="button.cssClass" class="picker-button"
                                    clear>
                            {{button.text}}
                        </ion-button>
                    </div>
                </div>
                <div class="picker-columns">
                    <div class="picker-above-highlight"></div>
                    <div class="picker-col" ref="picker" :id="'picker-col-' + uuid + '-' + index"
                         :data-name="column.name"
                         :class="{'picker-opts-left': column.align=='left', 'picker-opts-right': column.align=='right'}"
                         :style="{width: column.columnWidth}"
                         key="idx" v-for="(column, index) in columns">
                    </div>
                    <div class="picker-below-highlight"></div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import objectAssign from 'object-assign'
    import Scroller from './scroller';
    import ThemeMixins from '../../themes/theme.mixins';
    import IonBackdrop from "../backdrop/index";
    import IonButton from "../button/index";

    export default {
        name: 'ion-picker',
        mixins: [ThemeMixins],
        components: {
            IonButton,
            IonBackdrop,
        },
        data() {
            return {
                uuid: Math.random().toString(36).substring(3, 8),
                optionColumns: [],
                defaultOptions: {
                    buttons: [],
                    columns: [],
                },
                buttons: [],
                columns: [],
                enableBackdropDismiss: true,
                cssClass: '',

                scroller: [],
                rendered: false,
                activated: false,
                isChain: false,
                level: 0,
            }
        },

        updated() {
            this.$nextTick(this.renderColumn())
        },

        methods: {
            getId(i) {
                return `#picker-col-${this.uuid}-${i}`
            },

            renderColumn() {
                if (this.rendered)
                    return;

                const self = this

                for (let i = 0; i < this.columns.length; i++) {
                    let container = this.$el.querySelector(this.getId(i))
                    let column = this.columns[i];

                    this.scroller[i] = new Scroller(container, {
                        options: column.options,
                        selectedIndex: column.selectedIndex,
                        onSelect(value, index) {
                            column.selectedIndex = index;
                            if (column.onChange && typeof column.onChange === 'function') {
                                column.onChange({name: column.name, value: value, index: index});
                            }
                        }
                    });
                }

                this.rendered = true;
            },

            show(options) {
                let _options = objectAssign({}, this.defaultOptions, options)
                if (typeof _options.cssClass === 'string')
                    this.cssClass = _options.cssClass;
                if (typeof _options.enableBackdropDismiss === 'boolean')
                    this.enableBackdropDismiss = _options.enableBackdropDismiss;
                if (typeof _options.isChain === 'boolean')
                    this.isChain = _options.isChain;
                if (typeof _options.level === 'number')
                    this.level = _options.level;

                this.buttons = _options.buttons.filter(button => {
                    if (typeof button === 'string') {
                        button = {text: button};
                    }
                    if (button.role) {
                        button.cssRole = `picker-toolbar-${button.role}`;
                    }
                    return button;
                });

                let columns = [];
                if (this.isChain === true) {
                    this.optionColumns = _options.columns;
                    const level = this.level || 8
                    for (let i = 0; i < level; i++) {
                        let column = {
                            name: 'level_' + i,
                            selectedIndex: 0,
                            options: [],
                            onChange: (option) => {
                                this.renderChain(i + 1);
                            }
                        };
                        if (i === 0) {
                            column.options = this.getRootColumn();
                        } else {
                            const topValue = _options.chainValue[i - 1] || columns[i - 1].options[0].value;
                            column.options = this.getChildren(topValue);
                        }
                        let selectedIndex = column.options.findIndex(one => {
                            return one.value === _options.chainValue[i]
                        })
                        if (selectedIndex >= 0) {
                            // set the select index for this column's options
                            column.selectedIndex = selectedIndex;
                        }
                        columns.push(column);
                    }
                } else {
                    columns = _options.columns;
                }

                this.columns = columns.filter(column => {
                    if (!column.options) {
                        column.options = [];
                    }
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
                });

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

            getValues() {
                let values = {};
                this.columns.forEach((col, index) => {
                    let selected = col.options[col.selectedIndex];
                    values[index] = selected ? selected.value : null;
                });

                return values;
            },

            getSelected() {
                let selected = {};
                this.columns.forEach((col, index) => {
                    let selectedColumn = col.options[col.selectedIndex];
                    selected[col.name] = {
                        text: selectedColumn ? selectedColumn.text : null,
                        value: selectedColumn ? selectedColumn.value : null,
                        index: index,
                    };
                });
                return selected;
            },

            renderChain(nextLevel) {
                if (!this.columns || !this.level) {
                    return
                }

                // do not render for last scroller
                if (nextLevel > this.level - 1) {
                    return
                }

                const self = this

                // destroy old one
                this.scroller[nextLevel].destroy()

                this.columns[nextLevel].options = this.getChildren(this.getValues()[nextLevel - 1]);
                this.columns[nextLevel].selectedIndex = 0;
                this.scroller[nextLevel] = new Scroller(this.$el.querySelector(this.getId(nextLevel)), {
                    options: this.columns[nextLevel].options,
                    selectedIndex: this.columns[nextLevel].selectedIndex,
                    onSelect(value, index) {
                        self.columns[nextLevel].selectedIndex = index;
                        if (nextLevel < this.level) {
                            self.columns[nextLevel + 1].options = self.getChildren(self.getValues()[nextLevel]);
                            self.columns[nextLevel + 1].selectedIndex = 0;
                        }
                        self.renderChain(nextLevel + 1)
                    }
                })

                this.renderChain(nextLevel + 1)
            },

            getChildren(value) {
                return this.optionColumns.filter(one => {
                    return one.parent === value;
                })
            },

            getRootColumn() {
                return this.optionColumns.filter(one => {
                    return !one.parent || one.parent === 0 || one.parent === '0';
                })
            },

        }
    };
</script>

<style lang="scss">
    @import 'picker';
    @import 'picker.ios';
    @import 'picker.md';
    @import 'picker.wp';
</style>