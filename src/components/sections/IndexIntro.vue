<script setup lang="ts">
import Pill from '@/components/elements/Pill.vue';
</script>

<template>
  <div>
    <div id="root" class="rows">
      <div class="cols" id="info">
        <h2>Daniel Genkin</h2>
        <p>I am passionate about Software Development & Computer Design. My passion started at a young age when my father introduced me to coding. Since that moment, I have founded and participated in several startups, worked in a range of companies from medium sized to some of the largest tech companies, met some extremely talented and interesting people, and helped to develop/improve/maintain some very important and influential software products. I am always open to learning new things and having new experiences.</p>
        <div class="rows" id="buttonContainer">
          <a class="button" href="https://github.com/Daniel-Genkin" target="_blank">Github</a>
          <a class="button" href="https://www.linkedin.com/in/daniel-genkin-dgapps/" target="_blank">LinkedIn</a>
        </div>
      </div>
      <pill 
        id="pill"
        color="#3A9BD2"
        :has-bottom-decor="true"
        :half-height="true">
        <img src="@/assets/me.png" id="profileImg"/>
      </pill>
    </div>
  </div>
</template>

<style scoped>
#pill {
  width: 500px;
  height: 300px;
  margin-bottom: 50px;
}

#profileImg {
  max-width: 300px;
  height: 300px;
}

#info {
  max-width: 100%;
  padding: 0 12px;
}

#buttonContainer {
  margin-top: 25px;
}

@media screen and (max-width: 720px) {
  #root {
    flex-direction: column-reverse;
  }

  #pill {
    width: 90%;
    height: 300px;
    margin-bottom: 50px;
    margin-left: 5%;
  }
}

</style>