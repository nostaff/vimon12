<template>
    <button @touchstart="handleTouchStart" :class="[
        'disable-hover',
        prefix,
        theme ? prefix +'-' + theme:'',
        style ? prefix + '-' + style : '',
        theme ? prefix + '-' + style + '-' + theme:'',
        colorClass,
        roundClass,
        blockClass,
        fullClass,
        sizeClass,
        isActive?'activated':'',
        isParentItem && prefix == 'button' ? 'item-button' : ''
        ]">
        <slot name="backup"></slot>
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
        props: {
            outline: Boolean,
            clear: Boolean,
            round: Boolean,
            block: Boolean,
            full: Boolean,
            role: {
                type: String,
                default: 'button'
            },
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
        },
        data() {
            return {
                prefix: 'button',
                style: 'default',
                isActive: false,
                //如果是在item 组件内部则为true
                isParentItem: false,
                isItemCover: false
            }
        },
        computed: {
            colorClass: function() {
                if (this.isItemCover)
                    return '';
                switch (this.style) {
                    case 'outline':
                    case 'clear':
                        return `${this.prefix}-${this.style}-${this.theme}-${this.color}`;
                    default:
                        return `${this.prefix}-${this.theme}-${this.color}`;
                }
            },
            roundClass: function() {
                return this.round && !this.isItemCover ? `button-round button-round-${this.theme}` : '';
            },
            blockClass: function() {
                return this.block && !this.isItemCover ? `button-block button-block-${this.theme}` : '';
            },
            fullClass: function() {
                return this.full && !this.isItemCover ? `button-full button-full-${this.theme}` : '';
            },
            sizeClass: function() {
                let size = this.size;
                switch (this.size) {
                    case 'small':
                    case 'large':
                        return `${this.prefix}-${size} ${this.prefix}-${size}-${this.theme}`;
                    default:
                        return '';
                }
            }
        },
        created() {
            let parentName = this.$parent.$data.componentName;
            //如果在item 组件里 则加上class
            if (parentName === 'ionItem') {
                this.isParentItem = true;
            }

            // 如果是在组件 buttons 下则修改前缀为 bar-button-
            if (parentName === 'ionButtons' || parentName === 'ionToolbar') {
                this.prefix = 'bar-button';
            }
            if (this.role === 'radio' || this.role === 'checkbox' || this.role === 'select') {
                this.prefix = 'item-cover';
            } else if (this.role !== 'button') {
                this.prefix = this.role
            }

            this.style = this.clear ? 'clear' : (this.outline ? 'outline' : 'default')
            this.isItemCover = this.prefix === 'item-cover'
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

    };
</script>

<style lang="scss">
    @import './button.scss';
    @import './button-icon.scss';
    @import './button.ios.scss';
    @import './button.md.scss';
    @import './button.wp.scss';
</style>