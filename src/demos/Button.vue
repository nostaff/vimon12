<template>
    <div class="page has-navbar" v-nav="{title: '按钮', showBackButton: true}">
        <div class="page-content padding">

            <p>Basic Usage</p>
            <button class="disable-hover button button-default button-light"><span class="button-inner">Light</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-default"><span class="button-inner">Default</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-secondary"><span
                    class="button-inner">Secondary</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-danger"><span class="button-inner">Danger</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-dark"><span class="button-inner">Dark</span>
                <div class="button-effect"></div>
            </button>

            <p>Outline Usage</p>
            <button class="disable-hover button  button-light button-outline"><span class="button-inner">Light</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-outline button-default"><span class="button-inner">Default</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-secondary button-outline "><span
                    class="button-inner">Secondary</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-outline button-danger"><span class="button-inner">Danger</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-outline button-dark"><span class="button-inner">Dark</span>
                <div class="button-effect"></div>
            </button>

            <p>Clear Usage</p>
            <button class="disable-hover button button-clear button-light"><span class="button-inner">Light</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-clear button-default"><span class="button-inner">Default</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-clear button-secondary"><span
                    class="button-inner">Secondary</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-clear button-danger"><span class="button-inner">Danger</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-clear button-dark"><span class="button-inner">Dark</span>
                <div class="button-effect"></div>
            </button>

            <p>Round Usage</p>
            <button class="disable-hover button button-default button-light button-round"><span class="button-inner">Light</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-default button-round"><span class="button-inner">Default</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-secondary button-round"><span
                    class="button-inner">Secondary</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-danger button-round"><span class="button-inner">Danger</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-dark button-round"><span
                    class="button-inner">Dark</span>
                <div class="button-effect"></div>
            </button>

            <p>Block Buttons</p>
            <button class="disable-hover button button-default button-light button-block"><span class="button-inner">Light</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-default button-block"><span class="button-inner">Default</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-secondary button-block"><span
                    class="button-inner">Secondary</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-danger button-block"><span class="button-inner">Danger</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-dark button-block"><span
                    class="button-inner">Dark</span>
                <div class="button-effect"></div>
            </button>

            <p>Full Buttons</p>
            <button class="disable-hover button button-default button-light button-full"><span class="button-inner">Light</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-default button-full"><span class="button-inner">Default</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-secondary button-full"><span class="button-inner">Secondary</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-danger button-full"><span class="button-inner">Danger</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-dark button-full"><span
                    class="button-inner">Dark</span>
                <div class="button-effect"></div>
            </button>


            <p>Button Sizes</p>
            <button class="disable-hover button button-default button-small button-light"><span class="button-inner">Light Small</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-small"><span
                    class="button-inner">Default Small</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-secondary"><span class="button-inner">Secondary Medium</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-danger"><span
                    class="button-inner">Danger Medium</span>
                <div class="button-effect"></div>
            </button>
            <button class="disable-hover button button-default button-large button-dark"><span class="button-inner">Dark Large</span>
                <div class="button-effect"></div>
            </button>

            <p>Icon Buttons</p>

            <p>
                <button class="disable-hover button button-default  button-light"><span class="button-inner">
  <i class="icon ion-ios-arrow-back icon-start"></i>
  Back
</span>
                    <div class="button-effect"></div>
                </button>

                <button class="disable-hover button button-default  button-light"><span class="button-inner">
  <i class="icon ion-ios-arrow-down icon-only"></i>
</span>
                    <div class="button-effect"></div>
                </button>

                <button class="disable-hover button button-default  button-light"><span class="button-inner">
  <i class="icon ion-ios-arrow-up icon-only"></i>
</span>
                    <div class="button-effect"></div>
                </button>

                <button class="disable-hover button button-default  button-light"><span class="button-inner">
  Next
  <i class="icon ion-ios-arrow-forward icon-end"></i>
</span>
                    <div class="button-effect"></div>
                </button>
            </p>

            <p>
                <button class="disable-hover button button-default "><span class="button-inner">
  <i class="icon ion-ios-home"></i>
  Home
</span>
                    <div class="button-effect"></div>
                </button>
                <button class="disable-hover button button-outline button-outline"><span class="button-inner">
  <i class="icon ion-ios-briefcase icon-start"></i>
  Work
</span>
                    <div class="button-effect"></div>
                </button>
                <button class="disable-hover button button-clear button-clear"><span class="button-inner">
  <i class="icon ion-ios-beer icon-start"></i>
  Pub
</span>
                    <div class="button-effect"></div>
                </button>
            </p>

            <p>
                <button class="disable-hover button button-default  button-secondary"><span class="button-inner">
  <i class="icon ion-ios-people icon-start"></i>
  Friends
</span>
                    <div class="button-effect"></div>
                </button>
                <button class="disable-hover button button-outline button-secondary"><span class="button-inner">
  <i class="icon ion-ios-paw icon-start"></i>
  Best Friend
</span>
                    <div class="button-effect"></div>
                </button>
            </p>

            <p>
                <button class="disable-hover button button-default button-danger"><span class="button-inner">
  <i class="icon ion-ios-close icon-start"></i>
  Remove
</span>
                    <div class="button-effect"></div>
                </button>
                <button class="disable-hover button button-outline button-danger"><span class="button-inner">
  <i class="icon ion-android-remove-circle icon-only"></i>
</span>
                    <div class="button-effect"></div>
                </button>
                <button class="disable-hover button button-clear button-danger"><span class="button-inner">
  <i class="icon ion-ios-trash icon-only"></i>
</span>
                    <div class="button-effect"></div>
                </button>
            </p>

            <p>
                <button class="disable-hover button button-default button-round button-dark"><span class="button-inner">
  <i class="icon ion-ios-construct icon-start"></i>
  Tools
</span>
                    <div class="button-effect"></div>
                </button>
                <button class="disable-hover button button-clear button-dark"><span class="button-inner">
  <i class="icon ion-ios-hammer icon-only"></i>
</span>
                    <div class="button-effect"></div>
                </button>
            </p>

        </div>
    </div>
</template>
