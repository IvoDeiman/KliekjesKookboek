<template>
  <div class="searchbar--background">
    <div class="searchbar--holder">
      <search-component id="search-bar" placeholder="Vul hier je kliekjes in!" value="" label=""></search-component>
      <secondary-button class="button--squared" id="surprise-button" value="Verras Mij"/>
    </div>
  </div >
  <div class="content">
    <div class="filter-column">
      <filter-box-component :filterData="aanbevolenTest"></filter-box-component>
      <filter-box-component :filterData="groentenTest"></filter-box-component>
      <filter-box-component :filterData="vleesTest"></filter-box-component>
      <filter-box-component :filterData="zuivelTest"></filter-box-component>
      <filter-box-component :filterData="visEnZeeTest"></filter-box-component>
      <filter-box-component :filterData="olieDressingVetTest"></filter-box-component>
      <filter-box-component :filterData="KruidenTest"></filter-box-component>
      <filter-box-component :filterData="BakkenTest"></filter-box-component>
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
      groentenTest: {
        title: "Groenten",
        content: [
          {label: "Paprica", checkbox: false},
          {label: "ui", checkbox: false}
        ]
      },
      aanbevolenTest: {
        title: "aanbevolen",
        content: [
          { label: "knoflook", checked: false },
          { label: "kaas", checked: false },
        ]
      },
      vleesTest: {
        title: "aanbevolen",
        content: [
          { label: "knoflook", checked: false },
          { label: "kaas", checked: false },
        ]
      },
      zuivelTest: {
        title: "aanbevolen",
        content: [
          { label: "knoflook", checked: false },
          { label: "kaas", checked: false },
        ]
      },
      visEnZeeTest: {
        title: "aanbevolen",
        content: [
          { label: "knoflook", checked: false },
          { label: "kaas", checked: false },
        ]
      },
      olieDressingVetTest: {
        title: "aanbevolen",
        content: [
          { label: "knoflook", checked: false },
          { label: "kaas", checked: false },
        ]
      },
      KruidenTest: {
        title: "aanbevolen",
        content: [
          { label: "knoflook", checked: false },
          { label: "kaas", checked: false },
        ]
      },
      BakkenTest: {
        title: "aanbevolen",
        content: [
          { label: "knoflook", checked: false },
          { label: "kaas", checked: false },
        ]
      },

      aanbevolen: [
        { label: "knoflook", checked: false },
        { label: "kaas", checked: false },
      ],
      groenten: [
        { label: "paprika", checked: false },
        { label: "ui", checked: false },
      ],
      vlees: [
        { label: "kip", checked: false },
        { label: "rund", checked: false },
      ],
      zuivel: [
        { label: "melk", checked: false },
        { label: "kaas", checked: false },
      ],
      vis: [
        { label: "zalm", checked: false },
        { label: "mossel", checked: false },
      ],
      olie: [
        { label: "olijfolie", checked: false },
        { label: "knoflook saus", checked: false },
      ],
      kruiden: [
        { label: "zout", checked: false },
        { label: "peper", checked: false },
      ],
      bakken: [
        { label: "meel", checked: false },
        { label: "eieren", checked: false },
      ],
    };
  },
  methods: {
    toggleFilterBox(filter) {
      this[`${filter}Expanded`] = !this[`${filter}Expanded`];
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

.filter-box {
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  border-radius: 10px;
  padding: 10px;
  left: 10px; 
  transition: height 0.5s ease; 
  overflow: hidden; 
  cursor: pointer;
}

.filter-box:first-child{
  margin-top: 0;
}

.expanded {
  height: 160px; 
}

.filter-title {
  font-weight: bold;
  font-size: 18px;
}

.filter-subtext {
  font-size: 14px;
}

.checkbox-section {
  margin-top: 10px;
}

.checkbox-item {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.checkbox-input {
  margin-right: 5px;
}

.searchbar--background {
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
  height: 25vh;
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