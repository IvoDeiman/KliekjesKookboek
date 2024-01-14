<template>
  <navbar />
  <router-view />
  <footer-general />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import FooterGeneral from "@/components/Footer.vue";
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;500;600;700;800&family=Work+Sans:wght@200;300;400;500;600;700&display=swap');
</style>