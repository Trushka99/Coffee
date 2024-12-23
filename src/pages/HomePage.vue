<script setup lang="ts">
import TitleComp from '@/components/TitleComp.vue'
import MainMenu from '@/components/MainMenu.vue'
import EventsComponent from '@/components/EventsComponent.vue'
import MissionComp from '@/components/MissionComp.vue'
import { defineProps } from 'vue'
import { watchEffect, ref } from 'vue'
import { useBasket } from '@/stores/basket.js'
const basket = useBasket()
const basketData = ref()
watchEffect(() => (basketData.value = basket.getBasket))
defineProps({
  menu: String,
  events: String
})
</script>

<template>
  <TitleComp />
  <MainMenu :id="menu" />
  <EventsComponent :id="events" />
  <MissionComp />
</template>
