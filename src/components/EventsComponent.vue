<script setup lang="ts">
import EventItem from './EventItem.vue'
const data = [
  {
    image: '/src/images/cards.jpeg',
    name: 'Каждую среду играем в настольные игры',
    date: 'Начало — 19:00',
    child: true
  },
  {
    id: 1,
    image: '/src/images/music.jpeg',
    name: 'Вечер с живой музыкой',
    date: '4 апреля — 18:00',
    child: false
  },
  {
    id: 2,
    image: '/src/images/caffe.jpeg',
    name: 'Дегустационный вечер',
    date: '8 апреля 14:00—18:00',
    child: false
  },
  {
    id: 3,
    image: '/src/images/movie.jpeg',
    name: 'Киновечер',
    date: '18 апреля — 18:00',
    child: false
  },
  {
    id: 4,
    image: '/src/images/КАПИБАРА.jpeg',
    name: 'Мастер-класс: Рисуем капибар',
    date: '22 апреля — 15:00',
    child: true
  }
]
</script>

<template>
  <section class="events">
    <div class="events__main-cont">
      <h2 class="events__title">Мероприятия на апрель</h2>
      <p class="events__paragraph">
        Записываться не нужно, просто приходите за 10 минут до начала мероприятия
      </p>
      <div class="events__cont">
        <EventItem
          :image="data[0].image"
          :name="data[0].name"
          :date="data[0].date"
          :child="data[0].child"
          :small="false"
        />
        <div class="events__grid">
          <EventItem
            v-for="item in data.splice(1)"
            :image="item.image"
            :name="item.name"
            :date="item.date"
            :child="item.child"
            :small="true"
            :key="item.id"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.events {
  padding: 64px 0 64px 0;
  background-color: rgba(237, 229, 216, 1);
}
.events__main-cont {
  width: 75%;
  margin: 0 auto;
}
.events__cont {
  display: flex;
  gap: 34px;
  margin-top: 32px;
}
.events__grid {
  display: grid;
  grid-template-columns: repeat(2, 316px);
  grid-template-rows: repeat(2, 282px);
  column-gap: 31px;
  row-gap: 32px;
}
.events__title {
  font-family: Alegreya;
  font-size: 64px;
  font-weight: 400;
  line-height: 87px;
}
.events__paragraph {
  font-family: Lato;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
}
</style>
