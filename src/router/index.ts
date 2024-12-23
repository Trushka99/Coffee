import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import MerchPage from '@/pages/MerchPage.vue'
import MenuPage from '@/pages/MenuPage.vue'
import BasketPage from '@/pages/BasketPage.vue'
const router = createRouter({
  routes: [
    {
      path: '/',
      component: HomePage,
      props: { menu: 'sectionMenu', events: 'sectionMission' }
    },
    {
      path: '/merchendize',
      component: MerchPage
    },
    {
      path: '/menu',
      component: MenuPage
    },
    {
      path: '/basket',
      component: BasketPage
    }
  ],
  history: createWebHistory()
})

export default router
