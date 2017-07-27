/**
 * 主题通用 mixins
 */
export default {
    data() {
        return {
            theme: 'ios'
        };
    },
    created() {
        if (this.theme != this.$ionic.theme) {
            this.theme = this.$ionic.theme;
        }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: 'default',
            validator(value) {
                return [
                        'default',
                        'primary',
                        'light',
                        'secondary',
                        'danger',
                        'dark'
                    ].indexOf(value) > -1;
            }
        }
    }
}