<template>
    <div class="ion-datetime datetime" :class="['datetime-'+theme, disabled?'datetime-disabled':'']" @click.prevent="btnClick">
        <div v-if="!text" class="datetime-text datetime-placeholder">{{placeholder}}</div>
        <div v-if="text" class="datetime-text">{{text}}</div>
        <ion-button role="item-cover" :aria-disabled="disabled"></ion-button>
    </div>
</template>
<script>
    const DEFAULT_FORMAT = 'MMM D, YYYY';

    import objectAssign from 'object-assign'
    import ThemeMixins from '../../themes/theme.mixins';
    import IonButton from "../button/index";
    import IonPicker from '../picker/picker';

    import { assert, clamp, deepCopy, isArray, isBlank, isObject, isPresent, isString } from '../../utils/utils';
    import {
        convertDataToISO,
        convertToDatetimeData,
        convertFormatToKey,
        dateDataSortValue,
        dateSortValue,
        dateValueRange,
        daysInMonth,
        getValueFromFormat,
        parseDate,
        parseTemplate,
        renderDateTime,
        renderTextFormat,
        updateDate,
        convertToArrayOfNumbers,
        convertToArrayOfStrings
    } from './datetime-util';

    export default {
        name: 'ion-datetime',
        mixins: [ThemeMixins],
        components: {
            IonButton,
            IonPicker
        },
        data (){
            return {
                defaultOptions: {
                    buttons: [
                        {
                            text: this.cancelText,
                            role: 'cancel',
                            handler: () => {
                                console.log('Delete clicked');
                            }
                        },
                        {
                            text: this.doneText,
                            role: 'done',
                            handler: (data) => {
                                this.currentValue = convertToDatetimeData(data);
                            },
                        }
                    ],
                    columns: [],
                },
                text: '',
                currentValue: updateDate(this.value),
                min: {},
                max: {},
                picker: Object,
                pickerOptions: {},
                columns: [],
                locale: []
            }
        },

        props: {
            value: String,
            placeholder: String,
            /**
             * Value must be a date string
             * following the
             * [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),
             * such as `1996-12-19`.
             */
            minDate: String,
            maxDate: String,

            displayFormat: String,
            cancelText: {
                type: String,
                default: 'Cancel'
            },
            doneText: {
                type: String,
                default: 'Done'
            },
            yearValues: [Array, String],
            monthValues: [Array, String],
            dayValues: [Array, String],
            hourValues: [Array, String],
            minuteValues: [Array, String],
            monthNames: [Array, String],
            monthShortNames: [Array, String],
            dayNames: [Array, String],
            dayShortNames: [Array, String],

            disabled: Boolean
        },

        created () {
            ['monthNames', 'monthShortNames', 'dayNames', 'dayShortNames'].forEach(type => {
                this.locale[type] = convertToArrayOfStrings((this)[type], type);
            });

            this.updateText();
        },

        methods: {

            btnClick() {
                if (this.disabled) {
                    return;
                }

                let pickerOptions = objectAssign({}, this.defaultOptions, this.pickerOptions)


                // Update picker status before presenting
                this.generate();
                this.validate();

                pickerOptions.columns = this.columns;

                this.picker = $picker.show(pickerOptions);
                this.columns = [];
            },

            generate() {
                let template = this.displayFormat || DEFAULT_FORMAT;

                if (isPresent(template)) {
                    // make sure we've got up to date sizing information
                    this.calcMinMax();

                    // does not support selecting by day name
                    // automaticallly remove any day name formats
                    template = template.replace('DDDD', '{~}').replace('DDD', '{~}');
                    if (template.indexOf('D') === -1) {
                        // there is not a day in the template
                        // replace the day name with a numeric one if it exists
                        template = template.replace('{~}', 'D');
                    }
                    // make sure no day name replacer is left in the string
                    template = template.replace(/{~}/g, '');

                    // parse apart the given template into an array of "formats"
                    parseTemplate(template).forEach(format => {
                        // loop through each format in the template
                        // create a new picker column to build up with data
                        let key = convertFormatToKey(format);
                        let values = [];

                        // first see if they have exact values to use for this input
                        if (isPresent((this)[key + 'Values'])) {
                            // user provide exact values for this date part
                            values = convertToArrayOfNumbers((this)[key + 'Values'], key);

                        } else {
                            // use the default date part values
                            values = dateValueRange(format, this.min, this.max);
                        }

                        const column = {
                            name: key,
                            options: values.map(val => {
                                return {
                                    value: val,
                                    text: renderTextFormat(format, val, null, this.locale),
                                };
                            })
                        };

                        // cool, we've loaded up the columns with options
                        // preselect the option for this column
                        const optValue = getValueFromFormat(this.currentValue, format);
                        const selectedIndex = column.options.findIndex(opt => {
                            return opt.value === optValue
                        });
                        if (selectedIndex >= 0) {
                            // set the select index for this column's options
                            column.selectedIndex = selectedIndex;
                        }

                        // add our newly created column to the picker
                        this.columns.push(column);
                    });

                    // Normalize min/max
                    const min = this.min;
                    const max = this.max;
                    ['month', 'day', 'hour', 'minute'].filter(name => !this.columns.find(column => column.name === name))
                        .forEach(name => {
                            min[name] = 0;
                            max[name] = 0;
                        });

                    this.divyColumns();
                }
            },

            validateColumn(name, index, min, max, lowerBounds, upperBounds) {
                assert(lowerBounds.length === 5, 'lowerBounds length must be 5');
                assert(upperBounds.length === 5, 'upperBounds length must be 5');

                const column = this.columns[name];
                if (!column) {
                    return 0;
                }

                const lb = lowerBounds.slice();
                const ub = upperBounds.slice();
                const options = column.options;
                let indexMin = options.length - 1;
                let indexMax = 0;

                for (var i = 0; i < options.length; i++) {
                    var opt = options[i];
                    var value = opt.value;
                    lb[index] = opt.value;
                    ub[index] = opt.value;

                    var disabled = opt.disabled = (
                        value < lowerBounds[index] ||
                        value > upperBounds[index] ||
                        dateSortValue(ub[0], ub[1], ub[2], ub[3], ub[4]) < min ||
                        dateSortValue(lb[0], lb[1], lb[2], lb[3], lb[4]) > max
                    );
                    if (!disabled) {
                        indexMin = Math.min(indexMin, i);
                        indexMax = Math.max(indexMax, i);
                    }
                }
                let selectedIndex = column.selectedIndex = clamp(indexMin, column.selectedIndex, indexMax);
                opt = column.options[selectedIndex];
                if (opt) {
                    return opt.value;
                }
                return 0;
            },

            validate() {
                const today = new Date();
                const minCompareVal = dateDataSortValue(this.min);
                const maxCompareVal = dateDataSortValue(this.max);
                const yearCol = this.columns['year'];

                assert(minCompareVal <= maxCompareVal, 'invalid min/max value');

                let selectedYear = today.getFullYear();
                if (yearCol) {
                    // default to the first value if the current year doesn't exist in the options
                    if (!yearCol.options.find(col => col.value === today.getFullYear())) {
                        selectedYear = yearCol.options[0].value;
                    }

                    var yearOpt = yearCol.options[yearCol.selectedIndex];
                    if (yearOpt) {
                        // they have a selected year value
                        selectedYear = yearOpt.value;
                    }
                }

                const selectedMonth = this.validateColumn(
                    'month', 1,
                    minCompareVal, maxCompareVal,
                    [selectedYear, 0, 0, 0, 0],
                    [selectedYear, 12, 31, 23, 59]
                );

                const numDaysInMonth = daysInMonth(selectedMonth, selectedYear);
                const selectedDay = this.validateColumn(
                    'day', 2,
                    minCompareVal, maxCompareVal,
                    [selectedYear, selectedMonth, 0, 0, 0],
                    [selectedYear, selectedMonth, numDaysInMonth, 23, 59]
                );

                const selectedHour = this.validateColumn(
                    'hour', 3,
                    minCompareVal, maxCompareVal,
                    [selectedYear, selectedMonth, selectedDay, 0, 0],
                    [selectedYear, selectedMonth, selectedDay, 23, 59]
                );

                this.validateColumn(
                    'minute', 4,
                    minCompareVal, maxCompareVal,
                    [selectedYear, selectedMonth, selectedDay, selectedHour, 0],
                    [selectedYear, selectedMonth, selectedDay, selectedHour, 59]
                );
            },

            divyColumns() {
                const pickerColumns = this.columns;
                let columnsWidth = [];
                let col;
                let width;
                for (var i = 0; i < pickerColumns.length; i++) {
                    col = pickerColumns[i];
                    columnsWidth.push(0);

                    for (var j = 0; j < col.options.length; j++) {
                        width = col.options[j].text.length;
                        if (width > columnsWidth[i]) {
                            columnsWidth[i] = width;
                        }
                    }
                }

                if (columnsWidth.length === 2) {
                    width = Math.max(columnsWidth[0], columnsWidth[1]);
                    pickerColumns[0].align = 'right';
                    pickerColumns[1].align = 'left';
//                    pickerColumns[0].optionsWidth = pickerColumns[1].optionsWidth = `${width * 17}px`;
                } else if (columnsWidth.length === 3) {
                    width = Math.max(columnsWidth[0], columnsWidth[2]);
                    pickerColumns[0].align = 'right';
//                    pickerColumns[1].columnWidth = `${columnsWidth[1] * 17}px`;
//                    pickerColumns[0].optionsWidth = pickerColumns[2].optionsWidth = `${width * 17}px`;
                    pickerColumns[2].align = 'left';
                }
            },

            updateText() {
                // create the text of the formatted data
                const template = this.displayFormat || DEFAULT_FORMAT;
                this.text = renderDateTime(template, this.currentValue, this.locale);
            },

            calcMinMax(now) {
                const todaysYear = (now || new Date()).getFullYear();
                let minDate = this.minDate;
                let maxDate = this.maxDate;

                if (isPresent(this.yearValues)) {
                    var years = convertToArrayOfNumbers(this.yearValues, 'year');
                    if (isBlank(minDate)) {
                        minDate = Math.min.apply(Math, years);
                    }
                    if (isBlank(maxDate)) {
                        maxDate = Math.max.apply(Math, years);
                    }
                } else {
                    if (isBlank(minDate)) {
                        minDate = (todaysYear - 100).toString();
                    }
                    if (isBlank(maxDate)) {
                        maxDate = todaysYear.toString();
                    }
                }

                const min = this.min = parseDate(minDate);
                const max = this.max = parseDate(maxDate);

                min.year = min.year || todaysYear;
                max.year = max.year || todaysYear;

                min.month = min.month || 1;
                max.month = max.month || 12;
                min.day = min.day || 1;
                max.day = max.day || 31;
                min.hour = min.hour || 0;
                max.hour = max.hour || 23;
                min.minute = min.minute || 0;
                max.minute = max.minute || 59;
                min.second = min.second || 0;
                max.second = max.second || 59;

                // Ensure min/max constraits
                if (min.year > max.year) {
                    console.error('min.year > max.year');
                    min.year = max.year - 100;
                }
                if (min.year === max.year) {
                    if (min.month > max.month) {
                        console.error('min.month > max.month');
                        min.month = 1;
                    } else if (min.month === max.month && min.day > max.day) {
                        console.error('min.day > max.day');
                        min.day = 1;
                    }
                }

            },
        },

        watch: {
            currentValue: function (value) {
                this.updateText();
                this.$emit('input', convertDataToISO(value))
            },

            value: function (value) {
                this.currentValue = updateDate(value)
                this.updateText();
            }
        }
    };


</script>

<style lang="scss">
    @import 'datetime';
    @import 'datetime.ios';
    @import 'datetime.md';
    @import 'datetime.wp';
</style>