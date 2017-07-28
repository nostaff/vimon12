<template>
    <div class="page has-navbar" v-nav="{title: '搜索框', showBackButton: true}">
        <div class="page-content">

            <search v-model="keywords" placeholder="输入关键字" :on-search="onSearch" :on-cancel="onCancel"></search>

            <div class="ion-searchbar searchbar searchbar-ios searchbar-left-aligned">
                <div class="searchbar-input-container">
                    <button class="searchbar-md-cancel disable-hover button button-md button-clear button-clear-md button-clear-md-dark"
                            clear="" color="dark" ion-button="" mode="md" type="button"><span class="button-inner"><ion-icon
                            name="md-arrow-back" role="img" class="icon icon-ios ion-md-arrow-back"
                            aria-label="arrow back"></ion-icon></span>
                        <div class="button-effect"></div>
                    </button>
                    <div class="searchbar-search-icon"></div>
                    <input class="searchbar-input" placeholder="Search" type="search" autocomplete="off"
                           autocorrect="off" spellcheck="false">
                    <button class="searchbar-clear-icon disable-hover button button-ios button-clear button-clear-ios"
                            clear="" ion-button="" type="button"><span class="button-inner"></span>
                        <div class="button-effect"></div>
                    </button>
                </div>
                <button class="searchbar-ios-cancel disable-hover button button-ios button-clear button-clear-ios"
                        clear="" ion-button="" mode="ios" type="button" tabindex="-1"><span
                        class="button-inner">Cancel</span>
                    <div class="button-effect"></div>
                </button>
            </div>

            <div class="item" v-show="searching">
                searching for '{{keywords}}'.
            </div>

        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                keywords: '',
                searching: false
            }
        },

        methods: {
            onSearch(keywords) {
                this.searching = true;
            },

            onCancel() {
                this.searching = false;
                this.keywords = ''
            }
        }
    }
</script>
