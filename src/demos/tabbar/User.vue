<template>
  <ion-page>
    <von-header theme="light">
        <span slot="title">折扣</span>
    </von-header>
    <ion-content class="padding-top">
      <p class="text-center">User Info</p>
      <a class="button button-positive button-block button-clear" @click="$router.forward('/demo/pageFromTabbar')">去另一个页面</a>
    </ion-content>
  </ion-page>
</template>
