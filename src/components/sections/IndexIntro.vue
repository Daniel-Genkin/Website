<script setup lang="ts">
import LeftPill from '@/components/elements/LeftPill.vue';

function goToGithub() {
  window.open("https://github.com/Daniel-Genkin", '_blank')!.focus();
}
</script>

<template>
  <div>
    <div id="root" class="rows">
      <div id="content" class="cols">
        <h2>Daniel Genkin</h2>
        <p>Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote Quote</p>
        <div class="rows">
          <button @click="goToGithub()">Github</button>
          <button>LinkedIn</button>
        </div>
      </div>
      <left-pill id="pill" image-src="me.png"/>
    </div>
  </div>
</template>

<style lag="scss" scoped>
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

.rows {
  display: flex;
  flex-direction: row;
}
.cols {
  display: flex;
  flex-direction: column;
}
</style>