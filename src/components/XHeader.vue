<template>
  <header class="bar bar-nav">
    <slot name="overwrite-left">
      <a class="btn btn-link btn-nav pull-left" v-show="_leftOptions.showBack" @click.preventDefault="onClickBack">
        <span class="icon" :class="_leftOptions.backIcon"></span>
        {{typeof _leftOptions.backText === 'undefined' ? 'Back' : _leftOptions.backText}}
      </a>
    </slot>
    <slot name="left"></slot>
    <a class="btn btn-link btn-nav pull-right" v-show="_rightOptions.showMore" @click.preventDefault="$emit('on-click-right')">
      {{typeof _rightOptions.moreText === 'undefined' ? 'More' : _rightOptions.moreText}}
      <span class="icon" :class="_rightOptions.moreIcon"></span>
    </a>
    <slot name="right"></slot>
    <h1 class="title" @click="$emit('on-click-title')">
      <slot name="title">
        <transition :name="transition">
          <span v-show="title">{{title}}</span>
        </transition>
      </slot>
    </h1>
  </header>
</template>

<script>
    import objectAssign from 'object-assign'

    export default {
        props: {
            leftOptions: Object,
            title: String,
            transition: String,
            rightOptions: Object
        },
        computed: {
            _leftOptions () {
                return objectAssign({
                    backText: "Back",
                    showBack: true,
                    backIcon: 'icon-left-nav',
                    preventGoBack: false
                }, this.leftOptions || {})
            },
            _rightOptions () {
                return objectAssign({
                    moreText: "More",
                    showMore: false,
                    moreIcon: 'icon-right-nav',
                }, this.rightOptions || {})
            },
        },
        methods: {
            onClickBack () {
                if (this._leftOptions.preventGoBack) {
                    this.$emit('on-click-back')
                } else {
                    this.$router ? this.$router.back() : window.history.back()
                }
            }
        }
    }
</script>