<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  size: String
})
</script>
<template>
  <div class="size__cont">
    <p class="size__text">{{ props.size }}</p>
  </div>
</template>
<style scoped>
.size__cont {
  width: 64px;
  height: 64px;
  border-radius: 10px;
  background-color: rgba(141, 147, 83, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.size__text {
  font-family: Lato;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  color: rgba(237, 229, 216, 1);
}
</style>
