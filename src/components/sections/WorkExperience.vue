<script setup lang="ts">
import Pill from '@/components/elements/Pill.vue';

defineProps<{
  content: WorkExperience[]
}>();
</script>

<template>
  <div>
    <h1>Work Experience</h1>
    <div v-for="(item, index) in content" :key="index" class="rows content">
      <div class="cols" style="width: 100%">
        <h2 style="margin-bottom: 0">{{ item.title }}</h2>
        <div class="cols">
          <p style="margin: 0">{{ item.organization }}</p>
          <p style="margin: 0">{{ item.startingDate }} - {{ item.endingDate }}</p>
        </div>
        <p>{{ item.description }}</p>
      </div>
      <pill class="pills">
        <div class="iconContainer">
          <img :src="item.logo" />
        </div>
      </pill>
    </div>
  </div>
</template>

<style scoped>
.rows {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.iconContainer {
  background-color: white;
  border-radius: 35px;
  width: 80%;
  left: 10%;
  position: absolute;
  bottom: -10px;
  padding-top: 10%;

  img {
    width: 80%;
    margin-left: 10%;
  }
}

.pills {
  width: 300px;
  height: 200px;
}

</style>