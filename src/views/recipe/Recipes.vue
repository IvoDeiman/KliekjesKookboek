<template>
  <div class="searchbar--background">
    <div class="searchbar--holder">
      <search-component id="search-bar" placeholder="Vul hier je kliekjes in!" value="" label=""></search-component>
      <secondary-button class="button--squared" @click="goToRandomRecipe" id="surprise-button" value="Verras me"/>
    </div>
  </div >
  <div class="content">
    <div class="filter-column">
      <filter-box-component v-for="filter in filterCategories" :key="filter.id" :filterData="filter"></filter-box-component>
    </div>
    <div class="recipes--grid">
      <RecipeComponent v-for="recipe in recipes" :key="recipe.id" :recipeData="recipe" />
    </div>
  </div>
</template>

<script>
import SearchComponent from "@/components/inputs/Search.vue";
import FilterBoxComponent from "@/components/inputs/FilterBox.vue";
import RecipeComponent from "@/components/Recipe.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import FirebaseService from "@/services/FirebaseService";

const fb = new FirebaseService();

export default {
  name: "RecipePage",
  components: {
    SearchComponent,
    RecipeComponent,
    SecondaryButton,
    FilterBoxComponent
  },
  data() {
    return {

      recipes: [],
      filterCategories:[
        {
          title: "categorieën",
          content: [
            { label: "Braziliaans", checked: false },
            { label: "Italiaans", checked: false },
            { label: "Koreaans", checked: false },
            { label: "Mexicaans", checked: false },
            { label: "Nederlands", checked: false },
            { label: "Spaans", checked: false },
            { label: "Vietnamees", checked: false },
          ]
        },
        {
          title: "Groenten",
          content: [
            { label: "paprika", checked: false },
            { label: "ui", checked: false },
          ]
        },
        {
          title: "Vlees",
          content: [
            { label: "kip", checked: false },
            { label: "rund", checked: false },
          ]
        },
        {
          title: "Zuivel",
          content: [
            { label: "melk", checked: false },
            { label: "kaas", checked: false },
          ]
        },
        {
          title: "Vis en Zeevruchten",
          content: [
            { label: "zalm", checked: false },
            { label: "mossel", checked: false },
          ]
        },
        {
          title: "Oliën, dressing en frituurvet",
          content: [
            { label: "olijfolie", checked: false },
          ]
        },
        {
          title: "Kruiden, sausen specerijen",
          content: [
            { label: "zout", checked: false },
            { label: "peper", checked: false },
            { label: "knoflook saus", checked: false },
          ]
        },
        {
          title: "Suiker en zoetmakers",
          content: [
            { label: "wit kristalsuiker", checked: false },
            { label: "bastardsuiker", checked: false },
          ]
        },
        {
          title: "Bakproducten",
          content: [
            {label: "meel", checked: false},
            {label: "eieren", checked: false},
          ]
        }
      ],
      }
    },
  methods: {
    toggleFilterBox(filter) {
      this[`${filter}Expanded`] = !this[`${filter}Expanded`];
    },

    goToRandomRecipe() {
      fb.getRandomRecipe().then((id) => {
        this.$router.push({name:'RecipesDetails', params: {id:id}});
      })
    },

    filter() {
      fb.filterIngredients(["flower","butter"]).then(data => {
        console.log(fb.getRecipeById(data[0]))
      });
    },

  },
  created() {
    console.log(this.recipes)
    fb.getAllRecipes()
        .then(data => {
          this.recipes = [...this.recipes, ...data]
        })
        .catch(error => {
          console.error("Error in getDocumentIds:", error);
        });
  },
};
</script>

<style>

body {
  background: #fafafa;
}

.filter-column {
  width: 225px;
}

.content{
  position: relative;
  top: -30px;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  max-width: 1084px;
  margin: auto;
}

.recipes--grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  height: fit-content;
}

.filter-box:first-child{
  margin-top: 0;
}

.searchbar--background {
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
  height: 300px;
  display: flex;
  justify-content: center;
  justify-items: center;
}

.searchbar--holder {
  display: inline-flex;
  max-width: 1084px;
  padding-top: 150px;
  justify-content: center;
  justify-items: center;
}

#search-bar{
  width: 540px;
}

.button--squared {
  min-height: 65px;
  border-radius: 10px !important;
  margin-left: 15px;
}

.button--squared:hover {
  background: #ffffff;
  border: solid 2px #ffffff !important;
  transform: scale(1.0) !important;
}

</style>