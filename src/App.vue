<template>
  <div class="wrapper">
    <NavBar />
    <main class="container-fluid">
      <router-view/>
    </main>
    <Footer />
  </div>
  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components : {
    NavBar, Footer
  },
  computed : {
    jobTitle() {
      return this.$store.state.jobtitle
    }
  },
 
} 
</script>

<style src="./assets/CSS/style.css" >

</style>
