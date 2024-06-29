<script setup lang="ts">
import LeftPill from '@/components/elements/LeftPill.vue';

defineProps<{
  content: WorkExperience[]
}>();
</script>

<template>
  <div>
    <div v-for="(item, index) in content" :key="index" class="rows">
      <div class="cols">
        <h2>{{ item.title }}</h2>
        <div class="rows">
          <p>{{ item.organization }}</p>
          <p>{{ item.startingDate }} - {{ item.endingDate }}</p>
        </div>
        <p>{{ item.description }}</p>
      </div>
      <left-pill class="pill" :image-src="item.logo" :include-background="true"/>
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

.pill {
  width: 50%;
}

</style>