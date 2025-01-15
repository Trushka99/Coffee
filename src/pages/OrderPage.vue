<script setup lang="ts">
import { ref } from 'vue'
const active = ref(false)
const getRandomInt = (min: number, max: number) => {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

setTimeout(function () {
  active.value = true
}, 1000)
</script>
<template>
  <div class="order__cont">
    <h1 class="order__title" v-if="active">D {{ getRandomInt(2000, 10000) }}</h1>
    <h1 class="order__title" v-else>Loading....</h1>
    <p class="order__text">Спасибо за заказ, наши капибары скоро его принесут</p>
  </div>
</template>
<style scoped>
.order__cont {
  height: 500px;
  width: 100%;
  background-color: rgba(237, 229, 216, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.order__title {
  font-family: Lato;
  font-size: 96px;
  font-weight: 700;
  line-height: 115px;
}
.order__text {
  font-family: Lato;
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  margin-bottom: 16px;
}
</style>
