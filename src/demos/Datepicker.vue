<template>
  <ion-page v-nav="{title: '日期选择器', showBackButton: true}">
    <ion-content class="padding-top">

      <datepicker v-model="birthday" label="生日" date-format="yyyy-mm-dd"></datepicker>

      <div class="padding">
        value: {{ birthday }}
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
  export default {
    data() {
      return {
        birthday: '2016-12-01'
      }
    }
  }
</script>
