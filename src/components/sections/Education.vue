<script setup lang="ts">
import StraightPill from "@/components/elements/StraightPill.vue";
import Chevron from "../elements/Chevron.vue";

defineProps<{
  content: EducationEntry[]
}>();
</script>

<template>
  <div>
    <h1>Education</h1>
    <div class="rows">
      <div v-for="(item, index) in content" :key="index">
        <straight-pill class="pill" :left-rounded="index == content.length - 1">{{ item.startingDate }} - {{ item.endingDate }}</straight-pill>
        <ul>
          <li v-for="achievement in item.achievements" :key="achievement">
            {{ achievement }}
          </li>
        </ul>
      </div>
      <chevron class="chevron"/>
    </div>
  </div>
</template>

<style lag="scss" scoped>
.rows {
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.pill {
  margin-top: 16px;
}
.chevron {
  height: 100px;
}

</style>