<template>
    <i class="ion-icon" role="img" :class="[
        nameClass,
        colorClass,
        isParentItem?'item-icon':''
        ]"></i>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';

    export default {
        name: 'ion-icon',
        mixins: [ThemeMixins],
        data() {
            return {
                isParentItem: false
            }
        },
        props: {
            name: {
                type: String,
                default: ''
            },
        },
        created() {
            let name = this.$parent.$data.componentName;
            //如果在item 组件里 则加上class
            if (name === 'ionItem') {
                this.isParentItem = true;
            }

        },
        computed: {
            nameClass() {
                let name = this.name;
                if ((/^ion-md-|^ion-ios-|^ion-logo-/.test(name))) {
                    return name
                }
                return name ? `ion-${this.theme} ion-${this.theme === 'wp'?'ios':this.theme}-${name}` : `ion-${this.theme}` ;
            },
            colorClass() {
                return this.color ? `icon-${this.theme}-${this.color}` : '';
            }
        }
    };
</script>
<style lang="scss">
    @import './icon.scss';
    @import './icon.ios.scss';
    @import './icon.md.scss';
    @import './icon.wp.scss';
</style>