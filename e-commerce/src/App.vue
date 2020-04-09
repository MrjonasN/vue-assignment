<template>
  <div>
    <Navbar />

    <div class="container custom-margin-top">
      <router-view/>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar'
import Footer from './components/footer/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
  
}
</script>

<style scoped>
  .custom-margin-top {
    margin-top: 5.2rem;
  }
</style>
