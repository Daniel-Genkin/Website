<script setup lang="ts">
import { goToExternal } from "@/data/helpers";
import IconCard from "../elements/IconCard.vue";
import Pill from "../elements/Pill.vue";

defineProps<{
  project: Project
}>();

</script>

<template>
  <div>
    <div id="root" class="rows">
      <pill
        id="pill"
        :color="project.accentColor"
        :has-bottom-decor="true"
        :half-height="true">
        <img :src="project.projectLogo"/>
      </pill>
      <div class="cols fullWidth">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <button 
          :style="{
            borderColor: project.accentColor, 
            color: project.accentColor
          }"
          @click="goToExternal(project.projectButton.link)">
            {{ project.projectButton.caption }}
          </button>
      </div>
    </div>
    <div class="rows wrap">
      <icon-card 
        v-for="highlight in project.highlights" 
        :caption="highlight.caption" 
        :icon="highlight.icon" 
        :color="project.accentColor"
        class="cardIcon"/>
    </div>
  </div>
</template>

<style scoped>
.cardIcon {
  height: 175px;
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
</style>