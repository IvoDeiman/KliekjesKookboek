<template>
  <div class="first-segment">
    <div class="hero grid grid-flow-col auto-cols-max ms-[0%]">
      <div class="text_section me-10">
        <div class="company-name">
          Het Kliekjes Kookboek
        </div>
        <div class="company-slogan my-[24px]">
          Heb je kliekjes en weet je niet wat je ermee moet? Zoek nu een lekker recept op gebaseerd op je restanten en maak iets nieuws van iets ouds!
        </div>
        <search-component id="search-bar" placeholder="Vul hier je kliekjes in!" value="" label=""></search-component>
      </div>
      <img class="luminous non-interactable sizing--auto" src="../assets/big-mascotte.png" alt="">
    </div>
  </div>
  <section class="dotw">
    <div class="dotw--background">
      <div class="dotw--grid">
        <div>
          <img class="dotw--image" src="../assets/dotw_preview.png" alt="dotw-image">
        </div>
        <div class="dotw--description--cont">
          <h3 class="dotw--title"><highlight>Gerecht</highlight> van de week</h3>
          <h1 class="dotw--name">Overheerlijke gekruide kikkererwten
            en gegrilde courgette-taco's</h1>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="categories">
    <div class="categories--background">
      <img src="../assets/categoriesBackground.png">
    </div>
  </section>
</template>

<script>
import SearchComponent from "@/components/inputs/Search.vue";

export default {
  name: "HomePage",
  components: {SearchComponent},
  props: {
    msg: String
  }
}
</script>

<style>
highlight{
  color: #E4A428;
}

.first-segment {
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
  height: 100vh;
  top:0;
  justify-content: center;
  align-items: center;
  vertical-align: center;
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

.hero {
  justify-content: center;
  align-items: center;
  height: inherit;
}

.text_section{
  max-width: 540px;
}

#search-bar{
  width: 540px;
}

.luminous{
  mix-blend-mode: luminosity;
}

.sizing--auto{
  width: auto;
  height: 75vh;
}

.non-interactable{
  pointer-events: none;
}

section{
  max-height: 100vh;
  width: 100vw;
  height: 100vh;
}

.dotw {

}

.dotw--background {
  height: 100%;
  background-image: url(../assets/topEllipse.svg);
  background-repeat: no-repeat;
}

.dotw--grid {
  justify-content: center;
  align-items: center;
  display: inline-grid;
  grid-template-columns: 1fr 2fr;
  max-width: 1084px;
  height: inherit;
}

.dotw--image {
  height: 55vh;
  width: 80%;
}

.dotw--image img {
  background: center no-repeat;
}

.dotw--description--cont {
  max-width: 540px;
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
  line-height: 2.3rem;
}

.categories--background img{
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: inherit;
  width: 100vw;
}

</style>