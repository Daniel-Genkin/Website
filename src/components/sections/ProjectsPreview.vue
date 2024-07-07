<script setup lang="ts">
import Icon from "@/components/elements/Icon.vue";
import RightPill from '@/components/elements/RightPill.vue';
import router from '@/router';
import { computed, ref } from 'vue';
import Card from "../elements/Card.vue";
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
      <right-pill id="pill" color="#3A9BD2" />
      <slideshow color="#3A9BD2" 
                 :slide-count="content.length"
                 @slide-changed="position = $event">
        <div class="rows" style="height: 350px">
          <div class="cols">``
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <button @click="goToPage(item.pageLink)">Learn More</button>
          </div>
          <div class="cols">
            <card class="cols" v-for="award in item.highlights" :key="award.caption" :center="true" :caption="award.caption">
              <icon :src="award.icon" color="#3A9BD2" class="icon" />
            </card>
          </div>
        </div>
      </slideshow>
    </div>
  </div>
</template>

<style lag="scss" scoped>
#pill {
  width: 200px;
}

.rows {
  display: flex;
  flex-direction: row;
}
.cols {
  display: flex;
  flex-direction: column;
}

.icon {
  height: 45px;
}

</style>