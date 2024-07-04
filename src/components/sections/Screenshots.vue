<script setup lang="ts">
import RightPill from '@/components/elements/RightPill.vue';
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
      <right-pill id="pill" :color="color" />
      <slideshow :slide-count="content.length"
                 @slide-changed="position = $event"
                 style="width: 100%;">
        <video v-if="content[position].endsWith('.mp4')" :src="content[position]" controls>
          <span>Videos unsupported by browser</span> <!--THIS SPAN IS ALSO FOR SIZING WHE THE VIDEO IS STILL LOADING-->
        </video>
        <img :src="content[position]" v-else />
      </slideshow>
    </div>
  </div>
</template>

<style lag="scss" scoped>
#pill {
  width: 200px;
}

video,
img {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  background-color: #3D4041;
  padding: 12px;
  border-radius: 25px;
}

.rows {
  display: flex;
  flex-direction: row;
}
.cols {
  display: flex;
  flex-direction: column;
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
</style>