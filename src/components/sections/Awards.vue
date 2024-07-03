<script setup lang="ts">
import Card from '../elements/Card.vue';

defineProps<{
  content: Award[],
  color: string
}>();
</script>

<template>
  <div>
    <h1>Awards</h1>
    <div v-for="item in content">
      <div class="cols card">
        <card :caption="item.organization" :pillColor="color">
          <h2 :style="{color: color}">{{ item.title }}</h2>
        </card>
        <h1 class="date">{{ item.year }}</h1>
      </div>
    </div>
  </div>
</template>

<style lag="scss" scoped>
.rows {
  display: flex;
  flex-direction: row;
}
.cols {
  display: flex;
  flex-direction: column;
}

.card {
  width: 350px;
  position: relative;
}

.innerCard {
  padding-right: 56px;
}

.date {
  position: absolute;
  right: -150px;
  bottom: 0;
  color: rgb(225, 225, 225);
}

</style>