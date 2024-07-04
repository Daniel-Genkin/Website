<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  slideCount: number
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
    <div class="cols">
      <slot></slot>
      <!-- slideshow controls -->
      <div class="rows center">
        <button classs="arrow" @click="setPositionBy(-1)"><</button>
        <button 
          v-for="i in slideCount" :key="i"
          @click="setPosition(i - 1)"
          :class="['selectiondot', position == i - 1 ? 'selected' : '']">
        </button>
        <button class="arrow" @click="setPositionBy(1)">></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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