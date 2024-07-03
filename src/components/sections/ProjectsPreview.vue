<script setup lang="ts">
import RightPill from '@/components/elements/RightPill.vue';
import router from '@/router';
import { computed, ref } from 'vue';

const props = defineProps<{
  content: Project[]
}>();

var position = ref(0);

var item = computed<Project>(() => props.content[position.value]);

function setPositionBy(amount: number): void {
  let newVal = position.value + amount;
  if (newVal >= props.content.length) {
    newVal = 0;
  } else if (newVal <= 0) {
    newVal = props.content.length - 1;
  }
  setPosition(newVal);
}

function setPosition(newPosition: number): void {
  position.value = newPosition;
}

function goToPage(pageName: string): void {
  router.push(pageName);
}

</script>

<template>
  <div>
    <h1>Projects</h1>
    <div id="root" class="rows">
      <right-pill id="pill" color="#3A9BD2" />
      <div class="cols">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <button @click="goToPage(item.pageLink)">Learn More</button>
        <div class="rows center">
          <button classs="arrow" @click="setPositionBy(-1)"><</button>
          <button 
            v-for="(i, index) in content" :key="i.pageLink"
            @click="setPosition(index)"
            :title="i.title"
            :class="['selectiondot', position == index ? 'selected' : '']">
          </button>
          <button class="arrow" @click="setPositionBy(1)">></button>
        </div>
      </div>
      <div class="cols">
        <div class="cols" v-for="award in item.highlights" :key="award.caption">
          <span>{{ award.icon }}</span>
          <h3>{{ award.caption }}</h3>
        </div>
      </div>
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