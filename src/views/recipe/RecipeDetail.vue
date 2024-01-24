<template>
  <div class="upper-page-background"></div>
  <div class="container-details sm:px-3 xl:px-[144px]">
    <div class="container-centering">
    <div class="lg:grid lg:grid-cols-3 lg:gap-4">
      <div class="dish-container mb-8 lg:col-span-2 rounded-md box-shadow">
        <img :src="setImage()" alt="maaltijd" class="w-full rounded-t-md h-[304px]" style="object-fit: cover;">
        <h1 class="title-font recipe-title">{{ title }}</h1>
        <h2 class="title-font quote info-color"><i>"{{ description }}"</i></h2>
        <div class="info grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3">
          <div class="row">
            <img src="../../assets/clock-regular.svg" alt="" class="prep-time-icon">
            <label class="info-color casual-font" v-if="preparationtime === 1"> {{ preparationtime }} minuut</label>
            <label class="info-color casual-font" v-else> {{ preparationtime }} minuten</label>
          </div>
          <div class="row">
            <img src="../../assets/tag-solid.svg" alt="" class="recipe-tag-icon">
            <label class="info-color casual-font">
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
        <label class="owner-name recipe-title">{{ owner }}</label>
        <hr class="owner-seperator">
        <p class="chef-info casual-font info-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div class="button-centered">
          <primary-button-component value="hun recepten"></primary-button-component>
          <secondary-button-component value="volgen"></secondary-button-component>
        </div>
      </div>
    </div>
    <div class="ingredients box-shadow rounded-md mb-8">
      <div style="padding-bottom: 25px;">
        <label class="title-font container-title" style="font-size: 25px;">Ingrediënten</label>
      </div>
      <div class="">
        <ol>
          <li v-for="ingredient in ingredients" :key="ingredient" class="" style="">
            <input type="checkbox" class="ingredient-checkbox"> <span class="info-color casual-font recipe-ingredient-entry">{{ ingredient.amount }} {{ ingredient.measurement }} {{ ingredient.name }} </span>
          </li>
        </ol>
      </div>
      <p class="ingredient-disclaimer">Merknamen in de ingrediëntenlijst kunnen het gevolg zijn van een betaalde samenwerking.
        <br>Sommige linkjes op deze pagina kunnen affiliate links zijn. Lees meer: disclaimer</p>
    </div>
    <div class="instructions box-shadow rounded-md mb-8">
      <div style="padding-bottom: 25px;">
        <label class="title-font container-title" style="font-size: 25px;">Instructies</label>
      </div>
      <div class="instruction-grid">
        <ol>
          <li v-for="instruction in preparation" :key="instruction" class="instruction-step" style="">
            {{ instruction }}
          </li>
          <!-- <li class="instruction-step">{{ preparation }}</li> -->
        </ol>
        <div class="instruction-cta">
          Deel dit recept via:
          <ol>
            <li><a href="https://www.twitter.com/"><img src="@/assets/twitter-logo.svg" alt="">Twitter</a></li>
            <li><a href="https://www.pinterest.com/"><img src="@/assets/pinterest-logo.svg" alt="">Pinterest</a></li>
            <li><a href="https://www.facebook.com/"><img src="@/assets/facebook-logo.svg" alt="">Facebook</a></li>
            <li><a href="https://www.instagram.com/"><img src="@/assets/instagram-logo.svg" alt="">Instagram</a></li>
          </ol>
          <hr class="instruction-cta-separator">
          <ol>
            <li><a><img src="@/assets/star-solid.svg" alt="">Geef een review</a></li>
            <li><a><img src="@/assets/exclaimation.svg" alt="">Rapporteren</a></li>
          </ol>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import StarRating from "@/components/StarRatingViewOnly";
  import FirebaseService from "@/services/FirebaseService";
  import PrimaryButtonComponent from "@/components/buttons/PrimaryButton.vue";
  import SecondaryButtonComponent from "@/components/buttons/SecondaryButton.vue";
  import imgPlaceholder from "@/assets/recipe-placeholder-wide.png"

  const fb = new FirebaseService();
  export default {
    name: "RecipeDetailPage",
    components: {
      StarRating,
      PrimaryButtonComponent,
      SecondaryButtonComponent,
    },
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
        preparation: [],
        image: String
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

          var allInstructionSteps = data.preparation.split("!@#$%");
          if (allInstructionSteps.length > 1) {
            allInstructionSteps = allInstructionSteps.slice(0, -1);
          }          
          this.preparation = allInstructionSteps;
          this.image = data.imageurl;
        })
      },

      unpackTags() {
        return this.tags.toString().replace(/,/g, ', ');
      },
      
      setImage(){
        //Blame danny voor de pindakaas clause
        if(this.image == null || this.image === '' || this.image === 'pindakaas'){
          return imgPlaceholder;
        }
        return this.image;
      }
    },
    created() {
      this.setData();
    }
  }
</script>

<style scoped>

  .title-font{
    font-family: Bitter, sans-serif;
    font-weight: 600;
    text-transform: capitalize;
  }

  .casual-font {
    font-family: Work Sans, sans-serif;
    font-weight: 400;
  }

  .recipe-title{
    font-size: 35px;
  }

  .container-title{
    font-size: 22px;
  }

  .upper-page-background {
    background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
    height: 368px;
  }

  .container-details {
    display: flex;
    top: -184px;
    position: relative;
    width: 100%;
    max-width: 1500px;
    align-items: center;
    margin: auto;
  }

  .dish-container {
    background: white;
    max-width: 805px;
  }

  .recipe-title {
    font-family: Bitter, sans-serif;
    padding: 0 50px;
    margin-top: 10px;
    font-size: 35px;
    text-align: center;
    font-weight: bold;
  }

  .quote {
    font-size: 16px;
    text-align: center;
    font-style: italic;
    margin: 50px 0;
    font-weight: 300;
    text-transform: none;
  }

  .info {
    padding: 0 25px 25px 25px;
    justify-items: center;
    position: relative;
    bottom: 0;
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
    padding: 15px 0 30px;
    background: white;
    height: max-content;
  }

  .owner-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 5px solid #E4A428;
    height: 189px;
    width: 189px;
  }

  .owner-name {
    text-align: center;
    font-weight: 400;
    display: block;
    font-size: 22px;
    padding: 14px 15px 15px 15px;
    text-transform: uppercase;

  }

  .owner-seperator {
    margin: 0 30px;
    opacity: 20%;
  }

  .button-centered {
    margin: auto;
    width: max-content;
    justify-content: center;
    align-items: center;
  }

  .button-centered > button {
    width: 250px;
    margin-bottom: 14px;
  }

  .button-secondary{
    border-color: #E4A428;
    color: #E4A428;
  }

  .chef-info {
    margin: 20px auto;
    max-height: 120px;
    max-width: 70%;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .recipe-ingredient-entry {
    color: #444444;
    font-size: 14px;
    margin-bottom: 15px;
  }

  .ingredients {
    width: 100%;
    padding: 25px;
    background-color: white;
  }

  .ingredient-checkbox {
    margin-bottom: 3px;
    border-radius: 3px !important;
    color: #E4A428 !important;
  }

  .ingredient-disclaimer {
    font-family: Work Sans, sans-serif;
    font-size: 10px;
    color: #8F8B8B;
    margin-top: 15px;
  }

  .instructions {
    padding: 25px;
    background: white;
  }

  .instruction-grid {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
  }



  .instruction-step {
    margin-left: 35px;
    padding-bottom: 10px;
    list-style: o;
    max-width: 680px;
    font-family: Work Sans, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4rem;
  }

  .instruction-cta{
    background: #F0F0F0;
    border-radius: 15px;
    height: 275px;
    width: 270px;
    padding: 15px 30px 15px 30px;
    margin-left: 50px;
    font-family: Work Sans,sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #444444;
  }

  .instruction-cta-separator {
    opacity: 20%;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  .instruction-cta ol {
    margin-top: 15px;
  }

  .instruction-cta ol li {
    display: flex;
    margin: 10px;
    font-weight: 400;
  }

  .instruction-cta ol li a {
    display: flex;
  }

  .instruction-cta ol li a:hover, .instruction-cta ol li a:hover img{
    color: #E4A428;
  }

  .instruction-cta ol li img {
    width: 20px;
    max-height: 20px;
    margin-right: 5px;
  }

  li::marker {
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 35px;
    color: #444444;
  }

  .box-shadow {
    border-radius: 10px;
    box-shadow: 0 4px 7px 0 rgba(0,0,0,20%);
  }
</style>
