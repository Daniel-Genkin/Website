<script setup lang="ts">
import AppPreviewIntro from "@/components/sections/AppPreviewIntro.vue";
import Awards from '@/components/sections/Awards.vue';
import ProjectHistory from "@/components/sections/ProjectHistory.vue";
import TechGrid from '@/components/sections/TechGrid.vue';
import { ALL_PROJECTS } from '@/data/data';
import router from '@/router';
import { onMounted, ref } from 'vue';

const emits = defineEmits({
  onLoaded(payload: OnLoadData) { return true }
});

var project = ref<Project>();
var error = ref(false);

// Convert the non empty sections of the project detail page to a list of MenuItems
function parseMenuItems(project: Project): MenuItem[] {
  return Object.entries(project.pageSections).reduce((accumulator, currentItem) => {
    if (currentItem[1].length > 0) {
      const titleCaseButFirstLetter = currentItem[0].replace(/([A-Z])/g, " $1");
      const titleCase = titleCaseButFirstLetter.charAt(0).toUpperCase() + titleCaseButFirstLetter.slice(1);
      
      return [...accumulator, {
        label: titleCase,
        link: currentItem[0]
      } as MenuItem];
    }
    return accumulator;
  }, [] as MenuItem[]);
}

onMounted(() => {
  let menuItems: MenuItem[] = [];
  const targetProject = ALL_PROJECTS.find(x => x.pageLink === router.currentRoute.value.path);
  if (!targetProject) {
    error.value = true;

  } else {
    project.value = targetProject;

    menuItems = parseMenuItems(targetProject);
  }

  emits('onLoaded', {
    menuItems: menuItems, 
    accentColor: project.value?.accentColor, 
    hasError: error.value
  });
});

</script>

<template>
  <main>
    <div v-if="error || project == null">An Error has occured while loading this page. Please try another one.</div>
    <div v-else>
      <app-preview-intro :project="project" />
      
      <h1 id="screenshots">Screenshots</h1>
      TODO
      
      <project-history :project="project" />
      
      <awards id="awards" 
              :content="project.pageSections.awards" 
              :color="project.accentColor"/>
  
      <tech-grid :project="project" />
    </div>
  </main>
</template>

<style lag="scss" scoped>

</style>