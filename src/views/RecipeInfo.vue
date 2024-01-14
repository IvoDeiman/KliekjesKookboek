<template>
  <div style="padding-top: 100px">
    <h1>{{title}}</h1>
    <h1>{{comments}}</h1>
    <h1>{{description}}</h1>
    <h1>{{ingredients}}</h1>
    <h1>{{owner}}</h1>
    <h1>{{preparationtime}}</h1>
    <h1>{{rating}}</h1>
    <h1>{{tags}}</h1>
    <h1>{{preparation}}</h1>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

const fb = new FirebaseService();
export default {
  name: "RecipeInfo",
  data() {
    return {
      title: String,
      comments: [],
      description: String,
      ingredients: [],
      owner: String,
      preparationtime: Number,
      rating:Number,
      tags: [],
      preparation:String

    }
  },
  methods: {
    setData() {
      fb.getRecipeById(this.$route.params.id).then((data) =>
      {
        this.title = this.$route.params.id;
        this.comments = data.comments;
        this.description = data.description;
        this.ingredients = data.ingredients;
        this.owner = data.owner;
        this.preparationtime = data.preparationtime;
        this.rating = data.rating;
        this.tags = data.tags;
        this.preparation = data.preparation;
      })

    }
  },
  created() {
    this.setData()
  }
}
</script>

<style scoped>

</style>