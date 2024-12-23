<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
  <HeaderComponent />
  <RouterView> </RouterView>
  <FooterComp menu="#sectionMenu" events="#sectionMission" />
</template>
