<script setup lang="ts">
import { defineProps } from 'vue'
import data from '@/utils/data'
import { useBasket } from '@/stores/basket'
const basket = useBasket()
interface PropsInterface {
  img: string
  name: string
  quantity: string
  addon?: string[]
  price: number
  amount?: number
  id: number
}
const props = defineProps<PropsInterface>()
const item = data.find((el) => el.id === props.id)
let totalPrice = props.price

item?.addon?.map((elem) => {
  if (props.addon?.find((el) => el === elem.name)) {
    totalPrice = totalPrice + elem.price
  }
  console.log('такого дополнения нет')
})
const deleteFromBasket = () => {
  basket.deleteFromBasket(props)
}
</script>

<template>
  <div class="basket-item">
    <img class="basket-item__img" :src="props.img" />
    <p class="basket__text">{{ props.name }}</p>
    <p class="basket__text">{{ props.amount }}</p>
    <div class="text_absolute">
      <p class="basket__text" v-for="item in props.addon" :key="props.addon?.indexOf(item)">
        + {{ item }}
      </p>
    </div>
    <p class="basket__text">{{ totalPrice }} ₽</p>
    <button :onclick="deleteFromBasket" class="basket__item-button">-</button>
  </div>
</template>
<style scoped>
.basket-item {
  display: flex;
  padding: 20px 40px 20px 20px;
  border-bottom: 1px black solid;
  justify-content: space-between;
  max-height: 200px;
  max-width: 90%;
  position: relative;
}
.text_absolute {
  position: absolute;
  left: 45%;
}
.basket-item:last-child {
  border-bottom: none;
}
.basket__item-button {
  min-width: 5%;
  border-radius: 20px;
  background: rgba(221, 159, 114, 1);
  font-family: Lato;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
}

.basket-item__img {
  object-fit: contain;
  max-width: 201px;
}
.basket__text {
  min-width: 100px;
  font-family: Lato;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  max-width: 180px;
}
</style>
