<script setup lang="ts">
import Pill from '@/components/elements/Pill.vue';

defineProps<{
  content: WorkExperience[]
}>();
</script>

<template>
  <div>
    <h1>Work Experience</h1>
    <div v-for="(item, index) in content" :key="index" class="rows container">
      <div class="cols container-content">
        <h2 style="margin-bottom: 0">{{ item.title }}</h2>
        <div class="cols" style="margin: 8px 0">
          <p>{{ item.organization }}</p>
          <p>{{ item.startingDate }} - {{ item.endingDate }}</p>
        </div>
        <p>{{ item.description }}</p>
      </div>
      <pill class="pills">
        <div class="iconContainer">
          <img :src="item.logo" />
        </div>
      </pill>
    </div>
  </div>
</template>

<style scoped>
.rows {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.iconContainer {
  background-color: white;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    margin-top: 10%;
    margin-left: 10%;
  }
}

.pills {
  width: 350px;
  height: 150px;
  margin: 24px 0;
}

.container-content {
  width: 100%;
  margin-left: 12px;
}

@media screen and (max-width: 500px) {
  .container {
    flex-direction: column-reverse;
    width: 100%;
  }

  .pills {
    width: 90%;
    margin-left: 5%;
  }

  .container-content {
    width: unset; /* I don't fully understand this but I need to swap max-width and width here to make this work properly */
    max-width: 100%;
  }

}

</style>