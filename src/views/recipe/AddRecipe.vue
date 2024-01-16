<template>
    <div class="upper-page-background"></div>
    <div class="add-recipe-container">
        <form>
            Recept naam: <input type="text"><br>
            Recept quote: <input type="text"><br>
            Chef naam: <input type="text"><br>
            Bereidings tijd: <input type="text"><br>
            Ingrediënten:<br>
            <select name="ingredienten">
                <option value="tag1">Tag 1</option>
                <option value="tag2">Tag 2</option>
                <option value="tag3">Tag 3</option>
            </select><br>
            Instructies: <br>
            <div class="instructions-container">
                <textarea rows="5" cols="33">This is the default comment...</textarea> <br>
                <textarea rows="5" cols="33">This is the default comment...</textarea> <br>
                <textarea rows="5" cols="33">This is the default comment...</textarea> <br>
            </div>
            <button class="add-instruction-button">Voeg instructie toe</button>
        </form>
    </div>
</template>
  
<script>
//import FirebaseService from "@/services/FirebaseService";

//const fb = new FirebaseService();

export default {
    name: "AddRecipe",
    data() {
        return {

        }
    },
    methods: {
    },
};
</script>
  
<style>
  .upper-page-background {
    background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
    height: 368px;
  }

  .add-recipe-container {

  }

  .instructions-container {

  }

  .add-instruction-button {
    background: #E4A428;
  }
</style>