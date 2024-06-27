<script setup lang="ts">
import { ALL_PROJECTS } from '@/data/data';
import router from '@/router';
import { onMounted, ref } from 'vue';

var project = ref<Project>();
var error = ref(false);

onMounted(() => {
  console.log(router.currentRoute.value.path);
  const targetProject = ALL_PROJECTS.find(x => x.pageLink === router.currentRoute.value.path);
  if (!targetProject) {
    error.value = true;
  } else {
    project.value = targetProject;
  }
});
</script>

<template>
  <main>
    <div v-if="error">An Error has occured while loading this page. Please try another one.</div>
    TODO - {{ project?.title }}
  </main>
</template>

<style lag="scss" scoped>
.rows {
  display: flex;
  flex-direction: row;
}
.cols {
  display: flex;
  flex-direction: column;
}

#content {
  flex: 5;
  padding: 64px;

  p {
    margin-left: 36px;
  }
}

#pill {
  flex: 1;
}

</style>