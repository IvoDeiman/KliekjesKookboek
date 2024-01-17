<template>
    <div class="upper-page-background"></div>
    <div class="add-recipe-container box-shadow">
        <form>
            <div class="">
                <span class="">Recept naam: </span>
                <input class="" type="text" v-model="recipeName">
            </div>

            <div class="">
                <span>Recept quote: </span>
                <input type="text" v-model="recipeQuote">
            </div>

            <div class="">
                <span>Chef naam: </span>
                <input type="text" v-model="chefName">
            </div>


            <div class="">
                <span>Bereidings tijd: </span>
                <input type="text" v-model="prepTime">
            </div>

            <div class="">
                <span>Ingrediënten: </span>
                <div>
                    <input type="text" id="amount" name="amount" placeholder="Hoeveelheid" v-model="amount"> 
                    <select name="measurements" v-model="selectedMeasurement">
                        <option :value='measurements.measurement' v-for="(measurements, k) in measurements" :key="k">
                            {{ measurements.measurement }}
                        </option>
                    </select>
                    <input type="text" id="ingredient" name="ingredient" placeholder="Ingrediënt" v-model="ingredient">
                    <button type="button" class="add-tag-button"  @click="addSelectedIngredient(amount, selectedMeasurement, ingredient)">Voeg ingredient toe</button>
                </div>
                <div v-for="(selectedIngredients, k) in selectedIngredients" :key="k">
                    {{ selectedIngredients.amount }} {{ selectedIngredients.measurement }} {{ selectedIngredients.name }}
                    <span @click="removeIngredient(k)">x</span>
                </div>
            </div>


            <div class="">
                <span>Tags: </span>
                <div>
                    <select name="ingredienten" v-model="selectedTag">
                        <option :value='tags.tag' v-for="(tags, k) in tags" :key="k">{{ tags.tag }}</option>
                    </select>
                    <button type="button" class="add-tag-button" @click="addSelectedTag(selectedTag)">Voeg tag toe</button>
                </div>
                <div v-for="(selectedTag, k) in selectedTags" :key="k">
                    {{ selectedTag.tag }}
                    <span @click="removeSelectedTag(k)">x</span>
                </div>
            </div>

            <span>Instructies: </span>
            <div class="instructions-container" >
                <div v-for="(instruction, k) in instructions" :key="k">
                    {{ k+1 }}
                    <textarea rows="5" cols="33" class="instruction-step"></textarea>
                </div>
            </div>

            <button type="button" class="add-instruction-button" @click="addInstruction(k)">Voeg instructie toe</button><br>
            <button type="button" class="add-instruction-button" @click="removeLatestInstruction(k)">Haal instructie weg</button><br>
            <button type="button" @click="insertRecipe()">Submit</button>
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
                {
                    instruction: ''
                },
                {
                    instruction: ''
                },
                {
                    instruction: ''
                }
            ]
        }
    },
    methods: {
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
        addSelectedIngredient(amount, measurement, ingredient) {
            this.ingredients.push(ingredient);
            this.selectedIngredients.push({
                amount: parseInt(amount),
                measurement: measurement,
                name: ingredient
            });
        },
        removeSelectedTag(tagToRemove) {
            this.selectedTags.splice(tagToRemove, 1);
        },
        removeIngredient(ingredientToRemove) {
            this.ingredients.splice(ingredientToRemove, 1);
            this.selectedIngredients.splice(ingredientToRemove, 1);
        },
        addInstruction() {
            if (this.instructions.length >= 20 ) return false; 
            this.instructions.push({instruction: ''});
        },
        removeLatestInstruction() {
            if (this.instructions.length <= 1 ) return false; 
            this.instructions.splice(-1, 1);
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
        insertRecipe() {
            var tags = [];
            for (var i = 0; i < this.selectedTags.length; i++) {
                tags.push(this.selectedTags.at(i).tag);
            }

            this.localRecipe.title = this.recipeName;
            this.localRecipe.ingredients = this.selectedIngredients;
            this.localRecipe.description = this.recipeQuote
            this.localRecipe.rating = 0;
            this.localRecipe.owner = this.chefName
            this.localRecipe.imageurl = "";
            this.localRecipe.tags = tags;
            this.localRecipe.ingredientnames = this.ingredients;
            this.localRecipe.preparationtime = parseInt(this.prepTime);
            this.localRecipe.preparation = this.instructions.at(0).instruction;
            this.localRecipe.comments = [];

            console.log(this.localRecipe);
            fb.addRecipe(this.localRecipe);
        },
    },
    created() {
        this.getMeasurementsFromFirestore()
        this.getTagsFromFirestore();
    }
};
</script>
  
<style>
  .upper-page-background {
    background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
    height: 368px;
  }

  .add-tag-button {
    background: #E4A428 !important;
  }

  .add-recipe-container {
    max-width: 1084px;
    margin: auto;
    margin-top: -184px;
    padding: 25px;
    background-color: white;
  }

  .instructions-container {

  }

  .instruction-step {
    width: 100%;
  }

  .add-instruction-button {
    background: #E4A428 !important;
  }

  .box-shadow {
    border-radius: 10px;
    box-shadow: 0 4px 7px 0 rgba(0,0,0,20%);
  }
</style>