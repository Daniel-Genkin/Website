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
    <div class="rows center">
      <div v-for="(item, index) in content" :key="index" style="flex: 1">
        <pill class="pills" :left-rounded="index == content.length - 1" :half-height="false" :has-bottom-decor="false" color="#3A9BD2">
          <h2 style="margin-left: 25px;">{{ item.startingDate }} - {{ item.endingDate }}</h2>
        </pill>
        <ul>
          <li v-for="achievement in item.achievements" :key="achievement">
            {{ achievement }}
          </li>
        </ul>
      </div>
      <chevron class="chevron" width="35px" color="#3A9BD2" :include-margin="true"/>
    </div>
  </div>
</template>

<style scoped>
.pills {
  height: 55px;
  top: 0;
  margin-right: 24px;
}

.chevron {
  height: 55px;
}

@media screen and (max-width: 500px) {
  .chevron {
    display: none;
  }

  .pills {
    height: 95px;
  } 
}

</style>