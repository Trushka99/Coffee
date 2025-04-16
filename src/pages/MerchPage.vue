<script setup lang="ts">
import MerchIcon from '@/components/MerchIcon.vue'
import SizeIcon from '@/components/SizeIcon.vue'
import { ref } from 'vue'
interface DataInterface {
  id: number
  img: string
  name: string
  sizes?: string[]
  price: string
  active: boolean
}
const data: DataInterface[] = [
  {
    id: 1,
    img: '/Coffee/images/Черная_футболка_с_лого.png',
    name: 'Черная футболка с лого',
    sizes: ['M', 'S', 'L', 'XL', '2XL'],
    price: '1 390 ₽',
    active: true
  },
  {
    id: 2,
    img: '/Coffee/images/Белая_футболка.png',
    name: 'Белая футболка с капи',
    sizes: ['M', 'S', 'L', 'XL', '2XL'],
    price: '1 490 ₽',
    active: false
  },
  {
    id: 3,
    img: '/Coffee/images/Белая_футболка_с_лого.png',
    name: 'Белая футболка с лого',
    sizes: ['M', 'S', 'L', 'XL', '2XL'],
    price: '1 390 ₽',
    active: false
  },
  {
    id: 4,
    img: '/Coffee/images/Черная_футболка.png',
    name: 'Черная футболка с капи',
    sizes: ['M', 'S', 'L', 'XL', '2XL'],
    price: '1 490 ₽',
    active: false
  },
  {
    id: 5,
    img: '/Coffee/images/Шопер_белый.png',
    name: 'Белый шопер с капи',
    price: '1 990 ₽',
    active: false
  },
  {
    id: 6,
    img: '/Coffee/images/Шопер_черный.png',
    name: 'Черный шопер с капи',
    price: '1 990 ₽',
    active: false
  }
]
let found = ref(data[0])
const changeDirectionPrev = () => {
  let newFound = data.find((element) => element.id === found.value.id - 1)
  found.value.active = false
  if (newFound) {
    newFound.active = true
    found.value = newFound
  }
}
const changeDirectionNext = () => {
  let newFound = data.find((element) => element.id === found.value.id + 1)
  found.value.active = false
  if (newFound) {
    newFound.active = true
    found.value = newFound
  }
}
const change = (e: any) => {
  let newFound = data.find((element) => element.id === Number(e.target.id))
  found.value.active = false
  if (newFound) {
    newFound.active = true
    found.value = newFound
  }
}
</script>
<template>
  <div class="merch-page">
    <img class="merch-page__image" :src="found.img" />
    <div class="merch-page__right">
      <h1 class="merch-page-title">{{ found.name }}</h1>
      <h2 class="merch-page-large-text">{{ found.price }}</h2>
      <div class="merch-sizes" v-if="found.sizes">
        <SizeIcon
          v-for="item in found.sizes"
          :size="item"
          :key="found.sizes.indexOf(item)"
        ></SizeIcon>
      </div>
      <p class="merch-page-small-text">Приобрести можно в любой кофейни сети.</p>
      <p class="merch-page-small-text">
        Для уточнения наличия размеров и предзаказа звоните по номеру телефона:
      </p>
      <p class="merch-page-medium-text">+7 999 553-54-94</p>
      <div class="merch-page__grid">
        <MerchIcon
          v-for="item in data"
          :img="item.img"
          :key="item.id"
          :active="item.active"
          :onClick="change"
          :id="item.id"
        ></MerchIcon>
        <div v-on:click="changeDirectionPrev()" class="merch__arrow">
          <img src="/images/Vector_arrow.svg" />
        </div>
        <div v-on:click="changeDirectionNext()" class="merch__arrow">
          <img src="/images/Vector_arrow-right.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.merch-page {
  background-color: rgba(237, 229, 216, 1);
  display: flex;
  padding: 64px 0 64px 0;
  justify-content: center;
  gap: 10%;
}
.merch-page-title {
  font-family: Lato;
  font-size: 48px;
  font-weight: 400;
  line-height: 58px;
  color: black;
  margin-bottom: 8px;
}
.merch-page-large-text {
  font-family: Lato;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  color: black;
  margin-bottom: 32px;
}
.merch-sizes {
  display: flex;
  gap: 3%;
  margin-bottom: 32px;
}
.merch-page__right {
  width: 40%;
}
.merch-page-small-text {
  font-family: Lato;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: black;
  margin-bottom: 8px;
}
.merch-page-medium-text {
  font-family: Lato;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  color: black;
  margin-bottom: 169px;
}
.merch-page__grid {
  display: grid;
  grid-template-rows: repeat(2, 40%);
  grid-template-columns: repeat(4, 20%);
  gap: 24px;
  width: 60%;
}
.merch-page__grid-item {
  width: 92px;
  height: 92px;
  border-radius: 10px;
  background-color: rgba(141, 147, 83, 1);
}
.merch__arrow {
  display: flex;
  align-items: center;
}
.merch-page__image {
  max-width: 500px;
  max-height: 745px;
  width: 100%;
}
@media (max-width: 1280px) {
  .merch-page__grid {
    width: 90%;
  }
}
@media (max-width: 1024px) {
  .merch-page {
    flex-direction: column;
    align-items: center;
  }
  .merch-page__right {
    margin-top: 50px;
    width: 70%;
  }
  .merch-page-medium-text {
    margin-bottom: 60px;
  }
  .merch-page__grid {
    grid-template-rows: repeat(3, 50%);
    grid-template-columns: repeat(3, 30%);
    gap: 24px;
    width: 100%;
  }
  .merch__arrow {
    display: none;
  }
}
</style>
