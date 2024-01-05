<template>
  <div class="container">
    <FirebaseTest></FirebaseTest>
  </div>
</template>

<script>
import FirebaseTest from "./components/FirebaseTest.vue"


export default {
  name: 'App',
  components: {
    FirebaseTest,
  },
  methods: {
  }
}
</script>

<style>
#app {
  margin-top: 20px;
}
</style>