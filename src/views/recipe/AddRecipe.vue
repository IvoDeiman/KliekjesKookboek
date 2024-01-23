<template>
    <div class="upper-page-background"></div>
    <div class="add-recipe-container box-shadow">
        <h1 class="title">Voeg eigen recept toe.</h1>
        <hr style="margin: 10px 0px 20px 0px; opacity: 20%;">
        <form>
            <div class="recipe-info-item-container mb-3 sm:float-left sm:w-full">
                <div class="">Recept naam </div>
                <input class="input-fields" :class="{ errorInputFields: !this.validReceptNameInput}" type="text" v-model="recipeName">
            </div>

            <div class="recipe-info-item-container mb-3 sm:float-left sm:w-full">
                <span>Recept quote </span>
                <input class="input-fields" :class="{ errorInputFields: !this.validReceptQuoteInput}" type="text" v-model="recipeQuote">
            </div>

            <div class="recipe-info-item-container mb-3 sm:float-left sm:w-full">
                <span>Recept foto </span>
                <input class="input-fields" :class="{ errorInputFields: !this.validReceptQuoteInput}" type="text" v-model="recipeImage">

              <div class="image-upload">
                <label for="input-file" id="drop-area" @dragover="dragoverEvent" @drop="dropEvent">
                  <input @change="uploadImage" type="file" accept="image/*" id="input-file" hidden>
                  <div id="img-view">
                    <img class="image-upload-icon" src="@/assets/svg/cloud-arrow-up-solid.svg">
                    <p>Drag and drop or click here to upload image</p>
                    <span>Upload any images from desktop</span>
                  </div>
                </label>
              </div>
            </div>

            <div class="recipe-info-item-container mb-3 sm:float-left sm:w-[48%]">
                <span>Chef naam </span>
                <input class="input-fields" :class="{ errorInputFields: !this.validChefNameInput}" type="text" v-model="chefName">
            </div>


            <div class="recipe-info-item-container mb-3 sm:float-right sm:w-[48%]">
                <span>Bereidings tijd </span>
                <input class="input-fields" :class="{ errorInputFields: !this.validPrepTimeInput}" type="text"  v-model.number="prepTime" placeholder="Tijd in minuten">
            </div>

            <div class="recipe-info-item-container mb-3 sm:float-left sm:w-full">
                <span>Ingrediënten</span>
                <div class="mb-2">
                    <div class="ingredient-input-container">
                        <input type="text" id="amount" name="amount" placeholder="Hoeveelheid" class="input-fields w-full mb-1 md:me-1" :class="{ errorInputFields: !this.validAmountInput}" v-model="amount"> 
                        <select name="measurements" class="input-fields w-full mb-1 md:me-1" :class="{ errorInputFields: !this.validMeasurementInput}" v-model="selectedMeasurement">
                            <option :value='measurements.measurement' v-for="(measurements, k) in measurements" :key="k">
                                {{ measurements.measurement }}
                            </option>
                        </select>
                        <input type="text" id="ingredient" name="ingredient" placeholder="Ingrediënt" class="input-fields w-full mb-1" :class="{ errorInputFields: !this.validIngredientInput}" v-model="ingredient">
                    </div>
                    <button type="button" class="dynamic-add-remove-button box-shadow"  @click="addSelectedIngredient(amount, selectedMeasurement, ingredient)">Voeg ingredient toe</button>
                </div>
                <div class="tag-container">
                    <div class="tag-item me-1 mb-1" v-for="(selectedIngredients, k) in selectedIngredients" :key="k"  @click="removeIngredient(k)">
                        {{ selectedIngredients.amount }} {{ selectedIngredients.measurement }} {{ selectedIngredients.name }}
                    </div>
                </div>
            </div>

            <div class="recipe-info-item-container mb-3 sm:float-left sm:w-full">
                <span>Tags</span>
                <div class="mb-3">
                    <select name="ingredienten" class="input-fields w-full mb-1" v-model="selectedTag">
                        <option :value='tags.tag' v-for="(tags, k) in tags" :key="k">{{ tags.tag }}</option>
                    </select>
                    <button type="button" class="dynamic-add-remove-button box-shadow" @click="addSelectedTag(selectedTag)">Voeg tag toe</button>
                </div>
                <div class="tag-container">
                    <div class="tag-item me-1 mb-1" v-for="(selectedTag, k) in selectedTags" :key="k" @click="removeSelectedTag(k)">
                        {{ selectedTag.tag }}
                    </div>
                </div>
            </div>

            <div class="sm:float-left sm:w-full">
                <span>Instructies</span>
                <div class="instructions-container">
                    <div v-for="(instruction, k) in instructions" :key="k" class="mb-2">
                        Stap {{ k+1 }}
                        <textarea rows="5" cols="33" class="input-fields w-full min-h-28 max-h-64" v-model="instructions[k]"></textarea>
                    </div>
                </div>
            </div>

            <button type="button" class="dynamic-add-remove-button box-shadow mb-2" @click="addInstruction(k)">Voeg instructie toe</button><br>
            <button type="button" class="dynamic-add-remove-button box-shadow mb-5" @click="removeLatestInstruction(k)">Haal instructie weg</button><br>
            <button type="button" class="submit-button box-shadow w-full h-[45px] " @click="insertRecipe()">Submit</button>
        </form>
    </div>
</template>
  
<script>
import FirebaseService from "@/services/FirebaseService";

const fb = new FirebaseService();

export default {
    name: "AddRecipe",
    data() {
        return {
            validReceptNameInput: true,
            validReceptQuoteInput: true,
            validChefNameInput: true,
            validPrepTimeInput: true,
            validAmountInput: true,
            validMeasurementInput: true,
            validIngredientInput: true,
            validInstructionInput: true,
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
            },
            ingredients: [
            ],
            selectedIngredients: [
            ],
            measurements: [
            ],
            selectedTags: [
            ],
            tags: [
            ],
            instructions: [
                "",
            ],
          imageView: HTMLElement,
          inputFile: HTMLElement,
          dropArea: HTMLElement,
        }
    },
    methods: {
        uploadImage() {
          this.dropArea = document.getElementById("drop-area");
          this.imageView = document.getElementById("img-view");
          this.inputFile = document.getElementById("input-file");
          let imgLink = URL.createObjectURL(this.inputFile.files[0]);
          this.imageView.style.backgroundImage = `url(${imgLink})`;
          this.imageView.textContent = "";
          this.imageView.style.border = 0;
        },

        dragoverEvent(e){
          e.preventDefault();
        },

        dropEvent(e){
          e.preventDefault();
          this.inputFile = document.getElementById("input-file");
          this.inputFile.files = e.dataTransfer.files;
          this.uploadImage()
        },

        getMeasurementsFromFirestore() {
            fb.getMeasurements().then((data) => {
                for (var i = 0; i < data.length; i++) {
                    this.measurements.push({measurement: data.at(i)});
                }
            })
        },

        getTagsFromFirestore() {
            fb.getTags().then((data) => {
                for (var i = 0; i < data.length; i++) {
                    this.tags.push({tag: data.at(i)});
                }
            })
        },

        resetValidationVars() {
            this.validReceptNameInput = true;
            this.validReceptQuoteInput = true;

            this.validChefNameInput = true;
            this.validPrepTimeInput = true;

            this.validAmountInput = true;
            this.validMeasurementInput = true;
            this.validIngredientInput = true;

            this.validInstructionInput = true;
        },

        addSelectedIngredient(amount, measurement, ingredient) {
            this.resetValidationVars();
            if (!this.checkValidIngredientInput(amount, measurement, ingredient)) {
                return false;
            }

            this.ingredients.push(ingredient);
            this.selectedIngredients.push({
                amount: parseInt(amount),
                measurement: measurement,
                name: ingredient
            });
        },

        checkValidIngredientInput(amount, measurement, ingredient) {
            if (measurement == undefined || this.selectedIngredients.length >= 25) {
                this.validMeasurementInput = false;
            }

            if (amount == undefined || amount.match(/^[0-9]{1,6}([,.][0-9]{1,2})?$/) == null) {
                this.validAmountInput = false;
            }

            if (ingredient == undefined || ingredient.match(/^[A-Za-z]*$/) == null) {
                this.validIngredientInput = false;
            }

            if (!this.validAmountInput || !this.validMeasurementInput || !this.validIngredientInput) return false;
            return true;
        },

        removeIngredient(ingredientToRemove) {
            this.ingredients.splice(ingredientToRemove, 1);
            this.selectedIngredients.splice(ingredientToRemove, 1);
        },

        addSelectedTag(newTag) {
            if (newTag == undefined || this.selectedTags.length >= 5) return false;
            var exists = false;
            for (var i = 0; i < this.selectedTags.length; i++) {
                if (this.selectedTags.at(0).tag == newTag) exists = true;
                break;
            }
            if (exists) return false;
            this.selectedTags.push({tag: newTag});
        },

        removeSelectedTag(tagToRemove) {
            this.selectedTags.splice(tagToRemove, 1);
        },

        addInstruction() {
            if (this.instructions.length >= 20 ) return false; 
            this.instructions.push('');
        },

        removeLatestInstruction() {
            if (this.instructions.length <= 1 ) return false; 
            this.instructions.splice(-1, 1);
        },

        validateRecipeInput() {
            this.resetValidationVars();
            if (this.recipeName == undefined || this.recipeName == "") {
                this.validReceptNameInput = false;
            }

            if (this.chefName == undefined || this.chefName == "") {
                this.validChefNameInput = false;
            }

            if (this.recipeQuote == undefined || this.recipeQuote == "") {
                this.validReceptQuoteInput = false;
            }

            if (this.prepTime == undefined || this.prepTime == "" || typeof this.prepTime == "string") {
                this.validPrepTimeInput = false;
            }

            if (!this.validReceptNameInput || !this.validChefNameInput || !this.validReceptQuoteInput || !this.validPrepTimeInput) {
                return false;
            }

            return true;
        }, 

        insertRecipe() {
            var tags = [];
            for (var i = 0; i < this.selectedTags.length; i++) {
                tags.push(this.selectedTags.at(i).tag);
            }

            var instructionSteps = ""; 
            this.instructions.forEach((item) => {
                instructionSteps += item + "!@#$%";
            })

            if (!this.validateRecipeInput()) {
                return false;
            }

            this.localRecipe.title = this.recipeName;
            this.localRecipe.ingredients = this.selectedIngredients;
            this.localRecipe.description = this.recipeQuote
            this.localRecipe.rating = 0;
            this.localRecipe.owner = this.chefName

            if (this.recipeImage == undefined) {
                this.localRecipe.imageurl = "";
            } else {
                this.localRecipe.imageurl = this.recipeImage;
            }
            
            this.localRecipe.tags = tags;
            this.localRecipe.ingredientnames = this.ingredients;
            this.localRecipe.availableMeasurements = [];
            this.localRecipe.preparationtime = parseInt(this.prepTime);
            this.localRecipe.preparation = instructionSteps;
            this.localRecipe.comments = [];

            fb.addRecipe(this.localRecipe);
            this.$router.push('/recipes');
        },
    },

    created() {
        this.getMeasurementsFromFirestore();
        this.getTagsFromFirestore();
    }
};
</script>
  
<style>

    body {
        font-family: Work Sans, sans-serif;
    }

    .image-upload {
      width: 100%;
      display: flex;
      align-content: center;
      justify-content: center;
    }

    .image-upload-icon {
      width: 100px;
      margin: auto;
      padding-bottom: 20px;
    }

    #drop-area{
      width: 500px;
      height: 300px;
      padding: 30px;
      text-align: center;
      border-radius: 20px;
    }

    #img-view {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      border: 2px dashed #E4A428;
      background: rgba(255, 206, 112, 0.1);
      background-position: center;
      background-size: cover;
    }

    #img-view p {
      width: 220px;
      margin: auto;
    }

    #img-view img{
      margin-top: 25px;
    }

    #img-view span {
      display: block;
      font-size: 12px;
      color: #777;
      margin-top: 15px;
    }



  .upper-page-background {
    background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
    height: 368px;
  }

  .add-recipe-container {
    max-width: 1084px;
    margin: auto;
    margin-top: -184px;
    padding: 25px;
    background-color: white;
  }

  .title {
    font-weight: bold;
  }

  .input-fields {
    border-radius: 10px !important;
  }

  .errorInputFields {
    border: 1px red solid !important;
  }

  .recipe-info-item-container {
    display: flex;
    flex-direction: column;
  }

  .tag-container {
    display: flex;
    flex-wrap: wrap;
  }

  .tag-item {
    color: black;
    background: #f0f0f0;
    border-radius: 6px;
    font-family: Work Sans, sans-serif;
    padding: 10px;
    text-transform: capitalize;
    width: max-content;
    cursor: pointer;
  }

  .tag-item:hover {
    transform: scale(1.01);
    border: 1px red solid;
  }

  .dynamic-add-remove-button {
    background: linear-gradient(240deg, rgba(255, 206, 112, 0.70), rgba(0, 0, 0, 0.00)), #E4A428 !important;
    width: 100%;
    height: 45px;
    border-radius: 45px;
    color: #FFF;
  }

  .submit-button {
    background: #FFF !important;
    width: 100%;
    height: 45px;
    border-radius: 45px;
    border: solid 2px #E4A428;
  }

  .dynamic-add-remove-button:hover, .submit-button:hover {
    transform: scale(1.01);
  }

  .box-shadow {
    border-radius: 10px;
    box-shadow: 0 4px 7px 0 rgba(0,0,0,20%);
  }

  @media (min-width: 768px) { 
    .ingredient-input-container {
        display: flex;
    }
  }
</style>