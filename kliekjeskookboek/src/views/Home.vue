<template>
  <div id="first-segment" class="h-[925px]">
    <div class="hero grid grid-flow-col auto-cols-max ms-[0%]">
      <div class="text_section pt-48 me-10">
        <div class="company-name">
          Het Kliekjes Kookboek
        </div>
        <div class="company-slogan my-[24px]">
          Heb je kliekjes en weet je niet wat je ermee moet? Zoek nu een lekker recept op gebaseerd op je restanten en maak iets nieuws van iets ouds!
        </div>
        <search-component id="search-bar" placeholder="Vul hier je kliekjes in!" value="" label=""></search-component>
      </div>
      <img class="pt-48 luminous" src="../assets/big-mascotte.png" alt="">
    </div>
  </div>

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
#first-segment {
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
  height: 100vh;
  top:0;
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
  max-height: 100vh;
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

</style>