<template>
    <ion-page v-nav="{title: '日期选择器', showBackButton: true}">
        <ion-content class="padding-top">

            <datepicker v-model="birthday" label="生日" date-format="yyyy-mm-dd"></datepicker>

            <div class="padding">
                value: {{ birthday }}
            </div>

            <ion-button block @click.native="normal()">点我弹出</ion-button>

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

    for (var i=1970;i<=2017;i++)
    {
        columnItems[0].options.push({text: i, value: i});
    }

    for (var i=1;i<=12;i++)
    {
        columnItems[1].options.push({text: i, value: i});
    }

    export default {
        data() {
            return {
                birthday: '2012-06-26'
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
            }

        }
    }
</script>
