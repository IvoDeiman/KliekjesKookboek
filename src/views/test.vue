<template>
  <h1 class="mt-20">Test</h1>
  <button @click="printRecipeById">print 1</button>
  <br>
  <button @click="printRecipes">print all</button>
  <br>
  <button @click="insertRecipe">print recipes containing ingredient</button>
  <div id="app" style="padding: 100px">
    <RecipeComponent></RecipeComponent>
  </div>

</template>

<script>
import FirebaseService from "@/services/FirebaseService"
import RecipeComponent from "@/components/Recipe.vue";

const fb = new FirebaseService();
export default {
  name: "TestPage",
  components: {RecipeComponent},
  data() {
    return {
      localRecipe: {
        title: String,
        ingredients: [],
        description: String,
        tags: [],
        comments:[],
        preparation: String,
        rating: Number,
        owner: String,
        imageurl: String,
        ingredientnames:[],
        availableMeasurements:[],
        preparationtime:Number
      }
    }
  }, methods: {
    addIngredient() {
      this.localRecipe.ingredients.push('');
    },
    removeIngredient(index) {
      this.localRecipe.ingredients.splice(index, 1);
    },
    addTag() {
      this.localRecipe.tags.push('');
    },

    insertRecipe() {
      console.log(this.localRecipe)
      this.localRecipe.title = "fucking lekkere droge rijst";
      this.localRecipe.ingredients = [{name: "rijst", measurement: "gram", amount: 500}, {name:"water",measurement:"mililiter",amount:500}]
      this.localRecipe.description = "wollah kook rijst";
      this.localRecipe.rating = 5;
      this.localRecipe.owner = "je ma";
      this.localRecipe.imageurl = "pindakaas";
      this.localRecipe.ingredientnames = ["rijst", "water"];
      this.localRecipe.preparationtime = 20;
      this.localRecipe.preparation = "doe water in pan en daarna rijst in pas, nu koken ofzo idk..";
      this.localRecipe.comments = ["kanker lekker", "niet zo kanker lekker"]

      console.log(this.localRecipe);
      fb.addRecipe(this.localRecipe);
    },

    getTags() {
      const tags = [];
      fb.getTags()
          .then(data => {
            data.forEach((tag) => tags.push(tag))

          })
          .catch(error => {
            console.error("Error in getDocumentIds:", error);
            // Handle the error
          });
      return tags;
    },

    getMeasurements() {
      fb.getMeasurements()
          .then(data => {
            this.localRecipe.availableMeasurements = [...this.localRecipe.availableMeasurements, ...data]
            console.log(this.localRecipe.availableMeasurements)

          })
          .catch(error => {
            console.error("Error in getDocumentIds:", error);
            // Handle the error
          });
    },

    removeTag(index) {
      this.localRecipe.tags.splice(index, 1);
    },
    printRecipes() {
      let recipes = fb.getRecipes();
      recipes.then((response) => {
        for (let i = 0; i<response.length; i++) {
          console.log(response[i]);
        }
      })
      },
    // printRecipesContainingIngredient() {
    //   let recipes = fb.getRecipes();
    //   recipes.then((response) => {
    //     for (let i = 0; i<response.length; i++) {
    //       for (let j = 0; j<response.length; j++) {
    //         if(response[i].ingredients[j].name == "pindakaas") {
    //           console.log(response[i].name)
    //         }
    //       }
    //     }
    //   })
    //},

    submitRecipe() {
      console.log(fb.addRecipe(this.localRecipe));
    }
  },

  mounted() {

  },
};

</script>