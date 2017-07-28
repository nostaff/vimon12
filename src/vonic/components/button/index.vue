<template>
    <button @touchstart="handleTouchStart" class="disable-hover" :class="[
        role,
        theme ? role +'-' + theme:'',
        type ? role + '-' + type : '',
        theme ? role + '-' + type + '-' + theme:'',
        colorClass,
        isActive?'activated':'',
        roundClass,
        blockClass,
        fullClass,
        sizeClass,
        isParentItem ? 'item-button' : ''
        ]">
		<span class="button-inner">
            <slot></slot>
        </span>
        <div class="button-effect"></div>
    </button>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins';
    export default {
        name: 'ion-button',
        mixins: [ThemeMixins],
        data() {
            return {
                role: 'button',
                isActive: false,
                //如果是在item 组件内部则为true
                isParentItem: false
            }
        },
        computed: {
            colorClass: function() {
                let theme = this.$ionic.theme;
                switch (this.type) {
                    case 'outline':
                    case 'clear':
                        return `${this.role}-${this.type}-${theme}-${this.color}`;
                    default:
                        return `${this.role}-${theme}-${this.color}`;
                }
            },
            roundClass: function() {
                return this.round ? `button-round button-round-${this.theme}` : '';
            },
            blockClass: function() {
                return this.block ? `button-block button-block-${this.theme}` : '';
            },
            fullClass: function() {
                return this.full ? `button-full button-full-${this.theme}` : '';
            },
            sizeClass: function() {
                let size = this.size;
                switch (this.size) {
                    case 'small':
                    case 'large':
                        return `${this.role}-${size} ${this.role}-${size}-${this.theme}`;
                    default:
                        return '';
                }
            }
        },
        created() {
            // 如果是在组件 buttons 下则修改前缀为 bar-button-
            let name = this.$parent.$data.componentName;
            if (name === 'buttons') {
                this.role = 'bar-button';
            }
            //如果在item 组件里 则加上class
            if (name === 'ionItem') {
                this.isParentItem = true;
            }

            if (this.prefix) {
                this.role = this.prefix;
            }

        },
        methods: {
            handleTouchStart(evt) {
                this.isActive = true;
                this.$emit('touchstart', evt);
                window.addEventListener('touchend', this.handleTouchMove);
                window.addEventListener('touchmove', this.handleTouchMove);
            },
            handleTouchMove(e) {
                this.isActive = false;
            }
        },
        props: {
            // 类型 默认   outline  clear
            type: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                            'default',
                            'outline',
                            'clear'
                        ].indexOf(value) > -1;
                }
            },
            round: Boolean,
            block: Boolean,
            full: Boolean,
            prefix: String,
            size: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                            'default',
                            'small',
                            'large'
                        ].indexOf(value) > -1;
                }
            }
        }
    };
</script>
<style lang="scss">
    @import './button.scss';
    @import './button-icon.scss';
    @import './button.ios.scss';
    @import './button.md.scss';
    @import './button.wp.scss';
</style>