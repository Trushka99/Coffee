<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComp from './components/FooterComp.vue'
import BasketComponent from './components/BasketComponent.vue'
</script>

<template>
  <HeaderComponent />
  <RouterView> </RouterView>
  <BasketComponent />
  <FooterComp menu="#sectionMenu" events="#sectionMission" />
</template>
