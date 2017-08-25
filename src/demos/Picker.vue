<template>
    <ion-page v-nav="{title: '选择器', showBackButton: true}">
        <ion-content class="padding-top">

            <ion-list title="Datetime">
                <ion-item>
                    <ion-label slot="item-label">Time</ion-label>
                    <ion-datetime slot="item-content" displayFormat="HH:mm" v-model="time"
                                  placeholder="time"></ion-datetime>
                </ion-item>

                <ion-item>
                    <ion-label slot="item-label">Time</ion-label>
                    <ion-datetime slot="item-content" displayFormat="hh:mm A" v-model="time"
                                  placeholder="time"></ion-datetime>
                </ion-item>

                <ion-item>
                    <ion-label slot="item-label">Birthday</ion-label>
                    <ion-datetime slot="item-content" v-model="birthday" placeholder="birthday" minDate="2002-02-01"
                                  displayFormat="YYYY-MM-DD"></ion-datetime>
                </ion-item>

                <ion-item>
                    <ion-label slot="item-label">Birthday</ion-label>
                    <ion-datetime slot="item-content" v-model="birthday" placeholder="birthday" minDate="2002-02-01"
                                  displayFormat="DD/MM/YY"></ion-datetime>
                </ion-item>
            </ion-list>

            <div class="padding">
                value: {{ time }} {{ birthday }}
            </div>

            <ion-button block @click.native="normal()">点我弹出</ion-button>
            <br>
            <br>
            <br>
            <ion-button block @click.native="chain()">地址联动</ion-button>

        </ion-content>
    </ion-page>
</template>
<script>
    const buttonItems = [
        {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'callccc',
            handler: () => {
                console.log('Delete clicked');
            }
        },
        {
            text: 'OK',
            role: 'ok',
            cssClass: 'adasdasd',
            handler: () => {
                console.log('Share clicked');
            }
        },
        {
            text: 'Submit',
            role: 'submit',
            handler: () => {
                console.log('Share clicked');
                return false;       // 不关闭对话框
            }
        }
    ];


    const columnItems = [
        {
            name: 'Year',
            align: 'left',
            defaultValue: '1980',
            options: [],
            onChange: (option) => {
                console.log('Year onChange', option)
            }
        },
        {
            name: 'Month',
            align: 'left',
            defaultValue: '12',
            options: [],
            onChange: (option) => {
                console.log('Month onChange', option)
            }
        },
    ];

    for (var i = 1970; i <= 2017; i++) {
        columnItems[0].options.push({text: i, value: i});
    }

    for (var i = 1; i <= 12; i++) {
        columnItems[1].options.push({text: i, value: i});
    }


    const areas = [{
        name: '中国',
        value: 'china',
        parent: 0
    }, {
        name: '美国',
        value: 'USA',
        parent: 0
    }, {
        name: '广东',
        value: 'china001',
        parent: 'china'
    }, {
        name: '广西',
        value: 'china002',
        parent: 'china'
    }, {
        name: '美国001',
        value: 'usa001',
        parent: 'USA'
    }, {
        name: '美国002',
        value: 'usa002',
        parent: 'USA'
    }, {
        name: '广州',
        value: 'gz',
        parent: 'china001'
    }, {
        name: '深圳',
        value: 'sz',
        parent: 'china001'
    }, {
        name: '广西001',
        value: 'gz',
        parent: 'china002'
    }, {
        name: '广西002',
        value: 'sz',
        parent: 'china002'
    }, {
        name: '美国001_001',
        value: '0003',
        parent: 'usa001'
    }, {
        name: '美国001_002',
        value: '0004',
        parent: 'usa001'
    }, {
        name: '美国002_001',
        value: '0005',
        parent: 'usa002'
    }, {
        name: '美国002_002',
        value: '0006',
        parent: 'usa002'
    }];

    export default {
        data() {
            return {
                time: '18:21',
                birthday: '2012-06-26',

                areasValue: [],
            }
        },
        methods: {
            normal() {
                $picker.show({
                    cssClass: 'a b',
                    buttons: buttonItems,
                    columns: columnItems,
                }).then((res) => {
                    console.log('button clicked: ', res)
                });
            },

            chain() {
                $picker.show({
                    buttons: buttonItems,
                    columns: areas,
                }).then((res) => {
                    console.log('button clicked: ', res)
                });
            },

        }
    }
</script>
