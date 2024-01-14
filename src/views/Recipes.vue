<template>
    <div style="padding-top: 100px">
      <RecipeComponent v-for="recipe in recipes" :key="recipe.id" :recipeData="recipe" />
    </div>
</template>

<script>
import RecipeComponent from "@/components/Recipe.vue";
import FirebaseService from "@/services/FirebaseService"

const fb = new FirebaseService();

export default {
  name: "RecipesPage",
  components: {RecipeComponent},
  data() {
    return {
      recipes: [],
    };
  },
  created() {
    fb.getAllRecipes()
        .then(data => {
          this.recipes = [...this.recipes, ...data]
        })
        .catch(error => {
          console.error("Error in getDocumentIds:", error);
        });
  },
}
</script>