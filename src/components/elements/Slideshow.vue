<script setup lang="ts">
import { ref } from 'vue';
import Icon from './Icon.vue';

const props = defineProps<{
  slideCount: number,
  color: string
}>();

const emits = defineEmits({
  slideChanged(payload: number) { return true; }
});

var position = ref(0);
function setPositionBy(amount: number): void {
  let newVal = position.value + amount;
  if (newVal >= props.slideCount) {
    newVal = 0;
  } else if (newVal < 0) {
    newVal = props.slideCount - 1;
  }
  setPosition(newVal);
}

function setPosition(newPosition: number): void {
  position.value = newPosition;

  emits('slideChanged', position.value);
}

</script>

<template>
  <div>
    <div>
      <slot></slot>
      <!-- slideshow controls -->
      <div class="controls">
        <icon class="chevron" src="chevron-left" :color="color" @click="setPositionBy(-1)"/>
        <button 
          v-for="i in slideCount" :key="i"
          @click="setPosition(i - 1)"
          class="selectiondot"
          :style="{backgroundColor: position == i - 1 ? color : ''}">
        </button>
        <icon class="chevron" src="chevron-right" :color="color" @click="setPositionBy(1)"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
}

.selectiondot {
  background-color: #3D4041;
  border-radius: 10000px;
  height: 25px;
  width: 25px;
  padding: 0;
  border-style: none;
}

svg {
  width: 45px;
}

.chevron:hover {
  cursor: pointer;
}

@media screen and (max-width: 400px) {
  .selectiondot {
    height: 15px;
    width: 15px;
  } 
  svg {
    width: 25px;
  }

}
</style>