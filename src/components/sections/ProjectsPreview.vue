<script setup lang="ts">
import Pill from '@/components/elements/Pill.vue';
import { goToInternal } from '@/data/helpers';
import router from '@/router';
import { computed, ref } from 'vue';
import IconCard from "../elements/IconCard.vue";
import Slideshow from '../elements/Slideshow.vue';

const props = defineProps<{
  content: Project[]
}>();

var position = ref(0);

var item = computed<Project>(() => props.content[position.value]);
</script>

<template>
  <div>
    <h1>Projects</h1>
    <div id="root" class="rows">
      <pill 
        class="pills" 
        color="#3A9BD2" 
        :half-height="false" 
        :has-bottom-decor="false"/>
      <slideshow 
        color="#3A9BD2" 
        :slide-count="content.length"
        @slide-changed="position = $event"
        class="fullWidth">
        <Transition name="slide-fade" appear mode="out-in">
          <div class="rows" :key="position">
            <div class="cols">
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
              <div class="rows wrap">
                <icon-card v-for="award in item.highlights" 
                  :key="award.caption"
                  :caption="award.caption"
                  :icon="award.icon"
                  color="#3A9BD2"
                  class="cardIcon"/>
              </div>
              <button style="margin-top: 56px;" @click="goToInternal(router, item.pageLink)">Learn More</button>
            </div>
          </div>
        </Transition>
      </slideshow>
    </div>
  </div>
</template>

<style scoped>
.pills {
  width: 30px;
}

.cardIcon {
  height: 150px;
  width: 300px; 
  margin-bottom: 48px;
}
@media screen and (max-width: 360px) {
  .pills {
    display: none;
  }

  .cardIcon {
    height: 245px;
    width: 200px; 
    margin-bottom: 48px;
  } 
}
</style>