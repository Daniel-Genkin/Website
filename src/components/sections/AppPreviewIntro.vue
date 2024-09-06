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
          v-for="button in project.projectButtons"
          :key="button.link"
          :style="{
            borderColor: !button.disabled ? project.accentColor : '#535353', 
            color: !button.disabled ? project.accentColor : '#535353'
          }"
          @click="goToExternal(button.link)"
          :disabled="button.disabled"
          target="_blank"
          :class="['button', button.disabled ? 'disabled' : '']">
            {{ button.caption }}
        </button>
      </div>
    </div>
    <div id="highlights" class="rows wrap">
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

#highlights {
  margin-bottom: 24px;
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