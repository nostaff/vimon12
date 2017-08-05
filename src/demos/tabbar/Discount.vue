<template>
  <ion-page v-tabbar-item-index="1">
    <von-header theme="light">
        <span slot="title">折扣</span>
    </von-header>

    <ion-content class="padding-top">
      <p class="text-center">Discount</p>
      <ion-item v-for="(item, index) in items" :key="index">
        discount item
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script>
  export default {
    data() {
      return {
        items: []
      }
    },

    created() {
      for (let i = 0; i < 100; i++) {
        this.items.push(i)
      }
    }
  }
</script>
