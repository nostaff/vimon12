<template>
    <div class="page has-navbar" v-nav="{title: '列表', showBackButton: true}">
        <div class="page-content">

            <ion-list>
                <ion-list-header color="primary">
                    Settings
                    <ion-button type="clear" icon-only slot="item-right">
                        <ion-icon name="cog"></ion-icon>
                    </ion-button>
                </ion-list-header>
                <ion-item detail-push key="index" v-for="item in ['Angola', 'Angola1', 'Angola2', 'Angola3']">
                    {{ item }}
                </ion-item>
            </ion-list>


            <ion-list>
                <ion-item-group title="A" color="primary">
                    <ion-item>
                        <ion-label slot="item-label">AngolaAngola00000</ion-label>
                    </ion-item>
                    <ion-item>Angola</ion-item>
                    <ion-item>Argentina</ion-item>
                </ion-item-group>

                <ion-item-group title="B" color="secondary">
                    <ion-item>Angola</ion-item>
                    <ion-item>Argentina</ion-item>
                    <ion-item>Angola</ion-item>
                </ion-item-group>
            </ion-list>

            <ion-list title="Action">
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
                <ion-item detail-push>
                    <ion-avatar slot="item-left" item-left>
                        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/spengler.jpg">
                    </ion-avatar>
                    <h2>Cher</h2>
                    <p>Ugh. As if.</p>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-item>
                    <ion-avatar slot="item-left">
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
                        <ion-avatar slot="item-left">
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
                    <ion-thumbnail slot="item-left">
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
                        <ion-icon slot="item-left" name="plane" color="danger"></ion-icon>
                        Airplane Mode
                    </ion-item>
                    <ion-item>
                        哈哈哈
                        <ion-icon slot="item-left" name="wifi" color="primary"></ion-icon>
                        <ion-note slot="item-right">note</ion-note>
                    </ion-item>
                    <ion-item type="link">
                        <ion-icon slot="item-left" name="bluetooth" color="primary"></ion-icon>
                        Bluetooth
                        <ion-note slot="item-right">off</ion-note>
                    </ion-item>
                </ion-item-group>

                <ion-item-group>
                    <ion-item type="divider">
                        Other Settings
                    </ion-item>
                    <ion-item>
                        <ion-icon slot="item-left" name="plane" color="danger"></ion-icon>
                        Airplane Mode
                    </ion-item>
                    <ion-item>
                        <ion-icon slot="item-left" name="wifi" color="primary"></ion-icon>
                        哈哈哈
                        <ion-note slot="item-right">note</ion-note>
                    </ion-item>
                    <ion-item>
                        <ion-icon slot="item-left" name="bluetooth" color="primary"></ion-icon>
                        Bluetooth
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
                    <ion-note slot="item-right">note</ion-note>
                </ion-item>
                <ion-item  detail-push>
                    文字
                    <ion-note slot="item-right">note</ion-note>
                </ion-item>
                <ion-item link="/home">
                    带link的文字
                    <ion-note slot="item-right">note</ion-note>
                </ion-item>

                <ion-item>
                    带badge的文字
                    <ion-badge slot="item-right" color="primary">5</ion-badge>
                </ion-item>
            </ion-list>

            <ion-list>
                <ion-list-header>List Header</ion-list-header>
                <ion-item  detail-push>
                    <ion-icon slot="item-left" name="mail" color="primary"></ion-icon>
                    Check mail
                </ion-item>
                <ion-item  detail-push>
                    <ion-icon slot="item-left" name="mic" color=""secondary></ion-icon>
                    Record album
                    <ion-note slot="item_right">Grammy</ion-note>
                </ion-item>
                <ion-item  detail-push>
                    <ion-icon slot="item-left" name="person"></ion-icon>
                    Friends
                    <ion-badge slot="item-right" color="light">0</ion-badge>
                </ion-item>

                <ion-item>
                    Call Ma
                    <ion-button slot="item-right" type="outline" color="primary" icon-left>
                        <ion-icon name="call"></ion-icon>
                        Call
                    </ion-button>
                </ion-item>

                <ion-item>
                    <div slot="item-left" class="avatar">
                        <img src="http://ionicframework.com/img/docs/spengler.jpg">
                    </div>
                    <h2>Finn</h2>
                    <h3>I'm a big deal</h3>
                    <p>Listen, I've had a pretty messed up day...</p>
                </ion-item>
                <ion-item  detail-push>
                    <div slot="item-left" class="avatar">
                        <img src="http://ionicframework.com/img/docs/spengler.jpg">
                    </div>
                    <h2>Venkman</h2>
                    <p>Back off, man. I'm a scientist.</p>
                    <ion-button slot="item-right" type="clear">View</ion-button>
                </ion-item>

                <ion-item is-link>
                    <ion-thumbnail slot="item-left">
                        <img src="http://ionicframework.com/img/docs/siamese-dream.jpg">
                    </ion-thumbnail>
                    <h2>Pretty Hate Machine</h2>
                    <p>Nine Inch Nails</p>
                </ion-item>

            </ion-list>

            <div style="height: 100px"></div>
        </div>
    </div>
</template>
