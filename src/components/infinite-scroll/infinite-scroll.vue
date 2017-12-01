<template>
    <div class="ion-infinite-scroll" :threshold="threshold" :state="state">
        <slot>
            <div class="ion-infinite-scroll-content">
                <div class="infinite-loading">
                    <div class="infinite-loading-spinner" v-if="loadingSpinner">
                        <ion-spinner :name="loadingSpinner"></ion-spinner>
                    </div>
                    <div class="infinite-loading-text" v-html="loadingText" v-if="loadingText"></div>
                </div>
            </div>
        </slot>
    </div>
</template>

<script type="text/javascript">
    import  {isTrueProperty} from '../../utils/utils'
    import ThemeMixins from '../../themes/theme.mixins';
    import IonSpinner from "../spinner";

    const STATE_ENABLED = 'enabled'
    const STATE_DISABLED = 'disabled'
    const STATE_LOADING = 'loading'

    export default{
        name: 'ion-infinite-scroll',
        mixins: [ThemeMixins],
        components: {
            IonSpinner,
        },
        data () {
            return {
                contentCmp: null,

                lastCheck: 0,
                isInited: false,
                isEnabled: isTrueProperty(this.enabled),

                state: STATE_ENABLED
            }
        },
        props: {
            /**
             * @input {boolean} If true, Whether or not the infinite scroll should be
             * enabled or not. Setting to `false` will remove scroll event listeners
             * and hide the display.
             */
            enabled: {
                type: [Boolean, String],
                default: true
            },
            /**
             * @input {string} The threshold distance from the bottom
             * of the content to call the `infinite` output event when scrolled.
             * The threshold value can be either a percent, or
             * in pixels. For example, use the value of `10%` for the `infinite`
             * output event to get called when the user has scrolled 10%
             * from the bottom of the page. Use the value `100px` when the
             * scroll is within 100 pixels from the bottom of the page.
             * Default is `15%`.
             */
            threshold: {
                type: String,
                default: '15%'
            },
            /**
             * @input {string} An animated SVG spinner that shows while loading.
             */
            loadingSpinner: {
                type: String,
                default () { return 'ios' }
//                default () { return this.$config && this.$config.get('infiniteLoadingSpinner', this.$config.get('spinner', 'ios')) || 'ios' }
            },
            /**
             * @input {string} Optional text to display while loading.
             */
            loadingText: {
                type: String,
                default: 'Loading more data...'
            }
        },
        computed: {
            thr () {
                return this.threshold
            },
            thrPx () {
                if (this.threshold.indexOf('%') > -1) {
                    return 0
                } else {
                    return parseFloat(this.threshold)
                }
            },
            thrPc () {
                if (this.threshold.indexOf('%') > -1) {
                    return (parseFloat(this.threshold) / 100)
                } else {
                    return 0
                }
            }
        },
        watch: {
            enabled (val) {
                this.isEnabled = isTrueProperty(val);
                this.setListeners(this.isEnabled)
            }
        },
        mounted() {
            if (this.$parent.$data.componentName === 'ionContent') {
                this.contentCmp = this.$parent;
            }
            console.assert(this.contentCmp, 'InfiniteScroll组件必须要在Content组件下使用')
            this.contentCmp && this.contentCmp.setElementClass('has-infinite-scroll', true)

            this.isInited = true
            this.setListeners(this.isEnabled);
        },
        destroy () {
            this.setListeners(false)
        },
        methods: {
            onScroll(ev) {
                if (this.state === STATE_LOADING || this.state === STATE_DISABLED) {
                    return 1;
                }

                if (this.lastCheck + 32 > ev.timeStamp) {
                    // no need to check less than every XXms
                    return 2;
                }
                this.lastCheck = ev.timeStamp;

                // ******** DOM READ ****************
                const infiniteHeight = this.getNativeElement().scrollHeight;
                if (!infiniteHeight) {
                    // if there is no height of this element then do nothing
                    return 3;
                }

                // ******** DOM READ ****************
                const d = this.contentCmp.getContentDimensions();
                const height = d.contentHeight;

                const threshold = this.thrPc ? (height * this.thrPc) : this.thrPx;

                // ******** DOM READS ABOVE / DOM WRITES BELOW ****************

                let distanceFromInfinite = d.scrollHeight - infiniteHeight - d.scrollTop - height - threshold;
                if (distanceFromInfinite < 0) {
                    if (this.state !== STATE_LOADING && this.state !== STATE_DISABLED) {
                        this.state = STATE_LOADING
                        this.$emit('onInfinite', this)
                    }
                    return 5
                }

                return 6;
            },

            /**
             * Call `complete()` within the `infinite` output event handler when
             * your async operation has completed. For example, the `loading`
             * state is while the app is performing an asynchronous operation,
             * such as receiving more data from an AJAX request to add more items
             * to a data list. Once the data has been received and UI updated, you
             * then call this method to signify that the loading has completed.
             * This method will change the infinite scroll's state from `loading`
             * to `enabled`.
             */
            complete() {
                if (this.state !== STATE_LOADING) {
                    return;
                }

                this.state = STATE_ENABLED;
                this.contentCmp.resize()
            },

            /**
             * Pass a promise inside `waitFor()` within the `infinite` output event handler in order to
             * change state of infiniteScroll to "complete"
             */
            waitFor(action) {
                const enable = this.complete.bind(this);
                action.then(enable, enable);
            },

            /**
             * Call `enable(false)` to disable the infinite scroll from actively
             * trying to receive new data while scrolling. This method is useful
             * when it is known that there is no more data that can be added, and
             * the infinite scroll is no longer needed.
             * @param {boolean} shouldEnable  If the infinite scroll should be
             * enabled or not. Setting to `false` will remove scroll event listeners
             * and hide the display.
             */
            enable(shouldEnable) {
                this.state = (shouldEnable ? STATE_ENABLED : STATE_DISABLED);
                this.setListeners(shouldEnable);
            },

            /**
             * @hidden
             */
            setListeners(shouldListen) {
                if (this.isInited) {
                    if (shouldListen) {
                        this.contentCmp.$on('onScroll', this.onScroll)
                    } else {
                        this.contentCmp.$off('onScroll', this.onScroll)
                    }
                }
            }

        }
    }
</script>

<style lang="scss">
    @import 'infinite-scroll';
</style>