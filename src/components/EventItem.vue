<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  image: String,
  name: String,
  date: String,
  child: Boolean,
  small: Boolean
})
</script>

<template>
  <article :class="{ event__item_small: small }" class="event__item">
    <div class="event__overlay"></div>
    <img class="event__image" :src="props.image" />
    <div v-if="props.child" class="event__child">
      <img
        class="event__child-icon"
        src="../images/user-single-neutral-male--close-geometric-human-person-single-up-user-male.svg"
      />
      <p class="event__child-text">Можно с детьми</p>
    </div>
    <div class="event__desciption-cont">
      <p class="event__description">{{ props.name }}</p>
      <p class="event__date">{{ props.date }}</p>
    </div>
  </article>
</template>
<style scoped>
.event__item {
  position: relative;
  width: 663px;
  height: 596px;
  gap: 0px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.event__item_small {
  position: relative;
  width: 100%;
  height: 100%;
  gap: 0px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.event__overlay {
  background-color: black;
  width: 663px;
  height: 596px;
  position: absolute;
  opacity: 0.5;
  z-index: 1;
  border-radius: 40px;
}
.event__desciption-cont {
  text-align: center;
}
.event__image {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 40px;
}
.event__description {
  font-family: Lato;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  color: rgba(237, 229, 216, 1);
  position: relative;
  z-index: 2;
  margin-bottom: 8px;
}
.event__date {
  font-family: Lato;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(237, 229, 216, 1);
  position: relative;
  z-index: 2;
}
.event__child {
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 2;
  display: flex;
  align-items: center;
}
.event__child-icon {
  width: 32px;
  height: 32px;
  color: rgba(237, 229, 216, 1);
  z-index: 2;
  margin-right: 8px;
}
.event__child-text {
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: rgba(237, 229, 216, 1);
  z-index: 2;
  display: block;
}
</style>
