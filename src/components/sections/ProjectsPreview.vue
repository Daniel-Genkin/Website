<script setup lang="ts">
import Pill from '@/components/elements/Pill.vue';
import router from '@/router';
import { computed, ref } from 'vue';
import IconCard from "../elements/IconCard.vue";
import Slideshow from '../elements/Slideshow.vue';

const props = defineProps<{
  content: Project[]
}>();

var position = ref(0);

var item = computed<Project>(() => props.content[position.value]);

function goToPage(pageName: string): void {
  router.push(pageName);
}
</script>

<template>
  <div>
    <h1>Projects</h1>
    <div id="root" class="rows">
      <pill id="pill" color="#3A9BD2" />
      <slideshow color="#3A9BD2" 
                 :slide-count="content.length"
                 @slide-changed="position = $event"
                 class="content">
        <div class="rows">
          <div class="cols">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="rows">
              <icon-card v-for="award in item.highlights" 
                         :key="award.caption"
                         :caption="award.caption"
                         :icon="award.icon"
                         color="#3A9BD2"
                         style="height: 150px; width: 300px;"/>
            </div>
            <button style="margin-top: 56px" @click="goToPage(item.pageLink)">Learn More</button>
          </div>
        </div>
      </slideshow>
    </div>
  </div>
</template>

<style scoped>
#pill {
  width: 45px;
  margin-right: 25px;
}

</style>