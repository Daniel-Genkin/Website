<script setup lang="ts">
import AppPreviewBanner from "@/components/elements/AppPreviewBanner.vue";
import Card from "@/components/elements/Card.vue";
import Chevron from "@/components/elements/Chevron.vue";
import StraightPill from "@/components/elements/StraightPill.vue";
import Awards from '@/components/sections/Awards.vue';
import { ALL_PROJECTS } from '@/data/data';
import router from '@/router';
import { onMounted, ref } from 'vue';

var project = ref<Project>();
var error = ref(false);

onMounted(() => {
  const targetProject = ALL_PROJECTS.find(x => x.pageLink === router.currentRoute.value.path);
  if (!targetProject) {
    error.value = true;
  } else {
    project.value = targetProject;
  }
});

function goToPage(page: string): void {
  window.open(page, '_blank');
}
</script>

<template>
  <main>
    <div v-if="error || project == null">An Error has occured while loading this page. Please try another one.</div>
    <div v-else class="rows">
      <app-preview-banner 
        :icon="project.pageDetails.projectLogo" 
        :color="project.pageDetails.accentColor" />
      <div class="cols">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <button @click="goToPage(project.pageDetails.projectButton.link)">{{ project.pageDetails.projectButton.caption }}</button>
        <div class="rows">
          <card v-for="highlight in project.highlights" :caption="highlight.caption">
            <img :src="highlight.icon" class="cardIcon" />
          </card>
        </div>
      </div>
    </div>
    <h1>Screenshots</h1>
    TODO
    <h1>History</h1>
    <div v-for="(date, index) in project?.pageDetails.history" 
        :key="date.year"
        class="cols">
      <div class="rows">
        <straight-pill class="datePill" :color="project?.pageDetails.accentColor"/>
        <div class="rows">
          <h3>{{ date.year }}</h3>
          <ul>
            <li v-for="event in date.events">{{ event }}</li>
          </ul>
        </div>
      </div>
      <chevron v-if="index === project?.pageDetails.history.length ?? 1 - 1" style="height: 45px; width: 45px;"></chevron>
      <div v-else>...</div>
    </div>
    <awards :content="project?.pageDetails.awards ?? []" :color="project?.pageDetails.accentColor ?? ''"/>
  </main>
</template>

<style lag="scss" scoped>
.rows {
  display: flex;
  flex-direction: row;
}
.cols {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 64px;
}

.cardIcon {
  height: 45px;
}

.datePill {
  margin: 8px;
}
</style>