<template>
  <div class="container">
    <h1>Recipes</h1>
    <br>
    <router-link to="/recipes/1" :id="1" class="test">
      Recipe 1
    </router-link>
    <router-link to="/recipes/2" :id="2" class="test">
      Recipe 2
    </router-link>
    <router-link to="/recipes/3" :id="3" class="test">
      Recipe 3
    </router-link>
  </div>

</template>

<script>
export default {
  name: "RecipesPage",
  props: {
    msg: String
  }
}
</script>

<style lang="css">
.container {
  padding-top:100px;
}
</style>
