<script setup lang="ts">
import { useBasket } from '@/stores/basket'
import BasketItem from '@/components/BasketItem.vue'
import { watchEffect, ref } from 'vue'
const basket = useBasket()
const data = ref()
watchEffect(() => (data.value = basket.getBasket))
</script>

<template>
  <div class="basket__page">
    <div class="basket__items">
      <BasketItem
        v-for="item in data"
        :key="item.id"
        :name="item.name"
        :price="item.price"
        :img="item.img"
        :amount="item.amount"
        :id="item.id"
        :addon="item.addon"
        :quantity="item.quantity"
      />
    </div>
    <button class="basket__button">Оформить Заказ</button>
  </div>
</template>
<style scoped>
.basket__page {
  background-color: rgba(141, 147, 83, 1);
  padding: 80px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
.basket__items {
  width: 80%;
  background-color: rgba(237, 229, 216, 1);
  border-radius: 40px 40px 40px 40px;
  margin: 0 auto;
  padding: 40px 0 40px 0;
}
.basket__button {
  width: 341px;
  height: 64px;
  border-radius: 20px;
  background: rgba(221, 159, 114, 1);
  font-family: Lato;
  font-size: 24px;
  font-weight: 400;
  line-height: 28.8px;
}
</style>
