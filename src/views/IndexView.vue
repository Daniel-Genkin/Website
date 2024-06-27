<script setup lang="ts">
import Awards from '@/components/sections/Awards.vue';
import Education from '@/components/sections/Education.vue';
import IndexIntro from '@/components/sections/IndexIntro.vue';
import ProjectsPreview from '@/components/sections/ProjectsPreview.vue';
import WorkExperience from '@/components/sections/WorkExperience.vue';
import { ALL_PROJECTS, AWARDS, EDUCATION, WORK_EXPERIENCE } from '@/data/data';
</script>

<template>
  <main>
    <index-intro />
    <projects-preview :content="ALL_PROJECTS"/>
    <work-experience :content="WORK_EXPERIENCE" />
    <education :content="EDUCATION" />
    <awards :content="AWARDS" />
    <!-- TODO ADD CONTACT SECTION? -->
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