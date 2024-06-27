<template>
  <div class="container">
    <section class="row" id="landing">
      <LandingSection />
    </section>
    <section class="row" id="about">
      <About />
    </section>
    <section class="row" id="resume">
      
    </section>
    <section class="row" id="project"></section>
    <section class="row" id="testimonials"></section>
    <section class="row" id="reachme"></section>
  </div>
</template>

<script>
import LandingSection from '../components/LandingSection.vue'
import About from '../components/AboutSection.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    LandingSection, About
  }
}
</script>
