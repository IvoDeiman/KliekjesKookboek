<template>
  <div class="searchbar--background">
    <div class="searchbar--holder">
      <search-component id="search-bar" placeholder="Vul hier je kliekjes in!" value="" label=""></search-component>
      <secondary-button class="button--squared" id="surprise-button" value="Verras Mij"/>
    </div>
  </div >
    <div class="content--grid">
      <div class="tag-selector-dropdowns">

      </div>
      <div class="recipes--grid">
        <RecipeComponent v-for="recipe in recipes" :key="recipe.id" :recipeData="recipe" />
      </div>
    </div>
</template>

<script>
import RecipeComponent from "@/components/Recipe.vue";
import SearchComponent from "@/components/inputs/Search.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import FirebaseService from "@/services/FirebaseService"

const fb = new FirebaseService();

export default {
  name: "RecipesPage",
  components: {
    RecipeComponent,
    SearchComponent,
    SecondaryButton
  },
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

<style>
.searchbar--background {
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
  height: 20vh;
  display: flex;
  justify-content: center;
  justify-items: center;
}

.searchbar--holder {
  display: inline-flex;
  max-width: 1084px;
  padding-top: 10vh;
  justify-content: center;
  justify-items: center;
}

.button--squared {
  min-height: 65px;
  border-radius: 10px !important;
  margin-left: 15px;
}

.button--squared:hover {
  background: #ffffff;
}

.content--grid{
  max-width: 1084px;
  width: 1084px;
  display: inline-grid;
  grid-template-columns: 1fr 2fr;
}

.recipes--grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

</style>