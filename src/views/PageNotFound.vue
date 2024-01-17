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
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.notFound img {
  margin-top: 90px;
}
</style>
