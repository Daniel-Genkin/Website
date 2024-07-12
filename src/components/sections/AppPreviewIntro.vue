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
    <div id="root" class="rows">
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
                     :color="project.accentColor"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lag="scss" scoped>
.cardIcon {
  height: 45px;
}
</style>../elements/IconCard.vue