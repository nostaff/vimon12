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
                isButtonCover: false
            }
        },
        computed: {
            colorClass: function() {
                if (this.isButtonCover)
                    return '';
                let theme = this.$ionic.theme;
                switch (this.style) {
                    case 'outline':
                    case 'clear':
                        return `${this.prefix}-${this.style}-${theme}-${this.color}`;
                    default:
                        return `${this.prefix}-${theme}-${this.color}`;
                }
            },
            roundClass: function() {
                return this.round && !this.isButtonCover ? `button-round button-round-${this.theme}` : '';
            },
            blockClass: function() {
                return this.block && !this.isButtonCover ? `button-block button-block-${this.theme}` : '';
            },
            fullClass: function() {
                return this.full && !this.isButtonCover ? `button-full button-full-${this.theme}` : '';
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
            // 如果是在组件 buttons 下则修改前缀为 bar-button-
            let name = this.$parent.$data.componentName;
            if (name === 'buttons') {
                this.prefix = 'bar-button';
            }
            if (this.role === 'radio' || this.role === 'checkbox') {
                this.prefix = 'item-cover';
            }
        },
        mounted() {
            //如果在item 组件里 则加上class
            if (name === 'ionItem' && this.prefix === 'button') {
                this.isParentItem = true;
            }

            this.style = this.clear ? 'clear' : (this.outline ? 'outline' : 'default')
            this.isButtonCover = this.$el.classList.contains('button-cover')
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