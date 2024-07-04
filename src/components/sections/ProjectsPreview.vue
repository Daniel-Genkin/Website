<script setup lang="ts">
import RightPill from '@/components/elements/RightPill.vue';
import router from '@/router';
import { computed, ref } from 'vue';
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
      <slideshow :slide-count="content.length"
                 @slide-changed="position = $event">
        <div class="rows" style="height: 350px">
          <div class="cols">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <button @click="goToPage(item.pageLink)">Learn More</button>
          </div>
          <div class="cols">
            <div class="cols" v-for="award in item.highlights" :key="award.caption">
              <span>{{ award.icon }}</span>
              <h3>{{ award.caption }}</h3>
            </div>
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

</style>