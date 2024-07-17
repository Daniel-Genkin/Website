<script setup lang="ts">
import IconCard from "../elements/IconCard.vue";
import Pill from "../elements/Pill.vue";

defineProps<{
  project: Project
}>();

function goToPage(page: string) {
  window.open(page, '_blank')!.focus();
}
</script>

<template>
  <div>
    <div id="root" class="rows content">
      <Pill :color="project.accentColor">
        <img :src="project.projectLogo" />
      </Pill>
      <div class="cols">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <button @click="goToPage(project.projectButton.link)">{{ project.projectButton.caption }}</button>
        <div class="rows">
          <icon-card v-for="highlight in project.highlights" 
                     :caption="highlight.caption" 
                     :icon="highlight.icon" 
                     :color="project.accentColor"
                     class="cardIcon"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cardIcon {
  height: 200px;
  width: 300px;
}
</style>