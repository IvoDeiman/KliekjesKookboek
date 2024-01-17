<template>
    <div class="upper-page-background"></div>
    <div class="add-recipe-container box-shadow">
        <form>
            <div class="">
                <span class="">Recept naam: </span>
                <input class="" type="text">
            </div>

            <div class="">
                <span>Recept quote: </span>
                <input type="text">
            </div>

            <div class="">
                <span>Chef naam: </span>
                <input type="text">
            </div>


            <div class="">
                <span>Bereidings tijd: </span>
                <input type="text"> 
            </div>


            <div class="">
                <span>Ingrediënten: </span>
                <div v-for="(selectedTag, k) in selectedTags" :key="k">
                    {{ selectedTag.tag }}
                    <span @click="removeSelectedTag(k)">x</span>
                </div>
                <div>
                    <select name="ingredienten" v-model="selectedTag">
                        <option :value='tags.tag' v-for="(tags, k) in tags" :key="k">{{ tags.tag }}</option>
                    </select>
                    <button type="button" class="add-tag-button" @click="addSelectedTag(selectedTag)">Voeg tag toe</button>
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
            <button type="submit">Submit</button>
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
        removeSelectedTag(tagToRemove) {
            this.selectedTags.splice(tagToRemove, 1);
        },
        addInstruction() {
            if (this.instructions.length >= 20 ) return false; 
            this.instructions.push({instruction: ''});
        },
        removeLatestInstruction() {
            if (this.instructions.length <= 1 ) return false; 
            this.instructions.splice(-1, 1);
        },
        getTagsFromFirestore() {
            fb.getTags().then((data) => {
                for (var i = 0; i < data.length; i++) {
                    this.tags.push({tag: data.at(i)});
                }
            })
        },
    },
    created() {
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