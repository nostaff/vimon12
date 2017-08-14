/**
 * 主题通用 mixins
 */
export default {
    name: 'base',
    data() {
        return {
            theme: 'ios',
            elelmentId: 'ion-' + Math.random().toString(36).substring(3, 8),
            // components: [],
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