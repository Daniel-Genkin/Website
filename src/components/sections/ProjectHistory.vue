<script setup lang="ts">
import Chevron from '../elements/Chevron.vue';
import Pill from '../elements/Pill.vue';

defineProps<{
  history: HistoryEntry[],
  color: string
}>();
</script>

<template>
  <div>
    <h1>History</h1>
    <div v-for="(date, index) in history" 
        :key="date.year"
        class="cols">
      <div class="rows">
        <pill class="datePill" :color="color" :half-height="false" :has-bottom-decor="false"/>
        <div class="cols fullWidth">
          <h2 class="year">{{ date.year }}</h2>
          <ul>
            <li v-for="event in date.events" class="event">{{ event }}</li>
          </ul>
        </div>
      </div>
      <chevron v-if="index === (history.length ?? 1) - 1" class="chevron" :color="color" width="45px" :include-margin="false"/>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 24" class="divider">
        <path d="M3.018 17.551a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6m0-8.4a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 1 1 0-5.6m0-8.401a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Z"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
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
  width: 30px;
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
.event {
  max-width: 100%;
  padding-right: 12px;
}

.chevron {
  height: 45px;
  width: 45px;
  transform: rotate(90deg);
  margin-bottom: 36px;
}

@media screen and (max-width: 400px) {
  .datePill {
    width: 25px;
  }

  .divider {
    margin-left: 8px;
  }
}
</style>