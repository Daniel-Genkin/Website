<script setup lang="ts">
import Pill from '@/components/elements/Pill.vue';

defineProps<{
  content: WorkExperience[]
}>();
</script>

<template>
  <div>
    <h1>Work Experience</h1>
    <div v-for="(item, index) in content" :key="index" class="rows ">
      <div class="cols content">
        <h2>{{ item.title }}</h2>
        <div class="rows">
          <p>{{ item.organization }}</p>
          <p>{{ item.startingDate }} - {{ item.endingDate }}</p>
        </div>
        <p>{{ item.description }}</p>
      </div>
      <pill class="pill">
        <img :src="item.logo" />
      </pill>
    </div>
  </div>
</template>

<style lag="scss" scoped>
.rows {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}

.pill {
  width: 50%;
  max-width: 250px;
  height: 400px;

  img {
    width: 100%;
  }
}

</style>