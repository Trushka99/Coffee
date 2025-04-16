<script setup lang="ts">
import { defineProps } from 'vue'

interface PropsInterface {
  img: string
  active: Boolean
  onClick: (e: any) => void
  id: Number
}

const props = defineProps<PropsInterface>()
</script>
<template>
  <div @click="props.onClick" :class="{ active: props.active }" class="grid__item">
    <img class="grid__item-img" :id="String(props.id)" :src="props.img" />
  </div>
</template>
<style scoped>
.grid__item {
  border-radius: 10px;
  background-color: rgba(141, 147, 83, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.grid__item:hover {
  opacity: 0.5;
}
.grid__item-img {
  width: 100%;
  object-fit: contain;
}
.active {
  background-color: rgba(237, 229, 216, 1);
}
</style>
