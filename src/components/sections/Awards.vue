<script setup lang="ts">
import Pill from '../elements/Pill.vue';

defineProps<{
  content: AwardEntry[],
  color: string
}>();
</script>

<template>
  <div>
    <h1>Awards</h1>
    <div v-for="item in content" style="margin-bottom: 25px;">
      <div class="rows" style="justify-content: center;">
        <pill :color="color" class="pills" :half-height="false"/>
        <div class="cols" style="width: 100%;">
          <h2 :style="{color: color, margin: 0}">{{ item.title }}</h2>
          <h3>{{ item.organization }}</h3>
        </div>
        <h1 class="date">{{ item.year }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pills {
  width: 40px;
  margin-right: 25px;
}

</style>