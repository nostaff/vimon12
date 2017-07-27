<template>
    <div class="page has-navbar" v-nav="{title: '列表', showBackButton: true}">
        <div class="page-content padding-top">

            <div class="ion-list list-ios">
                <div class="ion-list-header item item-ios list-header-ios">
                    <div class="item-inner">
                        <div class="input-wrapper"><label class="ion-label label-ios label-ios-default">
                            Settings
                        </label></div>
                        <button class="disable-hover button button-ios button-clear button-clear-ios button-clear-ios-default item-button"
                                icon-only="" item-right=""><span class="button-inner"><i role="img"
                                                                                         class="ion-icon ion-ios ion-ios-cog"></i></span>
                            <div class="button-effect"></div>
                        </button>
                    </div>
                    <div class="button-effect"></div>
                </div>
                <a class="item item-ios item-block" detail-none="">
                    <div class="item-inner">
                        <div class="input-wrapper"><label class="ion-label label-ios label-ios-default">
                            Angola
                        </label></div>
                    </div>
                    <div class="button-effect"></div>
                </a><a class="item item-ios item-block" detail-none="">
                <div class="item-inner">
                    <div class="input-wrapper"><label class="ion-label label-ios label-ios-default">
                        Angola1
                    </label></div>
                </div>
                <div class="button-effect"></div>
            </a><a class="item item-ios item-block" detail-none="">
                <div class="item-inner">
                    <div class="input-wrapper"><label class="ion-label label-ios label-ios-default">
                        Angola2
                    </label></div>
                </div>
                <div class="button-effect"></div>
            </a><a class="item item-ios item-block" detail-none="">
                <div class="item-inner">
                    <div class="input-wrapper"><label class="ion-label label-ios label-ios-default">
                        Angola3
                    </label></div>
                </div>
                <div class="button-effect"></div>
            </a></div>



            <ion-list class="list list-ios">
                <ion-list-header class="item item-ios list-header list-header-ios">
                    <div class="item-inner">
                        <div class="input-wrapper"><!---->
                            <ion-label class="label label-ios">Comedy</ion-label>
                        </div><!----></div>
                    <div class="button-effect"></div>
                </ion-list-header>
                <ion-item class="item item-block item-ios">
                    <div class="item-inner">
                        <div class="input-wrapper"><!---->
                            <ion-label class="label label-ios">Airplane!</ion-label>
                        </div><!----></div>
                    <div class="button-effect"></div>
                </ion-item>
                <ion-item class="item item-block item-ios">
                    <div class="item-inner">
                        <div class="input-wrapper"><!---->
                            <ion-label class="label label-ios">Caddyshack</ion-label>
                        </div><!----></div>
                    <div class="button-effect"></div>
                </ion-item>
                <ion-item class="item item-block item-ios">
                    <div class="item-inner">
                        <div class="input-wrapper"><!---->
                            <ion-label class="label label-ios">Coming To America</ion-label>
                        </div><!----></div>
                    <div class="button-effect"></div>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-list-header>
                    Settings
                    <ion-button icon-only item-right slot="item-right" type="clear">
                        <ion-icon name="cog"></ion-icon>
                    </ion-button>
                </ion-list-header>
                <ion-item key="index" v-for="item in ['Angola', 'Angola1', 'Angola2', 'Angola3']">
                    {{ item }}
                </ion-item>
            </ion-list>


            <ion-list>
                <ion-item-group>
                    <ion-item-divider color="light">A</ion-item-divider>
                    <ion-item>Angola</ion-item>
                    <ion-item>Argentina</ion-item>
                </ion-item-group>
            </ion-list>

            <ion-list>
                <ion-list-header>
                    Action
                </ion-list-header>
                <ion-item>Terminator II</ion-item>
                <ion-item>The Empire Strikes Back</ion-item>
                <ion-item>Blade Runner</ion-item>
            </ion-list>

            <ion-list>
                <ion-item>
                    <ion-icon slot="item-left" name="leaf" item-left></ion-icon>
                    Herbology
                    <ion-icon slot="item-right" name="rose" item-end></ion-icon>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-item>
                    <ion-avatar slot="item-left" item-left>
                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/spengler.jpg">
                    </ion-avatar>
                    <h2>Cher</h2>
                    <p>Ugh. As if.</p>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-item>
                    <ion-avatar  slot="item-left" item-left>
                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/spengler.jpg">
                    </ion-avatar>
                    <h2>Finn</h2>
                    <h3>Don't Know What To Do!</h3>
                    <p>I've had a pretty messed up day. If we just...</p>
                </ion-item>
            </ion-list>


            <ion-list>
                <ion-item-sliding>
                    <ion-item>
                        <ion-avatar slot="item-left" item-left>
                            <img src="http://ionicframework.com/dist/preview-app/www/assets/img/spengler.jpg">
                        </ion-avatar>
                        <h2>Slimer</h2>
                    </ion-item>
                    <ion-item-options side="left">
                        <button ion-button color="primary">
                            <ion-icon name="text"></ion-icon>
                            Text
                        </button>
                        <button ion-button color="secondary">
                            <ion-icon name="call"></ion-icon>
                            Call
                        </button>
                    </ion-item-options>
                    <ion-item-options side="right">
                        <button ion-button color="primary">
                            <ion-icon name="mail"></ion-icon>
                            Email
                        </button>
                    </ion-item-options>
                </ion-item-sliding>
            </ion-list>

            <ion-list>
                <ion-item>
                    <ion-thumbnail slot="item-left" item-left>
                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/thumbnail-rotla.png">
                    </ion-thumbnail>
                    <h2>My Neighbor Totoro</h2>
                    <p>Hayao Miyazaki • 1988</p>
                    <ion-button slot="item-right" type="clear" item-right>View</ion-button>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-item-group>
                    <ion-item type="divider">
                        Other Settings
                    </ion-item>
                    <ion-item>
                        <ion-icon slot="item-left" name="plane" item-left color="danger"></ion-icon>
                        Airplane Mode
                    </ion-item>
                    <ion-item>
                        哈哈哈
                        <ion-icon slot="item-left" name="wifi" item-left color="primary"></ion-icon>
                        <ion-note slot="item-right">note</ion-note>
                    </ion-item>
                    <ion-item type="link">
                        <ion-icon slot="item-left" name="bluetooth" item-left color="primary"></ion-icon>
                        <ion-label>Bluetooth</ion-label>
                        <ion-note slot="item-right">off</ion-note>
                    </ion-item>
                </ion-item-group>

                <ion-item-group>
                    <ion-item type="divider">
                        Other Settings
                    </ion-item>
                    <ion-item>
                        <ion-icon slot="item-left" name="plane" item-left color="danger"></ion-icon>
                        <ion-label>Airplane Mode</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon slot="item-left" name="wifi" item-left color="primary"></ion-icon>
                        <ion-label>哈哈哈</ion-label>
                        <ion-note slot="item-right">note</ion-note>
                    </ion-item>
                    <ion-item>
                        <ion-icon slot="item-left" name="bluetooth" item-left color="primary"></ion-icon>
                        <ion-label>Bluetooth</ion-label>
                        <ion-note slot="item-right">off</ion-note>
                    </ion-item>
                </ion-item-group>
            </ion-list>

            <ion-list title="基本">
                <ion-item>
                    小标题
                </ion-item>
                <ion-item>
                    正文
                    <span slot="right" class="note">备注</span>
                </ion-item>
                <ion-item is-link>
                    文字
                    <span slot="right" class="note">备注</span>
                </ion-item>
                <ion-item link="/home">
                    带link的文字
                    <span slot="right" class="note">vale</span>
                </ion-item>

                <ion-item>
                    带badge的文字
                    <span slot="right" class="badge badge-danger">5</span>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-item is-link>
                    <i slot="left" class="icon ion-ios-email"></i>
                    Check mail
                </ion-item>

                <ion-item>
                    <i slot="left" class="icon ion-ios-chatbubble"></i>
                    Call Ma
                    <i slot="right" class="icon ion-ios-telephone-outline"></i>
                </ion-item>
                <ion-item is-link>
                    <i slot="left" class="icon ion-mic-a"></i>
                    Record album
                    <span slot="right" class="note">Grammy</span>
                </ion-item>
                <ion-item is-link>
                    <i slot="left" class="icon ion-person-stalker"></i>
                    Friends
                    <span slot="right" class="badge badge-assertive">0</span>
                </ion-item>

                <ion-item>
                    Call Ma
                    <button slot="right" class="button button-positive">
                        <i class="icon ion-ios-telephone"></i>
                    </button>
                </ion-item>

                <ion-item>
                    <div slot="left" class="avatar">
                        <img src="http://ionicframework.com/img/docs/spengler.jpg">
                    </div>
                    <h2>Finn</h2>
                    <h3>I'm a big deal</h3>
                    <p>Listen, I've had a pretty messed up day...</p>
                </ion-item>
                <ion-item is-link>
                    <div slot="left" class="avatar">
                        <img src="http://ionicframework.com/img/docs/spengler.jpg">
                    </div>
                    <h2>Venkman</h2>
                    <p>Back off, man. I'm a scientist.</p>
                    <button slot="right" class="disable-hover button button-clear">
                        <span class="button-inner">View</span>
                    </button>
                </ion-item>

                <ion-item is-link>
                    <div slot="left" class="thumbnail">
                        <img src="http://ionicframework.com/img/docs/siamese-dream.jpg">
                    </div>
                    <div class="item-thumbnail-left">
                        <h2>Pretty Hate Machine</h2>
                        <p>Nine Inch Nails</p>
                    </div>
                </ion-item>

            </ion-list>

            <div style="height: 100px"></div>
        </div>
    </div>
</template>
