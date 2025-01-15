<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { ref, watchEffect } from 'vue'
import data from '../utils/data.js'

let items = ref()
const choise = ref('Кофе')
const changeChoise = (e: any) => {
  choise.value = e.target.textContent
}
watchEffect(() => {
  if (choise.value === 'Кофе') {
    items.value = data.filter((item: any) => item.type === 'cofee')
  }
  if (choise.value === 'Не кофе') {
    items.value = data.filter((item: any) => item.type === 'notcofee')
  }
  if (choise.value === 'Десерт') {
    items.value = data.filter((item: any) => item.type === 'desert')
  }
})
</script>

<template>
  <div class="menu__page">
    <div class="menu__container">
      <h1 class="menu__title">Меню</h1>
      <ul class="menu__choise">
        <div v-if="choise === 'Кофе'" class="menu__circle"></div>
        <li v-on:click="changeChoise" ref="coffee" class="menu__choise-item">Кофе</li>
        <div v-if="choise === 'Не кофе'" class="menu__circle"></div>
        <li v-on:click="changeChoise" ref="notCoffee" class="menu__choise-item">Не кофе</li>
        <div v-if="choise === 'Десерт'" class="menu__circle"></div>
        <li v-on:click="changeChoise" ref="deserts" class="menu__choise-item">Десерт</li>
      </ul>
    </div>
    <div class="menu__grid">
      <MenuItem
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :img="item.img"
        :name="item.name"
        :quantity="item.quantity"
        :addon="item.addon"
        :addon2="item.addon2"
        :price="item.price"
        :amount="item.amount"
      ></MenuItem>
    </div>
    <div class="menu__reserve">
      <img class="menu__kapibard" src="../images/kapibara.png" />
      <div class="menu__reserve-text">
        <h2 class="menu__big-text">
          Вы всегда можете забронировать столик и сделать заказ заранее по телефону, в нашем
          телеграмм канале или в группе ВК
        </h2>
        <p class="menu__small-text">
          График работы с 10:00 до 22:00 ежедневно. Бронь бесплатная. Перестаёт действовать при
          опоздании более чем на 20 минут
        </p>

        <div class="menu__reserve-contacts">
          <p class="menu__big-text">
            <a class="menu__link" href="tel:+7 999 553-54-94">+7 999 553-54-94</a>
          </p>
          <div class="menu__reserve-icons">
            <img src="../images/TG_icon.svg" /><img src="../images/VK.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.menu__link {
  text-decoration: none;
  color: black;
}
.menu__page {
  background-color: rgba(141, 147, 83, 1);
  padding: 64px 0 64px 0;
}
.menu__grid {
  display: grid;
  grid-template-columns: repeat(2, 45%);
  column-gap: 32px;
  grid-template-rows: auto;
  width: 75%;
  margin: 0 auto;
}
.menu__title {
  margin-left: 40px;
  font-family: 'Alegreya';
  font-size: 64px;
  font-weight: 400;
  line-height: 87px;
  color: rgba(30, 26, 26, 1);
}
.menu__container {
  display: flex;
  justify-content: space-between;
}
.menu__choise {
  list-style: none;
  display: flex;
  width: 637px;
  padding: 0px 40px 0px 40px;
  border-radius: 40px 0px 0px 40px;
  background: rgba(237, 229, 216, 1);
  align-items: center;
}
.menu__choise-item {
  font-family: 'Alegreya';
  margin-right: 40px;
  font-size: 48px;
  font-weight: 400;
  line-height: 65px;
  color: rgba(30, 26, 26, 1);
  cursor: pointer;
}
.menu__choise-item:last-child {
  margin-right: 0;
}
.menu__circle {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  background: rgba(221, 159, 114, 1);
  border-radius: 50%;
}
.menu__reserve {
  width: 75%;
  height: 350px;
  background: rgba(237, 229, 216, 1);
  border-radius: 40px;
  display: flex;
  margin: 0 auto;
  margin-top: 56px;
}

.menu__kapibard {
  width: 50%;
  border-radius: 40px 0 0 40px;
  object-fit: cover;
}
.menu__big-text {
  font-family: Lato;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  color: black;
  width: 90%;
}
.menu__small-text {
  font-family: Lato;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: black;
  width: 90%;
}
.menu__reserve-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0 28px 0;
}
.menu__reserve-contacts {
  display: flex;
  width: 90%;
  margin-top: 91px;
}
.menu__reserve-icons {
  display: flex;
  width: 90%;
  justify-content: end;
  gap: 32px;
}
@media (max-width: 1280px) {
  .menu__reserve {
    width: 80%;
  }
  .menu__big-text {
    font-size: 20px;
    line-height: 25px;
  }
  .menu__small-text {
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
