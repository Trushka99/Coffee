<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useBasket } from '@/stores/basket'
import { ref } from 'vue'
import { watchEffect } from 'vue'
const basket = useBasket()
const data = ref()

watchEffect(() => (data.value = basket.getBasket))
</script>
<template>
  <div class="link">
    <RouterLink to="/basket">
      <div v-if="data.length != 0" class="basket">
        <img class="basket__image" src="../images/shopping-cart.png" />
        <p class="basket__text">{{ data.length }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.link {
  position: absolute;
  height: inherit;
  top: 5%;
  right: 5%;
}
.basket {
  background-color: rgba(221, 159, 114, 1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding: 5px 55px 5px 54px;
}

.basket__image {
  width: 40px;
  height: 40px;
}
.basket__text {
  position: absolute;
  bottom: 5px;
  right: 25px;
  font-family: Lato;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
}
</style>
