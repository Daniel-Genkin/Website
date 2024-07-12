<script setup lang="ts">
import Pill from "@/components/elements/Pill.vue";
import Chevron from "../elements/Chevron.vue";

defineProps<{
  content: EducationEntry[]
}>();
</script>

<template>
  <div>
    <h1>Education</h1>
    <div class="rows">
      <div v-for="(item, index) in content" :key="index" style="flex: 1">
        <pill class="pill" :left-rounded="index == content.length - 1">{{ item.startingDate }} - {{ item.endingDate }}</pill>
        <ul>
          <li v-for="achievement in item.achievements" :key="achievement">
            {{ achievement }}
          </li>
        </ul>
      </div>
      <chevron class="chevron" width="100px"/>
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
  flex: 1;
}
</style>