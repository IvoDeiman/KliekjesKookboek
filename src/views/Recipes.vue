<template>
  <div id="first-segment" class="h-[925px]">
    <div class="hero grid grid-flow-col auto-cols-max ms-[0%]">
      <div class="filter-column absolute top-1/2 transform -translate-y-1/2">
        <div class="filter-box">
          <div class="filter-title">Filter 1</div>
          <div class="filter-subtext">Subtext for Filter 1</div>
        </div>
        <div class="filter-box">
          <div class="filter-title">Filter 2</div>
          <div class="filter-subtext">Subtext for Filter 2</div>
        </div>
        <div class="filter-box">
          <div class="filter-title">Filter 3</div>
          <div class="filter-subtext">Subtext for Filter 3</div>
        </div>
      </div>
      <div class="text_section pt-48 me-10 flex items-center">
        <search-component id="search-bar" placeholder="Kliekjes toevoegen" value="" label=""></search-component>
        <button class="verras-me">Verras me</button>
      </div>
    </div>
  </div>
</template>
<script>
import SearchComponent from "@/components/inputs/Search.vue";

export default {
  name: "RecipeList",
  components: {SearchComponent},
  props: {
    msg: String
  }
}
</script>

<style>
#search-screen {
  height: 100vh; 
}

.filter-column {
  width: 200px; 
  padding: 20px;
}

.filter-box {
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  border-radius: 10px;
  padding: 10px;
}

.filter-title {
  font-weight: bold;
  font-size: 18px;
}

.filter-subtext {
  font-size: 14px;
}

#first-segment {
  background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
  height: 990px;
  top:0;
}

#search-bar{
  width: 540px;
}

.verras-me {
  height: 60px;
  width: 200px;
  margin-left: 10px;
  background-color: rgba(255, 255, 255, 0.3); /* Semi-transparent white background */
  color: white; /* Text color */
  border: 2px solid white; /* White border */
  border-radius: 10px; /* Rounded corners */
  padding: 10px 20px; /* Adjust padding as needed */
  font-size: 16px; /* Adjust font size as needed */
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.verras-me:hover {
  background-color: rgba(255, 255, 255, 0.5); /* Lighter background on hover */
  border-color: rgba(255, 255, 255, 0.8); /* Lighter border on hover */
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