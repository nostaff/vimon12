<template>
    <ion-page v-nav="{title: '走丢了', showBackButton: true}">

        <ion-navbar title="页面不存在"></ion-navbar>

        <ion-content class="notfound">
            <div class="error"></div>
            <div class="etext">页面不存在！</div>

        </ion-content>
    </ion-page>
</template>

<style lang="css" scoped>
   .error{
      width: 200px;
      height: 200px;
      margin: 120px auto 10px auto;
      background: url(../assets/images/error.png) no-repeat;
      background-size: 100%;
      background-position: -10px center;
   }
   .etext{
     text-align:center;
     color:#555;
   }
</style>
