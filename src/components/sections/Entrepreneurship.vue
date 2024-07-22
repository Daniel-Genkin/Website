<script setup lang="ts">
import Pill from '../elements/Pill.vue';
</script>

<template>
  <div>
    <h1>Entrepreneurship</h1>
    <div class="rows" style="margin-right: 12px">
      <pill 
        class="pills" 
        color="#3A9BD2" 
        :half-height="false" 
        :has-bottom-decor="false"/>
      <div class="info">
        <p>Between 2015 and 2023, I founded and participated in several start-up ventures centered around using technology to solve every-day problems. The most notable of these ventures, DGApps, was founded in 2015 as a portfolio to publish all my projects. Some of these projects included:</p>
        <ul>
          <li>LifeAR (rebranded as GreenAR) - A universal augmented reality mobile application that allows for embedding digital content on physical real-world objects to improve engagement and communication effectiveness. For example, using LifeAR, content owners would be able to link a standard small business card to display a video (of any length) when the app is used to scan the card. Then, after the user is done watching the video, they could click a button and be navigated to a corresponding website to take some action (such as buying a product). The platform consisted of the mobile app viewer client as well as a full content management backend platform which allowed paying users to update their content in real-time. 
          </li>
          <br />
          <li>HandTrack - A mobile application that used the device's built-in accelerometer sensors or a virtual joystick to move the mouse pointer on the screen of one or more connected computers over Wi-Fi or Bluetooth which could enable a new method for people with various limiting physical conditions to use a computer in a more natural three-dimensional space.</li>
          <br />
          <li>Several others including some utility applications to implement some new functionality (such as theft detection or in-pocket detection) to mobile devices and some games (such as Slappy Sandwhich).</li>
        </ul>
        <p>Unfortunately, most of the projects are not maintained anymore due to lack of time. However more information can be found on the archived <a href="https://dgapps.ca">DGApps website</a>.</p>
        <br />
        <p>DGApps also provided freelance services and built several websites including the <a href="https://selc.ed.brocku.ca/">Science Education and Local Communities website</a> and a <a href="https://secure3.ed.brocku.ca/dolanamogadime/">personal website for Dolana Mogadime</a>.</p>
        <br />
        <p>Aside from DGApps, I participated in several business incubator programs and joined or assisted in the development of some startups in areas such as: augmented and virtual reality (AR and VR respectively), social media / match making, fitness, and education. Most of these startups are no longer operating. However, they have all been fantastic opportunities to learn, grow, and develop my skills.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pills {
  width: 30px;
}
.info {
  width: 100%;
}

.info * {
  text-wrap: pretty;
  max-width: 100%;
}

@media screen and (max-width: 360px) {
  .pills {
    display: none;
  }
}
</style>