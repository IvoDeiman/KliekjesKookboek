<template>
  <router-link to="/add-recipes" class="add-recipe-button rounded-full">
    Voeg recept toe
  </router-link>
  <div class="searchbar--background">
    <div class="searchbar--holder">
      <search-component id="search-bar" placeholder="Vul hier je kliekjes in!" value="" label=""></search-component>
      <secondary-button class="button--squared" @click="filter" id="surprise-button" value="Verras me"/>
    </div>
  </div >
  <div class="content">
    <div class="filter-column">
      <filter-box-component @activeFilters="receiveCurrentFilters" @removeFilters="removeFilter" v-for="filter in filterCategories" :key="filter.id" :filterData="filter"></filter-box-component>
    </div>
    <div>
      <div id="recipes-grid" class="recipes--grid">
        <RecipeComponent v-for="recipe in recipes.slice((page-1)*recipesPerPage,page*recipesPerPage)" :key="recipe.id" :recipeData="recipe" />
      </div>
      <pagination v-model="page" :records="recipes.length" :per-page="recipesPerPage" @paginate="PaginateCallback"/>
    </div>
  </div>
</template>

<script>
import SearchComponent from "@/components/inputs/Search.vue";
import FilterBoxComponent from "@/components/inputs/FilterBox.vue";
import RecipeComponent from "@/components/Recipe.vue";
import SecondaryButton from "@/components/buttons/SecondaryButton.vue";
import FirebaseService from "@/services/FirebaseService";
import Pagination from "v-pagination-3";

const fb = new FirebaseService();

export default {
  name: "RecipePage",
  components: {
    SearchComponent,
    RecipeComponent,
    SecondaryButton,
    FilterBoxComponent,
    Pagination
  },
  data() {
    return {
      page: 1,
      recipesPerPage: 10,
      recipes: [],
      currentFilters: [],
      filterCategories:[
        {
          title: "categorieën",
          content: [
            { label: "braziliaans", checked: false },
            { label: "italiaans", checked: false },
            { label: "koreaans", checked: false },
            { label: "mexicaans", checked: false },
            { label: "nederlands", checked: false },
            { label: "spaans", checked: false },
            { label: "vietnamees", checked: false },
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
    receiveCurrentFilters(mess) {
      if(mess === undefined || mess.length === 0) return;
      for (let i = 0; i < mess.length; i++){
        if(!this.currentFilters.includes(mess[i]))
          this.currentFilters.push(mess[i]);
      }
      this.filterIngredients();
    },
    removeFilter(mess){
      if(mess === undefined || mess === '') return;
      let index = this.currentFilters.indexOf(mess);
      this.currentFilters.splice(index, 1);
      this.filterIngredients();
    },
    filterIngredients() {
      this.recipes = []
      fb.filterIngredients(this.currentFilters).then(data => {
        for (let i=0; i<data.length ; i++)
          fb.getRecipeById(data[i]).then((data2) =>
              this.recipes.push({id:data[i],...data2}));
      });
    },
    goToRandomRecipe() {
      fb.getRandomRecipe().then((id) => {
        this.$router.push({name:'RecipesDetails', params: {id:id}});
      })
    },


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
};
</script>

<style>
body {
  background: #fafafa;
}

.add-recipe-button {
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 5;
  margin: 0px 100px 50px 0px;
  padding: 40px 10px 40px 10px;
  border: 5px #E4A428 solid;
  font-size: 12px;
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

.VuePagination {
  padding-top: 75px;
  padding-bottom: 75px;
}

.VuePagination__count {
  font-family: Work Sans, sans-serif;
}

.page-link {
  font-family: Work Sans, sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #E4A428;
  border-radius: 10px;
  min-height: 48px;
  min-width: 48px;
  transition: color 0.1s, background-color 0.1s, transform 0.1s;
}

.page-link:hover, .active {
  border-radius: 10px;
  background-color: #E4A428;
  color: white;
}

.pagination{
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination > li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: .25rem;
}

.pagination__controls--prev, .VuePagination__pagination-item-prev-chunk {
  margin-right: auto;
  margin-left: 0;
}

.pagination > li.pagination__controls--next, .pagination > li.VuePagination__pagination-item-next-chunk{
  margin-right: 0;
  margin-left: auto;
}
</style>
