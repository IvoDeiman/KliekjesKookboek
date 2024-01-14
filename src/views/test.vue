<template>
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
        preparation: String,
        rating: "",
        owner: "",
        image: "",
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

    test() {

    },

    submitRecipe() {
      console.log(fb.addRecipe(this.localRecipe));
    }
  },

  mounted() {

  },
};

</script>