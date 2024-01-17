<script>

export default {
  name: "PageNotFound",
  props: {
    msg: String,
  },
};
</script>

<template>
  <section class="notFound sector">
    <img src="../assets/page-not-found.png" alt="Page not found image">
  </section>
</template>

<style scoped>

.notFound {
  display: flex;
  margin: 90px auto;
  justify-content: center;
  align-items: center;
}
</style>
