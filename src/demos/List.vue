<template>
    <div class="page has-navbar" v-nav="{title: '列表', showBackButton: true}">
        <div class="page-content padding-top content-padded">

            <list title="基本">
                <item>
                    normal
                </item>
                <item class="item-icon-left">
                    icon left
                    <i class="icon ion-social-github dark"></i>
                </item>
                <item is-link>
                    icon right
                </item>
                <item is-link>
                    Item Title
                    <span class="item-note">item note</span>
                </item>
            </list>

            <list>
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
            </list>

            <div style="height: 100px"></div>
        </div>
    </div>
</template>
