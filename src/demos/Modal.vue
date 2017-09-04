<template>
    <ion-page v-nav="{title: '模态窗', showBackButton: true}">
        <ion-content class="page-content padding padding-top">

            <div padding>
                <ion-button block @click.native="showModal()">Open Basic Modal</ion-button>
            </div>

            <ion-list title="Enter Parameters to Pass to the Modal">
                <ion-item class="item item-block item-ios item-select">
                            <ion-label slot="item-label">Parameters</ion-label>
                            <ion-select slot="item-content" multiple="true">

                                <div class="select-placeholder select-text"></div>
                                <div class="select-icon">
                                    <div class="select-icon-inner"></div>
                                </div>
                                <button aria-haspopup="true"
                                        class="item-cover disable-hover item-cover-ios item-cover-default item-cover-default-ios"
                                        ion-button="item-cover" type="button" id="select-1-0" aria-labelledby="lbl-1"
                                        aria-disabled="false"><span class="button-inner"></span>
                                    <div class="button-effect"></div>
                                </button>
                            </ion-select>
                </ion-item>
            </ion-list>

            <div padding="">
                <ion-button block="" color="danger">Open with Parameters</ion-button>
            </div>

        </ion-content>
    </ion-page>
</template>
<script>
    import DefaultModal from './modals/DefaultModal.vue'
    import MultiModal from './modals/MultiModal.vue'
    import PopupModal from './modals/PopupModal.vue'
    import IonButton from "../vonic/components/button/index.vue";

    export default {
        components: {IonButton},
        data() {
            return {
                modal: undefined,
                multiModal: undefined,
                popupModal: undefined
            }
        },

        created() {
            window.MultiModal = MultiModal
        },

        mounted() {
//            $modal.fromComponent(DefaultModal, {
//                title: '模态窗标题',
//                theme: 'default',
//                onHide: () => {
//                    console.log('modal hide')
//                }
//            }).then((modal) => {
//                this.modal = modal
//            })
//
//            $modal.fromComponent(MultiModal, {
//                title: '模态窗标题',
//                theme: 'dark'
//            }).then((modal) => {
//                this.multiModal = modal
//            })
//
//            $modal.fromComponent(PopupModal, {
//                title: '模态窗内弹层',
//                theme: 'energized'
//            }).then((modal) => {
//                this.popupModal = modal
//            })
        },

        destroyed() {
            if (this.modal)
                $modal.destroy(this.modal)

            if (this.multiModal)
                $modal.destroy(this.multiModal)

            if (this.popupModal)
                $modal.destroy(this.popupModal)

            window.MultiModal = undefined
        },

        methods: {
            showModal() {
                this.modal.show()
            },

            showMultiModal() {
                this.multiModal.show()
            },

            showPopupModal() {
                this.popupModal.show()
            }
        }
    }
</script>
