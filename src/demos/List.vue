<template>
    <div class="page has-navbar" v-nav="{title: '列表', showBackButton: true}">
        <div class="page-content padding-top">


            <div class="list">
                <div class="group">
                    <div class="item item-divider">
                        <div class="item-inner">
                            <div class="input-wrapper">
                                <label class="label">A</label>
                            </div>
                        </div>
                    </div>
                    <div class="item item-block">
                        <div class="item-inner">
                            <div class="input-wrapper">
                                <label class="label">Angola</label>
                            </div>
                        </div>
                    </div>
                    <div class="item item-block">
                        <div class="item-inner">
                            <div class="input-wrapper">
                                <label class="label">Argentina</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="group">
                    <div class="item item-divider">
                        <div class="item-inner">
                            <div class="input-wrapper">
                                <label class="label">B</label>
                            </div>
                        </div>
                    </div>
                    <div class="item item-block">
                        <div class="item-inner">
                            <div class="input-wrapper">
                                <label class="label">Brmenia</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <list title="基本">
                <item>
                    小标题
                </item>
                <item>
                    正文
                    <span slot="right" class="note">备注</span>
                </item>
                <item is-link>
                    文字
                    <span slot="right" class="note">备注</span>
                </item>
                <item link="/home">
                    带link的文字
                    <span slot="right" class="note">vale</span>
                </item>

                <item>
                    带badge的文字
                    <span slot="right" class="badge badge-danger">5</span>
                </item>
            </list>

            <div class="list">
                <item is-link>
                    <i slot="left" class="icon ion-ios-email"></i>
                    Check mail
                </item>

                <item>
                    <i slot="left" class="icon ion-ios-chatbubble"></i>
                    Call Ma
                    <i slot="right" class="icon ion-ios-telephone-outline"></i>
                </item>
                <item is-link>
                    <i slot="left" class="icon ion-mic-a"></i>
                    Record album
                    <span slot="right" class="note">Grammy</span>
                </item>
                <item is-link>
                    <i slot="left" class="icon ion-person-stalker"></i>
                    Friends
                    <span slot="right" class="badge badge-assertive">0</span>
                </item>

                <item>
                    Call Ma
                    <button slot="right" class="button button-positive">
                        <i class="icon ion-ios-telephone"></i>
                    </button>
                </item>

                <item>
                    <div slot="left" class="avatar">
                        <img src="http://ionicframework.com/img/docs/spengler.jpg">
                    </div>
                    <h2>Finn</h2>
                    <h3>I'm a big deal</h3>
                    <p>Listen, I've had a pretty messed up day...</p>
                </item>
                <item is-link>
                    <div slot="left" class="avatar">
                        <img src="http://ionicframework.com/img/docs/spengler.jpg">
                    </div>
                    <h2>Venkman</h2>
                    <p>Back off, man. I'm a scientist.</p>
                    <button slot="right" class="disable-hover button button-clear">
                        <span class="button-inner">View</span>
                    </button>
                </item>

                <item is-link>
                    <div slot="left" class="thumbnail">
                        <img src="http://ionicframework.com/img/docs/siamese-dream.jpg">
                    </div>
                    <div class="item-thumbnail-left">
                        <h2>Pretty Hate Machine</h2>
                        <p>Nine Inch Nails</p>
                    </div>
                </item>

            </div>

            <div style="height: 100px"></div>
        </div>
    </div>
</template>
