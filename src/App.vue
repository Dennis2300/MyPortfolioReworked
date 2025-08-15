<template>
  <NavBar />
  <router-view />
  <Footer />
</template>

<script setup>
import NavBar from './components/navbarComponent.vue';
import Footer from './components/footerComponent.vue';
</script>
