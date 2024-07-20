<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import TransitionIn from './TransitionIn.vue';

defineProps<{
    color: string,
    halfHeight: boolean
    hasBottomDecor: boolean
}>();

const borderRadius = ref('80px');
const pill = ref();

function onResize() {
  const width = pill.value.clientWidth;
  const height = pill.value.clientHeight;
  const aspect = width/height;

  if (aspect >= 1.06) {
    borderRadius.value = '80px';

  } else if (aspect >= 1.04) {
    borderRadius.value = '75px';

  } else {
    borderRadius.value = '73px';
  }
}

onMounted(() => {
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <div>
    <div ref="pill" class="pillParent">
      <div 
        :class="['contents', halfHeight ? 'half' : 'full']"
        :style="{
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius
        }">
        <transition-in transition="slide-up">
          <slot></slot>
        </transition-in>
      </div>
      <div 
        :class="['pill', halfHeight ? 'half' : 'full']" 
        :style="{
          backgroundColor: color,
          borderColor: `darken(${color}, 10%)`
        }">
      </div>
      <div 
        v-if="hasBottomDecor" 
        class="pill small" 
        :style="{
          backgroundColor: color,
          borderColor: `darken(${color}, 10%)`
        }">
      </div>
    </div>
  </div>
</template>

<style scoped>
.contents {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: end;
}

.contents.full {
  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 15%;
}

.contents.half {
  border-bottom-left-radius: 85px;
  border-bottom-right-radius: 85px;
}

.pill {
  border: 7px solid #353535a8;
  outline: 8px solid #2c2d2e;
  color: rgba(255, 255, 255, 0.739);
  border-radius: 100000000px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.pill.full {
  top: 0;
}

.pill.half {
  top: 50%;
}
.pill.small {
  position: absolute;
  height: 25px;
  left: 25%;
  right: 25%;
  bottom: -50px;
  z-index: -1;
}

.pillParent {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
