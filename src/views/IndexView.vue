<script setup lang="ts">
import OddSection from '@/components/elements/OddSection.vue';
import Awards from '@/components/sections/Awards.vue';
import Education from '@/components/sections/Education.vue';
import Entrepreneurship from "@/components/sections/Entrepreneurship.vue";
import IndexIntro from '@/components/sections/IndexIntro.vue';
import ProjectsPreview from '@/components/sections/ProjectsPreview.vue';
import WorkExperience from '@/components/sections/WorkExperience.vue';

import { ALL_PROJECTS, AWARDS, EDUCATION, WORK_EXPERIENCE } from '@/data/data';

const emits = defineEmits({
  onLoaded(payload: OnLoadData) { return true }
});

emits('onLoaded', {
  menuItems: [
    {
      label: 'Projects',
      link: '#projects'
    },
    {
      label: 'Work Experience',
      link: '#workExperience'
    },
    {
      label: 'Education',
      link: '#education'
    },
    {
      label: 'Awards',
      link: '#awards'
    },
    {
      label: 'Entrepreneurship',
      link: '#entrepreneurship'
    }
  ],
  accentColor: "#3A9BD2",
  hasError: false
})

</script>

<template>
  <main>
    <index-intro id="top" class="content" />

    <odd-section>
      <projects-preview :content="ALL_PROJECTS" id="projects" class="content" />
    </odd-section>

    <work-experience :content="WORK_EXPERIENCE" id="workExperience" class="content" />

    <odd-section>
      <education :content="EDUCATION" id="education" class="content" />
    </odd-section>

    <awards color="#3A9BD2" :content="AWARDS" id="awards" class="content" />

    <odd-section>
      <entrepreneurship id="entrepreneurship" class="content" />
    </odd-section>
  </main>
</template>