<script setup lang="ts">
import Pill from '@/components/elements/Pill.vue';
import { ref } from 'vue';
import Slideshow from '../elements/Slideshow.vue';

const props = defineProps<{
  content: string[],
  color: string
}>();

var position = ref(0);

</script>

<template>
  <div>
    <h1>Screenshots</h1>
    <div id="root" class="rows">
      <pill 
        id="pill" 
        class="verticalPill" 
        :color="color" 
        :half-height="false" 
        :has-bottom-decor="false"/>
      <slideshow :color="color"
        :slide-count="content.length"
        @slide-changed="position = $event"
        class="fullWidth">
        <Transition name="slide-fade" appear mode="out-in">
          <div :key="position">
            <video v-if="content[position].endsWith('.mp4')" :src="content[position]" controls>
              <span>Videos unsupported by browser</span> <!--THIS SPAN IS ALSO FOR SIZING WHEN THE VIDEO IS STILL LOADING-->
            </video>
            <img :src="content[position]" v-else />
          </div>
        </Transition>
      </slideshow>
    </div>
  </div>
</template>

<style scoped>
#pill {
  width: 30px;
}

video,
img {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
}

@media screen and (max-width: 450px) {
  #pill {
    display: none;
  }
}

</style>