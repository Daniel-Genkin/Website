<script setup lang="ts">
import Pill from '@/components/elements/Pill.vue';

function goToGithub() {
  window.open("https://github.com/Daniel-Genkin", '_blank')!.focus();
}
</script>

<template>
  <div>
    <div id="root" class="rows">
      <div class="cols" style="max-width: 100%; margin: 12px">
        <h2>Daniel Genkin</h2>
        <p>I am passionate about Software Development & Computer Design. My passion has driven me to engage in creating innovative and inspirational products. It has also driven me to participate in hackathons, create custom projects as a freelancer, and to test new programming concepts. I use several programming languages (focusing on Java, Swift, C# and Javascript), technologies (focusing on AR and VR), platforms (focusing on mobile and desktop), IDEs and frameworks. I am always looking for new opportunities. My current projects have provided me with the opportunity to contribute through innovation, to create, to learn and, importantly, to work with great people. I look forward to finding new opportunities and meet new people. I have an open mind and I welcome new ideas and professional challenges.</p>
        <div class="rows">
          <button @click="goToGithub()">Github</button>
          <button>LinkedIn</button>
        </div>
      </div>
      <pill id="pill" :has-bottom-decor="true">
        <img src="@/assets/me.png" style="max-width: 300px; height: 300px;"/>
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