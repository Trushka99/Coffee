<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <header class="header">
    <div class="header__right">
      <RouterLink class="header__link" to="/"
        ><img alt="Site logo" class="header__logo" src="../images/Logo-header.png"
      /></RouterLink>
      <nav class="header__nav">
        <ul class="header__list">
          <RouterLink class="header__link" to="/menu"
            ><li class="header__text">Меню</li></RouterLink
          >
          <li class="header__text">Мероприятия</li>
          <RouterLink class="header__link" to="/merchendize"
            ><li class="header__text">Мерч</li></RouterLink
          >
          <li class="header__text">О нас</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: rgba(237, 229, 216, 1);
  padding: 8px 40px 8px 40px;
  margin: 0 auto;
}

.header__right {
  display: flex;
  align-items: center;
}
.header__logo {
  width: 80px;
  height: 80px;
}
.header__logo:hover {
  opacity: 0.5;
  cursor: pointer;
}

.header__nav {
  width: 100%;
}
.header__list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 35%;
}
.header__button-container {
  display: flex;
  gap: 32px;
}

.header__text {
  font-family: Lato;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: rgba(30, 26, 26, 1);
}
.header__text:hover {
  opacity: 0.5;
  cursor: pointer;
}
.header__link {
  text-decoration: none;
}
.header__link:visited {
  color: rgba(30, 26, 26, 1);
}
@media (max-width: 1280px) {
  .header__list {
    width: 50%;
  }
}
@media (max-width: 1024px) {
  .header__list {
    width: 60%;
  }
}
@media (max-width: 768px) {
  .header__list {
    width: 90%;
  }
}
@media (max-width: 600px) {
  .header__list {
    flex-direction: column;
    justify-self: end;
  }
  .header__text {
    text-align: right;
  }
}
</style>
