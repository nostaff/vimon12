import ThemeMixins from '../../themes/theme.mixins';
export default {
    mixins: [ThemeMixins],
    data() {
        return {
            componentName: 'ionItem'
        };
    },
    methods: {
        getText() {
            let $labelEl = this.$refs.label.$el;
            return $labelEl.textContent || '';
        }
    }
};