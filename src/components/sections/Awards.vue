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
      <div class="rows">
        <pill :color="color" class="verticalPill" :half-height="false" :has-bottom-decor="false"/>
        <div class="cols fullWidth">
          <h2 :style="{color: color, margin: 0}">{{ item.title }}</h2>
          <h3>{{ item.organization }}</h3>
        </div>
        <h1 class="date">{{ item.year }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>