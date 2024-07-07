<script setup lang="ts">
import AppPreviewBanner from "@/components/elements/AppPreviewBanner.vue";
import Card from '../elements/Card.vue';
import Icon from "../elements/Icon.vue";

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
      <app-preview-banner 
        :icon="project.projectLogo" 
        :color="project.accentColor" />
      <div class="cols">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <button @click="goToPage(project.projectButton.link)">{{ project.projectButton.caption }}</button>
        <div class="rows">
          <card v-for="highlight in project.highlights" :caption="highlight.caption">
            <icon :src="highlight.icon" class="cardIcon" :color="project.accentColor" />
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lag="scss" scoped>
.cardIcon {
  height: 45px;
}
.rows {
  display: flex;
  flex-direction: row;
}
.cols {
  display: flex;
  flex-direction: column;
}
</style>