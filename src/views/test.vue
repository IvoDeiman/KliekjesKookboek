<template>
  <h1 class="mt-20">Test</h1>
  <button @click="printRecipeById">print 1</button>
  <br>
  <button @click="printRecipes">print all</button>
  <br>
  <button @click="printRecipesContainingIngredient">print recipes containing ingredient</button>
</template>

<script>
import FirebaseService from "@/services/FirebaseService"

const fb = new FirebaseService();
export default {
  name: "TestPage",
  props: {
    msg: String
  }, methods: {

    printRecipeById() {
      let recipes = fb.getRecipeById('Koek')
      recipes.then((response) => {
        console.log(response)
      })
    },
    printRecipes() {
      let recipes = fb.getRecipes();
      recipes.then((response) => {
        for (let i = 0; i<response.length; i++) {
          console.log(response[i]);
        }
      })
      },
    printRecipesContainingIngredient() {
      let recipes = fb.getRecipes();
      recipes.then((response) => {
        for (let i = 0; i<response.length; i++) {
          for (let j = 0; j<response.length; j++) {
            if(response[i].ingredients[j].name == "pindakaas") {
              console.log(response[i].name)
            }
          }
        }
      })
    }
    }
}






</script>