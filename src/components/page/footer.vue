<template>
    <div class="ion-footer footer" :class="['footer-'+theme]">
       <slot></slot>
    </div>
</template>
<script>
    import ThemeMixins from '../../themes/theme.mixins'
export default {
      name: 'ion-footer',
      mixins: [ThemeMixins]
    }
</script>