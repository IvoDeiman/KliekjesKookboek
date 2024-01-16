<template>
  <div class="upper-page-background"></div>
  <div class="container-details sm:px-3 xl:px-[144px]">
    <div class="lg:grid lg:grid-cols-3 lg:gap-4">
      <div class="mb-8 lg:col-span-2 rounded-md box-shadow">
        <img src="../../assets/oosterse-maaltijd.jpg" alt="maaltijd" class="w-full rounded-t-md h-[304px]" style="object-fit: cover;">
        <h1 class="recipe-title">{{ title }}</h1>
        <h2 class="quote info-color"><i>"{{ description }}"</i></h2>
        <div class="info grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3">
          <div class="row">
            <img src="../../assets/clock-regular.svg" alt="" class="prep-time-icon"> 
            <label class="info-color" v-if="preparationtime == 1"> {{ preparationtime }} minuut</label>
            <label class="info-color" v-else> {{ preparationtime }} minuten</label>
          </div>
          <div class="row">
            <img src="../../assets/tag-solid.svg" alt="" class="recipe-tag-icon">
            <label class="info-color">
              {{ unpackTags() }}
            </label>
          </div>
          <div class="row">
            <star-rating :ratingVal="rating"/>
          </div>
        </div>
      </div>

      <div class="owner  mb-8 rounded-md box-shadow">
        <img src="../../assets/default-profile.jpg" alt="chef" class="rounded-full owner-image md w-[304px] h-[304px]">
        <label class="owner-name">{{ owner }}</label>
        <hr class="owner-seperator">
        <p class="chef-info info-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    
    <div class="ingredients box-shadow rounded-md mb-8">
      <div style="padding-bottom: 25px;">
        <label class="font-bold" style="font-size: 25px;">Ingredienten:</label>
      </div>
      <div class="">
        <ol>
          <li v-for="ingredient in ingredients" :key="ingredient" class="" style="">
            <input type="checkbox" class="ingredient-checkbox"> <span class="info-color ">{{ ingredient.amount }} {{ ingredient.measurement }} {{ ingredient.name }} </span>
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
          <li class="instruction-step">{{ preparation }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>
  
<script>
  import StarRating from "@/components/StarRatingViewOnly";
  import FirebaseService from "@/services/FirebaseService";

  const fb = new FirebaseService();
  export default {
    name: "RecipeDetailPage",
    components: { StarRating },
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
        fb.getRecipeById(this.$route.params.id).then((data) =>
        {
          this.title = this.$route.params.id;
          this.comments = data.comments;
          this.description = data.description;
          this.ingredients = data.ingredients;
          this.owner = data.owner;
          this.preparationtime = data.preparationtime;
          this.rating = data.rating;
          this.tags = data.tags;
          this.preparation = data.preparation;
        })
      },
      unpackTags() {
        return this.tags.toString().replace(/,/g, ', ');
      }
    },
    created() {
      this.setData();
    }
  }
</script>

<style scoped>
  .upper-page-background {
    background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
    height: 368px;
  }

  .container-details {
    top: -184px;
    position: relative;
    width: 100%;
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
    justify-items: center;
  }

  .info-color {
    color: #444444;
  }

  .prep-time-icon, .recipe-tag-icon {
    margin-bottom: 3px;
    margin-right: 3px;
    display: inline;
  }

  .owner {
    padding: 15px 0px 0px 0px;
    background: white;
  }

  .owner-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 5px solid #E4A428;
  }

  .owner-name {
    text-align: center;
    display: block;
    font-size: 22px;
    padding: 20px 15px 5px 15px;
  }

  .owner-seperator {
    margin: 0px 30px;
    opacity: 20%;
  }

  .chef-info {
    padding: 20px 50px;
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

  .box-shadow {
    border-radius: 10px;
    box-shadow: 0 4px 7px 0 rgba(0,0,0,20%);
  }
</style>