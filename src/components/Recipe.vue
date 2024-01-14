<template>
  <div style="padding-top: 50px; border: solid black" @click="goToInfo">
    <h1>{{title}}</h1>
    <h1>{{description}}</h1>
    <h1>{{tags}}</h1>
    <h1>{{preparationtime}}</h1>
    <h1>{{rating}}</h1>
  </div>
</template>

<script>
export default {
  name: "RecipeComponent",
  props:['recipeData'],
  data() {
    return {
      title: String,
      description: String,
      tags: [],
      preparationtime:Number,
      rating: Number
    }
  }, methods: {
    async setData() {
      this.title = this.recipeData.id;
      this.description = this.recipeData.description;
      this.tags = this.recipeData.tags;
      this.preparationtime = this.recipeData.preparationtime;
      this.rating = this.recipeData.rating;
    },
    goToInfo() {
      this.$router.push({name:'RecipeInfo', params: {id:this.title}})
    },
  },
  created() {
    this.setData();
  }
}

</script>