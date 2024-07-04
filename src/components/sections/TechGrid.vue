<script setup lang="ts">
import Card from '../elements/Card.vue';

defineProps<{
  project: Project
}>();

</script>

<template>
  <div>
    <h1 id="technologiesUsed">Techologies Used</h1>
    <div class="techGrid">
      <card 
        v-for="tech in project?.pageSections.technologiesUsed" 
        :key="tech.technology"
        :caption="tech.technology"
        :center="true">
        {{tech.icon}}
      </card>
    </div>
  </div>
</template>

<style lag="scss" scoped>
.techGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 10px;

  * {
    height: 350px;
    width: 350px;
  }
}
</style>