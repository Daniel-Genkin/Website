<script setup lang="ts">
import AppPreviewIntro from "@/components/sections/AppPreviewIntro.vue";
import Awards from '@/components/sections/Awards.vue';
import ProjectHistory from "@/components/sections/ProjectHistory.vue";
import Screenshots from "@/components/sections/Screenshots.vue";
import TechGrid from '@/components/sections/TechGrid.vue';
import { ALL_PROJECTS } from '@/data/data';
import router from '@/router';
import { onMounted, ref } from 'vue';

const emits = defineEmits({
  onLoaded(payload: OnLoadData) { return true }
});

var project = ref<Project>();
var error = ref(false);
var menuItems = ref<MenuItem[]>([]);

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

// Note that sectionName must start with a #
function sectionExists(sectionId: string): boolean {
  console.log(menuItems.value, sectionId);
  return menuItems.value.findIndex(item => item.link === sectionId) !== -1;
}

onMounted(() => {
  console.log(router.currentRoute.value.path);
  const targetProject = ALL_PROJECTS.find(x => x.pageLink === router.currentRoute.value.path);
  if (!targetProject) {
    error.value = true;

  } else {
    project.value = targetProject;

    menuItems.value = parseMenuItems(targetProject);
  }

  emits('onLoaded', {
    menuItems: menuItems.value, 
    accentColor: project.value?.accentColor, 
    hasError: error.value
  });
});

</script>

<template>
  <main>
    <div v-if="error || project == null">An Error has occured while loading this page. Please try another one.</div>
    <div v-else>
      <app-preview-intro :project="project" class="content"/>
      
      <screenshots id="screenshots" 
                   v-if="sectionExists('screenshots')" 
                   :content="project.pageSections.screenshots" 
                   :color="project.accentColor"
                   style="margin-top: 100px;"
                   class="content"/>
      
      <project-history v-if="sectionExists('history')" 
                       :history="project.pageSections.history"
                       :color="project.accentColor"
                       id="history" 
                       class="content"/>
      
      <awards v-if="sectionExists('awards')"
              :content="project.pageSections.awards" 
              :color="project.accentColor"
              id="awards"
              class="content"/>

      <tech-grid v-if="sectionExists('technologiesUsed')" 
                 :technologies="project.pageSections.technologiesUsed"
                 style="margin-top: 100px;"
                 id="technologiesUsed" 
                 class="content"/>
    </div>
  </main>
</template>

<style scoped>

</style>