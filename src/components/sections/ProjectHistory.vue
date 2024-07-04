<script setup lang="ts">
import StraightPill from '../elements/StraightPill.vue';

defineProps<{
  project: Project
}>();

</script>

<template>
  <div>
    <h1 id="history">History</h1>
    <div v-for="(date, index) in project?.pageSections.history" 
        :key="date.year"
        class="cols"
        style="margin: 0 64px;">
      <div class="rows">
        <straight-pill class="datePill" :color="project?.accentColor"/>
        <div class="cols">
          <h2 class="year">{{ date.year }}</h2>
          <ul>
            <li v-for="event in date.events">{{ event }}</li>
          </ul>
        </div>
      </div>
      <chevron v-if="index === (project?.pageSections.history.length ?? 1) - 1" style="height: 45px; width: 45px;"></chevron>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 24" class="divider">
        <path d="M3.018 17.551a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6m0-8.4a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 1 1 0-5.6m0-8.401a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Z"/>
      </svg>
    </div>
  </div>
</template>

<style lag="scss" scoped>
.rows {
  display: flex;
  flex-direction: row;
}
.cols {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.year {
  margin: 0;
  font-size: 3rem;
}
.datePill {
  margin: 8px;
}
.divider {
  height: 45px;
  width: 8px;
  margin-left: 12px;
  background-color: #464646;
  border-radius: 50px;
  padding: 6px;

  path {
    fill: #A3A3A3;
  }
}
</style>