<template>
  <div class="recipe-preview--container" @click="goToInfo">
    <div class="image--container">
      <img src="@/assets/dotw-preview.jpg" alt="">
    </div>
    <div class="info--container">
      <div class="recipe-title">{{title}}</div>
      <div class="work-sans has-svg recipe-preptime">
        <img src="../assets/clock-regular.svg" alt="">
        {{preparationtime}} minuten
      </div>
      <div class="work-sans has-svg recipe-tags">
        <img src="../assets/tag-solid.svg" alt="">
        {{unpackTags()}}
      </div>
      <div class="work-sans has-svg recipe-rating">
        <star-rating :ratingVal="rating"/>
        <!-- <div class="work-sans recipe-rating-count">{{ratingCount}}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "@/components/StarRatingViewOnly";
export default {

  name: "RecipeComponent",
  components: {StarRating},
  props:['recipeData'],
  data() {
    return {
      title: String,
      description: String,
      tags: [],
      preparationtime:Number,
      rating: Number,
      image: Blob,
      unpackedTags:''
    }
  }, methods: {
    async setData() {
      this.title = this.recipeData.id;
      this.description = this.recipeData.description;
      this.tags = this.recipeData.tags;
      this.preparationtime = this.recipeData.preparationtime;
      this.rating = this.recipeData.rating;
      this.image = this.recipeData.image;
    },
    goToInfo() {
      this.$router.push({name:'RecipesDetails', params: {id:this.title}})
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
.recipe-preview--container{
  border-radius: 10px;
  box-shadow: 0 4px 7px 0 rgba(0,0,0,20%);
  height: 200px;
  max-height: 200px;
  width: 440vw;
  max-width: 440px;
  display: inline-grid;
  grid-template-columns: 1.125fr 2fr;
  background: white;
  cursor: pointer;
  transition: transform .1s;
  transform: scale(1.0);
}

.recipe-preview--container:hover{
  transform: scale(103%);
}

.image--container {
  height: 200px;
}

.image--container img {
  height: inherit;
  width: 150px;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0%, 90% 100%, 0% 100%);
  border-radius: 10px 0 0 10px;
}

.info--container {
  display: grid;
  padding: 15px 0;
}

.recipe-title {
  font-family: Bitter, sans-serif;
  font-weight: 600;
  font-size: 20px;
  text-transform: capitalize;
}

.work-sans {
  font-family: Work Sans, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #444444;
  height: 30px;
}

.recipe-preptime {
  margin-top: 55px;
}

.has-svg {
  display: table-cell;
}

.has-svg img {
  width: 21px;
  height: 21px;
  display: inline-block;
}

.recipe-tags {
  text-transform: capitalize;
}

.recipe-tags img {
  height: 25px;
}

.recipe-rating {
  display: flex;
}

</style>