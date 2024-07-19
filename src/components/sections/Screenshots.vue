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
      <pill id="pill" :color="color" :half-height="false" />
      <slideshow :color="color"
                 :slide-count="content.length"
                 @slide-changed="position = $event"
                 class="fullWidth">
        <Transition name="fade" appear mode="out-in">
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
.fade-enter-active,
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

#pill {
  width: 30px;
}

video,
img {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
}

.center {
  justify-content: center;
  align-items: center;
}

.selectiondot {
  background-color: #3D4041;
  border-radius: 10000px;
  height: 25px;
  width: 25px;
  padding: 0;

  &.selected {
    background-color: #3A9BD2
  }
}

.arrow {
  background-color: none;
  height: 35px;
  width: 35px;
  padding: 0;
}

@media screen and (max-width: 450px) {
  #pill {
    display: none;
  }
}

</style>