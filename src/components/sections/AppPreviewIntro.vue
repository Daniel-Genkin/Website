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
      <pill :color="project.accentColor" id="pill" :has-bottom-decor="true">
        <img :src="project.projectLogo"/>
      </pill>
      <div class="cols" style="width: 100%;">
        <h2>{{ project.title }}</h2>
        <p style="padding: 0 12px;">{{ project.description }}</p>
        <button @click="goToPage(project.projectButton.link)">{{ project.projectButton.caption }}</button>
        <div class="rows wrap">
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
  height: 150px;
  width: 275px;
  margin-bottom: 48px;
}

#pill {
  width: 100%;
  max-width: 500px;
  height: 300px;
  margin-bottom: 50px;
}

#pill img {
  max-width: 80%;
  width: auto;
  display: block;
  max-height: 300px;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 780px) {
  #root {
    flex-direction: column;
  }

  #pill {
    max-width: unset;
    width: 90%;
    height: 300px;
    margin-bottom: 50px;
    margin-left: 5%;
    margin-right: 5%;
  }
}

/* @media screen and (max-width: 600px) {
  .cardIcon {
    height: 245px;
    width: 200px; 
    margin-bottom: 48px;
  } 
} */

</style>