<template>
    <!--<h1 style="padding-top: 100px;">Recipe detail {{ id }}</h1>-->
    <div class="header h-[368px]">
      <div class="container-details sm:px-3 xl:px-[144px]">
        <div class="recipe-info lg:grid lg:grid-cols-3 lg:gap-4">
          <div class="recipe mb-8 lg:col-span-2 rounded-md box-shadow">
            <img src="../assets/oosterse-maaltijd.jpg" alt="maaltijd" class="w-full rounded-t-md h-[304px]" style="object-fit: cover;">
            <h1 class="recipe-title">{{ title }}</h1>
            <h2 class="quote"><i>{{ description }}</i></h2>
            <div class="grid info grid-rows-4">
              <div class="row">
                <label class="font-bold">Bereidingstijd: </label>
                <label>{{ preparationtime }}</label>
              </div>
              <div class="row">
                <label class="font-bold">Score: </label>
                <label>{{ rating }}</label>
              </div>
              <div class="row">
                <label class="font-bold">Tags: </label>
                <label></label>
              </div>
              <div class="row">
                <label v-for="tag in tags" :key="tag">
                  {{ tag }}, 
                </label>
              </div>
            </div>
          </div>

          <div class="owner  mb-8 rounded-md box-shadow">
            <img src="../assets/Chef1.jpg" alt="chef" class="rounded-full owner-image md w-[304px] h-[304px]">
            <label class="owner-name">{{ owner }}</label>
            <hr class="owner-seperator">
            <p class="chef-info">Werkt al 10 jaar bij restaurant de Harmonie in Sexbierum, waarvan 4 als kok. Hiervoor werkte hij als vakkenvuller bij de locale Albert Heijn</p>
          </div>
        </div>
        
        <div class="ingredients box-shadow rounded-md mb-8">
          <div style="padding-bottom: 25px;">
            <label class="font-bold" style="font-size: 25px;">Ingredienten:</label>
          </div>
          <div class="">
            <ol>
              <li v-for="ingredient in ingredients" :key="ingredient" class="" style="">
                <input type="checkbox" class="ingredient-checkbox"> {{ ingredient.name }} {{ ingredient.amount }} {{ ingredient.measurement }}
              </li>
            </ol>
          </div>
        </div>

        <div class="instructions box-shadow rounded-md mb-8">
          <div style="padding-bottom: 25px;">
            <label class="font-bold" style="font-size: 25px;">Instructies:</label>
          </div>
          <div class="">
            <ol>
              <!-- <li v-for="instruction in preparation" :key="instruction" class="instruction-step" style="">
                {{ instruction }}
              </li> -->
              <li class="instruction-step" style="">{{ preparation }}</li>
            </ol>
          </div>
        </div>
        
      </div>
    </div>
    
</template>
  
<script>
  import FirebaseService from "@/services/FirebaseService";

  const fb = new FirebaseService();
  export default {
    name: "RecipeDetailPage",
    data(){
      return {
        title: String,
        comments: [],
        description: String,
        ingredients: [],
        owner: String,
        preparationtime: Number,
        rating:Number,
        tags: [],
        preparation: String
      }
    },
    methods: {
      setData() {
        fb.getRecipeById('Koek').then((data) =>
        {
          this.title = "Koek";
          this.comments = data.comments;
          this.description = data.description;
          this.ingredients = data.ingredients;
          this.owner = data.owner;
          this.preparationtime = data.preparationtime;
          this.rating = data.rating;
          this.tags = data.tags;
          this.preparation = data.preparation;
        })

      }
    },
    created() {
      this.setData();
    }
  }
</script>

<style>
  .header {
    background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
  }

  .container-details {
    margin-top: 184px;
    position: absolute;
    width: 100%;
  }

  .recipe {
  }

  .recipe-title {
    padding: 0px 50px;
    margin-top: 10px;
    font-size: 35px;
    text-align: center;
    font-weight: bold;
  }

  .quote {
    font-size: 18px;
    text-align: center;
    font-weight: italic;
    margin: 50px 0px;
  }

  .info {
    padding: 0px 25px 25px 25px;
    text-align: center;
  }

  .owner {
    padding: 15px 0px 0px 0px;
    background: white;
  }

  .owner-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .owner-name {
    text-align: center;
    display: block;
    font-size: 22px;
    padding: 20px 15px;
  }

  .owner-seperator {
    margin: 0px 15px;
  }

  .chef-info {
    padding: 20px 35px;
  }

  .ingredients {
    width: 100%;
    padding: 25px;
  }

  .ingredient-checkbox {
    margin-bottom: 3px;
    border-radius: 3px !important;
    color: #E4A428 !important;
  }

  .instructions {
    padding: 25px;
  }

  .instruction-step {
    margin-left: 35px; 
    padding-bottom: 10px; 
    list-style: o;
  }

  li::marker {
    font-size: 2em;
    color: #444444;
  }

  @media (min-width: 1024px) {
    .custom-grid {
      display: grid;
    }
  }

  .box-shadow {
    box-shadow: 0px 3px 10px 0px #000;
  }
</style>