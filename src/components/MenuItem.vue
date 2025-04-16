<script setup lang="ts">
import { defineProps, watchEffect } from 'vue'
import { ref } from 'vue'
import { useBasket } from '@/stores/basket'
const basket = useBasket()
const bought = ref()
const modalActive = ref(false)
watchEffect(() => {
  bought.value = basket.getBasket
})
export interface PropsInterface {
  img: string
  name: string
  quantity: string
  addon?: { name: string; price: number }[]
  price: number
  id: number
}
const props = defineProps<PropsInterface>()

// let count = 0
// const newId = () => {
//   return ++count
// }

const addons = (e: any) => {
  let text = e.target.textContent
  text = text.slice(2, text.split('').length - 6)

  if (e.target.previousElementSibling.checked === false) {
    basket.addAddons(props, text)
    console.log(basket.getBasket)
  } else {
    basket.deleteAddons(props, text)
    console.log(basket.getBasket)
  }
}
const addToBasket = (data: PropsInterface) => {
  basket.addToBasket({ ...data, addon: [] })
  modalActive.value = true
}
</script>

<template>
  <article class="menu__item">
    <div class="menu__img-cont">
      <img class="menu__img" :src="props.img" />
    </div>
    <div class="menu__info">
      <div class="menu__price">
        <p class="menu__text">{{ props.name }}</p>
        <p class="menu__text menu__text_small">{{ props.quantity }}</p>
      </div>
      <p class="menu__text menu__text_bold">{{ props.price }} ₽</p>
    </div>
    <button v-if="props.addon" @click="addToBasket(props)" class="menu__absolute menu__item-button">
      Оформить Заказ
    </button>
    <button
      v-else
      @click="
        () => {
          basket.addToBasket({ ...props, addon: [] })
        }
      "
      class="menu__absolute menu__item-button"
    >
      Добавить В Корзину
    </button>
    <Teleport to="body">
      <div v-on:click="modalActive = false" v-if="modalActive" class="modal__overlay"></div>
      <div v-if="modalActive" class="modal">
        <div class="modal__flex">
          <img class="modal__img" :src="props.img" />
          <div class="menu__addon-cont">
            <div v-for="item in props.addon" :key="props.addon?.indexOf(item)">
              <input type="checkbox" :id="item.name + props.name" />
              <label
                :onclick="addons"
                :for="item.name + props.name"
                class="menu__text menu__text_small"
                :value="item.name"
                >+ {{ item.name }} {{ item.price }} ₽
              </label>
            </div>
          </div>
        </div>
        <p class="menu__text">{{ props.name }}</p>
        <div class="modal__button-cont">
          <button @click="modalActive = false" class="menu__item-button">Добавить В Корзину</button>
        </div>
      </div>
    </Teleport>
  </article>
</template>
<style scoped>
.menu__img-cont {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.modal {
  position: fixed;
  z-index: 2;
  top: 20%;
  left: 30%;
  width: 40%;
  border-radius: 40px;
  background-color: rgba(237, 229, 216, 1);
  padding: 20px 20px 20px 20px;
}
.modal__flex {
  display: flex;
  gap: 20px;
}
.modal__img {
  border: 1px solid black;
}
.modal__button-cont {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}
.modal__overlay {
  z-index: 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}
.menu__item {
  margin-top: 198px;
  width: 100%;
  height: 350px;
  border-radius: 40px;
  border: none;
  position: relative;
  background-color: rgba(237, 229, 216, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu__price {
  display: flex;
  flex-direction: column;
}
.menu__addon-cont {
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
}
.menu__info {
  display: flex;
  gap: 20%;
  justify-content: space-between;
  width: 90%;
}
.menu__img {
  margin: -150px 0 50px 0;
  object-fit: cover;
  max-width: 100%;
}
.menu__absolute {
  position: absolute;
  width: 70%;
  left: 20%;
  bottom: -20px;
  display: flex;
  justify-content: center;
  gap: 32px;
}
.menu__item-button {
  min-width: 20%;
  border-radius: 20px;
  background: rgba(221, 159, 114, 1);
  font-family: Lato;
  font-size: 24px;
  font-weight: 400;
  line-height: 28.8px;
  padding: 20px 20px 20px 20px;
}
.menu__item-button:hover {
  background-color: rgba(240, 147, 82, 1);
  cursor: pointer;
}
.menu__text {
  font-family: Lato;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  color: rgb(44, 62, 80);
}
.menu__text_small {
  font-size: 20px;
  line-height: 24px;
}
.menu__text_bold {
  font-weight: 700;
}
</style>
