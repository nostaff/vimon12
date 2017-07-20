<template>
    <div class="page has-navbar" v-nav="{title: '按钮', showBackButton: true}">
        <div class="page-content padding padding-top">

            <p>Ionic Theme</p>
            <button class="button button-assertive button-block">Assertive</button>
            <button class="button button-positive button-block">Positive</button>
            <button class="button button-balanced button-block">Balanced</button>
            <button class="button button-energized button-block">Energized</button>
            <button class="button button-calm button-block">Calm</button>
            <button class="button button-royal button-block">Royal</button>
            <button class="button button-dark button-block">Dark</button>
            <button class="button button-light button-block">Light</button>

            <p>Button Styles</p>
            <button class="button button-positive button-small">Small</button>
            <button class="button button-positive">Normal</button>
            <button class="button button-positive button-large">Large</button>
            <button class="button button-energized button-clear">Clear</button>
            <button class="button button-calm button-outline">Outline</button>
            <button class="button button-balanced button-block">Block</button>
            <button class="button button-light button-full">Full</button>

            <button class="button button-assertive button-block button-outline">Assertive Block Outline</button>

            <p>Button With Icons</p>
            <button class="button">
                <i class="icon ion-load-b"></i> Loading...
            </button>
            <button class="button icon-left ion-home">Home</button>
            <button class="button icon-left ion-star button-positive">Favorites</button>
            <a class="button icon-right ion-chevron-right button-calm">Learn More</a>
            <a class="button icon-left ion-chevron-left button-clear button-dark">Back</a>
            <button class="button icon ion-gear-a"></button>
            <a class="button button-icon icon ion-settings"></a>
            <a class="button button-outline icon-right ion-navicon button-balanced">Reorder</a>

        </div>
    </div>
</template>
