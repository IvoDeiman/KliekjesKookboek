<template>
  <div class="first-segment">
    <div class="hero grid grid-flow-col auto-cols-max ms-[0%]">
      <div class="text_section me-10">
        <div class="company-name">
          Het Kliekjes Kookboek
        </div>
        <div class="company-slogan my-[24px]">
          Heb je kliekjes over van voorgaande dagen? Of wil je graag een nieuw recept leren? Klik op de knop en ontdek wat de mogelijkheden zijn!
        </div>
        <router-link to="/recipes">
          <tertiary-button class="button--square" value="Ontdek het nu!" />
        </router-link>
      </div>
      <img class="hero--ralf non-interactable sizing--auto" src="../assets/big-mascotte.png" alt="">
    </div>
  </div>
  <section class="dotw sector">
    <div class="dotw--background">
      <div class="dotw-container">
        <div class="dotw--grid">
          <div>
            <img class="dotw--image" src="../assets/dotw-preview.jpg" alt="dotw-image">
          </div>
          <div class="dotw--description--cont">
            <h3 class="dotw--title"><span class="text-primary">Gerecht</span> van de week</h3>
            <h1 class="dotw--name">Overheerlijke gekruide kikkererwten en gegrilde courgette-taco's</h1>
            <div class="dotw--labelholder">
              <div class="dotw-label preptime"><img src="../assets/clock-regular.svg" alt=""> 40 minuten</div>
              <div class="dotw-label tags"><img src="../assets/tag-solid.svg" alt="">Hoofdgerecht, Mexicaans, Vegan</div>
              <div class="dotw-label score">
                <img src="../assets/star-solid.svg" alt="">
                <img src="../assets/star-solid.svg" alt="">
                <img src="../assets/star-solid.svg" alt="">
                <img src="../assets/star-half-stroke-regular.svg" alt="">
                <img src="../assets/star-regular.svg" alt="">
                (3.6K)
              </div>
              <div class="dotw-label uploader"><img src="../assets/circle-user-regular.svg" alt="">Chef Wim</div>
            </div>
            <router-link to="/recipes-details/Gekruide%20kikkererwten%20en%20gegrilde%20courgette-taco's" class="button-primary">Zie Recept</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="categories sector">
    <h1>Categorieën</h1>
    <carousel class="categories__carousel" :itemsToShow="4.2" :wrapAround="true" :transition="500" :autoplay="10000" pauseAutoplayOnHover="true">
      <Slide v-for="category in categories" :key="category.id">
        <div class="carousel__item">
          <img class="carousel__item-thumbnail" :src="getCategoryImage(category)" :alt="getCategoryTitle(category)">
          <h3 class="carousel__item-title">{{getCategoryTitle(category)}}</h3>
          <router-link :to="getCategoryLink(category)" class="button-secondary carousel__button">
            ontdek</router-link>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
  <section class="buyBook sector">
    <div class="buyBook__grid">
      <div>
        <h1 class="buyBook__title">Liever iets <span class="text-primary">fysieks</span>?</h1>
        <p class="buyBook__paragraph">Je kan nu ons kookboek kopen, gevuld met de
          beste recepten zoals beoordeeld door de
          gebruikers van het <span class="text-primary">Kliekjes Kookboek</span>! Dit prachtige boek zal ook zeker een leuk cadeau
          zijn voor mensen die niet zo van het internet
          zijn (of gewoon boeken nog leuk vinden). </p>
        <button class="button-primary">bestel nu</button>
      </div>
      <div class="buyBook__img"></div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import categoryBrazilImage from "@/assets/category-braziliaans.jpg";
import categoryItalyImage from "@/assets/category-italiaans.jpg";
import categoryKoreaImage from "@/assets/category-koreaans.jpg";
import categoryDutchImage from "@/assets/category-nederlands.png";
import categorySpainImage from "@/assets/category-spaans.jpg";
import categoryVietnamImage from "@/assets/category-vietnamees.jpg";
import TertiaryButton from "@/components/buttons/ThirdButton.vue";

export default {
  name: "HomePage",
  components: {
    TertiaryButton,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  props: {
    msg: String
  },
  methods: {
    getCategoryImage(category) {
      return category.image;
    },
    getCategoryTitle(category) {
      return category.title;
    },
    getCategoryLink(category) {
      return category.link;
    }
  },
  data() {
    return {
      categories: [
        {id: 1, image:categoryBrazilImage, title:"Braziliaans", link:"/recipes"},
        {id: 2, image:categoryItalyImage, title:"Italiaans", link:"/recipes"},
        {id: 3, image:categoryKoreaImage, title:"Koreaans", link:"/recipes"},
        {id: 4, image:categoryDutchImage, title:"Nederlands", link:"/recipes"},
        {id: 5, image:categorySpainImage, title:"Spaans", link:"/recipes"},
        {id: 6, image:categoryVietnamImage, title:"Vietnamees", link:"/recipes"}
      ]
    }
  }
}
</script>

<style>
html, body {
  max-width: 100%;
  overflow-x: hidden;
}

.first-segment {
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
  height: 100vh;
  top:0;
  justify-content: center;
  align-items: center;
  vertical-align: center;
}

.hero {
  justify-content: center;
  align-items: center;
  height: inherit;
}

.company-name {
  color: #000;
  width: 402px;
  font-family: Bitter,sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: bolder;
  line-height: 77px; /* 106.944% */
  letter-spacing: -1.44px;
}

.company-slogan {
  color: #FFF;
  max-width: inherit;
  font-family: Work Sans,sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px; /* 140% */
  letter-spacing: -1.25px;
}

.text_section{
  max-width: 540px;
}

#search-bar{
  width: 540px;
  font-family: Work Sans, sans-serif;
  font-weight: 400;
}

.hero--ralf{
  mix-blend-mode: luminosity;
}

.sizing--auto{
  width: auto;
  height: 55vh;
}

.non-interactable{
  pointer-events: none;
}


@media only screen and (max-width: 1000px){
  .hero--ralf{
    display: none;
  }
}

@media only screen and (max-width: 620px) {
  .hero{
    width: 80vw;
  }

  .company-name{
    width: 80vw;
    font-size: 50px;
  }
}


.sector{
  max-height: 90vh;
  height: 90vh;
  overflow: hidden;
}

/* Dish Of The Week Section */
.dotw--background {
  height: 100%;
  width: 100%;
  background: url(../assets/dotw-background.svg) no-repeat center;
  background-size: cover;
  -webkit-background-origin: border;
}

.dotw-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
}

.dotw--grid {
  justify-content: center;
  align-items: center;
  display: inline-grid;
  grid-template-columns:3fr 5fr ;
  max-width: 1084px;
  width: 1084px;
  height: inherit;
}

.dotw--image {
  display: flex;
  float: right;
  border-radius: 15px;
  box-shadow: 0 4px 10px 5px rgba(0,0,0,20%);
  height: 480px;
  max-height: 100%;
  width: auto;
  min-width: 100px;
  max-width: 450px;
  object-fit: cover;
}

.dotw--description--cont {
  max-width: 530px;
  margin-left: 50px;
}

.dotw--title{
  font-family: Bitter,sans-serif;
  font-size: 45px;
  font-weight: 200;
}

.dotw--name{
  margin-top: 10px;
  font-family: Bitter,sans-serif;
  font-size: 45px;
  font-weight: bold;
  line-height: 3.5rem;
}

.dotw--labelholder{
  margin: 50px 0 35px 5px;
  display: grid;
  grid-template-columns: 150px auto;
  grid-template-rows: auto;
  column-gap: 10px;
}

.dotw-label{
  color: #444444;
  display: flex;
  font-family: Work Sans, sans-serif;
  font-weight: 400;
}

.dotw-label img:last-child{
  margin-right: 7px;
}

.button-primary{
  display: flex;
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.70), rgba(0, 0, 0, 0.00)), #E4A428;
  color: #ffffff;
  font-family: Work Sans, sans-serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: .2rem;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 200px;
  height: 45px;
  border-radius: 45px;
  transition: transform, color, .1s;
}

.button-primary:hover {
  transform: scale(1.05);
}

.button-secondary {
  display: flex;
  font-family: Work Sans, sans-serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: .2rem;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;
  width: 200px;
  height: 45px;
  border: solid 2px white;
  border-radius: 45px;
  transition: transform, color, .1s;
}

.button-secondary:hover {
  color: #E4A428;
  border: solid 2px #E4A428;
  transform: scale(1.05);
}

.button--square {
  min-height: 65px;
  border-radius: 10px !important;
  width: 100%;
}

.button--square:hover {
  background: #ffffff;
  border: solid 2px #ffffff !important;
  transform: scale(1.0) !important;
}

/* Categories Section*/
.categories {
  background: url("../assets/categoriesBackground.png") no-repeat bottom;
  background-size: cover;
  width: 100%;
  height: 90vh;
}

.categories h1 {
  color: #ffffff;
  font-family: Bitter,sans-serif;
  font-weight: 600;
  font-size: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
  text-shadow: rgba(0,0,0,0.5) 1px 0 10px;
}

.categories__carousel {
  margin: 10vh auto auto;
  max-width: 1300px;
}

.carousel__item {
  background: #1d1d1d;
  height: 38vh;
  max-width: 300px;
  width: 20vw;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.carousel__item-thumbnail {
  border-radius: 15px 15px 0 0;
  height: 15vh;
  width: 100%;
  background: no-repeat center;
  object-fit: cover;
  -webkit-background-origin: border;
}

.carousel__item-title {
  color: white;
  font-family: Work Sans, sans-serif;
  font-weight: 400;
  font-size: 25px;
  padding-top: 20px;
}

.carousel__button {
  margin: auto auto 3vh;
  max-width: 200px;
  min-width: 120px;
  width: 15vw;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide, .carousel__slide--active ~ .carousel__slide {
  transform: scale(0.9);
}

.carousel__slide ~ .carousel__slide--prev, .carousel__slide--active ~ .carousel__slide--next {
  transform: scale(0.95);
}

.carousel__slide--active {
  transform: scale(1);
  border-radius: 15px;
}

.carousel__pagination {
  display: flex;
  margin: 5vh auto auto;
  background: rgba(255,255,255,0.1);
  border-radius: 45px;
  padding: 3px;
  justify-content: center;
  align-items: center;
  width: max-content;
}

.carousel__pagination-button::after{
  background: white;
  height: 12px;
  width: 12px;
  border-radius: 90px;
  transition: transform, color, .3s;
  transform: scale(0.9);
}

.carousel__pagination-button:hover::after{
  background: #E4A428;
}

.carousel__pagination-button--active::after{
  background: #E4A428;
  transform: scale(1.1);
}

.carousel__next, .carousel__prev{
  background-color: #E4A428 !important;
  border-radius: 90px;
  transition: transform .3s;
  transform: scale(1.0);
}

.carousel__next:hover, .carousel__prev:hover {
  transform: scale(1.3);
}

.carousel__icon {
  fill:white;
}

/* buyBook section */
.buyBook {
  background: rgba(228,164,40,0.2);
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
}

.buyBook__grid {
  max-width: 1084px;
  width: 1084px;
  display: inline-grid;
  grid-template-columns: 3fr 3fr;
}

.buyBook__title {
  font-family: Bitter, sans-serif;
  font-size: 53px;
  font-weight: 600;
}

.buyBook__paragraph {
  font-family: Work Sans, sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.01rem;
  padding-bottom: 40px;
  padding-right: 80px;
  padding-top: 20px;
}

.buyBook__img {
  background: url("../assets/cookbook.jpg") no-repeat center;
  background-size: cover;
  border-radius: 45px;
  height: 100%;
  max-height: 500px;
  width: 100%;
  max-width: 30vw;
  align-self: center;
}
</style>