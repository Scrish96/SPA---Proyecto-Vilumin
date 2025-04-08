<script setup lang="ts">
  import Header from "../src/components/Header.vue"
  import Main from "../src/components/Main.vue"
  import Footer from "../src/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header />
    <!-- Main -->
    <Main  class="flex-grow"/>
    <!-- Footer -->
    <Footer />
  </div>
  
</template>

<style scoped>

</style>
