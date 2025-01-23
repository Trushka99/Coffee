<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  menu: String,
  events: String
})
function scrollTo(view: any) {
  document.querySelector(view).scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="footer">
    <div>
      <img class="footer__logo" src="../images/Logo-header.png" />
      <p class="footer__text">Кофе с капи 2024</p>
    </div>
    <div class="footer__contacts">
      <ul class="footer__list">
        <li @click="scrollTo(menu)" class="footer__text">Меню</li>
        <li @click="scrollTo(events)" class="footer__text">Мероприятия</li>
        <li class="footer__text">Мерч</li>
        <li class="footer__text">О нас</li>
        <li class="footer__text">Контакты</li>
      </ul>
      <div>
        <ul class="footer__list">
          <li class="footer__text">Ежедневно с 10:00 до 22:00</li>
          <li class="footer__text">г. Москва, Никольская улица 8</li>
          <li class="footer__text">+7 999 553-54-94</li>
          <li class="footer__text">team@CapiCoffee.com</li>
        </ul>
        <div class="footer__icons">
          <img class="footer__icon" src="../images/TG_icon.svg" />
          <img class="footer__icon" src="../images/Gmail.svg" />
          <img class="footer__icon" src="../images/VK.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  background-color: rgba(141, 147, 83, 1);
  padding: 48px 26px 48px 38px;
  display: flex;
  gap: 55%;
}
.footer__list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.footer__logo {
  width: 84px;
  height: 84px;
  margin-bottom: 156px;
}
.footer__logo:hover {
  opacity: 0.5;
  cursor: pointer;
}

.footer__text {
  font-family: Lato;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: black;
  cursor: pointer;
}
.footer__contacts {
  display: flex;
  gap: 40%;
}
.footer__icons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.footer__icon:hover {
  border-radius: 50%;
  background-color: rgba(240, 147, 82, 1);
  cursor: pointer;
}
@media (max-width: 1280px) {
  .footer {
    gap: 25%;
  }
}
@media (max-width: 1024px) {
  .footer {
    gap: 6%;
  }
}
@media (max-width: 768px) {
  .footer__contacts {
    flex-direction: column;
  }
}
</style>
