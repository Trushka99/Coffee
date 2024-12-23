<script setup lang="ts">
import data from '../utils/data.js'
import MenuItem from '@/components/MenuItem.vue'

const coffeedata = data.filter((item: any) => item.type === 'cofee')
const nocofeedata = data.filter((item: any) => item.type === 'notcofee')
const desertdata = data.filter((item: any) => item.type === 'desert')
</script>
<template>
  <div class="main-menu">
    <h1 class="main-menu__title">Меню</h1>
    <div class="main-menu__category-cont"><h2 class="main-menu__category">Кофе</h2></div>
    <div class="main-menu__grid">
      <MenuItem
        v-for="item in coffeedata"
        :key="item.id"
        :img="item.img"
        :name="item.name"
        :quantity="item.quantity"
        :addon="item.addon"
        :price="item.price"
        :id="item.id"
      ></MenuItem>
    </div>
    <div class="main-menu__category-cont"><h2 class="main-menu__category">Не кофе</h2></div>
    <div class="main-menu__grid">
      <MenuItem
        v-for="item in nocofeedata"
        :key="item.id"
        :img="item.img"
        :name="item.name"
        :quantity="item.quantity"
        :addon="item.addon"
        :price="item.price"
        :id="item.id"
      ></MenuItem>
    </div>
    <div class="main-menu__category-cont"><h2 class="main-menu__category">Десерт</h2></div>
    <div class="main-menu__grid">
      <MenuItem
        v-for="item in desertdata"
        :key="item.id"
        :img="item.img"
        :name="item.name"
        :quantity="item.quantity"
        :addon="item.addon"
        :price="item.price"
        :id="item.id"
      ></MenuItem>
    </div>
  </div>
</template>

<style scoped>
.main-menu {
  background-color: rgba(141, 147, 83, 1);
  padding: 64px 0 64px 0;
}
.main-menu__title {
  margin-left: 40px;
  font-family: 'Alegreya';
  font-size: 64px;
  font-weight: 400;
  line-height: 87px;
  color: rgba(30, 26, 26, 1);
}
.main-menu__category-cont {
  list-style: none;
  display: flex;
  width: 637px;
  padding: 0px 40px 0px 40px;
  border-radius: 0 40px 40px 0;
  background: rgba(237, 229, 216, 1);
  align-items: center;
  margin-top: 100px;
}
.main-menu__category {
  font-family: 'Alegreya';
  font-size: 48px;
  font-weight: 400;
  line-height: 65px;
  color: rgba(30, 26, 26, 1);
  cursor: pointer;
}
.main-menu__grid {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 32px;
  grid-template-rows: auto;
  width: 75%;
  margin: 0 auto;
}
</style>
