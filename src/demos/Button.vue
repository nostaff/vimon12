<template>
    <div class="page has-navbar" v-nav="{title: '按钮', showBackButton: true}">
        <div class="page-content padding">

            <p>Basic Usage</p>
            <ion-button key="index" v-for="color in ['light', 'default', 'secondary', 'danger', 'dark']" :color="color">{{color}}</ion-button>


            <p>Outline Usage</p>
            <ion-button key="index" v-for="color in ['light', 'default', 'secondary', 'danger', 'dark']" :color="color" type="outline">{{color}} outline</ion-button>


            <p>Clear Usage</p>
            <ion-button key="index" v-for="color in ['light', 'default', 'secondary', 'danger', 'dark']" :color="color" type="clear">{{color}} clear</ion-button>

            <p>Round Usage</p>
            <ion-button key="index" v-for="color in ['light', 'default', 'secondary', 'danger', 'dark']" :color="color" round>{{color}} round</ion-button>

            <p>Block Buttons</p>
            <ion-button key="index" v-for="color in ['light', 'default', 'secondary', 'danger', 'dark']" :color="color" block>{{color}} block</ion-button>

            <p>Full Buttons</p>
            <ion-button key="index" v-for="color in ['light', 'default', 'secondary', 'danger', 'dark']" :color="color" full>{{color}} full</ion-button>

            <p>Button Sizes</p>
            <ion-button key="index" v-for="size in ['small', 'default', 'large']" :size="size">{{size}}</ion-button>

            <p>Icon Buttons</p>
            <ion-button color="light" icon-left><ion-icon name="arrow-back"></ion-icon>Back</ion-button>
            <ion-button color="light" icon-only><ion-icon name="arrow-down"></ion-icon></ion-button>
            <ion-button color="light" icon-only><ion-icon name="arrow-up"></ion-icon></ion-button>
            <ion-button color="light" icon-right>Forward<ion-icon name="arrow-forward"></ion-icon></ion-button>
            <ion-button color="light" icon-left><ion-icon name="home"></ion-icon>Home</ion-button>

            <ion-button type="outline" icon-left><ion-icon name="briefcase"></ion-icon>Work</ion-button>
            <ion-button type="clear" icon-left><ion-icon name="beer"></ion-icon>Pub</ion-button>


        </div>
    </div>
</template>
