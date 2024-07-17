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
    <div v-for="item in content" class="content">
      <div class="rows">
        <pill :color="color" class="pills" />
        <div class="cols">
          <h2 :style="{color: color}">{{ item.organization }}</h2>
          <h3>{{ item.title }}</h3>
        </div>
        <h1 class="date">{{ item.year }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pills {
  height: 100%;
  width: 45px;
}

</style>