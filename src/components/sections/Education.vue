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
        <pill class="pills" :left-rounded="index == content.length - 1" :halfHeight="false">
          <h2 style="margin-left: 25px;">{{ item.startingDate }} - {{ item.endingDate }}</h2>
        </pill>
        <ul>
          <li v-for="achievement in item.achievements" :key="achievement">
            {{ achievement }}
          </li>
        </ul>
      </div>
      <chevron class="chevron" width="35px"/>
    </div>
  </div>
</template>

<style scoped>
.rows {
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.pills {
  height: 55px;
  top: 0;
  margin-right: 24px;
}

.chevron {
  height: 55px;
  flex: 1;
}

@media screen and (max-width: 800px) {
  .chevron {
    flex: 0;
  }
}

@media screen and (max-width: 500px) {
  .chevron {
    visibility: hidden;
  }

  .pills {
    height: 95px;
  } 

}

</style>