<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <article class="mission">
    <div class="mission__cont">
      <p class="vertical__align">Наша миссия</p>
      <h2 class="mission__title">
        Создать <span class="mission__color">место</span>, где вы можете
        <span class="mission__color">попить хороший кофе</span>
        и провести время, <span class="mission__color">найти</span> новых
        <span class="mission__color">друзей</span>, и
        <span class="mission__color">узнать новое</span> про прекрасных зверьков —
        <span class="mission__color">капибар</span>
      </h2>
      <div class="mission-button__cont">
        <p class="mission__text">5% со всех покупок отправляется в фонды защиты капибар</p>
        <RouterLink target="_blank" to="/merchendize">
          <button class="mission__button">Выбрать мерч</button>
        </RouterLink>
      </div>
    </div>
  </article>
</template>
<style scoped>
.mission {
  background-color: rgba(237, 229, 216, 1);
  padding: 64px 0 64px 0;
}
.mission__cont {
  width: 77%;
  display: flex;
  margin: 0 auto;
}

.mission__text {
  font-family: Lato;
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  margin-bottom: 16px;
}
.vertical__align {
  font-family: Alegreya;
  font-size: 32px;
  font-weight: 400;
  line-height: 44px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-align: start;
  height: max-content;
  margin-right: 72px;
}
.mission__color {
  color: rgba(221, 159, 114, 1);
}
.mission__title {
  font-family: Lato;
  font-size: 96px;
  font-weight: 400;
  line-height: 115px;
  width: 780px;
}
.mission__button {
  width: 432px;
  border-radius: 20px;
  background-color: rgba(221, 159, 114, 1);
  font-family: Lato;
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  padding: 13px 0 13px 0;
}
.mission__button:hover {
  background-color: rgba(240, 147, 82, 1);
  opacity: 0.5;
  cursor: pointer;
}
.mission-button__cont {
  align-self: self-end;
  max-width: 432px;
  margin-left: 32px;
}
</style>
