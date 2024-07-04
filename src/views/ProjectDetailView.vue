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
        class="cols"
        style="margin: 0 64px;">
      <div class="rows">
        <straight-pill class="datePill" :color="project?.pageDetails.accentColor"/>
        <div class="cols">
          <h2 class="year">{{ date.year }}</h2>
          <ul>
            <li v-for="event in date.events">{{ event }}</li>
          </ul>
        </div>
      </div>
      <chevron v-if="index === (project?.pageDetails.history.length ?? 1) - 1" style="height: 45px; width: 45px;"></chevron>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 24" class="divider">
        <path d="M3.018 17.551a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6m0-8.4a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 1 1 0-5.6m0-8.401a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Z"/>
      </svg>
    </div>
    
    <awards :content="project?.pageDetails.awards ?? []" :color="project?.pageDetails.accentColor ?? ''"/>

    <h1>Techologies Used</h1>
    <div class="techGrid">
      <card 
        v-for="tech in project?.pageDetails.technologiesUsed" 
        :key="tech.technology"
        :caption="tech.technology"
        :center="true">
        {{tech.icon}}
      </card>
    </div>
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
}
.year {
  margin: 0;
  font-size: 3rem;
}
.cardIcon {
  height: 45px;
}
.techGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 10px;

  * {
    height: 350px;
    width: 350px;
  }
}

.datePill {
  margin: 8px;
}

.divider {
  height: 45px;
  width: 8px;
  margin-left: 12px;
  background-color: #464646;
  border-radius: 50px;
  padding: 6px;

  path {
    fill: #A3A3A3;
  }
}
</style>