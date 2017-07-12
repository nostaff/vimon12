<template>
    <div class="page has-navbar" v-nav="{title: '列表', showBackButton: true}">
        <div class="page-content">

            <list title="基本">
                <item>
                    小标题
                </item>
                <item>
                    正文
                    <span class="item-note">备注</span>
                </item>
                <item is-link>
                    文字
                    <div class="item-note">
                        备注
                    </div>
                </item>
                <item link="/home">
                    带link的文字
                    <div class="item-note">
                        vale
                    </div>
                </item>
            </list>

            <div class="list">
                <item is-link>
                    <div class="item-icon-left">
                        <i class="icon ion-ios-email"></i>
                        Check mail
                    </div>
                </item>

                <item>
                    <div class="item-icon-left item-icon-right">
                        <i class="icon ion-ios-chatbubble"></i>
                        Call Ma
                        <i class="icon ion-ios-telephone-outline"></i>
                    </div>
                </item>
                <item is-link>
                    <div class="item-icon-left">
                        <i class="icon ion-mic-a"></i>
                        Record album
                        <span class="item-note">Grammy</span>
                    </div>
                </item>
                <item is-link>
                    <div class="item-icon-left">
                        <i class="icon ion-person-stalker"></i>
                        Friends
                        <span class="badge badge-assertive">0</span>
                    </div>
                </item>

                <item>
                    <div class="item-button-right">
                        Call Ma
                        <button class="button button-positive">
                            <i class="icon ion-ios-telephone"></i>
                        </button>
                    </div>
                </item>

                <item is-link>
                    <div class="item-avatar">
                        <img src="http://ionicframework.com/img/docs/spengler.jpg">
                        <h2>Venkman</h2>
                        <p>Back off, man. I'm a scientist.</p>
                    </div>
                </item>

                <item is-link>
                    <div class="item-thumbnail-left">
                        <img src="http://ionicframework.com/img/docs/siamese-dream.jpg">
                        <h2>Pretty Hate Machine</h2>
                        <p>Nine Inch Nails</p>
                    </div>
                </item>

            </div>

            <div style="height: 100px"></div>
        </div>
    </div>
</template>
