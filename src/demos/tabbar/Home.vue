<template>
  <ion-page v-tabbar-item-index="0">
    <von-header theme="light">
      <span slot="title">首页</span>
    </von-header>

    <div class="page-content padding-top">
      <p class="text-center">Home</p>
      <div style="text-align: center; padding: 100px 40px">
        <div class="button button-assertive" @click="back()">
          返回组件列表页
        </div>
      </div>
    </div>
  </ion-page>
</template>
<script>
  export default {
    methods: {
      back() {
        $router.back({ path: '/demo' })
      }
    }
  }
</script>
